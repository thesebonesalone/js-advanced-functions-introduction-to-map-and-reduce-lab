// Your code here
function mapToNegativize(arr) {
    return arr.map(function(value){
        return -value
    })
}

function mapToNoChange(arr) {
    return arr
}
function mapToDouble(arr) {
    return arr.map(function(value){
        return value * 2
    })
}

function mapToSquare(arr) {
    return arr.map(function(value){
        return value * value
    })
}

function reduceToTotal(arr, start = 0) {
    let total = start
    for (let i = 0; i < arr.length; i += 1){
        total += arr[i]
    }
    return total
} 

function reduceToAllTrue(arr) {
    let flip = true
    arr.forEach(function(value){
        if (!value){
            flip = false
        }
    })
    return flip
}

function reduceToAnyTrue(arr) {
    let flip = false
    arr.forEach(function(value){
        if (value){
            flip = true
        }
    })
    return flip
}