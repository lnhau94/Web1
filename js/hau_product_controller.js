import { model } from "../admin/js/Model/hau_model.js";

export const sellController = {
    init(){
        document.querySelector('.pagecontent').innerHTML += productView.showAllProduct(model.keyboards,1);
    }
}