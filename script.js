const toggle = document.querySelector('.mobile-toggle');

toggle.addEventListener('click',()=>{
    document.querySelector("#menu").classList.toggle("active");
})