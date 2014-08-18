var NIGHT_ID = "__night_mode_script";

function buildNightStyle(config) {
    var elementStyle = '';
    elementStyle += "html{-webkit-filter:invert(100%);}";
    elementStyle += 'img,embed,object,iframe,a[class*="icon"],i[class*="icon"],span[class*="icon"],em[class*="icon"],a[class*="logo"],h1[class*="logo"],div[class*=logo]{-webkit-filter:invert(81%) brightness(1.9) !important;}';
    elementStyle += "*{color:#7C7C7C !important;}";
    elementStyle += "a{color:#CEAA9C !important;}";
    elementStyle += 'input[type=text],input[type=password],input[type=search],input[class*="search"],input[class*="input"],textarea,select{background-color:#FFC9B3 !important;}';
    return elementStyle;
}

function insertStyle(styleStr) {
    var styleNode = document.createElement("style");
    styleNode.type = "text/css";
    styleNode.rel = "stylesheet";
    styleNode.id = NIGHT_ID;
    styleNode.appendChild(document.createTextNode(styleStr));
    document.documentElement.appendChild(styleNode);
}
 
function applyNightMode(config) {
    var styleStr = buildNightStyle(config);
    removeNightMode();
    insertStyle(styleStr);
}
 
function removeNightMode() {
    var styleElement = null;
    styleElement = document.getElementById(NIGHT_ID);
    if (styleElement) {
        styleElement.parentNode.removeChild(styleElement);
    }
}
