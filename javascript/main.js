if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register("javascript/service-worker.js", { scope: '/simple-service-worker' }).then(function (serviceWorker) {
        document.querySelector('#serviceWorkerState').innerHTML = "Registered";
    }).catch(function (error) {
        document.querySelector('#serviceWorkerState').textContent = error;
    });
}
else {
    document.querySelector('#serviceWorkerState').textContent = 'Unregistered';
}