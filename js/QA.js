function display(data){
    switch(data.t) {
        case 'addition':
            console.log('not impl')
            break;
        case 'subtraction':
            console.log('not impl')
            break;
        case 'multiplication':
            console.log('not impl')
            break;
        case 'division':
            return `<div id='currentQuestion' class='col-12' class='col-12' style='text-align: center;'><h1>${data.a} / ${data.b} = </h1></div>`
        default:
            return
    }
}