const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.right-nav');
    burger.addEventListener('click', () => {
        nav.classList.toggle('.nav-active');
        console.log("hhhh");
    });
}

navSlide();