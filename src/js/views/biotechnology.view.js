(function (define) {
    'use strict';

    define([
        'text!../../templates/biotechnology.html'
    ], function (biotechnologyTemplate) {
        return {
            template: biotechnologyTemplate,
            url: '/biotechnology'
        }
    });
}(this.define));
