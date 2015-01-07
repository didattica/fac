(function (define) {
    'use strict';

    define([
        '../controllers/index.controller',
        'text!../../templates/index.html'
    ], function (indexController, indexTemplate) {

        var vendor_dir = 'bower_components/';

        return {
            url: '/',
            template: indexTemplate,
            controller: indexController
        };
    });
}(this.define));
