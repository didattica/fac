(function (define, document) {
    'use strict';

    define([
        'angular',
        'route',
        'utilities/google.analytics',
        'angularUiRouter',
        'uiRouterStyles',
        'angulartics',
        'angularticsGa'
    ], function (angular, route) {
        var app = angular.module('facApp', [
            'ui.router',
            'uiRouterStyles',
            'angulartics',
            'angulartics.google.analytics'
        ]);

        app.config(route);
        angular.element().ready(function () {
            angular.bootstrap(document, ['facApp']);
        });

        return app;
    });

}(this.define, this.document));
