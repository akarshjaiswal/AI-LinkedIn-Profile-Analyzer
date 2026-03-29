import json
import os
from flask import Flask, request, jsonify, session
from flask_pymongo import PyMongo
from werkzeug.security import generate_password_hash, check_password_hash
from flask_cors import CORS
from google import genai 

app = Flask(__name__)

# --- CONFIGURATION ---
# Render/Local ke liye Secret Key
app.secret_key = os.environ.get('SECRET_KEY', 'any_random_string_for_local')

# MongoDB URI (Render Environment Variables se uthayega)
app.config["MONGO_URI"] = os.environ.get("MONGO_URI")

# Flask-CORS: Frontend aur Backend ko connect karne ke liye
CORS(app)

# --- MONGODB SETUP ---
mongo = PyMongo(app)
db = None
users = None

# Database connection ko initialize aur check karne ke liye safety block
with app.app_context():
    try:
        db = mongo.db
        if db is not None:
            users = db.users
            print("✅ MongoDB Connected Successfully!")
        else:
            print("❌ MongoDB Connection Failed - Check MONGO_URI in Render Settings")
    except Exception as e:
        print(f"❌ MongoDB Error: {e}")

# --- GEMINI AI SETUP ---
# API Key Render ke Environment Variables se aayegi
api_key = os.environ.get("GEMINI_API_KEY")
client = genai.Client(api_key=api_key)


# ------------------- API ROUTES  -------------------

#1. HOME ROUTE (Testing ke liye)
@app.route('/')
def home():
    return "<h1>Backend is Running Successfully on Render!</h1><p>Database status check: /test-db</p>"

# 2. DATABASE TEST ROUTE 
@app.route('/test-db')
def test_db():
    if users is None:
        return jsonify({"error": "Database not initialized. Check your MONGO_URI"}), 500
    try:
        count = users.count_documents({})
        return jsonify({
            "status": "success",
            "message": "MongoDB Connected!",
            "total_users_in_db": count
        }), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500

# 3. SIGNUP API
@app.route('/api/signup', methods=['POST'])
def signup():
    if users is None:
        return jsonify({'error': 'Database connection missing'}), 500
    
    data = request.get_json()
    name = data.get('name')
    email = data.get('email')
    password = data.get('password')

    if users.find_one({'email': email}):
        return jsonify({'error': 'Email already exists'}), 400

    hashed_password = generate_password_hash(password)
    users.insert_one({
        'name': name,
        'email': email,
        'password': hashed_password
    })
    return jsonify({'message': 'Signup successful'}), 201

# 4. LOGIN API
@app.route('/api/login', methods=['POST'])
def login():
    if users is None:
        return jsonify({'error': 'Database connection missing'}), 500

    data = request.get_json()
    email = data.get('email')
    password = data.get('password')

    user = users.find_one({'email': email})
    if user and check_password_hash(user['password'], password):
        session['user'] = {'name': user['name'], 'email': user['email']}
        return jsonify({'message': 'Login successful', 'user': session['user']}), 200
    else:
        return jsonify({'error': 'Invalid email or password'}), 401

# 5. LINKEDIN ANALYSIS API (Gemini AI Integration)
@app.route('/api/analyze', methods=['POST'])
def analyze():
    data = request.get_json()
    profile_text = data.get('profile_text')

    if not profile_text:
        return jsonify({'error': 'Profile data missing'}), 400

    # AI Prompt for structured JSON response
    structured_prompt = f"""
    Analyze the following LinkedIn profile and return the response ONLY in JSON format.
    1. Calculate 'score_before' (0-100).
    2. Calculate 'score_after' (0-100).
    3. Provide 5 'problems' and 5 'suggestions'.
    4. Provide 'enhanced_headline', 'enhanced_about', 'enhanced_skills', and 'enhanced_experience'.

    Profile Data: {profile_text}
    """

    try:
        # Gemini  Flash call
        response = client.models.generate_content(
            model="gemini-2.5-flash",
            contents=structured_prompt,
            config={'response_mime_type': 'application/json'}
        )
        ai_data = json.loads(response.text)
        return jsonify(ai_data), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500

# 6. LOGOUT API
@app.route('/api/logout', methods=['POST'])
def logout():
    session.pop('user', None)
    return jsonify({'message': 'Logged out successfully'}), 200


# ------------------- SERVER START  -------------------
if __name__ == "__main__":
    # Render PORT dynamicly set karega
    port = int(os.environ.get("PORT", 5000))
    app.run(host='0.0.0.0', port=port)