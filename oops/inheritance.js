class category {
    constructor(c){
        this.category = c;
    }
}

class product extends category{
    constructor(n,c){
        super(c);
        //to pass the category to the parent class

        this.name = n;
    }
}

 p  = new product("iphone","mobiles");

 console.log(p);