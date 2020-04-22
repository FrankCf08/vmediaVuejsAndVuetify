export const shopItemsState = {
 shopItems:[
   {name:'Coca-Cola', price: 12},
   {name:'Inka-Cola', price: 8.5 },
   {name:'Concordia', price: 3.9},
   {name:'Yogurt', price: 4.9},
   {name:'Chesse', price: 5.4},
  ],
} 

export const shopItemsMutations = {
 addProductToList: (state, product) => state.shopItems.push(product)
}
