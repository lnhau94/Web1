import {keyboards} from './data.js'
import {accounts} from './data.js'

//let keyboards = localStorage.getItem('keyboards')?JSON.parse(localStorage.getItem('keyboards')):[];
let brands = localStorage.getItem('brand')?JSON.parse(localStorage.getItem('brand')):[];
//let accounts = localStorage.getItem('accounts')?JSON.parse(localStorage.getItem('accounts')):[];
let orders = localStorage.getItem('orders')?JSON.parse(localStorage.getItem('orders')):[];

const model = {
    keyboards: keyboards,
    brands: brands,
    accounts: accounts,
    orders: orders,
    advanceSearch: function (name,minPrice,maxPrice,...brands) {
        return keyboards.filter( (keyboard) => 
            keyboard.name === name &&
            keyboard.price >= minPrice &&
            keyboard.price <= maxPrice &&
            brands.includes(keyboard.brand)
        )
    },
    
};



export {
    model
}