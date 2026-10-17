# Playwright E2E Test Suite

Suíte de testes end-to-end para os principais fluxos do [SauceDemo](https://www.saucedemo.com/), desenvolvida com [Playwright Test](https://playwright.dev/) e o padrão Page Object Model.

## O que é testado

- Login de usuário
- Exibição da lista de produtos
- Adição de produto ao carrinho
- Logout

Os testes usam a aplicação pública SauceDemo e precisam de acesso à internet.

## Tecnologias

- JavaScript
- Node.js 18 ou superior
- Playwright Test
- Page Object Model (POM)
- GitHub Actions

## Instalação

Clone o repositório, instale as dependências e baixe os navegadores do Playwright:

```bash
git clone https://github.com/GalileoGuilherme/playwright.git
cd playwright
npm ci
npx playwright install
```

## Executar os testes

Execute todos os testes nos projetos configurados:

```bash
npm test
```

Para executar em um navegador ou perfil específico:

```bash
npm run test:chrome
npm run test:firefox
npm run test:webkit
npm run test:mobile
```

O projeto `Mobile Safari` usa o perfil de dispositivo iPhone 12 com o mecanismo WebKit. Ele simula o dispositivo; não executa em um aparelho físico.

Para executar um grupo de testes:

```bash
npm run test:login
npm run test:produtos
npm run test:menu
```

## Execução visual e depuração

Para acompanhar os testes em um navegador visível:

```bash
npm run test:headed
```

Para executar apenas no Chromium em modo visível:

```bash
npm run test:chrome -- --headed
```

Para abrir a interface interativa do Playwright e selecionar testes:

```bash
npx playwright test --ui
```

Para iniciar o Playwright Inspector:

```bash
npm run test:debug
```

## Relatórios

Veja os testes e o relatório publicado no [Playwright Test Report](https://playwright-one.vercel.app/).

O Playwright gera um relatório HTML em `playwright-report` ao executar os testes. Para abri-lo:

```bash
npm run open:report
```

Para executar novamente toda a suíte e copiar o relatório para `public`:

```bash
npm run build:report
```

## Integração contínua

O workflow do GitHub Actions executa os testes em push e pull requests. O relatório é enviado como artefato da execução, inclusive quando há falha nos testes.

## Estrutura do projeto

```text
.github/workflows/  Workflow de CI
pages/              Page Objects
public/             Relatório copiado para publicação
tests/              Testes E2E organizados por fluxo
utils/              Utilitários compartilhados
copy-report.js      Cópia do relatório para public
playwright.config.js Configuração de projetos e execução
```

## Licença

Distribuído sob a licença MIT. Consulte [LICENSE](./LICENSE).

## Autor

**Galileo Guilherme** — [LinkedIn](https://www.linkedin.com/in/galileoguilherme-silva-01996693/) · [Email](mailto:galileoguilherme@outlook.com)
