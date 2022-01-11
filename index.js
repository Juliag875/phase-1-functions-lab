
// Code your solution in this file!
const base = 42;
const blockLength = 264;

function distanceFromHqInBlocks(blocks) {
    let distanceInBlocks;
    if (blocks > base) {
        distanceInBlocks = blocks - base;
    } else if (blocks < base) {
        distanceInBlocks = base - blocks;
    }
    return distanceInBlocks;
}

function distanceFromHqInFeet(blocks) {
     return distanceFromHqInBlocks(blocks) * blockLength;
}

function distanceTravelledInFeet(start, destination) {
    return Math.abs((destination-start) * blockLength);
}

function calculatesFarePrice(start, destination) {
    let distance = distanceTravelledInFeet(start, destination);
    if (distance <= 400) {
        return 0;
    } else if (distance < 2000) {
        return (distance-400) * .02;
    } else if ( distance > 2000 && distance < 2500) {
        return 25;
    } else if (distance >= 2500) {
        return 'cannot travel that far';
    }
}