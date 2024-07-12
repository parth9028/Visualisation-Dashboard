import certifi
from flask import Flask, jsonify
from pymongo import MongoClient
from pymongo.errors import ConnectionFailure

app = Flask(__name__)
mongo_uri = 'mongodb+srv://parthsadigale:parth1234@cluster0.6pskba8.mongodb.net/dashboard?retryWrites=true&w=majority'

try:
    client = MongoClient(mongo_uri, tlsCAFile=certifi.where())
    client.admin.command('ping')  
    print("Connected to MongoDB")
except ConnectionFailure as e:
    print(f"Could not connect to MongoDB: {e}")

# MongoDB connection setup
db = client.dashboard
collection = db.db

@app.route('/api/data', methods=['GET'])
def get_data():
    try:
        data = list(collection.find({}, {'_id': 0}))  
        return jsonify(data)
    except Exception as e:
        print(f"Error retrieving data: {e}")
        return jsonify({"error": "Error retrieving data"}), 500

if __name__ == '__main__':
    app.run(debug=True)