// Componete custom-header
class CustomHeader extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
            <header class="bg-black stick sticky-top">
                <nav class="navbar navbar-expand-lg navbar-dark">
                    <div class="container-fluid">
                        <!-- Logotipo -->
                        <a class="navbar-brand" href="index.html">
                            <img src="../Front-end/imgs/" alt="Logo da empresa" height="40" />
                        </a>
                
                        <!-- Botão Responsivo -->
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarNav" aria-controls="navbarNav"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                
                        <!-- Menu -->
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav ms-auto">
                                <li class="nav-item ms-3">
                                <a class="btn btn-outline-warning border border-2 border-warning rounded px-4 py-2"
                                    href="../Front-end/pages/about_us.html">Sobre Nós</a>
                                </li>
                                <li class="nav-item ms-3">
                                <a class="btn btn-outline-warning border border-2 border-warning rounded px-4 py-2"
                                    href="../Front-end/pages/contact.html">Contato</a>
                                </li>
                                <li class="nav-item ms-3">
                                <a class="btn btn-outline-warning border border-2 border-warning rounded px-4 py-2"
                                    href="../Front-end/pages/privacy_policy.html">Política de Privacidade</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
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

// Definição de componetes
customElements.define('custom-header', CustomHeader);
customElements.define('custom-footer', CustomFooter);