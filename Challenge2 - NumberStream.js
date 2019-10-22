function NumberStream(str) { 
    let count = [];
    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i+1]) {
        count.push(str[i+1]);
        } else {
        if (count.length >= 1) {
            if ((count.length + 1) >= Number(count[0])) {
            return true;
            } 
        }

        count = [];
        }
    }

    return false;
}

console.log('Input:"5556293383563665"');
console.log('Output: ' + NumberStream("5556293383563665")); // false

console.log('Input:"5788888888882339999"');
console.log('Output: ' + NumberStream("5788888888882339999")); // true