import {keyboards} from "./hau_model.js";

let nav = renderNav();
let content = renderContent();

const page = render(nav,content);

function render(...elements) {
    let text = "";
    for (let index in elements) {
        text += elements[index];
    }
    document.getElementById("root").innerHTML = text;
    showContent();
}

function renderNav() {
    return `
    <div class="hau-nav" id="hau-navbar">
        <div class="hau-navlogo">
            <a href="#dashboard">
                <img src="../../imgs/logo-keyboard-center.png"></img>
            </a>
        </div>
        <div class="hau-navitem">
            <a href="#dashboard">Dashboard</a>
        </div>
        <div class="hau-navitem">
            <a href="#product">Sản Phẩm</a>
        </div>
        <div class="hau-navitem">
            <a href="#orders">Đơn hàng</a>
        </div>
        <div class="hau-navitem">
            <a href="#account">Tài khoản</a>
        </div>
        <div class="hau-navfooter">
            <button type="button" class="hau-button" id="hau-admin-logout-button">
                Log out
            </button>
        </div>

    </div>
    `
}

function renderContent() {
    return `
        <div class="hau-content" id="hau-content">

        </div>
    `;
}

function showContent() {
    let temp = document.getElementById("hau-content");
    switch (location.href.split("#")[1]){
        case "product":
            temp.innerHTML = showProduct();
            break;
        case "dashboard":
            temp.innerHTML = showDashboard();
            break;

        default:
            temp.innerHTML = showProduct();
    }
       

    
}

function showProduct(){
    let text = `
        <div class="hau-table-header hau-admin-content" id="hau-admin-product-header">
            <label>id</label>
            <label>Tên sản phẩm</label>
            <label>Giá</label>
            <label>Hãng sản xuất</label>
            <label>Loại Switch</label>
            <label>Led</label>
            <label>Màu</label>
            <label>Kiểu kết nối</label>
            <label>Lựa chọn</label>
            
        </div>
    `;
    keyboards.forEach( (item) => {
        text += `
            <div class="hau-table-item hau-admin-content" data-id="${"item"+item.id}">
                <label></label>
                <label>keyboardname: ${item.name}</label>
                <label>price: ${item.price}</label>
                <label></label>
                <label></label>
                <label></label>
                <label></label>
                <label>
                    
                </label>
                <label>
                    <button type="button">Sửa</button>
                    <button type="button">Xóa</button>
                </label>
            </div>
        `
    });
    let template = `
        <div class="hau-admin-header" id="hau-productheader">
            <h1 class="page-title">Product</h1>
        </div>
        
        <div class="hau-container">
            ${text+text}
        </div>

        <div class="hau-admin-footer" id="hau-product-footer">
            <button type="button" class="hau-admin-button" id="hau-product-button">
                Thêm mới
            </button>
        </div>
    `;
    return template;
}

function showDashboard(){
    return `
        <h1>Dashboard</h1>
    `
}

window.onhashchange = () => showContent();


export {
    page
}