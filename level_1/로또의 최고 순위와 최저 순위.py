def solution(lottos, win_nums):
    answer = []
    count = 0
    zero_num = 0
    
    for i in range(len(lottos)):
        if lottos[i] == 0:
            zero_num += 1
        for j in range(len(win_nums)):
            if lottos[i] == win_nums[j]:
                count += 1
                
    
    if count == 6:
        answer.append(1)
    elif count == 5:
        answer.append(2)
    elif count == 4:
        answer.append(3)
    elif count == 3:
        answer.append(4)
    elif count == 2:
        answer.append(5)
    else:
        answer.append(6)
    
    if answer[0]-zero_num == 0:
        answer.append(1)
    else:
        answer.append(answer[0]-zero_num)
    
    answer.sort()
    return answer