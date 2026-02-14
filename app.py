from flask import Flask, render_template
import os

app = Flask(__name__)

@app.route("/")
def home():
    image_folder = "static/images/photos"
    images = sorted([
        f"/{image_folder}/{img}"
        for img in os.listdir(image_folder)
        if img.lower().endswith((".jpg", ".jpeg", ".png"))
    ])

    return render_template(
        "index.html",
        name="Urvi",
        images=images
    )

if __name__ == "__main__":
    app.run(debug=True)