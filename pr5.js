function findConcatenatedWords(words) {
    
    words.forEach((value, index) => {
       console.log( findRecursiveMatches(value, words))

    })
    console.log("FILTEEER")
    return words.filter((item) => {
        let matches = findRecursiveMatches(item, words)
        let filteredMatches = matches.filter((value) => {
            return value != item && (item.length > value.length)
        })
        return filteredMatches.length > 1 && canFormWord(item, filteredMatches)
    })







}
//[ 'cat', 'cats', 'dog', 'cat', 'cats', 'catsdogcats' ]
function canFormWord(str, words){

    for(let i = 0; i < words.length; i++){
        

        for(let j = 0; j < words[i].length; j++){
            if(words[i][j] == str[j]){

                if(str.length == j+1){
                    return true
                }
                if(j == words[i].length - 1){

                    if(!canFormWord(str.slice(j+1), words)){
                        continue
                    }else{
                        return true
                    }
                }
            }else{
                break
            }
        }
    }
    return false
}
//["a","b","ab","abc"]

function findRecursiveMatches(str, words){
    let x = 0
    let matches = []
    console.log("word: "+str)
    while(x < words.length){

        for(let y = 0; y < words[x].length; y++){
            if(words[x][y] == str[y]){
                if(y == words[x].length - 1){
                    console.log(`n: ${str} - o: ${words[x]}`)
                    /*if(words[x].length == str.length){
                    return matches
                    }*/
                    
                    matches.push(words[x])
                    if(str.length > y+1){
                    matches = matches.concat(findRecursiveMatches(str.slice(y+1), words))
                    }
                }
                continue
            }else{
                break
            }
        
        }
        x++
    }
    console.log("MATCHES ", matches)
    return matches


}

//console.log("FINAL ",findConcatenatedWords(["cat", "cats", "catsdogcats", "dog", "dogcatsdog", "hippopotamuses", "rat", "ratcatdogcat"]))
