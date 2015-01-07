(function (define) {
    'use strict';

    define([
        'text!../../../templates/fluid.html',
    ], function (fluidTemplate) {

        var vendor_dir = 'bower_components/';

        return {
            url: '/fluid',
            data: {
                css: [
                    'src/css/revealjs_themes/sky.css'
                ]
            },
            template: fluidTemplate
        };
    });
}(this.define));
