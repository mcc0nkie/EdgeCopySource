import os
from PIL import Image

def convert_jpeg_to_png(jpeg_path, png_path):
    # Open the JPEG image
    image = Image.open(jpeg_path)

    # Convert and save the image as a PNG file
    image.save(png_path)

def process_directory(input_dir, output_dir):
    # Loop through all files in the input directory
    for filename in os.listdir(input_dir):
        if filename.lower().endswith(".jpg") or filename.lower().endswith(".jpeg"):
            # Create file paths for input and output
            input_path = os.path.join(input_dir, filename)
            output_path = os.path.join(output_dir, os.path.splitext(filename)[0] + ".png")

            # Convert the JPEG image to a PNG image
            convert_jpeg_to_png(input_path, output_path)

# Example usage
input_dir = '/home/taco/Projects/EdgeExtensionCopy/'
output_dir = input_dir + 'output/'

# Create the output directory if it doesn't exist
os.makedirs(output_dir, exist_ok=True)

process_directory(input_dir, output_dir)
