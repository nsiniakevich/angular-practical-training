'use strict';

angular.module('trainingApp.task3', ['ngRoute', 'trainingApp.spoiler'])

        .config(function ($routeProvider) {
            $routeProvider.when('/task3', {
                templateUrl: 'task3/task3.html',
                controller: 'Task3Controller'
            });
        })
        .controller("Task3Controller", function($scope) {
            $scope.spoilerName = 'Name from taskCtrl';

            $scope.loadData = function() {
                $scope.data = 'The data';
            };
        });