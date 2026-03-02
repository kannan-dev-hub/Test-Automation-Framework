let num = 100

if (num > 1000) {
    console.log("Printing if block");
    
} 
else {
    console.log("Printing else block");
    
}

// if else if

let browser = "firefox";
let headless = "no"

if (browser === "chrome" || browser === "CHROME") { //  || = OR  && = AND
    console.log("Chrome browser opened");
}
else if (browser === "firefox" && headless === "yes") {
    console.log("Firefox browser opened");
}
else if (browser === "edge") {
    console.log("Edge browser opened");
}
else if (browser === "opera") {
    console.log("Opera browser opened");
}
else {
    console.log("No browser opened"); 
}

let day = 21

switch (day) {
    case 1:
        console.log("Monday");      
        break;
    case 2:
        console.log("Tuesday");      
        break;
    case 3:
        console.log("Wednesday");      
        break;
    case 4:
        console.log("Thursday");      
        break;
    case 5:
        console.log("Friday");      
        break;
    case 6:
        console.log("Saturday");      
        break;
    case 7:
        console.log("Sunday");      
        break;
    default:
        console.log("Give numbers between 1 to 7");        
        break;
}

