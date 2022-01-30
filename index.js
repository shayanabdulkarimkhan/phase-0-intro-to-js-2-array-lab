const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(Ralph) {
    cats.push("Ralph");
    console.log(cats);

}

function destructivelyPrependCat(Bob) {
    cats.unshift("Bob");
    console.log(cats);
}

function destructivelyRemoveLastCat() {
    cats.pop();
    console.log(cats);
}

function destructivelyRemoveFirstCat(){
    cats.shift();
    console.log(cats);
}

function appendCat(Broom) {
    return [...cats, "Broom"];
}

function prependCat(Arnold) {
    return ["Arnold", ...cats];
}

function removeLastCat() {
    return cats.slice(0,cats.length-1);
}

function removeFirstCat() {
    return cats.slice(1);
}
// Write your solution here!
