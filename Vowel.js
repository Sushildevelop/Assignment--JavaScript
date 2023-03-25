let personName = "Shushil Chaubey"
let n = personName.length;
let count = 0;
let vowels = ['a', 'e', 'i', 'o', 'u']

for (let i = 0; i < n; i++) {
    if (vowels.includes(personName[i].toLowerCase())) {
        count++;
    }

}
console.log(count);