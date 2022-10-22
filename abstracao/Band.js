class Band {
    constructor (name, song) {
        this.name = name,
        this.songs = [song]
    }

    add () {
        console.log(`
        ${this.name}
        -------------
        ${this.songs}
        Músicas adicionadas com sucesso!
        `)
    }

    update () {

    }

    remove () {
        
    }
}

let racionais = new Band("Racionais", ["Vida Loka 1", "Vida Loka 2"])
racionais.add()

