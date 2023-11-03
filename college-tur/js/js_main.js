const images = document.querySelectorAll('.slider .slider-line img')
const sliderLine = document.querySelector('.slider-line')
let count = 0
let width

function init() {
    console.log('resize')
    width = document.querySelector('.slider').offsetWidth
    console.log(width)
    sliderLine.style.width = width * images.length + 'px'
    images.forEach(item => {
        item.style.width = width + 'px'
        item.style.heigth = 'auto'
    });
    rollSlider()
}
window.addEventListener('resize', init)
init()

left_0 = () => {
    count--
    if (count < 0) {
        count = images.length - 1
    }
    check_0(count)
    rollSlider()
}

rigth_0 = () => {
    count++
    if (count >= images.length) {
        count = 0
    }
    check_0(count)
    rollSlider()
}
txt_num = (num_0) => {
    count = num_0
    rollSlider()
    check_0(count)
}
function rollSlider() {
    sliderLine.style.transform = 'translate(-' + count * width + 'px'
}
//slider ----------------------------------------------



let main_img_flex_line = document.getElementsByClassName('main_img_flex_line')
let main_img_txt_2_in = document.getElementsByClassName('main_img_txt_2_in')
let out_country_0 = document.getElementById('main_img_txt_1_in_1')
let out_country_txt_0 = document.getElementById('main_img_txt_1_in_2')
let out_country_txt_1 = document.getElementById('main_img_txt_1_in_3_in_1')
let number_out_0 = document.getElementById('number')
let border_out_0 = document.getElementById('border_main_txt_1_in_1')

main_img_flex_line[0].style.height = `${2}px`
main_img_flex_line[0].style.backgroundColor = `white`
let line = document.getElementsByClassName('line')
line[0].style.opacity = 1
main_img_txt_2_in[0].style.color = 'white'

let href_out_0 = document.getElementById('a_btn_1')

check_0 = (num) => {
    for (let i = 0; i < line.length; i++) {
        line[i].style.opacity = 0
        main_img_txt_2_in[i].style.color = '#b5b5b5'
        main_img_flex_line[i].style.height = `${1}px`
        main_img_flex_line[i].style.backgroundColor = `#b5b5b5`
    }
    if (0 == num) {
        line[0].style.opacity = 1
        main_img_txt_2_in[0].style.color = 'white'
        main_img_flex_line[0].style.height = `${2}px`
        main_img_flex_line[0].style.backgroundColor = `white`
        out_country_0.innerHTML = `Казахстан`
        out_country_txt_0.innerHTML = `Казахстан это живописная страна и так же, Казахстан –
        многонациональная страна, где в мире и согласии проживают более 150 национальностей.
        Народы Казахстана живут мирно, во взаимопонимании и уважении к культуре, традициям,
        обычаям всех наций и этнических групп.`
        out_country_txt_1.innerHTML = `Казахстан`
        number_out_0.innerHTML = `1`
        border_out_0.innerHTML= `Казахстан`
        href_out_0.innerHTML = `<a href="./str_1.html">Подробнее</a>`
        // target="_blank" 
    }
    else if (1 == num) {
        line[1].style.opacity = 1
        main_img_txt_2_in[1].style.color = 'white'
        main_img_flex_line[1].style.height = `${2}px`
        main_img_flex_line[1].style.backgroundColor = `white`
        out_country_0.innerHTML = `Узбекистан`
        out_country_txt_0.innerHTML = `Узбекистан – многонациональное государство. Здесь проживают десятки национальностей и народностей среди которых жители среднеазиатского региона: узбеки, каракалпаки, таджики, туркмены, казахи, киргизы, уйгуры, дунгане; западные и восточные славяне: русские, украинцы, белорусы, поляки; многочисленными диаспорами в Узбекистане представлены корейцы, иранцы, армяне, грузины, азербайджанцы, татары, башкиры, немцы, евреи, литовцы, греки, турки и многие другие национальности.`
        out_country_txt_1.innerHTML = `Узбекистан`
        number_out_0.innerHTML = `2`
        border_out_0.innerHTML= `Узбекистан`
        href_out_0.innerHTML = `<a href="./str_2.html">Подробнее</a>`
        // target="_blank" 
    }
    else if (2 == num) {
        line[2].style.opacity = 1
        main_img_txt_2_in[2].style.color = 'white'
        main_img_flex_line[2].style.height = `${2}px`
        main_img_flex_line[2].style.backgroundColor = `white`
        out_country_0.innerHTML = `Турция`
        out_country_txt_0.innerHTML = `Турция - страна колоритная и многонациональная, но единое вероисповедание 95% населения государства позволило сохранить культурные традиции и обычаи. Уникальные природные ресурсы позволяют ей развивать торговую и туристическую отрасль.<br> Турция – уникальная страна с точки зрения своего расположения. Находится она сразу в двух частях света: Азии и Европе. Чаще всего относится к азиатскому региону, а именно, странам Ближнего Востока.`
        out_country_txt_1.innerHTML = `Турция`
        number_out_0.innerHTML = `3`
        border_out_0.innerHTML= `Турция`
        href_out_0.innerHTML = `<a href="./str_3.html">Подробнее</a>`
        // target="_blank" 
    }
    else if (3 == num) {
        line[3].style.opacity = 1
        main_img_txt_2_in[3].style.color = 'white'
        main_img_flex_line[3].style.height = `${2}px`
        main_img_flex_line[3].style.backgroundColor = `white`
        out_country_0.innerHTML = `Россия`
        out_country_txt_0.innerHTML = `Россия является многонациональным государством, что отражено также в её Конституции. На её территории проживает более 180 народов, в число которых входят не только коренные малые и автохтонные народы страны.`
        out_country_txt_1.innerHTML = `Россия`
        number_out_0.innerHTML = `4`
        border_out_0.innerHTML= `Россия`
        href_out_0.innerHTML = `<a href="./str_4.html">Подробнее</a>`
        // target="_blank"
    }
}
