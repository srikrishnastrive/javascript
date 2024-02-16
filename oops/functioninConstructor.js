function product (n,p,d) {
    this.name = n;
    this.price = p;
    this.description = d;
    return this;

    // this.display = function (){
    //     console.log(this);
    // }

}

//this kind of syntax is called function constructor
//class is just wrapper over function

const p =  product("bag",100,"cool new bag");
console.log(p);