document.querySelector('.theme').addEventListener('click',() => {
    document.body.classList.toggle('light')
} )

function toggle(){
    var sec = document.getElementById('sec');
    var nav = document.getElementById('navigation');
    sec.classList.toggle('active');
    nav.classList.toggle('active');
}

toggle();

