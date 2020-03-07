// This script change webpack-configs for "ng serve"
const fs = require('fs');
const f_angular = 'node_modules/@angular-devkit/build-angular/src/angular-cli-files/models/webpack-configs/browser.js';
const { getConfigs } = require('./postinstall.config');

const { electronConfig } = getConfigs();
fs.readFile(f_angular, 'utf8', function (err, data) {

    if (err) {
        return console.log(err);
    }

    let result = data.replace(/return {[\s\S]+?$/m, 'return {');
    result = result.replace(/target: "web",/g, '');
    result = result.replace(/return \{/g, 'return {' + electronConfig);

    fs.writeFile(f_angular, result, 'utf8', function (err) {
        if (err) return console.log(err);
    });
});
