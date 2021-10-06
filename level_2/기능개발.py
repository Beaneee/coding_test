def solution(progresses, speeds):
    answer = []
    day = 0
    count = 0
    
    while progresses:
        #작업이 완료된 상태
        if progresses[0] + day*speeds[0] >= 100:
            progresses.pop(0)
            speeds.pop(0)
            count += 1
        #작업이 완료되지 않은 상태
        else:
            if count >= 1:
                answer.append(count)
                count = 0
                
            day += 1
    #progresses가 첫번째 if문에 걸리면 count가 append 되지 않기 때문에 한번 더 해줘야 한다.        
    answer.append(count)
    return answer