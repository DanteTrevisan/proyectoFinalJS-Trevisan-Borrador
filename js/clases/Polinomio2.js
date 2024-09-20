class Polinomio2{

    #a;
    #b;
    #c;

    constructor(a,b,c){
        this.#a = a;
        this.#b = b;
        this.#c = c;
    }

    get a(){return this.#a};
    get b(){return this.#b};
    get c(){return this.#c};

    set a(a){this.#a = a};
    set b(b){this.#a = b};
    set c(c){this.#a = c};
}

class Raices{

    #x1;
    #x2;

    constructor(x1,x2){
        this.#x1 = x1;
        this.#x2 = x2;
    }

    get x1(){return this.#x1};
    get x2(){return this.#x2};

    set x1(x1){this.#x1 = x1};
    set x2(x2){this.#x2 = x2};

    imprimirRaices(){return `x1 = ${this.#x1} ; x2 = ${this.#x2}`};
}