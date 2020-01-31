let temp = 65;

if (temp >= 60 && temp <= 90) {
    console.log('It\'s really nice out.');
} else {
    console.log('It\'s not really nice out.');
}

// challenge area
let isGuestOneVegan = true;
let isGuestTwoVegan = false;

// Are both vegan?  Only offer vegan options
// At least one vegan?  Offer both vegan and non-vegan options
// Neither vegan?  Offer anything on menu

if (isGuestOneVegan && isGuestTwoVegan) {
    console.log('Offer Vegan menu only');
} else if (isGuestOneVegan || isGuestTwoVegan) {
    console.log('Offer Vegan and Non-Vegan Menu');
} else {
    console.log('Offer Non-Vegan menu only');
}
