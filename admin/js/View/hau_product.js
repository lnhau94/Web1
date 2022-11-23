export const adminProductView = {
    renderProductTable(){
        return `
            <div class="hau-table" id="hau-product-table">
                ${this.renderProductHeader()}
            
            </div>
        `
    },
    renderProductPageHeader(content){
        return `
            <div>
                <h1>${content}</h1>
                <button id="addbtn" >Them</button>
            </div>
        `
    },
    renderProductHeader(){
        return `
            <div class="hau-product-header hau-table-header" id="hau-product-header">
                <label>Product</label>
                <label>Image</label>
                <label>Price</label>
                <label>Brand</label>
                <label>Option</label>
            </div>
        `
        // <label>Brand</label>
        //         <label>Led</label>
        //         <label>Color</label>
        //         <label>Switch</label>
        //         
    },
    renderProductItem(productData){
        return `
            <div class="hau-product-item hau-table-item" id="hau-product-item" data-id="${productData.id}">

                <div class="hau-product-teaser">
                    <label>${productData.name}</label>
                    <img class="hau-product-image" src="/imgs/DataKeyboard/${productData.img[0]}" alt="${productData.name}"/>
                    <label>${productData.price}</label>
                    <label>${productData.brand}</label>
                    <div><button>Del</button></div>
                </div>

                <div class="hau-product-detail">
                    <label><b>Wire</b><br>${productData.wires}</label>
                    <label><b>Led</b><br>${productData.led}</label>
                    <label><b>Color</b><br>${productData.color}</label>
                    <label><b>Switches</b><br>${productData.switches}</label>
                </div>
                    
            </div>
        `
    },
    showProductImage(imageList){
        let text = ''
        imageList.forEach((item)=>{
            text += `<img class="hau-product-image-item" src="/imgs/DataKeyboard/${item}">`
        })
        document.getElementById('section').innerHTML +=
        `
            <div class="hau-product-image-holder" id="c1">
                ${text}
            </div>
        `
    },
    showProduct(productList){
        productList.forEach(product => {
            document.getElementById("hau-product-table").innerHTML += adminProductView.renderProductItem(product);
        });
    }
}
