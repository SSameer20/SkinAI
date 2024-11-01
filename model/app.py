from flask import Flask, render_template, send_file
import model.gui as gui
import io
import datetime

app = Flask(__name__)

@app.get("/")
def server_run():
    uptime = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    return render_template("index.html", uptime=uptime)

@app.get("/image/generate")
def gen():
    # Create a BytesIO stream and save the image to it
    data = io.BytesIO()
    image = gui.generateImage()
    image.save(data, format="JPEG")
    data.seek(0)  # Move to the beginning of the BytesIO stream
    return send_file(data, mimetype="image/jpeg")

if __name__ == "__main__":
    app.run(debug=True)
