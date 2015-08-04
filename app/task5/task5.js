'use strict';

angular.module('trainingApp.task5', ['ngRoute', 'trainingApp.userInfo', 'trainingApp.userEdit'])

        .config(function ($routeProvider) {
            $routeProvider.when('/task5', {
                templateUrl: 'task5/task5.html'
            });
        });