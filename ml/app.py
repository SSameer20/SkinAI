from flask import Flask, request, jsonify
from flask_cors import CORS
from PIL import Image
import numpy as np
import tensorflow as tf
import logging
import os


# Disable TensorFlow GPU logs (optional)
os.environ['TF_CPP_MIN_LOG_LEVEL'] = '3'
logging.getLogger('tensorflow').setLevel(logging.FATAL)

# Initialize Flask app
app = Flask(__name__)
CORS(app)

# Load the model once at startup

# Define class names
class_names = [
    'Acne and Rosacea Photos',
    'Actinic Keratosis Basal Cell Carcinoma and other Malignant Lesions',
    'Atopic Dermatitis Photos',
    'Bullous Disease Photos',
    'Cellulitis Impetigo and other Bacterial Infections',
    'Eczema Photos',
    'Exanthems and Drug Eruptions',
    'Hair Loss Photos Alopecia and other Hair Diseases',
    'Herpes HPV and other STDs Photos',
    'Light Diseases and Disorders of Pigmentation',
    'Lupus and other Connective Tissue diseases',
    'Melanoma Skin Cancer Nevi and Moles',
    'Nail Fungus and other Nail Disease',
    'Poison Ivy Photos and other Contact Dermatitis',
    'Psoriasis pictures Lichen Planus and related diseases',
    'Scabies Lyme Disease and other Infestations and Bites',
    'Seborrheic Keratoses and other Benign Tumors',
    'Systemic Disease',
    'Tinea Ringworm Candidiasis and other Fungal Infections',
    'Urticaria Hives',
    'Vascular Tumors',
    'Vasculitis Photos',
    'Warts Molluscum and other Viral Infections'
]

def get_skin_condition_info(class_name):
    """Returns description and precautions for a given skin condition class name"""
    
    condition_info = {
        'Acne and Rosacea Photos': {
            'description': 'Acne is a skin condition that occurs when hair follicles become plugged with oil and dead skin cells. Rosacea is a chronic skin condition that causes redness and visible blood vessels in the face.',
            'precautions': [
                'Keep skin clean with gentle, non-abrasive cleansers',
                'Avoid oil-based skin products',
                'Use sunscreen daily',
                'Avoid triggers like spicy foods, alcohol, and extreme temperatures for rosacea',
                'Consult a dermatologist for persistent cases'
            ]
        },
        'Actinic Keratosis Basal Cell Carcinoma and other Malignant Lesions': {
            'description': 'Actinic keratosis are rough, scaly patches caused by sun damage that can develop into skin cancer. Basal cell carcinoma is the most common type of skin cancer.',
            'precautions': [
                'Regular skin checks with a dermatologist',
                'Use broad-spectrum sunscreen with SPF 30+',
                'Avoid tanning beds',
                'Wear protective clothing in the sun',
                'Monitor any changing skin lesions'
            ]
        },
        'Atopic Dermatitis Photos': {
            'description': 'Atopic dermatitis (eczema) is a condition that makes skin red and itchy. Common in children but can occur at any age.',
            'precautions': [
                'Moisturize skin regularly',
                'Use mild, fragrance-free soaps',
                'Avoid scratching',
                'Identify and avoid triggers',
                'Use humidifier in dry weather'
            ]
        },
        # Add more conditions following the same pattern
        'Psoriasis pictures Lichen Planus and related diseases': {
            'description': 'Psoriasis is an autoimmune condition causing rapid skin cell buildup leading to scaling. Lichen planus is an inflammatory condition affecting skin and mucous membranes.',
            'precautions': [
                'Moisturize regularly',
                'Avoid skin injuries',
                'Limit alcohol consumption',
                'Manage stress',
                'Consider phototherapy options'
            ]
        },
        'Melanoma Skin Cancer Nevi and Moles': {
            'description': 'Melanoma is the most serious type of skin cancer that develops in melanocytes. Nevi are benign moles that can sometimes develop into melanoma.',
            'precautions': [
                'Regular self-examinations using ABCDE rule (Asymmetry, Border, Color, Diameter, Evolving)',
                'Annual skin checks with dermatologist',
                'Avoid excessive sun exposure',
                'Use sunscreen daily',
                'Monitor changing moles'
            ]
        }
        # Continue with other conditions...
    }
    



# Preprocess the uploaded image
def preprocess_image(image):
    image = image.convert('RGB')
    image = image.resize((224, 224))
    image = np.array(image, dtype=np.float32) / 255.0
    image = np.expand_dims(image, axis=0)
    return image

# Health check route
@app.route('/')
def home():
    return 'SkinAI Flask Server is running!'

# Predict route
@app.route('/predict', methods=['POST'])
def predict():
    model = tf.keras.models.load_model("./model/image_classifier_model.h5")
    try:
        if 'file' not in request.files:
            return jsonify({'error': 'No file uploaded'}), 400

        file = request.files['file']
        image = Image.open(file)

        processed_image = preprocess_image(image)
        logits = model.predict(processed_image)
        predictions = tf.nn.softmax(logits).numpy()

        predicted_class = class_names[np.argmax(predictions)]
        confidence = float(np.max(predictions))
        print(f"Predicted class: {predicted_class}, Confidence: {confidence:.2f}")

        return jsonify({"result" : predicted_class})

    except Exception as e:
        return jsonify({'error': str(e)}), 500

# Run locally only
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
