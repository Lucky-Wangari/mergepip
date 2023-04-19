function divideArray(array){
    if(array.length <= 1){
        return array
    }
    // locate middle of the array using math.floor
    let middle = Math.floor((array.length)/2)
    //slice the left and right side of the array
    let leftSide = array.slice (0, middle)
    let rightSide = array.slice (middle)
    //console the sliced array
    console.log({leftSide});
    console.log({rightSide});

    return sort(divideArray(leftSide), divideArray(rightSide))
}
//sorting the array
function sort(leftSide, rightSide){
    let emptyArray = []
    while(leftSide && rightSide){
        if(rightSide[0] < leftSide[0]){
            emptyArray.push(rightSide.shift())

        }
        emptyArray.push(leftSide.shift())
    }
    console.log(emptyArray)
    return[...emptyArray,...leftSide,...rightSide]
}
let number = [67,90,54,21,13,98,34,99,11,6];
console.log(divideArray(number));