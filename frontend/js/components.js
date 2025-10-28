// Componete custom-header
class CustomHeader extends HTMLElement {
    constructor() {
        super();

        this.classList.add("bgc-primary", "sticky-top", "w-100", "container-fluid");
        this.classList.add("d-flex", "justify-content-between", "align-items-center");
        this.classList.add("border-bottom", "borderc-primary", "border-3");

        this.innerHTML = `
            <!-- BOTÃO -->
            <div>
                <button class="btn fcc-primary fs-1 p-0 mx-3" data-bs-toggle="offcanvas" data-bs-target="#side-menu" aria-controls="side-menu">
                    <i class="bi bi-list p-0"></i>
                </button>
            </div>
            
            <!-- LOGO -->
            <div class="my-2">
                <a href="/">
                    <img src="/imgs/logo.png" alt="Logo do projeto">
                </a>
            </div>

            <!-- PERFIL -->
            <div>
                <a href="/pages/profile" class="btn fcc-primary fs-1 p-0 mx-3">
                    <i class="bi bi-person-circle p-0"></i>
                </a>
            </div>
        `;
    }
}
// Fim do componente Header

// Componete custom-footer
class CustomFooter extends HTMLElement {
    constructor() {
        super();

        this.classList.add("bgc-primary", "d-flex", "flex-column", "gap-3", "py-2", "container-fluid");

        this.innerHTML = `
            <!-- COLUNAS -->
            <div class="d-flex justify-content-around flex-wrap">
                <!-- EMPRESA -->
                <div class="my-3 gap-3 w-25 px-3">
                    <div class="text-center">
                        <img src="/imgs/logo.png" alt="Logo do projeto">
                    </div>
                    <div class="text-center mt-1">
                        <h5 class="fcc-primary">BDIPI®</h5>
                    </div>
                    <div class="text-center fcc-primary px-5">
                        Um simples pequeno de futuros desenvolvedores construindo um simples projeto.
                    </div>
                </div>

                <!-- TECNOLOGIAS -->
                <div class="my-3 w-25 px-3">
                    <h5 class="fcc-primary">
                        Tecnologias
                    </h5>
                    <ul class="list-group list-group-flush bgc-primary">
                        <li class="list-group-item bgc-primary fcc-secondary fs-6 px-0">
                            UX/UI Design e Prototipagem (Figma)
                        </li>
                        <li class="list-group-item bgc-primary fcc-secondary fs-6 px-0">
                            Diagramação (Draw.io, brModelo, Mermaid)
                        </li>
                        <li class="list-group-item bgc-primary fcc-secondary fs-6 px-0">
                            Desenvolvimento Back-end (Python, FastAPI, SQLModel, SQLite)
                        </li>
                        <li class="list-group-item bgc-primary fcc-secondary fs-6 px-0">
                            Desenvolvimento Front-end (HTML, CSS, Botstrap, JavaScript)
                        </li>
                    </ul>
                </div>

                <!-- DESENVOLVEDORES -->
                <div class="my-3 w-25 px-3">
                    <h5 class="fcc-primary">
                        Desenvolvedores
                    </h5>
                    <ul class="list-group list-group-flush bgc-primary">
                        <li class="list-group-item bgc-primary fcc-secondary fs-6 px-0">
                            <a href="https://github.com/anthony-gg1" target="_blank" class="text-decoration-none fcc-secondary">
                                Anthony Guilherme
                            </a>
                        </li>
                        <li class="list-group-item bgc-primary fcc-secondary fs-6 px-0">
                            <a href="https://github.com/paulos5" target="_blank" class="text-decoration-none fcc-secondary">
                                Paulo Sócrates
                            </a>
                        </li>
                        <li class="list-group-item bgc-primary fcc-secondary fs-6 px-0">
                            <a href="https://github.com/marcosantoniodasilvaalmeidas-arc" target="_blank" class="text-decoration-none fcc-secondary">
                                Marcos Antônio
                            </a>
                        </li>
                        <li class="list-group-item bgc-primary fcc-secondary fs-6 px-0">
                            <a href="https://github.com/falkc2" target="_blank" class="text-decoration-none fcc-secondary">
                                Vinicíus Santos
                            </a>
                        </li>
                        <li class="list-group-item bgc-primary fcc-secondary fs-6 px-0">
                            <a href="https://github.com/joaopedro261009" target="_blank" class="text-decoration-none fcc-secondary">
                                João Pedro  
                            </a>
                        </li>
                    </ul>
                </div>

                <!-- PÁGINAS -->
                <div class="my-3 w-25 px-3">
                    <h5 class="fcc-primary">
                        Páginas
                    </h5>
                    <ul class="list-group list-group-flush bgc-primary">
                        <li class="list-group-item bgc-primary fcc-secondary fs-6 px-0">
                            <a href="/" class="text-white text-decoration-none">Página Inicial</a>
                        </li>
                        <li class="list-group-item bgc-primary fcc-secondary fs-6 px-0">
                            <a href="/pages/about-project" class="text-white text-decoration-none">Sobre o Projeto</a>
                        </li>
                        <li class="list-group-item bgc-primary fcc-secondary fs-6 px-0">
                            <a href="/pages/about-us" class="text-white text-decoration-none">Sobre Nós</a>
                        </li>
                        <li class="list-group-item bgc-primary fcc-secondary fs-6 px-0">
                            <a href="/pages/help" class="text-white text-decoration-none">Ajuda</a>
                        </li>
                        <li class="list-group-item bgc-primary fcc-secondary fs-6 px-0">
                            <a href="/pages/profile" class="text-white text-decoration-none">Perfil</a>
                        </li>
                    </ul>
                </div>
            </div>
            <hr class="m-0 mx-3 fcc-primary">

            <!-- MINI RODAPÉ -->
            <div>
                <p class="text-center m-0">
                    <small class="fcc-primary"> © 2025 BDIPI®. Todos os direitos reservados.</small>
                </p>
            </div>
        `
    }
}
// Fim do componete custom-footer

