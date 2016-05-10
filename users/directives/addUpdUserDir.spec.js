'use strict';

describe('UTest cexAddUpdUserDir', function () {
    var suite = {};

    beforeEach(function () {
        module('cexUsersModule');

        inject(function ($injector, $location, $rootScope, $controller, $httpBackend, $compile, $templateCache) {
            suite.location = $location;
            suite.httpBackend = $httpBackend;
            suite.scope = $rootScope.$new();
            suite.compile = $compile;
            $templateCache.put('users/views/addUpdUser.html', '<div>test</div>');
        });

    });

    afterEach(function () {
        expect(function () {
            suite.httpBackend.verifyNoOutstandingExpectation();
            suite.httpBackend.verifyNoOutstandingRequest();
        }).not.toThrow();

        suite.elm.remove();
    });

    it('should have empty first name when initialized', function () {
        createDirective();

        expect(suite.controller.user.firstNm).toBe('');
    });
    
    //TODO: create test case to spyOn/mock cexUsersHlpr.getUser function and also mock route params userId value
    
    function createDirective() {
        suite.elm = suite.compile('<div data-cex-add-upd-user-dir ></div>')(suite.scope);
        suite.scope.$digest();
        suite.controller = suite.elm.controller('cexAddUpdUserDir');
    }

    afterAll(function () {
        suite = null;
    });
});
