from flask import Flask, render_template, jsonify
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
    try:
            result = predict_disease(image_path)
            if result:
                return jsonify(result)
            else:
                return jsonify({"error": "Prediction failed, no result returned."}), 500
    except Exception as e:
            # Handle any other errors
            print(f"Error during prediction: {e}")
            return jsonify({"error": str(e)}), 500

    

if __name__ == "__main__":
    app.run(debug=True)
