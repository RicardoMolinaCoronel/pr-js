function gameOfThrones(s) {
    // Write your code here
    // aaabbbb
    let listKeys = []
    let listValues = []
    s.split("").forEach((item, index) => {
        if(!listKeys.includes(item)){
            listKeys.push(item)
            listValues.push(1)
        } else {
            listValues[index] = listValues[index]+1
        }
    })
    console.log(s.length)
    if((s.length % 2) === 0){
         console.log("output")

        if (listValues.every((item) => {
            return item === listValues[0]
        })){
            return "YES"
        }else{
            return "NO"
        }
        
    }  else {
        let countOneOcurrences = 0
        let lastIndexEncountered = 0
        for(let x=0; x <= listValues.length; x++){
            
            if (listValues[x] === 1){
                countOneOcurrences += 1
                lastIndexEncountered = x
            }
            
        }
        
        if(countOneOcurrences === listKeys.length){
            return "YES"
        } else if(countOneOcurrences === 1){
            listValues.splice(x, 1)
             if (listValues.every((item) => {
            return item === listValues[0]
            })){
            return "YES"
                }else{
                    return "NO"
                }
        } else {
            return "NO"
        }
        
    }  
}

/*function appendAndDelete(s, t, k) {
    // Write your code here
    
    let diffC = 0
    let minS = Math.min(s.length, t.length)
    let major 
    if (s.length == t.length){
        return (k >= (s.length * 2)) ? "Yes" : "No"
    }
    if(s.length < t.length){
        major = t
    } else {
        major = s
    }

    for(let x=0; x <= minS; x++){
        if(s[x] !== t[x]){
            diffC++
        }
    }
    let falt = major.length - minS
    let total = diffC + falt

    if(total === k){
        return "Yes"
    }else{
        return "No"
    }
    

}*/



function appendAndDelete(s, t, k) {
    // Write your code here
    if(s === t && (k % 2 === 0)){
        return "Yes"
    }
    if((s.length + t.length) <= k){
        
        return "Yes"
        
    }
    
    let minS = Math.min(s.length, t.length)
    let maxS = Math.max(s.length, t.length)
        
        
    let countNoC = 0 
    let coincidenceC = 0
    for(let x = 0; x < minS; x++){
        if(s[x] != t[x] || x === minS - 1){
            countNoC = minS - x
            coincidenceC = x
            if(x === minS - 1){
                coincidenceC = x + 1
                countNoC = minS - (x + 1)

            }
            break
        }
    }
    let otherC
    if(t.length === minS){
    otherC = s.length - coincidenceC
    }else{
    otherC = t.length - coincidenceC
    }
    console.log(otherC)
    console.log(coincidenceC)
    console.log(countNoC)
    if((otherC + countNoC) === k){
        return "Yes"
    }else if((k - otherC + countNoC) % 2 === 0 && ((otherC + countNoC) <= k)){
        return "Yes"
    } else {
        return "No"
    }
          

}

console.log(appendAndDelete("ash", "ashley", 5))
console.log(appendAndDelete("ashl", "ashley", 5))
console.log(appendAndDelete("ashley", "ash", 5))

//console.log(gameOfThrones("aaabbbb"))