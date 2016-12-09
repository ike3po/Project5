/**
 *   @author Thrasher, Isaac
 *   @version 0.0.2
 *   @summary Project 4 || created: 11.14.2016
 *   @todo
 */

"use strict";
const PROMPT = require('readline-sync');

let zones, passengers, price;
let continueResponse;

function main() {
    process.stdout.write('\x1Bc');
    setContinueResponse();
    while (continueResponse === 1) {

        setPass();
        setZone();
        setCost();
        setContinueResponse();
    }
    printGoodbye();
}
main();

function setContinueResponse() {
    if (continueResponse != null) {
        continueResponse = -1;
        while (continueResponse !== 0 && continueResponse !== 1) {
            continueResponse = Number(PROMPT.question(`\nDo you want to continue? [0=no, 1=yes]: `));
        }
    } else {
        continueResponse = 1;
    }
}

function setPass() {

        passengers = PROMPT.question(`Please input the number of passenger not more than four:  `);
    if (passengers > 4 || passengers < 1){
        console.log(`That is an incorrect value please try again!`);
        setPass();
    }
}

function setZone() {
    zones = PROMPT.question(`Please input your zone number.  Number must be between 0 and 3:  `);
    if (zones > 3 || zones < 0){
        console.log(`That is an incorrect value please try again!`);
        setZone();
    }

}

function setCost() {
    const PRICE01 = 7.50,
        PRICE11 = 10,
        PRICE12 = 12,
        PRICE13 = 12.75,
        PRICE20 = 14,
        PRICE21 = 18.50,
        PRICE22 = 22,
        PRICE23 = 23,
        PRICE30 = 20,
        PRICE31 = 21,
        PRICE32 = 32,
        PRICE33 = 33,
        PRICE40 = 25,
        PRICE41 = 27.5,
        PRICE42 = 36,
        PRICE43 = 37;
    console.log("Your total price is: ");
    if (passengers == 1 && zones == 0 ){
        console.log(PRICE01);
    }
    else if (passengers == 1 && zones == 1 ){
        console.log(PRICE11);
    }
    else if (passengers == 1 && zones == 2 ){
        console.log(PRICE12);
    }
    else if (passengers == 1 && zones == 3 ){
        console.log(PRICE13);
    }
    else if (passengers == 2 && zones == 0 ){
        console.log(PRICE20);
    }
    else if (passengers == 2 && zones == 1 ){
        console.log(PRICE21);
    }
    else if (passengers == 2 && zones == 2 ){
        console.log(PRICE22);
    }
    else if (passengers == 2 && zones == 3 ){
        console.log(PRICE23);
    }
    else if (passengers == 3 && zones == 0 ){
        console.log(PRICE30);
    }
    else if (passengers == 3 && zones == 1 ){
        console.log(PRICE31);
    }
    else if (passengers == 3 && zones == 2 ){
        console.log(PRICE32);
    }
    else if (passengers == 3 && zones == 3 ){
        console.log(PRICE33);
    }
    else if (passengers == 4 && zones == 0 ){
        console.log(PRICE40);
    }
    else if (passengers == 4 && zones == 1 ){
        console.log(PRICE41);
    }
    else if (passengers == 4 && zones == 2 ){
        console.log(PRICE42);
    }
    else {
        console.log(PRICE43);
    }

}

function printGoodbye() {
    process.stdout.write('\x1Bc');
    console.log(`\tGoodbye.`);
}