import {keyboards as keyboardsTmp} from './data.js'
import {accounts as accountsTmp} from './data.js'
import {orders as orderTmp} from './data.js'


// let brands = 

export const model = {
    keyboards: localStorage.getItem('keyboards')?JSON.parse(localStorage.getItem('keyboards')):keyboardsTmp,
    brands: localStorage.getItem('brands')?JSON.parse(localStorage.getItem('brands')):["Logitech","Akko","DareU","IQUNIX","Leopold"],
    accounts: localStorage.getItem('accounts')?JSON.parse(localStorage.getItem('accounts')):accountsTmp,
    orders: localStorage.getItem('orders')?JSON.parse(localStorage.getItem('orders')):orderTmp,
    advanceSearch: function (name,minPrice,maxPrice,...brands) {
        return model.keyboards.filter( (keyboard) => 
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
        // orders = JSON.parse(localStorage.getItem('orders'))
        console.log(orders.length)
        keyboards = JSON.parse(localStorage.getItem('keyboards'))
        accounts = JSON.parse(localStorage.getItem('accounts'))
    },
    removeProduct(productid){
        for(let i= 0; i < keyboards.length; i++){
            if(keyboards[i].id == productid){
                keyboards.splice(i, 1);
            }
        }
        model.save();
    }
    
};
