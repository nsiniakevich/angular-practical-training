'use strict';

angular.module('trainingApp.userList', [])
        .directive('userList', function() {
            return {
                restrict: 'E',
                scope: {
                    selectedUsers: '='
                },
                link: function($scope, element, attrs) {
                    element.userList({
                        onSelectedUsersChange: function(event, data) {
                            $scope.$apply(function() {
                                $scope.selectedUsers = data.selectedUsers;
                            });
                        },
                        selectedUsers: $scope.selectedUsers
                    });
                }
            };
        });