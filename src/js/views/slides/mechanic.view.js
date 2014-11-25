(function (define) {
    'use strict';

    define([
        'text!../../../templates/mechanic.html',
    ], function (mechanicTemplate) {

        var vendor_dir = 'bower_components/';

        return {
            url: '/mechanic',
            data: {
                css: [
                    vendor_dir + 'components-revealjs/css/theme/sky.css'
                ]
            },
            template: mechanicTemplate
        };
    });
}(this.define));
