'use strict';

function countSameElements(collection) {
  var result = [{
    name:collection[0],
    summary:0
  }];
  var flag;
  for(var cValue of collection){
      flag = false;
      for(var rValue of result){
        if(cValue == rValue.name){
          flag = true;
          rValue.summary++;
          break;
        }
        if(cValue.split('[')[0] == rValue.name){
          flag = true;
          rValue.summary = Number(rValue.summary) + Number(cValue.split('[')[1].split(']')[0]);
        }
        if(cValue.split('-')[0] == rValue.name){
          flag = true;
          rValue.summary = Number(rValue.summary) + Number(cValue.split('-')[1]);
        }
      }
        if(!flag){
          if(cValue.split('-').length == 2){
            result.push({
              name:cValue.split('-')[0],
              summary:Number(cValue.split('-')[1])
            });
            break;
          }
          if(cValue.split(':').length == 2){
            result.push({
              name:cValue.split(':')[0],
              summary:Number(cValue.split(':')[1])
            });
            
          }else{
             result.push({
              name:cValue,
              summary:1
          });
          }
          
          
        }
  }
  return result;
}
