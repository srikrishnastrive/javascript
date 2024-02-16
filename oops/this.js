const iphone = {
    name:"iphone",
    price:10000,
    rating : 4.0,
    display:function()  {
        let iphoneRed = {
            name:"iphone Red",
            price:11000,
            print : () => {
                console.log(this);
            },
        }
        iphoneRed.print();
           

    }
}

iphone.display();