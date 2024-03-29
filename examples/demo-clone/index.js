function deepClone(obj) {
    let newObj = Array.isArray(obj) ? [] : {}
    if (obj && typeof obj === "object") {
        for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
                newObj[key] = (obj && typeof obj[key] === 'object') ? deepClone(obj[key]) : obj[key];
            }
        }
    }
    return newObj
}
// const newObj = deepClone(oldObj));

let series = [
    {
        type: 'line',
        data: [1,2,3,4,5]
    }
]

