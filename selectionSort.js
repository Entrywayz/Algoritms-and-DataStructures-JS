// O(n * n)
function selectionSort(array) {
    for(let i = 0; i < array.length; i++) {
        let indexMin = i
        for(let j = i + 1; j < array.length; j++) {
            if(array[j] < array[indexMin]) {
                indexMin = j
            }
        }
        let tmp = array[i]
        array[i] = array[indexMin]
        array[indexMin] = tmp
    }
    return array
}