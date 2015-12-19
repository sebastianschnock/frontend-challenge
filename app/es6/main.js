'use strict';

var wimdu = wimdu !== undefined ? wimdu : {};

wimdu.init = (() => {

    let button, extraInfo, showExtraInfo = false;

    return document => {

        button = document.querySelector('.flat-description__show-more');
        extraInfo = document.querySelector('.extra-info');

        button.classList.toggle('hidden');
        extraInfo.classList.toggle('hidden');

        button.addEventListener('click', event => {
            extraInfo.classList.add('slideable');
            extraInfo.classList.toggle('hidden');
            showExtraInfo = !showExtraInfo;
            button.innerHTML = showExtraInfo ? 'Show less' : 'Show more';
        });
    }
})();

wimdu.init(document);
