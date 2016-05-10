'use strict';

var injectParams = ['cexUsersHlpr'];

var cexUserListDirCtrl = function (cexUsersHlpr) {

    var vm = this;
    vm.users = [];

    function init() {
        //TODO: fix below code to show list of users from userList.json file.
        //make sure to update  cexUsersHlpr.getUsersFromApi function to retrieve json data throgh $http
        cexUsersHlpr.getUsersFromApi().then(function (response) { 
            //set vm.users from response array
        }, function (error) { 
            
        });
    }
};

cexUserListDirCtrl.$inject = injectParams;

injectParams = [];

var cexUserListDir = function () {
    return {
        restrict: 'A',
        templateUrl: 'users/views/userList.html',
        scope: {
        },
        controller: cexUserListDirCtrl,
        controllerAs: 'vm',
        bindToController: true
    };
};

cexUserListDir.$inject = injectParams;

cexUsersModule.directive('cexUserListDir', cexUserListDir);
