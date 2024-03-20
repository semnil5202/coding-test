function solution(cacheSize, cities) {
    const queue = [];
    let count = 0;

    const addLRU = (cityName) => {
        const city = cityName.toLowerCase();
        
        if(cacheSize === 0) {
            count += 5;
            return;
        }
        
        const idx = queue.indexOf(city);
        
        if(idx !== -1) {
            queue.splice(idx, 1);
            queue.push(city);
            count += 1;
        } else {
            if(queue.length === cacheSize) {
                queue.shift();
            }
            
            queue.push(city);
            count += 5;
        }
    };
    
    for(let i = 0; i < cities.length; i++) {
        addLRU(cities[i]);
    }

    return count;
}