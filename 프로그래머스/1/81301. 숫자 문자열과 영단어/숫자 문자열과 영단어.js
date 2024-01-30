function solution(s) {
    const matcher = {
        zero: 0,
        one: 1,
        two: 2,
        three: 3,
        four: 4,
        five: 5,
        six: 6,
        seven: 7,
        eight: 8,
        nine: 9
    }
    
    const inputs = s.split('');
    const answers = [];
    
    let temp = '';
    for(let i = 0; i<inputs.length; i++ ) {        
        if(temp in matcher) {
            answers.push(matcher[temp]);
            temp = '';
        }
        
        if(Number.isInteger(Number(inputs[i]))) {
            answers.push(Number(inputs[i]));
            continue;
        }

        temp += inputs[i];

        if(i === inputs.length - 1) {
            if(temp in matcher) answers.push(matcher[temp]);
        }
    }
    
    return Number(answers.join(''));
}