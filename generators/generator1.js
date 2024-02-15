function* nextElement(){
    console.log("I am inside the generator function");
    yield 1;
    yield 2;
    console.log("some where in the middle");
    yield 3;
    yield 4;
    


}

const iter = nextElement();

//actually it pushes the next element in the code


console.log("1st",iter.next());
console.log("2nd",iter.next());
console.log("3rd",iter.next());
console.log("4rd",iter.next());
console.log("5th",iter.next());