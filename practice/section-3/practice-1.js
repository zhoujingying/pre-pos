'use strict';

function createUpdatedCollection(collectionA, objectB) {

  var result = [];
  var flag;
  var collectionB = objectB.value;
  collectionA.forEach(function(valueA,index,array){
    flag = false;
    collectionB.forEach(function(valueB,index,array){
      if(valueA.key == valueB){
        flag = true;
        result.push({
            key:valueA.key,
            count:valueA.count-1
        })
        break;
      }
      if(!flag){
        
      }
    })

  })
    // for(var i=0;i<collectionA.length;i++){
    //         var collectionB =  objectB['value'];
    //         flag = false;
    //         for(var j=0;j<collectionB.length;j++){
    //           if(collectionA[i].key == collectionB[j]){
    //             flag = true;
    //              result.push({
    //                key:collectionA[i].key,
    //                count:Number(collectionA[i].count)-1
    //              });
    //              break;
    //           }}
    //           if(!flag){
    //             result.push({
    //                key:collectionA[i].key,
    //                count:collectionA[i].count
    //              });
    //             }
    //           }

                
            
          
       return result;

}
