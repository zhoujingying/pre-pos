'use strict';

function createUpdatedCollection(collectionA, objectB) {
  var result = [];
  var flag;
    for(var i=0;i<collectionA.length;i++){
            var collectionB =  objectB['value'];
            flag = false;
            for(var j=0;j<collectionB.length;j++){
              if(collectionA[i].key == collectionB[j]){
                flag = true;
                if(collectionA[i].count>=3){
                  result.push({
                   key:collectionA[i].key,
                   count:Number(collectionA[i].count)-parseInt(collectionA[i].count/3)
                 });
                
                }
                  break;
              }}
              if(!flag){
                result.push({
                   key:collectionA[i].key,
                   count:collectionA[i].count
                 });
                }
              }
                
            
          
       return result;

}
