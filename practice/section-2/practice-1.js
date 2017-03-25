'use strict';

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
