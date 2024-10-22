def solution(record):
    answer = []
    dic = {}
    #dic으로 데이터 뽑기 -> change를 고려하기 위해서
    for s in record:
        s_split = s.split(' ')
        if len(s_split) == 3:
            dic[s_split[1]] = s_split[2]
    
    for s in record:
        s_split = s.split(' ')
        if s_split[0] == 'Enter':
            answer.append('{0}님이 들어왔습니다.'.format(dic[s_split[1]]))
        if s_split[0] == 'Leave':
            answer.append('{0}님이 나갔습니다.'.format(dic[s_split[1]]))
    return answer