// Componente Menu
class CustomMenu extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
            <div class="offcanvas offcanvas-start" tabindex="-1" id="side-menu" aria-labelledby="side-menuLabel">
                <div class="offcanvas-header bgc-primary">
                    <h2 class="offcanvas-title w-100 text-center fcc-primary" id="side-menuLabel">Menu</h2>
                </div>
                <div class="offcanvas-body">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">
                            <a href="/" class="text-decoration-none">
                                <i class="bi bi-house-door-fill"></i>
                                Página Inicial</a>
                        </li>
                        <li class="list-group-item">
                            <a href="/pages/about-project" class="text-decoration-none">
                                <i class="bi bi-file-code-fill"></i>
                                Sobre o Projeto</a>
                        </li>
                        <li class="list-group-item">
                            <a href="/pages/about-us" class="text-decoration-none">
                                <i class="bi bi-people-fill"></i>
                                Sobre Nós</a>
                        </li>
                        <li class="list-group-item">
                            <a href="/pages/help" class="text-decoration-none">
                                <i class="bi bi-question-square-fill"></i>
                                Ajuda</a>
                        </li>
                    </ul>
                    <hr>
                </div>
                <div class="bgc-primary fcc-primary py-2 text-center w-100">
                    © 2025 BDIPI®. Todos os direitos reservados.
                </div>
            </div>
        `;
    }
}
// Fim do componente Menu

// Componente Modal de Transações
class CustomModalTransaction extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
            <div class="modal fade" id="modalTransaction" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="modalTransactionLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content bgc-primary fw-bold">
                        <div class="modal-header">
                            <h5 class="modal-title fcc-primary" id="modalTransactionLabel">Nova Transação</h5>
                            <button type="button" class="btn-close bgc-secondary" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body text-start bgc-secondary">
                            <form>
                                <div class="mb-3">
                                    <label for="transactionType" class="form-label text-dark">
                                        Tipo de Transação
                                    </label>
                                    <select class="form-select bgc-secondary text-dark" id="transactionType" required>
                                        <option value="income">Receita</option>
                                        <option value="expense">Despesa</option>
                                    </select>
                                    <label for="amount" class="form-label mt-3 text-dark">
                                        Valor (R$)
                                    </label>
                                    <input type="number" class="form-control bgc-secondary text-dark" id="amount" required />
                                    <label for="date" class="form-label mt-3 text-dark">
                                        Data
                                    </label>
                                    <input type="date" class="form-control bgc-secondary text-dark" id="date" required />
                                    <label for="description" class="form-label mt-3 text-dark">
                                        Descrição
                                    </label>
                                    <textarea class="form-control bgc-secondary text-dark" id="description" rows="3" required></textarea>
                                    <label for="category" class="form-label mt-3 text-dark">
                                        Categoria
                                    </label>
                                    <select class="form-select bgc-secondary text-dark" id="category" required>
                                        <option value="food">Alimentação</option>
                                        <option value="transportation">Transporte</option>
                                        <option value="entertainment">Entretenimento</option>
                                        <option value="utilities">Contas</option>
                                        <option value="others">Outros</option>
                                    </select>
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn fcc-negative" data-bs-dismiss="modal">Fechar</button>
                            <button type="button" class="btn btn-primary" onclick="alert('Transação Salva')">Salvar Transação</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}
// Fim do componente Modal de Transações

// Componente Modal de Nova Meta
class CustomModalNewGoal extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
            <div class="modal fade" id="modalNewGoal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="modalNewGoalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content bgc-primary fw-bold">
                        <div class="modal-header">
                            <h5 class="modal-title fcc-primary" id="modalNewGoalLabel">Nova Meta</h5>
                            <button type="button" class="btn-close bgc-secondary" data-bs-dismiss="modal"
                                aria-label="Close"></button>
                        </div>
                        <div class="modal-body text-start bgc-secondary">
                            <form>
                                <div class="mb-3">
                                    <label for="goalTitle" class="form-label text-dark">
                                        Título da Meta
                                    </label>    
                                    <input type="text" class="form-control bgc-secondary text-dark" id="goalTitle" required />

                                    <label for="goalValue" class="form-label mt-3 text-dark">
                                        Valor (R$)
                                    </label>
                                    <input type="number" class="form-control bgc-secondary text-dark" id="goalValue" step="0.01" min="0.01" required />

                                    <label for="goalDescription" class="form-label mt-3 text-dark">
                                        Descrição
                                    </label>
                                    <textarea class="form-control bgc-secondary text-dark" id="goalDescription" rows="3"></textarea>

                                    <label for="goalExpirationDate" class="form-label mt-3 text-dark">
                                        Data Limite
                                    </label>
                                    <input type="date" class="form-control bgc-secondary text-dark" id="goalExpirationDate" required />
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn fcc-negative" data-bs-dismiss="modal">Fechar</button>
                            <button type="button" class="btn btn-primary" onclick="alert('Meta Salva')">Salvar
                                Meta</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}
// Fim do componente Modal de Nova Meta

// Componente Modal de Editar Meta
class CustomModalUpdateGoal extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
            <div class="modal fade" id="modalUpdateGoal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="modalUpdateGoalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content bgc-primary fw-bold">
                        <div class="modal-header">
                            <h5 class="modal-title fcc-primary" id="modalUpdateGoalLabel">Atualizar Meta</h5>
                            <button type="button" class="btn-close bgc-secondary" data-bs-dismiss="modal"
                                aria-label="Close"></button>
                        </div>
                        <div class="modal-body text-start bgc-secondary">
                            <form>
                                <div class="mb-3">
                                    <label for="goalTitle" class="form-label text-dark">
                                        Título da Meta
                                    </label>    
                                    <input type="text" class="form-control bgc-secondary text-dark" id="goalTitle" value="Meta" required />

                                    <label for="goalValue" class="form-label mt-3 text-dark">
                                        Valor (R$)
                                    </label>
                                    <input type="number" class="form-control bgc-secondary text-dark" id="goalValue" step="0.01" min="0.01" value="1000" required />

                                    <label for="goalDescription" class="form-label mt-3 text-dark">
                                        Descrição
                                    </label>
                                    <textarea class="form-control bgc-secondary text-dark" id="goalDescription" rows="3">Descrição detalhada da meta</textarea>

                                    <label for="goalExpirationDate" class="form-label mt-3 text-dark">
                                        Data Limite
                                    </label>
                                    <input type="date" class="form-control bgc-secondary text-dark" id="goalExpirationDate" value="2026-03-16" required />
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn fcc-negative" data-bs-dismiss="modal">Fechar</button>
                            <button type="button" class="btn btn-primary" onclick="alert('Meta Salva')">Salvar
                                Meta</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}
// Fim do componente Modal de Editar Meta

// Componente Modal de Apagar Meta
class CustomModalDeleteGoal extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
            <div class="modal fade" id="modalDeleteGoal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="modalDeleteGoalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content bgc-primary fw-bold">
                        <div class="modal-header">
                            <h5 class="modal-title fcc-primary" id="modalDeleteGoalLabel">Deletar Meta</h5>
                            <button type="button" class="btn-close bgc-secondary" data-bs-dismiss="modal"
                                aria-label="Close"></button>
                        </div>
                        <div class="modal-body text-start bgc-secondary">
                            Deseja excluir essa meta?
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn fcc-negative" data-bs-dismiss="modal">Cancelar</button>
                            <button type="button" class="btn btn-danger" onclick="alert('Meta Excluída')">Excluir Meta</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}
// Fim do componente Modal de Apagar Meta

// Componente Modal de Descrever Meta
class CustomModalDescribeGoal extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
            <div class="modal fade" id="modalGoalInfo" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
                aria-labelledby="modalGoalInfoLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content bgc-primary fw-bold">
                        <div class="modal-header">
                            <h5 class="modal-title fcc-primary" id="modalGoalInfoLabel">Descrição da Meta</h5>
                            <button type="button" class="btn-close bgc-secondary" data-bs-dismiss="modal"
                                aria-label="Close"></button>
                        </div>
                        <div class="modal-body text-start bgc-secondary">   
                            <div class="mb-3 d-flex flex-column">
                                <label for="goalTitle" class="form-label text-dark">
                                    Título da Meta
                                </label>
                                <p class="form-control bgc-secondary text-dark" id="goalTitle">
                                    Meta Genérica
                                </p>

                                <label for="goalValue" class="form-label mt-3 text-dark">
                                    Valor (R$)
                                </label>
                                <p class="form-control bgc-secondary text-dark" id="goalValue">
                                    R$ 100.000,00
                                </p>

                                <label for="goalDescription" class="form-label mt-3 text-dark">
                                    Descrição
                                </label>
                                <p class="form-control bgc-secondary text-dark" id="goalDescription" rows="3">
                                    Simples descrição da meta.
                                </p>

                                <label for="goalExpirationDate" class="form-label mt-3 text-dark">
                                    Data Limite
                                </label>
                                <p class="form-control bgc-secondary text-dark" id="goalExpirationDate">
                                    10/03/2034
                                </p>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Fechar</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}
// Fim do componente Modal de Descrever Meta

// Definição de componetes
customElements.define('custom-header', CustomHeader);
customElements.define('custom-footer', CustomFooter);
customElements.define('custom-menu', CustomMenu);
customElements.define('custom-modal-transaction', CustomModalTransaction);  
customElements.define('custom-modal-new-goal', CustomModalNewGoal);  
customElements.define('custom-modal-update-goal', CustomModalUpdateGoal);
customElements.define('custom-modal-delete-goal', CustomModalDeleteGoal);
customElements.define('custom-modal-describe-goal', CustomModalDescribeGoal);