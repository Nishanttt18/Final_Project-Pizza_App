//contains the logic for fetching ,
//Adding  , sorting , searching , 
// deletion , updation
import makeNetworkCall from './api-client.js';
const productOperations = {
    loadProducts(){
        const pizzas = await makeNetworkCall();
        const pizzaArray = pizzas['Vegetrain'];
        pizzaArray.map(pizza=>{
            const currentPizza = new product(pizza.id,pizza.name,pizza.menu_description,pizza.price,pizza.a)
        })
    }
}