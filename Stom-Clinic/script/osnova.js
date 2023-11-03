const progressCircle = document.querySelector(".autoplay-progress svg");
const progressContent = document.querySelector(".autoplay-progress span");
var swiper = new Swiper(".mySwiper_1", {
    spaceBetween: 30,
    grabCursor: true,
    centeredSlides: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false
    },
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
    },
    navigation: {
        nextEl: ".top_next",
        prevEl: ".top_prev"
    },
});


//slider ----------------------------------------------


const slider_line_text_in_h1 = document.querySelector('.slider_line_text_in_h1')
const slider_line_text_in_p = document.querySelector('.slider_line_text_in_p')

check_0 = (num) => {
    if (0 == num) {
        slider_line_text_in_h1.innerHTML = `Exceptional Health Care for Woman`
        slider_line_text_in_p.innerHTML = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt
            ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.1`
        // main_top_slaider_filter_img[0].innerHTML = `<img src="./img/home-slider1.png" alt="">`
    }
    if (1 == num) {
        slider_line_text_in_h1.innerHTML = `Caring Health is Important Than All`
        slider_line_text_in_p.innerHTML = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt
            ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.2`
        // main_top_slaider_filter_img[0].innerHTML = `<img src="./img/home-slider2.png" alt="">`
    }
    if (2 == num) {
        slider_line_text_in_h1.innerHTML = `We Offer Highly Treatments`
        slider_line_text_in_p.innerHTML = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt
            ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.3`
        // main_top_slaider_filter_img[0].innerHTML = `<img src="./img/home-slider3.png" alt="">`
    }
}

// main_intro_area

// const main_intro_area_img_text_in_h3 = document.querySelector('.main_intro_area_img_text_in_h3')
// const main_intro_area_img_text_in_p = document.querySelector('.main_intro_area_img_text_in_p')
// const main_intro_area_bar_text_but = document.querySelectorAll('.main_intro_area_bar_text_but')
// intro_Check = (num) => {
//     console.log(main_intro_area_bar_text_but)
//     main_intro_area_bar_text_but.forEach(item => {
//         item.style.color = `#0046c0`
//         item.style.backgroundColor = `white`
//     });
//     if (num === 0) {
//         main_intro_area_img_text_in_h3.innerHTML = `Hospital Introduction`
//         main_intro_area_img_text_in_p.innerHTML = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.`
//         main_intro_area_bar_text_but[0].style.color = `white`
//         main_intro_area_bar_text_but[0].style.backgroundColor = `#0046c0`
//     }
//     if (num === 1) {
//         main_intro_area_img_text_in_h3.innerHTML = `About Our Pharmacy`
//         main_intro_area_img_text_in_p.innerHTML = `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem.`
//         main_intro_area_bar_text_but[1].style.color = `white`
//         main_intro_area_bar_text_but[1].style.backgroundColor = `#0046c0`
//     }
//     if (num === 2) {
//         main_intro_area_img_text_in_h3.innerHTML = `Our reasearch center and lab`
//         main_intro_area_img_text_in_p.innerHTML = `But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master`
//         main_intro_area_bar_text_but[2].style.color = `white`
//         main_intro_area_bar_text_but[2].style.backgroundColor = `#0046c0`
//     }
//     if (num === 3) {
//         main_intro_area_img_text_in_h3.innerHTML = `CCU & ICU`
//         main_intro_area_img_text_in_p.innerHTML = `At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia.`
//         main_intro_area_bar_text_but[3].style.color = `white`
//         main_intro_area_bar_text_but[3].style.backgroundColor = `#0046c0`
//     }
//     if (num === 4) {
//         main_intro_area_img_text_in_h3.innerHTML = `Our Doctors`
//         main_intro_area_img_text_in_p.innerHTML = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.`
//         main_intro_area_bar_text_but[4].style.color = `white`
//         main_intro_area_bar_text_but[4].style.backgroundColor = `#0046c0`
//     }
// }
// intro_Check(0)

var swiper = new Swiper(".mySwiper_2", {
    grabCursor: true,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 6000,
        disableOnInteraction: false
    },
    pagination: {
        type: 'custom',
        el: ".main_intro_area_bar",
        bulletClass: 'main_intro_area_bar_text ',
        clickable: true,
    },
    navigation: {
        nextEl: ".bot_next",
        prevEl: ".bot_prev"
    },
});
const main_intro_area_bar_text_but = document.querySelectorAll('.main_intro_area_bar_text')
swiper.on('activeIndexChange', function (event) {
    let num = event.activeIndex
    check_index(num)
});
function check_index(num) {
    main_intro_area_bar_text_but.forEach(item => {
        item.style.color = `#0046c0`
        item.style.backgroundColor = `white`
    });
    if (num === 0) {
        main_intro_area_bar_text_but[0].style.color = `white`
        main_intro_area_bar_text_but[0].style.backgroundColor = `#0046c0`
    }
    if (num === 1) {
        main_intro_area_bar_text_but[1].style.color = `white`
        main_intro_area_bar_text_but[1].style.backgroundColor = `#0046c0`
    }
    if (num === 2) {
        main_intro_area_bar_text_but[2].style.color = `white`
        main_intro_area_bar_text_but[2].style.backgroundColor = `#0046c0`
    }
    if (num === 3) {
        main_intro_area_bar_text_but[3].style.color = `white`
        main_intro_area_bar_text_but[3].style.backgroundColor = `#0046c0`
    }
    if (num === 4) {
        main_intro_area_bar_text_but[4].style.color = `white`
        main_intro_area_bar_text_but[4].style.backgroundColor = `#0046c0`
    }
}
check_index(0)

let to_top_0 = document.querySelector("#go_to_top");
let go_to_client_0 = document.querySelector("#go_to_client");
let go_to_yslygi_0 = document.querySelector("#go_to_yslygi");
let go_to_akcuu_0 = document.querySelector("#go_to_akcuu");
let go_to_works_0 = document.querySelector("#go_to_works");
let go_to_paty_0 = document.querySelector("#go_to_paty");
let go_to_contact_0 = document.querySelector("#go_to_contact");
let go_to_logo_0 = document.querySelector("#go_to_logo");


let go_up_0 = document.querySelector("#go_up_0");

let Scroll = 0;
document.addEventListener("scroll", (event) => {
    Scroll = window.scrollY;
    // console.log(Scroll)
    if (Scroll > 200) {
        go_up_0.style.opacity = 1
    }
    else if (Scroll < 100) {
        go_up_0.style.opacity = 0
    }
});
go_up = () => {
    to_top_0.scrollIntoView({ block: "center", behavior: "smooth" })
}
go_to_client = () => {
    go_to_client_0.scrollIntoView({ block: "center", behavior: "smooth" })
}
go_to_yslygi = () => {
    go_to_yslygi_0.scrollIntoView({ block: "center", behavior: "smooth" })
}
go_to_akcuu = () => {
    go_to_akcuu_0.scrollIntoView({ block: "center", behavior: "smooth" })
}
go_to_works = () => {
    go_to_works_0.scrollIntoView({ block: "center", behavior: "smooth" })
}
go_to_paty = () => {
    go_to_paty_0.scrollIntoView({ block: "center", behavior: "smooth" })
}
go_to_contact = () => {
    go_to_contact_0.scrollIntoView({ block: "center", behavior: "smooth" })
}
go_to_logo = () => {
    go_to_logo_0.scrollIntoView({ block: "center", behavior: "smooth" })
}