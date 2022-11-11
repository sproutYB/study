import cv2
import time

def onMouse(event, x, y, flags, param):
    if event == cv2.EVENT_LBUTTONDBLCLK:
        param[0] = cv2.circle(img, (x,y), 50, (255,0,0),5)

if __name__ == "__main__":
    # while True: 를 사용해서 인위적으로 창을 띄워줌
    
    # while True:
        # cv2.namedWindow("명칭", 크기설정)
        # cv2.namedWindow("My image", cv2.WINDOW_NORMAL)
    
    ### 이미지 불러오기 ###
    img = cv2.imread("./Lenna.png", cv2.IMREAD_COLOR)

    ### Window창 열어서 이미지 띄우기 ###
    # cv2.namedWindow("My image", cv2.WINDOW_NORMAL)
    # namedWindow와 같은 이름이기 떄문에 My image의 윈도우에 이미지를 보여준다.
    # cv2.imshow("My image", img)
    # namedWindow와 이름이 다르기 대문에 새로운 윈도우를 띄워 이미지를 보여준다.
    # cv2.imshow("this is lenna", img)

    # time.sleep(시간(ms))도 while True와 같은 기능
    # time.sleep(5000)

    ### 마우스 클릭을 이용한 이벤트 ###
    # cv2.namedWindow("My image", cv2.WINDOW_AUTOSIZE)
    # param = [img]
    # cv2.setMouseCallback("My image", onMouse, param)

    # while True:
    #     # 이미지를 보기 위한 함수
    #     key = cv2.waitKey(1000)

    #     if key == ord("q"):
    #         break;
    #     elif key == ord("g"):
    #         img = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

    #     cv2.imshow("My image", img)


    ### 클릭을 누른상태로 움직여 line 생성 ###
    # line 생성 후 Enter를 치면 shape x축, y축 들이 나온다.
    cv2.namedWindow("My image", cv2.WINDOW_AUTOSIZE)

    roi = cv2.selectROI("My image", img)
    print(roi)