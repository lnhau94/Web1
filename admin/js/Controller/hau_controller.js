import { model } from "../Model/hau_model.js";
import { view } from "../View/hau_view.js";
import { adminProductView } from "../View/hau_product.js";
import { adminAccountView } from "../View/hau_account.js";

export const controller = {
    model,view,
    showProductPage(){
        document.getElementById("hau-content-page").innerHTML =`
            ${adminProductView.renderProductPageHeader("Product")}
            ${adminProductView.renderProductTable()}
        `;
        adminProductView.showProduct(model.keyboards);
        document.querySelector("#addbtn").addEventListener("click", () =>{
            document.querySelector(".huy-container-info-pd").classList.remove("huy-container-info-pd-none");
            console.log(document.querySelector(".huy-all-frame").classList);
            document.querySelector(".huy-all-frame").classList.remove("huy-close-all-frame");
            document.querySelector(".huy-container-info-pd").classList.remove("huy-container-info-pd-on");
            document.querySelector(".huy-container-info-pd").classList.add("huy-container-info-pd-on");
        });
    },
    showAccountPage(){
        document.getElementById("hau-content-page").innerHTML =`
            ${adminAccountView.renderAccountPageHeader()}
            ${adminAccountView.renderAccountTable()}
            
        `;
        adminAccountView.showAccount(model.accounts);
    },
    init(){
        view.init();
        document.getElementById("productBtn").addEventListener("click", () => {
            controller.showProductPage();
            view.changeCurrentBtn(document.getElementById("productBtn"));
         });

         document.getElementById("orderBtn").addEventListener("click", () => {
            
            view.changeCurrentBtn(document.getElementById("orderBtn"));
         });

         document.getElementById("dashboardBtn").addEventListener("click", () => {
            
            view.changeCurrentBtn(document.getElementById("dashboardBtn"));
         });

         document.getElementById("accountBtn").addEventListener("click", () => {
            controller.showAccountPage();
            view.changeCurrentBtn(document.getElementById("accountBtn"));
         });
    }
}
