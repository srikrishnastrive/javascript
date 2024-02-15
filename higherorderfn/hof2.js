//reduce function in javascript
//reduce is a higher order function available for arrays
//reduce also takes function as an argument.
//it one by one goes to every element of the array.


const arr  = [1,2,3,4,5,6];
//currentresult is the actual index happening

function sum(prevResult,currentResult){
    console.log(prevResult,currentResult);
    return prevResult+currentResult;
}

const result = arr.reduce(sum);

console.log(result);

//using reduce 

/**
 * cart --> [iphone {price:10000,name:"Iphone"},
 * case {price:500,name:"backcover"}
 * ]
 */

let cart  = [{price:100,name:"Iphone"},
{price:500,name:"backcover"},
{price:300,name:"tempor glass"}];

function addPrices(prevPrice,currentPrice){
    let newprice = prevPrice.price + currentPrice.price;
    return {price:newprice};
}


let totalPrices = cart.reduce(addPrices);

console.log(totalPrices,totalPrices.price);