'use strict';

angular.module('trainingApp.userEdit', ['trainingApp.userService'])
        .directive('userEdit', function(userService) {
            return {
                restrict: 'E',
                scope: {},
                templateUrl: 'components/user-edit/user-edit.html',
                link: function($scope, element, attrs) {
                    $scope.user = userService.getUser();
                }
            };
        });