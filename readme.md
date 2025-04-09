# 🎭 Playwright Study  
Projeto de estudo usando **Playwright** com **JavaScript**, focado em testes automatizados e explorando boas práticas, execução em múltiplos browsers, dispositivos móveis, relatórios e integração com CI/CD.

## 📦 Tecnologias Utilizadas  
- [Playwright](https://playwright.dev/)  
- JavaScript (Node.js)  
- GitHub Actions  
- Vercel (para visualização de relatórios)

## 🚀 Funcionalidades  
- Testes automatizados com Playwright  
- Execução em múltiplos browsers: Chromium, Firefox, WebKit  
- Execução em ambiente mobile (emulado)  
- Geração de relatórios em HTML  
- Deploy automático dos relatórios na Vercel

## 🧲 Rodando os Testes  

### 1. Instalar dependências  
```bash
npm install
```

### 2. Executar os testes  
```bash
# Todos os testes
npm test

# Testes com browser visível
npm run test:headed

# Testes em modo debug
npm run test:debug

# Testar em navegadores específicos
npm run test:chrome
npm run test:firefox
npm run test:webkit

# Testes mobile (Safari emulado)
npm run test:mobile
```

## 📊 Acessar Relatório HTML  
Sempre que um teste for executado, o relatório é gerado na pasta `playwright-report`.

### 🔗 Acesse o relatório online:  
👉 [Ver relatório mais recente ](https://playwright-bl9dbdqsp-galileo-guilhermes-projects.vercel.app)

## 🔁 CI/CD com GitHub Actions  
O projeto conta com integração contínua via GitHub Actions, que executa os testes automaticamente em cada push. O relatório gerado é publicado automaticamente na Vercel.

## 📂 Estrutura de Pastas  
```
├── tests/                # Casos de teste organizados por funcionalidade
├── playwright-report/    # Relatório gerado após execução
├── .github/workflows/    # Configuração de CI com GitHub Actions
├── package.json          # Scripts e dependências do projeto
└── vercel.json           # Configuração de deploy da Vercel
```

## 👨‍💼 Autor  
**Galileo Guilherme**  
💼 Projeto pessoal para estudo e prática de testes automatizados com Playwright.

## 📝 Licença  
Este projeto está sob a licença ISC.
