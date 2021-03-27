/*You should not only consider the first letters in this problem, otherwise it'll not pass in all tests from the game*/

const sortFirstArg = process.argv[2].toLocaleLowerCase();
const sortSecondArg = process.argv[3].toLocaleLowerCase();
let answer = 0;

if (sortFirstArg < sortSecondArg){
    answer = -1;
}

if (sortFirstArg > sortSecondArg){
    answer = 1;
}

console.log(answer);