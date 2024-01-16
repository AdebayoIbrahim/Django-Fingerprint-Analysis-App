import sys
from django.conf import settings
import os
image_full_path = sys.argv[1]
image_name = sys.argv[2]
import cv2
import numpy as np
import fingerprint_enhancer
import imutils 
import matplotlib.pyplot as plt


def normalise(img,mean,std):
    normed = (img - np.mean(img))/(np.std(img));   
    return(normed)

def ridge_segment(im,blksze,thresh):
    
    rows,cols = im.shape;    
    
    im = normalise(im,0,1);    # normalise to get zero mean and unit standard deviation
    
    
    new_rows =  int(blksze * np.ceil((float(rows))/(float(blksze))))
    new_cols =  int(blksze * np.ceil((float(cols))/(float(blksze))))
    
    padded_img = np.zeros((new_rows,new_cols));
    stddevim = np.zeros((new_rows,new_cols));
    
    padded_img[0:rows][:,0:cols] = im;
    
    for i in range(0,new_rows,blksze):
        for j in range(0,new_cols,blksze):
            block = padded_img[i:i+blksze][:,j:j+blksze];
            
            stddevim[i:i+blksze][:,j:j+blksze] = np.std(block)*np.ones(block.shape)
    
    stddevim = stddevim[0:rows][:,0:cols]
                    
    mask = stddevim > thresh;
    
    mean_val = np.mean(im[mask]);
    
    std_val = np.std(im[mask]);
    
    normim = (im - mean_val)/(std_val);
    
    return(normim,mask)

image = cv2.imread(str(image_full_path))
img = cv2.resize(image,(300,300))
im= cv2.cvtColor(img,cv2.COLOR_BGR2GRAY)
#result = ridge_segment(im,blksze,thresh)
result = ridge_segment(im,16,0.1)

#result = np.hstack((imgray, img)) #stacking images side-by-side
image_save_path = image_full_path.replace(image_name,"md_output/Segmentize_temp.jpg")

output_enhance_enhanced = fingerprint_enhancer.enhance_Fingerprint(result[0])

cv2.imwrite(os.path.join(settings.MEDIA_ROOT,image_save_path), output_enhance_enhanced)
	
cv2.waitKey(0)
cv2.destroyAllWindows()
