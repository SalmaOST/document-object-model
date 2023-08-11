const items = document.querySelectorAll(".item");
const totalPriceElement = document.getElementById("total-price");

let totalPrice = 0;

items.forEach((item) => {
  const increaseButton = item.querySelector(".increase");
  const decreaseButton = item.querySelector(".decrease");
  const quantityElement = item.querySelector(".quantity");
  const priceElement = item.querySelector(".price");
  const likeButton = item.querySelector(".like");
  const removeButton = item.querySelector(".remove");

  increaseButton.addEventListener("click", () => {
    const price = parseFloat(priceElement.textContent);
    const currentQuantity = parseInt(quantityElement.textContent);
    quantityElement.textContent = currentQuantity + 1;
    totalPrice += price;
    updateTotalPrice();
  });

  decreaseButton.addEventListener("click", () => {
    const price = parseFloat(priceElement.textContent);
    const currentQuantity = parseInt(quantityElement.textContent);
    if (currentQuantity > 0) {
      quantityElement.textContent = currentQuantity - 1;
      totalPrice -= price;
      updateTotalPrice();
    }
  });

  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("liked");
  });

  removeButton.addEventListener("click", () => {
    const price = parseFloat(priceElement.textContent);
    const currentQuantity = parseInt(quantityElement.textContent);
    totalPrice -= price * currentQuantity;
    item.remove();
    updateTotalPrice();
  });
});

function updateTotalPrice() {
  totalPriceElement.textContent = totalPrice.toFixed(2);
}
