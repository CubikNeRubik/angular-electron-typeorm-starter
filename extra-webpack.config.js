const path = require('path');

module.exports = {
    target: 'electron-renderer',
    externals: {
        typeorm: "require('typeorm')",
        sqlite3: "require('sqlite3')",
    },
    resolve: {
        alias: {
            typeorm: path.resolve(__dirname, "../node_modules/typeorm/typeorm-model-shim")
        }
    }
};