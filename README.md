# Controle de Gastos Pessoais

---

## Funcionalidades principais
- Cadastro e gerenciamento de usuários
- Registro de despesas e receitas
- Categorização das transações
- Definição e acompanhamento de metas financeiras
- Dashboard com gráficos interativos
- Filtros por período, categoria e valor
- Interface web responsiva

## Tecnologias
- Backend: Python, FastAPI, SQLModel, SQLite
- Frontend: HTML, CSS, JavaScript, Bootstrap, Chart.js
- Ferramentas: Git, GitHub, VS Code, Draw.io, ChatGPT

## Estrutura do repositório
```
controle-gastos/
├── backend/                 # API e modelos (requirements.txt)
├── frontend/                # HTML, CSS, JS, vendor (Bootstrap, etc.)
│   ├── index.html
│   └── pages/
├── CHANGELOG.md             # histórico de mudanças (criado)
├── SECURITY.md              # política de segurança (criada)
├── LICENSE.md               # licença e políticas de uso (criado)
└── README.md
```

## Como baixar e rodar (rápido)
1. Clone:
```powershell
git clone https://github.com/seu-usuario/controle-gastos.git
cd "C:\Users\usuario\Desktop\controle-gastos"
```

2. Backend:
```powershell
cd backend
python -m venv .venv
.\.venv\Scripts\Activate.ps1
pip install -r requirements.txt
uvicorn app.main:app --reload
```

3. Frontend (modo simples):
- Abrir `frontend/index.html` no navegador ou servir em localhost:
```powershell
cd frontend
python -m http.server 5500
# acessar http://localhost:5500
```

Observação: ajuste paths de acordo com sua estrutura local.

## Segurança (SECURITY.md)
Criamos uma política de segurança para receber relatórios de vulnerabilidades. Envie reportes privados para:
- email: emailinstitucional20@gmail.com

No reporte inclua: resumo, impacto, passos para reproduzir, versão/commit, evidências e contato. Veja o arquivo SECURITY.md na raiz para detalhes sobre escopo, prazos e opções de comunicação cifrada (PGP).

## CHANGELOG
Mantenha um arquivo `CHANGELOG.md` na raiz para registrar releases e mudanças importantes. Sugestão inicial:
```md
## [Unreleased]

### Added
- Inicialização do changelog.

## [0.1.0] - YYYY-MM-DD
### Added
- Versão inicial do projeto.
```

Crie o arquivo na raiz e versionamento com git:
```powershell
New-Item -Path .\CHANGELOG.md -ItemType File
git add CHANGELOG.md
git commit -m "docs: add CHANGELOG.md"
git push
```

## Versionamento

Este projeto segue o padrão [SemVer](https://semver.org/lang/pt-BR/), que utiliza o formato `MAJOR.MINOR.PATCH`:

- **MAJOR**: mudanças incompatíveis com versões anteriores
- **MINOR**: novas funcionalidades compatíveis
- **PATCH**: correções de bugs e melhorias internas

Versão atual: `0.1.0` — desenvolvimento inicial.

Consulte o [`CHANGELOG.md`](./CHANGELOG.md) para acompanhar as mudanças por versão.

## Licença

Este projeto está licenciado sob os termos da [Licença MIT](./LICENSE.md).

Você pode usar, copiar, modificar e distribuir este software livremente, inclusive para fins comerciais, desde que mantenha os créditos aos autores originais e aceite os termos descritos.

> O software é fornecido "como está", sem garantias de qualquer tipo. Os autores não se responsabilizam por danos ou prejuízos decorrentes do uso.


## Boas práticas de contribuição
- Atualize CHANGELOG.md para cada release
- Use issues para discutir grandes mudanças

## Contato e suporte
- Reportes de bugs / dúvidas: abra uma issue no GitHub
- Vulnerabilidades: emailinstitucional20@gmail.com (veja SECURITY.md)

## Integrantes do Projeto
1. Anthony Guilherme Vieira Moraes  
2. Paulo Sócrates de Souza Pinheiro  
3. João Pedro de Souza Fraga  
4. Vinícius Santos Leite  
5. Marcos Antônio da Silva Almeida

## Professor orientador
Álvaro Lopes Rios
