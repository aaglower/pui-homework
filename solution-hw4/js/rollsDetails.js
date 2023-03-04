const rolls = {
    "Original": {
        "basePrice": 2.49,
        "imageFile": "images/products/original-cinnamon-roll.jpg"
    },
    "Apple": {
        "basePrice": 3.49,
        "imageFile": "images/products/apple-cinnamon-roll.jpg"
    },
    "Raisin": {
        "basePrice": 2.99,
        "imageFile": "images/products/raisin-cinnamon-roll.jpg"
    },
    "Walnut": {
        "basePrice": 3.49,
        "imageFile": "images/products/walnut-cinnamon-roll.jpg"
    },
    "Double-Chocolate": {
        "basePrice": 3.99,
        "imageFile": "images/products/double-chocolate-cinnamon-roll.jpg"
    },
    "Strawberry": {
        "basePrice": 3.99,
        "imageFile": "images/products/strawberry-cinnamon-roll.jpg"
    }    
};

function updateElement() {
    const queryString = window.location.search;
    const params = new URLSearchParams(queryString);
    const rollType = params.get('roll');
    
    const roll_info = rolls[rollType];
    const roll_base = Object.values(roll_info)[0];
    const roll_image = Object.values(roll_info)[1];
    
    const rollImageElement = document.querySelector('.product-image');
    const rollPriceElement = document.querySelector('.price');

    rollImageElement.src = roll_image;
    rollPriceElement.innerText = roll_base;
}

// the code above updates the details page based on what item you click on.
// the code below attempts to update the cart page after you click the add to cart button however i've got bugs and i'm not sure my concept is entirely correct

class Roll {

    constructor(rollType, rollGlazing, packSize, basePrice) {
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;

        this.element = null;
    }
}

const cart = new Array(); 

function addNewRoll(rollType, rollGlazing, packSize, basePrice) {
    const roll = new Roll(rollType, rollGlazing, packSize, basePrice);
    cart.push(roll);
    return roll;
}

for (const roll of cart) {
    createElement(roll);
}

function createElement(roll) {
    const template = document.querySelector('#roll-template');
    const clone = template.content.cloneNode(true);
    roll.element = clone.querySelector('.cart-item');

    addNewRoll();
}

btnAdd = document.querySelector('.addbtn');

btnAdd.addEventListener("click", createElement);

function createElement() {
}
