// Componete custom-header
class CustomHeader extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
            <!-- CABEÇALHO -->
            <header class="bgc-primary stick sticky-top d-flex justify justify-content-between align-items-center">
            <div>
                <button class="btn fcc-primary fs-1 p-0 mx-3">
                  <i class="bi bi-list p-0""></i>
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
        this.innerHTML = ``;
    }
}
// Fim do componente Menu

// Definição de componetes
customElements.define('custom-header', CustomHeader);
customElements.define('custom-footer', CustomFooter);
customElements.define('custom-menu', CustomMenu);