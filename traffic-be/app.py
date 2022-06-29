from flask import Flask, redirect, render_template, request, jsonify, send_from_directory

app = Flask(__name__)

@app.route('/test', methods=['GET'])
def test():
    return 'test'


if __name__ == '__main__':
    app.run(host='127.0.0.1', port=20000)