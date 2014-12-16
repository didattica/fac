(function (define) {
    'use strict';

    define([
        'jquery'
    ], function ($) {
        return ['$scope', function ($scope) {
            $('table.table.table-score td:nth-child(1)').html('*******');
            $('table.table.table-score td:nth-child(2)').html('*******');
        }];
    });
}(this.define));
