//arguments objects functions
const add = (a, b) => {
    // console.log(arguments);
    return a + b;
};
console.log(add(4, 5));

//this keyboard - no longer bound
const user = {
    name: 'Siddharth',
    city: ['Boston', 'New York', 'Houston'],
    printPlacesLived() {
        return this.city.map((cities) => this.name + ' has lived in ' + cities);
        }
    };
console.log(user.printPlacesLived());

//challenge area
const multiplier = {
    //number of arrays
    number: [1,2,3],
    //multiply by single number
    multiplyBy: 2,
    multiply(){
        return this.number.map((num) => num * this.multiplyBy);
    }
};
console.log(multiplier.multiply());