function solution(new_id) {
    let answer = new_id.toLowerCase();
    answer = answer.replaceAll(/[~!@#$%^&*()=+\[{}\]:?,<>/]/g, '');
    answer = answer.replaceAll(/\.{1,}/g, '.');
    
    if(answer[0] === '.') {
      const temp = answer.split('');
      temp.shift();  
      answer = temp.join('');
    } 
    if(answer[answer.length - 1] === '.') {
      const temp = answer.split('');
      temp.pop();
      answer = temp.join('');
    }
    
    if(answer === '') answer = 'a';
    
    if(answer.length > 15) {
      answer = answer.substring(0, 15);
        
      if(answer[answer.length - 1] === '.') {
      const temp = answer.split('');
      temp.pop();
      answer = temp.join('');
    }
    } 
    
    if(answer.length < 3) {
      const temp = answer.split('');
      const lastStr = temp[temp.length - 1];
      
      while(temp.length < 3) {
          temp.push(lastStr);
      }
        
      answer = temp.join('');
    } 
    
    return answer;
    
}