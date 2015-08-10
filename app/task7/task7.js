'use strict';

angular.module('trainingApp.task7', ['ngRoute', 'trainingApp.userList'])

        .config(function ($routeProvider) {
            $routeProvider.when('/task7', {
                templateUrl: 'task7/task7.html',
                controller: 'Task7Controller'
            });
        })
        .controller("Task7Controller", function($scope) {
            $scope.selectedUsers = [
                {
                    "id": 2,
                    "name": "Paul McCartney"
                },
                {
                    "id": 3,
                    "name": "George Harrison"
                }
            ];

            $scope.$watch('selectedUsers', function(newValue) {
                console.log(newValue);
            });
        });