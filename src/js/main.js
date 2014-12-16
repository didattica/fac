(function (requirejs) {
    'use strict';

    // TODO - http://stackoverflow.com/questions/27255561/variable-in-require-path-not-working-with-r-js
    requirejs.config({
        urlArgs: 'bust=' + Date.now(),
        paths: {
            angular: vendor_dir + 'angular/angular',
            angulartics: '../../bower_components/angulartics/src/angulartics',
            angularticsGa: '../../bower_components/angulartics/src/angulartics-ga',
            angularUiRouter: '../../bower_components/angular-ui-router/release/angular-ui-router',
            uiRouterStyles: '../../bower_components/angular-ui-router-styles/ui-router-styles',
            jquery: '../../bower_components/jquery/dist/jquery.min',
            head: '../../bower_components/components-revealjs/lib/js/head.min',
            revealjs: '../../bower_components/components-revealjs/js/reveal',
            text: '../../bower_components/text/text'
        },
        shim: {
            revealjs: {
                exports: 'Reveal'
            },
            angular : {
                exports : 'angular'
            },
            angulartics : ['angular'],
            angularticsGa: ['angular'],
            jquery: {exports: 'jquery'},
            angularUiRouter: ['angular'],
            uiRouterStyles: ['angular'],
            head: ['revealjs']
        },
        // kick start application
        deps: ['app']
    });

}(this.requirejs));
