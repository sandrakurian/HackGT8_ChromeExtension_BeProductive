chrome.webRequest.onBeforeRequest.addListener(
    function(details) {return {cancel: true}}, 
    {urls: [
        // videos
        "*://*.youtube.com/*",
        "*://*.netflix.com/*",
        "*://*.amazon.com/gp/video/*",
        "*://*.disneyplus.com/*",
        "*://*.hulu.com/*",
        "*://*.hbomax.com/*",
        // social media
        "*://*.reddit.com/*",
        "*://*.instagram.com/*",
        "*://*.facebook.com/*",
        "*://*.tiktok.com/*",
        "*://*.pinterest.com/*",
        "*://*.twitter.com/*",
        // game
        "*://*.coolmathgames.com/*",
        "*://*.tetris.com/*"

        // user can add addtional websites that they want to block
]},
    ["blocking"]
)