const path = require('path');
const resolve = dir => path.resolve(__dirname, dir);

module.exports = {
    webpack: {
        // 给目录起别名
        alias: {
            "@": resolve("src")
        }
    }
}