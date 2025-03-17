import tensorflow as tf
from tensorflow.keras import layers, models
from tensorflow.keras.layers import RandomFlip, RandomRotation, RandomZoom
import matplotlib.pyplot as plt

# Load training and testing dataset with data augmentation
data_augmentation = tf.keras.Sequential([
    RandomFlip("horizontal"),
    RandomRotation(0.1),
    RandomZoom(0.1)
])

# Load dataset
train_dataset = tf.keras.utils.image_dataset_from_directory(
    "../dataset/train",
    image_size=(128, 128),
    batch_size=32,
    label_mode="int"
)

test_dataset = tf.keras.utils.image_dataset_from_directory(
    "../dataset/test",
    image_size=(128, 128),
    batch_size=32,
    label_mode="int"
)

# Get number of classes
num_classes = len(train_dataset.class_names)
print("Number of Classes:", num_classes)

# CNN Model
model = models.Sequential([
    layers.Input(shape=(128, 128, 3)),
    data_augmentation,

    layers.Conv2D(32, (3, 3), activation='relu', padding='same'),
    layers.BatchNormalization(),
    layers.MaxPooling2D((2, 2)),

    layers.Conv2D(64, (3, 3), activation='relu', padding='same'),
    layers.BatchNormalization(),
    layers.MaxPooling2D((2, 2)),

    layers.Conv2D(128, (3, 3), activation='relu', padding='same'),
    layers.BatchNormalization(),
    layers.MaxPooling2D((2, 2)),

    layers.Conv2D(256, (3, 3), activation='relu', padding='same'),
    layers.BatchNormalization(),
    layers.MaxPooling2D((2, 2)),

    layers.GlobalAveragePooling2D(),
    layers.Dropout(0.3),

    layers.Dense(128, activation='relu'),
    layers.BatchNormalization(),
    layers.Dropout(0.3),

    layers.Dense(num_classes, activation='softmax')
])

# Compile Model
model.compile(optimizer='adam',
              loss=tf.keras.losses.SparseCategoricalCrossentropy(),
              metrics=['accuracy'])

# Train Model
history = model.fit(train_dataset, epochs=10, validation_data=test_dataset)

# Evaluate Model
test_loss, test_acc = model.evaluate(test_dataset, verbose=2)
print("Test Accuracy:", test_acc)

# Save Model
model.save("./saved_models/model_v_0_1_3.keras")


# Plot Accuracy
plt.plot(history.history['accuracy'], label='Training Accuracy')
plt.plot(history.history['val_accuracy'], label='Validation Accuracy')
plt.xlabel('Epoch')
plt.ylabel('Accuracy')
plt.legend(loc='lower right')
plt.ylim([0, 1])
plt.show()
