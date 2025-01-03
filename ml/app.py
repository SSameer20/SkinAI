from flask import Flask, render_template
import datetime
from model.predect_disease import predict_disease

app = Flask(__name__)

@app.get("/")
def index():
    uptime = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    return render_template("index.html", uptime=uptime)

@app.get("/test")
def get_model_name():
    image_path = 'model/SampleImage.jpg'
    result = predict_disease(image_path)
    return result

    

if __name__ == "__main__":
    app.run(debug=True)
