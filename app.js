if ('serviceWorker' in navigator) {
    
    window.addEventListener('load', () => {
        navigator.serviceWorker
        .register('./sw_cached_site.js')
        .then(reg => console.log('service worker registerd'))
        .catch(err => console.log(`Error: ${err}`));
    });
}


var audio = new Audio('./audio/duck.wav');

$('img').click(() => {
    audio.play();
});