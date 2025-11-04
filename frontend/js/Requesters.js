import { API_URL } from "./Helpers.js";
import { END_POINTS } from "./Helpers.js";

// Classe para realizar requisições para User
class UserRequester {

    // Método para requisitar os dados
    static getData() {
        let data = fetch(API_URL + END_POINTS.user)
            .then(result => {
                if (!result.ok) {
                    throw new Error("Requisição mal sucessida");
                }
                return result.json();
            })
            .catch(error => {
                console.error("Erro: ", error.message);
            });
        
        return data;
    }
    
    // Método para atualiza dados
    static setData(data) {
        const options = {
                method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        };

        let data = fetch(API_URL + END_POINTS.user, options) 
            .then(response => {
                if (!result.ok) {
                    throw new Error("Requisição mal sucessida");
                }
                return true;
            })
            .catch(error => {
                console.error("Erro: ", error.message);
            });

        return data;
    }

}

// Classe para realizar requisições para Goal
class GoalRequester {

    // Método para listar metas
    static findAll() {
        let data = fetch(API_URL + END_POINTS.goals)
            .then(result => {
                if (!result.ok) {
                    throw new Error("Erro em listar metas");
                }
                return result.json();
            })
            .catch(error => {
                console.error("Erro: ", error.message);
            });
        return data;
    }

    // Método para buscar uma meta específica 
    static findById(id) {
        let data = fetch(API_URL + END_POINTS.goals + `/${id}`)
            .then(result => {
                if (!result.ok) {
                    throw new Error("Erro em buscar uma meta")
                }
                return result.json();
            })
            .catch(error => {
                console.error("Erro: ", error.message);
            });
        return data;
    }

    // Método para criar uma nova meta
    static save(data) {
        const options = {
                method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        };

        let data = fetch(API_URL + END_POINTS.goals, options) 
            .then(response => {
                if (!result.ok) {
                    throw new Error("Requisição mal sucessida");
                }
                return true;
            })
            .catch(error => {
                console.error("Erro: ", error.message);
            });

        return data;
    }

    // Método para editar uma meta
    static update(data) {
        // Atualizar registro
    }

    // Método para remover uma meta
    static delete(id) {
        // Apagar registro
    }

}

// TransacClasse para realizar requisições para tion
class TransactionRequester {
   
    // Método para listar transações
    static findAll() {
        let data = fetch(API_URL + END_POINTS.transactions)
            .then(result => {
                if (!result.ok) {
                    throw new Error("Falha em listar transações");
                }
                return result.json();
            })
            .catch(error => {
                console.error("Erro: ", error.message);
            });
        return data;
    }

    // Método para bustar uma transação específica
    static findById(id) {
        data = fetch(API_URL + END_POINTS.transactions + `/${id}`)
            .then(result => {
                if (!result.ok) {
                    throw new Error("Ocorreu um erro ao buscar uma transação")
                }
                return result.json();
            })
            .catch(error => {
                console.error("Erro: ", error.message);
            });
        return data;
    }

    // Método para salvar transação
    static save(data) {
        // Salvar registro
    }

    // Método para editar transação
    static update(data) {
        // Atualizar registro
    }

    // Método para apgar transação    
    static delete(id) {
        // Apagar registro
    }

}