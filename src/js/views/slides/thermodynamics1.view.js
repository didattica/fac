(function (define) {
    'use strict';

    define([
        'text!../../../templates/thermodynamics-1.html',
    ], function (thermodynamicsTemplate) {

        var vendor_dir = 'bower_components/';

        return {
            url: '/thermodynamics-1',
            data: {
                css: [
                    vendor_dir + 'components-revealjs/css/theme/beige.css'
                ]
            },
            template: thermodynamicsTemplate
        };
    });
}(this.define));
