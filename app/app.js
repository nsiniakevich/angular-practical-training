'use strict';

angular.module('trainingApp', [
    'ngRoute',
    'trainingApp.task1',
    'trainingApp.task2',
    'trainingApp.task3',
    'trainingApp.task4',
    'trainingApp.task5',
    'trainingApp.task6',
    'trainingApp.task7'
])
    .config(function ($routeProvider) {
        $routeProvider.otherwise({redirectTo: '/task1'});
    });
