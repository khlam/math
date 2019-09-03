function generateDivision(param) {
    return new Promise((resolve) => {
        let divisionDividend_LOWER = param.init.divisionDividend_LOWER
        let divisionDividend_UPPER = param.init.divisionDividend_UPPER
        let divisionDivisor_LOWER = param.init.divisionDivisor_LOWER
        let divisionDivisor_UPPER = param.init.divisionDivisor_UPPER

        let generateComplete = false

        do {
            let dividend = rand(divisionDividend_LOWER, divisionDividend_UPPER)
            let factors = getFactors(dividend)

            factors = factors.filter((x) => { return x >= divisionDivisor_LOWER})
            factors = factors.filter((x) => { return x <= divisionDivisor_UPPER})
            if (factors.length - 2 >= 1){
                generateComplete = true
                dividendAndFactors(dividend, factors).then(val => {
                    if (val !== false) {
                        return resolve(val)
                    }
                })
            }else {
                continue
            }
        }
        while (!generateComplete);
    })
}

function dividendAndFactors(dividend, factors) {
    return new Promise((resolve) => {
        factors.push(dividend)
        b = factors[rand(0, factors.length - 1)]
        result = {
            a : dividend,
            b : b,
            c : dividend / b
        }
        return resolve(result)
    })
}

function getFactors(integer){
    var factors = [],
    quotient = 0;

    for(var i = 1; i <= integer; i++){
        quotient = integer/i;

        if(quotient === Math.floor(quotient)){
        factors.push(i); 
        }
    }
    return factors;
}

// Randomly prune 1
function pruneOne() {
    return rand(0, 1)
}

function answerIsInteger(x) {
    return Number.isInteger(x)
}