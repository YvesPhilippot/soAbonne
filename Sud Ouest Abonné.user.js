// ==UserScript==
// @name         Sud Ouest Abonné
// @namespace    http://tampermonkey.net/
// @version      1
// @description  Afficher les news abonnés Sud Ouest
// @author       El_Rhonin
// @match        http://www.sudouest.fr/*
// @grant        GM_addStyle
// @require http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js
// ==/UserScript==
/* jshint -W097 */
// Your code here...
$(document).ready(function() {
    
   
        $(".short").toggle();
        $(".long").toggle();
        $(".article-premium-locked").toggle();

   
});
