const config = require('./extra-webpack.config.js');

module.exports.getConfigs = function(){
    config.target = 'electron-renderer';
    electronConfig = JSON.stringify(config).slice(1,-1) + ',';

    config.target = 'web';
    webConfig = JSON.stringify(config).slice(1,-1) + ',';

    return {
        electronConfig,
        webConfig
    };
};
