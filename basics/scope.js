// Global Scope (varOne)
    // local Scope (varTwo)
        // local Scope (varFour)
    // local Scope (varThree)

let varOne = 'varOne';

if (true) {
    console.log(varOne);
    let varTwo = 'varTwo';
    console.log(varTwo);

    if (true) {
        let varFour = 'varFour';
    }
}

if (true) {
    let varThree = 'varThree';
}
// creates an error, trying to use outside scope
// console.log(varTwo);
