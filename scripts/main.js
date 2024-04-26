// Task #1: Print the first 10 square numbers (1*1 = 1, 2*2 = 4, etc.)
console.log("Task 1");
for (let i = 0; i <= 10; i++) {
    console.log(i*i);
}

// Task #2: Count down from 5 to 1 then say "Blastoff!"
console.log("Task 2");
for (let i = 5; i > 0; i--) {
    console.log("blast off!");
}

// Task #3: Print the even numbers from 1 to 50 (including 50)
console.log("Task 3");
for( let i = 0; i <= 50; i++) {
    console.log(i+2);
 }

// Task #4: Print the sum of 1 through 100.
console.log("Task 4");
for (let i = 1; i <= 100 ;i++) {
    let sum = 0;
    console.log(sum + 1);


// Task #5: Print the first 10 factorials. The factorial of a number n is n multiplied by each integer less than it, down to 1, written as n! 
    //1! = 1
    //2! = 2 * 1 = 2
    //3! = 3 * 2 * 1 = 6 etc.
console.log("Task 5");
for (let i = 1; i <= 10; i++) {
    factoral = i*(i-1);
    console.log(factorial);
}


// Task #6: Add the array arr with the same values as above, and write a loop to log each element to the console.
console.log("Task 6");
arr = [3, 1, 4, 1, 5];
for (let i = 0; i <= arr.length; i++) {
    console.log(arr);
}

// Task #7: Using a normal forward for-loop (for (let i = 0; i < arr.length; i++)), use .at() to log each element of arr in reverse order (i.e. 5, 1, 4, 1, 3)
console.log("Task 7");
for (let i = 0; i < arr.length; i++) {
    console.log(arr.at(-1, -2, -3, -4, -5));
}

// Task #8 Starting with an empty array in a new variable, create a loop that adds the first 10 cube numbers (e.g. 1*1*1==1**3=1, 2*2*2==2**3==8, etc.) to the array, then log the array itself.
console.log("Task 8");
cube = [];
for (let i = 1; i <= 10; i++) {
    numcube = i**3;
    console.log(cube.push(numcube));
}

//Starting with an empty array in a new variable, add the first 10 fibonacci numbers to the array, then log the array itself.
//onsole.log("Task 9");


//Starting with an empty array in a new variable, add the elements of arr to it in reverse order
//console.log("Task 10");