function solution(people, limit) {
    let count = 0;
    const initRecursiveCount = people.length;
    /**
     * 배열의 복사와 정렬로 인한 추가 비용 발생 -> sort는 필요해보인다.
     */
    let copyArr = people.slice().sort((a, b) => b - a);

    /**
     * 남은 사람 중 가장 무거운 사람과 가장 가벼운 사람을 함께 탑승시키는 방법을 고려하지 않고 있다.
     */
    for (let i = 0; i < initRecursiveCount; i++) {
        const weight = copyArr[0];
        const differ = limit - weight;

        if (weight > differ) {
            count++;
            /**
             * 매 반복마다 배열의 길이를 줄이는 작업이기 때문에 배열의 길이만큼의 반복이 필요하다. 
             * 따라서 이 코드는 최악의 경우 O(n^2)의 시간복잡도를 가지게 된다.
             */
            copyArr.shift();
        } else {
            if (copyArr.length > 1) {
                count += Math.ceil(copyArr.length / 2);
            } else {
                count++;
            }
            break;
        }
    }

    return count;
}
