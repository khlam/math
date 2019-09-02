function initGenProblems() {
    let init = {
            addition: document.getElementById('add').checked, // Generate addition problems in range _LOWER - _UPPER
            addition_LOWER: 0, // Lower bound
            addition_UPPER: 0, // Upper bound
            allow_LOWERdditionNegative: false,
    
            subtraction: document.getElementById('sub').checked, // Generate subtraction problems in range _LOWER - _UPPER
            subtraction_LOWER : 0, 
            subtraction_UPPER : 0,
            allowSubtractionNegative : false,
    
            multiplication: document.getElementById('mul').checked, // Generate multiplication problems in range _LOWER - _UPPER
            multiplication_LOWER : 0,
            multiplication_UPPER : 0,
            allowMultiplicationNegative : false,
    
            division: document.getElementById('div').checked, // Generate division problems in range _LOWER - _UPPER
            // Set range of Dividend
            divisionDividend_LOWER : document.getElementById("divisionDividend_LOWER").value,
            divisionDividend_UPPER : document.getElementById("divisionDividend_UPPER").value,
            // Set range of Divisor
            divisionDivisor_LOWER : document.getElementById("divisionDivisor_LOWER").value,
            divisionDivisor_UPPER : document.getElementById("divisionDivisor_UPPER").value,
            allowDivisionNegative : false,
        }
    console.log(`initGenProblems() > ${JSON.stringify(init)}`)
    return init
}