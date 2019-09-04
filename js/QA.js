function question(data){
    switch(data.t) {
        case 'addition':
            return `not impl`
        case 'subtraction':
            return `not impl`
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
    if (parseInt(correctAnswer) === parseInt(userAnswer)) {
        document.getElementById("r_"+questionNumber).insertCell(-1).innerHTML = `<td class="correctAnswer" style="background-color:green;">${correctAnswer}</td>` 
        return true
    }else {
        document.getElementById("r_"+questionNumber).insertCell(-1).innerHTML = `<td class="wrongAnswer" style="background-color:red;">${userAnswer}</td>`
        return false
    }
}

function recordQuestion(data, questionNumber) {
    return `<tr id='r_${questionNumber}'><td id='q_${questionNumber}'>${question(data)}</td></tr>`
}
