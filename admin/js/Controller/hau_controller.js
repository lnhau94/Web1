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
         });
         document.getElementById("accountBtn").addEventListener("click", () => {
            controller.showAccountPage();
         });
    }
}
