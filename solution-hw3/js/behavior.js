let glazingOptions = [
    {
        glaze: 'Keep original',
        price: 0,
    },
    {
        glaze: 'Sugar milk',
        price: 0,
    },
    {
        glaze: 'Vanilla milk',
        price: 0.5,
    },
    {
        glaze: 'Double chocolate',
        price: 1.5,
    },
]

let packsizeOptions = [
    {
        size: 1,
        price: 1,
    },
    {
        size: 3,
        price: 3,
    },
    {
        size: 6,
        price: 5,
    },
    {
        size: 12,
        price: 10,
    },
]

let basePrice = 2.49
let glazePrice = 0
let packPrice = 0

function glazingchange(glazeselected) {

    // originally tried to use query selector but it wouldn't work, then tried get element by id but not sure how to improve it now. confused lol going to need feedback / to come to OH
    var selectGlazing = document.getElementById('#Glazing');
    console.log(selectGlazing)
    for(var i=0; i < glazingOptions.length; i++) 
    {
        var glazeselected = glazingOptions[i];
        if (selectGlazing === glazeselected.glaze) {
            const priceChange = glazeselected.price;
            glazePrice = priceChange;
            document.querySelector('#price').textContent = basePrice+glazePrice;
        }
    }
}

function packsizechange(sizeselected) {
    selectPackSize = document.querySelector('#Pack Size');
    for(var i=0; i < packsizeOptions.length; i++) 
    {
        var sizeselected = packsizeOptions[i];
        if (selectPackSize === sizeselected.size) {
            const sizeChange = sizeselected.price;
            packPrice = sizeChange;
            document.querySelector('#price').textContent =  (basePrice+glazePrice)*packPrice;
        }
    }
}