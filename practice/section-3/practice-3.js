'use strict';

function createUpdatedCollection(collectionA, objectB) {
    var collectionC = countSameElements(collectionA);
    var result = [];
    var flag;
    for(var i=0;i<collectionC.length;i++){
            var collectionB =  objectB['value'];
            flag = false;
            for(var j=0;j<collectionB.length;j++){
              if(collectionC[i].key == collectionB[j]){
                flag = true;
                if(collectionC[i].count>=3){
                  result.push({
                   key:collectionC[i].key,
                   count:Number(collectionC[i].count)-parseInt(collectionC[i].count/3)
                 });
                
                }
                  break;
              }}
              if(!flag){
                result.push({
                   key:collectionC[i].key,
                   count:collectionC[i].count
                 });
                }
              } 
       return result;
}

function countSameElements(collection) {
var result = [{
    key:collection[0],
    count:0
  }];
  var flag;
  for(var cValue of collection){
      flag = false;
      for(var rValue of result){
        if(cValue == rValue.key){
          flag = true;
          rValue.count++;
        }
      }
        if(!flag){
           result.push({
            key:cValue,
            count:1
          });
          
        }
  }
  return result;
}
