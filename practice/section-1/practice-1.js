'use strict';

function collectSameElements(collectionA, collectionB) {
  var resule = [];
  for(var i=0;i<collectionA.length;i++){
    for(var j=0;j<collectionB.length;j++){
      if(collectionA[i] == collectionB[j]){
          resule.push(collectionA[i]);
      }
  }
  return resule;
  }
  


