def solution(board, moves):
    answer = []
    stack = []
    count = 0
    for i in moves:
        for j in range(len(board)):
            if board[j][i-1] > 0:
                stack.append(board[j][i-1])
                board[j][i-1] = 0
                if stack[-1:] == stack[-2:-1]:
                    #배열의 마지막 요소를 넣는다
                    answer += stack[-1:]
                    #중복된 두개를 pop
                    stack = stack[:-2]
                #다음을 탐색한다    
                break
                
    count = len(answer) * 2
    return count