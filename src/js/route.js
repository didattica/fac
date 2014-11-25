(function (define) {
    'use strict';

    define([
        'views/index.view',
        'views/biotechnology.view',
        'views/slides.view',
        'views/slides/unit.view',
        'views/slides/kinematic.view',
        'views/slides/mechanic.view',
        'views/slides/work.view',
        'views/slides/fluid.view'
    ], function (indexView, biotechnologyView, slidesView, unitView, kinematicView, mechanicView, workView, fluidView) {
        return function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/');
            $stateProvider
                .state('index', indexView)
                .state('biotechnology', biotechnologyView)
                .state('slides', slidesView)
                .state('slides.unit', unitView)
                .state('slides.kinematic', kinematicView)
                .state('slides.mechanic', mechanicView)
                .state('slides.work', workView)
                .state('slides.fluid', fluidView)

        };
    });
}(this.define));
