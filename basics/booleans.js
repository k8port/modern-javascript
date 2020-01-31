let temp = 131;
if (temp <= 32) {
    console.log('Wearing a coat');
}

if (temp >= 100) {
    console.log('Too hot! Stay indoors.');
}

// challenge area
// age var set to age
// calculate isChild true if 7 or under
// calculate isSenior true if 65 or over
// print isChild and isSenior value

let kate = {age: 41, name: 'Kate'};
let david = {age: 44, name: 'David'};
let tatiana = {age: 6, name: 'Tatiana'};

getAdmissionRate(kate);
getAdmissionRate(david);
getAdmissionRate(tatiana);

function getAdmissionRate(person) {
    console.log(person.name);
    if (person.age <= 7) {
        console.log('Children\'s rate:', 3);
    } else if (person.age >= 65) {
        console.log('Senior Citizen\'s rate:', 4);
    } else {
        console.log('Regular rate:', 5);
    }
}
