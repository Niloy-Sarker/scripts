// ==UserScript==
// @name         Chegg Solution
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Replace "See Answer" button with Homeworkify Button. Automatically copies chegg link to clipboard (Need to enable clipboard site permission).
// @author       Niloy
// @match        https://www.chegg.com/*
// @grant        GM_setClipboard
// ==/UserScript==



(function() {
    'use strict';

    // Replace the following values with your desired new link and text
    var newLink = 'https://homeworkify.st';
    var newText = 'Homeworkify';

    // Find elements with data-test attribute equal to "has-answer-content"
    var elements = document.querySelectorAll('[data-test="has-answer-content"] a');

    elements.forEach(function(element) {
        // Replace link and text
        element.href = newLink;
        element.textContent = newText;
    });

})();