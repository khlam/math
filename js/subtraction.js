function generateSubtraction(param) {
    return new Promise((resolve) => {
        let subtraction_LOWER = param.init.subtraction_LOWER
        let subtraction_UPPER = param.init.subtraction_UPPER
        a = rand(subtraction_LOWER, subtraction_UPPER)
        b = rand(subtraction_LOWER, subtraction_UPPER)
        return resolve(
            {
                a: a,
                b: b,
                c: a - b,
                t: "subtraction",
            })
        })
}
