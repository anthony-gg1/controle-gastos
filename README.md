# Controle de Gastos Pessoais


---

## Descrição
Aplicação para controle financeiro pessoal: cadastro de usuários, registro de receitas e despesas, categorização, metas e dashboard com filtros e gráficos.

## Funcionalidades principais
- Cadastro e gerenciamento de usuários
- Registro de despesas e receitas
- Categorização das transações
- Definição e acompanhamento de metas financeiras
- Dashboard com gráficos interativos (Chart.js)
- Filtros por período, categoria e valor

## Tecnologias
- Backend: Python 3.10, Django Rest Framework, SQLite
- Frontend: HTML, JavaScript, TailwindCSS, Chart.js, DaisyUI, Vue.js
- Dev / CI: Git, GitHub, VS Code, (possível GitHub Actions)
- Ferramentas: Docker (opcional), pytest (testes), Live Server / python -m http-server

## Estrutura do repositório
```
controle-gastos/
├── backend/                 # API, modelos e dependências (requirements.txt)
├── frontend/               
│   ├── index.html
│   └── pages/
├── CHANGELOG.md
├── SECURITY.md
├── LICENSE.md
└── README.md
```

## Configuração rápida (Windows / PowerShell)
Local do projeto (exemplo): C:\Users\seu-usuario\Desktop\controle-gastos

1. Clonar:
```powershell
git clone https://github.com/anthony-gg1/controle-gastos
cd "C:\Users\seu-usuario\Desktop\controle-gastos"
```

2. Backend (ambiente virtual):
```powershell
cd backend
python -m venv .venv
.\.venv\Scripts\Activate.ps1
pip install -r requirements.txt
# definir variáveis de ambiente se necessário (ex: DATABASE_URL, SECRET_KEY)
uvicorn app.main:app --reload
# acessar API em http://127.0.0.1:8000
```

3. Frontend (modo simples):
```powershell
cd frontend
npm run dev
# acessar http://localhost:5500
```
Ou use a extensão Live Server do VS Code para desenvolvimento local.

4. Testes (se existirem)
```powershell
cd backend
.\.venv\Scripts\Activate.ps1
pip install -r requirements-dev.txt   # se existir
pytest
```

## Variáveis de ambiente recomendadas
- DATABASE_URL (ex: sqlite:///./data.db)
- SECRET_KEY
- DEBUG (true/false)

Coloque variáveis em um arquivo `.env` e carregue com python-dotenv ou configure no ambiente.

## Segurança
Para reportar vulnerabilidades, consulte SECURITY.md e envie para:
- email: emailinstitucional20@gmail.com  
Inclua resumo, impacto, passos para reproduzir, versão/commit e evidências.

## CHANGELOG & Versionamento
Siga SemVer (MAJOR.MINOR.PATCH). Atualize CHANGELOG.md para cada release.

## Contribuição
- Abra issues para bugs ou propostas
- Faça branches por feature/bugfix e envie pull requests
- Atualize CHANGELOG.md e a documentação quando necessário

## Contato e suporte
- Reportes de bugs / dúvidas: abrir uma issue no repositório GitHub
- Vulnerabilidades: emailinstitucional20@gmail.com

## Integrantes do Projeto
1. Anthony Guilherme Vieira Moraes  
2. Paulo Sócrates de Souza Pinheiro  
3. João Pedro de Souza Fraga  
4. Vinícius Santos Leite  
5. Marcos Antônio da Silva Almeida

## Professor orientador
Álvaro Lopes Rios