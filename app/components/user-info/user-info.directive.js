'use strict';

angular.module('trainingApp.userInfo', ['trainingApp.userService'])
        .directive('userInfo', function(userService) {
            return {
                restrict: 'E',
                scope: {},
                templateUrl: 'components/user-info/user-info.html',
                link: function($scope, element, attrs) {
                    $scope.user = userService.getUser();
                }
            };
        });