let y =setInterval(function (){
    console.log("another one")
},1000);
let x = setInterval(function (){
    console.log("another two")
},500);


clearInterval(x);
clearInterval(y);