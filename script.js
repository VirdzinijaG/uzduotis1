"use strict"

document.getElementById("rodyti").addEventListener("click", function() {
    let skaicius = document.getElementById("skaicius").value;
    let skaicius1 = document.getElementById("skaicius1").value;

    // if (skaicius > skaicius1) {
    //     console.log(skaicius);
    // }  else if (skaicius < skaicius1) {
    //     console.log(skaicius1);
    // }


document.getElementById("rezultatas").innerHTML = Math.max(skaicius, skaicius1);
} )

document.getElementById("rodyti1").addEventListener("click", function() {
    let skaicius2 = document.getElementById("skaicius2").value;
    let skaicius3 = document.getElementById("skaicius3").value;
    let skaicius4 = document.getElementById("skaicius4").value;

document.getElementById("rezultatas1").innerHTML = Math.max(skaicius2, skaicius3, skaicius4);
} )

