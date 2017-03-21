'use strict';

function collectSameElements(collectionA, objectB) {
    var result = [];
    for(var i=0;i<collectionA.length;i++){
            var collectionB =  objectB['value'];
            for(var j=0;j<collectionB.length;j++){
              if(collectionA[i] == collectionB[j]){
                 result.push(collectionA[i]);
              }
            }
          } 
       return result;
    }
 