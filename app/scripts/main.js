require.config({
    baseUrl: 'scripts/',

    // alias libraries paths
    paths: {
        // 3rd party
        'angular': '../bower_components/angular/angular',
        'angular-route': '../bower_components/angular-route/angular-route',
        'angularAMD': '../bower_components/angularAMD/angularAMD',

        // project
        'todoService': 'services/todo'
    },

    // Add angular modules that does not support AMD out of the box, put it in a shim
    shim: {
        'angularAMD': ['angular'],
        'angular-route': ['angular']
    },

    // kick start application
    deps: ['app']
});