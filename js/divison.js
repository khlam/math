function generateDivision(param) { // wait why do this just multiply the divisor x times until it reaches the upper bound of the dividend
    return new Promise((resolve) => {
        let divisionDividend_LOWER = param.init.divisionDividend_LOWER
        let divisionDividend_UPPER = param.init.divisionDividend_UPPER
        let divisionDivisor_LOWER = param.init.divisionDivisor_LOWER
        let divisionDivisor_UPPER = param.init.divisionDivisor_UPPER

        let divisor = rand(divisionDivisor_LOWER, divisionDivisor_UPPER)
        getPossibleDividends(divisor, divisionDividend_UPPER, divisionDivisor_LOWER).then(allDividends => {
            return dividend = allDividends[rand(0, allDividends.length - 1)]
        }).then(dividend => {
            if (dividend != undefined){
                console.log(dividend)
                return resolve(
                    {
                        a: dividend,
                        b: divisor,
                        c: dividend / divisor,
                    })
            }
        })
    })
}

function getPossibleDividends(divisor, divisionDividend_UPPER, divisionDivisor_LOWER) {
    return new Promise((resolve) => {
        let dividends = []
        for (i = 1; i < divisionDividend_UPPER; i++) {
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