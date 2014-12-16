(function (define) {
    'use strict';

    define([
    ], function () {
        return ['$scope', function ($scope) {
            $scope.$on('$viewContentLoaded', function () {
                $scope.class = 'home';
            });
            $scope.$on('$destroy', function () {
                $scope.$parent.class = '';
            });
        }];
    });
}(this.define));
