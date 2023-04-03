"use strict";
(function () {
    window.addEventListener('load', init);

    /**
     * The initial function that runs when the window finishes loading.
     */
    function init() {
        checkBrowser();
        getTimezone();
        getWindowsize();
        getOs();
    }


})();

function getWindowsize() {
    let width = window.innerWidth || document.documentElement.clientWidth ||
        document.body.clientWidth;
    let height = window.innerHeight || document.documentElement.clientHeight ||
        document.body.clientHeight;
    let winStr = "Width: " + width + ", height: " + height;
    document.querySelector(".window-size").textContent = winStr;
}

function getTimezone() {
    let uTime = Intl.DateTimeFormat().resolvedOptions().timeZone;
    document.querySelector(".u-time").textContent = uTime;
}

function checkBrowser() {
    // Get the user-agent string
    let userAgentString = navigator.userAgent;

    // Detect Chrome
    let chromeAgent = userAgentString.indexOf("Chrome") > -1;

    // Detect Firefox
    let firefoxAgent = userAgentString.indexOf("Firefox") > -1;

    // Detect Safari
    let safariAgent = userAgentString.indexOf("Safari") > -1;

    // Discard Safari since it also matches Chrome
    if ((chromeAgent) && (safariAgent)) {
        safariAgent = false;
    }

    // Detect Opera
    let operaAgent = userAgentString.indexOf("OP") > -1;

    // Discard Chrome since it also matches Opera     
    if ((chromeAgent) && (operaAgent)) {
        chromeAgent = false;
    }

    if (safariAgent) {
        document.querySelector(".browser").textContent = "Safari";
    } else if (chromeAgent) {
        document.querySelector(".browser").textContent = "Google Chrome";
    } else if (operaAgent) {
        document.querySelector(".browser").textContent = "Opera";
    } else if (firefoxAgent) {
        document.querySelector(".browser").textContent = "Firefox";
    } else {
        "Edge or something else?";
    }
    
}

function getOs() {
    let opSystem = "Unknown OS";
    if (navigator.userAgent.indexOf("Win") != -1) {
        opSystem = "Windows OS"
    };
    if (navigator.userAgent.indexOf("Mac") != -1) {
        opSystem = "Macintosh";
    }
    if (navigator.userAgent.indexOf("Linux") != -1){
        opSystem = "Linux"
    }
    if (navigator.userAgent.indexOf("Android") != -1) {
        opSystem = "Android OS";
    } 
    if (navigator.userAgent.indexOf("like Mac") != -1) {
        opSystem = "iOS";
    } 

    document.querySelector(".op-system").textContent = opSystem;

}