from flask import Flask, render_template
import os

app = Flask(__name__)

@app.route("/")
def home():
    image_folder = "static/images/photos"
    images = os.listdir(image_folder)
    images = [f"/{image_folder}/{img}" for img in images if img.lower().endswith(('.jpg', '.png', '.jpeg'))]

    return render_template(
        "index.html",
        name="Urvi",
        images=images
    )

if __name__ == "__main__":
    app.run(debug=True)