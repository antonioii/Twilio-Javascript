const numInput = Number(process.argv[2]);
let answer = '';

if (numInput % 3 == 0) {
  answer += 'Java';
}

if (numInput % 5 == 0) {
  answer += 'Script';
}

if (numInput % 3 != 0 && numInput % 5 != 0) {
  answer = String(numberInput);
}

console.log(answer);