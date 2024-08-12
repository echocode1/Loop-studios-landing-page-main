document.addEventListener('DOMContentLoaded',() => {

    /*  open mobile navbar  */
    const image1= document.querySelector('.menu-open');
    const image2= document.getElementById('menu-close');
    const hBase= document.getElementById('header__base');
    const nav= document.querySelector('.nav-bar');
    const header= document.querySelector('.header');
    const links= document.querySelectorAll('.nav-bar a');
    
    const style1 = {
        position:'fixed',
        left:0,
        right:0,
        height: '100vh',
        backgroundImage:'none',
        backgroundColor: 'black',
        fontSize: "1.2rem",
        zIndex:"2"
    }
    function openMenu(){
        if(window.innerWidth < 576){
            nav.style.display = 'block';
            hBase.style.display = 'none';
            links.forEach(a => a.style.textTransform = 'uppercase');
            image1.style.display = 'none';
            image2.style.display = 'block';

            for (const property in style1) {
                if (style1.hasOwnProperty(property)) {
                    header.style[property] = style1[property];
                }
            }
        }
    }
    image1.addEventListener('click', openMenu)

    /*  close mobile navbar  */
    function closeMenu(){
        nav.style.display = 'none';
        hBase.style.display = 'block';
        links.forEach(a => a.style.textTransform = 'lowercase')

        header.style.position = 'static';
        header.style.backgroundImage =  'url("../images/mobile/image-hero.jpg")';
        image1.style.display = 'block';
        image2.style.display = 'none'
    }
    image2.addEventListener('click', closeMenu)

    /* function to update yr of this project at the footer section */
    const currentDate = document.getElementById("current-date");
    function updateYear(){
        let year = new Date().getFullYear();
        currentDate.textContent = year
    }
    updateYear();
});
