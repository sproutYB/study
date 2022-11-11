# opencv를 사용하기 위해 선행해야 하는 것들.
# 구글에 pypi를 검색하면 PyPI · The Python Package Index 이 나오는데 들어가서
# opencv 검색하여 opencv-python 4.6.0.66 버전을 찾으면 된다.
# 버전은 바뀌어 있을 수 있음!!
# bash에 pip install opencv-python 을 작성하여 인스톨한다.
# 그리고 나서 import cv2를 선언하면 사용이 가능해 진다.

import numpy as np
import cv2

if __name__ == "__main__":
    # 버전 확인
    print(cv2.__version__)

    ### 이미지 파일 읽기 옵션 ###
    # cv2.IMREAD_COLOR: 컬러, 투명한 부분 무시, default
    # cv2.IMREAD_GRAYSCALE: 흑백, 이미지 처리 중간단계에서 많이 활용
    # cv2.IMREAD_UNCHANGED: 이미지파일을 alpha channel까지 포함

    ### 이미지 불러오기 및 shape출력 ###
    # cv2.imread("경로+이름+파일명", 이미지 파일 읽기 옵션)
    # return 타입은 img객체 행렬(numpy.ndarray)
    color_img = cv2.imread("Lenna.png", cv2.IMREAD_COLOR)
    gray_img = cv2.imread("Lenna.png", cv2.IMREAD_GRAYSCALE)
    
    # 이미지의 shape 값 출력
    # print("color_img:", color_img.shape)
    # print("gray_img:", gray_img.shape)
    
    ### 이미지 저장 ###
    # cv2.imwrite("경로+이름+파일명", 넣을 이미지): 이미지 저장
    # if cv2.imwrite("./lenna.jpg", gray_img):
    #     print("저장완료")
    # else:
    #     print("저장 출력")
    
    ### 이미지 컬러 변환 ###
    # color_img이미지를 흑백컬러로 바꾼다.
    gray_img1 = cv2.cvtColor(color_img, cv2.COLOR_BGR2GRAY)
    
    # gray_img1이미지를 위치, 이름, 파일명 설정하여 저장
    # cv2.imwrite("./converted_to_gray.jpg", gray_img1)
    
    ### 이미지 사이즈 조절 ###
    resized_img = cv2.resize(color_img, (1024,1024))

    # 이미지 저장
    # cv2.imwrite("./resized_big_img.jpg", resized_img)

    resized_img1 = cv2.resize(color_img, (128,128))

    # cv2.imwrite("./resized_small_img.jpg", resized_img1)
    # print("resized_img1: \n", resized_img1)
    
    ### 이미지 일 부 잘라내기 ###
    # crop: 이미지 일부 잘라내기
    # 1/4 조각으로 자르기
    cropped_img = color_img[0:color_img.shape[0]//2, 0:color_img.shape[1]//2]

    # print("cropped_img:\n", cropped_img)
    
    # cv2.imwrite("cropped_img.jpg", cropped_img)