'use strict';

angular.module('trainingApp.eventRaiser1', [])
        .directive('eventRaiser1', function($rootScope) {
            return {
                restrict: 'E',
                scope: {},
                templateUrl: 'components/eventRaiser1/eventRaiser1.html',
                link: function($scope, element, attrs) {
                    $scope.counter = 1;

                    $scope.fireEvent = function() {
                        $rootScope.$broadcast('event1', $scope.counter + ' event(s) fired');
                        $scope.counter++;
                    };

                    $scope.$on('event2', function(event, data) {
                        console.log('Caught event2: ' + data);
                    });
                }
            };
        });