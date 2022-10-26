export const view = {
    renderLoginForm() {
        return `
        <div class="container">
            <form action="">
                <h1>Đăng nhập</h1>
                <div class="form-control">
                    <input id="username" type="text" placeholder="Tên đăng nhập">
                    <small></small>
                    <span></span>
                </div>
                <div class="form-control">
                    <input id="password" type="password" placeholder="Mật khẩu">
                    <small></small>
                    <span></span>
                </div>
                <button type="submit" class="btn-submit-log">Đăng nhập</button>
                <div class="signin-link">
                    <a href="../sign_up_(3)/index.html">Đăng kí</a>
                </div>
            </form>
        </div>
        `
    },
    renderRegistrationForm() {
        return `
        <div class="container">
        <form action="" class="yang-form">
            <h1>Đăng kí</h1>
            <div class="yang-container">
                <div>
                    <div class="form-control">
                        <input id="username" type="text" placeholder="Tên đăng nhập">
                        <small></small>
                        <span></span>
                    </div>
        
                    <div class="form-control">
                        <input id="password" type="password" placeholder="Mật khẩu">
                        <small></small>
                        <span></span>
                    </div>
                    <div class="form-control">
                        <input id="confirm-password" type="password" placeholder="Xác nhận mật khẩu">
                        <small></small>
                        <span></span>
                    </div>
                </div>
                <div>
                    <div class="form-control">
                        <input id="fullname" type="text" placeholder="Họ Tên">
                        <small></small>
                        <span></span>
                    </div>
                    <div class="form-control">
                        <input id="email" type="email" placeholder="Email">
                        <small></small>
                        <span></span>
                    </div>
                    <div class="form-control">
                        <input id="phone" type="text" placeholder="Số điện thoại">
                        <small></small>
                        <span></span>
                    </div>
                </div>
            </div>
            <button type="submit" class="btn-submit">Đăng kí</button>
            <div class="signup-link">
                <a href="../sign_in_(3)/index.html">Đăng nhập</a>
            </div>
        </form>
    </div>
        `
    }
}