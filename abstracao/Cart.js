//Por convenção nomear o arquivo com a 1° letra maiúscula para deixar o código mais organizado
class Product {
    constructor (name, category, price, brand, description) {
        this.nome = [name],
        this.categoria = category,
        this.preco = price,
        this.marca = brand,
        this.descricao = description
    }

    analyze() {
        console.log(`
            ${this.nome}
            ${this.categoria}
            ${this.preco}
            ${this.marca}
        `)
    }
    add () {}
}
const Iphone = new Product("Iphone 11", "celular", 10000, "iphone")
const galaxy = new Product(["galaxy A12", "galaxy s20"], "celular", 10000, "samsung")
Iphone.analyze()
galaxy.analyze()


class Cart {
    constructor () {
        this.product = new Product("Iphone 1", "celular", 10000, "iphone")    
    }
    
    add () {
        console.log(`
            adicionando produto no carrinho
            produto: ${this.product.analyze()}
        `)
    }
}
const cart = new Cart()
cart.product.analyze()