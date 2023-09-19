// Objectives
// Make a call to an API Endpoint in the browser.
// Use async to make a call to an API Endpoint.
// Use await to handle responses from an API endpoint.
// Render content from an API call in your index.html files.

console.log("Script running");

// Helper function - gets a random integer up to (but not including) the maximum
const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
};

// Capture the three major foci of user interaction in variables.
const submitButton = document.querySelector("#submit");
const queryField = document.querySelector("#search");
const imageHolderDiv = document.querySelector("#imageholder");
const limit = 10;

// Log the elements to confirm that the querySelectors worked.
console.log(submitButton);
console.log(queryField);
console.log(imageHolderDiv);

submitButton.addEventListener("click", async (e) => {
  const myKey = "myAPIKey";
  let topic = queryField.value;
  console.log(topic);

  const myQuery = `https://api.giphy.com/v1/gifs/search?api_key=${myKey}&q=${topic}&limit=${limit}`;
  console.log(myQuery);

  const response = await fetch(myQuery);
  console.log(response);

  const json = await response.json();
  console.log(json);

  const i = getRandomInt(json.data.length);
  if (i > limit) {
    i = 0;
  }

  const imgURL = json.data[i].images.downsized.url;
  const imgWidth = json.data[i].images.downsized.width;
  const imgHeight = json.data[i].images.downsized.height;
  const imgTag = `<img src="${imgURL}" width="${imgWidth} height="${imgHeight}"/>`
  console.log(imgURL);

  imageHolderDiv.innerHTML = imgTag + imageHolderDiv.innerHTML
});
