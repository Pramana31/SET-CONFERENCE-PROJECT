# Rice Crop Health Monitoring and Yield Estimation

A deep learning-based system for detecting rice leaf diseases using a Convolutional Neural Network (CNN). The model classifies rice leaf images into one of five categories to support early disease detection and assist in crop health monitoring.

---

## Project Overview

Rice diseases significantly affect crop quality and yield. This project uses a Convolutional Neural Network (CNN) built with TensorFlow/Keras to automatically classify rice leaf images into healthy and diseased categories. The model can help farmers and researchers identify diseases at an early stage, enabling timely treatment and better crop management.

---

## Objectives

* Detect rice leaf diseases from images.
* Classify rice leaves into five disease categories.
* Automate disease identification using deep learning.
* Support crop health monitoring and yield estimation.
* Reduce manual inspection time.

---

## Dataset

The dataset consists of image samples of rice leaves belonging to five classes:

| Class            | Description                                |
| ---------------- | ------------------------------------------ |
| Healthy          | Healthy rice leaves                        |
| Bacterial Blight | Rice leaves infected with bacterial blight |
| Blast            | Rice blast disease                         |
| Brown Spot       | Rice leaves affected by brown spot disease |
| False Smut       | Rice plants affected by false smut disease |

---

## Model Architecture

The project uses a custom Convolutional Neural Network (CNN) developed using TensorFlow/Keras.

### Architecture

* Image Resizing (256 × 256)
* Image Rescaling (Pixel normalization)
* Data Augmentation

  * Random Flip
  * Random Rotation
* Convolution Layer (32 Filters)
* Max Pooling
* Five Convolution Layers (64 Filters)
* Max Pooling after each convolution layer
* Flatten Layer
* Dense Layer (64 Neurons)
* Output Layer (5 Classes with Softmax)

---

## Training Configuration

| Parameter         |                           Value |
| ----------------- | ------------------------------: |
| Image Size        |                       256 × 256 |
| Batch Size        |                              32 |
| Epochs            |                              50 |
| Optimizer         |                            Adam |
| Loss Function     | Sparse Categorical Crossentropy |
| Output Activation |                         Softmax |

---

## Technologies Used

* Python
* TensorFlow
* Keras
* NumPy
* OpenCV
* Matplotlib

---

## Project Workflow

1. Load image dataset.
2. Resize and normalize images.
3. Apply data augmentation.
4. Train the CNN model.
5. Validate model performance.
6. Predict rice leaf disease.
7. Monitor crop health and assist in yield estimation.

---

## Project Structure

```text
SET-CONFERENCE-PROJECT/
│
├── Dataset/
│   ├── Healthy/
│   ├── Bacterial_Blight/
│   ├── Blast/
│   ├── Brown_Spot/
│   └── False_Smut/
│
├── RICE_CROP_DISEASE_USING_CNN.ipynb
├── images/
├── model/
├── requirements.txt
└── README.md
```

---

## Features

* Rice leaf disease classification
* Custom CNN architecture
* Data augmentation for improved generalization
* Automatic image preprocessing
* Five-class disease prediction
* Training and validation accuracy visualization
* Crop health monitoring support

---

## Results

The model is trained for **50 epochs** using the Adam optimizer and Sparse Categorical Crossentropy loss. Training and validation accuracy/loss curves are plotted to evaluate model performance.

---

## Installation

Clone the repository:

```bash
git clone https://github.com/your-username/SET-CONFERENCE-PROJECT.git
```

Navigate to the project directory:

```bash
cd SET-CONFERENCE-PROJECT
```

Install the required packages:

```bash
pip install -r requirements.txt
```

Run the notebook:

```bash
jupyter notebook RICE_CROP_DISEASE_USING_CNN.ipynb
```

---

## Future Improvements

* Increase dataset size for improved accuracy.
* Deploy the model as a web application.
* Develop a mobile application for real-time disease detection.
* Integrate disease severity estimation.
* Enhance yield prediction using weather and soil parameters.

---

## Author

**Pramana Sarkar**

Master of Computer Applications (MCA)

---

## License

This project is intended for academic and research purposes.
