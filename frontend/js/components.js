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
                    <div class="text-center">
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

                <!-- CERTIFICAÇÕES -->
                <div class="my-3 w-25 px-3">
                    <h5 class="fcc-primary">
                        Certificações
                    </h5>
                    <ul class="list-group list-group-flush bgc-primary">
                        <li class="list-group-item bgc-primary fcc-secondary fs-6 px-0">
                            AWS Certified Cloud Practitioner
                        </li>
                        <li class="list-group-item bgc-primary fcc-secondary fs-6 px-0">
                            Laravel Certified Developer
                        </li>
                        <li class="list-group-item bgc-primary fcc-secondary fs-6 px-0">
                            Google UX Design Professional
                        </li>
                        <li class="list-group-item bgc-primary fcc-secondary fs-6 px-0">
                            Microsoft Azure Fundamentals (AZ-900)
                        </li>
                        <li class="list-group-item bgc-primary fcc-secondary fs-6 px-0">
                            Python for Data Science (IBM)
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
                            <a href="/pages/about-project.html" class="text-decoration-none">
                                <i class="bi bi-file-code-fill"></i>
                                Sobre o Projeto</a>
                        </li>
                        <li class="list-group-item">
                            <a href="/pages/about-us.html" class="text-decoration-none">
                                <i class="bi bi-people-fill"></i>
                                Sobre Nós</a>
                        </li>
                        <li class="list-group-item">
                            <a href="/pages/faq.html" class="text-decoration-none">
                                <i class="bi bi-question-square-fill"></i>
                                FAQs</a>
                        </li>
                        <li class="list-group-item">
                            <a href="/pages/help.html" class="text-decoration-none">
                                <i class="bi bi-info-circle-fill"></i>
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

// Definição de componetes
customElements.define('custom-header', CustomHeader);
customElements.define('custom-footer', CustomFooter);
customElements.define('custom-menu', CustomMenu);