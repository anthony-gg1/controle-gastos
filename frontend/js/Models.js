// Model para Usuário
class User {
    constructor() {
        this.name = null;
        this.cpf = null;
        this.email = null;
        this.tel = null;
        this.profile_image = null;
    }
}

// Model para Transação
class Transaction {
    constructor() {
        this.id = null;
        this.value = null;
        this.description = null;
        this.date = null;
    }
}

// Model para Meta
class Goal {
    constructor() {
        this.id = null
        this.title = null;
        this.description = null;
        this.value = 1400
        this.expiration_date = null;
        this.status = null;
    }
}