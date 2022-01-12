const discountable = [];

for (let i = 0; i < cart.length; i++) {
  if (cart[i].discountAvailable) {
    discountable.push(cart[i]);
  }
}
