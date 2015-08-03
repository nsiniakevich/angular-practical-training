'use strict';

angular.module('trainingApp', [
    'ngRoute',
    'trainingApp.spoiler',
    'trainingApp.task1',
    'trainingApp.task2',
    'trainingApp.task3'
])
    .config(function ($routeProvider) {
        $routeProvider.otherwise({redirectTo: '/task1'});
    });
