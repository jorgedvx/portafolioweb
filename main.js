import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs'


const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });


/* MENU BARS*/

((d)=>{
    const menuBars = d.querySelector(".menu-bars");
    const menu = d.querySelector(".menu");
    const menuHeader = document.getElementById("menu-header");
    

    menuBars.addEventListener('click', ()=>{

        menu.classList.toggle('active-menu');

        /* ATRIBUTES */

        // console.log(menu.attributes[0].value.split(' ').length)

        // if(menu.attributes[0].value.split(' ').length == 2){

        //     menuHeader.style.background = "rgba(0, 0, 0, 0.5)"
        // }
        // else{

        //     menuHeader.style.background = "transparent";

        // }

        

    })

    const links = d.querySelectorAll(".menu a");

    links.forEach(link =>{

        link.addEventListener('click', ()=>{

            setTimeout(()=>{
                menu.classList.remove('active-menu')
            },500);
           
            

        })
    })


})(document);
   
     

/* BACKGROUND SCROLL */

((d)=>{

    function scrollHeader(){

       const menuHeader = document.getElementById("menu-header");
       const links = document.querySelectorAll(".menu a");

        if(this.scrollY >=50 ) menuHeader.classList.add('scroll-header') ,  links.forEach(link => link.style.color = "#bea7d6" );
        else menuHeader.classList.remove('scroll-header'), links.forEach(link => link.style.color = "#7c27d8" );
    

    }
    window.addEventListener('scroll', scrollHeader);


})(document);

((d) => {

  const $form = d.querySelector(".contact-form"),
  $loader = d.querySelector(".contact-form-loader"),
  $response = d.querySelector(".contact-form-response");

  $form.addEventListener("submit", (e) =>{
    e.preventDefault();
    $loader.classList.remove("none");
    fetch("https://formsubmit.co/ajax/jorgecongalopez96@gmail.com", {
      method: "POST",
      body: new FormData(e.target)
    }).then((res ) => (res.ok ? res.json() : Promise.reject(res)))
      .then((json)=> {
        console.log(json);
        location.hash = '#gracias'
        $form.reset();
      }).catch((err)=>{
        console.log(err);
        let message = err.statusText || "Ocurrio un error al enviar, intentalo nuevamente";
        $response.querySelector("h3").innerHTML = `Error ${err.status} : ${message}`;
      }).finally(()=>{
        $loader.classList.add("none");
        setTimeout(()=>{
          location.hash = '#close'
        },3000)
      });

  });

})(document);