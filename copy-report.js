// copy-report.js
const fs = require('fs');
const path = require('path');
const fse = require('fs-extra');

const source = path.join(__dirname, 'playwright-report');
const destination = path.join(__dirname, 'report');

fse.removeSync(destination);
fse.copySync(source, destination);
