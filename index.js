function getIndexToIns(arr, num) {
    arr.push(num);
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) arr[i] = [arr[j], arr[j] = arr[i]][0];
        }
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == num) {
            console.log(i);
            return i;
        }
    }
    return num;
}
getIndexToIns([10, 20, 30, 40, 50], 35);
getIndexToIns([10, 20, 30, 40, 50], 30);
getIndexToIns([3, 10, 5], 3);
getIndexToIns([5, 3, 20, 3], 5);