'use strict';

angular.module('trainingApp.userService', [])
        .factory('userService', function() {
            var _user = {
                name: 'John Smith',
                login: 'john512'
            };

            return {
                getUser: function() {
                    return _user;
                },
                setUser: function(user) {
                    _user = user;
                }
            };
        });