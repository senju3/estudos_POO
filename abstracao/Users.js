class Create {
    add(){ //Em uma aplicação real não se trabalha com idade e sim data de nascimento
        console.log("Criando usuário")
    }
}
class Read {
    add(){
        console.log("Lendo arquivo")
    }
}
class Update {
    add(){
        console.log("Atualizando dados")
    }
}
class Delete {
    add(){
        console.log("deletado!")
    }
}


class Archive {
    constructor (name) {
        this.name = name,
        this.create = new Create(),
        this.read = new Read(),
        this.update = new Update(),
        this.delete = new Delete()
    }
}
const archive = new Archive([".html", ".js"])
archive.read.add()

class User {
    constructor(){
        this.create = new Create()
    }

    salvarUser () {
        this.create.add()
    }
}
const user = new User()
user.salvarUser()