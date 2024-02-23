let player = {
    firstName : 'virat',
    lastName : 'Kohli',
    numberToBat : 3,
    canBowl : false,
    getDetails : function (){
        console.log(this.firstName,this.lastName,"comse at No.",this.numberToBat,)
    }
}

const obj = function (x,y) {
    console.log(x,y);
    this.getDetails();
}


obj.call(player,2,45);


// let x = obj.bind(player);

// console.log(this);


// x();
// console.log(player.getDetails());