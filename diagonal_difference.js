'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}


function diagonalDifference(arr) {
    // Write your code here
    let snc = 0;
    let snc2 = 0;
    let k = arr.length;
    
for(let i = 0; i<arr.length;i++){
    
   snc =  arr[i][i]+ snc
   
  
}

for(let j =0 ; j<arr.length; j++){
    snc2 = arr[j][k-1]+snc2
    k--
}
let newval = snc -snc2
return Math.abs(newval)
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    let arr = Array(n);

    for (let i = 0; i < n; i++) {
        arr[i] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }

    const result = diagonalDifference(arr);

    ws.write(result + '\n');

    ws.end();
}
