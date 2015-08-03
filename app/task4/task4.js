'use strict';

angular.module('trainingApp.task4', ['ngRoute', 'trainingApp.eventRaiser1', 'trainingApp.eventRaiser2'])

        .config(function ($routeProvider) {
            $routeProvider.when('/task4', {
                templateUrl: 'task4/task4.html'
            });
        });