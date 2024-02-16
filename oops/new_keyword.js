class product {
    name;
    price;
    description;

    constructor (n,p,d){
        this.name = n;
        this.price = p;
        this.description = d;
        return this;
        // return 1;
        // return "String";
        // return {};
        // return {x:10};
        
    }
    display (){
        //print the product
    }
}

const p = new product("iphone",100000,"that is iphone"); 
console.log(p);
//new is calling the constructor of the class
