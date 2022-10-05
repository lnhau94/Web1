class ProductInventory{
    #productId;
    #qty=[];

    constructor(productId, qty) {
        this.#productId = productId;
        this.#qty = qty;
    }

    get productId() { return this.#productId; }
    set productId(val) { this.#productId = val; }

    get qty() { return this.#qty; }
    set qty(val) { this.#qty = val; }
}