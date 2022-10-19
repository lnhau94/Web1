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
            </div>
        `
    },
    renderProductHeader(){
        return `
            <div class="hau-product-header hau-table-header" id="hau-product-header">
                <label>Product</label>
                <label>Image</label>
                <label>Price</label>
                <label>Wire</label>
                <label>Brand</label>
                <label>Led</label>
                <label>Color</label>
                <label>Switch</label>
                <label>Option</label>
            </div>
        `
    },
    renderProductItem(productData){
        return `
            <div class="hau-product-item hau-table-item" id="hau-product-item">
                <label>${productData.name}</label>
                <img src="${productData.imgs}"/>
                <label>${productData.price}</label>
                <label>${productData.brand}</label>
                <label>${productData.wires}</label>
                <label>${productData.led}</label>
                <label>${productData.color}</label>
                <label>${productData.switches}</label>
                <div><button>Del</button></div>
            </div>
        `
    },
    showProduct(productList){
        productList.forEach(product => {
            document.getElementById("hau-product-table").innerHTML += adminProductView.renderProductItem(product);
        });
    }
}
