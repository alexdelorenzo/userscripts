// ==UserScript==
// @name         Google Search Log Out
// @namespace    http://tampermonkey.net/
// @version      Log out of your Google account when searching
// @author       Alex DeLorenzo <alexdelorenzo.dev>
// @match        https://www.google.com/search*
// @icon         https://www.google.com/s2/favicons?domain=google.com
// @require      https://greasyfork.org/scripts/419640-onelementready/code/onElementReady.js
// @grant        none
// @run-at       document-end
// ==/UserScript==

/* global onElementReady */
const URL = "https://accounts.google.com/Logout?hl=en&continue=";
const SELECTOR = 'a[aria-label*="Google Account"]';
const OPTS = { findOnce: true };


const logOut = () => {
    const current = encodeURIComponent(document.URL);
    const newUrl = `${URL}${current}`;

    window.location.replace(newUrl);
};


const logOutIfLoggedIn = () => onElementReady(SELECTOR, OPTS, logOut);


logOutIfLoggedIn();
