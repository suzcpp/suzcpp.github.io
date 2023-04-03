console.log(document.getElementById("main"));
console.log(document.getElementsByClassName("row source-line"));
var sc = document.getElementsByClassName("row source-line");
//console.log(sc.length);
for(let i = sc.length-1; i>=0; i--) {
    //console.log(i);
    //console.log(sc[i]);
    sc[i].remove();
    
}

var sps = document.getElementsByTagName("span");
for(let i = sps.length-1; i>=0; i--) {
    if(sps[i].innerHTML=="OTHER-ID: ")
    {
        sps[i].innerHTML="Authors: ";
    }
}

if (window.stop) 
    window.stop(); 
else 
    document.execCommand("Stop"); 
//console.log(sc.length);