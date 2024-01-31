function solution(N, stages) {
    const fails = [];
    
    for(let i = 0; i<N; i++) {
        fails.push([0, 0]);
    }
    
    for(let i = 0; i<stages.length; i++) {
        const stageFail = stages[i];
        for(let j = 0; j<stageFail; j++) {
            if(j >= fails.length) break;
            
            fails[j][1] += 1;
            
            if(j===stageFail-1){
                fails[j][0] += 1;
            }
        }
    }
    
    const answers = fails.map(([fail, success],idx) => ({key:idx+1, value:success / fail})).sort((a,b) => a.value - b.value);
    
    return answers.map(({key}) => key)
}