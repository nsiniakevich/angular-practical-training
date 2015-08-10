describe('user-list directive', function() {
    var $compile, $rootScope;

    var compileUserList = function(scope) {
        var element = $compile('<user-list selected-users="selectedUsers"></user-list>')($rootScope);
        $rootScope.$digest();
        return element;
    };

    beforeEach(module('trainingApp.userList'));

    beforeEach(inject(function(_$compile_, _$rootScope_){
        $compile = _$compile_;
        $rootScope = _$rootScope_;
    }));

    beforeEach(function() {
        var d = $.Deferred();
        d.resolve([
            {"id": 1, "name": "user1"},
            {"id": 2, "name": "user2"}
        ]);
        spyOn($, 'ajax').and.returnValue(d.promise());
    });

    it('Directive shows users', function() {
        var element = compileUserList($rootScope);
        expect(element.html()).toContain("user1");
        expect(element.html()).toContain("user2");
    });

    it('Checkboxes unchecked', function() {
        var element = compileUserList($rootScope);
        expect(element.find(':checkbox').is(":checked")).toBeFalsy();
    });

    it('User1 checked if in the scope', function() {
        $rootScope.selectedUsers = [{"id": 1, "name": "user1"}];
        var element = compileUserList($rootScope);
        expect(element.find(':input[value="1"]').is(":checked")).toBeTruthy();
        expect(element.find(':input[value="2"]').is(":checked")).toBeFalsy();
    });

    it('User is removed from scope after checkbox value unchecked', function() {
        $rootScope.selectedUsers = [{"id": 1, "name": "user1"}];
        var element = compileUserList($rootScope);

        element.find(':input[value="1"]').prop('checked', false).trigger("change");

        expect($rootScope.selectedUsers.length).toBe(0);
    });
});