'use strict';

angular.module('trainingApp.task2', ['ngRoute'])

        .config(function ($routeProvider) {
            $routeProvider.when('/task2', {
                templateUrl: 'task2/task2.html',
                controller: 'Task2Controller'
            });
        })
        .controller("Task2Controller", function($scope, $timeout) {
            $scope.loadDataForSpoiler1 = function() {
                $timeout(function() {
                    $scope.spoiler1 = 'Spoiler 1 data';
                }, 500);
            };

            $scope.loadDataForSpoiler2 = function() {
                $timeout(function() {
                    $scope.spoiler2 = 'Spoiler 2 data';
                }, 500);
            };

            $scope.loadDataForSpoiler3 = function() {
                $timeout(function() {
                    $scope.spoiler3 = 'Spoiler 3 data';
                }, 500);
            };
        });