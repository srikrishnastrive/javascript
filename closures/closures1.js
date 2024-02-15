function process(){
    let i = 0;
    function innerprocess(){
        i += 1; // i is coming from the process scope
        //i is coming from the closure property inside in the function.
        return i;
    }
    return innerprocess; // we are not calling the function we are just returning.
}

// console.log(process())

let res = process();


console.log("first time calling res1",res());
console.log("second time calling res2",res());
console.log("third time calling res3",res());

//some how it is saving in the memory and persist in te memory


//[[closure]] it is storing i value;
// inner process hold property some where in the prototypal structure
//[[scopes]] it exists in the memory
//closure property remembers the variables that are aceessing inside the function
//which scope out side or inside it remembers the memory of that function
//persistent editable memory location
//getting attached to a closure property
