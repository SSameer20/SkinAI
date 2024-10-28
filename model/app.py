from flask import Flask, render_template
import datetime



app = Flask(__name__)

@app.get("/")
def server_run():
    uptime = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    return render_template("index.html",uptime=uptime)



if __name__ == "__main__":
    app.run(debug=True)