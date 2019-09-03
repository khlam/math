function display(data){
    switch(data.t) {
        case 'addition':
            console.log("not impl")
            break;
        case 'subtraction':
            console.log("not impl")
            break;
        case 'multiplication':
            console.log("not impl")
            break;
        case 'division':
            return `<div class='col-12'><h2>${data.a} / ${data.b} = </h2></div>`
        default:
            return
    }
}