import json
import os
from flask import Flask, request, jsonify, session
from flask_pymongo import PyMongo
from werkzeug.security import generate_password_hash, check_password_hash
from flask_cors import CORS
from google import genai  # Modern Gemini SDK (2026)

app = Flask(__name__)
app.secret_key = os.environ.get('SECRET_KEY', 'any_random_string_for_local')
app.config['MONGO_URI'] = os.environ.get('MONGO_URI', 'mongodb+srv://akarshjaiswal01:Akarsh123@linkedinanalyzer.6ysn5qy.mongodb.net/?appName=LinkedinAnalyzer')
mongo = PyMongo(app)
CORS(app)  # Frontend/Backend connection ke liye zaroori [cite: 4]

# Gemini Client Setup
# Yahan apni asli API Key paste karein
api_key = os.environ.get("GEMINI_API_KEY", "AIzaSyD4yQNY2BSAXMWzK1WG2VAdeY6sMkDvO8o")
client = genai.Client(api_key=api_key)

users = mongo.db.users

# ------------- HOME ROUTE (Testing ke liye upar rakha hai) -----------------
@app.route('/')
def home():
    return "Backend is Running Successfully on Render!"

# ------------- SIGNUP API -----------------
@app.route('/api/signup', methods=['POST'])
def signup():
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

# ------------- LOGIN API -------------------
@app.route('/api/login', methods=['POST'])
def login():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')

    user = users.find_one({'email': email})
    if user and check_password_hash(user['password'], password):
        session['user'] = {'name': user['name'], 'email': user['email']}
        return jsonify({'message': 'Login successful', 'user': session['user']}), 200
    else:
        return jsonify({'error': 'Invalid email or password'}), 401

# ------------- LINKEDIN ANALYSIS API (AI Score & JSON) -----------------
@app.route('/api/analyze', methods=['POST'])
def analyze():
    data = request.get_json()
    profile_text = data.get('profile_text')

    if not profile_text:
        return jsonify({'error': 'Profile data missing'}), 400

    # Prompt updated for Score, Problems, and Sections
    structured_prompt = f"""
    Analyze the following LinkedIn profile and return the response ONLY in JSON format.
    
    1. Calculate 'score_before' (0-100) based on current quality.
    2. Calculate 'score_after' (0-100) potential quality after fixes.
    3. Provide exactly 5 specific 'problems'.
    4. Provide exactly 5 specific 'suggestions'.
    5. Provide 'enhanced_headline', 'enhanced_about', 'enhanced_skills', and 'enhanced_experience'.

    JSON Structure:
    {{
      "score_before": number,
      "score_after": number,
      "problems": ["string"],
      "suggestions": ["string"],
      "enhanced_headline": "string",
      "enhanced_about": "string",
      "enhanced_skills": "string",
      "enhanced_experience": "string"
    }}

    Profile Data:
    {profile_text}
    """

    try:
        # Gemini 2.5 Flash call with JSON config
        response = client.models.generate_content(
            model="gemini-2.5-flash",
            contents=structured_prompt,
            config={'response_mime_type': 'application/json'}
        )
        
        # AI response ko JSON mein convert karna
        ai_data = json.loads(response.text)
        return jsonify(ai_data), 200
    
    except Exception as e:
        return jsonify({'error': str(e)}), 500

# ------------- LOGOUT API -------------------
@app.route('/api/logout', methods=['POST'])
def logout():
    session.pop('user', None)
    return jsonify({'message': 'Logged out successfully'}), 200

# ------------- SERVER START (Eshse PORT fix ho jayega) -------------------
if __name__ == "__main__":
    # Render hamesha apna PORT variable khud deta hai
    port = int(os.environ.get("PORT", 5000))
    app.run(host='0.0.0.0', port=port)