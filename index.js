
const generateIcons = svg => {
  fetch(svg)
    .then(r => r.text())
    .then(text => `data:image/svg+xml,${text}`)
    .then(data => {
      const img = new Image(); 
      img.onload = () => {
        [44, 128, 144, 152, 196]
          .forEach(w => downloadImage(img, w, w))
      }; 
      img.onerror = e => {
        console.log(e)
      }
      img.src=data; 
    })
}

const downloadImage = (img, w, h) => {
  const canvas = document.createElement('canvas');
  document.body.appendChild(canvas)
  canvas.width = w; 
  canvas.height = h; 
  const ctx = canvas.getContext('2d'); 
  ctx.drawImage(img, 0, 0);
  const link = document.createElement('a')
  link.download = `icon-${w}x${h}.png`
  link.href = canvas.toDataURL('image/png', 1.0);
  link.click();
  console.log(
    link.href
  )
}

window.onload = () => {

  generateIcons('icon.svg')
  // if('serviceWorker' in navigator) {
  //   navigator.serviceWorker
  //     .register(
  //       './service-worker.js',
  //       { scope: "/esf-pwa/" }
  //     )
  //     .then(() => console.log('Service Worker Registered'))
  //     .catch(e => console.log(e))
  // } else {
  //   console.log("No?")
  // }
}