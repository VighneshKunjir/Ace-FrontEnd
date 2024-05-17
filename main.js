window.addEventListener('scroll',()=>{
    document.querySelector('nav').classList.toggle
    ('window-scroll',window.scrollY>0)
})

//show/hide nav menu
const menu = document.querySelector(".nav_menu");
const openMenuBtn = document.querySelector("#open-menu-btn");
const closeMenuBtn = document.querySelector("#close-menu-btn");

openMenuBtn.addEventListener('click',()=>{
    menu.style.display="flex";
    closeMenuBtn.style.display="inline-block";
    openMenuBtn.style.display="none";
})

//close nav menu
const closeNav = () =>{
    menu.style.display="none";
    closeMenuBtn.style.display="none";
    openMenuBtn.style.display="inline-block";
}

closeMenuBtn.addEventListener('click',closeNav)



// for testimonial (committee heads)
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
        // when window width is >= 600px 
        breakpoints: {
            600: {
                slidesPerView: 2, 
            }
        }
    });


    let modalbox = document.getElementById("modalbox");
    function showmodal(){
        setTimeout(() => {
            modalbox.style.display = "block";
        }, 1000)
    }

    function closemodal(){
        modalbox.style.display = "none";
    }