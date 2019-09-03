function generateDivision(param) { // wait why do this just multiply the divisor x times until it reaches the upper bound of the dividend
    return new Promise((resolve) => {
        let divisionDividend_LOWER = param.init.divisionDividend_LOWER
        let divisionDividend_UPPER = param.init.divisionDividend_UPPER
        let divisionDivisor_LOWER = param.init.divisionDivisor_LOWER
        let divisionDivisor_UPPER = param.init.divisionDivisor_UPPER
        getPossibleDivisor(divisionDivisor_LOWER, divisionDivisor_UPPER, divisionDividend_UPPER).then(divisor => {
            getPossibleDividends(divisor, divisionDividend_UPPER, divisionDivisor_LOWER).then(allDividends => {
                return allDividends.filter((x) => { return x >= divisionDividend_LOWER})
            }).then(prunedDividends => {
                console.log(prunedDividends)
                return prunedDividends[rand(0, prunedDividends.length - 1)]
            }).then(dividend => {
                console.log(dividend)
                console.log(divisor)
                if (dividend != undefined){
                    return resolve(
                        {
                            a: dividend,
                            b: divisor,
                            c: dividend / divisor,
                        })
                    }
                })
        })
    })
}

function getPossibleDivisor(divisionDivisor_LOWER, divisionDivisor_UPPER, divisionDividend_UPPER) {
    return new Promise((resolve) => {
        let divisorCheck = true;
        while(divisorCheck) {
            let divisor = rand(divisionDivisor_LOWER, divisionDivisor_UPPER)
            if (divisor <= divisionDividend_UPPER) {
                return resolve(divisor)
            }
        }
    })
}

function getPossibleDividends(divisor, divisionDividend_UPPER, divisionDivisor_LOWER) {
    return new Promise((resolve) => {
        let dividends = []
        for (i = 1; i <= divisionDividend_UPPER; i++) {
            val = divisor * i
            if (val <= divisionDividend_UPPER && val >= divisionDivisor_LOWER) {
                dividends.push(divisor * i)
            }else {
                return resolve(dividends)
            }
        }
    })
}

// Randomly prune 1
function pruneOne() {
    return rand(0, 1)
}