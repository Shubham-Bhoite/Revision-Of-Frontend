// Switch Statement Examples:
//Example 1:
let color = "red";
switch (color) {
  case "red":
    console.log("Red color");
    break;
  case "blue":
    console.log("Blue color");
    break;
  default:
    console.log("Other color");
}

//Example 2:
let day = 3;
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
  default:
    console.log("Other day");
}

//Example 3:
let fruit = "apple";
switch (fruit) {
  case "apple":
    console.log("It's an apple");
    break;
  case "banana":
    console.log("It's a banana");
    break;
  default:
    console.log("Unknown fruit");
}

//Example 4:
let browser = "Chrome";
switch (browser) {
  case "Chrome":
    console.log("Chrome browser");
    break;
  case "Firefox":
    console.log("Firefox browser");
    break;
  default:
    console.log("Other browser");
}

//Example 5:
let vehicle = "car";
let vehicleType;
switch (vehicle) {
  case "car":
    vehicleType = "Four-wheeler";
    break;
  case "bike":
    vehicleType = "Two-wheeler";
    break;
  default:
    vehicleType = "Unknown";
}
console.log(vehicleType); 


// Break Statement Examples:
// Example 1: Exiting a loop prematurely
for (let i = 0; i < 5; i++) {
    console.log(i);
    if (i === 2) {
      break;
    }
  }
  
  // Example 2: Breaking out of a switch statement
  let num = 3;
  switch (num) {
    case 1:
      console.log("Number is 1");
      break;
    case 2:
      console.log("Number is 2");
      break;
    case 3:
      console.log("Number is 3");
      break;
    default:
      console.log("Number is not found");
      break;
  }

  // Example 3: Exiting a nested loop
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      console.log(i, j);
      if (i === 1 && j === 1) {
        break;
      }
    }
  }
  
  // Example 4: Breaking out of a switch statement
  let num2 = 0;
  switch (num) {
    case 0:
      console.log("Number is zero");
      break;
    default:
      console.log("Other number");
      break;
  }
  
  //Example 5:
  for (let i = 0; i < 5; i++) {
    if (i === 3) {
      break;
    }
    console.log(i);
  }


// Continue Statement Examples:
// Example 1:
for (let i = 0; i < 5; i++) {
    if (i === 2) {
      continue;
    }
    console.log(i);
  }
  
  // Example 2:
  let number = 0;
  while (num < 5) {
    num++;
    if (num === 2 || num === 4) {
      continue;
    }
    console.log(num);
  }
  // Example 3:
  for (let i = 0; i < 5; i++) {
    if (i === 2) {
      continue;
    }
    console.log(i);
  }

  //Example 4:
  let numbers = [1, 2, 3, 4, 5];
 for (let num of numbers) {
  if (num === 3) {
    continue;
  }
  console.log(num);
}
// Example 5: Skipping even numbers
let num1 = 0;
while (num < 5) {
  num++;
  if (num % 2 === 0) {
    continue;
  }
  console.log(num);
}