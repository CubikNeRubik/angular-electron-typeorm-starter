const fs = require('fs');
const f_angular = 'extra-webpack.config.js';
const regex = /\/\/ start of extra configs([\S\s]+)\/\/ end of extra configs/;

module.exports.getConfigs = function(){
    return new Promise((resolve, reject) => {

        fs.readFile(f_angular, 'utf8', function (err, data) {
            if (err) {
                console.log(err);
                reject(err);
            }

            var extra = data.match(regex)[1];

            const electronConfig = 'target: "electron-renderer", ' + extra + ',';
            const webConfig = 'target: "web", ' + extra + ',';

            resolve({
                electronConfig,
                webConfig
            })
        });
    });
};
