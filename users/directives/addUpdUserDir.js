'use strict';

/**
 * add a new route "user" in main/services/routeHlpr and include this directive in the route html file
 */
var injectParams = ['cexUsersHlpr'];

var cexAddUpdUserDirCtrl = function (cexUsersHlpr) {

    var vm = this;
    vm.user = {
        firstNm: '',
        lastNm: '',
        userNm: '',
        dob: ''
    };
    vm.handleSubmit = handleSubmit;

    init();

    function init() {
        
        /*
        *TODO: enable this only when you have route parameter userId available in url route and pass the available userId parameter value to the getUser function.
        cexUsersHlpr.getUser().then(function (resp) {
            vm.user = resp.data.user;
        }, function (error) {
        });*/
    }

    function handleSubmit() {
        //TODO: check if form has valid data
        //TODO: submit data to users/jsons/addUpdUser.json
        //TODO: show submit success/fail message accordingly in html
    }
};

cexAddUpdUserDirCtrl.$inject = injectParams;

injectParams = [];

var cexAddUpdUserDir = function () {
    return {
        restrict: 'A',
        templateUrl: 'users/views/addUpdUser.html',
        scope: {
        },
        controller: cexAddUpdUserDirCtrl,
        controllerAs: 'vm',
        bindToController: true
    };
};

cexAddUpdUserDir.$inject = injectParams;

cexUsersModule.directive('cexAddUpdUserDir', cexAddUpdUserDir);
