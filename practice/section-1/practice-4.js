'use strict';

// function collectSameElements(collectionA, objectB) {
//   var result = [];
//     for(var i=0;i<collectionA.length;i++){
//             var collectionB =  objectB['value'];
//             for(var j=0;j<collectionB.length;j++){
//               if(collectionA[i].key == collectionB[j]){
//                  result.push(collectionA[i].key);
//               }
//             }
//           } 
//        return result;
// }

// function collectSameElements(collectionA, objectB) {
//   var result = [];
//     for(var n in collectionA){
//             var collectionB =  objectB['value'];
//             for(var j in collectionB){
//               if(collectionA[n].key == collectionB[j]){
//                  result.push(collectionA[n].key);
//               }
//             }
//           } 
//        return result;
// }

function collectSameElements(collectionA, objectB) {
  const value = objectB.value;
  let result = collectionA.map(item => {
    if(value.includes(item.key))return item.key;
  }).filter(v => v);
  return result;
}
