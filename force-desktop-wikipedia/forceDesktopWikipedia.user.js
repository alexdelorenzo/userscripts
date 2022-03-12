// ==UserScript==
// @name         Force desktop Wikipedia
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Disable Wikipedia's mobile UI in favor of its desktop UI
// @author       Alex DeLorenzo <AlexDeLorenzo.dev>
// @match        https://*.m.wikipedia.org/*
// @grant        none
// @license      GPL-3.0
// ==/UserScript==

(function() {
    'use strict';
    const MOBILE_SUB = ".m.";
    const DOT = '.';

    const newUrl = new URL(location);
    newUrl.host = newUrl.host.replace(MOBILE_SUB, DOT);

    location.replace(newUrl);
})();
