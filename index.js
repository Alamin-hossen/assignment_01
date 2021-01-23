// assaignment.
// Problem: 01. for inch to feet
let inchToFeet = (inch) =>{
    let result = (inch / 12).toFixed(2);
    if(typeof(inch) === 'number'){
        return result + ' ' + "feet";
    }
     return "Please input a number";
} 
console.log(inchToFeet());

// Problem: 01. for feet to mile
let feetToMile = (feet) =>{
    let result = (feet / 5280).toFixed(2);
    if(typeof(feet) === 'number'){
        return result + ' ' + "miles";
    }
     return "Please input a number";
} 
console.log(feetToMile());

// problem: 02
let woodCalculator = (chair, table, bed) => {
    if(typeof(chair) === 'number' && typeof(table) === 'number' && typeof(bed) === 'number'){
        return ((chair * 1) + (table * 3) + (bed * 5)) + ' Cubic feet of woods'
    }
    return "Please input a number";
}
    
console.log(woodCalculator(5, 2, 1));

// problem: 03
let brickCalculator = (floorNumber) => {
    if (floorNumber <=10 && floorNumber >=1){
        let brickNumber = floorNumber * 15000;
        return brickNumber + ' bricks';
    }
    else if (floorNumber > 10 && floorNumber <= 20) {
        let brickNumber = ((floorNumber - 10) * 12000) + 150000;
        return brickNumber + ' bricks';
    }
    else if (floorNumber > 20){
        let brickNumber =((floorNumber - 20) * 10000) + 270000;
        return brickNumber + ' bricks';
    }
    else {
        return 'Please input a valid floor number!';
    }
}
console.log(brickCalculator(22));

// // problem: 04
function tinyFriend(name) {
    let smallerName = name[0];
    for (let i = 0; i < name.length; i++) {
        let currentName = name[i];
        if(currentName.length < smallerName.length) {
            smallerName = currentName;
        }
    }
    return smallerName;
}

// problem:05
if(office === true) {
    console.log("go to the office with an umbrella");
}if(home === true) {
    console.log("Mail office about sickness");
    console.log("cook");
}if(beef === true) {
    console.log("cook Khichiri with beef");
} if (!beef) {
    console.log("cook khichiri with egg fry");
}

