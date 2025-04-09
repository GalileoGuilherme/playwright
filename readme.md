# 🎯 Playwright Study Project

Este é um projeto de estudo com [Playwright](https://playwright.dev/), ferramenta de automação de testes para aplicações web. O objetivo principal é praticar e demonstrar testes automatizados com **boas práticas de organização**, incluindo:

- Page Objects  
- Separação de testes por funcionalidade s  
- Execução multi-navegador  
- Execução mobile  
- Geração de relatórios HTML

---

## 📁 Estrutura do Projeto

```
playwright-study/
├── tests/
│   ├── login/
│   ├── produtos/
│   └── menu/
├── pages/
├── utils/
├── playwright.config.js
├── package.json
└── README.md
```

---

## 🚀 Como executar

### 1. Clone o projeto

```bash
git clone https://github.com/GalileoGuilherme/playwright.git
cd playwright-study
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Execute os testes

#### Rodar todos os testes:
```bash
npm test
```

#### Rodar com navegador visível:
```bash
npm run test:headed
```

#### Rodar modo debug (step-by-step):
```bash
npm run test:debug
```

#### Rodar testes específicos:
```bash
npm run test:login
npm run test:produtos
npm run test:menu
```

---

## 🧪 Navegadores suportados

Este projeto está configurado para rodar os testes em múltiplos navegadores:

- ✅ Chromium (Chrome)  
- ✅ Firefox  
- ✅ WebKit (Safari)  
- ✅ Mobile emulado (iPhone 12)

#### Exemplo:
```bash
npm run test:chrome
npm run test:mobile
```

---

## 📊 Relatório de testes

Ao final da execução, o relatório HTML é gerado automaticamente e aberto no navegador:

```bash
npm run open:report
```

---

## 🧰 Tecnologias utilizadas

- [Playwright](https://playwright.dev/)  
- JavaScript (Node.js)  
- Page Object Model  
- HTML Reporter

---




