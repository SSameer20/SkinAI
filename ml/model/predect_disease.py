import pickle
from PIL import Image
import numpy as np
from sklearn.calibration import LabelEncoder


def predict_disease(image_path):

    model_path = 'model/skinAI.pkl'
    
    try:
        with open(model_path, 'rb') as file:
            model = pickle.load(file)
    except FileNotFoundError:
        print("Error: The file 'model_filename.pkl' was not found. Please check the file path and try again.")

    image = Image.open(image_path)
    image = image.resize((128, 128))
    image_array = np.array(image)

    image_array = image_array / 255.0

    image_input = np.expand_dims(image_array, axis=0)

    Array = ["MEL","NV","BCC","AK","BKL","DF","VASC","SCC","UNK"]

    disease_labels = [
    "Melanoma",
    "Melanocytic Nevus",
    "Basal Cell Carcinoma",
    "Actinic Keratosis",
    "Benign Keratosis",
    "Dermatofibroma",
    "Vascular Lesion",
    "Squamous Cell Carcinoma",
    "Other"
    ]

    predicted_probabilities = model.predict(image_input)
    predicted_index = np.argmax(predicted_probabilities)
    predicted_probability = np.max(predicted_probabilities)

    predicted_disease = disease_labels[predicted_index]

    return {
        "predicted_disease": predicted_disease,
        "probability": f"{predicted_probability:.2f}",
        "confidence": f"{predicted_probability*100:.2f}",
        }

# print(predict_disease(image_path, model_path))