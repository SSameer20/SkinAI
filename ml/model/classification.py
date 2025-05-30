import os
import numpy as np
import matplotlib.pyplot as plt
from tensorflow.keras.utils import image_dataset_from_directory
from tensorflow.keras.preprocessing.image import ImageDataGenerator
from tensorflow.keras.applications import MobileNetV2
from tensorflow.keras import layers, models
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing import image

# Step 1: Set paths and constants
IMG_SIZE = (224, 224)
BATCH_SIZE = 32
EPOCHS = 10
THRESHOLD = 0.5  # Confidence threshold for unknown

  # Path to your dataset directory

# Step 2: Load the dataset
datagen = ImageDataGenerator(
    rescale=1./255,
    validation_split=0.15
)

train_data = datagen.flow_from_directory(
    "../data/train",
    target_size=IMG_SIZE,
    batch_size=BATCH_SIZE,
    class_mode='categorical',
    subset='training'
)

val_data = datagen.flow_from_directory(
    "../data/test",
    target_size=IMG_SIZE,
    batch_size=BATCH_SIZE,
    class_mode='categorical',
    subset='validation'
)

# Step 3: Build the model using transfer learning
base_model = MobileNetV2(weights='imagenet', include_top=False, input_shape=(224, 224, 3))
base_model.trainable = False

model = models.Sequential([
    base_model,
    layers.GlobalAveragePooling2D(),
    layers.Dense(256, activation='relu'),
    layers.Dropout(0.5),
    layers.Dense(train_data.num_classes, activation='softmax')  # Includes unknown if added
])

# Step 4: Compile and train
model.compile(optimizer='adam', loss='categorical_crossentropy', metrics=['accuracy'])
model.fit(train_data, validation_data=val_data, epochs=EPOCHS)

# Step 5: Save the model
model.save('image_classifier_model.h5')
print("Model saved as 'image_classifier_model.h5'")
