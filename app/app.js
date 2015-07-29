'use strict';

angular.module('trainingApp', [
    'ngRoute',
    'trainingApp.task1'
])
    .config(function ($routeProvider) {
        $routeProvider.otherwise({redirectTo: '/task1'});
    });
