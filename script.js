"use strict"

document.getElementById("rodyti").addEventListener("click", function() {
    let skaicius = document.getElementById("skaicius").value;
    let skaicius1 = document.getElementById("skaicius1").value;

    if (skaicius > skaicius1) {
        console.log(skaicius);
    }  else if (skaicius < skaicius1) {
        console.log(skaicius1);
    }


document.getElementById("rezultatas").innerHTML = Math.max(skaicius, skaicius1);
} )