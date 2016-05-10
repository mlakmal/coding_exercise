'use strict';

/**
 * https://docs.angularjs.org/api/ng/service/$http
 */
var injectParams = ['$http'];

var cexUsersHlpr = function ($http) {

    this.getUsersFromApi = function () {
        //TODO: write code to return the users list in /users/jsons/userList.json file using $http provider
    };

    this.getUniqueGroups = function (users) {
        //TODO: get unique set of groups from the list using o(n) complexity. 
        //ex: use only 1 for loop
    };

    this.submitUser = function (user) { 
        //TODO: use $http and create POST method to users/jsons/addUpdUser.json
    };
    
    this.getUser = function (userId){
        //TODO: set userId value to $http data as url parameter ex: users/jsons/user.json?userId=123 
        return $http({
            method: 'GET',
            url: 'users/jsons/user.json'
        });
    };
};

cexUsersHlpr.$inject = injectParams;

cexUsersModule.service('cexUsersHlpr', cexUsersHlpr);
