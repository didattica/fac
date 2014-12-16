(function (requirejs) {
    'use strict';

    var vendor_dir = '../../bower_components/';

    requirejs.config({
        urlArgs: 'bust=' + Date.now(),
        paths: {
            angular: vendor_dir + 'angular/angular',
            angulartics: vendor_dir + 'angulartics/src/angulartics',
            angularticsGa: vendor_dir + 'angulartics/src/angulartics-ga',
            angularUiRouter: vendor_dir + 'angular-ui-router/release/angular-ui-router',
            uiRouterStyles: vendor_dir + 'angular-ui-router-styles/ui-router-styles',
            jquery: vendor_dir + 'jquery/dist/jquery.min',
            head: vendor_dir + 'components-revealjs/lib/js/head.min',
            revealjs: vendor_dir + 'components-revealjs/js/reveal',
            text: vendor_dir + 'text/text'
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
