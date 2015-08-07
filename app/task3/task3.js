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

            $scope.name = 'This name will not be set as the spoiler name';

            $scope.loadData = function() {
                $scope.data = 'The data';
            };
        });