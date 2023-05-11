function bouncer(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == false || Number.isNaN(arr[i]) || arr[i] == undefined || arr[i] == null) {
            for (let j = i; j < arr.length - 1; j++) {
                arr[j] = arr[j + 1];
            }
            arr.pop();
            i--;
        }

    }
    console.log(arr);
    return arr;
}
bouncer([7, "ate", "", false, 9]);
bouncer(["a", "b", "c"]);
bouncer([false, null, 0, NaN, undefined, ""]);
bouncer([null, NaN, 1, 2, undefined]);