function frankenSplice(arr1, arr2, n) {
    let loc = arr2.slice();
    for (let i = 0; i < arr2.length; i++) {
        loc.splice(n, 0, arr1[i]);
        n++
    }
    console.log(loc);
    return loc;
}

frankenSplice([1, 2, 3], [4, 5], 1);
frankenSplice([1, 2], ["a", "b"], 1);
frankenSplice([1, 2, 3, 4], [], 0);