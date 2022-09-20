'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  var numDec = 0;

    for(var i = 0; i < num.length; i++){
      
      if(num[(num.length - 1)-(i)]== 1){
      
        numDec = numDec + Math.pow(2, i);
      }
  
  }
  return numDec;

}

function DecimalABinario(num) {
  // tu codigo aca
  var dividendo = num;
 
  var numBin = dividendo%2;
  
  while(dividendo > 1){

    dividendo = Math.trunc(dividendo/2);
    numBin = dividendo%2 +""+ numBin;

  }
 return numBin;

}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}