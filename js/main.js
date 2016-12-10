'use strict';

/*console.log(document);*/

/*function sprawdzam() {
    alert("ALERT!");
}*/

function wyswietlInfo() {
   /* alert("ALERT!");*/

    if (document.getElementById("wszystkie-zgody").checked==true) 
    {
        document.getElementById("zgoda-marketingowa-1").checked=true;
        document.getElementById("zgoda-marketingowa-2").checked=true;
        document.getElementById("zgoda-marketingowa-1").disabled=true;
        document.getElementById("zgoda-marketingowa-2").disabled=true;
    } 
    else {
        document.getElementById("zgoda-marketingowa-1").checked=false;
        document.getElementById("zgoda-marketingowa-2").checked=false;
        document.getElementById("zgoda-marketingowa-1").disabled=false;
        document.getElementById("zgoda-marketingowa-2").disabled=false;
        
    }
}
 
document.getElementById("wszystkie-zgody").addEventListener('click', wyswietlInfo)

