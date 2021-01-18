document.querySelector('.sun').addEventListener('click',() => {
    document.body.classList.add('light');
    document.getElementById("li-sun").style.display = "none";
    document.getElementById("li-moon").style.display = "initial";
    
} )

document.querySelector('.moon').addEventListener('click',() => {
    document.body.classList.remove('light');
    document.getElementById("li-sun").style.display = "initial";
    document.getElementById("li-moon").style.display = "none";
} )


document.querySelector('#toggle').addEventListener('click',() => {    
    var sec = document.getElementById('sec');
    var nav = document.getElementById('navigation');
    sec.classList.toggle('active');
    nav.classList.toggle('active');
})

toggle();

