function initGenProblems() {

    let param = 
    {
        'init': {
                    'addition': document.getElementById('add').checked, // Generate addition problems in range A - B
                    'additionA': 0,
                    'additionB': 0,
                    'allowAdditionNegative': false,
            
                    'subtraction': document.getElementById('sub').checked, // Generate subtraction problems in range A - B
                    'subtractionA' : 0, 
                    'subtractionB' : 0,
                    'allowSubtractionNegative' : false,
            
                    'multiplication': document.getElementById('mul').checked, // Generate multiplication problems in range A - B
                    'multiplicationA' : 0,
                    'multiplicationB' : 0,
                    'allowMultiplicationNegative' : false,
            
                    'division': document.getElementById('div').checked, // Generate division problems in range A - B
                    // Set range of Dividend
                    'divisionDividendA' : 0,
                    'divisionDividendB' : 0,
                    // Set range of Divisor
                    'divisionDivisorA' : 0,
                    'divisionDivisorB' : 0,
                    'allowDivisionNegative' : false,
                },
    }
    //console.log(param)
    return param
}