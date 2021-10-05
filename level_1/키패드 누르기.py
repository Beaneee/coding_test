def solution(numbers, hand):
    #초기화 -> 좌표를 초기화 해주는게 핵심이였음
    answer = ''
    dic = {1: [0, 0], 2: [0, 1], 3: [0, 2],
           4: [1, 0], 5: [1, 1], 6: [1, 2],
           7: [2, 0], 8: [2, 1], 9: [2, 2],
           '*':[3, 0], 0: [3, 1], '#': [3, 2]}
    left_num = dic['*']
    right_num = dic['#']
    
    for i in numbers:
        curr = dic[i]
        #1,4,7
        if i in [1,4,7]:
            answer += 'L'
            left_num = curr
        #3,6,9
        elif i in [3,6,9]:
            answer += 'R'
            right_num = curr
        #2,5,8,0
        else:
            left_dist = 0
            right_dist = 0
            
            #왼손 오른손 거리 계산 -> 좌표 계산하는 방식!!!
            left_dist = abs(left_num[0] - curr[0]) + abs(left_num[1]- curr[1])
            right_dist = abs(right_num[0] - curr[0]) + abs(right_num[1]- curr[1])
            
            #왼손 거리가 짧은 경우
            if left_dist < right_dist:
                answer += 'L'
                left_num = curr
            #오른손 거리가 짧은 경우
            elif left_dist > right_dist:
                answer += 'R'
                right_num = curr
            #거리가 같은 경우
            else:
                if hand == 'right':
                    answer += 'R'
                    right_num = curr
                else:
                    answer += 'L'
                    left_num = curr
                
    return answer