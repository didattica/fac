(function (define) {
    'use strict';

    define([
        'text!../../templates/biotechnology.html'
    ], function (biotechnologyTemplate) {
        return {
            data: {
                css: [
                    'bower_components/bootstrap/dist/css/bootstrap.css',
                    'src/css/main.css'
                ]
            },
            template: biotechnologyTemplate,
            url: '/biotechnology'
        }
    });
}(this.define));
