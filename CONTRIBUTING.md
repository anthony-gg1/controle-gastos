# Contribuição

Ficamos gratos por sua contribuição ao SCGI, qualquer ajuda será revisada e lida, seja código, elementos de design ou documentação. Este guia explica e mostra como colaborar e contribuir com o projeto,
utilizando normas técnicas e dentro dos padrões do projeto.

---

## Código de Conduta

Antes de começar, pedimos que leia o código de conduta do repositório e siga nosso **[Código de Conduta](CODE_OF_CONDUCT.md)**,
Queremos manter um ambiente respeitoso e colaborativo.

---

## Formas de Contribuir

Você pode contribuir de diversas formas:

### Documentação
  - Corrigir erros de digitação, formatação ou tradução
  - Melhorar a coesão do texto
  - Atualizar informações desatualizadas
  - Adicionar exemplos ou tutoriais

### Design
  - Sugerir melhorias no visual do projeto
  - Criar ícones ou ilustrações
  - Propor ajustes de UX/UI
  - Contribuir com tipografia, cores, layout, etc.

### Código
  - Corrigir bugs ou comportamentos inesperados
  - Implementar novas funcionalidades ao projeto
  - Melhorar performance
  - Criar ou aprimorar testes automatizados
  - Refatorar trechos de código para torná-los padronizados

---

## Configurações do ambiente local

1. **Faça fork** do repositório:

  Clone:
  ```powershell
  git clone https://github.com/seu-usuario/controle-gastos.git
  cd "C:\Users\usuario\Desktop\controle-gastos"
  ```
  
  Backend:
  ```powershell
  cd backend
  python -m venv .venv
  .\.venv\Scripts\Activate.ps1
  pip install -r requirements.txt
  uvicorn app.main:app --reload
  ```
  
  Frontend (modo simples):
  - Abrir `frontend/index.html` no navegador ou servir em localhost:
  ```powershell
  cd frontend
  python -m http.server 5500
  # acessar http://localhost:5500
  ```

---

### Fluxo de Contribuição

1. Crie uma nova branch com um nome descritivo:
   ```bash
   git checkout -b feat/nome-da-funcionalidade
   # ou
   git checkout -b fix/bug-especifico
   ```

2. Faça suas alterações e commit seguindo o padrão de mensagem
   ```bash
   git commit -m "feat: adiciona componente de autenticação"
   git commit -m "fix: corrige erro no carregamento da página inicial"
   ```

---

## Padrão de Commits

Este projeto adota o padrão [Conventional Commits](https://www.conventionalcommits.org/pt-br/v1.0.0/) para manter consistência e facilitar o versionamento e geração de changelogs.

### Estrutura

Cada mensagem de commit deve seguir o formato:

tipo[escopo opcional]: descrição breve
  
Exemplo:

feat: adiciona suporte ao modo escuro

fix(profile): corrige erro de renderização


### Tipos permitidos

| Tipo       | Descrição                                                                 |
|------------|---------------------------------------------------------------------------|
| `feat`     | Adição de nova funcionalidade                                             |
| `fix`      | Correção de bugs                                                          |
| `docs`     | Alterações na documentação                                                |
| `style`    | Mudanças de formatação, sem impacto no código (espaços, ponto e vírgula)  |
| `refactor` | Refatoração de código, sem alteração de funcionalidade                    |
| `perf`     | Melhorias de desempenho                                                   |
| `test`     | Adição ou modificação de testes                                           |
| `chore`    | Tarefas auxiliares (atualizações de dependências, configs, etc.)          |
| `build`    | Mudanças que afetam o processo de build ou dependências externas          |
| `ci`       | Alterações em configurações de integração contínua                        |

### Mudanças quebradoras

Para indicar uma **breaking change**, use o sufixo `!` no tipo ou adicione `BREAKING CHANGE:` no corpo do commit.

Exemplo:

feat!: remove suporte ao internet explorer 11
BREAKING CHANGE: o projeto não é mais compatível com IE11

---

A partir da versão `0.5.0`, todos os commits devem seguir este padrão. Commits fora do padrão poderão ser rejeitados em revisões ou automações futuras.

---

### Envie sua Branch para o Repositório Remoto

  ```bash
  git push origin feat/nome-da-funcionalidade
  ```

---

### Abra um Pull Request (PR) e Descreva Claramente

- O que foi alterado.  
- O motivo da mudança.  
- Passos para testar (se aplicável).  

---

## Normas Técnicas

Para manter a qualidade e consistência do projeto, siga estas diretrizes:

### Padrões de Código

- Use indentação consistente (2 ou 4 espaços, conforme definido).  
- Nomeie variáveis e funções de forma clara e sem abreviações desnecessárias.  
- Evite duplicação de código — prefira funções reutilizáveis.  
- Adicione comentários apenas quando o código não for autoexplicativo.  
- Siga o estilo de código definido pelo linter (Ex: ESLint, Flake8, Prettier etc.).  

### Estrutura de Commits e Branches

- Cada branch deve focar em uma única tarefa.  
- Commits pequenos e descritivos facilitam a revisão.  
- Use o padrão **Conventional Commits** para facilitar versionamento e changelogs automáticos.  

### Testes e Revisão

- Sempre que possível, adicione testes para novas funcionalidades.  
- Verifique se todos os testes existentes passam antes de abrir um PR.  
- O código será revisado por um mantenedor antes de ser aceito.  
- PRs com boa documentação e commits limpos são aprovados mais rapidamente.  

---

## Suporte e Contato

- Para dúvidas, sugestões ou relatórios de bugs, abra uma **Issue** no GitHub.  
- Caso precise discutir algo diretamente, entre em contato via email: emailinstitucional20@gmail.com

---

Obrigado por contribuir ao projeto **SCGI**!!!
