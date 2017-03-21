'use strict';

function collectSameElements(collectionA, objectB) {
  var result = [];
    for(var obj of collectionA){
            var collectionB =  objectB['value'];
            for(var j=0;j<collectionB.length;j++){
              if(collectionA[i].key == collectionB[j]){
                 result.push(collectionA[i].key);
              }
            }
          } 
       return result;

}
