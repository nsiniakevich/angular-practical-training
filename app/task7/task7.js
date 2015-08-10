'use strict';

angular.module('trainingApp.task7', ['ngRoute'])

        .config(function ($routeProvider) {
            $routeProvider.when('/task7', {
                templateUrl: 'task7/task7.html',
                controller: 'Task7Controller'
            });
        })
        .controller("Task7Controller", function($scope) {
        });