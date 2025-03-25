from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

pessoas = []
next_pessoa_id = 1

@app.route('/pessoa', methods=['POST'])
def create_pessoa():
    global next_pessoa_id
    pessoa = request.get_json()
    pessoa['id'] = next_pessoa_id
    next_pessoa_id += 1
    pessoas.append(pessoa)
    return jsonify(pessoa), 201

@app.route('/pessoa', methods=['GET'])
def get_all_pessoas():
    return jsonify(pessoas)

if __name__ == '__main__':
    app.run(debug=True)