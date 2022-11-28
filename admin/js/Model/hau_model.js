// import {keyboards} from './data.js'
// import {accounts} from './data.js'
// import {orders} from './data.js'

let keyboards = localStorage.getItem('keyboards')?JSON.parse(localStorage.getItem('keyboards')):[];
let brands = localStorage.getItem('brands')?JSON.parse(localStorage.getItem('brands')):[];
let accounts = localStorage.getItem('accounts')?JSON.parse(localStorage.getItem('accounts')):[];
let orders = localStorage.getItem('orders')?JSON.parse(localStorage.getItem('orders')):[];

// let brands = ["Logitech","Akko","DareU","IQUNIX","Leopold"]

export const model = {
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
    processOrder(orderId, newState){
        orders.forEach(element =>{
            if(element.id == orderId){
                element.state = newState;
                return;
            }
        })
    },
    save(){
        localStorage.setItem('orders', JSON.stringify(orders));
        localStorage.setItem('keyboards', JSON.stringify(keyboards));
        localStorage.setItem('accounts', JSON.stringify(accounts));
        localStorage.setItem('brands', JSON.stringify(brands));
    },
    load(){
        orders = JSON.parse(localStorage.getItem('orders'))
        keyboards = JSON.parse(localStorage.getItem('keyboards'))
        accounts = JSON.parse(localStorage.getItem('accounts'))
    },
    removeProduct(productid){
        for(let i= 0; i < keyboards.length; i++){
            
            if(keyboards[i].id == productid){
                keyboards.splice(i, 1);
            }
        }
    }
    
};
