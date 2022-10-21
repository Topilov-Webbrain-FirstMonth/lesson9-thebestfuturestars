document.getElementById("openMenu").addEventListener('click', () => {
    document.getElementById('littleMenu').classList.replace('close', 'open')
});

document.getElementById("closeMenu").addEventListener('click', () => {
    document.getElementById('littleMenu').classList.replace('open', 'close')
});

document.getElementsByClassName("closeMenu")[0].addEventListener('click', () => {
        document.getElementById('littleMenu').classList.replace('open', 'close')
});

document.getElementsByClassName("closeMenu")[1].addEventListener('click', () => {
    document.getElementById('littleMenu').classList.replace('open', 'close')
});

document.getElementsByClassName("closeMenu")[2].addEventListener('click', () => {
    document.getElementById('littleMenu').classList.replace('open', 'close')
});

document.getElementsByClassName("closeMenu")[3].addEventListener('click', () => {
    document.getElementById('littleMenu').classList.replace('open', 'close')
});