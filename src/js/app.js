(function (define, document) {
    'use strict';

    define([
        'angular',
        'route',
        'angularUiRouter',
        'uiRouterStyles',
        'jquery'
    ], function (angular, route) {
        var app = angular.module('facApp', [
            'ui.router',
            'uiRouterStyles'
        ]);

        app.config(route);
        angular.element().ready(function () {
            angular.bootstrap(document, ['facApp']);
        });

        return app;
    });

}(this.define, this.document));
