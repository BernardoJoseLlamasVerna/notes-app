/*const square = function (x) {
    return x * x;
}*/

// Arrow function syntax:
/*const square = x => {
    return x*x;
}*/

// const square = x => x*x;

// console.log(square(3));

// array functions cannot access their own this value, what makes them poor candidates for methods
const event = {
    name: 'Birthday Party',
    guesList: ['Andrew', 'Jen', 'Mike'],
    printGuestList() {
        console.log('Guest list for ' + this.name);

        this.guesList.forEach((guest) => {
            console.log(guest + ' is attending ' + this.name)
        });
    }
}

event.printGuestList();


