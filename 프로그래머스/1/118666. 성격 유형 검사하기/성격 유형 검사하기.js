function solution(survey, choices) {
    const personal = {
        first: 0,
        second: 0,
        third: 0,
        fourth: 0,
    };
    let answer = '';
    
    survey.forEach((item, idx) => {
        const [neg, pos] = item.split('');
        
        if(neg === 'N') personal.fourth += choices[idx] - 4;
        if(neg === 'A') personal.fourth += -(choices[idx] - 4);

        if(neg === 'M') personal.third += choices[idx] - 4;
        if(neg === 'J') personal.third += -(choices[idx] - 4);

        if(neg === 'F') personal.second += choices[idx] - 4;
        if(neg === 'C') personal.second += -(choices[idx] - 4);

        if(neg === 'T') personal.first += choices[idx] - 4;
        if(neg === 'R') personal.first += -(choices[idx] - 4);
        
            console.log(personal)
    })
    
    if(personal.first >= 0) answer += 'R';
    else answer += 'T';
    
    if(personal.second >= 0) answer += 'C';
    else answer += 'F';
    
    if(personal.third >= 0) answer += 'J';
    else answer += 'M';
    
    if(personal.fourth >= 0) answer += 'A';
    else answer += 'N';
    
    return answer;
}