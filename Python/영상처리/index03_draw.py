import cv2
if __name__ == "__main__":
    img = cv2.imread("./Lenna.png", cv2.IMREAD_COLOR)
    
    # draw 일직선 옵션 설정
    # cv2.line(img, start_point, end_point, color, line_thickness, line_type)
    # line_img = cv2.line(img, (0,0), (img.shape[0], img.shape[1]), (255,0,0), 1, cv2.LINE_AA)
    # cv2.imwrite("./draw_line.jpg", line_img)

    # draw 원 옵션 설정
    # cv2.circle(img, center, radius, color, bold)
    # bold는 써도 된고 안써도 된다.
    # 행과 열 좌표 설정 중요
    # line_img1 = cv2.circle(img, (img.shape[1]//2, img.shape[0]//2), 100, (0,255,0), 5)
    # cv2.imwrite("./draw_circle_line.jpg", line_img1)

    # draw rectangle 옵션 설정
    # cv2.rectangle(img, pt1, pt2, color, bold)
    # line_img2 = cv2.rectangle(img, (10,10), (210,210), (0,0,255), 5)
    # cv2.imwrite("./draw_rectangle_line.jpg", line_img2)

    # draw text 옵션 설정
    # cv2.putText(img, text, org, fontFace, fontScale, color)
    # 좌표는 좌하단 좌표로 설정된다
    # 텍스트는 한글이 지원이 안됨.
    line_img3 = cv2.putText(img, "This is Lenna", (5,40), cv2.FONT_HERSHEY_SIMPLEX, 1, (128,0,128), 3)
    cv2.imwrite("./draw_text_line.jpg", line_img3)