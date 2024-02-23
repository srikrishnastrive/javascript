

// var obIn JavaScript, arrow functions (() => {}) do not create their own this context. Instead, they inherit the this value from the surrounding code (lexical scoping).

/***
 * When you use an arrow function inside an object literal like in your example, 
 * it doesn't create its own scope. Instead, it retains the scope of where it was defined, 
 * which in this case is the global scope (the window object in a browser environment). As a result, 
 * this.name and this.company inside the arrow function refer to properties of the global object (if they exist), 
 * not the properties of the obj object.
 */
obj = {
   
        name:"sanketh",
        company :"Google",
        display : () => {
            console.log(this); // Here, 'this' refers to the global scope, not the 'obj' object.
            console.log(this.name,"works in ",this.company); // 'this.name' and 'this.company' will be undefined as 'this' refers to the global scope.
     
    } 
}

{
    name:"google";
    company:"microsoft";
};
    
var obj1 = {
    name:'JD',
    company :'Microsoft',
    display : () => {
        setTimeout(()=>{
            console.log(this.name,"works in",this.company);
        },3000);
    }
}

var obj2 = {
    name:"srikrishna",
    company:"phonepe",
    display : function (){
        console.log(this);
        setTimeout(() => {
            console.log(this.name,"works in",this.company);
        },3000);
    }
}

obj2.display();
