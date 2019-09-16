if ('serviceWorker' in navigator) {
    
    window.addEventListener('load', () => {
        navigator.serviceWorker
        .register('./sw_cached_site.js')
        .then(reg => console.log('service worker registerd'))
        .catch(err => console.log(`Error: ${err}`));
    });
}


var audios = [
    new Audio('./audio/duck.wav'),
    //new Audio('./audio/ente1.wav'),
    //new Audio('./audio/karug.wav'),
    //new Audio('./audio/quack.aiff')
];


$('img').click(() => {
    playMe = audios[Math.floor(Math.random() * audios.length)];
    playMe.play();
});
