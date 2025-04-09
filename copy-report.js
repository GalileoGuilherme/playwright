const fs = require('fs-extra');

const origem = 'playwright-report';
const destino = 'public';

fs.copySync(origem, destino, { overwrite: true });
console.log(`Relatório copiado de "${origem}" para "${destino}"`);
