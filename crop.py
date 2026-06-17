from PIL import Image
import glob

for img_path in glob.glob("public/secao4-card*.png"):
    img = Image.open(img_path)
    # The images are 242x194. We want to crop the top part (photo) 
    # and discard the bottom part (blurry text).
    # Let's keep the top 100 pixels (roughly 50%).
    cropped = img.crop((0, 0, 242, 100))
    cropped.save(img_path)
    print(f"Cropped {img_path}")
