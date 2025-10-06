function calculateBernoulliNumber(n) {
    
    const [num, den] = calcBernoulliFraction(n)

    if (den === 1){
        return String(n)
    } else {

        return `${num}/${den}`

    }


}

function calcBernoulliFraction(n){



    if (n == 0){
        return [1, 1]
    } else {
        let sum = [0, 1]

        for (let k=0; k<=(n-1); k++){
            let binomialFraction = binomial(n+1, k)
            let multFractions = multiplyFractions(binomialFraction, calcBernoulliFraction)

           sum = addFractions(sum,  multFractions)
        }    

        return multiplyFractions([-1, n+1], sum)

    }
}

function multiplyFractions(frac1, frac2){
    const [a, b] = frac1
    const [c, d] = frac2
    let newNum = a * c
    let newDen = b * d
    return simplifyFraction([newNum, newDen])
}

function addFractions(frac1, frac2){
    const [a, b] = frac1
    const [c, d] = frac2
    let newNum = (a * d) + (c * b)
    let newDen = b * d

    return simplifyFraction([newNum, newDen])
}



function simplifyFraction([num, den]){

    const mDivisor = gcd(num, den)
    let divNum = num / mDivisor
    let divDen = num / mDivisor

    if (divDen < 0){
        divNum = -divNum
        divDen = -divDen
    }

    return [divNum, divDen]

}

// Finds the greatest common divisor using the Euclidean algorithm.
function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
}



function binomial(n, k){
    return [factorial(n), (factorial(k)*factorial(n-k))]
}

function factorial(n){
    console.log(n)
    if (n==1 || n==0){
            console.log("ETER")
        return 1
    }else{
        return n * factorial(n-1)
    }
}






calculateBernoulliNumber(1)




