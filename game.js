function calculate()
{
    p = document.getElementById("p").value;
    n = document.getElementById("n").value;
    r = document.getElementById("r").value;
    result = document.getElementById("result");
    
    result.innerHTML = "The interest is " + (p*n*r/100);
}
 function compoundInterest(principal, interest ,nyear,ntime ) {
                 
  principal = document.getElementById("getPrincipalValue").value;
  interest = document.getElementById("getInterestRate").value;
  nyear = document.getElementById("getYear").value;
  ntime = document.getElementById("getTiming").value;               
   

var resultCompound  = ( principal* Math.pow((1 + (interest/(ntime*100))), (ntime*nyear)));

 
  document.getElementById("compounded").innerHTML = "The interest is " + resultCompound;
}