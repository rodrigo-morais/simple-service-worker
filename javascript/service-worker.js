this.oninstall = function (event) {
    
};

var hitCounter = 0;

this.addEventListener('fetch', function (event) {
    var times_text = 'time';

    hitCounter++;

    if (hitCounter > 1) {
        times_text = 'times';
    }

    event.respondWith(new Response('Page refreshed ' + hitCounter + ' ' + times_text));
});