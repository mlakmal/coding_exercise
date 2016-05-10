'use strict';

var injectParams = ['$routeProvider',
    'cexRouteHlprProvider',
    '$controllerProvider',
    '$compileProvider',
    '$filterProvider',
    '$provide',
    '$httpProvider',
    '$sceProvider',
    '$locationProvider'];

function configure($routeProvider,
    cexRouteHlprProvider,
    $controllerProvider,
    $compileProvider,
    $filterProvider,
    $provide,
    $httpProvider,
    $sceProvider,
    $locationProvider) {

    //html5 push state enabled
    //$locationProvider.html5Mode(true).hashPrefix('!');

    //enable loading external url templates
    $sceProvider.enabled(false);

    var route = cexRouteHlprProvider.route;
    var availableRoutes = route.getRoutes();

    //routes are defined in tcp/init/services/tcpRouteHlpr.js
    for (var i = 0; i < availableRoutes.length; i++) {
        $routeProvider.when(availableRoutes[i].route,
            route.resolve(availableRoutes[i].template,
                availableRoutes[i].controllerName,
                availableRoutes[i].requireAuth,
                availableRoutes[i].redirectTo));

    }

    $routeProvider.otherwise({ redirectTo: '/users' });
}

configure.$inject = injectParams;

cexMainModule.config(configure);

injectParams = [];

function runBlock() {

}

runBlock.$inject = injectParams;

cexMainModule.run(runBlock);