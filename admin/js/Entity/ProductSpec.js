class ProductSpec{
    #productId = '';
    #color ='';
    #switches = '';
    #qty;

    constructor(productId, color, switches, qty) {
        this.#productId = productId;
        this.#color = color;
        this.#switches = switches;
        this.#qty = qty;
    }

    get productId() { return this.#productId; }
    set productId(value) { this.#productId = value; }

    get color() { return this.#color; }
    set color(value) { this.#color = value; }

    get switches() { return this.#switches; }
    set switches(value) { this.#switches = value; }

    get qty() { return this.#qty; }
    set qty(value) { this.#qty = value; }

}