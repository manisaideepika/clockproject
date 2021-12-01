
function settfun(){
    
   let waketime = document.getElementById("wakeup").value;
   let lunchtime = document.getElementById("lunch").value;
   let naptime = document.getElementById("nap").value;
   

   if(waketime=="" || lunchtime=="" || naptime=="" ){

   }
   else{
   var wake = document.getElementById("waket").innerText = "wake up time is -- "+waketime;
   var lun = document.getElementById("luncht").innerText = "lunch up time is -- "+lunchtime;
   var n = document.getElementById("napt").innerText = "nap up time is -- "+naptime;

   document.getElementById("divibox2").style.display = "block";
   }

}
