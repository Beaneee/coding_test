def solution(s):
    answer = 0
    num_str = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    num_int = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    
    for i in range(10):
        if num_str[i] in s:
            s = s.replace(num_str[i], num_int[i])
    
    answer = int(s)
            
    return answer