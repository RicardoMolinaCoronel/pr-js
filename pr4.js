function concertSeats(seats) {

    for(let j = 0; j < seats[0].length; j++){
        let currentL = []
       for (let i = 0; i < seats.length; i++){     
            currentL.push(seats[i][j])
       }
       if(currentL.length <= 1){
        continue
       }
        for (let x=0; x < currentL.length-1; x++){
            if(currentL[x+1] >= currentL[x]){
                continue
            }else{
                return false
            }
        }
            
    }
    return true



}