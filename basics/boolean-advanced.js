let isAccountLocked = false;
let userRole = 'admin';

if (isAccountLocked) {
    console.log('Account locked');
} else if (userRole === 'admin') {
    console.log('Welcome admin!');
} else {
    console.log('Welcome user!')
}


// challenge
// it's freezing, it's hot, or it's just right
let temp = 98;
let FREEZING = 32;
let HEATWAVE = 98;

if (temp <= FREEZING) {
    console.log('It\s freezing outside!');
} else if (temp >= HEATWAVE) {
    console.log('It\s sweltering outside!');
} else {
    console.log('Temperature is just right');
}
