import sys
from django.conf import settings
import os
import fingerprint_enhancer
image_full_path = sys.argv[1]
image_name = sys.argv[2]
import cv2
import numpy as np 
import matplotlib.pyplot as plt
import imutils

image = cv2.imread(str(image_full_path))
gray_img= cv2.cvtColor(image,cv2.COLOR_BGR2GRAY)

image_norm = cv2.normalize(gray_img, None, alpha=0,beta=200, norm_type=cv2.NORM_MINMAX)
image_rez = cv2.resize(image_norm,(300,300))		

final_image_norm  = fingerprint_enhancer.enhance_Fingerprint(image_rez)
image_save_path = image_full_path.replace(image_name,"md_output/Normalize_temp.jpg")

cv2.imwrite(os.path.join(settings.MEDIA_ROOT,image_save_path), final_image_norm)

cv2.waitKey(0)
cv2.destroyAllWindows()

