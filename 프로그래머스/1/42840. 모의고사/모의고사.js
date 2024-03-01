function solution(answers) {
    const first = {
        id : 1,
        method : [1, 2, 3, 4, 5],
        answer : 0,
    };
    const second = {
        id : 2,
        method : [2,1,2,3,2,4,2,5],
        answer : 0,
    };
    const third = {
        id : 3,
        method : [3,3,1,1,2,2,4,4,5,5],
        answer : 0,
    };
    const result = [];
    
    answers.forEach((answer, idx) => {
        if(first.method[idx % first.method.length] === answer) first.answer += 1;
        if(second.method[idx % second.method.length] === answer) second.answer += 1;
        if(third.method[idx % third.method.length] === answer) third.answer += 1;
    })
    
    const peoples = [first, second, third];
    const maxValue = Math.max(...peoples.map((person) => person.answer));
    
    peoples.forEach((person) => {
        if(person.answer === maxValue) result.push(person.id);
    })
    
    return result;
}