(function (define) {
    'use strict';

    define([
        'text!../../../templates/work.html',
    ], function (workTemplate) {

        return {
            url: '/work',
            data: {
                css: [
                    'src/css/revealjs_themes/sky.css'
                ]
            },
            template: workTemplate
        };
    });
}(this.define));
