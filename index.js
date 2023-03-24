// Code your solution in this file!
function distanceFromHqInBlocks(blocks){
    let distance = blocks - 42
    console.log(distance)
    return Math.abs(distance)
}
distanceFromHqInBlocks(43)
distanceFromHqInBlocks(50)
distanceFromHqInBlocks(34)

function distanceFromHqInFeet(blocks){
    let feetFromHq= distanceFromHqInBlocks(blocks) * 264
    console.log(feetFromHq)
    return Math.abs(feetFromHq)
}
distanceFromHqInFeet(43)
distanceFromHqInFeet(50)
distanceFromHqInBlocks(34)

function distanceTravelledInFeet(start, destination){
    let feetTraveled = (start - destination) * 264
    return Math.abs(feetTraveled)
}
distanceTravelledInFeet(43,48)
distanceTravelledInFeet(50,60)
distanceTravelledInFeet(34,28)

function calculatesFarePrice(start, destination){
    let feetTraveled = Math.abs(start - destination) * 264
    let price;
    if (feetTraveled <= 400){
        return price = 0;
    }
    else if (feetTraveled > 400 && feetTraveled < 2000){
        return price = (feetTraveled - 400) * 0.02;
    
    }
    else if (feetTraveled > 2000 && feetTraveled <2500){
        return price = 25
    }
    else {
        return "cannot travel that far"

    }
}
calculatesFarePrice(43, 44)
calculatesFarePrice(34, 32)
calculatesFarePrice(50, 58)
calculatesFarePrice(34, 24)