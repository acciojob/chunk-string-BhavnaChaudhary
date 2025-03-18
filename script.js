function stringChop(str, chunkSize) {
  // your code here
    if (!str) return [];
    
    let result = [];
    for (let i = 0; i < str.length; i += chunkSize) {
        result.push(str.slice(i, i + chunkSize));
    }
    
    return result;
}


// Do not change the code below
const str = prompt("Enter String.");
const chunkSize = prompt("Enter Chunk Size.");
alert(stringChop(str, chunkSize));
