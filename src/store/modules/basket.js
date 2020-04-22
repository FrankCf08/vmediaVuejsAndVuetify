export const basketMutations = {
 addProductToBasket: (state, indexItem) => state.basket.push(state.shopItems[indexItem]),
 deleteProductFromBasket: (state, indexItem) => state.basket.splice(indexItem, 1)
}