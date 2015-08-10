describe('Unit testing great quotes', function() {
    var $compile, $rootScope;

    beforeEach(module('trainingApp.userList'));

    beforeEach(inject(function(_$compile_, _$rootScope_){
        $compile = _$compile_;
        $rootScope = _$rootScope_;
    }));

    it('Replaces the element with the appropriate content', function() {
        var d = $.Deferred();
        d.resolve([{ "id": 1, "name": "John Lennon" }]);
        spyOn($, 'ajax').and.returnValue(d.promise());

        $rootScope.selectedUsers = {};
        var element = $compile('<user-list selected-users="selectedUsers"></user-list>')($rootScope);
        $rootScope.$digest();
        expect(element.html()).toContain("John Lennon");
    });
});