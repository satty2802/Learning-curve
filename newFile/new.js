const str = 'The quick brown fox jumps over the lazy dog.';

const words = str.split('');
console.log(words[3]);
// Expected output: "fox"
console.log(words);


const chars = str.split(' ');
console.log(chars[8]);
// Expected output: "k"
console.log(chars);


const strCopy = str.split();
console.log(strCopy);
// Expected output: Array ["The quick brown fox jumps over the lazy dog."]
