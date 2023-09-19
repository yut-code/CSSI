console.log("script running!");

// looking for and selecting the html with the id button1 in the document
const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const button4 = document.querySelector("#button4");


console.log(button1)

// listen to what is happening to the button
// shorthand function notation (e)=>{}
// which is same as:
// function nameofFunction (e) { 
//      code here }
// e is a parameter, and that parameter holds the Event object 
// arrow func is a callback function, it executes, or is "called back" when something happens
button1.addEventListener('click', (e) => {
  console.log('button clicked!');
  console.log(e);
  alert('meh-eh-eh-eh');
})

button2.addEventListener('click', (e) => {
  console.log('button2 clicked');
  const t = document.querySelector('#status2');
  t.innerHTML = 'Thanks for petting Brodie! He looks really happy!';
})

let carrots = 2;
button3.addEventListener('click', (e)=>{
  const t = document.querySelector('#status3');
  if(carrots < 10){
    carrots += 1; // same as carrots = carrots + 1 and carrots++
    t.innerHTML = 'Coco has had ' + carrots + ' carrots today.';
  } else {
    t.innerHTML = "Coco has had too many carrots!!!";
    button3.disabled = true;
  }
})

button4.addEventListener('click', (e) => {
  console.log('button4 clicked')
  const pageContent = document.querySelector('#page-container')
  pageContent.innerHTML = '<h1 class="title">Oh no!</h1>Due to some dangerous activity the zoo is closed.'})