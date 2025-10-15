// Componete custom-header
class CustomHeader extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
            <!-- CABEÇALHO -->
            <header class="bgc-primary stick sticky-top d-flex justify justify-content-between align-items-center">
            <div>
                <button class="btn fcc-primary fs-1 p-0 mx-3"
                 data-bs-toggle="offcanvas" data-bs-target="#side-menu" aria-controls="side-menu">
                  <i class="bi bi-list p-0"></i>
                </button>
            </div>
            <div class="my-2">
                <a href="/">
                  <img src="/imgs/logo.png" alt="Logo do projeto">
                </a>
            </div>
            <div>
                <button class="btn fcc-primary fs-1 p-0 mx-3">
                  <i class="bi bi-person-circle p-0"></i>
                </button>
            </div>
            </header>
        `;
    }
}
// Fim do componente Header

// Componete custom-footer
class CustomFooter extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
            <footer class="bg-black text-start">
                <div class="text-light py-2 text-center">
                © 2025 Minha Empresa. Todos os direitos reservados.
                </div>
            </footer>
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