function largestOfFour(arr) {
    const res = [];
    for (let i = 0; i < arr.length; i++) {
        let max = arr[i][0];
        for (let j = 1; j < arr[i].length; j++) {
            if (arr[i][j] > max) max = arr[i][j];

        }
        res[i] = max;
    }
    return res
}
largestOfFour([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 7, 5],
    [48, 2, -500]
]);