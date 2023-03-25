let var1 = 7

for (let i = 7; i >= 1; i--) {
    let stars = '';
    for (let j = 1; j <= i; j++) {
        stars += '*';
    }
    console.log(stars);
}