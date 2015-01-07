(function (define) {
    'use strict';

    define([
        'text!../../templates/slides.html',
        '../controllers/slides.controller'
    ], function (slidesTemplate, slidesController) {
        var vendor_dir = 'bower_components/';

        return {
            url: '/slides',
            template: slidesTemplate,
            controller: slidesController
        };
    });
}(this.define));
