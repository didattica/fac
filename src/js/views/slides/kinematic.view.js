(function (define) {
    'use strict';

    define([
        'text!../../../templates/kinematic.html'
    ], function (kinematicTemplate) {

        var vendor_dir = 'bower_components/';

        return {
            url: '/kinematic',
            data: {
                css: [
                    'src/css/revealjs_themes/sky.css'
                ]
            },
            template: kinematicTemplate
        };
    });
}(this.define));
