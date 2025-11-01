import { API_URL } from "./Helpers.js"

// Classe para realizar requisições para User
class UserRequester {

    // Método para requisitar os dados
    static getData() {
        let data = fetch(API_URL + "/user.php")
            .then(result => {
                if (!result.ok) {
                    throw new Error("Requisição mal sucessida");
                }
                return result.json();
            })
            .catch(error => {
                console.error("Erro: ", error.message);
            })
        
        return data;
    }
    
    static setData(data) {
        // Puxar definir dados
    }

}

// Classe para realizar requisições para Goal
class GoalRequester {

    // Métodos para buscar registros
    static findAll() {
        // Listar registros
        return [];
    }
    static findById(id) {
        // Buscar registros
        return {};
    }

    // Métodos para realizar alterações nos registros
    static save(data) {
        // Salvar registro
    }
    static update(data) {
        // Atualizar registro
    }
    static delete(id) {
        // Apagar registro
    }

}

// TransacClasse para realizar requisições para tion
class TransactionRequester {
   
    // Métodos para buscar registros
    static findAll() {
        // Listar registros
        return [];
    }
    static findById(id) {
        // Buscar registros
        return {};
    }

    // Métodos para realizar alterações nos registros
    static save(data) {
        // Salvar registro
    }
    static update(data) {
        // Atualizar registro
    }
    static delete(id) {
        // Apagar registro
    }

}