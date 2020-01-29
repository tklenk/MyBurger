export const ADD_INGREDIENT = 'ADD_INGREDIENT'
export const REMOVE_INGREDIENT = 'REMOVE_INGREDIENT'

// addIngredientHandler = ( type ) => {
//     const oldCount = this.state.ingredients[type];
//     const updatedCount = oldCount + 1;
//     const updatedIngredients = {
//         ...this.state.ingredients
//     };
//     updatedIngredients[type] = updatedCount;
//     const priceAddition = INGREDIENT_PRICES[type];
//     const oldPrice = this.state.totalPrice;
//     const newPrice = oldPrice + priceAddition;
//     this.setState( { totalPrice: newPrice, ingredients: updatedIngredients } );
//     this.updatePurchaseState( updatedIngredients );
// }

// removeIngredientHandler = ( type ) => {
//     const oldCount = this.state.ingredients[type];
//     if ( oldCount <= 0 ) {
//         return;
//     }
//     const updatedCount = oldCount - 1;
//     const updatedIngredients = {
//         ...this.state.ingredients
//     };
//     updatedIngredients[type] = updatedCount;
//     const priceDeduction = INGREDIENT_PRICES[type];
//     const oldPrice = this.state.totalPrice;
//     const newPrice = oldPrice - priceDeduction;
//     this.setState( { totalPrice: newPrice, ingredients: updatedIngredients } );
//     this.updatePurchaseState( updatedIngredients );
// }