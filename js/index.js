
import { homepageView } from "./yang_homepage/yang_homepage_view.js";
// document.getElementById("gotoAdmin").onclick = () => location.assign("/admin/index.html");
// document.getElementById("root").innerHTML += homepageView.renderHomepage();

import { loginController } from "../admin/js/Controller/yang_controller.js";
loginController.showSigninForm();