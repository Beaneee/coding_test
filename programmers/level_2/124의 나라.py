#3의 배수를 이용해서 규칙을 찾는게 중요했다.
def solution(n):
    answer = ''
    while n > 0:
        #3의 배수일때
        if n % 3 == 0:
            answer = answer + '4' #3의 배수는 4가 붙는다.
            n = (n // 3) - 1 #몫 구하기
        #3의 배수가 아닐때
        else:
            answer = answer + str(n % 3)
            n = n // 3
        
    return answer[::-1]