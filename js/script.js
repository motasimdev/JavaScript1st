// basic if...else

// input
let age = 18;
// input

if (age >= 18) {
  console.log("Tomar Biyar Boyosh Hoise");
} 

else {
  console.log("Tmi Ekhno Picchi");
}

// basic if...else

// nested if...else

// input
let gender = "male";
let boyosh = 25;
let area = "noakhali";
// input

if (gender == "male") {
  // 1st if
  if (boyosh >= 25) {
    // 2nd if
    if (area == "noakhali") {
      // 3rd if
      console.log("tumi pass");
    } else {
      console.log("noakhalir hote hbe");
    }
  } else {
    console.log("boyosh mile nai");
  }
} else {
  console.log("male hote hbe");
}

// nested if...else

// else...if

// input
let email = "yoyo@gmail.com";
let id = 3344;
let pass = 2233;
// input

if (email == "yoyo@gmail.com") {
  console.log("email milse");
} 

else if (id == 3344) {
  console.log("id milse");
} 

else if (pass == 2233) {
  console.log("pass milse");
} 

else {
  console.log("shob vul");
}

// else...if

// marksheet

// input
let marks = 10;
// input

if (marks <0 || marks >100) {
  console.log("eshb chalaki cholbe na");
  
}

else if (marks >= 33 && marks < 40) {
  console.log("grad D");
} 

else if (marks >= 40 && marks <50){
  console.log("grad C");
  
}
else if (marks >= 50 && marks <60){
  console.log("grad B");
  
}
else if (marks >= 60 && marks <70){
  console.log("grad A-");
  
}
else if (marks >= 60 && marks <70){
  console.log("grad A");
  
}
else if (marks >= 80 && marks <=1000){
  console.log("grad A+");
  
}

else {
  console.log("fail");
}

// marksheet

