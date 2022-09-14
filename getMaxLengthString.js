const { template } = require('@babel/core')
// ให้เขียน Function ชื่อ getMaxLengthString (arrayOfString) เพื่อ return array ของ String 
// เฉพาะที่มีความยาวของจำนวนตัวอักษรมากที่สุด กรณี arrayOfString มีค่าเป็น null หรือ undefined ให้ return undefined
//getMaxLengthString(['hello', 'hi', 'hey']) return ['hello']


function getMaxLengthString(arrayOfString) {
    if(arrayOfString===null || arrayOfString===undefined){
        return undefined
       }  
   
    let max=[arrayOfString[0]]
    
for(let i= 0;i<arrayOfString.length-1;i++){
// console.log(arrayOfString[i].length+" : "+arrayOfString[i+1].length);
// console.log(arrayOfString[i].length>=arrayOfString[i+1].length);
if(max[0].length<arrayOfString[i+1].length){
    max=[arrayOfString[i+1]]
  }else if(max[0].length==arrayOfString[i+1].length){
    max.push(arrayOfString[i+1])
  }
 
}
return max
//  for(let i=1;i<=arrayOfString.length-1;i++){
//     if(arrayOfString[i-1].length > arrayOfString[i].length){
//         arrayOfString[i]=max
//     }  
//  }

 
}

//console.log(getMaxLengthString(undefined))
module.exports = getMaxLengthString




