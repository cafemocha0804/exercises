function id(value){
  return value;
}


function classifyInt(integer){
    let amari = integer % 2;
   if(amari == 0){
     return "偶数";
   }else{
     return "奇数";  
   }
}


function gcd(integerA, integerB){
  let result = 1;
  let i = 2;
  let end = Math.min(integerA, integerB);
  while(i <= end){
    let amariA = integerA % i ; 
    let amariB = integerB % i ;  
    if (amariA == 0 && amariB == 0){
       result = i;
    }
    i = i + 1;
  }
 return result;
}


function sum(lowerBound, upperBound){
   let result =0;
   let i = Math.ceil(lowerBound);
   while(i <= upperBound){
     result = result + i;
     i = i + 1;
   }
return result;
}