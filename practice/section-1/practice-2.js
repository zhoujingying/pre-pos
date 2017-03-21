'use strict';

function collectSameElements(collectionA, collectionB) {
  var result = [];
  for(var i=0;i<collectionA.length;i++){
    for(var a=0;a<collectionB.length;a++){
      for(var b=0;b<collectionB[a].length;b++){
        if(collectionA[i] == collectionB[a][b]){
          result.push(collectionA[i]);
        }
      }
    }
  }
  return result;
}
