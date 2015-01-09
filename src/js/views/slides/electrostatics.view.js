(function (define) {
    'use strict';

    define([
        'text!../../../templates/electrostatics.html',
    ], function (thermodynamicsTemplate) {

        var vendor_dir = 'bower_components/';

        return {
            url: '/electrostatics',
            data: {
                css: [
                    'src/css/revealjs_themes/serif.css'
                ]
            },
            template: thermodynamicsTemplate
        };
    });
}(this.define));
