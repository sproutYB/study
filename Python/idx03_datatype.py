# 자료형은 기본적인 7개와 등등 있다.
# - 1. Number(숫자) - int, float
# - 2. String(문자) - str
# - 3. Boolean(불린) - bool
# - 4. List(리스트) - list
# - 5. Tuple(튜플) - tuple
# - 6. set(집합) - set
# - 7. Dictionary(딕셔너리) - dect

# None : 공간은 채워져 있으나 값이 없다.
# Null : 공간 자체가 비워져 있다.
# Nan : not a number 을 의미하며 숫자와 더하면 그 값 또한 nan이 된다.

# Number(숫자) - int float
number1 = 1
number2 = 2.22

print("number1:", number1)
print("number1_type:", type(number1))
print("number2:", number2)
print("number2_type:", type(number2))

# String(문자) - str
# - 큰따옴표(””), 작은따옴표(’’) 를 사용하여 문자열을 감싸서 사용.
# - 큰따옴표나 작은옴표를 사용할 때 “’”, ‘”’ 로 묶어서 사용하면 된다.
# - 빽슬래시(\)를 사용해서 작은따옴표와 큰따옴표 사용
# - 문자열에서 줄 바꾸고 싶으면 이스케이프 코드 \n 을 삽입
# - \n을 사용하지 않기 위해 연속된 작은따옴표 3개(`'''`) 또는 큰따옴표 3개(`"""`) 사용하기도 한다.
# - 문자열 연결은 +, 콤마(,) 를 사용하는데, +는 바로 연결하고 콤마는 띄어쓰기가 들어있다.
# - 사용하는 함수 : count, find, index, join, lstriop, rstip, strip, replace, split 등
# - 문자열 더하기 : +
# - 곱하기 문자열 : *
# - 길이 구하기 : len() 함수 사용

str1 = 'A'
str2 = 'Apple'
str3 = "It's"
str4 = '아주 "뽕"을 뽑겠어'
str5 = "아주 \"뽕\"을 뽑겠어"
str6 = "아주 \"뽕\"을 \n뽑겠어"
str7 =""" Hello
  World
"""
print("str1:", str1)
print("str1_type:", type(str1))
print("str2:", str2)
print("str2_type:", type(str2))
print(str3)
print(str4)
print(str5)
print(str6)
print(str7)
print(str1 + str2) # 문자열 더하기
print(str1  * 3) # 문자열 곱하기
print(len(str1)) # 문자열 길이 구하기

# Boolean(불린) - bool
# - 참(Ture)과 거짓(False)을 나타낼 떄 사용
bool1 = True
bool2 = False

print("bool1", bool1)
print("bool1_type", type(bool1))

print("bool2", bool2)
print("bool2_type", type(bool2))

# List(리스트) - list
# - 리스트는 하나의 변수에 여러 값(문자, 숫자 ..)을 할당하는 자료형
# - 순서가 존재하며, 중복된 값이 존재할 수 있다.
# - 인덱스는 0부터 시작 : index()로 확인.
# - 리스트명[idx] 로 idx에 해당되는 값 조회.
# - 함수 : append, sort, reverse, index, insert, del, remove, pop, count, extend

list1 = [1, 2, 3, 4]
list2 = [5, 6]

print("list1", list1)
print("list1_type", type(list1))

print("list2", list2)
print("list2_type", type(list2))

print(list1 + list2) # 리스트 더하기

print(list1 * 2) # 리스트 곱하기

len(list1) # 리스트 길이 구하기

# 리스트 복사해사 사용할 때 문제점.
# list3 와 list1의 변수 주소값이 같기 때문에 list1의 값이 바뀌면 list3의 값도 변환한다.
list3 = list1
print(list3)
list1[0] = 7
print(list3)

# [:]을 이용한 복사하면 list4는 다른 주소에 저장이 되어 list1의 영향을 받지 않는다.
list4 = list1[:]
print(list4)
list1[0] = 10
print(list4)

# 리스트에 copy 모듈 이용한 복사
from copy import copy

list1 = [1, 2, 3, 4]
b = list1.copy()
print(b)
list1[0] = 10
print(b)

# 튜플(Tuple)
# - 값을 바꿀 수 없다.
# - 튜플 요소 삭제 및 변경 불가
# - 원소에 딕셔너리나 리스트가있으면 원소를 호출해 값을 변경하는건 가능.
# - 리스트보다 더 작은 메모리를 사용하며, 계산되는 속도가 빨라 대용량 처리에 잘 쓴다.
# - 실제 프로그램에서는 값이 변경되는 형태의 변수가 훨씬 많기 때문에 평균적으로 튜플보다는 리스트를 더 많이 사용한다.

# 값을 바꿀 수 없다.
tuple1 = (1, 2, 3, 4)
tuple2 = (5, 6)
tuple1[0] = 10 # 결과 : error

tuple3 = 1,2,3,4 # 이런 식으로 사용하면 자동으로 튜플로 생성된다.
tuple4 = (1,) # 값이 한 개가 있는 튜플을 만드려면 무조건 뒤에 콤마를 붙여야한다.

# 하지만 튜플 안에 있는 리스트 같은 것은 바꿀 수 있다. (예외)
tuple2 = ([1, 2, 3], 4, 5, 6)
tuple2[0][0] = 10 
print(tuple2) # 결과 : ([10, 2, 3], 4, 5, 6)

# 튜플 인덱싱
print(tuple1[0]) # 결과 : 1

# 튜플 슬라이싱
print(tuple1[2:]) # 결과 : (3, 4)

# 튜플 터하기
print(tuple1 + tuple2) # 결과 : (1, 2, 3, 4, 5, 6)

# 튜플 곱하기
print(tuple2 * 2) # 결과 : (5, 6, 5, 6)

#튜플 길이 구하기
print(len(tuple2)) # 결과 : 2

# 패킹
tuple_test1 = "1", 2, "3" # 자동으로 튜플로 변환 되는게 패킹

# 언패킹
tuple_test2 = ("1", 2, "3")
one, two, three = tuple_test2 # 변수를 여러 개 선언하여 값을 넣어주는 방법을 언패킹이라고 한다.

# 언패킹을 사용한 예제
a = 'a'
b = 'b'
print(a, b) # a, b
a, b = b, a
print(a, b) # b, a

# Dictionary(딕셔너리) - dict
# - 사용법 : 변수명 = { key: value }
# - key : 값을 찾기 위해 넣어 주는 데이터
# - value : 찾고자 하는 데이터
# - 중복된 키를 사용하면 앞에 사용된 키는 무효화된다.
# - 함수 : key, values, items, get, clear