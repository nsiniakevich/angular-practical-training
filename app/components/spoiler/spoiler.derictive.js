'use strict';

angular.module('trainingApp.spoiler', [])
        .directive('spoiler', function() {
            return {
                restrict: 'E',
                scope: {
                    name: '@',
                    onSpoilerActivated: '&'
                },
                transclude: true,
                templateUrl: 'components/spoiler/spoiler.html',
                link: function($scope, element, attrs) {
                    $scope.isShowing = false;
                    $scope.isActivated = false;

                    $scope.spoilerName = $scope.name || 'Spoiler';

                    $scope.toggle = function() {
                        $scope.isShowing = !$scope.isShowing;

                        if (!$scope.isActivated && $scope.onSpoilerActivated) {
                            $scope.isActivated = true;

                            $scope.onSpoilerActivated();
                        }
                    };
                }
            };
        });