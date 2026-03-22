import json
import os
from flask import Flask, request, jsonify, session
from flask_pymongo import PyMongo
from werkzeug.security import generate_password_hash, check_password_hash
from flask_cors import CORS
from google import genai

app = Flask(__name__)
app.secret_key = os.environ.get('SECRET_KEY', 'any_random_string_for_local')

# MongoDB Configuration
app.config["MONGO_URI"] = os.environ.get("MONGO_URI")
mongo = PyMongo(app)
CORS(app)

# Global variable for users
db = None
users = None

# Database connection logic
with app.app_context():
    try:
        db = mongo.db
        if db is not None:
            users = db.users
            print("✅ MongoDB Connected Successfully!")
        else:
            print("❌ MongoDB connection failed - Check your URI in Render settings")
    except Exception as e:
        print(f"❌ Connection Error: {e}")

# Gemini Client Setup
api_key = os.environ.get("GEMINI_API_KEY", "AIzaSyD4yQNY2BSAXMWzK1WG2VAdeY6sMkDvO8o")
client = genai.Client(api_key=api_key)

# ------------- ROUTES -----------------

@app.route('/')
def home():
    return "Backend is Running Successfully on Render!"

@app.route('/api/signup', methods=['POST'])
def signup():
    if users is None: return jsonify({'error': 'Database not connected'}), 500
    data = request.get_json()
    name, email, password = data.get('name'), data.get('email'), data.get('password')
    if users.find_one({'email': email}): return jsonify({'error': 'Email already exists'}), 400
    users.insert_one({'name': name, 'email': email, 'password': generate_password_hash(password)})
    return jsonify({'message': 'Signup successful'}), 201

@app.route('/api/login', methods=['POST'])
def login():
    if users is None: return jsonify({'error': 'Database not connected'}), 500
    data = request.get_json()
    email, password = data.get('email'), data.get('password')
    user = users.find_one({'email': email})
    if user and check_password_hash(user['password'], password):
        session['user'] = {'name': user['name'], 'email': user['email']}
        return jsonify({'message': 'Login successful', 'user': session['user']}), 200
    return jsonify({'error': 'Invalid email or password'}), 401

@app.route('/api/analyze', methods=['POST'])
def analyze():
    data = request.get_json()
    profile_text = data.get('profile_text')
    if not profile_text: return jsonify({'error': 'Profile data missing'}), 400
    
    structured_prompt = f"Analyze this LinkedIn profile and return JSON: {profile_text}"
    try:
        response = client.models.generate_content(
            model="gemini-2.5-flash",
            contents=structured_prompt,
            config={'response_mime_type': 'application/json'}
        )
        return jsonify(json.loads(response.text)), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/test-db')
def test_db():
    if users is None: return jsonify({"error": "Database not initialized"}), 500
    try:
        return jsonify({"message": "MongoDB Connected!", "user_count": users.count_documents({})}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500

# ------------- START SERVER -------------
if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host='0.0.0.0', port=port)