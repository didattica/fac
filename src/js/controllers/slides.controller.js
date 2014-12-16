(function (window, define, document) {
    'use strict';

    define([
        'jquery',
        'revealjs',
        'head'
    ], function ($, Reveal) {

        var setPdfStylesheet = function () {
            // Remove the css reveal library.
            $('head link[href*="components-revealjs"]').remove();
            $('section').removeAttr('style');
            $('section').show();
            $('.reveal>.progress').hide();
        };

        var revealConfig = {
            dependencies: [
                {
                    src: './bower_components/components-revealjs/plugin/math/math.js',
                    async: true
                }
            ],
            history: false,
            keyboard: {
                13: 'next', // Go to the next slide when the ENTER key is pressed
                27: function () {
                    window.location.href = './#biotechnology';
                }, // When ESC is pressed
                80: setPdfStylesheet // When "P" is pressed
            },
            math: {
                config: 'TeX-AMS_HTML-full',
                mathjax: './bower_components/MathJax/MathJax.js'
            },
            progress: true, // Display a presentation progress bar
            touch: true // Enables touch navigation on devices with touch input
        };

        return ['$scope', function ($scope) {
            $scope.$parent.class = 'reveal';
            $scope.$on('$viewContentLoaded', function () {
                setTimeout(function () {
                    Reveal.initialize(revealConfig);
                }, 0);
            });
            $scope.$on('$destroy', function () {
                $scope.$parent.class = '';
            });
        }];
    });
}(this, this.define, this.document));
