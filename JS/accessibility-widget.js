window.interdeal = {
    "sitekey": "1be67ed6481fd8f77294d78e0b204f54",
    "Position": "left",
    "domains": {
        "js": "https://cdn.equalweb.com/",
        "acc": "https://access.equalweb.com/"
    },
    "Menulang": "EN",
    "btnStyle": {
        "vPosition": [
            "100%",
            "100%"
        ],
        "scale": [
            "0.5",
            "0.5"
        ],
        "color": {
            "main": "#6e7577",
            "second": "#ffffff"
        },
        "icon": {
            "outline": false,
            "type": 11,
            "shape": "circle"
        }
    }
};
(function(doc, head, body){
    var coreCall             = doc.createElement('script');
    coreCall.src             = interdeal.domains.js + 'core/5.0.13/accessibility.js';
    coreCall.defer           = true;
    coreCall.integrity       = 'sha512-pk3CeR0KGJu+GfK2x2ybTSZ1o1qfua6XW2PRAxMWOhC85M3+CanPYmvRp6BOiW0/riZjWGerRN7+JH4wEF0wJQ==';
    coreCall.crossOrigin     = 'anonymous';
    coreCall.setAttribute('data-cfasync', true );
    body? body.appendChild(coreCall) : head.appendChild(coreCall);
})(document, document.head, document.body);
