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
                    vendor_dir + 'components-revealjs/css/theme/sky.css'
                ]
            },
            template: kinematicTemplate
        };
    });
}(this.define));
