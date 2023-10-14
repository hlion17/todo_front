const {defineConfig} = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,

    // npm run build 타겟 디렉토리
    outputDir: '../backend/src/main/resource/static',

    // Backend proxy 설정
    devServer: {
        proxy: {
            '/': {
                target: 'http://localhost:8080',
                changeOrigin: true,
                ws: false,
            }
        }
    },

})
