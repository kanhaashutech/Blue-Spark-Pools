// Radhe Radhe

// Gsap Animation
var tl = gsap.timeline();
// nav- anim
tl.from(".nav",{
    y:-80,
    duration:.8,
    opacity:0
    
})

tl.from(".nav .logo-div",{
    y:-10,
    opacity:0,
    duration:.5
})

tl.from(".nav .nav-links",{
    y:-10,
    opacity:0,
    duration:.6,
    stagger:.5
})

// hero section anim
tl.from(".hero-section .img-div",{
    x:-40,
    opacity:0,
    duration:.6
})

tl.from(".hero-section .hero-txt .main-heading",{
    x:40,
    opacity:0,
    duration:.4
})

tl.from(".hero-section .hero-txt .sub-heading",{
    x:40,
    opacity:0,
    duration:.3
})


// why us anim
gsap.from(".why-us-container",{
    opacity:0,
    scale:.9,
    duration: 1,
    scrub:true,
    scrollTrigger:{
        // markers:true,
        trigger:".why-us-container",
        start:"top 75%"
    }
})

gsap.from(".why-us-container .why-head",{
    opacity:0,
    scale:.9,
    duration: 1,
    scrub:true,
    scrollTrigger:{
        scroller:"body",
        // markers:true,
        trigger:".why-us-container .why-head",
        start:"top 65%",
        end:"top 80%",
        scrub:2,
    }
})

gsap.from(".why-us-container .three-reason ",{
    opacity:0,
    y:50,
    scale:.9,
    duration: 1,
    scrub:true,
    scrollTrigger:{
        scroller:"body",
        // markers:true,
        trigger:".why-us-container .three-reason",
        start:"top 55%",
         end:"top 80%",
         scrub:2,
    }
})

gsap.from(".why-us-container .why-cards_container ",{
    opacity:0,
    y:50,
    scale:.9,
    duration: 1,
    scrub:true,
    scrollTrigger:{
        scroller:"body",
        scrub:2,
        // markers:true,
        trigger:".why-us-container .why-cards_container",
        start:"top 70%",
        end:"top 90%"
    }
})

// About section 

gsap.from(".about",{
    opacity:0,
    duration: 1.5,
    scrollTrigger:{
        scroller:"body",
        scrub:2,
        // markers:true,
        trigger:".about",
        start:"top 65%",
        end:"top 90%"
    }
})

gsap.from(".about .about_svg",{
    opacity:0,
    duration: .6,
    x:-60,
    scrollTrigger:{
        scroller:"body",
        scrub:2,
        // markers:true,
        trigger:".about .about_svg",
        start:"top 55%",
        end:"top 90%"
    }
})

gsap.from(".about .about-txt h3",{
    opacity:0,
    duration: .6,
    x:60,
    delay:.3,
    scrollTrigger:{
        scroller:"body",
        scrub:2,
        // markers:true,
        trigger:".about .about-txt h3",
        start:"top 55%",
        end:"top 90%",
        
    }
})



// services section


gsap.from(".service .service_heading",{
    opacity:0,
    duration: .6,
    y:10,
    delay:.3,
    scrollTrigger:{
        scroller:"body",
        scrub:2,
        // markers:true,
        trigger:".service .service_heading",
        start:"top 55%",
        end:"top 90%",
        
    }
})


gsap.from(".service .service-container .service-box",{
    opacity:0,
    duration: .6,
    y:10,
    delay:.3,
    scrollTrigger:{
        scroller:"body",
        scrub:2,
        // markers:true,
        trigger:".service .service-container .service-box",
        start:"top 65%",
        end:"top 90%",
        stagger:1
        
    }
})



// products section

gsap.from(".product-section .p-head img",{
    opacity:0,
    duration: .8,
    x:90,
    // delay:.3,
    scrollTrigger:{
        scroller:"body",
        scrub:2,
        // markers:true,
        trigger:".product-section .p-head img",
        start:"top 55%",
        end:"top 90%",
        
    }
})


gsap.from(".product-section .p-container .p-cards",{
    opacity:0,
    duration: .6,
    y:30,
    delay:.3,
    scrollTrigger:{
        scroller:"body",
        scrub:2,
        // markers:true,
        trigger:".product-section .p-container .p-cards",
        start:"top 55%",
        end:"top 90%",
        
    }
})

gsap.from(".product-section .view-products a",{
    opacity:0,
    duration: .6,
    y:30,
    delay:.3,
    scrollTrigger:{
        scroller:"body",
        scrub:2,
        // markers:true,
        trigger:".product-section .view-products a",
        start:"top 85%",
        end:"top 90%",
        
    }
})



//  gallery section

gsap.from(".gallery-section .g-head h1",{
    opacity:0,
    duration: .6,
    x:90,
    delay:.3,
    scrollTrigger:{
        scroller:"body",
        scrub:2,
        // markers:true,
        trigger:".product-section .view-products a",
        start:"top 45%",
        end:"top 90%",
        
    }
})


gsap.from(".gallery-section .g-img  ",{
    opacity:0,
    duration: .6,
    y:30,
    delay:.3,
    scrollTrigger:{
        scroller:"body",
        scrub:2,
        // markers:true,
        trigger:".product-section .view-products a",
        start:"top 30%",
        end:"top 60%",
        
    }
})


// contact section

gsap.from(".contact-section h1",{
    opacity:0,
    duration: .6,
    y:30,
    delay:.3,
    scrollTrigger:{
        scroller:"body",
        scrub:2,
        // markers:true,
        trigger:".contact-section h1",
        start:"top 65%",
        end:"top 95%",
        
    }
})

gsap.from(".contact-section .c-box .c-img",{
    opacity:0,
    duration: .6,
    y:30,
    delay:.3,
    scrollTrigger:{
        scroller:"body",
        scrub:2,
        // markers:true,
        trigger:".contact-section h1",
        start:"top 50%",
        end:"top 95%",
        
    }
})

gsap.from(".contact-section .c-box .c-form",{
    opacity:0,
    duration: .6,
    y:30,
    delay:.3,
    scrollTrigger:{
        scroller:"body",
        scrub:2,
        // markers:true,
        trigger:".contact-section h1",
        start:"top 50%",
        end:"top 95%",
        
    }
})

















