(function (define) {
    'use strict';

    define([
        'text!../../../templates/scores/score-1.html',
        '../../controllers/score.controller'
    ], function (score1Template, scoreController) {

        var vendor_dir = 'bower_components/';

        return {
            controller: scoreController,
            url: '/score-1',
            data: {
                css: [
                    vendor_dir + 'bootstrap/dist/css/bootstrap.css'
                ]
            },
            template: score1Template
        };
    });
}(this.define));
