// ==UserScript==
// @name         Chegg Solution
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Replace "See Answer" button with Homeworkify Button. Automatically copies chegg link to clipboard (Need to enable clipboard site permission).
// @author       Niloy
// @match        https://www.chegg.com/*
// @grant        none
// @downloadURL https://github.com/Niloy-Sarker/scripts/raw/main/homeworkify.user.js
// @updateURL   https://github.com/Niloy-Sarker/scripts/raw/main/homeworkify.user.js
// ==/UserScript==
(function() {
    'use strict';
const targetElement = document.querySelector('a[data-test="qna-answered-cta"]');
if (targetElement) {
    const newUrl = 'https://homeworkify.st/';
    const customText = '🔍Homeworkify';
    const newElement = document.createElement('a');
    newElement.href = newUrl;
    newElement.className = targetElement.className;
    newElement.setAttribute('data-test', targetElement.getAttribute('data-test'));
    newElement.textContent = customText;
    newElement.addEventListener('click', function(event) {
        event.preventDefault();
        const currentLink = window.location.href;
        navigator.clipboard.writeText(currentLink);
        window.location.href = newElement.href;
    });
    targetElement.parentNode.replaceChild(newElement, targetElement);
}
})();
