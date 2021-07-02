const ps = require("prompt-sync");
const prompt = ps();

let digit = prompt("Enter Digit : ");

switch (parseInt(digit)) {
    case 0:
        console.log("Zero");
        break;
    case 1:
        console.log("One");
        break;
    case 2:
        console.log("Two");
        break;
    case 3:
        console.log("Three");
        break;
    case 4:
        console.log("Four");
        break;   
    case 5:
        console.log("Five");
    case 6:
        console.log("Six");
        break;        
    case 7:
        console.log("Seven");
    case 8:
        console.log("Eight");
        break;    
    case 9:
        console.log("Nine");
        break;                                    
    default:
        console.log("Enter single digit only!");
        break;
}