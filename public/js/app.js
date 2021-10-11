const load = ()  => {
let areaMsg = document.querySelector('.area1');
let img = window.document.getElementById('img');

let date = new Date();
let hour = date.getHours();

areaMsg.innerHTML = `Agora são ${hour} horas`

if( hour >= 0 && hour < 12 ) {
    img.src = 'public/image/morning.png';
    document.body.classList.add('morning')
} else if ( hour >= 12 && hour <= 18 ) {
    img.src = 'public/image/evening.png'
    document.body.style.background = '#f0c26e'
} else {
    img.src = 'public/image/night.png'
    document.body.classList.add('night')
    }
}

load()