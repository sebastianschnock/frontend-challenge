/* global describe, it */

(function () {
  'use strict';

  describe('The test application', function () {

    describe('The show/hide extra info button', function () {

      beforeEach(function() {
        loadFixtures('test.html');
        wimdu.init(document);
      });

      it('should show and hide extra info when clicked', function () {

        var button = document.querySelector('[data-test="toggle-extra-info"]');
        var extraInfo = document.querySelector('[data-test="extra-info"]');

        button.click();
        expect(extraInfo).not.toHaveClass('hidden');

        button.click();
        expect(extraInfo).toHaveClass('hidden');
      });

      it('should change label when clicked', function() {

        var button = document.querySelector('[data-test="toggle-extra-info"]');
        expect(button).toHaveText('Show more');
        button.click();
        expect(button).toHaveText('Show less');
      });

    });
  });
})();
