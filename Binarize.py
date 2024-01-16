import sys
from django.conf import settings
import os
image_full_path = sys.argv[1]
image_name = sys.argv[2]
import cv2
import fingerprint_enhancer
import numpy as np 
import imutils
import matplotlib.pyplot as plt



image = cv2.imread(str(image_full_path))
gray_img= cv2.cvtColor(image,cv2.COLOR_BGR2GRAY)
gray_img_2 = cv2.resize(gray_img,(300,300))

ret, thresh1 = cv2.threshold(gray_img_2,100,255,cv2.THRESH_BINARY)
output_enhance  = fingerprint_enhancer.enhance_Fingerprint(thresh1)

output_directory = os.path.join(os.path.dirname(image_full_path), 'md_output')
#create directory if it doesn't exists
os.makedirs(output_directory, exist_ok=True)  
# Construct the full save path including the filename
output_image_path = os.path.join(output_directory, 'Binarize_temp.jpg')
cv2.imwrite(output_image_path, output_enhance)
# cv2.imwrite(os.path.join(settings.MEDIA_ROOT,image_save_path), output_enhance)

cv2.waitKey(0)
cv2.destroyAllWindows()