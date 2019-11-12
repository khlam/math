function generateAddition(param) {
    return new Promise((resolve) => {
        let addition_LOWER = param.init.addition_LOWER
        let addition_UPPER = param.init.addition_UPPER
        a = rand(addition_LOWER, addition_UPPER)
        b = rand(addition_LOWER, addition_UPPER)
        return resolve(
            {
                a: a,
                b: b,
                c: a + b,
                t: "addition",
            })
        })
}