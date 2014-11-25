(function (define) {
    'use strict';

    define([
        'text!../../../templates/work.html',
    ], function (workTemplate) {

        var vendor_dir = 'bower_components/';

        return {
            url: '/work',
            data: {
                css: [
                    vendor_dir + 'components-revealjs/css/theme/sky.css'
                ]
            },
            template: workTemplate
        };
    });
}(this.define));
