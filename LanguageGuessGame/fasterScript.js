// Fix these querySelectors so that they each select the correct element.
languages = ['english', 'spanish', 'chinese', 'vietnamese', 'french', 'arabic', 'korean', 'russian']

// Add the id of the input field so we can access it!
// const inputField = document.querySelector("#");
const inputField = document.querySelector("#guess")

inputField.addEventListener("change", (e) => {
//   console.log("inside event listener");
  let myGuess = inputField.value.toLowerCase();

  if (languages.includes(myGuess)) {
    classTile = '#'+ myGuess.charAt(0).toUpperCase() + myGuess.slice(1);
    let tile = document.querySelector(classTile);
    console.log(tile)
    tile.classList.remove('hidden');
  }
  
  inputField.value = ""
})
