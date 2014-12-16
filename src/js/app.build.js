({
    appDir: '../',
    baseUrl: 'js',
    dir: '../../build',
    mainConfigFile: 'main.js',
    modules: [
        {
            name: 'main',
            include: [
                'main'
            ]
        }
    ],
    optimizeCss: 'standard',
    removeCombined: true
})
