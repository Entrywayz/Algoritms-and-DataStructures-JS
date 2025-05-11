//O(log2(n))

//basic method
function binarySearch(array, item) {
    let start = 0
    let end = array.length
    let middle;
    let found = false
    let position = -1

    while(found === false && start <= end) {
        c++
        middle = Math.floor((start + end) / 2)
        if(array[middle] === item) {
            found = item
            position = middle
            return position
        }
        if(item < array[middle]) {
            end = middle - 1
        } else {
            start = middle + 1
        }
    }
    return position
}

//recursion method

function recursiveBinarySearch(array, item, start, end) {
    middle = Math.floor((start + end) / 2)
    if(item === array[middle]) {
        return middle
    }
    if(item < array[middle]) {
        return recursiveBinarySearch(array, item, start, middle - 1)
    } else {
        return recursiveBinarySearch(array, item, middle + 1, end)
    }
}