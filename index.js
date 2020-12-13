
window.onload = () => {

  if('serviceWorker' in navigator) {
    navigator.serviceWorker
             .register(
               '/esf-pwa/service-worker.js',
               { scope: '/esf-pwa/'}
              )
             .then(() => console.log('Service Worker Registered'))
             .catch(e => console.log(e))
  } else {
    console.log("No?")
  }
}