import { model } from "../admin/js/Model/hau_model.js";
import { productView } from "./hau-product-view.js";

export const sellController = {
    tempData: model.keyboards,
    tempBrand: "ALL",
    init(){
        sellController.showProductSell(sellController.tempData,1);
        sellController.eventHandleSearch();
        sellController.eventHandleBrandFilter();
        sellController.eventHandleShowCart();
    },
    eventHandlePagination(){
        document.querySelectorAll('.hau-pagination').forEach(element => {
            element.addEventListener("click", ()=>{
                sellController.showProductSell(sellController.tempData,element.innerHTML);
            })
        });
    },
    eventHandleSearch(){
        document.getElementById("mysearch").addEventListener("input", () =>{
            sellController.search()
        });
    },
    search(){
        let text = document.getElementById("mysearch").value;
        sellController.tempData = sellController.tempBrand == "ALL"
            ?model.keyboards
            :model.keyboards.filter(
                (element)=>{
                    return element.brand.toUpperCase().includes(sellController.tempBrand.toUpperCase());
            })
        sellController.tempData = sellController.tempData.filter((element)=>{
            return element.name.toUpperCase().includes(text.toUpperCase());
        })
        sellController.showProductSell(sellController.tempData,1);
    },
    eventHandleBrandFilter(){
        document.querySelectorAll(".brand-menu-item").forEach((e)=>{
            e.addEventListener("click",()=>{
                document.querySelector(".current-brand").classList.remove("current-brand");
                e.classList.add("current-brand");
                sellController.tempBrand = e.childNodes[0].innerHTML;
                sellController.search();
            })
        })
    },
    eventHandleAddtoCart(){
        document.querySelectorAll(".add-to-cart-btn").forEach((e)=>{
            e.addEventListener("click",()=>{
                // 
                if(JSON.parse(localStorage.getItem("currentaccounts")=="null")){
                    alert("Vui lòng đăng nhập để mua hàng");
                }else{
                    // JSON.parse(localStorage.getItem("currentaccounts")).cart.push()
                    model.addToCart(e.parentNode.parentNode.parentNode.parentNode.dataset.id,
                        JSON.parse(localStorage.getItem("currentaccounts")))
                    
                }
            });
        });
    },
    showProductSell(data,page){
        document.querySelector('.pagecontent').innerHTML = productView.renderProduct(data,page);
        sellController.eventHandlePagination();
        sellController.eventHandleAddtoCart();
    },
    showCart(){
        document.getElementById("modal").innerHTML = productView.renderCart();
    },
    eventHandleShowCart(){
        document.getElementById("show-cart-btn").addEventListener("click",()=>{
            sellController.showCart();
            document.getElementById("cart-close-btn").addEventListener("click",()=>{
                document.getElementById("modal").innerHTML = ""
            })
        })
    }
}