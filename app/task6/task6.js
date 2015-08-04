'use strict';

angular.module('trainingApp.task6', ['ngRoute'])

        .config(function ($routeProvider) {
            $routeProvider.when('/task6', {
                templateUrl: 'task6/task6.html',
                controller: 'Task6Controller'
            });
        })
        .controller("Task6Controller", function($scope, $timeout, $http, $q) {
            $scope.timeoutServiceValue = 'This message will be changed by $timeout service';
            $scope.setTimeoutValue = 'This message will be changed by setTimeout()';

            $timeout(function() {
                $scope.timeoutServiceValue = 'Changed by $timeout service';
            }, 1000);

            setTimeout(function() {
                $scope.setTimeoutValue = 'Changed by setTimeout()';
            }, 1000);


            $scope.httpServiceCall = function() {
                $http.get('/data/ajaxResponse.json').success(function(data) {
                    $scope.ajaxResponse = data[0];
                });
            };

            $scope.xmlHttpRequestCall = function() {
                var xhr = new XMLHttpRequest();
                xhr.onreadystatechange = function() {
                    if (xhr.readyState == 4) {
                        $scope.ajaxResponse = JSON.parse(xhr.responseText)[1];
                    }
                };
                xhr.open('GET', '/data/ajaxResponse.json', true);
                xhr.send(null);
            };

            $scope.xmlHttpRequestWithApply = function() {
                var xhr = new XMLHttpRequest();
                xhr.onreadystatechange = function() {
                    if (xhr.readyState == 4) {
                        $scope.$apply(function() {
                            $scope.ajaxResponse = JSON.parse(xhr.responseText)[2];
                        });
                    }
                };
                xhr.open('GET', '/data/ajaxResponse.json', true);
                xhr.send(null);
            };

            $scope.xmlHttpRequestWithDigest = function() {
                var xhr = new XMLHttpRequest();
                xhr.onreadystatechange = function() {
                    if (xhr.readyState == 4) {
                        $scope.ajaxResponse = JSON.parse(xhr.responseText)[1];
                        $scope.$digest();
                    }
                };
                xhr.open('GET', '/data/ajaxResponse.json', true);
                xhr.send(null);
            };

            var callXHR = function() {
                var deferred = $q.defer();

                var xhr = new XMLHttpRequest();
                xhr.onreadystatechange = function() {
                    if (xhr.readyState == 4) {
                        deferred.resolve(JSON.parse(xhr.responseText));
                    }
                };
                xhr.open('GET', '/data/ajaxResponse.json', true);
                xhr.send(null);

                return deferred.promise;
            };

            $scope.xmlHttpRequestWithPromise = function() {
                callXHR().then(function(data) {
                    $scope.ajaxResponse = data[4];
                });
            };

            $scope.$watch('ajaxResponse', function(newValue) {
                console.log(newValue);
            });
        });