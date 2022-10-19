export const view = {
    renderPage(){
        return `
            <div class="hau-bg1" id="hau-page"></div>
        `
    },
    renderNav(){
        return `
            <div class="hau-nav" id="hau-admin-nav">
                <div class="hau-nav-logo">
                    <img src="../../../imgs/logo-keyboard-center.png">
                </div>
                <div class="hau-nav-button-holder">
                    <div class="hau-nav-button" id="dashboardBtn">Dashboard</div>
                    <div class="hau-nav-button" id="productBtn">Product</div>
                    <div class="hau-nav-button" id="orderBtn">Order</div>
                    <div class="hau-nav-button" id="accountBtn">Account</div>
                </div>
                <div class="hau-nav-logout" id="logout">Logout</div>
            </div>
        `
    },
    renderContent(){
        return `
        <div class="hau-content-page" id="hau-content-page">
        
        </div>
        `
    },
    init(){
        document.getElementById("root").innerHTML = this.renderPage();
        document.getElementById("hau-page").innerHTML = this.renderNav();
        document.getElementById("hau-page").innerHTML += this.renderContent();
    }
}

