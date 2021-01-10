const current = document.querySelector('#current');
const imgs = document.querySelectorAll('.imgs img');

// loop and event linstener
for(img of imgs) {
    img.addEventListener('click', changeImg);
}

function changeImg(e) {
    current.src = e.target.src
}
