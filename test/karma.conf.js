module.exports = function(config) {
    config.set({
        frameworks: ['jasmine'],

        files: [
            '*.spec.js'
        ],

        browsers : ['Chrome'],

        plugins : [
            'karma-chrome-launcher',
            'karma-jasmine'
        ],

        singleRun: true
    });
};