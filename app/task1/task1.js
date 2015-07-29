'use strict';

angular.module('trainingApp.task1', ['ngRoute'])

    .config(function ($routeProvider) {
        $routeProvider.when('/task1', {
            templateUrl: 'task1/task1.html'
        });
    })
    .controller("ParentCtrl1", function(){

    })
    .controller("ParentCtrl2", function(){

    })
    .controller("ChildCtrl1", function(){

    })
    .controller("ChildCtrl2", function(){

    });