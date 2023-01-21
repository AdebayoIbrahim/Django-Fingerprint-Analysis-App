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


image_save_path = image_full_path.replace(image_name,"md_output/Binarize_temp.jpg")
output_enhance = fingerprint_enhancer.enhance_Fingerprint(thresh1)

cv2.imwrite(os.path.join(settings.MEDIA_ROOT,image_save_path), output_enhance)

cv2.waitKey(0)
cv2.destroyAllWindows()

