/* Find classes or IDs */
const clue1 = document.querySelector("#clue-1");
const button = document.querySelector("#button")
const clue2 = document.querySelector("#clue-2");
const page = document.querySelector(".hero");
const body = document.querySelector("#main-body");

const password = "what"
const digits = '732'
let passwordEntered = false;

/* Button for the key - Already done! */
button.addEventListener("click", (e) => {
  button.classList.add("hidden");
  clue2.classList.remove("hidden");
});

/* Your Code Here */
let keys = [];
window.addEventListener("keypress", (e) => {
  keys.push(e.key);
  // console.log(keys);

  let attempt = keys.slice(-password.length);
  console.log(attempt);

  if (!passwordEntered && attempt.join('') === password) {
    clue1.classList.add('hidden');
    button.classList.remove('hidden');
    console.log("WOOHOO");
    passwordEntered = true;
  }

  const digitAttempt = keys.slice(-digits.length);
  if (passwordEntered && digitAttempt.join('') === digits) {
    console.log("YOU ARE IN")
    page.classList.remove("has-background-black");
    body.innerHTML = `<figure class="image center">
            <img id="main" src="https://zacharytotah.com/wp-content/uploads/2017/09/DiCaprio-Welcome-to-the-Club-Meme.jpg" alt="Members Only"
            />
          </figure>`;
  }
})



