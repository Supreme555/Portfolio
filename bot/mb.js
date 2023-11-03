let vop_11 = document.getElementsByClassName('flex_3')
let main_00 = document.getElementsByTagName('main')
function init() {
    let h1 = document.getElementById('flex_3_main').offsetHeight;
    console.log('resize')
    change_0(h1)
}
window.addEventListener('resize', init)

init()

function init_1() {
    let w1 = document.getElementsByTagName('body').offsetWidth;
    change_11(w1)
}
window.addEventListener('resize', init_1)

function change_11(num_20)  {
    if (num_20 > 700) {

    }
    else if (num_20 < 700) {

    }
}

function close_main_2 () {
    main_00.style.display = 'none'
}

function change_0(num) {
    vop_11[0].style.height = num + 'px'
    let vop_0 = document.getElementsByClassName('vop')
    let num_0 = (num / 3) / 2
    num_0 = num_0 + 5
    for (let i = 0; i < vop_0.length; i++) {
        vop_0[i].style.height = `${num_0}px`
    }
}

let k_11

close_open_0 = () => {
    main_00.style.display = 'block'
}
