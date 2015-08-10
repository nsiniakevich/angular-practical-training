'use strict';

describe('spoiler', function() {
    beforeEach(function() {
        browser.get('#/task2');
    });

    it('Should have Task 2 label', function() {
        expect($('h2').getText()).toBe('Task 2')
    });

    it('Invisible bodies of spoiler after load', function() {
        expect($('spoiler .body').isDisplayed()).toBeFalsy();
    });

    it('Display spoiler body after click', function() {
        var spoiler = $('spoiler');
        spoiler.$('.header').click();

        expect(spoiler.$('.body').isDisplayed()).toBeTruthy();
    });

    it('Text in body should appear after click', function() {
        var spoiler = $('spoiler');

        expect(spoiler.$('.body').getText()).not.toMatch('Spoiler 1 data');

        spoiler.$('.header').click();

        expect(spoiler.$('.body').getText()).toMatch('Spoiler 1 data');
    });
});
