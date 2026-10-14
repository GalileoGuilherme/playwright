# Playwright Test Suite

> Suíte de testes automatizados de ponta a ponta (E2E) e cross-browser utilizando Playwright, focada em velocidade, confiabilidade e execução paralela.

## 📦 Pré-requisitos

* Node.js 18+ (LTS recomendado)
* Git
* Um editor de código, como o VSCode

## 🗂 Estrutura do projeto

```text
playwright/
  ├─ .github/workflows/ # Pipeline de CI/CD (GitHub Actions)
  ├─ e2e/               # Casos de teste de ponta a ponta
  ├─ fixtures/          # Massa de dados e mocks
  ├─ pages/             # Padrão Page Object Model (POM)
  ├─ playwright.config.js # Configurações globais e multiplataforma
  ├─ package.json       # Dependências e scripts
  └─ package-lock.json

```

## ⚙️ Configuração e Instalação

1. Clone o repositório:
```bash
git clone <url-do-repositorio>

```


2. Acesse a pasta do projeto:
```bash
cd playwright

```


3. Instale as dependências e os navegadores:
```bash
npm install
npx playwright install

```



## 🚀 Scripts NPM disponíveis

```bash
# Executar os testes em modo headless
npx playwright test

# Executar os testes com interface gráfica interativa (UI Mode)
npx playwright test --ui

# Visualizar o relatório detalhado da última execução
npx playwright show-report

```

## 📌 Principais Recursos

* **Execução Paralela:** Alta performance na execução de testes em múltiplos navegadores (Chromium, Firefox, WebKit).
* **Auto-waiting Nativo:** Redução drástica de falhas por elementos não carregados ou instabilidade (*flaky tests*).
* **Trace Viewer & Screenshots:** Captura automática de rastreios, vídeos e capturas de tela em caso de falhas para facilitar o *debugging*.

## ⚡ Objetivo

Garantir a qualidade, estabilidade e validação rápida de fluxos críticos de aplicações web modernas através de ferramentas modernas de automação.

## 📝 Licença

Este projeto está sob a licença MIT. Consulte o arquivo LICENSE para mais detalhes.

## 👤 Autor

Desenvolvido por **Galileo Guilherme**

[LinkedIn](https://www.linkedin.com/in/galileo-guilherme-silva-01996693/) • Email: galileoguilhermeqa@gmail.com
