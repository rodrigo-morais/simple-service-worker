this.oninstall = function (event) {
    
};

this.addEventListener('fetch', function (event) {
    if (navigator.onLine) {
        event.respondWith(event.default());
    }
    else{
        
        var response = "<h1>App offline try again in few minutes.</h1>",
            link = "<a href='" + event.request.url + "'>Home</a>";

        event.respondWith(
            new Response(new Blob([response, link], { type: 'text/html' }), {
                headers: { "Content-Type": "text/html" }}));
    }
});