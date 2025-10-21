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
                <!-- EMAIL -->
                <div class="my-3">
                    <h5 class="fcc-primary">
                        Email
                    </h5>
                    <ul class="list-group list-group-flush bgc-primary">
                        <li class="list-group-item bgc-primary fcc-secondary fs-6 px-0">
                            anthonyguilhermevieiramoraes@gmail.com
                        </li>
                        <li class="list-group-item bgc-primary fcc-secondary fs-6 px-0">
                            paulosocratesdesouza@gmail.com
                        </li>
                        <li class="list-group-item bgc-primary fcc-secondary fs-6 px-0">
                            marcosantoniodasilvaalmeidas@gmail.com
                        </li>
                        <li class="list-group-item bgc-primary fcc-secondary fs-6 px-0">
                            Vsantosleite25@gmail.com
                        </li>
                        <li class="list-group-item bgc-primary fcc-secondary fs-6 px-0">
                            fragapereira53@gmail.com
                        </li>
                    </ul>
                </div>
                <!-- GITHUB -->
                <div class="my-3">
                    <h5 class="fcc-primary">
                        Github
                    </h5>
                    <ul class="list-group list-group-flush bgc-primary">
                        <li class="list-group-item bgc-primary fcc-secondary fs-6 px-0">
                            anthony-gg1
                        </li>
                        <li class="list-group-item bgc-primary fcc-secondary fs-6 px-0">
                            PauloS5
                        </li>
                        <li class="list-group-item bgc-primary fcc-secondary fs-6 px-0">
                            marcosantoniodasilvaalmeidas-arc
                        </li>
                        <li class="list-group-item bgc-primary fcc-secondary fs-6 px-0">
                            Falkc2
                        </li>
                        <li class="list-group-item bgc-primary fcc-secondary fs-6 px-0">
                            joaopedro192009
                        </li>
                    </ul>
                </div>
                <!-- TELEFONE -->
                <div class="my-3">
                    <h5 class="fcc-primary">
                        Telefone
                    </h5>
                    <ul class="list-group list-group-flush bgc-primary">
                        <li class="list-group-item bgc-primary fcc-secondary fs-6 px-0">
                            (68) 99978-1355
                        </li>
                        <li class="list-group-item bgc-primary fcc-secondary fs-6 px-0">
                            (68) 98124-0703
                        </li>
                        <li class="list-group-item bgc-primary fcc-secondary fs-6 px-0">
                            (68) 99212-9795
                        </li>
                        <li class="list-group-item bgc-primary fcc-secondary fs-6 px-0">
                            (68) 99614-2878
                        </li>
                        <li class="list-group-item bgc-primary fcc-secondary fs-6 px-0">
                            (68) 99233-1471
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