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
        'views/slides/fluid.view',
        'views/slides/thermodynamics1.view',
        'views/slides/thermodynamics2.view',
        'views/scores/score-1.view'
    ], function (
        indexView, biotechnologyView, slidesView, unitView,
        kinematicView, mechanicView, workView, fluidView,
        thermodynamics1View, thermodynamics2View,
        score1View) {
        return ['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
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
                .state('slides.thermodynamics-1', thermodynamics1View)
                .state('slides.thermodynamics-2', thermodynamics2View)
                .state('score-1', score1View);
        }];
    });
}(this.define));
