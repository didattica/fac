(function (define) {
    'use strict';

    define([
        'text!../../../templates/unit-of-measurement.html',
    ], function (hardwareTemplate) {

        var vendor_dir = 'bower_components/';

        return {
            url: '/unit-of-measurement',
            data: {
                css: [
                    'src/css/revealjs_themes/sky.css'
                ]
            },
            template: hardwareTemplate
        };
    });
}(this.define));
