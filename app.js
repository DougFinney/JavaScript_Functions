
// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function printOdds(count) {
    if(count < 0) {
        console.log('${count} is less than 0');
        return;
    }

    for(let i = 0; i <= count; i++) {
        if (i % 2 != 0) {
            console.log(i);
        }
    }
}

printOdds(100);


console.log('Negative test');
printOdds(-10);

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

function checkAge(userName, age) {
 if (userName == null) {
    console.log('No userName entered. Please try again.');
    return;
 }

 if(age <= 0 || age == null) {
   console.log('Incorrect age entered');
   return; 
 }

 let aboveSixteen = 'Congrats ${userName}, you can drive!';
 let belowSixteen = 'Sorry ${userName}, but you need to wait until you are 16.'

 if(age > 16) {
    console.log(aboveSixteen);
 }
 else {
    console.log(belowSixteen);
 }
}

checkAge("Jeremy", 25);
checkAge("Wyatt", 6);
checkAge(null, 19);
checkAge("Bubba", -6);

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

function quadrant(x, y) {
 if(x == 0 && y == 0) {
    console.log('($(x), ${y}) is in the center');
 }
 else if (x == 0) {
    console.log('(${x}, ${y}) is in the x axis');
 }
 else if (y == 0) {
    console.log('(${x}, ${y}) is in the y axis');
 }
 else if (x > 0 && y > 0) {
    console.log('(${x}, ${y}) is in Quadrant 1');
 }
 else if (x < 0 && y > 0) {
    console.log('(${x}, ${y}) is in Quadrant 2');
 }
 else if (x < 0 && y < 0) {
    console.log('(${x}, ${y}) is in Quadrant 3');

 }
 else if (x > 0 && y < 0) {
    console.log('(${x}, ${y}) is in Quadrant 4');
 }
}


quadrant(5, 5);
quadrant(-5, 5);
quadrant(-5, -5);
quadrant(0, -5);
quadrant(5, 0);