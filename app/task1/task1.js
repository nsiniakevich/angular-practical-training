'use strict';

angular.module('trainingApp.task1', ['ngRoute'])

    .config(function ($routeProvider) {
        $routeProvider.when('/task1', {
            templateUrl: 'task1/task1.html'
        });
    });