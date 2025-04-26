function solution(n) {
    let temp = n;
    let trailingZeroCount = 0; // 맨 오른쪽 연속된 0의 개수
    let trailingOneCount = 0;  // 그 다음 연속된 1의 개수

    while (((temp & 1) === 0) && (temp !== 0)) {
        trailingZeroCount++;
        temp >>= 1;
    }

    while ((temp & 1) === 1) {
        trailingOneCount++;
        temp >>= 1;
    }

    if (trailingZeroCount + trailingOneCount === 31 || trailingZeroCount + trailingOneCount === 0) {
        return -1;
    }

    const changeBitPos = trailingZeroCount + trailingOneCount;

    n |= (1 << changeBitPos);
    
    n &= ~((1 << changeBitPos) - 1);
    
    n |= (1 << (trailingOneCount - 1)) - 1;

    return n;
}