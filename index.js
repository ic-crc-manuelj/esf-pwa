
window.onload = () => {

  if('serviceWorker' in navigator) {
    navigator.serviceWorker
             .register('/esf-pwa/service-worker.js')
             .then(() => console.log('Service Worker Registered'))
             .catch(e => console.log(e))
  } else {
    console.log("No?")
  }
}