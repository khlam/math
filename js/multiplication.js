function generateMultiplication(param) {
    return new Promise((resolve) => {
        let multiplication_LOWER = param.init.multiplication_LOWER
        let multiplication_UPPER = param.init.multiplication_UPPER
        a = rand(multiplication_LOWER, multiplication_UPPER)
        b = rand(multiplication_LOWER, multiplication_UPPER)
        return resolve(
            {
                a: a,
                b: b,
                c: a * b,
                t: "multiplication",
            })
        })
}
