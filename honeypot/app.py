from flask import Flask, request
app = Flask(__name__)

@app.route('/login', methods=['POST'])
def fake_login():
    print(f"Acceso sospechoso desde {request.remote_addr}")
    return "Acceso autorizado", 200

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=4001)
