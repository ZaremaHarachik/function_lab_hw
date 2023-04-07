// 1. Write a function called greetCustomer that will log "Welcome to the store" + the name parameter

const greetCustomer = (name) => {
    console.log(`Welcome to the store ${name} !`);
  }
   greetCustomer("Zarema");
  
  // 2. Write a function called logPositiveOrNegative that will log if the number parameter is a negative number, positive number, or 0
  
  const logPositiveOrNegativ = (number) => {
    if (number > 0) {
      console.log("number", number, "is true");
    }else if (number < 0) {
      console.log("number", number, "is false");
    }else if (number == 0) {
      console.log(number,"equals 0");
    }
  }
  logPositiveOrNegativ(5);
  logPositiveOrNegativ(-5);
  logPositiveOrNegativ(0);
  
  ssfasfsa
  // 3. Write a function called returnIsPositive that will return if the number parameter is a positive "true" or not  positive "false"
  
  const returnIsPositive = (number) => {
    if (Math.sign(number) === 1) {
      return true;
    }else if (Math.sign(number) === -1) {
      return false;
    }
  }
  returnIsPositive(5);
  returnIsPositive(-5);
  console.log(returnIsPositive(5));
  console.log(returnIsPositive(-5));
  
  // 4. Write a function called returnIsTooShort that will return true if the password parameter is shorter than 8 characters
  
  const returnIsTooShort = (password) => {
   if (password.length < 8);
     return true
  }
  returnIsTooShort("gshds");
  console.log(returnIsTooShort("gshds"));
  
  // 5. Write a function called returnIsBreakingLaw that will return true if the age parameter is < 21 AND drink parameter is "alcohol"
  
  const returnIsBreakingLaw = (age,drink) => {
   if (age < 21 && drink === "alcohol" ) {
     return true;
   }else {
     return false;
   }
  }
  returnIsBreakingLaw(20,"alcohol");
  console.log(returnIsBreakingLaw(20,"alcohol"));
  
  // 6. Make a variable called count.
  // Write a function called addToCount that will add the number parameter to the count variable.
  // Call addToCount 4 times with different numbers
  
  const addToCount = (number) => {
    let count = 4;
    let sum = count + number;
    return sum;
  }
  addToCount(4);
  addToCount(5);
  addToCount(6);
  addToCount(7);
  console.log(addToCount(4));
  console.log(addToCount(5));
  console.log(addToCount(6));
  console.log(addToCount(7));
  
  
  // 7. Write a function called returnIsChase that will return true if the name parameter is "Chase" - Make case insensitive "Chase" "CHASE" "CHasE" all return true
  
  const returnIsChase = (name) => {
   // name.toLowerCase()
    if (name === "Chase")
      return true;
  }

  returnIsChase("Chase");
  console.log(returnIsChase("Chase"))
  
  // 8. Make a variable called class that is an array ["Sally", "Sam", "Frodo", "Gandalf", "Eragorn", "Gimley"]
  
  let arr = ["Sally", "Sam", "Frodo", "Gandalf", "Eragorn", "Gimley"];
  const callClassArray = (z) => {
    for (let z of arr) {
    console.log(z);
    }
  }
  callClassArray(arr);
  
  // Write a function called returnClassIsTooSmall that will return true if the students parameter has less than 10 students
  
  const returnClassIsTooSmall = (student) => {
    if (student < 10) {
      return true;
    }else {
      return false;
    }
  }
    returnClassIsTooSmall(5);
  console.log(returnClassIsTooSmall(5));
  
  // 9. Make a variable called combineStrings that will take stringOne parameter and stringTwo parameter and return them combined
  // call this function 3 times with 6 strings.
  
  const combineStrings = (stringOne,stringTwo) => {
    let combine = stringOne.concat(stringTwo);
      return combine;
  }
     combineStrings("sea","food");
     combineStrings("friend","ship");
     combineStrings("relation","ship");
  console.log(combineStrings("sea","food"));
  console.log(combineStrings("friend","ship"));
  console.log(combineStrings("relation","ship"));
  
  // 10. Write a function called returnDataType that will return the datatype of the data parameter
  
  const returnDataType = (data) => {
    return typeof(data);
  }
  returnDataType("Hello");
  console.log(returnDataType("Hello"));
  
  // 11. Write a function called addStudentToClass that will push the student parameter to the class array from problem number 8
  // Call this function 2 times
  
  let arr1 = ["Sally", "Sam", "Frodo", "Gandalf", "Eragorn", "Gimley"];
  const addStudentToClass = (name) => {
    arr1.push(name);
  }
  addStudentToClass('jon');
  console.log(arr1);
