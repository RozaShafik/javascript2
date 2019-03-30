
'use strict';

const arr2d = [[1, 2], [3, 4], [5, 6]];
const arr3d = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];

function flattenArray2d(arr) {
  // Replace this comment and the next line with your code
 // console.log(arr);
 const twoD=[];
 for (let i=0;i<arr.length;i++){
     for (let j=0;j<arr[i].length;j++){
        twoD.push(arr[i][j]);
     }
    }
console.log(twoD);
}
function flattenArray3d(arr) {
  // Replace this comment and the next line with your code
 // console.log(arr);
 const threeD=[ ];
 for(let x=0;x<arr.length;x++){
     for(let y=0;y<arr[x].legth;y++){
         for(let z=0;z<arr[y];z++){
              threeD.push(arr[x][y][z]);
         }
     }
 }
 console.log(threeD);
}

console.log(flattenArray2d(arr2d)); // -> [1, 2, 3, 4, 5, 6]
console.log(flattenArray3d(arr3d)); // -> [1, 2, 3, 4, 5, 6, 7, 8]

// Do not change or remove anything below this line
module.exports = {
  flattenArray2d,
  flattenArray3d,
};

