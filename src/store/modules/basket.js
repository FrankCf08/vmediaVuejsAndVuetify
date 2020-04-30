export const basketMutations = {
 addProductToBasket: (state, indexItem) => state.basket.push(
  {
   name: state.shopItems[indexItem].name,
   price: state.shopItems[indexItem].price,
   quantity: 1
  }
 ),
 increaseQuantity: (state, indexBasketItem) => state.basket[indexBasketItem].quantity +=1,
 deleteProductFromBasket: (state, indexItem) => state.basket.splice(indexItem, 1)
}