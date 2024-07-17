![Banner](./assets/banner.gif)
# SkinAI

**SkinAI** is an AI-powered web application designed to analyze skin conditions and provide immediate insights and precautions based on the analysis. This application serves as a preliminary tool to help users understand potential skin issues and encourages them to seek professional medical advice.

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies](#technologies)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Introduction

**SkinAI** leverages the MERN (MongoDB, Express.js, React, Node.js) stack and integrates a machine learning service to provide users with insightful analysis of their skin conditions based on uploaded images. 

## Features

- **User Authentication**: Secure user registration and login.
- **Image Upload**: Upload images of skin for analysis.
- **AI-Powered Analysis**: Analyze uploaded images using a trained machine learning model.
- **Detailed Reports**: Provide users with detailed analysis reports and preliminary suggestions.
- **History Tracking**: Keep track of all past uploads and analysis results for each user.

## Installation

### Prerequisites

- Node.js and npm
- MongoDB
- Python (for the ML service)

### Backend (Node.js + Express)

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/SkinAI.git
    cd SkinAI
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Set up environment variables:
    Create a `.env` file in the root directory and add the following:
    ```plaintext
    PORT=5000
    MONGO_URI=your_mongodb_uri
    ```

4. Start the server:
    ```bash
    npm start
    ```

### Frontend (React)

1. Navigate to the `client` directory:
    ```bash
    cd client
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Start the React development server:
    ```bash
    npm start
    ```


## Usage

1. Register and log in to the application.
2. Upload an image of your skin through the provided interface.
3. Wait for the AI-powered analysis to complete.
4. View the detailed analysis report and recommendations.

## Technologies

- **Frontend**: React
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Machine Learning**: TensorFlow (or PyTorch)
- **ML API**: Flask

## Contributing

We welcome contributions from the community! Please follow these steps to contribute:


## Contact

For any inquiries, please contact us at [sameer.kattubadi@gmail.com](sameer.kattubadi@gmail.com).
