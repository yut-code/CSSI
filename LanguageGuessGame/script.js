console.log("script running");

// Fix these querySelectors so that they each select the correct element.
const englishTile = document.querySelector("#English");
const spanishTile = document.querySelector("#Spanish");
const chineseTile = document.querySelector("#Chinese");
const tagalogTile = document.querySelector("#Tagalog");
const vietnameseTile = document.querySelector("#Vietnamese");
const arabicTile = document.querySelector("#Arabic");
const frenchTile = document.querySelector("#French");
const koreanTile = document.querySelector("#Korean");
const russianTile = document.querySelector("#Russian");

// console.log(englishTile);
// console.log(spanishTile);
// console.log(chineseTile);
// console.log(tagalogTile);
// console.log(vietnameseTile);
// console.log(arabicTile);
// console.log(frenchTile);
// console.log(koreanTile);
// console.log(russianTile);

// Add the id of the input field so we can access it!
// const inputField = document.querySelector("#");
const inputField = document.querySelector("#guess")

inputField.addEventListener("change", (e) => {
  console.log("inside event listener");
  
  let myGuess = inputField.value.toLowerCase();

  
  
  if (myGuess === "english") {
    // syntax: if ( condition1 || condition2 )
    // if ( (condition1) || (condition2) ) is also valid
    console.log(englishTile.classList);
    englishTile.classList.remove("hidden");
  } else if (myGuess === "spanish") {
    spanishTile.classList.remove("hidden");
  } else if (myGuess === "chinese") {
    chineseTile.classList.remove("hidden")
  } else if (myGuess === "tagalog") {
    tagalogTile.classList.remove("hidden")
  } else if (myGuess === "vietnamese") {
    vietnameseTile.classList.remove("hidden")
  } else if (myGuess === "arabic") {
    arabicTile.classList.remove("hidden")
  } else if (myGuess === "french") {
    frenchTile.classList.remove("hidden")
  } else if (myGuess === "korean") {
    koreanTile.classList.remove("hidden")
  } else if (myGuess === "russian") {
    russianTile.classList.remove("hidden")
  }
  
  inputField.value = ""
})
