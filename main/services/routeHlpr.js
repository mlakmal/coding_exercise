'use strict';

var injectParams = [];

var cexRouteHlpr = function () {

    this.$get = function () {
        return this;
    };

    this.route = (function () {

        return {
            resolve: resolve,
            getRoutes: getRoutes
        };

        function resolve(templateUrl, controllerName, requireAuth, redirectTo) {
            var routeDef = {
                templateUrl: templateUrl,
                controller: controllerName,
                controllerAs: 'vm',
                requireAuth: requireAuth,
                reloadOnSearch: false
            };

            if (redirectTo && redirectTo != null) {
                routeDef = {
                    redirectTo: redirectTo
                };
            }

            return routeDef;
        }

        function getRoutes() {
            return [
                {
                    route: '/users',
                    controllerName: 'cexWcsCtrl',
                    template: 'users.html',
                    requireAuth: false
                }
            ];
        }

    } ());
};

cexRouteHlpr.$inject = injectParams;

cexMainModule.provider('cexRouteHlpr', cexRouteHlpr);