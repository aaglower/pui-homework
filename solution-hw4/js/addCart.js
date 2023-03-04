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

const testroll = addNewRoll(
    "test",
    "test",
    "test",
    "test",
);

for (const roll of cart) {
    createElement(roll);
}

function createElement(roll) {
    const template = document.querySelector('#roll-template');
    console.log(template)
    const clone = template.content.cloneNode(true);
    roll.element = clone.querySelector('.cart-item');
    console.log(roll.element)

    // btnAdd.addEventListener('click', () => {
    //     addNewRoll();
    // });
}

// function updateElement(roll) {
//     const rollImageElement = roll.element.querySelector('.product-image');
//     const rollPriceElement = roll.element.querySelector('.item-price');
//     const rollBodyElement = roll.element.querySelector('.item-detail');

//     rollImageElement.src = roll.;
//     rollPriceElement.innerText = roll_base;
//     rollBodyElement.
// }