#  test.py
# -*- coding: utf-8 -*-
from extract_cnn_vgg16_keras import VGGNet
import numpy as np
import h5py
import matplotlib.pyplot as plt
import matplotlib.image as mpimg
import argparse

query = '../data/picture/2007_000027.jpg'
index = 'vgg_featureCNN.h5'
result = '../data/picture'
# read in indexed images' feature vectors and corresponding image names
h5f = h5py.File(index,'r')
# feats = h5f['dataset_1'][:]
feats = h5f['dataset_1'][:]
print(feats)

# for key in h5f['dataset_2'].keys():
#     print("1", h5f['dataset_2'][key])
#     print("2", h5f[key].shape)
#     print("3",key, h5f[key].value)
imgNames = h5f['dataset_2'].value
imgNames = imgNames[1:-1].split(',')
print(imgNames[0])

print(type(imgNames))
h5f.close()
        
print("--------------------------------------------------")
print("               searching starts")
print("--------------------------------------------------")
    
# read and show query image
# queryDir = args["query"]
queryImg = mpimg.imread(query)
plt.title("Query Image")
plt.imshow(queryImg)
plt.show()

# init VGGNet16 model
model = VGGNet()

# extract query image's feature, compute simlarity score and sort
queryVec = model.vgg_extract_feat(query)    #修改此处改变提取特征的网络
print(queryVec.shape)
print(feats.shape)
scores = np.dot(queryVec, feats.T)
rank_ID = np.argsort(scores)[::-1]
rank_score = scores[rank_ID]
print (rank_ID)
print (rank_score)


# number of top retrieved images to show
maxres = 3          #检索出三张相似度最高的图片
imlist = []
for i,index in enumerate(rank_ID[0:maxres]):
    imlist.append(imgNames[index])
    print("imgNames",  imgNames[0], index, imgNames[index])
    print("image names: "+str(imgNames[index]) + " scores: %f"%rank_score[i])
print("top %d images in order are: " %maxres, imlist)
# show top #maxres retrieved result one by one
for i,im in enumerate(imlist):
    print(result+"/"+ str(im).lstrip().replace('\'', ""));
    image = mpimg.imread(result+"/"+ str(im).lstrip().replace('\'', ""))
    plt.title("search output %d" %(i+1))
    plt.imshow(image)
    plt.show()