(function (window, define) {
    'use strict';

    define([
        'jquery',
        'revealjs',
        'mathJax',
        'head'
    ], function ($, Reveal) {

        var init,
            revealConfig,
            setPdfStylesheet;

        init = function () {
            Reveal.initialize(revealConfig);
            if (typeof MathJax !== 'undefined') {
                MathJax.Hub.Typeset(); // Tell MathJax to look for mathematics in the page again when that new content is produced.
            }
        };
        revealConfig = {
            history: false,
            keyboard: {
                13: 'next', // Go to the next slide when the ENTER key is pressed
                27: function () {
                    window.location.href = './#biotechnology';
                }, // When ESC is pressed
                80: setPdfStylesheet // When "P" is pressed
            },
            progress: true, // Display a presentation progress bar
            touch: true // Enables touch navigation on devices with touch input
        };
        setPdfStylesheet = function () {
            // Remove the css reveal library.
            $('head link[href*="components-revealjs"]').remove();
            $('section').removeAttr('style');
            $('section').show();
            $('.reveal>.progress').hide();
        };

        return ['$scope', '$timeout', function ($scope, $timeout) {
            $scope.$parent.class = 'reveal';
            $timeout(init, 0);
            $scope.$on('$destroy', function () {
                $scope.$parent.class = '';
            });
        }];
    });
}(this, this.define));
