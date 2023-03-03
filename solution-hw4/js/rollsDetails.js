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

const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const rollType = params.get('roll');

const roll_info = rolls[rollType];
const roll_base = Object.values(roll_info)[0];
const roll_image = Object.values(roll_info)[1];

function updateElement() {
    const rollImageElement = document.querySelector('.product-image');
    const rollPriceElement = document.querySelector('.price');

    rollImageElement.src = roll_image;
    rollPriceElement.innerText = roll_base;
}

// need to call updateElement(); when user clicks on a details page <3 -Ria

// following lab
function addNewRoll(name, basePrice, imageFile) {
    const notecard = new Notecard(imageURL, title, body);
    notecardSet.add(notecard);
}

const cart = new Array(); 
