def solution(new_id):
    answer = ''
    char = "~!@#$%^&*()=+[{]}:?,<>/"
    
    #1단계
    new_id = new_id.lower()
    #2단계
    for i in range(len(char)):
        new_id = new_id.replace(char[i], "")
    
    #3단계
    for j in range(len(new_id)):
        new_id = new_id.replace('..', '.')
    
    #4단계
    
    if new_id[0] == '.':
        new_id = new_id[1:]
    elif new_id[-1] == '.':
        new_id = new_id[:-1]
    
    #5단계
    if new_id == "":
        new_id = "a"
    
    #6단계
    if len(new_id) >= 16:
        new_id = new_id[:15]
        if new_id[-1] == '.':
            new_id = new_id[:-1]
    
    #7단계
    while(len(new_id) < 3):
        new_id = new_id + new_id[-1]
            
    answer = new_id
    return answer