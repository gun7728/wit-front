from flask import Flask

app = Flask(__name__)


@app.route("/python")
def hello_world():
  return "<p>hello, world!</p>"
