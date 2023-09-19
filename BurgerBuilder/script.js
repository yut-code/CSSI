// const toppings = document.querySelectorAll(".topping");

// toppings.forEach((topping) => {
//   topping.addEventListener("click", (e) => {
//     console.log(topping.dataset);
//   });
// });


const checkoutButton = document.querySelector('.button');
const totalAmountDiv = document.querySelector("#totalAmount")
checkoutButton.addEventListener('click', (e) => {
  const ingredients = document.querySelectorAll(".order .topping")
  console.log(ingredients);

  let totalAmount = 0;
  for (let i = 0; i < ingredients.length; i++) {
    // remember backticks when using ${}
    console.log(`you have chosen ${ingredients[i].dataset.price}`)
    totalAmount += Number(ingredients[i].dataset.price);
  }
  totalAmountDiv.innerHTML = `Total is ${totalAmount}`;
});

const menuItems = document.querySelectorAll('#nav .topping')
console.log(menuItems);
const orderElement = document.querySelector('.order');

menuItems.forEach(menuItem => menuItem.addEventListener('click', (e) => {
  console.log(`event clicked ${menuItem.dataset.ingredient}`);
  orderElement.innerHTML += `<div class="topping ${menuItem.dataset.ingredient}" data-ingredient="${menuItem.dataset.ingredient}" data-price="${menuItem.dataset.price}">${menuItem.dataset.ingredient}</div>` 
}));


