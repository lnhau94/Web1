class Order{
    static list = [];

    #id;
    #date;
    #totalprice;
    #state = false;
    #customerid;
    #details;

    constructor(id, date, totalprice, customerid, details) {
        this.#id = id;
        this.#date = date;
        this.#totalprice = totalprice;
        this.#customerid = customerid;
        this.#details = details;
    }


    set id(value) { this.#id = value; }
    get id() { return this.#id; }

    set date(value) { this.#date = value; }
    get date() { return this.#date; }

    set totalprice(value) { this.#totalprice = value; }
    get totalprice() { return this.#totalprice; }

    set state(value) { this.#state = value; }
    get state() { return this.#state; }

    set customerid(value) { this.#customerid = value; }
    get customerid() { return this.#customerid; }

    set details(value) { this.#details = value; }
    get details() { return this.#details; }
}