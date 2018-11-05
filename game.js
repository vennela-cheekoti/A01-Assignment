var App={
  launch: launch,
  calculateSimple: calculateSimple,
  compoundInterest: compoundInterest
}
function launch(){
  
  const total=calculateSimple(principal, rate, year)

 
  $("#p").html(principal)
  $("#r").html(rate)
  $("#n").html(year)
  $("#result").html('')
  
}


function calculateSimple(principal,rate,year){
  principal = parseInt(principal)
  rate = parseInt(rate)
  year = parseInt(year)
  const MIN_VALUE = 1
  if (isNaN(principal) || isNaN(rate) || isNaN(year)) {
  return 0
  }
  if (principal==" " || rate==" " || year==" ") {
    return 0
    }
  if (principal < MIN_VALUE) {
  principal = 0
  }
  if (rate < MIN_VALUE) {
  principal = 0
  }
  if (year < MIN_VALUE) {
    principal = 0
  }

  let total= principal*(1+(rate*year/100))
 
  if(document.getElementById("result")){
    document.getElementById("result").innerHTML = "The total amount is: "+total
  }
  return total

}


 function compoundInterest(principal, interest ,nyear,ntime ) {
   
                 
  principal = document.getElementById("getPrincipalValue").value;
  interest = document.getElementById("getInterestRate").value;
  ntime = document.getElementById("getYear").value;
  nyear = document.getElementById("getTiming").value;               
   

var resultCompound  = (principal)*Math.pow(1+(interest/(ntime*100)),(ntime*nyear));

 
  document.getElementById("compounded").innerHTML = "The total amount  is " + resultCompound;
}