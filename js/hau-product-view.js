import {model} from '../admin/js/Model/hau_model.js';

export const productView = {
    renderProductItem(productData){
        let text = "";
        
        productData.img.forEach(e =>{
            text += `<div>
            <img class="hau-product-image hau-product-info-sell" src="/imgs/DataKeyboard/${e}" alt="${productData.name}"/>
            <img class="hau-product-image-show hau-product-info-sell" src="/imgs/DataKeyboard/${e}" alt="${productData.name}"/>
            </div>
            `
                
        })
        return `
        <div class="hau-sell-product-item hau-sell-item" id="hau-product-item" data-id="${productData.id}">

            <div class="hau-product-teaser">
                <label class="hau-product-info-sell hau-product-name">${productData.name}</label>
                <img class="hau-product-image-teaser hau-product-info-sell" src="/imgs/DataKeyboard/${productData.img[0]}" alt="${productData.name}"/>
            
                
                <div class="hau-product-teaser-info">
                    <label class="hau-product-info-sell hau-product-price" >${productData.price}</label>
                    <label class="hau-product-info-sell hau-product-brand">
                        ${productData.brand}
                    </label>
                    <div>
                        <button class="hau-button-sell hau-sell-product">
                            Add to Cart
                        </button>
                        
                    </div>
                </div>
                
            </div>

            <div class="hau-sell-product-detail">
                <div class="hau-product-image-holder">
                    ${text}   
                </div>
                <label><b>Wire</b><br>${productData.wires}</label>
                <label><b>Led</b><br>${productData.led}</label>
                <label><b>Color</b><br>${productData.color}</label>
                <label><b>Switches</b><br>${productData.switches}</label>
            </div>
                
        </div>
        `
    },
    renderProduct(productList,page){
        let text = ""
        page = Number(page);
        for (let i = (page-1)*6 ;i < page*6 && i < productList.length; i++){
            text += productView.renderProductItem(productList[i]);
        }
        return `
            <div class="product-sell-container">
                ${text}
            </div>
            ${productView.renderPag(productList)}
            
        `
    },
    renderPag(productList) {
        let pagbtn = ""
        for(let i = 1; i < productList.length/6 + 1; i++){
            pagbtn += `<button class="hau-pagination">${i}</button>`
        }
        return `
        <div class="hau-pagination-container">
            ${pagbtn}
        </div>`
    }
}