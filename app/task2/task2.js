'use strict';

angular.module('trainingApp.task2', ['ngRoute'])

        .config(function ($routeProvider) {
            $routeProvider.when('/task2', {
                templateUrl: 'task2/task2.html',
                controller: 'Task2Controller'
            });
        })
        .controller("Task2Controller", function($scope) {
            $scope.onSpoilerOpen = function() {
                console.log('Spoiler is opened');
            };
        });