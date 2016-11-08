//関数定義
function id(value){
  return value;
}


//偶数とい数の判定
function classifyInt(integer){
    let amari = integer % 2;
   if(amari == 0){
     return "偶数";
   }else{
     return "奇数";  
   }
}


//最大公約数
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


//総和
function sum(lowerBound, upperBound){
   let result =0;
   let i = Math.ceil(lowerBound);
   while(i <= upperBound){
     result = result + i;
     i = i + 1;
   }
return result;
}


//配列の操作
let array = [1, 2, 3, 4, 5, 6, 7];
let oddOnly = [1, 3, 5, 7, 9];

function sumEvenNumbers(array){
    let sum = 0;
    array.forEach(function(val){
      if (val % 2 == 0){
        sum += val;
      }
    });
    return sum
}