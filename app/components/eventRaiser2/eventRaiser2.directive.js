'use strict';

angular.module('trainingApp.eventRaiser2', [])
        .directive('eventRaiser2', function($rootScope) {
            return {
                restrict: 'E',
                scope: {},
                templateUrl: 'components/eventRaiser2/eventRaiser2.html',
                link: function($scope, element, attrs) {
                    $scope.counter = 1;

                    $scope.fireEvent = function() {
                        $rootScope.$broadcast('event2', $scope.counter + ' event(s) fired');
                        $scope.counter++;
                    };

                    $scope.$on('event1', function(event, data) {
                        console.log('Caught event1: ' + data);
                    });
                }
            };
        });