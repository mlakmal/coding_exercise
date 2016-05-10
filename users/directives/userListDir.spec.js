'use strict';

describe('UTest cexUserListDir', function () {
    var suite = {};

    beforeEach(function () {
        module('cexUsersModule');

        inject(function ($injector, $location, $rootScope, $controller, $httpBackend, $compile, $templateCache) {
            suite.location = $location;
            suite.httpBackend = $httpBackend;
            suite.scope = $rootScope.$new();
            suite.compile = $compile;
            $templateCache.put('users/views/userList.html', '<div>test</div>');
        });

    });

    afterEach(function () {
        expect(function () {
            suite.httpBackend.verifyNoOutstandingExpectation();
            suite.httpBackend.verifyNoOutstandingRequest();
        }).not.toThrow();

        suite.elm.remove();
    });

    it('should have 0 users when directive is initialized', function () {
        createDirective();

        expect(suite.controller.users.length).toBe(0);
    });
    
    //use jasmine spyOn to mock the cexUsersHlpr.getUsersFromApi function and return 5 members
    //use $injector above to get reference to cexUsersHlpr component for mocking ...
    it('should have users length be 5 when api is mocked with 5 members', function () {
        createDirective();

        expect(suite.controller.users.length).toBe(5);
    });

    function createDirective() {
        suite.elm = suite.compile('<div data-cex-user-list-dir ></div>')(suite.scope);
        suite.scope.$digest();
        suite.controller = suite.elm.controller('cexUserListDir');
    }

    afterAll(function () {
        suite = null;
    });
});
