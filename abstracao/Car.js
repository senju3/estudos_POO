class Car {
    constructor (name, price, model, year, brand) {
        this.name = name,
        this.brand = brand,
        this.model = model,
        this.year = year,
        this.price = price
    }

    inspect () {
        console.log(`
            nome: ${this.name}
            preço: ${this.price} R$
        `)
    }

    buy () {

    }

    reject () {
        
    }
}

let civic = new Car("civic", 50000)
civic.inspect()