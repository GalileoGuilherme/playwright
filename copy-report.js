const fs = require("fs-extra");

const source = "./playwright-report";
const destination = "./";

if (fs.existsSync(source)) {
  fs.copySync(source, destination, { overwrite: true });
  console.log("Relatório copiado com sucesso para a raiz do projeto!");
} else {
  console.error("Pasta 'playwright-report' não encontrada!");
  process.exit(1);
}
