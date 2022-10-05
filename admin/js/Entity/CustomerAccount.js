class CustomerAccount extends Account{
    #phoneNumber;
    #emailAddress;
    #name;
    #address;
    
    constructor(username,password, name, address, phoneNumber, emailAddress) {
        super(username,password,"CustomerAccount");
        this.#name = name;
        this.#address = address;
        this.#phoneNumber = phoneNumber;
        this.#emailAddress = emailAddress;
    }

    set phoneNumber(value) { this.#phoneNumber = value; }
    get phoneNumber() { return this.#phoneNumber; }  

    set emailAddress(value) { this.#emailAddress = value; }
    get emailAddress() { return this.#emailAddress; }

    set name(value) { this.#name = value; }  
    get name() { return this.#name; }

    set address(value) { this.#address = value; }
    get address() { return this.#address; }

}
