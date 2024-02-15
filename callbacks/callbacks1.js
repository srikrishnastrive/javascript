//call back function


function fun(x, fn){
    for (let i = 0; i < x; i++){
        console.log(i);
    }

    fn();
}


//here fn is the call back function

fun(10, function exec() {
    console.log("I am exectuted also")
})