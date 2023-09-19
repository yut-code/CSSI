console.log("script running");

// Access all the figures using the class
//Returns an array of objects
let pictures = document.querySelectorAll(".card-image");
console.log(pictures.length);

// Fill in the object
let quizValues = {
  color: ["logical", "creative", "logical", "creative"],
  vacation: ["extrovert", "introvert", "extrovert", "introvert"],
  pizza: ["creative", "logical", "creative", "logical"],
  house: ["introvert", "extrovert", "introvert", "extrovert"],
  fruit: ["logical", "creative", "logical", "creative"],
  activity: ["extrovert", "introvert", "extrovert", "introvert"],
};

// 'quizTaker' object here
 let quizTaker = {
   logical: 0,
   creative: 0,
   extrovert: 0,
   introvert: 0,
 }

// Make every image clickable!
pictures.forEach((picture) => {
  picture.addEventListener("click", (e) => {
    // Save the user's choice in a variable.
    // split the string into items into an array divided by hyphen. the array will have two items: color, 1
    let choice = picture.id.split("-");
    console.log(choice)
    let answer = quizValues[choice[0]][choice[1]]
    console.log(answer)
    // Change the background yellow
    picture.classList.toggle("has-background-light");
    picture.classList.toggle("has-background-warning");

    // Increment the right personality trait
    quizTaker[answer]++;

    // If its the last question, unhide the result.
    if (choice[0]==="activity") {
      let resultID;

      if (quizTaker.logical > quizTaker.creative) {
        resultID = "#logical-";
      } else {
        resultID = "#creative-";
      }

      if (quizTaker.introvert > quizTaker.extrovert) {
        resultID += "introvert";
      } else {
        resultID += "extrovert";
      }

      let result = document.querySelector(resultID);
      console.log(result);
      result.classList.remove("hidden");
    }
  });
});
