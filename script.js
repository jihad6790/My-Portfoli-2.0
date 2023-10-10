var menuIcon = document.querySelector('#menu-icon');
var navbar = document.querySelector('.nav-item');


menuIcon.onclick = () => {
    menuIcon.classList.toggle("bx-x");
    navbar.classList.toggle("active");
}


const cursor = document.getElementById('cursor');
var timeout;
document.addEventListener('mousemove' , function(e){
   let x = e.clientX;
    let y = e.clientY;
cursor.style.left = x + "px";
cursor.style.top = y + "px";
cursor.style.display = "block";

function mouseStopped(){
    cursor.style.display = "none"
}
timeout = setTimeout(mouseStopped, 1000);
})


const toggleButtons = document.querySelectorAll('.toggle-info');

toggleButtons.forEach(button => {
    button.addEventListener('click', () => {
        const details = button.previousElementSibling;
        details.style.display = details.style.display === 'none' ? 'block' : 'none';
        button.textContent = details.style.display === 'none' ? 'See Details' : 'Hide Details';
    });
});