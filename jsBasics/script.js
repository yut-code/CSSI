console.log("Type a secret number here, and I'll try to guess it.");

const secretNumber = parseInt(prompt("Pick a single digit number please!"));


if (isNaN(secretNumber)) {
  console.log("You have to type in a number!");
}
if (secretNumber < 0 || secretNumber > 9) {
  console.log("I need a number between 0-9")
}
else {
for (let i = 0; i < 10; i++) {
  if (i < secretNumber) {
    console.log("Looks like it's not " + i + ", so I'll keep guessing...");
  } else if (i === secretNumber) {
    console.log("OH! Your number is " + i + "!");
    break;
  }
}
}
