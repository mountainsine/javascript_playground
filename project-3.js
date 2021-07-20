// Example Nested Array + Chaining Example

const nestedArr = [[1], [2,3]];

console.log('array number two:' + nestedArr[1]);
console.log('array number one:' + nestedArr[1][2]);

// In the second console.log() statement, we have two bracket notations chained to nestedArr. We know that nestedArr[1] is the array [2, 3]. Then to grab the first element from that array, we use nestedArr[1][0] and we get the value of 2.

const numberClusters = [[1,2], [3,4], [5,6]];
const target = numberClusters[2][1];