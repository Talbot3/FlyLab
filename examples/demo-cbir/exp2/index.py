import cv2
import numpy as np
from matplotlib import pyplot as plt

filename = '../miphone.png'
img = cv2.imread(filename)
gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

gray = np.float32(gray)

dst = cv2.cornerHarris(gray, 2, 3, 0.04)

corners = cv2.goodFeaturesToTrack(gray, 25, 0.01, 10)
sift = cv2.xfeatures2d.SIFT_create()
kp = sift.detect(gray, None)

siftImg = cv2.drawKeypoints(gray, kp)
cv2.imwrite('sift_keypoints.jpg', img)

corners = np.int0(corners)

for i in corners:
  x,y = i.ravel()
  cv2.circle(img, (x,y), 3, 255, -1)

plt.imshow(img), plt.show()

# print(dst)
# dst =cv2.dilate(dst, None)

# img[dst>0.01*dst.max()] = [0,0, 255]

# cv2.imshow('dst', img)
