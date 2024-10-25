from pymongo import MongoClient
import urllib
from flask import Flask, request
from flask_cors import CORS
import json
import hashlib
import string
import jwt


passwd = '8937#snsvvpKKt##8'
client = MongoClient(f'mongodb://swaperz:{urllib.parse.quote(passwd)}@127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&authSource=swaperz&appName=mongosh+1.5.0')
private_key = "MIICWwIBAAKBgH6F7rrAdGPbzOjIg0A2T8giaNQX9cA52OGvwojmPCbl7cq4UeBbL1AtdHK7xqACEyYu8ymQWydVoYv4RRUxtNLbOVbY7s8/v0tRo1itMZwFt6f0S2/Mr/odTWcpXsV8H5BVs55AGfxDHcd5EtY66V5bCZEBlETiOJ4lRLkidAgMBAAECYBqCjhWPtyNoPdxFjSiyaIO1CeieJHFHcNj65nggQ5jD4wnvimpE1sSlryMM0gbswF3nBvidwFeyy8VD6ReqfIUrb/dR9UaeCufH1sCBdGjDFozTIsW6AVfghW4l3lGdACCoMa2Mrizar0oIV73KsrzypE41dcm9gkpFRyje5QJBANiLNzJ57KiBZgXBJ5aC8l2LfBPugyO1ILe3wNhStGzBLx2pZkPq6IYQqeYNDr5GbTfVLs0kQhXEKXKR2ycCQQCVk6nW5PwHGWQ4TJR4qGiq6J0T5lAvE7KMau4jJ5E4J/Nkby57z6gNQGff9BIhx5XSiq4Y3Awjjwlhoq6ibAkAeOD95wd4vHe/YciGmNZwRRfgI6A5G2P3f6tK0O/xBXzHzO5CqDPPEeBEBKp8D2QKmKuxYVBAynWzDUmudAkAtTd5hlXrqIssajWGHiwrpDyUeWvL9oFbn9KcoPnLohr3M62Pird2iYldX0WmqZb9gefG/cpRgenZOjUFAkEAmLmLrd1FWA2u4wqlybIUMm07c8NBV5lqt9zwo8JGnY8cbLmFA92rDaZZ6YOmcRUhi2Q46ONQKxbXk7DuH78g"

user_col = client['swaperz']['users']

app = Flask(__name__)
CORS(app)
@app.route('/register', methods=['POST'])
def register():
    try:
        data = request.data.decode("utf-8")
        s=json.loads(data)
        ehash = hashlib.md5(s['email'].encode('utf-8')).hexdigest()
        # s=jwt.decode(s['res'],private_key,algorithms=["HS256"])
        # print(s)
        print(ehash)
        uid = ehash
        e = user_col.find_one({'uid':uid})
        if e == None:
            s['uid'] = ehash
            s['password'] = hashlib.md5(s['password'].encode('utf-8')).hexdigest()
            user_col.insert_one(s)
        else:
            return 'exists'
        return 'ok'
    except:
        return '505'

@app.route('/login', methods=['POST'])
def login():
    try:
        data = request.data.decode("utf-8")
        s=json.loads(data)
        ehash = hashlib.md5(s['email'].encode('utf-8')).hexdigest()
        uid = ehash
        e = user_col.find_one({'uid':uid})
        if e != None and e['password'] == hashlib.md5(s['password'].encode('utf-8')).hexdigest():
            return jwt.encode({'email':s['email'],'uid':ehash},private_key)
        else:
            return 'no'
    except:
        return '505'


app.run(host = '0.0.0.0', port=4242,debug=True)

