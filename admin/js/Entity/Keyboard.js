class Keyboard {
    static list = [];

    #id = '';
    #name = 'new Keyboard';
    #price = 0;
    #brand = '';
    #description = '';
    #wires = [];
    #leds = [];
    #switches = [];
    #imgs = [];

    constructor(id, name, price, brand, description, wires, leds, switches, imgs) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.brand = brand;
        this.description = description;
        this.wires = wires;
        this.leds = leds;
        this.switches = switches;
        this.imgs = imgs;
    }

    static createNewKeyboard() {
        return new Keyboard(null, null, null, null, null, null, null, null, null, null);
    }

    static advancedSearch(name, minprice, maxprice, brand) {
        this.list.filter(function (item) {
            return item.name === name &&
                item.price >= minprice && item.price <= maxprice &&
                item.brand === brand;
        });
    }

    static createFromJSON(json) {
        return new Keyboard(
            null,
            json.name,
            json.price,
            json.brand,
            json.description,
            json.wires,
            json.leds,
            json.switches,
            json.imgs
        )
    }

    toJSON() {
        return {
            id: this.#id,
            name: this.#name,
            price: this.#price,
            brand: this.#brand,
            wires: this.#wires,
            leds: this.#leds,
            switches: this.#switches,
            imgs: this.#imgs
        }
    }

    set id(id) { this.#id = id; }
    get id() { return this.#id; }

    set name(name) { this.#name = name; }
    get name() { return this.#name; }

    set switches(switches) { this.#switches = switches; }
    get switches() { return this.#switches; }

    set imgs(imgs) { this.#imgs = imgs; }
    get imgs() { return this.#imgs; }

    set price(price) { this.#price = price; }
    get price() { return this.#price; }

    set brand(brand) { this.#brand = brand; }
    get brand() { return this.#brand; }

    set description(description) { this.#description = description; }
    get description() { return this.#description; }

    set wires(wires) { this.#wires = wires; }
    get wires() { return this.#wires; }

    set leds(leds) { this.#leds = leds; }
    get leds() { return this.#leds; }
}