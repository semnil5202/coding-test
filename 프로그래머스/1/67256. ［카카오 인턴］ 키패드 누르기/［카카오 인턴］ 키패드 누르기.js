function solution(numbers, hand) {
    let leftPos = {
        x: 0,
        y: 0,
    };
    let rightPos = {
        x: 2,
        y: 0,
    };
    
    const getNumberPos = (number) => {
        if(number === 1) return {x:0, y:3};
        if(number === 2) return {x:1, y:3};
        if(number === 3) return {x:2, y:3};
        if(number === 4) return {x:0, y:2};
        if(number === 5) return {x:1, y:2};
        if(number === 6) return {x:2, y:2};
        if(number === 7) return {x:0, y:1};
        if(number === 8) return {x:1, y:1};
        if(number === 9) return {x:2, y:1};
        if(number === 0) return {x:1, y:0};       
    } 
    
    return numbers.map((number) => {
        const numberPos = getNumberPos(number);
        
        console.log(numberPos, leftPos, rightPos, Math.abs(numberPos.x - leftPos.x) + Math.abs(numberPos.y - leftPos.y) === Math.abs(numberPos.x - rightPos.x) + Math.abs(numberPos.y - rightPos.y))
        
        if(number === 1 || number === 4 || number === 7) {
            leftPos = numberPos;
            return 'L';
        }
        
        if(number === 3 || number === 6 || number === 9) {
            rightPos = numberPos;
            return 'R';
        }
        
        if(Math.abs(numberPos.x - leftPos.x) + Math.abs(numberPos.y - leftPos.y) > Math.abs(numberPos.x - rightPos.x) + Math.abs(numberPos.y - rightPos.y)) {
            rightPos = numberPos;
            return 'R';
        }
        
        if(Math.abs(numberPos.x - leftPos.x) + Math.abs(numberPos.y - leftPos.y) < Math.abs(numberPos.x - rightPos.x) + Math.abs(numberPos.y - rightPos.y)) {
            leftPos = numberPos;
            return 'L';
        }
        
        if(Math.abs(numberPos.x - leftPos.x) + Math.abs(numberPos.y - leftPos.y) === Math.abs(numberPos.x - rightPos.x) + Math.abs(numberPos.y - rightPos.y)) {
            if(hand === 'right') {
                rightPos = numberPos;
                return 'R';    
            } else {
                leftPos = numberPos;
                return 'L';  
            }
        }
    }).join('');
}