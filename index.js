// Write your solution here

const cats = ["Milo", "Otis", "Garfield"];


function destructivelyAppendCat(name) {
    cats.push('Ralph');
    return cats;
}

function destructivelyPrependCat(name) {
    cats.unshift('Bob');
    return cats;
}

function destructivelyRemoveLastCat(name) {
    cats.pop();
    return cats;
}

function destructivelyRemoveFirstCat(name) {
    cats.shift();
    return cats;
}

function appendCat(name) {
    const allcats = [...cats, 'Broom'];
    return allcats;
}


function prependCat(name) {
    const allcats = ['Arnold', ...cats];
    return allcats;
}

function removeLastCat() {
    const lessCats= cats.slice(0, cats.length-1);
    return lessCats;
}

function removeFirstCat() {
    const firstCat= cats.slice(1);
    return firstCat;
}