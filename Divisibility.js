const arr = [, 3, 5, 15, 12, 34, 20]

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 3 == 0) {
        if (arr[i] % 2 == 0) {
            continue;
        }
        console.log("Divide by 3 ", arr[i]);
    }
}