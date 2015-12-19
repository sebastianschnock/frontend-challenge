'use strict';

var wimdu = wimdu !== undefined ? wimdu : {};

wimdu.init = (function () {

    var button;
    var extraInfo;
    var showExtraInfo = false;

    return function (document) {

        button = document.querySelector('.flat-description__show-more');
        extraInfo = document.querySelector('.extra-info');

        button.classList.toggle('hidden');
        extraInfo.classList.toggle('hidden');

        button.addEventListener('click', function (event) {
            extraInfo.classList.toggle('hidden');
            showExtraInfo = !showExtraInfo;
            button.innerHTML = showExtraInfo ? 'Show less' : 'Show more';
        });
    };
})();

wimdu.init(document);