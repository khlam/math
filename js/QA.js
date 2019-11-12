function question(data){
    switch(data.t) {
        case 'addition':
            return `${data.a} + ${data.b}`
        case 'subtraction':
            return `${data.a} - ${data.b}`
        case 'multiplication':
            return `not impl`
        case 'division':
            return `${data.a} / ${data.b}`
        default:
            return
    }
}

function display(data, questionNumber){
    return `<div id='currentQuestion' class='col-12 question' class='col-12' style='text-align: center;'>
                <h1>
                    ${question(data)} =
                    <input id='answerBox' type='number' onKeyDown='return _submitAnswer(event, ${data.c}, ${questionNumber}, params)'></input>
                </h1>
            </div>`
}

function submitAnswer(correctAnswer, questionNumber){
    let userAnswer = document.getElementById('answerBox').value
    console.log(`C:${correctAnswer} U:${userAnswer}`)
    let cell = document.getElementById("r_"+questionNumber).insertCell(-1)
    if ((userAnswer !== '') && (parseInt(correctAnswer) === parseInt(userAnswer))) {
        cell.className = "correctAnswer"
        cell.innerHTML = `${correctAnswer}` 
        return true
    }else {
        cell.className = "wrongAnswer"
        cell.innerHTML = `${userAnswer}`
        return false
    }
}

function recordQuestion(data, questionNumber) {
    return `<tr id='r_${questionNumber}'><td id='q_${questionNumber}'>${question(data)}</td> <td> </td></tr>`
}
