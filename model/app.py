from flask import Flask, render_template
import datetime
from files import CNN

app = Flask(__name__)

@app.get("/")
def index():
    uptime = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    return render_template("index.html", uptime=uptime)

@app.get("/test")
def get_model_name():
   return CNN.model("Sameer")

if __name__ == "__main__":
    app.run(debug=True)
