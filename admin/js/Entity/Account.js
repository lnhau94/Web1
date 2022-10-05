class Account{
    static list = [];

    #username;
    #password;
    #type;

    constructor(username, password, type){
        this.#username = username;
        this.#password = password;
        this.#nameofStaff = type;
    };

    static createNewAccount(username, password, type){
        return new AdminUser(username, password, type);
    }

    static checkLogin(username, password){
        list.array.forEach(element => {
            if (element.username === username && element.password === password) {
                return element.gettype();
            }
        });

        return null;
    }

    set username(username) { this.#username = username; }
    get username() { return this.#username; }

    set password(password) { this.#password = password; }

    set type(type) { this.#type = type; }
    get type() { return this.#type; }
}
