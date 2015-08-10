module.exports = function(config) {
    config.set({
        basePath : '../../',

        frameworks: ['jasmine'],

        files: [
            'app/bower_components/jquery/dist/jquery.js',
            'app/bower_components/jquery-ui/jquery-ui.js',

            'app/bower_components/angular/angular.js',
            'app/bower_components/angular-route/angular-route.js',
            'app/bower_components/angular-mocks/angular-mocks.js',

            {pattern: 'app/bower_components/**/*.js', included: false},

            'app/**/*.js',
            'test/unit/*.spec.js'
        ],

        browsers : ['Chrome'],

        plugins : [
            'karma-chrome-launcher',
            'karma-jasmine'
        ],

        singleRun: true
    });
};