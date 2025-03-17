from flask import Flask, request, jsonify
import tensorflow as tf
import numpy as np
from PIL import Image
import matplotlib.pyplot as plt # type: ignore

# Load the saved model
model = tf.keras.models.load_model("./model/saved_models/model_v_0_1_3.keras")

# Class names
class_names = ['Acne and Rosacea Photos', 'Actinic Keratosis Basal Cell Carcinoma and other Malignant Lesions', 'Atopic Dermatitis Photos', 'Bullous Disease Photos', 'Cellulitis Impetigo and other Bacterial Infections', 'Eczema Photos', 'Exanthems and Drug Eruptions', 'Hair Loss Photos Alopecia and other Hair Diseases', 'Herpes HPV and other STDs Photos', 'Light Diseases and Disorders of Pigmentation', 'Lupus and other Connective Tissue diseases', 'Melanoma Skin Cancer Nevi and Moles', 'Nail Fungus and other Nail Disease', 'Poison Ivy Photos and other Contact Dermatitis', 'Psoriasis pictures Lichen Planus and related diseases', 'Scabies Lyme Disease and other Infestations and Bites', 'Seborrheic Keratoses and other Benign Tumors', 'Systemic Disease', 'Tinea Ringworm Candidiasis and other Fungal Infections', 'Urticaria Hives', 'Vascular Tumors', 'Vasculitis Photos', 'Warts Molluscum and other Viral Infections']

app = Flask(__name__)

def preprocess_image(image):
    image = image.resize((128, 128)) 
    image = np.array(image) / 255.0  
    image = np.expand_dims(image, axis=0) 
    return image

@app.route('/predict', methods=['POST'])
def predict():
    if 'file' not in request.files:
        return jsonify({'error': 'No file uploaded'}), 400

    file = request.files['file']
    image = Image.open(file)
    processed_image = preprocess_image(image)

    logits = model.predict(processed_image)
    predictions = tf.nn.softmax(logits).numpy()
    predicted_class = class_names[np.argmax(predictions)]
    confidence = float(np.max(predictions))

    return jsonify({'class': predicted_class, 'confidence': confidence})

if __name__ == "__main__":
    app.run(debug=True)
