class product{
    #name;
    #price;
    discount;

    constructor(n,p,d){
        this.#name = n;
        this.#price = p;
        this.discount =d;

    }
    //javascript gives better syntax for getter and setters

    // setName(n){
    //     if(typeof(n) !== 'string') return;
    //     this.#name = n;
    // }//setter
    set setName(n){
        if(typeof(n) !== 'string') return;
        this.#name = n;
    }//setter
    setPrice(n){
        if(n < 0) return;
        this.#price = n;
    }
    //getter
    // getName(){
    //     return this.#name;
    // }
    get getName(){
        return this.#name;
    }
    display (){
        console.log(this.#name,"cost is",this.#price,"and the discount is",this.discount);

    }
   
}

let iphone = new product("iphone 15 pro max",100000,"20 percent");
iphone.name = -1; // we are exposing to the outer access
// we can changet the access modifier we can make public
//if we want to access the private outside the class we want to go for getters and setters.
// iphone.setName("iphone 16 pro max");
iphone.setPrice("150000");
// console.log(iphone.getName());
console.log(iphone);
iphone.display();
iphone.setName = "Iphone 17 pro max"
console.log(iphone.setName);