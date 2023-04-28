const glazingPrices = {
    "Keep Original": 0.0,
    "Sugar Milk": 0.0,
    "Vanilla Milk": 0.50,
    "Double chocolate": 1.50
};

const packPrice = {
    "1": 1,
    "3": 3,
    "6": 5,
    "12": 10
};

// empty array to hold the items in the cart
const shoppingCart = [];

// counter to assign unique ids to the cart items
let rollCount = 0;

// define class for Roll object
class Roll {
    constructor(rollType, rollGlazing, packSize, rollPrice) {
        this.type = rollType;
        this.glazing = rollGlazing;
        this.size = packSize;
        this.basePrice = rollPrice;
        this.calculatedPrice = (this.basePrice + glazingPrices[this.glazing]) * packPrice[this.size];
    }
}

// fill cart with some items
function fillCart() {
    shoppingCart.push(new Roll("Original", "Sugar Milk", 1, 2.49));
    shoppingCart.push(new Roll("Walnut", "Vanilla Milk", 12, 3.49));
    shoppingCart.push(new Roll("Raisin", "Sugar Milk", 3, 2.99));
    shoppingCart.push(new Roll("Apple", "Keep Original", 3, 3.49));
}

// making a single roll in the cart 
function renderRoll(roll) {
    // getting the image source based on the rollType of roll
    const imageSource = `images/products/${rolls[roll.type]["imageFile"]}`;

    // create a new div element to represent the roll in the cart
    const rollElement = document.createElement("div");
    rollElement.className = "cart-item";
    rollElement.id = `roll-${rollCount}`;

    // create a div to hold the roll image
    const imageContainer = document.createElement("div");
    const rollImage = document.createElement("img");
    rollImage.className = "product-image";
    rollImage.src = imageSource;
    imageContainer.appendChild(rollImage);

    // create a div to hold the roll details
    const detailContainer = document.createElement("div");
    detailContainer.className = "item-detail";
    const rollTypeElement = document.createElement("p");
    rollTypeElement.innerText = `${roll.type} Cinnamon Roll`;
    const rollGlazingElement = document.createElement("p");
    rollGlazingElement.innerText = roll.glazing;
    const packElement = document.createElement("p");
    packElement.innerText = `Pack Size: ${roll.size}`;
    detailContainer.appendChild(rollTypeElement);
    detailContainer.appendChild(rollGlazingElement);
    detailContainer.appendChild(packElement);

    // create a div to hold the roll price
    const priceContainer = document.createElement("div");
    priceContainer.className = "item-price";
    const priceElement = document.createElement("p");
    priceElement.innerText = `$ ${roll.calculatedPrice.toFixed(2)}`;
    priceContainer.appendChild(priceElement);

    // create a remove button for the roll
    const removeElement = document.createElement("p");
    removeElement.className = "remove";
    removeElement.innerText = "Remove";
    removeElement.onclick = function() {
        // remove the roll from the cart
        rollElement.remove();
        shoppingCart.splice(shoppingCart.indexOf(roll), 1);
        totalCost
    ();
    };

    rollElement.appendChild(imageContainer);
    rollElement.appendChild(detailContainer);
    rollElement.appendChild(priceContainer);
    rollElement.appendChild(removeElement);
 rollCount += 1;
    return rollElement;
}

function addtoCart(roll) {
    const cartElement = document.querySelector(".cart-wrapper");
    cartElement.appendChild(renderRoll(roll));
}

// function calculates the total price of all items in the cart by iterating through each roll object in shoppingCart array and adding up the price property of each roll. also updates the total price element in the HTML file with the new calculated total price
function totalCost() {
    const totalPriceElement = document.querySelector(".total-price");
    const totalPrice = shoppingCart.reduce((total, roll) => total + roll.calculatedPrice, 0);
    totalPriceElement.innerText = `$ ${totalPrice.toFixed(2)}`;
}

fillCart();
shoppingCart.forEach(addtoCart);
totalCost();