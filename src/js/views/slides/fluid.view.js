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
                    vendor_dir + 'components-revealjs/css/theme/sky.css'
                ]
            },
            template: fluidTemplate
        };
    });
}(this.define));
