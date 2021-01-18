document.querySelector('.sun').addEventListener('click',() => {
    document.body.classList.add('light')
} )

document.querySelector('.moon').addEventListener('click',() => {
    document.body.classList.remove('light')
} )


function toggle(){
    var sec = document.getElementById('sec');
    var nav = document.getElementById('navigation');
    sec.classList.toggle('active');
    nav.classList.toggle('active');
}

toggle();

