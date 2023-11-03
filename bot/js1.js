let open_0 = document.getElementsByClassName('flex_1')
let trans_0 = document.getElementsByClassName('container')
let vop_0 = document.getElementsByClassName('vop')
let arrow_0 = document.getElementById('arrow_0')
let flex_2 = document.getElementsByClassName('flex_2')
let flex_3 = document.getElementsByClassName('flex_3')
let flex_2_flex_1 = document.getElementsByClassName('flex_2_flex_1')
let flex_2_flex_2 = document.getElementsByClassName('flex_2_flex_2')
let chng_img_0 = document.getElementById('chng_img')

//mobile_vers
let btn_display_0 = document.getElementById('button_100')
let vop_11 = document.getElementsByClassName('flex_3')
let main_00 = document.getElementById('main_100')
function init(num_40) {
      let h1 = document.getElementById('flex_3_main').offsetHeight;
      let w1 = document.querySelector('body').offsetWidth;
      if (w1 > 700) {
            return
      }
      h1 == num_40
      console.log('resize')
      console.log(h1)
      change_0(h1)
      change_11(w1)
}
window.addEventListener('resize', init)

function init_1() {
      let w1 = document.querySelector('body').offsetWidth;
      console.log('resize_2')
      console.log('1')
      change_11(w1)
}
window.addEventListener('resize', init_1)

function change_11(num_20) {
      console.log(num_20)
      if (num_20 > 700) {
            open_0[0].innerHTML = `
      <div id="restart_0">
            <img onclick="restart()" src="./img/rotate.png" alt="">
      </div>
      <div id="words_0" onclick="close_main()">
            CHAT_BOT
      </div>
      <div id="chng_img" onclick="close_main()">
            <img id="arrow_0" src="./img/arrow-up.png" alt="">
      </div>
      `
      }
      else if (num_20 < 700) {
            open_0[0].innerHTML = `
      <div id="restart_0">
            <img onclick="restart()" src="./img/rotate.png" alt="">
      </div>
      <div id="words_0" onclick="close_main_2()">
            CHAT_BOT
      </div>
      <div id="chng_img" onclick="close_main_2()">
            <img id="arrow_0" src="./img/arrow-up.png" alt="">
      </div>
      `
      }
}

function close_main_2() {
      main_00.style.display = 'none'
      btn_display_0.style.display = 'block'
      
}     
function change_0(num) {
      vop_11[0].style.height = num + 'px'
      console.log(num)
      let vop_0 = document.getElementsByClassName('vop')
      let num_0 = (num / 3) / 2
      num_0 = num_0 + 5
      for (let i = 0; i < vop_0.length; i++) {
            vop_0[i].style.height = `${num_0}px`
      }
      change_11()
}

let k_11

close_open_0 = () => {
      let btn_display_0 = document.getElementById('button_100')
      main_00.style.display = 'block'
      btn_display_0.style.display = 'none'
      let hei_100 = 410
      init(hei_100)
}

//mobile_vers

let a = 1
function close_main() {
      if (a == 1) {
            trans_0[0].style.transform = "translateY(-750px)";
            a++
            chng_img_0.innerHTML = `<img onclick="close_main()" id="arrow_0" src="./img/down-filled-triangular-arrow.png" alt="">`
      }
      else if (a == 2) {
            trans_0[0].style.transform = "translateY(0px)";
            a = 1
            chng_img_0.innerHTML = `<img onclick="close_main()" id="arrow_0" src="./img/arrow-up.png" alt="">`
      }
      change_11()
}

restart = () => {
      result = ` `
      flex_2[0].innerHTML = ` `
      flex_3[0].innerHTML = `
            <div class="vop" onclick="start('1')">1. Гражданское право</div>
            <div class="vop" onclick="start('2')">2. Банковское право</div>
            <div class="vop" onclick="start('3')">3. Финансовое право </div>
            <div class="vop" onclick="start('4')">4. Административное право</div>
            <div class="vop" onclick="start('5')">5. Страховое право </div>
            <div class="vop" onclick="next('0.1')">Следующие вопросы</div>
            `
      init()
}

next = (number_1) => {
      if (number_1 == 0.1) {
            flex_3[0].innerHTML = `
            <div class="vop" onclick="start('6')">6. Наследственное право</div>
            <div class="vop" onclick="start('7')">7. Уголовное право</div>
            <div class="vop" onclick="start('8')">8. Жилищное право</div>
            <div class="vop" onclick="next('0.2')">Предыдущий вопросы</div>
            `
      }
      if (number_1 == 0.2) {
            flex_3[0].innerHTML = `
            <div class="vop" onclick="start('1')">1. Гражданское право</div>
            <div class="vop" onclick="start('2')">2. Банковское право</div>
            <div class="vop" onclick="start('3')">3. Финансовое право </div>
            <div class="vop" onclick="start('4')">4. Административное право</div>
            <div class="vop" onclick="start('5')">5. Страховое право </div>
            <div class="vop" onclick="next('0.1')">Следующие вопросы</div>
            `
      }
}
let result = ` `
start = (number_0) => {
      if (number_0 == 1) {
            go_1(main_vop_1)
            go_2(vtor_vop_1_1, vtor_vop_1_2, vtor_vop_1_3, vtor_vop_1_4, vtor_vop_1_5, 1_1, 1_2, 1_3, 1_4, 1_5)
      }
      else if (number_0 == 1_1) {
            go_1(vtor_vop_1_1)
            go_2(vtor_vop_1_1_1, vtor_vop_1_1_2, vtor_vop_1_1_3, vtor_vop_1_1_4, vtor_vop_1_1_5, 1_1_1, 1_1_2, 1_1_3, 1_1_4, 1_1_5)
      }
      else if (number_0 == 1_1_1) {
            otvt_1(vtor_vop_1_1_1, otvt_vop_1_1_1)
      }
      else if (number_0 == 1_1_2) {
            otvt_1(vtor_vop_1_1_2, otvt_vop_1_1_2)
      }
      else if (number_0 == 1_1_3) {
            otvt_1(vtor_vop_1_1_3, otvt_vop_1_1_3)
      }
      else if (number_0 == 1_1_4) {
            otvt_1(vtor_vop_1_1_4, otvt_vop_1_1_4)
      }
      else if (number_0 == 1_1_5) {
            otvt_1(vtor_vop_1_1_5, otvt_vop_1_1_5)
      }
      else if (number_0 == 1_2) {
            go_1(vtor_vop_1_2)
            go_2(vtor_vop_1_2_1, vtor_vop_1_2_2, vtor_vop_1_2_3, vtor_vop_1_2_4, vtor_vop_1_2_5, 1_2_1, 1_2_2, 1_2_3, 1_2_4, 1_2_5)
      }
      else if (number_0 == 1_2_1) {
            otvt_1(vtor_vop_1_2_1, otvt_vop_1_2_1)
      }
      else if (number_0 == 1_2_2) {
            otvt_1(vtor_vop_1_2_2, otvt_vop_1_2_2)
      }
      else if (number_0 == 1_2_3) {
            otvt_1(vtor_vop_1_2_3, otvt_vop_1_2_3)
      }
      else if (number_0 == 1_2_4) {
            otvt_1(vtor_vop_1_2_4, otvt_vop_1_2_4)
      }
      else if (number_0 == 1_2_5) {
            otvt_1(vtor_vop_1_2_5, otvt_vop_1_2_5)
      }
      else if (number_0 == 1_3) {
            go_1(vtor_vop_1_3)
            go_2(vtor_vop_1_3_1, vtor_vop_1_3_2, vtor_vop_1_3_3, vtor_vop_1_3_4, vtor_vop_1_3_5, 1_3_1, 1_3_2, 1_3_3, 1_3_4, 1_3_5)
      }
      else if (number_0 == 1_3_1) {
            otvt_1(vtor_vop_1_3_1, otvt_vop_1_3_1)
      }
      else if (number_0 == 1_3_2) {
            otvt_1(vtor_vop_1_3_2, otvt_vop_1_3_2)
      }
      else if (number_0 == 1_3_3) {
            otvt_1(vtor_vop_1_3_3, otvt_vop_1_3_3)
      }
      else if (number_0 == 1_3_4) {
            otvt_1(vtor_vop_1_3_4, otvt_vop_1_3_4)
      }
      else if (number_0 == 1_3_5) {
            otvt_1(vtor_vop_1_3_5, otvt_vop_1_3_5)
      }

      else if (number_0 == 1_4) {
            go_1(vtor_vop_1_4)
            go_2(vtor_vop_1_4_1, vtor_vop_1_4_2, vtor_vop_1_4_3, vtor_vop_1_4_4, vtor_vop_1_4_5, 1_4_1, 1_4_2, 1_4_3, 1_4_4, 1_4_5)
      }
      else if (number_0 == 1_4_1) {
            otvt_1(vtor_vop_1_4_1, otvt_vop_1_4_1)
      }
      else if (number_0 == 1_4_2) {
            otvt_1(vtor_vop_1_4_2, otvt_vop_1_4_2)
      }
      else if (number_0 == 1_4_3) {
            otvt_1(vtor_vop_1_4_3, otvt_vop_1_4_3)
      }
      else if (number_0 == 1_4_4) {
            otvt_1(vtor_vop_1_4_4, otvt_vop_1_4_4)
      }
      else if (number_0 == 1_4_5) {
            otvt_1(vtor_vop_1_4_5, otvt_vop_1_4_5)
      }
      else if (number_0 == 1_5) {
            go_1(vtor_vop_1_5)
            go_2(vtor_vop_1_5_1, vtor_vop_1_5_2, vtor_vop_1_5_3, vtor_vop_1_5_4, vtor_vop_1_5_5, 1_5_1, 1_5_2, 1_5_3, 1_5_4, 1_5_5)
      }
      else if (number_0 == 1_5_1) {
            otvt_1(vtor_vop_1_5_1, otvt_vop_1_5_1)
      }
      else if (number_0 == 1_5_2) {
            otvt_1(vtor_vop_1_5_2, otvt_vop_1_5_2)
      }
      else if (number_0 == 1_5_3) {
            otvt_1(vtor_vop_1_5_3, otvt_vop_1_5_3)
      }
      else if (number_0 == 1_5_4) {
            otvt_1(vtor_vop_1_5_4, otvt_vop_1_5_4)
      }
      else if (number_0 == 1_5_5) {
            otvt_1(vtor_vop_1_5_5, otvt_vop_1_5_5)
      }

      if (number_0 == 2) {
            go_1(main_vop_2)
            go_2(vtor_vop_2_1, vtor_vop_2_2, vtor_vop_2_3, vtor_vop_2_4, vtor_vop_2_5, 2_1, 2_2, 2_3, 2_4, 2_5)
      }
      else if (number_0 == 2_1) {
            go_1(vtor_vop_2_1)
            go_2(vtor_vop_2_1_1, vtor_vop_2_1_2, vtor_vop_2_1_3, vtor_vop_2_1_4, vtor_vop_2_1_5, 2_1_1, 2_1_2, 2_1_3, 2_1_4, 2_1_5)
      }
      else if (number_0 == 2_1_1) {
            otvt_1(vtor_vop_2_1_1, otvt_vop_2_1_1)
      }
      else if (number_0 == 2_1_2) {
            otvt_1(vtor_vop_2_1_2, otvt_vop_2_1_2)
      }
      else if (number_0 == 2_1_3) {
            otvt_1(vtor_vop_2_1_3, otvt_vop_2_1_3)
      }
      else if (number_0 == 2_1_4) {
            otvt_1(vtor_vop_2_1_4, otvt_vop_2_1_4)
      }
      else if (number_0 == 2_1_5) {
            otvt_1(vtor_vop_2_1_5, otvt_vop_2_1_5)
      }
      else if (number_0 == 2_2) {
            go_1(vtor_vop_2_2)
            go_2(vtor_vop_2_2_1, vtor_vop_2_2_2, vtor_vop_2_2_3, vtor_vop_2_2_4, vtor_vop_2_2_5, 2_2_1, 2_2_2, 2_2_3, 2_2_4, 2_2_5)
      }
      else if (number_0 == 2_2_1) {
            otvt_1(vtor_vop_2_2_1, otvt_vop_2_2_1)
      }
      else if (number_0 == 2_2_2) {
            otvt_1(vtor_vop_2_2_2, otvt_vop_2_2_2)
      }
      else if (number_0 == 2_2_3) {
            otvt_1(vtor_vop_2_2_3, otvt_vop_2_2_3)
      }
      else if (number_0 == 2_2_4) {
            otvt_1(vtor_vop_2_2_4, otvt_vop_2_2_4)
      }
      else if (number_0 == 2_2_5) {
            otvt_1(vtor_vop_2_2_5, otvt_vop_2_2_5)
      }
      else if (number_0 == 2_3) {
            go_1(vtor_vop_2_3)
            go_2(vtor_vop_2_3_1, vtor_vop_2_3_2, vtor_vop_2_3_3, vtor_vop_2_3_4, vtor_vop_2_3_5, 2_3_1, 2_3_2, 2_3_3, 2_3_4, 2_3_5)
      }
      else if (number_0 == 2_3_1) {
            otvt_1(vtor_vop_2_3_1, otvt_vop_2_3_1)
      }
      else if (number_0 == 2_3_2) {
            otvt_1(vtor_vop_2_3_2, otvt_vop_2_3_2)
      }
      else if (number_0 == 2_3_3) {
            otvt_1(vtor_vop_2_3_3, otvt_vop_2_3_3)
      }
      else if (number_0 == 2_3_4) {
            otvt_1(vtor_vop_2_3_4, otvt_vop_2_3_4)
      }
      else if (number_0 == 2_3_5) {
            otvt_1(vtor_vop_2_3_5, otvt_vop_2_3_5)
      }

      else if (number_0 == 2_4) {
            go_1(vtor_vop_2_4)
            go_2(vtor_vop_2_4_1, vtor_vop_2_4_2, vtor_vop_2_4_3, vtor_vop_2_4_4, vtor_vop_2_4_5, 2_4_1, 2_4_2, 2_4_3, 2_4_4, 2_4_5)
      }
      else if (number_0 == 2_4_1) {
            otvt_1(vtor_vop_2_4_1, otvt_vop_2_4_1)
      }
      else if (number_0 == 2_4_2) {
            otvt_1(vtor_vop_2_4_2, otvt_vop_2_4_2)
      }
      else if (number_0 == 2_4_3) {
            otvt_1(vtor_vop_2_4_3, otvt_vop_2_4_3)
      }
      else if (number_0 == 2_4_4) {
            otvt_1(vtor_vop_2_4_4, otvt_vop_2_4_4)
      }
      else if (number_0 == 2_4_5) {
            otvt_1(vtor_vop_2_4_5, otvt_vop_2_4_5)
      }
      else if (number_0 == 2_5) {
            go_1(vtor_vop_2_5)
            go_2(vtor_vop_2_5_1, vtor_vop_2_5_2, vtor_vop_2_5_3, vtor_vop_2_5_4, vtor_vop_2_5_5, 2_5_1, 2_5_2, 2_5_3, 2_5_4, 2_5_5)
      }
      else if (number_0 == 2_5_1) {
            otvt_1(vtor_vop_2_5_1, otvt_vop_2_5_1)
      }
      else if (number_0 == 2_5_2) {
            otvt_1(vtor_vop_2_5_2, otvt_vop_2_5_2)
      }
      else if (number_0 == 2_5_3) {
            otvt_1(vtor_vop_2_5_3, otvt_vop_2_5_3)
      }
      else if (number_0 == 2_5_4) {
            otvt_1(vtor_vop_2_5_4, otvt_vop_2_5_4)
      }
      else if (number_0 == 2_5_5) {
            otvt_1(vtor_vop_2_5_5, otvt_vop_2_5_5)
      }

      if (number_0 == 3) {
            go_1(main_vop_3)
            go_2(vtor_vop_3_1, vtor_vop_3_2, vtor_vop_3_3, vtor_vop_3_4, vtor_vop_3_5, 3_1, 3_2, 3_3, 3_4, 3_5)
      }
      else if (number_0 == 3_1) {
            go_1(vtor_vop_3_1)
            go_2(vtor_vop_3_1_1, vtor_vop_3_1_2, vtor_vop_3_1_3, vtor_vop_3_1_4, vtor_vop_3_1_5, 3_1_1, 3_1_2, 3_1_3, 3_1_4, 3_1_5)
      }
      else if (number_0 == 3_1_1) {
            otvt_1(vtor_vop_3_1_1, otvt_vop_3_1_1)
      }
      else if (number_0 == 3_1_2) {
            otvt_1(vtor_vop_3_1_2, otvt_vop_3_1_2)
      }
      else if (number_0 == 3_1_3) {
            otvt_1(vtor_vop_3_1_3, otvt_vop_3_1_3)
      }
      else if (number_0 == 3_1_4) {
            otvt_1(vtor_vop_3_1_4, otvt_vop_3_1_4)
      }
      else if (number_0 == 3_1_5) {
            otvt_1(vtor_vop_3_1_5, otvt_vop_3_1_5)
      }
      else if (number_0 == 3_2) {
            go_1(vtor_vop_3_2)
            go_2(vtor_vop_3_2_1, vtor_vop_3_2_2, vtor_vop_3_2_3, vtor_vop_3_2_4, vtor_vop_3_2_5, 3_2_1, 3_2_2, 3_2_3, 3_2_4, 3_2_5)
      }
      else if (number_0 == 3_2_1) {
            otvt_1(vtor_vop_3_2_1, otvt_vop_3_2_1)
      }
      else if (number_0 == 3_2_2) {
            otvt_1(vtor_vop_3_2_2, otvt_vop_3_2_2)
      }
      else if (number_0 == 3_2_3) {
            otvt_1(vtor_vop_3_2_3, otvt_vop_3_2_3)
      }
      else if (number_0 == 3_2_4) {
            otvt_1(vtor_vop_3_2_4, otvt_vop_3_2_4)
      }
      else if (number_0 == 3_2_5) {
            otvt_1(vtor_vop_3_2_5, otvt_vop_3_2_5)
      }
      else if (number_0 == 3_3) {
            go_1(vtor_vop_3_3)
            go_2(vtor_vop_3_3_1, vtor_vop_3_3_2, vtor_vop_3_3_3, vtor_vop_3_3_4, vtor_vop_3_3_5, 3_3_1, 3_3_2, 3_3_3, 3_3_4, 3_3_5)
      }
      else if (number_0 == 3_3_1) {
            otvt_1(vtor_vop_3_3_1, otvt_vop_3_3_1)
      }
      else if (number_0 == 3_3_2) {
            otvt_1(vtor_vop_3_3_2, otvt_vop_3_3_2)
      }
      else if (number_0 == 3_3_3) {
            otvt_1(vtor_vop_3_3_3, otvt_vop_3_3_3)
      }
      else if (number_0 == 3_3_4) {
            otvt_1(vtor_vop_3_3_4, otvt_vop_3_3_4)
      }
      else if (number_0 == 3_3_5) {
            otvt_1(vtor_vop_3_3_5, otvt_vop_3_3_5)
      }

      else if (number_0 == 3_4) {
            go_1(vtor_vop_3_4)
            go_2(vtor_vop_3_4_1, vtor_vop_3_4_2, vtor_vop_3_4_3, vtor_vop_3_4_4, vtor_vop_3_4_5, 3_4_1, 3_4_2, 3_4_3, 3_4_4, 3_4_5)
      }
      else if (number_0 == 3_4_1) {
            otvt_1(vtor_vop_3_4_1, otvt_vop_3_4_1)
      }
      else if (number_0 == 3_4_2) {
            otvt_1(vtor_vop_3_4_2, otvt_vop_3_4_2)
      }
      else if (number_0 == 3_4_3) {
            otvt_1(vtor_vop_3_4_3, otvt_vop_3_4_3)
      }
      else if (number_0 == 3_4_4) {
            otvt_1(vtor_vop_3_4_4, otvt_vop_3_4_4)
      }
      else if (number_0 == 3_4_5) {
            otvt_1(vtor_vop_3_4_5, otvt_vop_3_4_5)
      }
      else if (number_0 == 3_5) {
            go_1(vtor_vop_3_5)
            go_2(vtor_vop_3_5_1, vtor_vop_3_5_2, vtor_vop_3_5_3, vtor_vop_3_5_4, vtor_vop_3_5_5, 3_5_1, 3_5_2, 3_5_3, 3_5_4, 3_5_5)
      }
      else if (number_0 == 3_5_1) {
            otvt_1(vtor_vop_3_5_1, otvt_vop_3_5_1)
      }
      else if (number_0 == 3_5_2) {
            otvt_1(vtor_vop_3_5_2, otvt_vop_3_5_2)
      }
      else if (number_0 == 3_5_3) {
            otvt_1(vtor_vop_3_5_3, otvt_vop_3_5_3)
      }
      else if (number_0 == 3_5_4) {
            otvt_1(vtor_vop_3_5_4, otvt_vop_3_5_4)
      }
      else if (number_0 == 3_5_5) {
            otvt_1(vtor_vop_3_5_5, otvt_vop_3_5_5)
      }

      if (number_0 == 4) {
            go_1(main_vop_4)
            go_2(vtor_vop_4_1, vtor_vop_4_2, vtor_vop_4_3, vtor_vop_4_4, vtor_vop_4_5, 4_1, 4_2, 4_3, 4_4, 4_5)
      }
      else if (number_0 == 4_1) {
            go_1(vtor_vop_4_1)
            go_2(vtor_vop_4_1_1, vtor_vop_4_1_2, vtor_vop_4_1_3, vtor_vop_4_1_4, vtor_vop_4_1_5, 4_1_1, 4_1_2, 4_1_3, 4_1_4, 4_1_5)
      }
      else if (number_0 == 4_1_1) {
            otvt_1(vtor_vop_4_1_1, otvt_vop_4_1_1)
      }
      else if (number_0 == 4_1_2) {
            otvt_1(vtor_vop_4_1_2, otvt_vop_4_1_2)
      }
      else if (number_0 == 4_1_3) {
            otvt_1(vtor_vop_4_1_3, otvt_vop_4_1_3)
      }
      else if (number_0 == 4_1_4) {
            otvt_1(vtor_vop_4_1_4, otvt_vop_4_1_4)
      }
      else if (number_0 == 4_1_5) {
            otvt_1(vtor_vop_4_1_5, otvt_vop_4_1_5)
      }
      else if (number_0 == 4_2) {
            go_1(vtor_vop_4_2)
            go_2(vtor_vop_4_2_1, vtor_vop_4_2_2, vtor_vop_4_2_3, vtor_vop_4_2_4, vtor_vop_4_2_5, 4_2_1, 4_2_2, 4_2_3, 4_2_4, 4_2_5)
      }
      else if (number_0 == 4_2_1) {
            otvt_1(vtor_vop_4_2_1, otvt_vop_4_2_1)
      }
      else if (number_0 == 4_2_2) {
            otvt_1(vtor_vop_4_2_2, otvt_vop_4_2_2)
      }
      else if (number_0 == 4_2_3) {
            otvt_1(vtor_vop_4_2_3, otvt_vop_4_2_3)
      }
      else if (number_0 == 4_2_4) {
            otvt_1(vtor_vop_4_2_4, otvt_vop_4_2_4)
      }
      else if (number_0 == 4_2_5) {
            otvt_1(vtor_vop_4_2_5, otvt_vop_4_2_5)
      }
      else if (number_0 == 4_3) {
            go_1(vtor_vop_4_3)
            go_2(vtor_vop_4_3_1, vtor_vop_4_3_2, vtor_vop_4_3_3, vtor_vop_4_3_4, vtor_vop_4_3_5, 4_3_1, 4_3_2, 4_3_3, 4_3_4, 4_3_5)
      }
      else if (number_0 == 4_3_1) {
            otvt_1(vtor_vop_4_3_1, otvt_vop_4_3_1)
      }
      else if (number_0 == 4_3_2) {
            otvt_1(vtor_vop_4_3_2, otvt_vop_4_3_2)
      }
      else if (number_0 == 4_3_3) {
            otvt_1(vtor_vop_4_3_3, otvt_vop_4_3_3)
      }
      else if (number_0 == 4_3_4) {
            otvt_1(vtor_vop_4_3_4, otvt_vop_4_3_4)
      }
      else if (number_0 == 4_3_5) {
            otvt_1(vtor_vop_4_3_5, otvt_vop_4_3_5)
      }

      else if (number_0 == 4_4) {
            go_1(vtor_vop_4_4)
            go_2(vtor_vop_4_4_1, vtor_vop_4_4_2, vtor_vop_4_4_3, vtor_vop_4_4_4, vtor_vop_4_4_5, 4_4_1, 4_4_2, 4_4_3, 4_4_4, 4_4_5)
      }
      else if (number_0 == 4_4_1) {
            otvt_1(vtor_vop_4_4_1, otvt_vop_4_4_1)
      }
      else if (number_0 == 4_4_2) {
            otvt_1(vtor_vop_4_4_2, otvt_vop_4_4_2)
      }
      else if (number_0 == 4_4_3) {
            otvt_1(vtor_vop_4_4_3, otvt_vop_4_4_3)
      }
      else if (number_0 == 4_4_4) {
            otvt_1(vtor_vop_4_4_4, otvt_vop_4_4_4)
      }
      else if (number_0 == 4_4_5) {
            otvt_1(vtor_vop_4_4_5, otvt_vop_4_4_5)
      }
      else if (number_0 == 4_5) {
            go_1(vtor_vop_4_5)
            go_2(vtor_vop_4_5_1, vtor_vop_4_5_2, vtor_vop_4_5_3, vtor_vop_4_5_4, vtor_vop_4_5_5, 4_5_1, 4_5_2, 4_5_3, 4_5_4, 4_5_5)
      }
      else if (number_0 == 4_5_1) {
            otvt_1(vtor_vop_4_5_1, otvt_vop_4_5_1)
      }
      else if (number_0 == 4_5_2) {
            otvt_1(vtor_vop_4_5_2, otvt_vop_4_5_2)
      }
      else if (number_0 == 4_5_3) {
            otvt_1(vtor_vop_4_5_3, otvt_vop_4_5_3)
      }
      else if (number_0 == 4_5_4) {
            otvt_1(vtor_vop_4_5_4, otvt_vop_4_5_4)
      }
      else if (number_0 == 4_5_5) {
            otvt_1(vtor_vop_4_5_5, otvt_vop_4_5_5)
      }

      if (number_0 == 5) {
            go_1(main_vop_5)
            go_2(vtor_vop_5_1, vtor_vop_5_2, vtor_vop_5_3, vtor_vop_5_4, vtor_vop_5_5, 5_1, 5_2, 5_3, 5_4, 5_5)
      }
      else if (number_0 == 5_1) {
            go_1(vtor_vop_5_1)
            go_2(vtor_vop_5_1_1, vtor_vop_5_1_2, vtor_vop_5_1_3, vtor_vop_5_1_4, vtor_vop_5_1_5, 5_1_1, 5_1_2, 5_1_3, 5_1_4, 5_1_5)
      }
      else if (number_0 == 5_1_1) {
            otvt_1(vtor_vop_5_1_1, otvt_vop_5_1_1)
      }
      else if (number_0 == 5_1_2) {
            otvt_1(vtor_vop_5_1_2, otvt_vop_5_1_2)
      }
      else if (number_0 == 5_1_3) {
            otvt_1(vtor_vop_5_1_3, otvt_vop_5_1_3)
      }
      else if (number_0 == 5_1_4) {
            otvt_1(vtor_vop_5_1_4, otvt_vop_5_1_4)
      }
      else if (number_0 == 5_1_5) {
            otvt_1(vtor_vop_5_1_5, otvt_vop_5_1_5)
      }
      else if (number_0 == 5_2) {
            go_1(vtor_vop_5_2)
            go_2(vtor_vop_5_2_1, vtor_vop_5_2_2, vtor_vop_5_2_3, vtor_vop_5_2_4, vtor_vop_5_2_5, 5_2_1, 5_2_2, 5_2_3, 5_2_4, 5_2_5)
      }
      else if (number_0 == 5_2_1) {
            otvt_1(vtor_vop_5_2_1, otvt_vop_5_2_1)
      }
      else if (number_0 == 5_2_2) {
            otvt_1(vtor_vop_5_2_2, otvt_vop_5_2_2)
      }
      else if (number_0 == 5_2_3) {
            otvt_1(vtor_vop_5_2_3, otvt_vop_5_2_3)
      }
      else if (number_0 == 5_2_4) {
            otvt_1(vtor_vop_5_2_4, otvt_vop_5_2_4)
      }
      else if (number_0 == 5_2_5) {
            otvt_1(vtor_vop_5_2_5, otvt_vop_5_2_5)
      }
      else if (number_0 == 5_3) {
            go_1(vtor_vop_5_3)
            go_2(vtor_vop_5_3_1, vtor_vop_5_3_2, vtor_vop_5_3_3, vtor_vop_5_3_4, vtor_vop_5_3_5, 5_3_1, 5_3_2, 5_3_3, 5_3_4, 5_3_5)
      }
      else if (number_0 == 5_3_1) {
            otvt_1(vtor_vop_5_3_1, otvt_vop_5_3_1)
      }
      else if (number_0 == 5_3_2) {
            otvt_1(vtor_vop_5_3_2, otvt_vop_5_3_2)
      }
      else if (number_0 == 5_3_3) {
            otvt_1(vtor_vop_5_3_3, otvt_vop_5_3_3)
      }
      else if (number_0 == 5_3_4) {
            otvt_1(vtor_vop_5_3_4, otvt_vop_5_3_4)
      }
      else if (number_0 == 5_3_5) {
            otvt_1(vtor_vop_5_3_5, otvt_vop_5_3_5)
      }

      else if (number_0 == 5_4) {
            go_1(vtor_vop_5_4)
            go_2(vtor_vop_5_4_1, vtor_vop_5_4_2, vtor_vop_5_4_3, vtor_vop_5_4_4, vtor_vop_5_4_5, 5_4_1, 5_4_2, 5_4_3, 5_4_4, 5_4_5)
      }
      else if (number_0 == 5_4_1) {
            otvt_1(vtor_vop_5_4_1, otvt_vop_5_4_1)
      }
      else if (number_0 == 5_4_2) {
            otvt_1(vtor_vop_5_4_2, otvt_vop_5_4_2)
      }
      else if (number_0 == 5_4_3) {
            otvt_1(vtor_vop_5_4_3, otvt_vop_5_4_3)
      }
      else if (number_0 == 5_4_4) {
            otvt_1(vtor_vop_5_4_4, otvt_vop_5_4_4)
      }
      else if (number_0 == 5_4_5) {
            otvt_1(vtor_vop_5_4_5, otvt_vop_5_4_5)
      }
      else if (number_0 == 5_5) {
            go_1(vtor_vop_5_5)
            go_2(vtor_vop_5_5_1, vtor_vop_5_5_2, vtor_vop_5_5_3, vtor_vop_5_5_4, vtor_vop_5_5_5, 5_5_1, 5_5_2, 5_5_3, 5_5_4, 5_5_5)
      }
      else if (number_0 == 5_5_1) {
            otvt_1(vtor_vop_5_5_1, otvt_vop_5_5_1)
      }
      else if (number_0 == 5_5_2) {
            otvt_1(vtor_vop_5_5_2, otvt_vop_5_5_2)
      }
      else if (number_0 == 5_5_3) {
            otvt_1(vtor_vop_5_5_3, otvt_vop_5_5_3)
      }
      else if (number_0 == 5_5_4) {
            otvt_1(vtor_vop_5_5_4, otvt_vop_5_5_4)
      }
      else if (number_0 == 5_5_5) {
            otvt_1(vtor_vop_5_5_5, otvt_vop_5_5_5)
      }

      if (number_0 == 6) {
            go_1(main_vop_6)
            go_2(vtor_vop_6_1, vtor_vop_6_2, vtor_vop_6_3, vtor_vop_6_4, vtor_vop_6_5, 6_1, 6_2, 6_3, 6_4, 6_5)
      }
      else if (number_0 == 6_1) {
            go_1(vtor_vop_6_1)
            go_2(vtor_vop_6_1_1, vtor_vop_6_1_2, vtor_vop_6_1_3, vtor_vop_6_1_4, vtor_vop_6_1_5, 6_1_1, 6_1_2, 6_1_3, 6_1_4, 6_1_5)
      }
      else if (number_0 == 6_1_1) {
            otvt_1(vtor_vop_6_1_1, otvt_vop_6_1_1)
      }
      else if (number_0 == 6_1_2) {
            otvt_1(vtor_vop_6_1_2, otvt_vop_6_1_2)
      }
      else if (number_0 == 6_1_3) {
            otvt_1(vtor_vop_6_1_3, otvt_vop_6_1_3)
      }
      else if (number_0 == 6_1_4) {
            otvt_1(vtor_vop_6_1_4, otvt_vop_6_1_4)
      }
      else if (number_0 == 6_1_5) {
            otvt_1(vtor_vop_6_1_5, otvt_vop_6_1_5)
      }
      else if (number_0 == 6_2) {
            go_1(vtor_vop_6_2)
            go_2(vtor_vop_6_2_1, vtor_vop_6_2_2, vtor_vop_6_2_3, vtor_vop_6_2_4, vtor_vop_6_2_5, 6_2_1, 6_2_2, 6_2_3, 6_2_4, 6_2_5)
      }
      else if (number_0 == 6_2_1) {
            otvt_1(vtor_vop_6_2_1, otvt_vop_6_2_1)
      }
      else if (number_0 == 6_2_2) {
            otvt_1(vtor_vop_6_2_2, otvt_vop_6_2_2)
      }
      else if (number_0 == 6_2_3) {
            otvt_1(vtor_vop_6_2_3, otvt_vop_6_2_3)
      }
      else if (number_0 == 6_2_4) {
            otvt_1(vtor_vop_6_2_4, otvt_vop_6_2_4)
      }
      else if (number_0 == 6_2_5) {
            otvt_1(vtor_vop_6_2_5, otvt_vop_6_2_5)
      }
      else if (number_0 == 6_3) {
            go_1(vtor_vop_6_3)
            go_2(vtor_vop_6_3_1, vtor_vop_6_3_2, vtor_vop_6_3_3, vtor_vop_6_3_4, vtor_vop_6_3_5, 6_3_1, 6_3_2, 6_3_3, 6_3_4, 6_3_5)
      }
      else if (number_0 == 6_3_1) {
            otvt_1(vtor_vop_6_3_1, otvt_vop_6_3_1)
      }
      else if (number_0 == 6_3_2) {
            otvt_1(vtor_vop_6_3_2, otvt_vop_6_3_2)
      }
      else if (number_0 == 6_3_3) {
            otvt_1(vtor_vop_6_3_3, otvt_vop_6_3_3)
      }
      else if (number_0 == 6_3_4) {
            otvt_1(vtor_vop_6_3_4, otvt_vop_6_3_4)
      }
      else if (number_0 == 6_3_5) {
            otvt_1(vtor_vop_6_3_5, otvt_vop_6_3_5)
      }

      else if (number_0 == 6_4) {
            go_1(vtor_vop_6_4)
            go_2(vtor_vop_6_4_1, vtor_vop_6_4_2, vtor_vop_6_4_3, vtor_vop_6_4_4, vtor_vop_6_4_5, 6_4_1, 6_4_2, 6_4_3, 6_4_4, 6_4_5)
      }
      else if (number_0 == 6_4_1) {
            otvt_1(vtor_vop_6_4_1, otvt_vop_6_4_1)
      }
      else if (number_0 == 6_4_2) {
            otvt_1(vtor_vop_6_4_2, otvt_vop_6_4_2)
      }
      else if (number_0 == 6_4_3) {
            otvt_1(vtor_vop_6_4_3, otvt_vop_6_4_3)
      }
      else if (number_0 == 6_4_4) {
            otvt_1(vtor_vop_6_4_4, otvt_vop_6_4_4)
      }
      else if (number_0 == 6_4_5) {
            otvt_1(vtor_vop_6_4_5, otvt_vop_6_4_5)
      }
      else if (number_0 == 6_5) {
            go_1(vtor_vop_6_5)
            go_2(vtor_vop_6_5_1, vtor_vop_6_5_2, vtor_vop_6_5_3, vtor_vop_6_5_4, vtor_vop_6_5_5, 6_5_1, 6_5_2, 6_5_3, 6_5_4, 6_5_5)
      }
      else if (number_0 == 6_5_1) {
            otvt_1(vtor_vop_6_5_1, otvt_vop_6_5_1)
      }
      else if (number_0 == 6_5_2) {
            otvt_1(vtor_vop_6_5_2, otvt_vop_6_5_2)
      }
      else if (number_0 == 6_5_3) {
            otvt_1(vtor_vop_6_5_3, otvt_vop_6_5_3)
      }
      else if (number_0 == 6_5_4) {
            otvt_1(vtor_vop_6_5_4, otvt_vop_6_5_4)
      }
      else if (number_0 == 6_5_5) {
            otvt_1(vtor_vop_6_5_5, otvt_vop_6_5_5)
      }

      if (number_0 == 7) {
            go_1(main_vop_7)
            go_2(vtor_vop_7_1, vtor_vop_7_2, vtor_vop_7_3, vtor_vop_7_4, vtor_vop_7_5, 7_1, 7_2, 7_3, 7_4, 7_5)
      }
      else if (number_0 == 7_1) {
            go_1(vtor_vop_7_1)
            go_2(vtor_vop_7_1_1, vtor_vop_7_1_2, vtor_vop_7_1_3, vtor_vop_7_1_4, vtor_vop_7_1_5, 7_1_1, 7_1_2, 7_1_3, 7_1_4, 7_1_5)
      }
      else if (number_0 == 7_1_1) {
            otvt_1(vtor_vop_7_1_1, otvt_vop_7_1_1)
      }
      else if (number_0 == 7_1_2) {
            otvt_1(vtor_vop_7_1_2, otvt_vop_7_1_2)
      }
      else if (number_0 == 7_1_3) {
            otvt_1(vtor_vop_7_1_3, otvt_vop_7_1_3)
      }
      else if (number_0 == 7_1_4) {
            otvt_1(vtor_vop_7_1_4, otvt_vop_7_1_4)
      }
      else if (number_0 == 7_1_5) {
            otvt_1(vtor_vop_7_1_5, otvt_vop_7_1_5)
      }
      else if (number_0 == 7_2) {
            go_1(vtor_vop_7_2)
            go_2(vtor_vop_7_2_1, vtor_vop_7_2_2, vtor_vop_7_2_3, vtor_vop_7_2_4, vtor_vop_7_2_5, 7_2_1, 7_2_2, 7_2_3, 7_2_4, 7_2_5)
      }
      else if (number_0 == 7_2_1) {
            otvt_1(vtor_vop_7_2_1, otvt_vop_7_2_1)
      }
      else if (number_0 == 7_2_2) {
            otvt_1(vtor_vop_7_2_2, otvt_vop_7_2_2)
      }
      else if (number_0 == 7_2_3) {
            otvt_1(vtor_vop_7_2_3, otvt_vop_7_2_3)
      }
      else if (number_0 == 7_2_4) {
            otvt_1(vtor_vop_7_2_4, otvt_vop_7_2_4)
      }
      else if (number_0 == 7_2_5) {
            otvt_1(vtor_vop_7_2_5, otvt_vop_7_2_5)
      }
      else if (number_0 == 7_3) {
            go_1(vtor_vop_7_3)
            go_2(vtor_vop_7_3_1, vtor_vop_7_3_2, vtor_vop_7_3_3, vtor_vop_7_3_4, vtor_vop_7_3_5, 7_3_1, 7_3_2, 7_3_3, 7_3_4, 7_3_5)
      }
      else if (number_0 == 7_3_1) {
            otvt_1(vtor_vop_7_3_1, otvt_vop_7_3_1)
      }
      else if (number_0 == 7_3_2) {
            otvt_1(vtor_vop_7_3_2, otvt_vop_7_3_2)
      }
      else if (number_0 == 7_3_3) {
            otvt_1(vtor_vop_7_3_3, otvt_vop_7_3_3)
      }
      else if (number_0 == 7_3_4) {
            otvt_1(vtor_vop_7_3_4, otvt_vop_7_3_4)
      }
      else if (number_0 == 7_3_5) {
            otvt_1(vtor_vop_7_3_5, otvt_vop_7_3_5)
      }

      else if (number_0 == 7_4) {
            go_1(vtor_vop_7_4)
            go_2(vtor_vop_7_4_1, vtor_vop_7_4_2, vtor_vop_7_4_3, vtor_vop_7_4_4, vtor_vop_7_4_5, 7_4_1, 7_4_2, 7_4_3, 7_4_4, 7_4_5)
      }
      else if (number_0 == 7_4_1) {
            otvt_1(vtor_vop_7_4_1, otvt_vop_7_4_1)
      }
      else if (number_0 == 7_4_2) {
            otvt_1(vtor_vop_7_4_2, otvt_vop_7_4_2)
      }
      else if (number_0 == 7_4_3) {
            otvt_1(vtor_vop_7_4_3, otvt_vop_7_4_3)
      }
      else if (number_0 == 7_4_4) {
            otvt_1(vtor_vop_7_4_4, otvt_vop_7_4_4)
      }
      else if (number_0 == 7_4_5) {
            otvt_1(vtor_vop_7_4_5, otvt_vop_7_4_5)
      }
      else if (number_0 == 7_5) {
            go_1(vtor_vop_7_5)
            go_2(vtor_vop_7_5_1, vtor_vop_7_5_2, vtor_vop_7_5_3, vtor_vop_7_5_4, vtor_vop_7_5_5, 7_5_1, 7_5_2, 7_5_3, 7_5_4, 7_5_5)
      }
      else if (number_0 == 7_5_1) {
            otvt_1(vtor_vop_7_5_1, otvt_vop_7_5_1)
      }
      else if (number_0 == 7_5_2) {
            otvt_1(vtor_vop_7_5_2, otvt_vop_7_5_2)
      }
      else if (number_0 == 7_5_3) {
            otvt_1(vtor_vop_7_5_3, otvt_vop_7_5_3)
      }
      else if (number_0 == 7_5_4) {
            otvt_1(vtor_vop_7_5_4, otvt_vop_7_5_4)
      }
      else if (number_0 == 7_5_5) {
            otvt_1(vtor_vop_7_5_5, otvt_vop_7_5_5)
      }

      if (number_0 == 8) {
            go_1(main_vop_8)
            go_2(vtor_vop_8_1, vtor_vop_8_2, vtor_vop_8_3, vtor_vop_8_4, vtor_vop_8_5, 8_1, 8_2, 8_3, 8_4, 8_5)
      }
      else if (number_0 == 8_1) {
            go_1(vtor_vop_8_1)
            go_2(vtor_vop_8_1_1, vtor_vop_8_1_2, vtor_vop_8_1_3, vtor_vop_8_1_4, vtor_vop_8_1_5, 8_1_1, 8_1_2, 8_1_3, 8_1_4, 8_1_5)
      }
      else if (number_0 == 8_1_1) {
            otvt_1(vtor_vop_8_1_1, otvt_vop_8_1_1)
      }
      else if (number_0 == 8_1_2) {
            otvt_1(vtor_vop_8_1_2, otvt_vop_8_1_2)
      }
      else if (number_0 == 8_1_3) {
            otvt_1(vtor_vop_8_1_3, otvt_vop_8_1_3)
      }
      else if (number_0 == 8_1_4) {
            otvt_1(vtor_vop_8_1_4, otvt_vop_8_1_4)
      }
      else if (number_0 == 8_1_5) {
            otvt_1(vtor_vop_8_1_5, otvt_vop_8_1_5)
      }
      else if (number_0 == 8_2) {
            go_1(vtor_vop_8_2)
            go_2(vtor_vop_8_2_1, vtor_vop_8_2_2, vtor_vop_8_2_3, vtor_vop_8_2_4, vtor_vop_8_2_5, 8_2_1, 8_2_2, 8_2_3, 8_2_4, 8_2_5)
      }
      else if (number_0 == 8_2_1) {
            otvt_1(vtor_vop_8_2_1, otvt_vop_8_2_1)
      }
      else if (number_0 == 8_2_2) {
            otvt_1(vtor_vop_8_2_2, otvt_vop_8_2_2)
      }
      else if (number_0 == 8_2_3) {
            otvt_1(vtor_vop_8_2_3, otvt_vop_8_2_3)
      }
      else if (number_0 == 8_2_4) {
            otvt_1(vtor_vop_8_2_4, otvt_vop_8_2_4)
      }
      else if (number_0 == 8_2_5) {
            otvt_1(vtor_vop_8_2_5, otvt_vop_8_2_5)
      }
      else if (number_0 == 8_3) {
            go_1(vtor_vop_8_3)
            go_2(vtor_vop_8_3_1, vtor_vop_8_3_2, vtor_vop_8_3_3, vtor_vop_8_3_4, vtor_vop_8_3_5, 8_3_1, 8_3_2, 8_3_3, 8_3_4, 8_3_5)
      }
      else if (number_0 == 8_3_1) {
            otvt_1(vtor_vop_8_3_1, otvt_vop_8_3_1)
      }
      else if (number_0 == 8_3_2) {
            otvt_1(vtor_vop_8_3_2, otvt_vop_8_3_2)
      }
      else if (number_0 == 8_3_3) {
            otvt_1(vtor_vop_8_3_3, otvt_vop_8_3_3)
      }
      else if (number_0 == 8_3_4) {
            otvt_1(vtor_vop_8_3_4, otvt_vop_8_3_4)
      }
      else if (number_0 == 8_3_5) {
            otvt_1(vtor_vop_8_3_5, otvt_vop_8_3_5)
      }

      else if (number_0 == 8_4) {
            go_1(vtor_vop_8_4)
            go_2(vtor_vop_8_4_1, vtor_vop_8_4_2, vtor_vop_8_4_3, vtor_vop_8_4_4, vtor_vop_8_4_5, 8_4_1, 8_4_2, 8_4_3, 8_4_4, 8_4_5)
      }
      else if (number_0 == 8_4_1) {
            otvt_1(vtor_vop_8_4_1, otvt_vop_8_4_1)
      }
      else if (number_0 == 8_4_2) {
            otvt_1(vtor_vop_8_4_2, otvt_vop_8_4_2)
      }
      else if (number_0 == 8_4_3) {
            otvt_1(vtor_vop_8_4_3, otvt_vop_8_4_3)
      }
      else if (number_0 == 8_4_4) {
            otvt_1(vtor_vop_8_4_4, otvt_vop_8_4_4)
      }
      else if (number_0 == 8_4_5) {
            otvt_1(vtor_vop_8_4_5, otvt_vop_8_4_5)
      }
      else if (number_0 == 8_5) {
            go_1(vtor_vop_8_5)
            go_2(vtor_vop_8_5_1, vtor_vop_8_5_2, vtor_vop_8_5_3, vtor_vop_8_5_4, vtor_vop_8_5_5, 8_5_1, 8_5_2, 8_5_3, 8_5_4, 8_5_5)
      }
      else if (number_0 == 8_5_1) {
            otvt_1(vtor_vop_8_5_1, otvt_vop_8_5_1)
      }
      else if (number_0 == 8_5_2) {
            otvt_1(vtor_vop_8_5_2, otvt_vop_8_5_2)
      }
      else if (number_0 == 8_5_3) {
            otvt_1(vtor_vop_8_5_3, otvt_vop_8_5_3)
      }
      else if (number_0 == 8_5_4) {
            otvt_1(vtor_vop_8_5_4, otvt_vop_8_5_4)
      }
      else if (number_0 == 8_5_5) {
            otvt_1(vtor_vop_8_5_5, otvt_vop_8_5_5)
      }
}
go_1 = (txt) => {
      result = result + `
            <div class="flex_2_flex_1">
                <div class="people">
                  ${txt}
                </div>
            </div>
            <div class="flex_2_flex_2">
            <div class="bot">
                  Уточните вопрос
            </div>
        </div>`
      flex_2[0].innerHTML = result + `<div id="div_123"></div>`
      let to_elem = document.getElementById("div_123");
      to_elem.scrollIntoView({ block: "center", behavior: "smooth" });
      init()
}
go_2 = (txt_1, txt_2, txt_3, txt_4, txt_5, num_1, num_2, num_3, num_4, num_5) => {
      console.log(txt_4)
      console.log(txt_5)
      if (txt_3 == ` ` || num_3 == ` `) {
            flex_3[0].innerHTML = `
            <div class="vop" onclick="start(${num_1})">${txt_1}</div>
            <div class="vop" onclick="start(${num_2})">${txt_2}</div>
            `
      }
      else if (txt_4 == ` ` || num_4 == ` `) {
            flex_3[0].innerHTML = `
            <div class="vop" onclick="start(${num_1})">${txt_1}</div>
            <div class="vop" onclick="start(${num_2})">${txt_2}</div>
            <div class="vop" onclick="start(${num_3})">${txt_3}</div>
            `
      }
      else if (txt_5 == ` ` || num_5 == ` `) {
            flex_3[0].innerHTML = `
            <div class="vop" onclick="start(${num_1})">${txt_1}</div>
            <div class="vop" onclick="start(${num_2})">${txt_2}</div>
            <div class="vop" onclick="start(${num_3})">${txt_3}</div>
            <div class="vop" onclick="start(${num_4})">${txt_4}</div>
            `
      }
      else {
            flex_3[0].innerHTML = `
            <div class="vop" onclick="start(${num_1})">${txt_1}</div>
            <div class="vop" onclick="start(${num_2})">${txt_2}</div>
            <div class="vop" onclick="start(${num_3})">${txt_3}</div>
            <div class="vop" onclick="start(${num_4})">${txt_4}</div>
            <div class="vop" onclick="start(${num_5})">${txt_5}</div>
            `
      }
      init()
}
otvt_1 = (txt, otv) => {
      result = result + `
            <div class="flex_2_flex_1">
                <div class="people">
                  ${txt}
                </div>
            </div>
            <div class="flex_2_flex_2">
            <div class="bot">
                  ${otv}
            </div>
        </div>`
      flex_2[0].innerHTML = result + `<div id="div_123"></div>`
      let to_elem = document.getElementById("div_123");
      to_elem.scrollIntoView({ block: "center", behavior: "smooth" });
      init()
}
let main_vop_1 = `1. Гражданское право`
let main_vop_2 = '2. Банковское право'
let main_vop_3 = '3. Финансовое право'
let main_vop_4 = '4. Административное право'
let main_vop_5 = '5. Страховое право'
let main_vop_6 = '6. Наследственное право'
let main_vop_7 = '7. Уголовное право'
let main_vop_8 = '8. Жилищное право'

let vtor_vop_1_1 = '1. Регулирование гражданско-правовых отношений'
let vtor_vop_1_1_1 = '1. Отношения, регулируемые гражданским законодательством'
let vtor_vop_1_1_2 = '2. Основные начала гражданского законодательства'
let vtor_vop_1_1_3 = '3. Гражданское законодательство Республики Казахстан'
let vtor_vop_1_1_4 = '4. Действие гражданского законодательства во времени'
let vtor_vop_1_1_5 = '5. Применение гражданского законодательства по аналогии'
let vtor_vop_1_2 = '2. Субъекты гражданских прав'
let vtor_vop_1_2_1 = '1. Основное содержание правоспособности гражданина'
let vtor_vop_1_2_2 = '2. Недопустимость лишения и ограничения правоспособности и дееспособности'
let vtor_vop_1_2_3 = '3. Предпринимательская деятельность граждан'
let vtor_vop_1_2_4 = '4. Имущественная ответственность гражданина'
let vtor_vop_1_2_5 = '5. Дееспособность несовершеннолетних'
let vtor_vop_1_3 = '3. Объекты гражданских прав'
let vtor_vop_1_3_1 = '1. Виды объектов гражданских прав'
let vtor_vop_1_3_2 = '2. Оборотоспособность объектов гражданских прав'
let vtor_vop_1_3_3 = '3. Недвижимое и движимое имущество'
let vtor_vop_1_3_4 = '4. Государственная регистрация прав на недвижимое имущество'
let vtor_vop_1_3_5 = '5. Делимое и неделимое имущество'
let vtor_vop_1_4 = '4. Сделки'
let vtor_vop_1_4_1 = '1. Понятие сделки'
let vtor_vop_1_4_2 = '2. Односторонние сделки и договоры'
let vtor_vop_1_4_3 = '3. Правовое регулирование односторонних сделок'
let vtor_vop_1_4_4 = '4. Сделки, совершенные под условием'
let vtor_vop_1_4_5 = '5. Форма сделки'
let vtor_vop_1_5 = '5. Представительство и доверенность'
let vtor_vop_1_5_1 = '1. Представительство'
let vtor_vop_1_5_2 = '2. Представительство за недееспособных лиц'
let vtor_vop_1_5_3 = '3. Представительство без полномочия'
let vtor_vop_1_5_4 = '4. Коммерческое представительство'
let vtor_vop_1_5_5 = '5. Доверенность'

let vtor_vop_2_1 = `1. Общие положения`//glava
let vtor_vop_2_1_1 = `1. Банк, его статус и местонахождение`//stat_vop
let vtor_vop_2_1_2 = `2. Основные понятия, используемые в настоящем Законе`
let vtor_vop_2_1_3 = `3. Банковская система Республики Казахстан`
let vtor_vop_2_1_4 = `4. Банковское законодательство Республики Казахстан`
let vtor_vop_2_1_5 = `5. Организация, осуществляющая отдельные виды банковских операций`
let vtor_vop_2_2 = `2. Создание банка и осуществление банковской деятельности`//glava
let vtor_vop_2_2_1 = `1. Разрешение уполномоченного органа на открытие банка`//stat_vop
let vtor_vop_2_2_2 = `2. Организационно-правовая форма и наименование банка`
let vtor_vop_2_2_3 = `3. Уставный и собственный капитал банка`
let vtor_vop_2_2_4 = `4. Субординированный долг`
let vtor_vop_2_2_5 = `5. Бессрочные финансовые инструменты`
let vtor_vop_2_3 = `3. Банковская деятельность`
let vtor_vop_2_3_1 = `1 Банковская деятельность`
let vtor_vop_2_3_2 = `2. Общие требования к операциям, проводимым банками`
let vtor_vop_2_3_3 = `3. Уведомление об утверждении финансовых продуктов банком, организацией`
let vtor_vop_2_3_4 = `4. Банковская заемная операция`
let vtor_vop_2_3_5 = `5. Особенности ипотечного займа физического лица`
let vtor_vop_2_4 = `4. Аудит банков и их аффилированных лиц`
let vtor_vop_2_4_1 = `1. Аудит банков и их аффилированных лиц`
let vtor_vop_2_4_2 = `2. Понятие реструктуризации банка`
let vtor_vop_2_4_3 = `3. Общие условия реструктуризации банка `
let vtor_vop_2_4_4 = `4. Общие условия добровольной реорганизации банков (банковских холдингов)`
let vtor_vop_2_4_5 = `5. Обязательное гарантирование депозитов`
let vtor_vop_2_5 = `5. Отчетность крупных участников банка и банковских холдингов `
let vtor_vop_2_5_1 = `1. Публикация основных показателей деятельности банка и банковского холдинга`
let vtor_vop_2_5_2 = `2. Основание и принципы реструктуризации банка`
let vtor_vop_2_5_3 = `3. Особенности добровольной реорганизации банков`
let vtor_vop_2_5_4 = `4. Отказ в выдаче разрешения на добровольную реорганизацию банка и банковского холдинга`
let vtor_vop_2_5_5 = `5. Обязательное гарантирование депозитов`

let vtor_vop_3_1 = `1. Общие положения`
let vtor_vop_3_1_1 = `1. Законодательство Республики Казахстан о страховании`
let vtor_vop_3_1_2 = `2. Законодательство Республики Казахстан о контроле и надзоре финансового рынка`
let vtor_vop_3_1_3 = `3. Задачи государственного регулирования, контроля финансового рынка`
let vtor_vop_3_1_4 = `4. Запрет на неуполномоченную деятельность на финансовом рынке`
let vtor_vop_3_1_5 = `5. Пруденциальные нормативы и иные обязательные к соблюдению нормы и лимиты`
let vtor_vop_3_2 = `2. Статус, структура и органы уполномоченного органа`
let vtor_vop_3_2_1 = `1. Статус и правовая основа деятельности уполномоченного органа`
let vtor_vop_3_2_2 = `2. Структура и общая штатная численность уполномоченного органа`
let vtor_vop_3_2_3 = `3. Председатель уполномоченного органа`
let vtor_vop_3_2_4 = `4. Заместители Председателя уполномоченного органа`
let vtor_vop_3_2_5 = `5. Правление уполномоченного органа и его полномочия`
let vtor_vop_3_3 = `3. Задачи, функции и полномочия уполномоченного органа`
let vtor_vop_3_3_1 = `1. Задачи уполномоченного органа`
let vtor_vop_3_3_2 = `2. Особенности государственного регулирования, надзора за банковской деятельностью`
let vtor_vop_3_3_3 = `3. Особенности государственного регулирования, надзора за страховой деятельностью`
let vtor_vop_3_3_4 = `4. Особенности государственного регулирования, надзора над пенсионным фондом`
let vtor_vop_3_3_5 = `5. Полномочия в области аудита иной информации в сфере финансового рынка`
let vtor_vop_3_4 = `4 Порядок организации и осуществления контроля и надзора за финансовым рынком`
let vtor_vop_3_4_1 = `1. Контроль за финансовым рынком в области финансового законодательства`
let vtor_vop_3_4_2 = `2. Виды проверокю`
let vtor_vop_3_4_3 = `3. Общий порядок организации проверки на основе оценки степени риска`
let vtor_vop_3_4_4 = `4. Особенности проведения документальной проверки`
let vtor_vop_3_4_5 = `5. Иные вопросы проверок`
let vtor_vop_3_5 = `5. Заключительные положения`
let vtor_vop_3_5_1 = `1. Ответственность за нарушение, контроле финансовых организаций`
let vtor_vop_3_5_2 = `2. Реорганизация и упразднение уполномоченного органа`
let vtor_vop_3_5_3 = `3.Проверка деятельности`
let vtor_vop_3_5_4 = `4. Отпуска работников уполномоченного органа`
let vtor_vop_3_5_5 = `5. Гарантии и компенсации работникам уполномоченного органа при командировках`

let vtor_vop_4_1 = `1. Административное правонарушение`
let vtor_vop_4_1_1 = `1. Административное правонарушение`
let vtor_vop_4_1_2 = `2. Совершение административного правонарушения умышленно`
let vtor_vop_4_1_3 = `3. Административного правонарушения по неосторожности`
let vtor_vop_4_1_4 = ` `
let vtor_vop_4_1_5 = ` `
let vtor_vop_4_2 = `2. Административная ответственность`
let vtor_vop_4_2_1 = `1. Лица, подлежащие административной ответственности`
let vtor_vop_4_2_2 = `2. Невменяемость`
let vtor_vop_4_2_3 = `3. Административная ответственность должностных лиц`
let vtor_vop_4_2_4 = `4. Административная ответственность при фиксации правонарушения`
let vtor_vop_4_2_5 = `5. Административная ответственность военнослужащего и прокурора`
let vtor_vop_4_3 = `3 Административное взыскание`
let vtor_vop_4_3_1 = `1. Понятие и цели административного взыскания`
let vtor_vop_4_3_2 = `2. Виды административных взысканий`
let vtor_vop_4_3_3 = `3. Основные и дополнительные меры административных взысканий`
let vtor_vop_4_3_4 = `4. Предупреждение`
let vtor_vop_4_3_5 = `5. Административный штраф`
let vtor_vop_4_4 = `4. Административная ответственность несовершеннолетних`
let vtor_vop_4_4_1 = `1. Административная ответственность несовершеннолетних`
let vtor_vop_4_4_2 = `2. Особенности применения административных взысканий к несовершеннолетним`
let vtor_vop_4_4_3 = `3. Наложение административного взыскания на несовершеннолетнего`
let vtor_vop_4_4_4 = `4. Освобождение несовершеннолетни`
let vtor_vop_4_4_5 = `5. Меры воспитательного воздействия`
let vtor_vop_4_5 = `5. Административных правонарушений в области торговли и финансов`
let vtor_vop_4_5_1 = `1. Нарушение законодательства Республики Казахстан о защите прав потребителей`
let vtor_vop_4_5_2 = `2. Нарушение требований законодательства по реализации ювелирных и других изделий`
let vtor_vop_4_5_3 = `3. Нарушение порядка продажи специальных технических средств`
let vtor_vop_4_5_4 = `4. Нарушение законодательства о регулировании торговой деятельности`
let vtor_vop_4_5_5 = ` `

let vtor_vop_5_1 = `1. Общие положения`
let vtor_vop_5_1_1 = `1. Законодательство Республики Казахстан о страховании и страховой деятельности`
let vtor_vop_5_1_2 = `2. Отношения, регулируемые настоящим Законом`
let vtor_vop_5_1_3 = `3. Основные понятия, используемые в настоящем Законе`
let vtor_vop_5_1_4 = `4. Страхование и страховая деятельность`
let vtor_vop_5_1_5 = `5. Страхование иностранных физических и юридических лиц и лиц без гражданства`
let vtor_vop_5_2 = `2. Организация страховой деятельности`
let vtor_vop_5_2_1 = `1. Отрасли, классы и виды страхования `
let vtor_vop_5_2_2 = `2. Содержание классов страхования`
let vtor_vop_5_2_3 = `3. Совмещение отраслей и классов страховани`
let vtor_vop_5_2_4 = `4. Деятельность по перестрахованию `
let vtor_vop_5_2_5 = ` `
let vtor_vop_5_3 = `3. Страховой рынок`
let vtor_vop_5_3_1 = `1.Участники страхового рынка `
let vtor_vop_5_3_2 = `2.Деятельность страховой (перестраховочной) организации`
let vtor_vop_5_3_3 = `3.Общие условия осуществления страховой (перестраховочной) деятельности`
let vtor_vop_5_3_4 = `4.Деятельность по сострахованию и совместному перестрахованию`
let vtor_vop_5_3_5 = `5.Запрет на безлицензионную деятельность`
let vtor_vop_5_4 = `4. Страховое посредничество`
let vtor_vop_5_4_1 = `1.Создание страхового брокера`
let vtor_vop_5_4_2 = `2.Деятельность страхового брокера и требования, предъявляемые к ней`
let vtor_vop_5_4_3 = `3.Посредническая деятельность страхового агента и требования`
let vtor_vop_5_4_4 = ` `
let vtor_vop_5_4_5 = ` `
let vtor_vop_5_5 = `5. Актуарная деятельность и аудит`
let vtor_vop_5_5_1 = `1.Актуарная деятельность`
let vtor_vop_5_5_2 = `2.Аудит`
let vtor_vop_5_5_3 = ` `
let vtor_vop_5_5_4 = ` `
let vtor_vop_5_5_5 = ` `

let vtor_vop_6_1 = `1. Общие положения о наследовании`
let vtor_vop_6_1_1 = `1. Наследование`
let vtor_vop_6_1_2 = `2. Основания наследования`
let vtor_vop_6_1_3 = `3. Состав наследства`
let vtor_vop_6_1_4 = `4. Наследование имущества, являющегося общей совместной собственностью`
let vtor_vop_6_1_5 = `5. Открытие наследства`
let vtor_vop_6_2 = `2 Наследование по завещанию`
let vtor_vop_6_2_1 = `1. Общие положения`
let vtor_vop_6_2_2 = `2. Завещание с условием`
let vtor_vop_6_2_3 = `3. Подназначение наследников`
let vtor_vop_6_2_4 = `4. Наследование части имущества, оставшейся незавещанной`
let vtor_vop_6_2_5 = `5. Общие правила о форме завещания`
let vtor_vop_6_3 = `3. Наследование по закону`
let vtor_vop_6_3_1 = `1. Общие положения`
let vtor_vop_6_3_2 = `2. Первая очередь наследников по закону`
let vtor_vop_6_3_3 = `3. Вторая очередь наследников по закону`
let vtor_vop_6_3_4 = `4. Третья очередь наследников по закону`
let vtor_vop_6_3_5 = `5. Наследники последующих очередей`
let vtor_vop_6_4 = `4 Приобретение наследства`
let vtor_vop_6_4_1 = `1. Принятие наследства`
let vtor_vop_6_4_2 = `2. Способы принятия наследства`
let vtor_vop_6_4_3 = `3. Срок принятия наследства`
let vtor_vop_6_4_4 = `4. Принятие наследства по истечении установленного срока`
let vtor_vop_6_4_5 = `5. Переход права на принятие наследства (наследственная трансмиссия)`
let vtor_vop_6_5 = `5 Наследственные доли `
let vtor_vop_6_5_1 = `1. Преимущественное право отдельных наследников на имущество`
let vtor_vop_6_5_2 = `2. Приращение наследственных долей`
let vtor_vop_6_5_3 = `3. Расходы, подлежащие оплате за счет наследства`
let vtor_vop_6_5_4 = `4. Взыскание долгов наследодателя кредиторами`
let vtor_vop_6_5_5 = `5. Наследование в крестьянском или фермерском хозяйстве`

let vtor_vop_7_1 = `1. Уголовный закон`
let vtor_vop_7_1_1 = `1. Уголовное законодательство Республики Казахстан`
let vtor_vop_7_1_2 = `2. Задачи Уголовного кодекса`
let vtor_vop_7_1_3 = `3. Разъяснение некоторых понятий, содержащихся в настоящем Кодексе`
let vtor_vop_7_1_4 = `4. Основание уголовной ответственности`
let vtor_vop_7_1_5 = `5. Действие уголовного закона во времени`
let vtor_vop_7_2 = `2. Уголовным правонарушением`
let vtor_vop_7_2_1 = `1 Понятия преступления и уголовного проступка`
let vtor_vop_7_2_2 = `2 Категории преступлений`
let vtor_vop_7_2_3 = `3 Неоднократность уголовных правонарушений`
let vtor_vop_7_2_4 = `4 Совокупность уголовных правонарушений`
let vtor_vop_7_2_5 = `5 Рецидив преступлений, опасный рецидив преступлений`
let vtor_vop_7_3 = `3. Наказание`
let vtor_vop_7_3_1 = `1. Понятие и цели наказания `
let vtor_vop_7_3_2 = `2. Виды наказаний`
let vtor_vop_7_3_3 = `3. Штраф`
let vtor_vop_7_3_4 = `4. Исправительные работы`
let vtor_vop_7_3_5 = `5. Привлечение к общественным работам`
let vtor_vop_7_4 = `4. Назначение наказания`
let vtor_vop_7_4_1 = `1. Общие начала назначения наказания`
let vtor_vop_7_4_2 = `2. Обстоятельства, смягчающие уголовную ответственность и наказание`
let vtor_vop_7_4_3 = `3. Обстоятельства, отягчающие уголовную ответственность и наказание`
let vtor_vop_7_4_4 = `4. Назначение более мягкого наказания, чем предусмотрено уголовное правонарушение`
let vtor_vop_7_4_5 = `5. Назначение наказания за неоконченное преступление`
let vtor_vop_7_5 = `5. Освобождение от уголовной ответственности и наказания`
let vtor_vop_7_5_1 = `1. Освобождение от ответственности в связи с деятельным раскаянием`
let vtor_vop_7_5_2 = `2. Освобождение от ответственности при превышении пределов необходимой обороны`
let vtor_vop_7_5_3 = `3. Освобождение от ответственности при выполнении процессуального соглашения`
let vtor_vop_7_5_4 = `4. Освобождение от ответственности в связи с примирением`
let vtor_vop_7_5_5 = `5. Освобождение от ответственности в связи с изменением обстановки`

let vtor_vop_8_1 = `1. Общие положения `
let vtor_vop_8_1_1 = `1. Жилищное законодательство Республики Казахстан`
let vtor_vop_8_1_2 = `2. Основные понятия, используемые в настоящем Законе`
let vtor_vop_8_1_3 = `3. Жилищный фонд Республики Казахстан`
let vtor_vop_8_1_4 = `4. Использование квартир, нежилых помещений`
let vtor_vop_8_1_5 = `5. Управление объектом кондоминиума`
let vtor_vop_8_2 = `2. Приобретение права частной собственности на жилище`
let vtor_vop_8_2_1 = `1. Право на приобретение жилища`
let vtor_vop_8_2_2 = `2. Основания возникновения права собственности на жилище`
let vtor_vop_8_2_3 = `3. Приобретение нанимателем права собственности на занимаемое жилище`
let vtor_vop_8_2_4 = `4. Реализация права на получение жилищных сертификатов`
let vtor_vop_8_2_5 = `5 Предоставление жилища в собственность при сносе жилого дома`
let vtor_vop_8_3 = ` 3. Содержание права частной собственности на жилище`
let vtor_vop_8_3_1 = `1. Основные права и обязанности собственника жилища `
let vtor_vop_8_3_2 = `2. Право собственника жилища на земельный участок`
let vtor_vop_8_3_3 = `3. Члены семьи собственника жилища`
let vtor_vop_8_3_4 = `4. Основные права и обязанности членов семьи собственника жилища`
let vtor_vop_8_3_5 = ` `
let vtor_vop_8_4 = `4. Наем жилищ в частном жилищном фонде `
let vtor_vop_8_4_1 = `1. Сдача собственником жилища внаем другим лицам`
let vtor_vop_8_4_2 = `2. Условия найма жилища, в котором не проживает собственник`
let vtor_vop_8_4_3 = `3 Условия найма жилища, в котором постоянно проживает собственник`
let vtor_vop_8_4_4 = `4. Правовое положение поднанимателей и временных жильцов`
let vtor_vop_8_4_5 = `5. Выселение поднанимателей из временных жильцов в случае прекращения договора`
let vtor_vop_8_5 = `5. Прекращение права частной собственности на жилище `
let vtor_vop_8_5_1 = `1 Прекращение права собственности на жилище`
let vtor_vop_8_5_2 = `2. Принудительное прекращение права собственности на жилище`
let vtor_vop_8_5_3 = `3 Выселение из жилища членов семьи собственника и других жильцов`
let vtor_vop_8_5_4 = ` `
let vtor_vop_8_5_5 = ` `

let otvt_vop_1_1_1 = `1. Гражданским законодательством регулируются товарно-денежные и иные основанные на равенстве участников имущественные отношения, а также связанные с имущественными личные неимущественные отношения. Участниками регулируемых гражданским законодательством отношений являются граждане, юридические лица, государство, а также административно-территориальные единицы.<br>
2. Личные неимущественные отношения, не связанные с имущественными, регулируются гражданским законодательством, поскольку иное не предусмотрено законодательными актами либо не вытекает из существа личного неимущественного отношения.<br>
3. К семейным, трудовым отношениям и отношениям по использованию природных ресурсов и охране окружающей среды, отвечающим признакам, указанным в пункте 1 настоящей статьи, гражданское законодательство применяется в случаях, когда эти отношения не регулируются соответственно семейным, трудовым законодательством, законодательством об использовании природных ресурсов и охране окружающей среды.<br>
4. К имущественным отношениям, основанным на административном или ином властном подчинении одной стороны другой, в том числе к налоговым и другим бюджетным отношениям, гражданское законодательство не применяется, за исключением случаев, предусмотренных законодательными актами.`
let otvt_vop_1_1_2 = `1. Гражданское законодательство основывается на признании равенства участников регулируемых им отношений, неприкосновенности собственности, свободы договора, недопустимости произвольного вмешательства кого-либо в частные дела, необходимости беспрепятственного осуществления гражданских прав, обеспечения восстановления нарушенных прав, их судебной защиты.<br>
2. Граждане и юридические лица приобретают и осуществляют свои гражданские права, а также отказываются, если иное не установлено законодательными актами, от прав своей волей и в своем интересе. Они свободны в установлении своих прав и обязанностей на основе договора и в определении любых его условий, не противоречащих законодательству.<br>
3. Товары, услуги и деньги свободно перемещаются и обращаются на всей территории Республики Казахстан. Ограничения перемещения товаров и услуг вводятся в соответствии с законодательными актами, если это необходимо для обеспечения безопасности, защиты жизни и здоровья людей, охраны природы и культурных ценностей.<br>`
let otvt_vop_1_1_3 = `1. Гражданское законодательство Республики Казахстан основывается на Конституции Республики Казахстан и состоит из настоящего Кодекса, принятых в соответствии с ним иных законов Республики Казахстан, указов Президента Республики Казахстан, имеющих силу закона, постановлений Парламента, постановлений Сената и Мажилиса Парламента (законодательных актов), а также указов Президента Республики Казахстан, постановлений Правительства Республики Казахстан, регулирующих отношения, указанные в пунктах 1, 2 статьи 1 настоящего Кодекса.<br>
2. В случае противоречия норм гражданского права, содержащихся в актах законодательства Республики Казахстан, кроме тех, что указаны в пункте 3 статьи 1 настоящего Кодекса, положениям настоящего Кодекса применяются положения настоящего Кодекса. Нормы гражданского права, содержащиеся в законодательстве Республики Казахстан и противоречащие нормам настоящего Кодекса, могут применяться только после внесения в Кодекс соответствующих изменений.<br>
Нормы гражданского законодательства Республики Казахстан не могут противоречить основным началам гражданского законодательства Республики Казахстан.
3. Отношения, связанные с созданием, реорганизацией, банкротством и ликвидацией банков и хлебоприемных предприятий, контролем за банковской деятельностью и ее аудиторской проверкой, контролем за деятельностью хлебоприемных предприятий, лицензированием отдельных видов банковских операций, реструктуризацией банков, наступлением последствий лишения лицензий банков, осуществлением операций со складскими свидетельствами хлебоприемных предприятий, регулируются настоящим Кодексом в части, не противоречащей законодательным актам, регулирующим банковскую деятельность и деятельность хлебоприемных предприятий.<br>
Отношения между банками и их клиентами, а также отношения между клиентами через банки регулируются гражданским законодательством в порядке, установленном пунктом 2 настоящей статьи. 
4. Гражданские отношения могут регулироваться обычаями, в том числе обычаями делового оборота, если они не противоречат гражданскому законодательству, действующему на территории Республики Казахстан.<br>
5. Министерства и иные центральные исполнительные органы, местные представительные и исполнительные органы могут издавать акты, регулирующие гражданские отношения, в случаях и пределах, предусмотренных настоящим Кодексом и иными актами гражданского законодательства.<br>
6. Установленные настоящим Кодексом и иными законодательными актами Республики Казахстан права граждан и юридических лиц не могут ограничиваться актами органов государственного управления и местных представительных и исполнительных органов. Такие акты являются недействительными с момента их принятия и не должны применяться.<br>
7. Иностранные физические и юридические лица, а также лица без гражданства вправе приобретать такие же права и обязаны выполнять такие же обязанности, какие предусмотрены гражданским законодательством для граждан и юридических лиц Республики Казахстан, если законодательными актами не предусмотрено иное.<br>
8. Если международным договором, ратифицированным Республикой Казахстан, установлены иные правила, чем те, которые содержатся в гражданском законодательстве Республики Казахстан, применяются правила указанного договора. Международные договоры, ратифицированные Республикой Казахстан, к гражданским отношениям применяются непосредственно кроме случаев, когда из международного договора следует, что для его применения требуется издание закона.<br>`
let otvt_vop_1_1_4 = `1. Акты гражданского законодательства не имеют обратной силы и применяются к отношениям, возникшим после введения их в действие. Юридическая сила акта гражданского законодательства на отношения, возникшие до введения его в действие, распространяется в случаях, когда это прямо им предусмотрено.<br>
2. По отношениям, возникшим до введения в действие акта гражданского законодательства, он применяется к правам и обязанностям, возникшим после введения его в действие. Отношения сторон по договору, заключенному до введения в действие акта гражданского законодательства, регулируются в соответствии со статьей 383 настоящего Кодекса.<br>`
let otvt_vop_1_1_5 = `1. В случаях, когда предусмотренные пунктами 1 и 2 статьи 1 настоящего Кодекса отношения прямо не урегулированы законодательством или соглашением сторон и отсутствуют применимые к ним обычаи, к таким отношениям, поскольку это не противоречит их существу, применяются нормы гражданского законодательства, регулирующие сходные отношения (аналогия закона).<br>
2. При невозможности использования в указанных случаях аналогии закона права и обязанности сторон определяются, исходя из общих начал и смысла гражданского законодательства и требований добросовестности, разумности и справедливости (аналогия права).<br>`
let otvt_vop_1_2_1 = `Гражданин может иметь на праве собственности имущество, в том числе иностранную валюту, как в пределах Республики Казахстан, так и за ее границами, если иное не установлено Законом Республики Казахстан "О противодействии коррупции"; наследовать и завещать имущество; свободно передвигаться по территории республики и выбирать место жительства; свободно покидать пределы республики и возвращаться на ее территорию; заниматься любой не запрещенной законодательными актами деятельностью; создавать юридические лица самостоятельно или с другими гражданами и юридическими лицами; совершать любые не запрещенные законодательными актами сделки и участвовать в обязательствах; иметь право интеллектуальной собственности на изобретения, произведения науки, литературы и искусства, иные результаты интеллектуальной деятельности; требовать возмещения материального и морального вреда; иметь другие имущественные и личные неимущественные права.`
let otvt_vop_1_2_2 = `1. Никто не может быть ограничен в правоспособности и дееспособности иначе, как в случаях и порядке, предусмотренных законодательными актами.<br>
2. Несоблюдение установленных законодательными актами условий и порядка ограничения правоспособности и дееспособности граждан или их права заниматься предпринимательской либо иной деятельностью влечет недействительность акта государственного или иного органа, установившего соответствующее ограничение.<br>
3. Полный или частичный отказ гражданина от правоспособности или дееспособности и другие сделки, направленные на ограничение правоспособности или дееспособности, ничтожны, за исключением случаев, когда такие сделки допускаются законодательными актами.`
let otvt_vop_1_2_3 = `1. Граждане вправе заниматься предпринимательской деятельностью без образования юридического лица, за исключением случаев, предусмотренных настоящим Кодексом и иными законодательными актами.<br>
2. Государственная регистрация индивидуальных предпринимателей заключается в постановке на учет в качестве индивидуального предпринимателя.<br>
3. К предпринимательской деятельности граждан, осуществляемой без образования юридического лица, соответственно применяются правила настоящего Кодекса, которые регулируют деятельность юридических лиц, являющихся коммерческими организациями, если иное не вытекает из законодательства или существа правоотношения.<br>
4. Физические лица подлежат государственной регистрации в качестве индивидуального предпринимателя в соответствии с Предпринимательским кодексом Республики Казахстан.<br>
5. Если индивидуальный предприниматель осуществляет деятельность, подлежащую лицензированию, он обязан иметь лицензию на право осуществления такой деятельности.
Лицензия выдается в порядке, установленном законодательством Республики Казахстан о разрешениях и уведомлениях.
Правительство Республики Казахстан вправе устанавливать упрощенный порядок выдачи лицензий индивидуальным предпринимателям.`
let otvt_vop_1_2_4 = `1. Гражданин отвечает по своим обязательствам всем принадлежащим ему имуществом, за исключением имущества, на которое в соответствии с законодательными актами не может быть обращено взыскание.`
let otvt_vop_1_2_5 = `1. Несовершеннолетние в возрасте от четырнадцати до восемнадцати лет совершают сделки с согласия их законных представителей. Форма такого согласия должна соответствовать форме, которая установлена законодательством для сделки, совершаемой несовершеннолетним.<br>
2. Несовершеннолетние в возрасте от четырнадцати до восемнадцати лет вправе самостоятельно распоряжаться своим заработком, стипендией, иными доходами и созданными ими объектами права интеллектуальной собственности, а также совершать мелкие бытовые сделки.<br>
3. При наличии достаточных оснований суд может ограничить или лишить несовершеннолетнего права самостоятельного распоряжения своим заработком, стипендией, иными доходами и созданными им объектами права интеллектуальной собственности.<br>
4. Несовершеннолетние в возрасте от четырнадцати до восемнадцати лет самостоятельно несут ответственность по сделкам, совершенным ими в соответствии с правилами настоящей статьи, и несут ответственность за вред, причиненный их действиями, по правилам настоящего Кодекса.`
let otvt_vop_1_3_1 = `1. Объектами гражданских прав могут быть имущественные и личные неимущественные блага и права.<br>
2. К имущественным благам и правам (имуществу) относятся: вещи, деньги, в том числе иностранная валюта, финансовые инструменты, работы, услуги, объективированные результаты творческой интеллектуальной деятельности, фирменные наименования, товарные знаки и иные средства индивидуализации изделий, имущественные права, цифровые активы и другое имущество.<br>
2-1. К деньгам и правам (требованиям) по денежному обязательству (правам требования по уплате денег) применяется соответственно правовой режим вещей или имущественных прав (требований), если иное не предусмотрено настоящим Кодексом, иными законодательными актами Республики Казахстан или не вытекает из существа обязательства.<br>
3. К личным неимущественным благам и правам относятся: жизнь, здоровье, достоинство личности, честь, доброе имя, деловая репутация, неприкосновенность частной жизни, личная и семейная тайна, право на имя, право на авторство, право на неприкосновенность произведения и другие нематериальные блага и права.<br>`
let otvt_vop_1_3_2 = `1. Объекты гражданских прав могут свободно отчуждаться или переходить от одного лица к другому в порядке универсального правопреемства (наследование, реорганизация юридического лица) либо иным способом, если они не изъяты из оборота или не ограничены в обороте. <br>
2. Виды имущества, отчуждение которых не допускается (изъятые из оборота), должны быть прямо указаны в законах. <br>
3. Виды имущества, которые могут принадлежать лишь определенным участникам оборота либо приобретение или отчуждение которых допускается по специальному разрешению (ограниченно оборотоспособные), определяются законодательством.<br>
3-1. Понятие и виды цифровых активов, а также особенности оборота цифровых активов определяются законодательством Республики Казахстан, актами Международного финансового центра "Астана".<br>
4. Личные неимущественные блага и права неотчуждаемы и непередаваемы иным способом, за исключением случаев, установленных законодательными актами.`
let otvt_vop_1_3_3 = `1. К недвижимому имуществу (недвижимые вещи, недвижимость) относятся: земельные участки, здания, сооружения, многолетние насаждения и иное имущество, прочно связанное с землей, то есть объекты, перемещение которых без несоразмерного ущерба их назначению невозможно.
Квартиры и иные жилые помещения, а также нежилые помещения, находящиеся в составе объекта кондоминиума, признаются самостоятельными объектами (видами) недвижимости, если они находятся в индивидуальной (раздельной) собственности.<br>
2. К недвижимым вещам приравниваются также подлежащие государственной регистрации воздушные и морские суда, суда внутреннего водного плавания, суда плавания "река-море", космические объекты, линейная часть магистральных трубопроводов. Законодательными актами к недвижимым вещам может быть отнесено и иное имущество.
Нормы настоящего Кодекса и иных законодательных актов, регулирующих отношения, связанные с недвижимыми вещами, применяются к вещам, указанным в настоящем пункте, в случае, прямо предусмотренном законодательными актами Республики Казахстан.
3. Имущество, не относящееся к недвижимости, включая деньги и ценные бумаги, признаются движимым имуществом. Регистрация прав на движимые вещи не требуется, кроме случаев, указанных в законодательных актах.<br>`
let otvt_vop_1_3_4 = `1. Возникновение, изменение и прекращение прав (обременений прав) на недвижимое имущество подлежат государственной регистрации в случаях, предусмотренных настоящим Кодексом и Законом Республики Казахстан "О государственной регистрации прав на недвижимое имущество".
Иные объекты государственной регистрации, связанные с недвижимым имуществом, определяются Законом Республики Казахстан "О государственной регистрации прав на недвижимое имущество".<br>
2. Права (обременения прав) на недвижимое имущество возникают, изменяются и прекращаются с момента государственной регистрации, если иное не установлено настоящим Кодексом и Законом Республики Казахстан "О государственной регистрации прав на недвижимое имущество". Если в регистрации не будет отказано, моментом государственной регистрации признается момент подачи заявления, а при электронной регистрации – момент подтверждения возникновения, изменения или прекращения прав (обременений прав) регистрирующим органом путем отправки уведомления о произведенной регистрации.<br>
3. Орган, осуществляющий государственную регистрацию прав на недвижимое имущество, обязан по заявлению правообладателя удостоверить произведенную регистрацию совершением надписи на правоустанавливающем документе, представленном на регистрацию. В случаях, предусмотренных Законом Республики Казахстан "О государственной регистрации прав на недвижимое имущество", органом, осуществляющим регистрацию, выдается свидетельство о праве собственности (ином вещном праве) на недвижимое имущество.<br>
4. Государственная регистрация прав на недвижимое имущество является публичной. Орган, осуществляющий регистрацию, обязан предоставлять информацию о зарегистрированных правах на недвижимое имущество любому лицу с учетом ограничений, установленных Законом Республики Казахстан "О государственной регистрации прав на недвижимое имущество".<br>
5. Отказ в государственной регистрации права на недвижимое имущество либо необоснованное уклонение от регистрации могут быть обжалованы в порядке, установленном законами Республики Казахстан.<br>
6. Порядок государственной регистрации устанавливается в соответствии с настоящим Кодексом и Законом Республики Казахстан "О государственной регистрации прав на недвижимое имущество".<br>
7. Порядок государственной регистрации гражданских воздушных судов, морских судов, судов внутреннего водного плавания, судов плавания "река-море", космических объектов, как объектов, приравненных к недвижимости, регулируется законами Республики Казахстан в сфере использования воздушного пространства и деятельности авиации, торгового мореплавания, внутреннего водного транспорта, космической деятельности.<br>`
let otvt_vop_1_3_5 = `1. Имущество может быть делимым и неделимым.
Делимое имущество - это имущество, части которого в результате раздела не утрачивают своего назначения (функций). 
Неделимое имущество - это такое имущество, которое не может быть разделено без изменения его хозяйственного назначения (функций) или не подлежит разделу в силу предписания законодательного акта.<br>
2. Особенности неделимых вещей как объектов права определяются законодательством.<br>`
let otvt_vop_1_4_1 = `Сделками признаются действия граждан и юридических лиц, направленные на установление, изменение или прекращение гражданских прав и обязанностей.`
let otvt_vop_1_4_2 = `1. Сделки могут быть односторонними и двух- или многосторонними (договоры).<br>
2. Односторонней считается сделка, для совершения которой, в соответствии с законодательством или соглашением сторон, необходимо и достаточно выражения воли одной стороны.<br>
3. Для совершения договора необходимо выражение согласованной воли двух сторон (двусторонняя сделка) либо трех или более сторон (многосторонняя сделка). `
let otvt_vop_1_4_3 = `1. Односторонняя сделка создает обязанности для лица, совершившего сделку. Она может создавать обязанности для других лиц лишь в случаях, установленных законодательными актами либо соглашением с этими лицами.<br>
2. К односторонним сделкам соответственно применяются общие положения об обязательствах и о договорах, поскольку это не противоречит законодательству, природе и существу сделки.`
let otvt_vop_1_4_4 = `1. Сделка считается совершенной под отлагательным условием, если стороны поставили возникновение прав и обязанностей в зависимость от обстоятельства, относительно которого неизвестно, наступит оно или не наступит.<br>
2. Сделка считается совершенной под отменительным условием, если стороны поставили прекращение прав и обязанностей в зависимость от обстоятельства, относительно которого неизвестно, наступит оно или не наступит.<br>
3. Если наступлению условия недобросовестно воспрепятствовала сторона, которой наступление условия невыгодно, то условие признается наступившим. 
Если наступлению условия недобросовестно содействовала сторона, которой наступление условия выгодно, то условие признается ненаступившим.`
let otvt_vop_1_4_5 = `1. Сделки совершаются устно или в письменной форме (простой или нотариальной). <br>
2. Сделка, для которой законодательством или соглашением сторон не установлена письменная (простая либо нотариальная) или иная определенная форма, может быть совершена устно, в частности - все сделки, исполняемые при самом их совершении. Такая сделка считается совершенной и в том случае, когда из поведения лица явствует его воля совершить сделку. 
3. Сделка, подтвержденная выдачей жетона, билета или иного обычно принятого подтверждающего знака, признается заключенной в устной форме, если иное не установлено законодательством. <br>
4. Молчание признается выражением воли совершить сделку в случаях, предусмотренных законодательством или соглашением сторон. <br>
5. Сделки во исполнение договора, заключенного в письменной форме, могут по соглашению сторон совершаться устно, если это не противоречит законодательству.`
let otvt_vop_1_5_1 = `1. Сделка, совершенная одним лицом (представителем) от имени другого лица (представляемого) в силу полномочия, основанного на доверенности, законодательстве, решении суда либо административном акте, непосредственно создает, изменяет и прекращает гражданские права и обязанности представляемого.<br>
Полномочие может также явствовать из обстановки, в которой действует представитель (продавец в розничной торговле, кассир и т.п.). 
2. По сделке, совершенной представителем, права и обязанности возникают непосредственно у представляемого. <br>
3. Представитель не может совершать сделки от имени представляемого ни в отношении себя лично, ни в отношении другого лица, представителем которого он одновременно является.
Данное правило не распространяется на коммерческое представительство.<br>
4. Не являются представителями лица, действующие хотя и в чужих интересах, но от собственного имени (коммерческие посредники, душеприказчики при наследовании и т.п.), а также лица, уполномоченные на вступление в переговоры относительно возможных в будущем сделок. <br>
5. Не допускается совершение через представителя сделки, которая по своему характеру может быть совершена только лично, а также других сделок в случаях, предусмотренных законодательными актами. `
let otvt_vop_1_5_2 = `От имени недееспособных граждан сделки совершают их законные представители. `
let otvt_vop_1_5_3 = `Сделка, совершенная от имени другого лица лицом, не уполномоченным на совершение сделки, или с превышением полномочия, создает, изменяет и прекращает гражданские права и обязанности для представляемого лишь в случае последующего одобрения им этой сделки. 
Последующее одобрение представляемым делает сделку действительной с момента ее совершения. `
let otvt_vop_1_5_4 = `1. Лицо, постоянно и самостоятельно представительствующее от имени предпринимателей при заключении ими договоров (коммерческий представитель), действует на основе письменного договора, содержащего указания на полномочия представителя, а при отсутствии таких указаний - также доверенности. 
2. Коммерческий представитель может одновременно представлять интересы разных сторон договора, заключаемого с его участием. При этом он обязан исполнять данные ему поручения с заботливостью обычного предпринимателя. 
3. Коммерческий представитель вправе требовать уплаты обусловленного вознаграждения и понесенных им при исполнении поручения издержек от сторон договора в равных долях, если иное не предусмотрено соглашением между ними. 
4. Коммерческий представитель обязан сохранять в тайне ставшие ему известными сведения о торговых сделках и после исполнения данного ему поручения. 
5. Особенности коммерческого представительства в отдельных сферах предпринимательской деятельности устанавливаются законодательством.`
let otvt_vop_1_5_5 = `1. Доверенностью признается письменное уполномочие одного лица (доверителя) для представительства от его имени, выдаваемое им другому лицу (поверенному). <br>
2. Должна быть нотариально заверена доверенность на управление имуществом и на совершение сделок, требующих нотариального удостоверения, если иное не установлено законодательными актами. <br>
3. К нотариально удостоверенным доверенностям приравниваются: <br>
1) доверенности военнослужащих и других лиц, находящихся на излечении в госпиталях, санаториях и других военно-лечебных учреждениях, удостоверенные начальниками, заместителями по медицинской части, старшими и дежурными врачами этих госпиталей, санаториев и других военно-лечебных учреждений; <br>
2) доверенности военнослужащих, а в пунктах дислокации воинских частей, соединений, учреждений и военно-учебных заведений, где нет государственных нотариальных контор и других органов, совершающих нотариальные действия, также доверенности рабочих и служащих, членов их семей и членов семей военнослужащих, удостоверенные командирами (начальниками) этих частей, соединений, учреждений, заведений; <br>
3) доверенности лиц, находящихся в местах лишения свободы, удостоверенные начальниками мест лишения свободы; <br>
4) доверенности совершеннолетних дееспособных граждан, находящихся в учреждениях социальной защиты населения, удостоверенные руководителем этого учреждения или соответствующего органа социальной защиты населения; <br>
5) доверенности лиц, находящихся в следственных изоляторах, удостоверенные начальниками следственных изоляторов. <br>
4. Доверенность на получение корреспонденции, в том числе денежной и посылочной, на получение заработной платы и иных выплат от граждан и юридических лиц может быть удостоверена местными исполнительными органами городов республиканского значения, столицы, районов, городов областного значения, акимами города районного значения, поселка, села, где проживает доверитель, организацией, в которой он работает или учится, жилищно-эксплуатационной организацией по месту жительства, администрацией стационарного лечебного учреждения, в котором он находится на излечении, а также командованием соответствующих воинских частей, когда доверенность выдается военнослужащим. Доверенность, посылаемая по телеграфу, а также по другим видам связи, когда отправку документа осуществляет работник связи, удостоверяется органами связи. <br>
5. Третьи лица вправе считать подлинной выданную для совершения действий в их отношении доверенность, направленную доверителем поверенному по факсимильной и иной связи, без посредства официальных органов связи. <br>
6. Доверенность от имени юридического лица выдается за подписью его руководителя или иного лица, уполномоченного на это его учредительными документами, и скрепляется печатью этой организации, если данное лицо в соответствии с законодательством Республики Казахстан должно иметь печать. <br>
7. Доверенность от имени государственного органа, коммерческой и некоммерческой организации на получение или выдачу денег и других имущественных ценностей должна быть подписана также главным (старшим) бухгалтером этой организации. <br>
8. Порядок выдачи и форма доверенностей на совершение операций в банке и доверенностей на совершение сделок в области торговли могут определяться специальными правилами.`

let otvt_vop_2_1_1 = `1. Банк - юридическое лицо, являющееся коммерческой организацией, которое в соответствии с настоящим Законом правомочно осуществлять банковскую деятельность.<br>
2. Официальный статус банка определяется государственной регистрацией (перерегистрацией) юридического лица в качестве банка в Государственной корпорации "Правительство для граждан" (далее – Корпорация) и наличием лицензии уполномоченного органа по регулированию, контролю и надзору финансового рынка и финансовых организаций (далее – уполномоченный орган) на проведение банковских операций.<br>
3. Ни одно юридическое лицо, не имеющее официального статуса банка, не может именоваться "банком" или характеризовать себя как занимающееся банковской деятельностью.<br>
4. Местом нахождения банка признается место нахождения (почтовый адрес) его Правления.<br>`
let otvt_vop_2_1_2 = `В настоящем Законе используются следующие основные понятия:
1) контроль - возможность определять решения юридического лица, возникающая при наличии одного из следующих условий: 
1.прямое или косвенное владение одним лицом самостоятельно либо совместно с одним или несколькими лицами более пятьюдесятью процентами долей участия в уставном капитале либо размещенных (за вычетом привилегированных и выкупленных обществом) акций юридического лица либо наличие возможности самостоятельно голосовать более пятьюдесятью процентами акций юридического лица;<br>
2.наличие возможности у одного лица самостоятельно избирать не менее половины состава органа управления или исполнительного органа юридического лица;<br>
3.включение финансовой отчетности юридического лица, за исключением финансовой отчетности специальной финансовой компании, созданной в соответствии с законодательством Республики Казахстан о проектном финансировании и секьюритизации, в финансовую отчетность юридического лица в соответствии с аудиторским отчетом;<br>
      наличие возможности одного лица самостоятельно либо совместно с одним или несколькими лицами определять решения юридического лица в силу договора (подтверждающих документов) или иным образом в случаях, предусмотренных нормативным правовым актом уполномоченного органа; 
2) косвенное владение (голосование) акциями банка - возможность определять решения банка, крупного участника банка, банковского холдинга или лиц, совместно являющихся крупным участником банка, банковским холдингом, через владение акциями (долями участия в уставном капитале) юридических лиц;<br>
2-1) межбанковский клиринг - сборка, сверка, сортировка и подтверждение платежей, а также проведение их взаимозачета и определение чистых позиций участников клиринга - банков и организаций, осуществляющих отдельные виды банковских операций;<br>
3) банковский конгломерат – группа юридических лиц, состоящая из банковского холдинга (при наличии) и банка, а также дочерних организаций банковского холдинга и (или) дочерних организаций банка, и (или) организаций, в которых банковский холдинг и (или) его дочерние организации, и (или) банк имеют значительное участие в капитале.<br>
В состав банковского конгломерата не входят национальный управляющий холдинг, банковский холдинг-нерезидент Республики Казахстан, а также дочерние организации и организации, в которых банковский холдинг-нерезидент Республики Казахстан имеет значительное участие в капитале, являющиеся нерезидентами Республики Казахстан;<br>
3-1) субординированный долг банка – необеспеченное обязательство банка по выпущенным облигациям или полученному займу, соответствующее условиям, предусмотренным статьей 16-1 настоящего Закона;<br>
3-2) информационная система банка или организации, осуществляющей отдельные виды банковских операций (далее – информационная система), – система, предназначенная для хранения, обработки, поиска, распространения, передачи и предоставления информации с применением аппаратно-программного комплекса, посредством которой предоставляются банковские и иные услуги; 
<br>
4) банковский холдинг – юридическое лицо (за исключением случаев, когда таким владельцем является государство или национальный управляющий холдинг, организация, специализирующаяся на улучшении качества кредитных портфелей банков второго уровня, дочерние организации Национального Банка Республики Казахстан, а также случаев, предусмотренных настоящим Законом), которое в соответствии с письменным согласием уполномоченного органа может владеть прямо или косвенно двадцатью пятью или более процентами размещенных (за вычетом привилегированных и выкупленных банком) акций банка или иметь возможность:<br>
голосовать прямо или косвенно двадцатью пятью или более процентами голосующих акций банка; 
определять решения, принимаемые банком, в силу договора либо иным образом или иметь контроль;
5) регуляторный собственный капитал (далее - собственный капитал) банка - сумма капитала за вычетом инвестиций банка;<br>
6) крупный участник банка – физическое или юридическое лицо (за исключением случаев, когда таким владельцем является государство или национальный управляющий холдинг, организация, специализирующаяся на улучшении качества кредитных портфелей банков второго уровня, дочерние организации Национального Банка Республики Казахстан, а также случаев, предусмотренных настоящим Законом), которое в соответствии с письменным согласием уполномоченного органа может владеть прямо или косвенно десятью или более процентами размещенных (за вычетом привилегированных и выкупленных банком) акций банка или иметь возможность:
голосовать прямо или косвенно десятью или более процентами голосующих акций банка;
оказывать влияние на принимаемые банком решения в силу договора либо иным образом в порядке, определяемом нормативным правовым актом уполномоченного органа;<br>
7) родительская организация - юридическое лицо, которое имеет контроль над другим юридическим лицом;<br>
8) депозит - деньги, передаваемые одним лицом (депозитором) другому лицу - банку, в том числе Национальному Банку Республики Казахстан и Национальному оператору почты, на условиях их возврата в номинальном выражении (за исключением инвестиционного депозита в исламском банке) независимо от того, должны ли они быть возвращены по первому требованию или через какой-либо срок, полностью или по частям с заранее оговоренной надбавкой либо без таковой непосредственно депозитору либо переданы по поручению третьим лицам;<br>`
let otvt_vop_2_1_3 = `1.Республика Казахстан имеет двухуровневую банковскую систему.<br>
2.Национальный Банк Республики Казахстан является центральным банком государства и представляет собой верхний (первый) уровень банковской системы.<br>
Задачи, принципы деятельности, правовой статус и полномочия Национального Банка Республики Казахстан определяются Законом Республики Казахстан "О Национальном Банке Республики Казахстан" и другими законами Республики Казахстан.
Национальный Банк Республики Казахстан осуществляет регулирование, а также наряду со своим ведомством контроль и надзор по отдельным вопросам банковской деятельности в пределах своей компетенции и способствует созданию общих условий для функционирования банков и организаций, осуществляющих отдельные виды банковских операций.
Регулирующие, контрольные и надзорные функции Национального Банка Республики Казахстан в пределах компетенции в отношении банков и организаций, осуществляющих отдельные виды банковских операций, направлены на поддержание стабильности денежно-кредитной системы Республики Казахстан, защиту интересов кредиторов банков, их вкладчиков и клиентов.
3. Все иные банки представляют собой нижний (второй) уровень банковской системы за исключением Банка Развития Казахстана, имеющего особый правовой статус, определяемый законодательным актом Республики Казахстан.<br>
5. Банк с иностранным участием - банк второго уровня, более одной трети размещенных акций которого находятся во владении, собственности и/или управлении:<br>
а) нерезидентов Республики Казахстан; 
б) юридических лиц - резидентов Республики Казахстан, более одной трети размещенных акций или долей участия в уставных капиталах которых находятся во владении, собственности и/или управлении нерезидентов Республики Казахстан либо аналогичных им юридических лиц - резидентов Республики Казахстан; 
в) резидентов Республики Казахстан, являющихся распорядителями средств (доверенными лицами) нерезидентов Республики Казахстан либо юридических лиц, указанных в подпункте б) настоящего пункта. 
5-1. Исламский банк - банк второго уровня, осуществляющий банковскую деятельность, предусмотренную главой 4-1 настоящего Закона, на основании лицензии уполномоченного органа.<br>
Исламский банк не является участником системы обязательного гарантирования депозитов, и депозиты в исламском банке не гарантируются системой обязательного гарантирования депозитов. Исламские банки вправе создать некоммерческую организацию в организационно-правовой форме акционерного общества, гарантирующую возврат депозитов, привлеченных исламскими банками.
Особенности создания и деятельности исламского банка установлены главой 4-1 настоящего Закона. 
6. Межгосударственный банк - банк, созданный и действующий на основании международного договора (соглашения), учредителями которого являются Правительство Республики Казахстан (или уполномоченный им государственный орган) и правительство (правительства) государства (государств), подписавшее данный договор (соглашение).<br>
7. Создание в Республике Казахстан специализированных отраслевых банков с участием государства, за исключением акционерного общества "Жилищный строительный сберегательный банк Казахстана", не допускается<br>`
let otvt_vop_2_1_4 = `1. Банковское законодательство Республики Казахстан основывается на Конституции Республики Казахстан, состоит из настоящего Закона и иных нормативных правовых актов Республики Казахстан.<br>
2. Если международным договором, ратифицированным Республикой Казахстан, установлены иные правила, чем те, которые предусмотрены настоящим Законом, то применяются правила международного договора.<br>`
let otvt_vop_2_1_5 = `Если иное не установлено настоящим Законом, организацией, осуществляющей отдельные виды банковских операций, признается юридическое лицо, не являющееся банком, которое на основании лицензии уполномоченного органа или Национального Банка Республики Казахстан либо в соответствии с законами Республики Казахстан правомочно проводить отдельные виды банковских операций, предусмотренных настоящим Законом.`
let otvt_vop_2_2_1 = `1. Порядок выдачи разрешения на открытие банка определяются банковским законодательством Республики Казахстан. 
Порядок выдачи разрешения на добровольную реорганизацию микрофинансовой организации в форме конвертации в банк определяется законодательством Республики Казахстан о микрофинансовой деятельности.<br>
2. Разрешение на открытие банка имеет юридическую силу до принятия уполномоченным органом решения о выдаче банку лицензии на проведение банковской операции.<br>
3. Выданное разрешение на открытие банка считается отмененным в случаях:<br>
1) принятия банком решения о добровольном прекращении своей деятельности путем реорганизации или ликвидации;<br>
2) принятия судом решения о прекращении деятельности банка;<br>
3) непрохождения в Корпорации государственной регистрации юридического лица в качестве банка в течение двух месяцев со дня выдачи разрешения на открытие банка;<br>
4) неполучения лицензии на проведение банковских или иных операций в течение одного года со дня выдачи разрешения на открытие банка.<br>
В случае, предусмотренном подпунктом 3,части первой настоящего пункта, ранее выданные разрешения на создание или приобретение дочерней организации, значительное участие в капитале организаций и согласия на приобретение статуса крупного участника банка, банковского холдинга считаются отмененными.
4. Банк вправе добровольно возвратить выданное ему разрешение на открытие банка и перерегистрироваться в установленном законодательством порядке.<br>`
let otvt_vop_2_2_2 = `1.Банки создаются в форме акционерных обществ.<br>
1-1. Банк использует в качестве своего наименования то, которое записано в его уставе.<br>
Наименование банка должно содержать слово "банк" или производное от него слово. 
2. Всем банкам, кроме Национального Банка Республики Казахстан, запрещается использовать в своем наименовании слова "национальный", "центральный" в полном или сокращенном виде на любом языке.<br>
3. Всем банкам запрещается использовать в своем наименовании слово "государственный" в полном или сокращенном виде на любом языке.<br>
3-1. Наименование исламского банка должно содержать словосочетание "исламский банк".<br>
4. Не допускается использование в качестве наименования обозначений, тождественных или сходных до степени его смешения с наименованием ранее созданных банков, в том числе банков - нерезидентов Республики Казахстан, за исключением дочерних банков.<br>
Дочерние банки в своем наименовании обязаны использовать наименование родительских банков.
Требование, предусмотренное частью второй настоящего пункта, не распространяется на дочерние банки, в отношении которых была проведена реструктуризация в соответствии с настоящим Законом, а также на дочерние банки, осуществившие операцию, предусмотренную статьей 61-4 настоящего Закона.`
let otvt_vop_2_2_3 = `1. Уставный капитал банка формируется в национальной валюте Республики Казахстан за счет размещения акций, за исключением случаев, установленных пунктом 2 настоящей статьи.<br>
2. Акции банка при размещении должны быть оплачены исключительно деньгами. Настоящее требование не распространяется на банки в случаях:<br>
1) размещения акций банка среди кредиторов банка и их оплаты путем зачета любого права (требования) по денежному обязательству банка перед соответствующим кредитором, при проведении банком реструктуризации в случаях, предусмотренных настоящим Законом и иными законами Республики Казахстан;<br>
1-1) конвертирования ценных бумаг и иных денежных обязательств банка в простые акции банка в случае применения меры по урегулированию неплатежеспособного банка на основании и в порядке, предусмотренных статьей 61-10 настоящего Закона;<br>
2) конвертирования ценных бумаг в акции банка на основании проспекта выпуска эмиссионных ценных бумаг, конвертируемых в акции банка;<br>
2-1) обмена размещенных акций банка одного вида на акции данного банка другого вида на основании устава банка и его проспекта выпуска акций;<br>
3) оплаты акций банка при реорганизации, осуществляемой в порядке, установленном ЗакономРеспублики Казахстан "Об акционерных обществах";<br>
4) оплаты акций банка государственными ценными бумагами Республики Казахстан в случае, предусмотренном статьей 17-2 настоящего Закона.<br>
При размещении акций банка в случаях, предусмотренных
настоящим пунктом, проведение оценки не требуется.`
let otvt_vop_2_2_4 = `Условиями отнесения необеспеченного обязательства к субординированному долгу является одновременное наличие следующих условий: 
1) срок, на который выпущено либо получено необеспеченное обязательство, составляет не менее пяти лет;<br>
2) кредиторы не могут предъявить требование о досрочном погашении либо исполнении необеспеченного обязательства;<br>
3) необеспеченное обязательство может быть досрочно погашено либо исполнено по инициативе банка при условии, что данное не приведет к снижению пруденциальных нормативов ниже значений, установленных нормативным правовым актом уполномоченного органа;<br>
4) при ликвидации банка необеспеченное обязательство удовлетворяется в десятой очереди, определенной статьей 74-2 настоящего Закона.<br>`
let otvt_vop_2_2_5 = `Условиями отнесения необеспеченного обязательства к бессрочным финансовым инструментам является одновременное наличие следующих условий:
1) срок, на который выпущено либо получено необеспеченное обязательство, составляет не менее пятидесяти лет;<br>
2) кредиторы не могут предъявить требование о досрочном погашении либо исполнении необеспеченного обязательства;<br>
 3) необеспеченное обязательство может быть досрочно погашено либо исполнено по инициативе банка при условии, что данное не приведет к снижению пруденциальных нормативов ниже значений, установленных нормативным правовым актом уполномоченного органа;<br>
4) при ликвидации банка необеспеченное обязательство удовлетворяется в десятой очереди, определенной статьей 74-2 настоящего Закона, после требований по субординированному долгу.<br>`
let otvt_vop_2_3_1 = `1Банковской деятельностью является осуществление банками банковских и иных операций, установленных настоящей статьей.<br>
2. К банковским операциям относятся:<br>
1) прием депозитов, открытие и ведение банковских счетов юридических лиц;<br>
2) прием депозитов, открытие и ведение банковских счетов физических лиц;<br>
3) открытие и ведение корреспондентских счетов банков и организаций, осуществляющих отдельные виды банковских операций;<br>
4) открытие и ведение банками металлических счетов физических и юридических лиц, на которых отражается физическое количество аффинированных драгоценных металлов и монет из драгоценных металлов, принадлежащих данному лицу;<br>
5) кассовые операции: прием и выдача банками и Национальным оператором почты наличных денег, включая их размен, обмен, пересчет, сортировку, упаковку и хранение;<br>
6) переводные операции: выполнение поручений физических и юридических лиц по платежам и переводам денег. Лицензия на осуществление переводной операции выдается банкам и юридическим лицам, указанным в пункте 6-1 настоящей статьи;<br>
7) учетные операции: учет (дисконт) векселей и иных долговых обязательств физических и юридических лиц;<br>
8) банковские заемные операции: предоставление банком, ипотечной организацией, организацией, не являющейся банком, осуществляющей брокерскую и (или) дилерскую деятельность на рынке ценных бумаг, или организациями, осуществляющими кредитование субъектов агропромышленного комплекса, сто процентов голосующих акций которых прямо или косвенно принадлежат национальному управляющему холдингу, кредитов в денежной форме на условиях платности, срочности и возвратности;<br>
9) обменные операции с иностранной валютой, включая обменные операции с наличной иностранной валютой;<br>`
let otvt_vop_2_3_2 = `1. Банки вправе осуществлять банковскую деятельность только при наличии правил, определяющих общие условия проведения операций, и внутренних правил.<br>
1-1. Исключен Законом РК от 29.03.2016 № 479-V(вводится в действие по истечении двадцати одного календарного дня после дня его первого официального опубликования).<br>
2.Правила об общих условиях проведения операций должны быть утверждены советом директоров банка и содержать следующие сведения и процедуры:<br
1) предельные суммы и сроки принимаемых депозитов и предоставляемых кредитов;<br>
2) предельные величины ставок вознаграждения по депозитам и кредитам;<br>
3) условия выплаты вознаграждения по депозитам и кредитам;<br>
4) требования к принимаемому банком обеспечению;<br>
5) предельные величины ставок и тарифов на проведение банковских операций;<br>
6) предельные сроки принятия решения о предоставлении банковских услуг;<br>
7) порядок рассмотрения обращений клиентов, возникающих в процессе предоставления банковских услуг;<br>
8) права и обязанности банка и его клиента, их ответственность;<br>
9) права и обязанности исламского банка и его клиента, условия проведения банковских операций исламского банка и связанные с ними риски;<br>
10) положение о порядке работы с клиентами;<br>
11) иные условия, требования и ограничения, которые совет директоров банка считает необходимым включить в общие условия проведения операций.<br>Правила об общих условиях проведения операций должны соответствовать порядку предоставления банковских услуг и рассмотрения банками, организациями, осуществляющими отдельные виды банковских операций, обращений клиентов, возникающих в процессе предоставления банковских услуг, определяемому нормативным правовым актом уполномоченного органа.. Правила об общих условиях проведения операций исламского банка утверждаются советом директоров исламского банка с учетом требования, предусмотренного пунктом 3 статьи 52-2 настоящего Закона.`
let otvt_vop_2_3_3 = `Банк, организация, осуществляющая отдельные виды банковских операций, уведомляют уполномоченный орган об утверждении финансовых продуктов органом банка, организации, осуществляющей отдельные виды банковских операций, уполномоченным на утверждение финансовых продуктов, в течение десяти рабочих дней со дня их утверждения.
Перечень финансовых продуктов, об утверждении которых банк, организация, осуществляющая отдельные виды банковских операций, уведомляют уполномоченный орган, порядок уведомления уполномоченного органа об утверждении финансовых продуктов банком, организацией, осуществляющей отдельные виды банковских операций, а также перечень документов, прилагаемых к уведомлению, определяются нормативными правовым`
let otvt_vop_2_3_4 = `1. Информация о договорах банковского займа, осуществления лизинговой, факторинговой, форфейтинговой операций, учета векселей, выпуска гарантий, поручительств, аккредитивов, заключенных банком, организацией, осуществляющей отдельные виды банковских операций, подлежит в обязательном порядке предоставлению в кредитное бюро с государственным участием на условиях, определенных законодательством Республики Казахстан о кредитных бюро и формировании кредитных историй.<br>
2. Порядок заключения договора банковского займа, в том числе требования к содержанию, оформлению, обязательным условиям договора банковского займа, формы графика погашения займа и памятки для заемщика – физического лица, утверждается нормативным правовым актом уполномоченного органа с учетом требований, установленных гражданским законодательством Республики Казахстан.
2-1. Исключен Законом РК от 03.07.2019 № 262-VI(вводится в действие с 01.01.2020).<br>
3.Банк, организация, осуществляющая отдельные виды банковских операций, не вправе изменять условия договора банковского займа в одностороннем порядке, за исключением случаев их улучшения для заемщика.<br>
Под улучшением условий договора банковского займа для заемщика для целей настоящего пункта понимаются:
•изменение в сторону уменьшения или полная отмена комиссий и иных платежей за оказание услуг, связанных с обслуживанием банковского займа;
•изменение в сторону уменьшения или полная отмена неустойки (штрафа, пени);
•изменение в сторону уменьшения ставки вознаграждения по договору банковского займа;
•отсрочка и (или) рассрочка платежей по договору банковского займа;
•изменение в сторону уменьшения денежного обязательства по ипотечному займу, выданному в иностранной валюте, при замене иностранной валюты займа на национальную валюту Республики Казахстан.
В договоре банковского займа может быть предусмотрен дополнительный перечень улучшающих условий для заемщика.
В случае применения банком, организацией, осуществляющей отдельные виды банковских операций, улучшающих условий заемщик уведомляется об изменении условия договора банковского займа в порядке, предусмотренном договором банковского займа, за исключением случая, предусмотренного абзацем шестым части второй настоящего пункта.
Заемщик вправе в течение четырнадцати календарных дней с даты получения уведомления отказаться в порядке, предусмотренном в договоре банковского займа, от примененных банком, организацией, осуществляющей отдельные виды банковских операций, улучшающих условий.
В случае применения банком, организацией, осуществляющей отдельные виды банковских операций, улучшающего условия, предусмотренного абзацем шестым части второй настоящего пункта, в целях реализации Программы рефинансирования ипотечных жилищных займов (ипотечных займов), утвержденной Национальным Банком Республики Казахстан, публикуется объявление о таком условии. Объявление публикуется в периодических печатных изданиях, распространяемых на всей территории Республики Казахстан, на казахском и русском языках. Отсутствие письменного возражения от заемщика и (или) залогодателя в течение тридцати календарных дней со дня публикации объявления рассматривается как согласие заемщика и (или) залогодателя на применение улучшающего условия, предусмотренного абзацем шестым части второй настоящего пункта.`
let otvt_vop_2_3_5 = `1. До заключения договора ипотечного займа с физическим лицом, не связанного с предпринимательской деятельностью, банк, организация, осуществляющая отдельные виды банковских операций, обязаны осуществить всестороннюю, полную и качественную оценку кредитоспособности (платежеспособности) заемщика в соответствии с внутренними правилами банка, организации, осуществляющей отдельные виды банковских операций (далее – надлежащая оценка кредитоспособности заемщика).<br>
Для целей настоящей статьи надлежащей оценкой кредитоспособности заемщика признаются мероприятия банка, организации, осуществляющей отдельные виды банковских операций, по определению:
1) возможности исполнения обязательств заемщиком по договору ипотечного займа физического лица, не связанного с предпринимательской деятельностью, подтвержденной одним из следующих документов по усмотрению банка, организации, осуществляющей отдельные виды банковских операций:<br>
•выпиской единого накопительного пенсионного фонда с индивидуального пенсионного счета за последние шесть месяцев;
•справкой о доходах с места работы за последние шесть месяцев;
•налоговой декларацией по индивидуальному подоходному налогу заемщика – физического лица за последний налоговый период;
•иными документами, отражающими наличие возможности исполнения обязательств заемщика по договору ипотечного займа физического лица, не связанного с предпринимательской деятельностью, в соответствии с внутренними документами и процедурами банка, организации, осуществляющей отдельные виды банковских операций;
2) наличия либо отсутствия кредитной истории заемщика за последние шесть месяцев;<br>
3) наличия либо отсутствия задолженности по налогам и другим обязательным платежам в бюджет;<br>
4) наличия либо отсутствия задолженности, отраженной в кредитном отчете, перед третьими лицами.<br>
Надлежащая оценка кредитоспособности заемщика в совокупности со сведениями по заемщику учитывает сведения по физическому лицу (созаемщику), выступающему по договору ипотечного займа физического лица, не связанного с предпринимательской деятельностью, в качестве солидарно ответственного за выполнение обязательств по возврату займа.
Банк, организация, осуществляющая отдельные виды банковских операций, не несут ответственность за представление заемщиком (созаемщиком) недостоверной информации для осуществления банком, организацией, осуществляющей отдельные виды банковских операций, надлежащей оценки кредитоспособности заемщика, предусмотренной настоящим пунктом.`
let otvt_vop_2_4_1 = `1.Аудит банка производится аудиторской организацией, правомочной на проведение аудита в соответствии с законодательством об аудиторской деятельности и соответствующей требованиям пункта 4 статьи 19 настоящего Закона.<br>
1-1. Проведение аудита по итогам финансового года обязательно для банков (за исключением банка, лишенного лицензии на проведение всех банковских операций или находящегося в процессе принудительной ликвидации), организаций, в которых банк является крупным участником, банковских холдингов, копии отчета о котором и рекомендации аудиторской организации должны быть представлены банками, банковскими холдингами в течение тридцати календарных дней со дня получения данных документов или их представления банкам, банковским холдингам.<br>
Консолидированная годовая финансовая отчетность банка и банковского холдинга должна быть заверена аудиторской организацией, правомочной на проведение аудита банков.
Аудит банковского холдинга и банка, в котором банковский холдинг имеет крупное участие, осуществляется одной и той же аудиторской организацией. Аудит организаций – резидентов Республики Казахстан, в которых банк является крупным участником, осуществляется одной и той же аудиторской организацией.
1-2. Исключен Законом РК от 28.12.2011 № 524-IV(вводится в действие по истечении десяти календарных дней после его первого официального опубликования).<br>
1-3. Банковский холдинг, являющийся нерезидентом Республики Казахстан, представляет в уполномоченный орган копию аудиторского отчета и рекомендации аудиторской организации на казахском или русском языке.<br>
2. (Исключен Законом РК от 5 мая 2006 года N 139(порядок введения в действие см. ст.2 Закона РК N 139).<br>
3. Аудит банков проводится с целью установления:<br>
своевременности, полноты и точности отражения проведенных банковских операций в учете и отчетности; 
соответствия проведенных банковских операций требованиям настоящего Закона и законодательства Республики Казахстан;
соответствия проведенных банковских операций общим условиям их проведения, а также соответствия порядка проведения банковских операций внутренним правилам банка. 
4. Результаты аудита и свои выводы аудиторская организация излагает в отчете, представляемом совету директоров и правлению банка, при необходимости, определяемой банком, другим юридическим лицам, входящим в состав банковского конгломерата.<br>
Аудиторский отчет финансовой отчетности банка или других юридических лиц, входящих в состав банковского конгломерата, не составляет коммерческой тайны. `
let otvt_vop_2_4_2 = `Под реструктуризацией банка понимается комплекс административных, юридических, финансовых, организационно-технических и других мероприятий и процедур, реализуемых банком на основании плана реструктуризации банка (далее - план реструктуризации) для оздоровления его финансового положения и улучшения качества работы. 
Положения настоящей главы распространяются на проведение реструктуризации организацией, входящей в банковский конгломерат в качестве родительской организации и не являющейся банком.
Положения настоящей главы не распространяются на проведение банком реструктуризации активов и (или) обязательств по требованию уполномоченного органа`
let otvt_vop_2_4_3 = `1. С момента возникновения основания для реструктуризации, указанного в статье 59-2 настоящего Закона, банк вправе провести заседание совета директоров, на котором принимается решение о реструктуризации банка.<br>
2. В срок не позднее следующего рабочего дня с даты принятия решения совета директоров, указанного в пункте 1 настоящей статьи, банк направляет в уполномоченный орган решение совета директоров о реструктуризации банка.<br>
3. Уполномоченный орган в течение семи календарных дней после получения решения совета директоров о реструктуризации банка заключает с банком письменное соглашение по вопросам реструктуризации банка.<br>
4. Банк представляет проект плана реструктуризации в уполномоченный орган. При наличии замечаний и предложений уполномоченный орган вправе потребовать от банка доработки проекта плана реструктуризации. Банк обязан учесть замечания и предложения уполномоченного органа и повторно представить в уполномоченный орган доработанный проект плана реструктуризации.<br>
5. Банк обращается в суд с заявлением о реструктуризации в порядке, установленном гражданским процессуальным законодательством Республики Казахстан. С момента вступления в законную силу решения суда о проведении реструктуризации банка и на период ее проведения действуют ограничения, предусмотренные гражданским процессуальным законодательством Республики Казахстан.<br>
6. Банк в течение семи календарных дней со дня вступления в законную силу решения суда о реструктуризации информирует о реструктуризации депозиторов, кредиторов и иных клиентов путем публикации соответствующего объявления не менее чем в двух периодических печатных изданиях, распространяемых на всей территории Республики Казахстан, на казахском и русском языках.<br>
Банк направляет копии вступившего в законную силу решения суда о реструктуризации в банки - корреспонденты в срок не позднее дня, следующего за днем его получения.
7. Банк вправе с момента вступления в законную силу решения суда о проведении реструктуризации банка:<br>
1) приостановить исполнение договоров купли-продажи, мены, дарения или иных сделок об отчуждении имущества банка, заключение договоров о предоставлении займов и других видов финансирования, несущих кредитный риск;<br>
2) приостановить полностью или частично исполнение обязательств банка.<br>
8. В сроки, предусмотренные решением суда о проведении реструктуризации, банк созывает собрание кредиторов банка, обязательства перед которыми предполагается реструктурировать, в целях проведения с ними переговоров и получения одобрения плана реструктуризации.<br>
Для получения одобрения плана реструктуризации требуется согласие кредиторов, на долю которых приходится не менее двух третей от объема обязательств банка перед кредиторами, обязательства перед которыми предполагается реструктурировать.`
let otvt_vop_2_4_4 = `1. Добровольная реорганизация (слияние, присоединение, разделение, выделение, преобразование, конвертация) банков (банковских холдингов) может быть осуществлена по решению общего собрания акционеров (участников) с разрешения уполномоченного органа.<br>
Порядок выдачи разрешения на добровольную реорганизацию банка (банковского холдинга) либо отказа в выдаче указанного разрешения определяется нормативным правовым актом уполномоченного органа.
1-1. Порядок реорганизации банка в форме конвертации в исламский банк устанавливается главой 4-2 настоящего Закона.<br>
2. Основанием для подачи ходатайства о получении разрешения на проведение добровольной реорганизации банка (банковского холдинга) является наличие решения общего собрания акционеров (участников) данного банка (банковского холдинга).<br>
3. К ходатайству о получении разрешения уполномоченного органа на проведение добровольной реорганизации банка (банковского холдинга) должны прилагаться следующие документы:<br>
а) решение высшего органа банка (банковского холдинга) о его добровольной реорганизации; 
б) документы, описывающие предполагаемые условия, формы, порядок и сроки добровольной реорганизации банка (банковского холдинга); 
в) финансовый прогноз последствий добровольной реорганизации, включая расчетный баланс банка (банковского холдинга) после его добровольной реорганизации и/или юридических лиц, образующихся в результате добровольной реорганизации банка (банковского холдинга). 
Кроме документов, указанных в части первой настоящей статьи, к ходатайству о получении разрешения уполномоченного органа на проведение добровольной реорганизации в форме присоединения должен прилагаться договор о присоединении, подписанный первыми руководителями исполнительных органов реорганизуемых банков.
4. Ходатайство о получении разрешения на проведение добровольной реорганизации банка (банковского холдинга) должно быть рассмотрено уполномоченным органом в течение двух месяцев со дня его приема.<br>
5. Реорганизуемый банк (банковский холдинг) в течение двух недель со дня получения разрешения уполномоченного органа на проведение реорганизации обязан проинформировать о предстоящих изменениях всех своих депозиторов, клиентов, корреспондентов и заемщиков путем публикации соответствующего объявления в средствах массовой информации, в том числе на интернет-ресурсе банка.
6. Государственная регистрация или перерегистрация образующихся в результате реорганизации юридических лиц производится в соответствии с законодательным актом Республики Казахстан.<br>
7. Требования настоящей статьи не распространяются на нерезидентов Республики Казахстан, являющихся банковским холдингом, лицом, обладающим признаками банковского холдинга, при выполнении одного из следующих условий:<br>
наличие индивидуального кредитного рейтинга не ниже рейтинга А одного из рейтинговых агентств, перечень которых устанавливается уполномоченным органом, а также письменного подтверждения от органа финансового надзора страны происхождения банковского холдинга, лица, обладающего признаками банковского холдинга, о том, что указанные лица-нерезиденты Республики Казахстан подлежат консолидированному надзору;
наличие соглашения между уполномоченным органом и соответствующим надзорным органом иностранного государства об обмене информацией, а также минимального требуемого рейтинга одного из рейтинговых агентств. Минимальный рейтинг и перечень рейтинговых агентств устанавливаются нормативным правовым актом уполномоченного органа.`
let otvt_vop_2_4_5 = `1. В целях защиты интересов депозиторов банков второго уровня Республики Казахстан создается система обязательного гарантирования депозитов.<br>
Обязательное гарантирование депозитов осуществляется специально созданной некоммерческой организацией. 
Правовые основы функционирования системы обязательного гарантирования депозитов, права, обязанности ее участников определяются законодательством Республики Казахстан. 
2. Участие в системе обязательного гарантирования депозитов является обязательным для всех банков второго уровня, имеющих лицензию на прием депозитов, открытие и ведение банковских счетов физических лиц, за исключением исламских банков.<br>`
let otvt_vop_2_5_1 = `Банки публикуют годовую консолидированную финансовую отчетность, а в случае отсутствия дочерней (дочерних) организации (организаций) – неконсолидированную финансовую отчетность, а также аудиторский отчет в порядке и сроки, установленные нормативным правовым актом уполномоченного органа, после подтверждения аудиторской организацией, соответствующей требованиям пункта 4 статьи 19 настоящего Закона, достоверности представленных в них сведений и утверждения финансовой отчетности годовым собранием акционеров банка, а также по требованию уполномоченного органа размещают на интернет-ресурсе банка иную отчетность в соответствии с перечнем и сроками, установленными нормативным правовым актом уполномоченного органа.
Банки ежеквартально публикуют бухгалтерский баланс, отчет о прибылях и убытках, соответствующие международным стандартам финансовой отчетности, в порядке и сроки, установленные нормативным правовым актом уполномоченного органа, без их аудиторского подтверждения.
Банковские холдинги публикуют годовую консолидированную финансовую отчетность, а в случае отсутствия дочерней (дочерних) организации (организаций) – неконсолидированную финансовую отчетность, а также аудиторский отчет в порядке и сроки, установленные нормативным правовым актом уполномоченного органа.
Требования настоящего пункта не распространяются на нерезидентов Республики Казахстан, являющихся банковским холдингом.
2. Филиал банка-нерезидента Республики Казахстан публикует в порядке и сроки, установленные нормативным правовым актом уполномоченного органа:
годовую отчетность по данным бухгалтерского учета филиала банка-нерезидента Республики Казахстан;
годовую консолидированную финансовую отчетность банка-нерезидента Республики Казахстан, а в случае отсутствия дочерней (дочерних) организации (организаций) – неконсолидированную финансовую отчетность банка-нерезидента Республики Казахстан, аудиторский отчет после подтверждения аудиторской организацией достоверности представленных в ней сведений и утверждения банком-нерезидентом Республики Казахстан.
Филиал банка-нерезидента Республики Казахстан по требованию уполномоченного органа размещает на интернет-ресурсе филиала банка-нерезидента Республики Казахстан иную отчетность в соответствии с перечнем и сроками, установленными нормативным правовым актом уполномоченного органа.
Филиал банка-нерезидента Республики Казахстан ежеквартально публикует отчет об активах и обязательствах, отчет о доходах и расходах, соответствующие международным стандартам финансовой отчетности, в порядке и сроки, установленные нормативным правовым актом уполномоченного органа, без их аудиторского подтверждения.`
let otvt_vop_2_5_2 = `Реструктуризация банка может быть осуществлена в связи с неспособностью банка исполнять требования отдельных кредиторов по обязательствам в связи с отсутствием или недостаточностью денег банка.
Реструктуризация банка основывается на следующих принципах:
1) соблюдение прав и интересов депозиторов и кредиторов банка в соответствии с обратной очередностью удовлетворения требований, предусмотренной статьей 74-2 настоящего Закона;
2) равное соблюдение прав и интересов депозиторов и кредиторов, находящихся в одной очереди удовлетворения требований, предусмотренной статьей 74-2 настоящего Закона.`
let otvt_vop_2_5_3 = `1. При присоединении банка к другому банку, акции присоединяемого банка приобретаются банком, к которому осуществляется присоединение, путем размещения (реализации) среди акционеров присоединяемого банка своих акций в количестве, определяемом на основании коэффициента обмена акций, утверждаемого на совместном общем собрании акционеров реорганизуемых банков после его предварительного одобрения советом директоров каждого банка. При этом положения статьи 83 Закона Республики Казахстан "Об акционерных обществах", относящиеся к цене продажи акций присоединяемого общества и цене размещения (реализации) акции общества, к которому осуществляется присоединение (в том числе положения по определению, рассмотрению и утверждению этих цен органами общества), не применяются.<br>
2. Кроме документов, указанных в пункте 3 статьи 60 настоящего Закона, к ходатайству о получении разрешения уполномоченного органа на проведение добровольной реорганизации в форме присоединения должен прилагаться договор о присоединении, подписанный первыми руководителями исполнительных органов на основании решения, принятого на совместном общем собрании акционеров реорганизуемых банков в соответствии с Законом Республики Казахстан "Об акционерных обществах".<br>
3. После передачи обязательств присоединяемого банка перед кредиторами и (или) депозиторами банку, к которому осуществляется присоединение, исполнение обязательств перед такими кредиторами и (или) депозиторами, в том числе ведение переданных банковских счетов депозиторов, осуществляет банк, к которому осуществляется присоединение.<br>
4. Присоединяемый банк вправе передать банку, к которому осуществляется присоединение, обязательства перед депозиторами с открытыми в присоединяемом банке их банковскими счетами (с сохранением индивидуальных идентификационных кодов) без заключения дополнительных соглашений к договорам банковского обслуживания, историей движения денег по ним, досье, сформированными при открытии и ведении банковских счетов, неисполненными требованиями, включая распоряжения уполномоченных государственных органов, обладающих правом приостановления расходных операций по банковскому счету, а также решения (постановления) уполномоченных органов или должностных лиц, обладающих правом наложения ареста на деньги клиента, и обременениями по банковским счетам депозиторов, имеющимися в присоединяемом банке на момент передачи обязательств.<br>
5. Банк, к которому осуществляется присоединение, в необходимый срок в рамках срока проведения процедур реорганизации в целях обеспечения сохранения реквизитов банковских счетов депозиторов (в том числе индивидуальных идентификационных кодов, присвоенных присоединяемым банком) вправе исполнять указания по банковским счетам депозиторов, переданным в банк, к которому осуществляется присоединение, с указанными в них индивидуальными идентификационными кодами депозиторов, присвоенными присоединяемым банком, а также соответствующими реквизитами присоединяемого банка, используемыми при осуществлении платежей и переводов денег. Исполнение таких указаний производится с использованием корреспондентского счета присоединяемого банка.Банк, к которому осуществляется присоединение, вправе использовать банковскую информационную систему присоединяемого банка.<br>
6. Сбор и обработка персональных данных клиентов банка, права (требования) и обязательства по которым передаются в рамках процедуры реорганизации, осуществляются банком, к которому осуществляется присоединение, без согласия субъектов персональных данных или их законных представителей.<br>
7. В течение необходимого срока в рамках проведения процедур реорганизации банка банк, к которому осуществляется присоединение, присваивает банковским счетам депозиторов индивидуальные идентификационные коды с соблюдением требований законодательства Республики Казахстан и уведомляет в порядке, предусмотренном подпунктом 1) части первой статьи 24 Кодекса Республики Казахстан "О налогах и других обязательных платежах в бюджет" (Налоговый кодекс), уполномоченный государственный орган, осуществляющий руководство в сфере обеспечения поступлений налогов и других обязательных платежей в бюджет, об изменении индивидуальных идентификационных кодов по банковским счетам налогоплательщиков, предусмотренных подпунктом 1)части первой статьи 24 Кодекса Республики Казахстан "О налогах и других обязательных платежах в бюджет" (Налоговый кодекс).
После изменения индивидуальных идентификационных кодов банковских счетов депозиторов, к которым имеются неисполненные требования, включая принятые к исполнению распоряжения уполномоченных государственных органов, обладающих правом приостановления расходных операций по банковскому счету, а также решения (постановления) уполномоченных органов или должностных лиц, обладающих правом наложения ареста на деньги клиента, обременения по банковским счетам депозиторов:<br>
банк, к которому осуществляется присоединение, уведомляет лицо (орган), направившее (направивший) к банковскому счету депозитора требования (включая распоряжения уполномоченных государственных органов, обладающих правом приостановления расходных операций по банковскому счету, а также решения (постановления) уполномоченных органов или должностных лиц, обладающих правом наложения ареста на деньги клиента) или наложившее (наложивший) обременения по банковским счетам депозиторов, об изменении реквизитов банковского счета депозитора, в том числе индивидуального идентификационного кода;
ранее предъявленные к банковскому счету депозитора, переданному банку, к которому осуществляется присоединение, неисполненные требования исполняются банком, к которому осуществляется присоединение, с банковских счетов депозиторов, открытых таким банком, с исправлением реквизитов присоединяемого банка (наименования, банковского идентификационного кода, бизнес-идентификационного номера) на соответствующие реквизиты банка, к которому осуществляется присоединение, а также индивидуального идентификационного кода депозитора на соответствующий индивидуальный идентификационный код депозитора, присвоенный банковскому счету в соответствии с частью первой настоящего пункта;
ранее предъявленные к банковскому счету депозитора, переданному банку, к которому осуществляется присоединение, неисполненные распоряжения уполномоченных государственных органов, обладающих правом приостановления расходных операций по банковскому счету, а также решения (постановления) уполномоченных органов или должностных лиц, обладающих правом наложения ареста на деньги клиента, исполняются банком, к которому осуществляется присоединение, с банковских счетов депозиторов, открытых банком, к которому осуществляется присоединение, с сохранением календарной очередности их поступления в присоединяемый банк и в порядке, предусмотренном Гражданским кодексом Республики Казахстан.
Обслуживание банковских счетов депозиторов производится банком, к которому осуществляется присоединение, в соответствии с требованиями законодательства Республики Казахстан и условиями договоров банковского обслуживания, обязательства по которым перешли к данному банку.`
let otvt_vop_2_5_4 = `Отказ в выдаче разрешения уполномоченного органа на добровольную реорганизацию банка (банковского холдинга) производится по любому из следующих оснований: 
а) отсутствие соответствующих решений высших органов реорганизуемых банков (банковских холдингов); 
б) нарушение в результате предполагаемой реорганизации интересов депозиторов; 
в) нарушение в результате предполагаемой реорганизации пруденциальных нормативов и иных обязательных к соблюдению норм и лимитов; 
г) нарушение в результате предполагаемой реорганизации требований законодательства Республики Казахстан в области защиты конкуренции.`
let otvt_vop_2_5_5 = `Обязательное гарантирование депозитов
1. В целях защиты интересов депозиторов банков второго уровня Республики Казахстан создается система обязательного гарантирования депозитов.<br>
Обязательное гарантирование депозитов осуществляется специально созданной некоммерческой организацией. 
Правовые основы функционирования системы обязательного гарантирования депозитов, права, обязанности ее участников определяются законодательством Республики Казахстан. 
2. Участие в системе обязательного гарантирования депозитов является обязательным для всех банков второго уровня, имеющих лицензию на прием депозитов, открытие и ведение банковских счетов физических лиц, за исключением исламских банков.<br>`

let otvt_vop_3_1_1 = `В настоящем Законе используются следующие основные понятия:<br>
1) потребитель финансовых услуг – физическое или юридическое лицо, пользующееся услугами финансовой организации, филиала банка – нерезидента Республики Казахстан, филиала страховой (перестраховочной) организации – нерезидента Республики Казахстан, филиала страхового брокера – нерезидента Республики Казахстан, а также инвестирующее свои средства в финансовые инструменты;<br> 
2) профессиональная деятельность на финансовом рынке - предпринимательская деятельность по предоставлению финансовых услуг;<br>
3) уполномоченный орган по регулированию, контролю и надзору финансового рынка и финансовых организаций (далее – уполномоченный орган) – государственный орган, осуществляющий государственное регулирование, контроль и надзор финансового рынка и финансовых организаций;<br>
4) финансовая организация – юридическое лицо, осуществляющее предпринимательскую деятельность по предоставлению финансовых услуг;<br>
5) финансовый рынок - совокупность отношений, связанных с оказанием и потреблением финансовых услуг, а также выпуском и обращением финансовых инструментов;<br>
6) финансовые услуги – деятельность профессиональных участников страхового рынка (за исключением актуариев), профессиональных участников рынка ценных бумаг, добровольного накопительного пенсионного фонда, банковская деятельность, деятельность организаций по проведению отдельных видов банковских операций, организаций, осуществляющих микрофинансовую деятельность, осуществляемые на основании лицензий, полученных в соответствии с законодательством Республики Казахстан, а также не подлежащая лицензированию деятельность:
единого накопительного пенсионного фонда;
центрального депозитария;
единого оператора в сфере учета государственного имущества в части осуществления функций номинального держания ценных бумаг, принадлежащих государству, субъектам квазигосударственного сектора, перечень которых утверждается уполномоченным органом по управлению государственным имуществом, или в отношении которых государство, указанные субъекты квазигосударственного сектора имеют имущественные права;
обществ взаимного страхования;
организации, гарантирующей осуществление страховых выплат страхователям (застрахованным, выгодоприобретателям) в случае ликвидации страховых организаций;<br>
7) финансовый продукт – услуга, предлагаемая финансовой организацией, филиалом банка – нерезидента Республики Казахстан и филиалом страховой (перестраховочной) организации – нерезидента Республики Казахстан потребителям финансовых услуг в рамках осуществления профессиональной деятельности на финансовом рынке.<br>`
let otvt_vop_3_1_2 = `1. Законодательство Республики Казахстан о государственном регулировании, контроле и надзоре финансового рынка и финансовых организаций основывается на Конституции Республики Казахстан, состоит из настоящего Закона и иных нормативных правовых актов Республики Казахстан.<br>
2. Если международным договором, ратифицированным Республикой Казахстан, установлены иные правила, чем те, которые предусмотрены настоящим Законом, то применяютсяправила международного договора.<br>
3. На правоотношения, урегулированные законодательством Республики Казахстан о государственном регулировании, контроле и надзоре финансового рынка и финансовых организаций, не распространяется действие законодательства Республики Казахстан о государственных закупках в части приобретения уполномоченным органом услуг, связанных с обеспечением стабильности финансовой системы.<br>`
let otvt_vop_3_1_3 = `1. Целями государственного регулирования, контроля и надзора финансового рынка и финансовых организаций являются:<br>
1) содействие обеспечению финансовой стабильности финансового рынка и финансовых организаций и поддержание доверия к финансовой системе в целом; <br>
2) исключен Законом РК от 05.07.2012 № 30-V(вводится в действие по истечении десяти календарных дней после его первого официального опубликования);<br>
3) создание равноправных условий для деятельности финансовых организаций, филиалов банков-нерезидентов Республики Казахстан, филиалов страховых (перестраховочных) организаций-нерезидентов Республики Казахстан, филиалов страховых брокеров-нерезидентов Республики Казахстан, направленных на поддержание добросовестной конкуренции на финансовом рынке.<br>
2. Принципами государственного регулирования, контроля и надзора финансового рынка и финансовых организаций являются:
1) эффективное использование ресурсов и инструментов регулирования;<br>
2) прозрачность деятельности финансовых организаций, филиалов банков-нерезидентов Республики Казахстан, филиалов страховых (перестраховочных) организаций-нерезидентов Республики Казахстан, филиалов страховых брокеров-нерезидентов Республики Казахстан и финансового надзора;<br>
3) ответственность финансовых организаций, филиалов банков-нерезидентов Республики Казахстан, филиалов страховых (перестраховочных) организаций-нерезидентов Республики Казахстан, филиалов страховых брокеров-нерезидентов Республики Казахстан.<br>
3. Задачами государственного регулирования, контроля и надзора финансового рынка и финансовых организаций являются:<br>
1) установление стандартов деятельности финансовых организаций, филиалов банков-нерезидентов Республики Казахстан, филиалов страховых (перестраховочных) организаций-нерезидентов Республики Казахстан, филиалов страховых брокеров-нерезидентов Республики Казахстан, создание стимулов для улучшения корпоративного управления финансовых организаций;<br>
2) мониторинг финансового рынка и финансовых организаций, филиалов банков-нерезидентов Республики Казахстан, филиалов страховых (перестраховочных) организаций-нерезидентов Республики Казахстан, филиалов страховых брокеров-нерезидентов Республики Казахстан в целях сохранения устойчивости финансовой системы;<br>
3) сосредоточение ресурсов надзора на областях финансового рынка, наиболее подверженных рискам, с целью поддержания финансовой стабильности;<br>
4) обеспечение надлежащего уровня защиты интересов потребителей финансовых услуг, полноты и доступности информации для потребителей о деятельности финансовых организаций, филиалов банков-нерезидентов Республики Казахстан, филиалов страховых (перестраховочных) организаций-нерезидентов Республики Казахстан, филиалов страховых брокеров-нерезидентов Республики Казахстан и оказываемых ими финансовых услугах, а также повышения уровня финансовой грамотности и финансовой доступности для населения.<br>`
let otvt_vop_3_1_4 = `1. Не допускается осуществление профессиональной деятельности на финансовом рынке лицами, не обладающими соответствующей лицензией, выданной в соответствии с законодательством Республики Казахстан.<br>
2. Сделки по оказанию финансовых услуг, совершенные без соответствующей лицензии, являются недействительными.<br>`
let otvt_vop_3_1_5 = `Пруденциальными нормативами являются экономические ограничения, устанавливаемые уполномоченным органом для финансовых организаций, филиалов банков-нерезидентов Республики Казахстан, филиалов страховых (перестраховочных) организаций-нерезидентов Республики Казахстан, филиалов страховых брокеров-нерезидентов Республики Казахстан в целях обеспечения их финансовой устойчивости и защиты интересов потребителей финансовых услуг.
В случаях, предусмотренных законодательными актами Республики Казахстан, уполномоченный орган вправе устанавливать пруденциальныенормативы и иные обязательные к соблюдению нормы и лимиты на консолидированной основе.`
let otvt_vop_3_2_1 = `Уполномоченный орган является государственным органом, непосредственно подчиненным и подотчетным Президенту Республики Казахстан, осуществляющим государственное регулирование, контроль и надзор финансового рынка и финансовых организаций.
Уполномоченный орган действует на основании Положения о нем, утверждаемого Президентом Республики Казахстан.
Уполномоченный орган в своей деятельности руководствуется Конституцией Республики Казахстан, настоящим Законом, другими законами Республики Казахстан, актами Президента Республики Казахстан и международными договорами Республики Казахстан. 
Уполномоченный орган является юридическим лицом в организационно-правовой форме республиканского государственного учреждения, финансируемого за счет бюджетных средств.`
let otvt_vop_3_2_2 = `Структура и общая штатная численность уполномоченного органа утверждаются Президентом Республики Казахстан.`
let otvt_vop_3_2_3 = `Председатель уполномоченного органа назначается на должность Президентом Республики Казахстан сроком на шесть лет.
Председатель уполномоченного органа действует от имени уполномоченного органа и представляет его без доверенности в отношениях с государственными органами, организациями и иными лицами.
Председатель уполномоченного органа наделен полномочиями принимать оперативные и исполнительно-распорядительные решения по вопросам деятельности уполномоченного органа, за исключением полномочий, оговоренных настоящим Законом для Правления уполномоченного органа, заключать от имени уполномоченного органа договоры.
Председатель уполномоченного органа ответственен за деятельность уполномоченного органа.
Председатель уполномоченного органа вправе подать в отставку, представив Президенту Республики Казахстан свое письменное заявление за два месяца до ухода в отставку.  
Председатель уполномоченного органа освобождается от должности Президентом Республики Казахстан`
let otvt_vop_3_2_4 = `Заместители Председателя уполномоченного органа назначаются на должность Президентом Республики Казахстан по представлению Председателя уполномоченного органа сроком на шесть лет независимо от сроков назначения Председателя уполномоченного органа.
Заместители Председателя уполномоченного органа представляют уполномоченный орган без доверенности, подписывают документы в пределах своей компетенции.
Заместители Председателя уполномоченного органа освобождаются от должности Президентом Республики Казахстан по представлению Председателя уполномоченного органа.
Заместители Председателя уполномоченного органа могут подать в отставку, представив свое письменное заявление Президенту Республики Казахстан через Председателя уполномоченного органа за два месяца до ухода в отставку.`
let otvt_vop_3_2_5 = `Высшим органом уполномоченного органа является Правление.
Правление уполномоченного органа:
1) определяет приоритеты в области формирования и развития финансового рынка;<br>
2) принимает нормативные правовые акты, регулирующие деятельность финансового рынка и финансовых организаций, а также иных лиц, в соответствии с настоящим Законом, иными законами Республики Казахстан и актами Президента Республики Казахстан;<br>
3) определяет порядок применения к финансовым организациям и иным лицам ограниченных мер воздействия, мер надзорного реагирования, предусмотренных законами Республики Казахстан, по вопросам, входящим в его компетенцию;<br>
4) принимает решение о введении особого режима регулирования;<br>
5) Исключен Законом РК от 12.07.2022 № 138-VII(вводится в действие по истечении шестидесяти календарных дней после дня его первого официального опубликования).<br>
6) совместно с Национальным Банком Республики Казахстан утверждает программы, направленные на защиту интересов потребителей финансовых услуг;<br>
7) принимает решения об участии уполномоченного органа в международных и иных организациях;<br>
8) принимает решение о создании консультативно-совещательных органов уполномоченного органа;<br>
9) рассматривает, одобряет и представляет на утверждение Президенту Республики Казахстан структуру, общую штатную численность уполномоченного органа и Положение об уполномоченном органе, а также изменения и дополнения в них;<br>
10) утверждает условия оплаты труда и социально-бытового обеспечения работников уполномоченного органа;<br>
11) рассматривает, принимает и представляет на утверждение Президента Республики Казахстан годовой отчет о работе уполномоченного органа;<br>
12) утверждает правила назначения на должность и прекращения трудового договора со служащими уполномоченного органа;<br>
13) утверждает регламент уполномоченного органа;<br>
14) утверждает правила публикации финансовой отчетности акционерными обществами и финансовыми организациями, которыми определяются порядок ее публикации, включаяперечень финансовой отчетности, подлежащей публикации, и сроки ее публикации;<br>
15) утверждает правила создания провизий (резервов) в соответствии с международными стандартами финансовой отчетности и требованиями законодательства Республики Казахстан о бухгалтерском учете и финансовой отчетности;<br>
16) утверждает правила выпуска и обращения банковских депозитных сертификатов;<br>
17) утверждает нормативные правовые акты, регулирующие деятельность финансовых организаций по обеспечению информационной безопасности, в соответствии с настоящим Законом и иными законами Республики Казахстан;<br>
18) разрабатывает и утверждает правила приобретения уполномоченным органом услуг, связанных с обеспечением стабильности финансовой системы;<br>
18-1) совместно с Национальным Банком Республики Казахстан и уполномоченным органом, осуществляющим руководство в сфере обеспечения поступлений налогов и других обязательных платежей в бюджет, утверждает правила снятия субъектами предпринимательства наличных денег с банковских счетов, которыми определяются, в том числе условия снятия субъектами предпринимательства наличных денег с банковских счетов сверх установленных предельных размеров, а также порядок представления в уполномоченный орган, осуществляющий руководство в сфере обеспечения поступлений налогов и других обязательных платежей в бюджет, и уполномоченный орган сведений и информации о снятии субъектами предпринимательства наличных денег с банковских счетов сверх установленных предельных размеров, включая формы, перечень и сроки их представления;<br>`
let otvt_vop_3_3_1 = `1. Задачами уполномоченного органа являются:<br>
1) реализация мер по недопущению нарушений прав и законных интересов потребителей финансовых услуг;<br>
2) создание равных условий для функционирования соответствующих видов финансовых организаций, филиалов банков-нерезидентов Республики Казахстан, филиалов страховых (перестраховочных) организаций-нерезидентов Республики Казахстан, филиалов страховых брокеров-нерезидентов Республики Казахстан на принципах добросовестной конкуренции;<br>
3) повышение уровня стандартов и методов регулирования, контроля и надзора за деятельностью финансовых организаций, использование мер по обеспечению своевременного и полного выполнения ими принятых обязательств.<br>
2. Уполномоченный орган обеспечивает реализацию иных задач, предусмотренных настоящим Законом и иными законодательными актами Республики Казахстан.<br>`
let otvt_vop_3_3_2 = `В целях осуществления государственного регулирования, контроля и надзора за банковской деятельностью уполномоченный орган:
1) определяет порядок выдачи и отказа в выдаче согласия на приобретение физическими и юридическими лицами статуса крупного участника банка и банковского холдинга, разрешения на создание и приобретение банками и банковскими холдингами дочерней организации, а также разрешения на приобретение банками и банковскими холдингами значительного участия в капитале юридических лиц, выдает либо отказывает в выдаче указанных согласий и разрешений;<br>
2) устанавливает минимальные размеры собственного капитала банков;<br>
3) устанавливает требования по формированию резервного капитала банков;<br>
4) утверждает пруденциальные нормативы и иные обязательные к соблюдению нормы и лимиты для банковских конгломератов;<br>
5) (исключен - от 19 февраля 2007 года N 230)<br>
6) устанавливает порядок классификации активов и условных обязательств и создания против них провизии. Порядок отнесения активов и условных обязательств к категории сомнительных и безнадежных определяется по согласованию с государственным органом, обеспечивающим налоговый контроль за исполнением налоговых обязательств перед государством;<br>
7) ведет реестр банков, филиалов банков-нерезидентов Республики Казахстан;<br>
8) определяет порядок применения и принимает решение о применении к аффилированным лицам банка принудительных мер, предусмотренных законами Республики Казахстан.<br>
9) принимает в случаях, установленных банковским законодательством Республики Казахстан, решение о консервации банка и назначает временную администрацию (временного управляющего банком).<br>
9-1) в случаях, предусмотренных законами Республики Казахстан, принимает решение о создании и прекращении деятельности стабилизационного банка.<br>  
10) принимает в случаях, установленных законами Республики Казахстан, решение о лишении лицензии на проведение всех или отдельных операций, предусмотренных банковским законодательством Республики Казахстан, и назначает временную администрацию (временного администратора) банка, ликвидационную комиссию принудительно прекращающего деятельность филиала банка-нерезидента Республики Казахстан;<br>
10-1) принимает в случаях, установленных законами Республики Казахстан, решение о завершении процедуры добровольного или принудительного прекращения деятельности филиала банка-нерезидента Республики Казахстан;<br>
11) осуществляет иные функции в соответствии с законодательством Республики Казахста<br>`
let otvt_vop_3_3_3 = `В целях осуществления государственного регулирования, контроля и надзора за страховой деятельностью уполномоченный орган:
1) определяет порядок выдачи и отказа в выдаче согласия на приобретение физическими и юридическими лицами статуса крупного участника страховой (перестраховочной) организации и страхового холдинга, разрешения на создание и приобретение страховой (перестраховочной) организацией и страховым холдингом дочерней организации, а также разрешения на приобретение страховыми (перестраховочными) организациями и страховыми холдингами значительного участия в капитале юридических лиц, выдает указанные согласие и разрешение либо отказывает в их выдаче;<br>
2) устанавливает требования к формированию страховыми (перестраховочными) организациями, филиалами страховых (перестраховочных) организаций-нерезидентов Республики Казахстан страховых резервов, методике расчета страховых резервов и их структуре;<br>
3) исключен Законом РК от 02.07.2018 № 166-VI(вводится в действие по истечении десяти календарных дней после дня его первого официального опубликования);<br>
4) определяет порядок размещения и инвестирования активов страховыми (перестраховочными) организациями;
5) устанавливает требования к содержанию и порядку оформления страховых полисов;<br>
6) определяет порядок и условия увеличения размера регулярных страховых выплат в период действия договоров аннуитета на основании актуарного заключения и требования к его содержанию;<br>  
7) определяет порядок и условия выдачи страховой организацией, осуществляющей деятельность по накопительному страхованию, займов своим страхователям;<br>
8) определяет порядок учета страховой (перестраховочной) организацией, филиалом страховой (перестраховочной) организации-нерезидента Республики Казахстан договоров страхования и перестрахования, в том числе исполненных страховой (перестраховочной) организацией, филиалом страховой (перестраховочной) организации-нерезидента Республики Казахстан с нарушением установленных (договорами или законодательством Республики Казахстан) сроков;<br>
9) ведет реестр страховых (перестраховочных) организаций, страховых брокеров, филиалов страховых (перестраховочных) организаций-нерезидентов Республики Казахстан, филиалов страховых брокеров-нерезидентов Республики Казахстан, актуариев;<br>
10) принимает в случаях, установленных законами Республики Казахстан, решение о лишении лицензии на право осуществления страховой (перестраховочной) деятельности и назначает временную администрацию (временного администратора) страховой (перестраховочной) организации, ликвидационную комиссию принудительно прекращающего деятельность филиала страховой (перестраховочной) организации-нерезидента Республики Казахстан;<br>
10-1) принимает в случаях, установленных законами Республики Казахстан, решение о завершении процедуры добровольного или принудительного прекращения деятельности филиала страховой (перестраховочной) организации-нерезидента Республики Казахстан;<br>
11) определяет порядок обязательного коллективного гарантирования страховых выплат по видам обязательного страхования;<br>
12) осуществляет иные функции в соответствии с законодательством Республики Казахстан.<br>`
let otvt_vop_3_3_4 = `В целях осуществления государственного регулирования, контроля и надзора за деятельностью единого накопительного пенсионного фонда и добровольного накопительного пенсионного фонда уполномоченный орган:
1) устанавливает требования к руководящим работникам единого накопительного пенсионного фонда и добровольного накопительного пенсионного фонда;<br>
2) устанавливает порядок ведения учета пенсионных накоплений за счет обязательных пенсионных взносов, обязательных профессиональных пенсионных взносов на индивидуальных пенсионных счетах вкладчиков (получателей);<br>
3) устанавливает порядок перевода добровольных пенсионных накоплений вкладчиков в единый накопительный пенсионный фонд в случае лишения лицензии на управление инвестиционным портфелем с правом привлечения добровольных пенсионных взносов;<br>
4) определяет порядок формирования системы управления рисками и внутреннего контроля;<br>
5) осуществляет иные функции в соответствии с законодательством Республики Казахстан.<br>`
let otvt_vop_3_3_5 = `
Уполномоченный орган:
1) требует проведения аудита иной информации банка, страховой (перестраховочной) организации, филиала банка – нерезидента Республики 
Казахстан, филиала страховой (перестраховочной) организации – нерезидента Республики Казахстан, профессионального участника рынка ценных бумаг;<br>
2) устанавливает по согласованию с уполномоченным государственным органом, осуществляющим государственное регулирование в области 
аудиторской деятельности и контроль за деятельностью аудиторских и профессиональных аудиторских организаций, перечень вопросов, 
подлежащих проверке в рамках аудита иной информации, требования к содержанию, срокам представления аудиторской организацией аудиторского заключения по аудиту
 иной информации, требования к аудиторам в составе аудиторской организации, привлекаемой к аудиту иной информации.<br>
`

let otvt_vop_3_4_1 =
      `
1. Контроль и надзор за финансовым рынком и финансовыми организациями и в области финансового законодательства Республики Казахстан осуществляются уполномоченным органом и Национальным Банком Республики Казахстан (далее в целях настоящей главы – органы контроля и надзора) в пределах их компетенции. <br>
Контроль и надзор в области финансового законодательства Республики Казахстан предусматривают осуществление органами 
контроля и надзора в пределах компетенции контроля и надзора за соблюдением финансовыми организациями, их филиалами и аффилированными лицами, 
Банком Развития Казахстана, юридическими лицами, осуществляющими деятельность на рынке ценных бумаг, иными субъектами рынка ценных бумаг, эмитентами 
ценных бумаг, кредитными бюро, банковскими холдингами, банковскими конгломератами, крупными участниками банков, страховыми холдингами, страховыми группами, 
крупными участниками страховых (перестраховочных) организаций, организацией, гарантирующей осуществление страховых выплат, актуариями, имеющими лицензию на 
осуществление актуарной деятельности на страховом рынке, специальными финансовыми компаниями, исламскими специальными финансовыми компаниями, инвестиционными 
фондами, крупными участниками управляющих инвестиционным портфелем, лицами, обладающими признаками крупного участника банка, страховой (перестраховочной) организации, управляющего инвестиционным портфелем, банковского холдинга, страхового холдинга, профессиональными организациями, коллекторскими агентствами, участниками платежной системы, операторами и операционными центрами платежных систем, в том числе любым иным лицом, уполномоченным по договору с ними оказывать услуги для функционирования платежной системы, поставщиками платежных услуг, в том числе любым иным лицом, 
уполномоченным по договору с ними осуществлять функции по оказанию платежных услуг, платежными организациями, а также лицами, осуществляющими валютные операции, временными администрациями (временными администраторами), ликвидационными комиссиями банков, страховых (перестраховочных) организаций, филиалами банков – нерезидентов Республики Казахстан, филиалами страховых (перестраховочных) организаций – нерезидентов Республики Казахстан, ликвидационными комиссиями филиалов банков-нерезидентов Республики Казахстан, филиалов страховых (перестраховочных) 
организаций-нерезидентов Республики Казахстан, филиалами страховых брокеров – нерезидентов Республики Казахстан (далее – проверяемый субъект) требований, установленных банковским, валютным законодательством Республики Казахстан, законодательством Республики Казахстан о страховании и страховой деятельности, платежах и платежных системах, пенсионном обеспечении, рынке ценных бумаг, бухгалтерском учете и финансовой отчетности, кредитных бюро и формировании кредитных историй, почте, Банке Развития Казахстана, микрофинансовой деятельности, коллекторской деятельности, Фонде гарантирования страховых выплат, противодействии легализации (отмыванию) доходов, полученных преступным путем, и финансированию терроризма, 
об акционерных обществах, инвестиционных и венчурных фондах и иными законами Республики Казахстан, а также правилами автоматизации ведения бухгалтерского учета, утвержденными Национальным Банком Республики Казахстан, выявление нарушений прав и законных интересов потребителей финансовых услуг, нарушений, представляющих угрозу национальной и экономической безопасности Республики Казахстан, стабильности ее финансовой системы, выявление недостатков и (или) рисков в деятельности финансовых организаций, банковских конгломератов и (или) страховых групп.
2. По результатам контроля орган контроля и надзора в соответствии с настоящим Законом и иными законами Республики Казахстан и в случае выявления в ходе осуществления своих контрольных функций нарушений проверяемыми субъектами требований законодательства Республики Казахстан, недостатков и (или) рисков в деятельности финансовых организаций, филиалов банков – нерезидентов Республики Казахстан, филиалов страховых (перестраховочных) организаций – нерезидентов Республики Казахстан, филиалов страховых брокеров – нерезидентов Республики Казахстан, банковских конгломератов и (или) страховых групп возбуждает административное производство либо применяет иные меры, в том числе правоограничительные меры, предусмотренные законами Республики Казахстан.<br>
По результатам надзора орган контроля и надзора в соответствии с настоящим Законом и иными законами Республики Казахстан и в случае выявления в ходе осуществления своих надзорных функций нарушений проверяемыми субъектами требований законодательства Республики Казахстан, недостатков и (или) рисков в деятельности финансовых организаций, филиалов банков – нерезидентов Республики Казахстан, филиалов страховых (перестраховочных) организаций – нерезидентов Республики Казахстан, филиалов страховых брокеров – нерезидентов Республики Казахстан, банковских конгломератов и (или) страховых групп применяет предусмотренные законами Республики Казахстан меры, в том числе правоограничительные меры, без возбуждения административного производства.
3. Орган контроля и надзора осуществляет контроль и надзор в формах проведения проверки и иных формах в соответствии с настоящим Законом и иными законами Республики Казахстан.<br>
`

let otvt_vop_3_4_2 = `1. Орган контроля и надзора в пределах компетенции проводит самостоятельно либо с привлечением других государственных органов и (или) организаций проверки на основе оценки степени риска, внеплановые и документальные проверки деятельности проверяемых субъектов комплексно либо выборочно по отдельным вопросам их деятельности.<br>
2. Проверкой на основе оценки степени риска является проверка, осуществляемая в пределах компетенции органом контроля и надзора с выездом к проверяемому субъекту и назначаемая на основе оценки степени риска в отношении проверяемого субъекта.
Проверка субъекта на основе оценки степени риска осуществляется в пределах компетенции органом контроля и надзора не чаще одного раза в год.
Перечень субъектов, подлежащих проверке, составляется в пределах компетенции органом контроля и надзора на полугодовой основе с учетом оценки рисков, связанных с деятельностью проверяемых субъектов.
Перечень субъектов, подлежащих проверке на основе оценки степени риска, утверждается в пределах компетенции руководителем органа контроля и надзора либо иными уполномоченными должностными лицами на основании соответствующего приказа руководителя органа контроля и надзора.<br>
3. Внеплановая проверка осуществляется в пределах компетенции органом контроля и надзора с выездом к проверяемому субъекту в следующих случаях:<br>
1) в связи с поступлением обращений физических и юридических лиц и запросов государственных органов, представляемых в установленном законодательством Республики Казахстан порядке, а также поступлением иной информации о нарушениях законодательства Республики Казахстан;<br>
2) в случае выявления в рамках выполнения контрольных и надзорных функций нарушений требований законодательства Республики Казахстан либо недостатков и (или) рисков, которые могут привести к созданию положения, угрожающего стабильному функционированию финансовой организации, филиала банка-нерезидента Республики Казахстан, филиала страховой (перестраховочной) организации-нерезидента Республики Казахстан, филиала страхового брокера-нерезидента Республики Казахстан, банковского конгломерата, страховой группы и (или) интересам их клиентов;<br>
3) при наличии угрозы национальной и экономической безопасности Республики Казахстан, стабильности ее финансовой системы;<br>
4) в целях контроля за устранением выявленных предыдущей проверкой нарушений требований законодательства Республики Казахстан;<br>
5) в случае отнесения банка к категории банков с неустойчивым финансовым положением, создающим угрозу интересам его депозиторов и кредиторов и (или) угрозу стабильности финансовой системы, и (или) отнесения банка к категории неплатежеспособных банков;<br>
6) в случае отнесения филиала банка-нерезидента Республики Казахстан к категории филиалов банков-нерезидентов Республики Казахстан с неустойчивым финансовым положением, создающим угрозу интересам его депозиторов и кредиторов и (или) угрозу стабильности финансовой системы.
Внеплановая проверка может охватывать одновременно деятельность нескольких субъектов по вопросам соблюдения ими отдельных требований законодательства Республики Казахстан.<br>
4. Документальная проверка осуществляется в пределах компетенции органом контроля и надзора без выезда к проверяемому субъекту в форме запроса документов и информации при выявлении признаков нарушений требований законодательства Республики Казахстан в процессе анализа административных данных либо в связи с поступлением обращений физических, юридических лиц и государственных органов и иной информации, требующей проверки соблюдения законодательства Республики Казахстан, по вопросам, относящимся к компетенции органа контроля и надзора.<br>`
let otvt_vop_3_4_3 = `1. Проверка на основе оценки степени риска и внеплановая проверка проводятся в пределах компетенции органом контроля и надзора на основании акта о назначении проверки, утвержденного заместителем руководителя органа контроля и надзора, руководителями территориальных подразделений органа контроля и надзора либо иными уполномоченными должностными лицами на основании соответствующего приказа.
В случаях назначения проверки на основе оценки степени риска или внеплановой проверки акты о назначении проверки регистрируются в журнале регистрации актов о назначении проверки. Подразделениями органов контроля и надзора в пределах компетенции ведутся отдельные журналы регистрации актов о назначении проверки.
Орган контроля и надзора в пределах компетенции регистрирует акт о назначении проверки в уполномоченном органе по правовой статистике и специальным учетам не позднее двух рабочих дней после начала проверки.
В акте о назначении проверки указываются:<br>
1) номер и дата акта;<br>
2) фамилия, инициалы и должность проверяющих работников, а также лиц, на которых возложено руководство проверкой;<br>
3) наименование проверяемого субъекта, в отношении которого назначено проведение проверки, его место нахождения;<br>
4) вид проверки;<br>
5) вопросы, подлежащие проверке;<br>
6) срок проведения проверки;<br>
7) проверяемый период.<br>
2. Началом проведения проверки на основе оценки степени риска, внеплановой проверки считается дата вручения руководителю (его заместителю) проверяемого субъекта копии акта о назначении проверки. После вручения проверяемому субъекту копии акта о назначении проверки на его оригинале ставится отметка о получении и ознакомлении с актом о назначении проверки.
В случае отказа в принятии акта о назначении проверки или воспрепятствования доступу должностных лиц органа контроля и надзора, осуществляющих проверку, к материалам, необходимым для проведения проверки, составляется соответствующий акт, который подписывается должностным лицом органа контроля и надзора, осуществляющим проверку. При отказе работника проверяемого субъекта в принятии акта о назначении проверки в нем производится соответствующая запись. Отказ от получения акта о назначении проверки не является основанием для отмены проверки. В случаях отказа проверяемого субъекта в предоставлении документов, информации в сроки, указанные в запросах проверяющей группы, невыполнения условий настоящей статьи, повлекших невозможность проведения проверки в установленные сроки, проверка считается несостоявшейся по решению руководителя проверки по согласованию с должностным лицом, уполномоченным на утверждение акта о назначении проверки.
При вручении копии акта о назначении проверки работнику проверяемого субъекта либо его учредителю (одному из учредителей) копия акта о назначении проверки с отметкой о получении его руководителем (его заместителем) проверяемого субъекта должна быть представлена должностным лицам органа контроля и надзора в течение двух рабочих дней с даты вручения акта о назначении проверки.
В случае невозможности вручения копии акта о назначении проверки работнику проверяемого субъекта либо его учредителю (одному из учредителей) она направляется по почте заказным письмом с уведомлением по месту регистрации проверяемого субъекта и (или) его руководителя (его заместителя). При возврате письма и невозможности вручения акта о назначении проверки в сроки, установленные для ее проведения, проверка считается несостоявшейся. При этом руководитель проверки письменно уведомляет об этом должностное лицо, уполномоченное на утверждение акта о назначении проверки.<br>
3. Проверяемый субъект не позднее следующего дня после начала проверки представляет письмо на имя руководителя проверки или проверяющего работника органа контроля и надзора, содержащее данные о:<br>
1) руководителе, ответственном за обеспечение проведения проверки, а также за ознакомление и подписание акта об окончании проверки, промежуточного акта и (или) акта о результатах проверки, и лице, его замещающем;<br>
2) специалистах проверяемого субъекта, ответственных за подготовку необходимых документов (сведений), своевременную их передачу проверяющим работникам и (или) получение промежуточных актов от проверяющих работников.<br>
4. Срок проведения проверки на основе оценки степени риска, внеплановой проверки не должен превышать тридцать рабочих дней. В связи со значительным объемом проверки срок проведения проверки на основе оценки степени риска, внеплановой проверки может быть продлен на основании дополнительного акта о продлении проверки, утвержденного заместителем руководителя органа контроля и надзора, руководителями территориальных подразделений органа контроля и надзора либо иными уполномоченными должностными лицами на основании соответствующего приказа, только один раз на срок не более тридцати рабочих дней, а в отношении банка, филиала банка-нерезидента Республики Казахстан, отнесенных к категории банков, филиалов банков-нерезидентов Республики Казахстан с неустойчивым финансовым положением, создающим угрозу интересам его депозиторов и кредиторов и (или) угрозу стабильности финансовой системы, либо к категории неплатежеспособных банков, филиалов банков-нерезидентов Республики Казахстан, – на срок более тридцати рабочих дней.<br>
5. Проверяемый субъект обязан предоставить проверяющим работникам разрешение на вход в свои административные здания (в том числе в праздничные и выходные дни), отдельное помещение для работы, оборудованное оргтехникой и междугородной связью, обеспечить доступ к информации, касающейся деятельности проверяемого субъекта, в том числе к автоматизированным системам и базам данных в режиме реального времени без возможности исправления данных (в режиме просмотра с возможностью выведения данных на бумажный носитель), предоставить проверяющим работникам возможность снятия копий необходимых документов, в том числе в электронном виде, а также обеспечить представление объяснений (устных и письменных) на вопросы проверяющих работников и оказать проверяющим работникам содействие в своевременном завершении проверки.
Требования части первой настоящего пункта в части обязанности предоставления отдельного помещения для работы, оборудованного оргтехникой и междугородной связью, не распространяются на проверяемые субъекты, являющиеся субъектами малого предпринимательства.<br>
6. Проверяющие работники направляют письменные запросы руководителю проверяемого субъекта, руководителю, ответственному за обеспечение проведения проверки, либо иному уполномоченному работнику проверяемого субъекта, которые подлежат исполнению в указанные сроки.
Проверяемый субъект обязан в день получения запроса от проверяющих работников либо в сроки, установленные в запросе, представить все необходимые сведения и документы, в том числе их копии, для приобщения к материалам проверки.<br>
7. При замене проверяющего работника (изменении состава проверяющей группы) оформляется дополнительный акт, в котором указываются номер и дата ранее составленного акта о назначении проверки и основания замены проверяющего работника (изменения состава проверяющей группы).<br>
8. Датой окончания проверки на основе оценки степени риска, внеплановой проверки считается дата вручения проверяемому субъекту акта об окончании проверки. Акт об окончании проверки на основе оценки степени риска, внеплановой проверки подписывается руководителем проверки и его непосредственным руководителем и вручается проверяемому субъекту не позднее окончания срока проведения проверки, указанного в акте о назначении проверки.<br>`
let otvt_vop_3_4_4 = `1. Документальная проверка не требует оформления акта о ее назначении.<br>
2. При документальной проверке в целях выяснения дополнительных обстоятельств в адрес проверяемого субъекта направляется подписанный уполномоченным должностным лицом запрос, где указываются:<br>
1) наименование проверяемого субъекта, его место нахождения;<br>
2) основание документальной проверки;<br>
3) перечень документов, которые проверяемый субъект обязан представить в орган контроля и надзора;<br>
4) срок представления запрашиваемых материалов;<br>
5) сведения, требующие пояснений со стороны проверяемого субъекта, при необходимости.<br>
3. Проверяемый субъект представляет запрошенные документы и пояснения не позднее пятнадцати рабочих дней с даты получения запроса, если иное не установлено в запросе.<br>
4. Завершением документальной проверки является дата подписания уполномоченным должностным лицом заключения о ее результатах, не требующего подписания со стороны проверяемого субъекта.<br>`
let otvt_vop_3_4_5 = `1. Проверяющими работниками органа контроля и надзора при необходимости составляются промежуточные акты, которые представляются проверяемому субъекту для ознакомления.<br>
2. Проверяемый субъект в течение двух рабочих дней со дня получения промежуточного акта возвращает один экземпляр промежуточного акта, подписанного руководителем (его заместителем) либо руководителем, ответственным за обеспечение проведения проверки, и представляет в случае наличия замечаний к содержанию промежуточного акта свои письменные возражения руководителю проверки.
Заключения, изложенные в промежуточных актах, являются предварительными и могут быть пересмотрены в акте о результатах проверки с учетом полученных от проверяемого субъекта возражений и дополнительной информации, в том числе от третьих лиц.<br>
3. В течение тридцати рабочих дней с даты окончания проверки на основе оценки степени риска, внеплановой проверки на имя руководителя проверяемого субъекта направляются два экземпляра акта о результатах проверки, подписанного проверяющими работниками органа контроля и надзора, руководителем проверки и его непосредственным руководителем.
В акте о результатах проверки указываются следующие сведения:<br>
1) дата и место составления акта;<br>
2) наименование органа, проводившего проверку;<br>
3) дата и номер акта о назначении проверки, на основании которого проведена проверка;<br>
4) фамилия, инициалы и должность лица (лиц), проводившего (проводивших) проверку;<br>
5) наименование проверяемого субъекта, его место нахождения, бизнес-идентификационный номер (при наличии), фамилия, имя, отчество (при наличии) руководителя проверяемого субъекта либо его представителя;<br>
6) место и период проведения проверки;<br>
7) сведения о результатах проверки, в том числе о выявленных нарушениях;
8) сведения об ознакомлении руководителя (его заместителя) либо руководителя, ответственного за обеспечение проведения проверки проверяемого субъекта, либо иного лица, указанного в пункте 7 настоящей статьи, с актом о результатах проверки;<br>
9) подпись должностного лица (лиц), проводившего (проводивших) проверку.  
К акту о результатах проверки могут прилагаться необходимые документы, сведения или их копии, связанные с результатами проверки.<br>
4. Руководитель (его заместитель) либо руководитель, ответственный за обеспечение проведения проверки проверяемого субъекта, принимает первый экземпляр акта о результатах проверки, визирует каждый лист второго экземпляра акта, указывает на его последнем листе отметку о дате получения с указанием должности, фамилии, имени, отчества (при наличии) и не позднее следующего дня после получения акта о результатахпроверки направляет его в орган контроля и надзора. Результаты проверки, изложенные в акте о результатах проверки, доводятся проверяемым субъектом до сведения исполнительного и других органов управления проверяемого субъекта.<br>
5. При наличии возражений по результатам проверки проверяемый субъект в течение десяти рабочих дней со дня получения акта о результатах проверки представляет их в орган контроля и надзора в письменном виде.<br>
6. Результаты проверки проверяемого субъекта, изложенные в акте о результатах проверки на основе оценки степени риска, внеплановой проверки, при необходимости рассматриваются на совещании под председательством руководителя органа контроля и надзора (его заместителей), руководителей подразделений органа контроля и надзора, лиц, на которых возложено руководство проверкой, с приглашением руководителей проверяемого субъекта.
Результаты совещания оформляются протоколом, подписанным председателем совещания, и в течение пяти рабочих дней со дня подписания направляются на ознакомление руководителю проверяемого субъекта. В случае наличия возражений проверяемый субъект в течение трех рабочих дней со дня получения протокола совещания представляет их в орган контроля и надзора в письменном виде.
При несогласии органа контроля и надзора с возражениями проверяемого субъекта к протоколу совещания окончательное решение принимается руководителем органа контроля и надзора либо его заместителем и доводится до сведения руководителя проверяемого субъекта.<br>
7. Акт о результатах проверки на основе оценки степени риска, внеплановой проверки со стороны проверяемого субъекта подписывается руководителем, его заместителем либо руководителем, ответственным за обеспечение проведения проверки.
При отсутствии руководителя проверяемого субъекта, его заместителя либо руководителя, ответственного за обеспечение проведения проверки, акт о результатах проверки на основе оценки степени риска, внеплановой проверки со стороны проверяемого субъекта может быть подписан его учредителем (одним из учредителей) либо иным работником, действующим от имени проверяемого субъекта, в том числе на основании соответствующего приказа и (или) доверенности.<br>
8. В случаях отсутствия лиц, указанных в пункте 7 настоящей статьи, и невозможности вручения им акта о результатах проверки для подписания акт о результатах проверки считается оформленным с даты подписания акта о результатах проверки проверяющими лицами.<br>
9. Результаты проверки подлежат использованию исключительно в целях исполнения органом контроля и надзора своих функций в пределах его компетенции.<br>
10. Акт о результатах проверки на основе оценки степени риска, внеплановой проверки не может быть использован проверяемым субъектом для подтверждения его финансовой состоятельности в рекламных или иных целях, а также передаваться без согласия органа контроля и надзора третьим лицам, за исключением случаев, предусмотренных законами Республики Казахстан.<br>`
let otvt_vop_3_5_1 = `Нарушение законодательства Республики Казахстан о государственном регулировании, контроле и надзоре финансового рынка и финансовых организаций влечет ответственность, установленную законами Республики Казахстан`
let otvt_vop_3_5_2 = `Реорганизация и упразднение уполномоченного органа осуществляются в соответствии с законодательством Республики Казахстан.`
let otvt_vop_3_5_3 = `Проверка деятельности уполномоченного органа государственными органами осуществляется с согласия или по поручению Президента Республики Казахстан.`
let otvt_vop_3_5_4 = `1. Работникам уполномоченного органа предоставляется оплачиваемый ежегодный трудовой отпуск продолжительностью тридцать календарных дней с выплатой пособия для оздоровления в размере двух должностных окладов.
Оплачиваемый ежегодный трудовой отпуск работникам уполномоченного органа за первый и последующие годы работы по соглашению сторон предоставляется в любое время рабочего года.<br>
2. По желанию работников уполномоченного органа ежегодные оплачиваемые трудовые отпуска могут предоставляться им по частям. При этом одна из частей оплачиваемого ежегодного трудового отпуска должна быть не менее двух календарных недель продолжительности отпуска.<br>
3. Работникам уполномоченного органа может быть предоставлен отпуск без сохранения заработной платы в порядке, установленном трудовым законодательством Республики Казахстан, в том числе в случае их обучения в рамках государственного заказа по программам послевузовского образования.<br>`
let otvt_vop_3_5_5 = `1. Работникам уполномоченного органа возмещаются расходы на служебные командировки, в том числе и в иностранные государства, в порядке,определяемом Правительством Республики Казахстан.<br>
2. За командированными работниками уполномоченного органа сохраняются в течение всего времени командировки место работы (должность) и средняя заработная плата.<br>`

let otvt_vop_4_1_1 = `1. Административным правонарушением признается противоправное, виновное (умышленное или неосторожное) действие либо бездействие физического лица или противоправное действие либо бездействие юридического лица, за которое настоящим Кодексом предусмотрена административная ответственность.<br>
2. Административная ответственность за правонарушения, предусмотренные статьями Особенной части настоящего Кодекса, наступает, если эти правонарушения по своему характеру не влекут за собой в соответствии с законодательством уголовной ответственности.<br>`
let otvt_vop_4_1_2 = `Административное правонарушение признается совершенным умышленно, если физическое лицо, его совершившее, сознавало противоправный характер своего действия (бездействия), предвидело его вредные последствия и желало или сознательно допускало наступление этих последствий либо относилось к ним безразлично.`
let otvt_vop_4_1_3 = `Административное правонарушение признается совершенным по неосторожности, если физическое лицо, его совершившее, предвидело возможность наступления вредных последствий своего действия (бездействия), но без достаточных к тому оснований легкомысленно рассчитывало на их предотвращение либо не предвидело возможности наступления таких последствий, хотя при должной внимательности и предусмотрительности должно было и могло их предвидеть.`
let otvt_vop_4_1_4 = ``
let otvt_vop_4_1_5 = ``
let otvt_vop_4_2_1 = `Административной ответственности подлежат:
1) физическое вменяемое лицо, достигшее к моменту окончания или пресечения административного правонарушения шестнадцатилетнего возраста;<br>
2) юридическое лицо.<br>`
let otvt_vop_4_2_2 = `Не подлежит административной ответственности физическое лицо, которое во время совершения противоправного деяния, предусмотренного настоящим Кодексом, находилось в состоянии невменяемости, то есть не могло осознавать фактический характер и опасность своих действий (бездействия) или руководить ими вследствие хронического психического заболевания, временного психического расстройства, слабоумия или иного болезненного состояния психики.`
let otvt_vop_4_2_3 = `Должностное лицо привлекается к административной ответственности при условии совершения административного правонарушения в связи с неисполнением или ненадлежащим исполнением им служебных обязанностей. При отсутствии этого обстоятельства должностное лицо, виновное в совершении административного правонарушения, подлежит ответственности на общих основаниях.
Примечание. Должностными лицами в настоящем Кодексе признаются лица, постоянно, временно или по специальному полномочию осуществляющие или осуществлявшие на момент совершения административного правонарушения функции представителя власти либо выполняющие или выполнявшие на момент совершения административного правонарушения организационно-распорядительные или административно-хозяйственные функции в государственных учреждениях, субъектах квазигосударственного сектора, органах местного самоуправления.`
let otvt_vop_4_2_4 = `1. При фиксации административного правонарушения сертифицированными специальными контрольно-измерительными техническими средствами и приборами, работающими в автоматическом режиме, к административной ответственности за административные правонарушения в области дорожного движения привлекаются собственники (владельцы) транспортных средств.<br>
2. Собственник (владелец) транспортного средства освобождается от административной ответственности за правонарушение, совершенное с участием этого транспортного средства, если в ходе проверки по его сообщению или заявлению будет установлено лицо, во владении которого оно находилось в момент фиксации правонарушения либо оно выбыло из его обладания в результате противоправных действий других лиц. <br>
Примечание.
Владельцами транспортных средств в статьях настоящего Кодекса признаются физические лица, владеющие транспортным средством на праве собственности, а также физические лица, которым транспортные средства, принадлежащие физическим и юридическим лицам, переданы во временное владение и пользование.
Под сертифицированными специальными контрольно-измерительными техническими средствами и приборами в статьях настоящего Кодекса следует понимать технические средства и приборы наблюдения и фиксации правонарушений, прошедшие метрологическую поверку, фото-, видеоаппаратуру, фиксирующие факт и время совершения правонарушения, вид, марку, государственный регистрационный номерной знак, а также скорость и направление движения транспортного средства.`
let otvt_vop_4_2_5 = `1. Военнослужащие и находящиеся на воинских сборах военнообязанные несут ответственность за административные правонарушения, совершенные при исполнении служебных обязанностей, по дисциплинарным уставам, за исключением случаев, предусмотренных статьями 651, 652, 667, 676, 677, 680, 681 настоящего Кодекса. Сотрудники специальных государственных и правоохранительных органов за административные правонарушения, совершенные при исполнении служебных обязанностей, несут ответственность в соответствии с нормативными правовыми актами, регламентирующими порядок прохождения службы в соответствующих органах. <br>
2. За нарушения режима Государственной границы Республики Казахстан, режима в пунктах пропуска через Государственную границу Республики Казахстан и таможенную границу Евразийского экономического союза, законодательства Республики Казахстан о государственных секретах, санитарно-эпидемиологического благополучия населения, требований пожарной безопасности, правил дорожного движения, таможенных правил вне места службы, законодательства Республики Казахстан о бухгалтерском учете и финансовой отчетности, бюджетного и налогового законодательства Республики Казахстан, законодательства Республики Казахстан о государственных закупках, правил охоты, рыболовства, требований экологического законодательства Республики Казахстан, норм рационального использования и охраны природных ресурсов лица, указанные в части первой настоящей статьи, несут административную ответственность на общих основаниях. К указанным лицам не могут быть применены административные взыскания в виде лишения права ношения и хранения огнестрельного и холодного оружия и административного ареста.<br>
3. К военнослужащим, проходящим срочную воинскую службу, и курсантам военных и специальных учебных заведений не может быть применено административное взыскание в виде административного штрафа.<br>
Примечание. Для целей настоящего Кодекса индивидуальные предприниматели и юридические лица несут административную ответственность в качестве субъектов предпринимательства.`
let otvt_vop_4_3_1 = `1.Административное взыскание является мерой государственного принуждения, применяемой уполномоченными на то законом судьей, органами (должностными лицами) за совершение административного правонарушения, и заключается в предусмотренном настоящим Кодексом лишении или ограничении прав и свобод лица, совершившего такое правонарушение.<br>
2.Административное взыскание применяется в целях воспитания лица, совершившего правонарушение, в духе соблюдения требований законодательства и уважения правопорядка, а также предупреждения совершения новых правонарушений как самим правонарушителем, так и другими лицами.<br>
3.Административное взыскание не имеет своей целью причинение физических страданий лицу, совершившему административное правонарушение, или унижение его человеческого достоинства, а также нанесение вреда деловой репутации юридического лица.<br>
4.Административное взыскание не является средством возмещения имущественного ущерба. Причиненный административным правонарушением вред возмещается в порядке, предусмотренном статьей 59 настоящего Кодекса.<br>`
let otvt_vop_4_3_2 = `1. За совершение административных правонарушений могут применяться следующие административные взыскания:<br>
1) предупреждение;<br>
2) административный штраф;<br>
3) конфискация предмета, явившегося орудием либо предметом совершения административного правонарушения, а равно имущества, полученного вследствие совершения административного правонарушения;<br>
4) лишение специального права;<br>
5) лишение разрешения либо приостановление его действия, а также исключение из реестра;<br>
6) приостановление или запрещение деятельности;<br>
7) принудительный снос незаконно возводимого или возведенного строения;<br>
8) административный арест;<br>
9) административное выдворение за пределы Республики Казахстан иностранца или лица без гражданства.<br>
2. К юридическим лицам за совершение административных правонарушений могут применяться административные взыскания, перечисленные в подпунктах 1) – 5) и 7) части первой настоящей статьи, а также приостановление или запрещение деятельности или отдельных видов деятельности юридического лица.<br>`
let otvt_vop_4_3_3 = `1. Предупреждение, административный штраф, административный арест могут применяться только в качестве основных административных взысканий.<br>
2. Лишение специального права, лишение разрешения либо приостановление его действия, а также исключение из реестра, приостановление или запрещение деятельности или отдельных ее видов, а также административное выдворение за пределы Республики Казахстан иностранцев или лиц без гражданства могут применяться в качестве как основных, так и дополнительных административных взысканий.<br>
3. Конфискация, принудительный снос незаконно возводимого или возведенного строения могут применяться только в качестве дополнительного административного взыскания.<br>`
let otvt_vop_4_3_4 = `1. Предупреждение состоит в официальной даче судом, органом (должностным лицом), уполномоченным налагать административное взыскание, отрицательной оценки совершенного правонарушения и предостережении физического или юридического лица о недопустимости противоправного поведения. Предупреждение выносится в письменной форме.<br>
2. При отсутствии обстоятельств, предусмотренных статьей 57 и примечанием к статье 366 настоящего Кодекса, суд (судья), орган (должностное лицо), налагающий административное взыскание, обязан применить предупреждение, предусмотренное соответствующей статьей Особенной части настоящего Кодекса.<br>`
let otvt_vop_4_3_5 = `1. Административный штраф (далее – штраф) есть денежное взыскание, налагаемое за административное правонарушение в случаях и пределах, предусмотренных в статьях Особенной части настоящего раздела, в размере, соответствующем определенному количеству месячного расчетного показателя, устанавливаемого в соответствии с законом, действующим на момент возбуждения дела об административном правонарушении.<br>
В случаях, предусмотренных в статьях Особенной части настоящего раздела, размер штрафа выражается в процентах от:
1) ставок платы за негативное воздействие на окружающую среду, а также суммы экономической выгоды, полученной в результате нарушения экологического законодательства Республики Казахстан;<br>
1-1) суммы ущерба, причиненного ресурсам недр в результате нарушения права государственной собственности на недра;<br>
2) суммы неисполненного или исполненного ненадлежащим образом налогового обязательства;<br>
3) суммы неуплаченных (неперечисленных), несвоевременно и (или) неполно уплаченных (перечисленных) социальных отчислений;<br>`
let otvt_vop_4_4_1 = `1. Несовершеннолетними, на которых распространяется действие настоящей главы, признаются лица, которым ко времени совершения административного правонарушения исполнилось шестнадцать, но не исполнилось восемнадцати лет.<br>
2. На несовершеннолетнего, совершившего административное правонарушение, может быть наложено административное взыскание с применением мер воспитательного воздействия.<br>`
let otvt_vop_4_4_2 = `1.Размер административного штрафа, налагаемого на несовершеннолетнего, не может превышать десять месячных расчетных показателей независимо от размера штрафа, предусмотренного статьей Особенной части настоящего раздела.
При отсутствии у несовершеннолетнего имущества, достаточного для уплаты штрафа, штраф налагается на родителей или лиц, их заменяющих.<br>
2. Лишение специального права может налагаться на несовершеннолетних на срок не более одного года.<br>
3.Другие виды административных взысканий (за исключением административного ареста), а также меры административно-правового воздействия, указанные в статьях 41 и 52 настоящего Кодекса, применяются к несовершеннолетним на общих основаниях.<br>`
let otvt_vop_4_4_3 = `1. При наложении административного взыскания на несовершеннолетнего, кроме обстоятельств, предусмотренных статьями 56 и 57 настоящего Кодекса, учитываются условия его жизни и воспитания, уровень психического развития, иные особенности личности, а также влияние на него старших по возрасту лиц.<br>
2. Несовершеннолетний возраст как смягчающее обстоятельство учитывается в совокупности с другими смягчающими и отягчающими обстоятельствами.<br>`
let otvt_vop_4_4_4 = `Несовершеннолетний, впервые совершивший административное правонарушение, может быть освобожден судом, органом (должностным лицом), уполномоченным рассматривать дела об административных правонарушениях, от административной ответственности или от исполнения назначенного административного взыскания с применением к нему мер воспитательного воздействия, предусмотренных законодательством.`
let otvt_vop_4_4_5 = `1.Несовершеннолетнему могут быть назначены следующие меры воспитательного воздействия:<br>
1) разъяснение закона;<br>
2) исключен Законом РК от 28.12.2017 № 127-VI (вводится в действие по истечении десяти календарных дней после дня его первого официального опубликования);<br>
3) возложение обязанности загладить причиненный вред;<br>
4)ограничение досуга и установление особых требований к поведению несовершеннолетнего.<br>
2.Несовершеннолетнему может быть назначено одновременно несколько мер воспитательного воздействия.<br>
3.Срок применения меры воспитательного воздействия, предусмотренной подпунктом 4) части первой настоящей статьи, устанавливается продолжительностью от трех до шести месяцев.<br>
4.В случае систематического неисполнения несовершеннолетним меры воспитательного воздействия, предусмотренной подпунктом 4) части первой настоящей статьи, органы внутренних дел представляют материалы в суд для решения вопроса об отмене этой меры и привлечения несовершеннолетнего к административной ответственности, если не истек срок давности, установленный частью первой статьи 890 настоящего Кодекса.<br>`
let otvt_vop_4_5_1 = `1.Обмеривание, обвешивание, обсчет, введение в заблуждение относительно потребительских свойств или качества товара (работы, услуги) или иной обман потребителей индивидуальными предпринимателями или организациями, осуществляющими торговую деятельность и оказание услуг, –влекут штраф на физических лиц в размере десяти, на субъектов малого предпринимательства – в размере двадцати, на субъектов среднего предпринимательства – в размере тридцати, на субъектов крупного предпринимательства – в размере пятидесяти месячных расчетных показателей.<br>
2.Действия, предусмотренные частью первой настоящей статьи, совершенные повторно в течение года после наложения административного взыскания, –
влекут штраф на физических лиц в размере тридцати, на субъектов малого предпринимательства – в размере пятидесяти, на субъектов среднего предпринимательства – в размере семидесяти пяти, на субъектов крупного предпринимательства – в размере ста месячных расчетных показателей, с лишением лицензии и приостановлением или запрещением деятельности на срок до трех лет.<br>
3.Действия, предусмотренные частью первой настоящей статьи, повлекшие причинение значительного ущерба, –
влекут штраф на физических лиц в размере тридцати, на субъектов малого предпринимательства – в размере пятидесяти, на субъектов среднего предпринимательства – в размере семидесяти пяти, на субъектов крупного предпринимательства – в размере ста месячных расчетных показателей, с лишением лицензии либо приостановлением или запрещением деятельности на срок до трех лет.<br>`
let otvt_vop_4_5_2 = `1.Нарушение требований законодательства Республики Казахстан, совершенное в виде реализации ювелирных и других изделий из драгоценных металлов и драгоценных камней без наличия пробирного клейма, а также оттиска именника, проставляемого субъектом производства ювелирных и других изделий из драгоценных металлов и драгоценных камней на произведенных ими ювелирных и других изделиях из драгоценных металлов и драгоценных камней, –влечет штраф на физических лиц в размере пятидесяти, на должностных лиц, субъектов малого предпринимательства – в размере восьмидесяти, на субъектов среднего предпринимательства – в размере ста, на субъектов крупного предпринимательства – в размере ста пятидесяти месячных расчетных показателей.<br>
2. Действие, предусмотренное частью первой настоящей статьи, совершенное повторно в течение года после наложения административного взыскания, – 
влечет штраф на физических лиц в размере восьмидесяти, на должностных лиц, субъектов малого предпринимательства – в размере ста, на субъектов среднего предпринимательства – в размере ста пятидесяти, на субъектов крупного предпринимательства – в размере двухсот месячных расчетных показателей.<br>`
let otvt_vop_4_5_3 = `Продажа специальных технических средств, предназначенных для проведения специальных оперативно-розыскных мероприятий, лицам, не имеющим соответствующего разрешения, кроме государственных органов, уполномоченных на осуществление оперативно-розыскной деятельности, –влечет штраф в размере сорока месячных расчетных показателей.`
let otvt_vop_4_5_4 = `1. Непредоставление по просьбе покупателя необходимой информации о товаре, его месте происхождения, изготовителях, потребительских свойствах, гарантийных обязательствах и порядке предъявления претензий – влечет предупреждение или штраф на физических лиц в размере двух, на субъектов малого предпринимательства – в размере шести, на субъектов среднего предпринимательства – в размере десяти, на субъектов крупного предпринимательства – в размере тридцати месячных расчетных показателей.<br>
2.Неправомерное использование официального документа, удостоверяющего соответствие товаров требованиям безопасности, –влечет штраф на физических лиц в размере семи, на субъектов малого предпринимательства – в размере пятидесяти пяти, на субъектов среднего предпринимательства – в размере ста, на субъектов крупного предпринимательства – в размере ста пятидесяти месячных расчетных показателей, с конфискацией товаров либо без таковой.<br>
3.Совершение действий (бездействие), предусмотренных частями первой и второй настоящей статьи, повторно в течение года после наложения административного взыскания – влечет штраф на физических лиц в размере десяти, на субъектов малого предпринимательства – в размере шестидесяти пяти, на субъектов среднего предпринимательства – в размере ста двадцати, на субъектов крупного предпринимательства – в размере двухсот месячных расчетных показателей, с конфискацией товаров либо без таковой.<br>`
let otvt_vop_4_5_5 = ``

let otvt_vop_5_1_1 = `В настоящем Законе используются следующие основные понятии
1)Государственная корпорация «Правительство для граждан» (далее
Государственная корпорация)-идическое лицо, созданное по решению Правительства Республики Казахстан для оказания государственных услуг, услуг по выдаче технических условий на подключение к сетям субъектов естественных монополий и услуг субъектов квазигосударственного сектора в соответствии с законодательством Республики Казахстан, организации работы по приему заявлений на оказание государственных услуг, услуг по выдаче технических условий на подключение к сетям субъектов естественных монополий, услуг субъектов квазигосударственного сектора и выдаче их результатов услугополучателю по принципу «одного окна», а также обеспечения оказания государственных услуг в электронной форме, осуществляющее государственную регистрацию прав на недвижимое имущество по месту его нахождения;<br>
2)коэффициент количества иждивенцев - коэффициент,который определяется в зависимости от количества членов семьи умершего (признанного судом безвестно отсутствующим или объявленного умершим) кормильца, состоявших на его иждивении;<br>
3) кормилец - лицо, содержащее нетрудоспособных членов семьи,состоящих на его иждивении, за счет своего дохода;<br>
4)социальные отчисления - деньги, уплачиваемые плательщиками социальных отчислений в Государственный фонд социального страхования в порядке, установленном законодательством Республики Казахстан;<br>
5)задолженность по социальным отчислениям - исчисленные и не уплаченные в сроки, установленные законодательством Республики Казахстан, суммы социальных отчислений, а также неуплаченные суммы пени;<br>
6)ставка социальных отчислений - фиксированный размер обязательных платежей в Государственный фонд социального страхования, выраженный в процентном отношении к величине объекта исчисления социальных отчислений;<br>`
let otvt_vop_5_1_2 = `1.Законодательство Республики Казахстан об обязательном социальном страховании основывается на Конституции Республики Казахстан и состоит из настоящего Закона и иных нормативных правовых актов Республики Казахстан.<br>
2.Если международным договором, ратифицированным Республикой Казахстан, установлены иные правила, чем те, которые содержатся в настоящем Законе, то применяются правила международного договора.<br>
3.На правоотношения, урегулированные законодательством Республики Казахстан об обязательном социальном страховании, не распространяется действие законодательства Республики Казахстан о страховании и страховой деятельности.<br>`
let otvt_vop_5_1_3 = `1)исключен Законом РК от 10.01.2018 № 134-VI (вводится в действие по истечении шести месяцев после дня его первого официального опубликования);<br>
Подпункт 2) предусмотрен в редакции Закона РК от 12.07.2022 № 138- HYPERLINK "https://adilet.zan.kz/rus/docs/Z2200000138"VII (вводится в действие с 01.01.2024).<br>
2)система "бонус-малус" - система скидок и надбавок, используемая при расчете размера страховой премии, подлежащей уплате по договору обязательного страхования гражданско-правовой ответственности владельцев транспортных средств, посредством применения к страхователю (застрахованному) повышающих или понижающих коэффициентов в зависимости от наличия или отсутствия страховых случаев по его вине с присвоением соответствующего класса по данной системе;<br>
2-1) система "бонус-малус" – система скидок и надбавок, используемая при расчете размера страховой премии, подлежащей уплате по договору обязательного страхования гражданско-правовой ответственности владельцев транспортных средств, посредством применения к страхователю (застрахованному) повышающих или понижающих коэффициентов в зависимости от наличия или отсутствия у страхователя (застрахованного) страховых случаев по его вине с присвоением соответствующего класса;<br>
3) потерпевший – лицо, жизни, здоровью и (или) имуществу которого причинен вред в результате эксплуатации транспортного средства;<br>`
let otvt_vop_5_1_4 = `1.Страхование представляет собой комплекс отношений по защите законных имущественных интересов физического или юридического лица при наступлении страхового случая или иного события, определенного договором страхования, посредством страховой выплаты, осуществляемой страховой организацией.<br>
2.Страховой деятельностью является деятельность страховой (перестраховочной) организации, филиала страховой (перестраховочной) организации-нерезидента Республики Казахстан, связанная с заключением и исполнением договоров страхования (перестрахования), осуществляемая на основании лицензии уполномоченного органа в соответствии с требованиями законодательства Республики Казахстан, а также деятельность обществ взаимного страхования, связанная с заключением и исполнением договоров страхования, осуществляемая без лицензии в соответствии с Законом Республики Казахстан «О взаимном страховании».<br>
3.Исламской страховой деятельностью является деятельность исламской страховой (перестраховочной) организации, филиала исламской страховой (перестраховочной) организации-нерезидента Республики Казахстан, связанная с заключением и исполнением договоров исламского страхования (перестрахования), осуществляемая на основании лицензии уполномоченного органа в соответствии с требованиями законодательства Республики Казахстан.<br>`
let otvt_vop_5_1_5 = `1. Иностранные граждане, лица без гражданства, иностранные юридические лица, в том числе осуществляющие свою деятельность на территории Республики Казахстан, пользуются правом на страховую защиту наравне с гражданами и юридическими лицами Республики Казахстан.<br>`
let otvt_vop_5_2_1 = `1.Для организации и осуществления государственного регулирования и лицензирования страховой деятельности страхование подразделяется на отрасли, классы и виды. Страховая деятельность страховой организации осуществляется по отрасли «страхование жизни» и отрасли «общее страхование».<br>
2.Отрасль «страхование жизни» включает обязательное страхование работника от несчастных случаев при исполнении им трудовых (служебных) обязанностей и следующие классы в добровольной форме страхования:<br>
1)страхование жизни, за исключением класса, указанного в подпункте 3) настоящего пункта;<br>
2)аннуитетное страхование, за исключением класса, указанного в подпункте 4) настоящего пункта;<br>
3)страхование жизни в рамках государственной образовательной накопительной системы;<br>
4) пенсионное аннуитетное страхование.<br>
3.Отрасль «общее страхование» включает следующие классы в добровольной форме страхования:<br>
1) страхование от несчастных случаев;<br>
2) страхование на случай болезни;<br>
3) страхование автомобильного транспорта;<br>
4) страхование железнодорожного транспорта;<br>
5) страхование воздушного транспорта;<br>
6) страхование водного транспорта;<br>`
let otvt_vop_5_2_2 = `1.Страхование жизни представляет собой совокупность видов страхования, предусматривающих осуществление страховых выплат в случаях смерти застрахованного или дожития им до окончания срока страхования либо определенного договором страхования возраста, за исключением вида страхования, указанного в пункте 2-3 настоящей статьи.<br>
2. Аннуитетное страхование представляет собой совокупность видов накопительного страхования, предусматривающих осуществление периодических страховых выплат в виде периодических платежей в пользу выгодоприобретателя в течение установленного договором срока, за исключением вида страхования, указанного в пункте 2-4 настоящей статьи.<br>`
let otvt_vop_5_2_3 = `1. Деятельность страховой организации на территории Республики Казахстан осуществляется на основании лицензии по отрасли «страхование жизни» или лицензии по отрасли «общее страхование» в пределах соответствующих классов страхования, указанных в лицензии.<br>
2. Деятельность в отрасли «общее страхование» не может:<br>
1) совмещаться с деятельностью в отрасли «страхование жизни»;<br>
2) осуществляться в форме накопительного страхования.<br>`
let otvt_vop_5_2_4 = `. Деятельность по осуществлению перестрахования на территории Республики Казахстан подлежит лицензированию в порядке, предусмотренном настоящим Законом.<br>
2. Страховая организация осуществляет передачу страховых рисков на перестрахование без наличия лицензии по перестрахованию.<br>
3. Страховая организация вправе принимать страховые риски на перестрахование только при наличии лицензии по перестрахованию.<br>
 Статья 12. Права и обязанности участника системы обязательного социального страхования и получателя
1. Участник системы обязательного социального страхования, а в случае его смерти (признания судом безвестно отсутствующим или объявления умершим) члены семьи, состоявшие на его иждивении, и получатель имеют право:<br>
1) подавать заявление о назначении социальной выплаты на случай утраты трудоспособности в фонд: <br>
через подразделение МСЭ при первичном установлении степени утраты общей трудоспособности;
через Государственную корпорацию при установлении степени утраты общей трудоспособности на момент обращения;
2) подавать заявление о назначении социальной выплаты на случай потери кормильца в фонд через Государственную корпорацию;<br>
3) подавать заявление о назначении социальной выплаты на случай потери работы в фонд:<br>
через Государственную корпорацию, если лицо зарегистрировано в качестве безработного;
через центр занятости населения при регистрации в качестве безработного;
через веб-портал «электронного правительства» при наличии сведений о регистрации в качестве безработного;
через портал «Электронная биржа труда» при регистрации в качестве безработного на указанном портале;`
let otvt_vop_5_2_5 = ``
let otvt_vop_5_3_1 = `1) страховая (перестраховочная) организация;
1-1) филиал страховой (перестраховочной) организации-нерезидента Республики Казахстан;<br>
2) страховой брокер;<br>
2-1) филиал страхового брокера-нерезидента Республики Казахстан;<br>
3) страховой агент;<br>
4) страхователь, застрахованный, выгодоприобретатель;<br>
5) актуарий;<br>
6) независимый актуарий;<br>
7) оценщик;<br>
8) андеррайтер;<br>
9) аджастер;<br>
10) сюрвейер;<br>
11) страховой омбудсман;<br>
11-1) организация, гарантирующая осуществление страховых выплат страхователям (застрахованным, выгодоприобретателям) в случае ликвидации страховых организаций;<br>
11-2) организация по формированию и ведению базы данных;<br>
12) объединение страховых (перестраховочных) организаций и страховых брокеров;<br>
13) объединение актуариев;<br>
14) иные физические и юридические лица, осуществляющие предпринимательскую деятельность, связанную со страхованием. <br>`
let otvt_vop_5_3_2 = `1. Страховая деятельность является основным видом предпринимательской деятельности, осуществляемой страховой (перестраховочной) организацией.<br>
2. Страховая (перестраховочная) организация, кроме страховой деятельности, вправе осуществлять следующие виды деятельности:<br>
1) инвестиционную деятельность с учетом ограничений, установленных настоящим Законом;<br>`
let otvt_vop_5_3_3 = `1. Страховая (перестраховочная) организация вправе осуществлять страховую деятельность только при наличии лицензии на право осуществления страховой деятельности (деятельности по перестрахованию), правил страхования, определяющих общие условия осуществления страхования по определенному виду, и внутренних правил.<br>
2. Внутренние правила страховой (перестраховочной) организации должны определять:<br>
1) структуру, задачи, функции и полномочия подразделений страховой (перестраховочной) организации;<br>
2) структуру, количество членов, задачи, функции и полномочия службы внутреннего аудита и других постоянно действующих органов;<br>
3) систему управления рисками, раскрывающую политику страховой (перестраховочной) организации по управлению техническими (страховыми), инвестиционными, кредитными, операционными, рыночными и другими рисками;
4) права и обязанности руководителей структурных подразделений;<br>
5) полномочия должностных лиц и работников страховой (перестраховочной) организации при осуществлении ими сделок от ее имени и за ее счет;<br>
6) порядок регистрации письменных и устных обращений страхователей (застрахованных), потерпевших (выгодоприобретателей) и их представителей, а также поступающих заявлений и документов по вопросам страховых случаев;<br>
7) порядок и сроки рассмотрения и представления ответов страхователям (застрахованным), потерпевшим (выгодоприобретателям) и их представителям по заявлениям и документам по вопросам страховых случаев;<br>
8) процедуру принятия решения о страховой выплате с указанием сроков ее осуществления или представления мотивированного обоснования причин отказа в страховой выплате;<br>
9) порядок оценки страховых рисков (в том числе имущества, принимаемого в страхование) и размера ущерба по страховому случаю;<br>
10) полномочия андеррайтера, аджастера и сюрвейера;<br>`
let otvt_vop_5_3_4 = `1. При осуществлении страхования (перестрахования) рисков посредством создания страхового (перестраховочного) пула договор сострахования (перестрахования) может заключаться на условиях страховой (перестраховочной) организации, принимающей на себя функции и полномочия ведущей страховой (перестраховочной) организации.<br>
2. Договор о совместной деятельности должен содержать следующую информацию:<br>
1) наименование страховой (перестраховочной) организации, являющейся ведущей в деятельности страхового (перестраховочного) пула, либо страхового брокера, привлеченного для управления деятельностью страхового (перестраховочного) пула<br>
2) классы (виды) страхования и перечень страховых рисков, являющихся предметом деятельности страхового (перестраховочного) пула;<br>
3) максимальный размер совокупных обязательств страхового (перестраховочного) пула и его участников, включая максимальный размер обязательств по отдельному договору сострахования (совместного перестрахования), максимальную долю ответственности каждого участника пула по принимаемым рискам;<br>
4) условия, порядок заключения и исполнения договоров сострахования (совместного перестрахования);<br>
5) срок действия договора;<br>
6) права и обязанности сторон;<br>`
let otvt_vop_5_3_5 = `1. Ни одно лицо, не имеющее соответствующую лицензию уполномоченного органа, не имеет права:<br>
1) осуществлять от своего имени деятельность по страхованию, перестрахованию, оказывать услуги страхового брокера, актуария в случаях, предусмотренных пунктами 4 и 5 статьи 11-1 настоящего Закона, в качестве основного или дополнительного вида деятельности;<br>
2) использовать на любом языке в своем наименовании, документах, объявлениях и рекламе слова «страхование», «перестрахование», «страховая организация», «перестраховочная организация», «страховой брокер» или производные от них слова (выражения), подразумевающие, что оно осуществляет от своего имени страховые или перестраховочные операции либо выступает в качестве страхового брокера, актуария в случаях, предусмотренных пунктами 4 и 5 статьи 11-1 настоящего Закона.<br>`
let otvt_vop_5_4_1 = `1.Организационно-правовой формой страхового брокера является товарищество с ограниченной ответственностью либо акционерное общество.<br>
2. Наименование страхового брокера должно содержать слова «страховой брокер» или производные от них слова.<br>
 3. Страховому брокеру запрещается использовать в своем наименовании слова «национальный», «центральный», «бюджетный», «республиканский».<br>
4. Не допускается использование в качестве наименования обозначений, тождественных или сходных до степени его смешения с наименованием ранее созданных страховых брокеров, в том числе страховых брокеров - нерезидентов Республики Казахстан. Настоящий запрет не распространяется на дочернего страхового брокера в случае использования им наименования родительской организации.<br>
5. Государственная регистрация страхового брокера производится в порядке, определенном законодательством Республики Казахстан.<br>`
let otvt_vop_5_4_2 = `1. Деятельность страхового брокера является исключительным видом деятельности и подлежит лицензированию уполномоченным органом.<br>
Страховому брокеру запрещается:
1) осуществлять деятельность страхового агента, за исключением деятельности, связанной с управлением деятельностью страхового (перестраховочного) пула;<br>
2) участвовать в государственных закупках по предоставлению услуг, связанных с заключением договоров страхования, за исключением предоставления услуг по управлению деятельностью страхового (перестраховочного) пула;<br>
3) передавать риски в перестрахование при участии двух и более страховых брокеров, являющихся нерезидентами Республики Казахстан либо участниками Международного финансового центра «Астана»;<br>
4) выдавать работникам и аффилированным лицам деньги без первичных учетных документов;э<br>
5) предоставлять финансовую помощь на безвозмездной основе, за исключением финансовой помощи работникам страхового брокера, на сумму, не превышающую стократный размер месячного расчетного показателя, установленного законом о республиканском бюджете и действующего на 1 января соответствующего финансового года.<br>`
let otvt_vop_5_4_3 = `1.Полномочия страхового агента на осуществление посреднической деятельности на страховом рынке определяются договором поручения с учетом требований настоящего Закона и нормативных правовых актов уполномоченного органа.<br>
Требования к договору поручения, заключаемому между страховой организацией и страховым агентом, устанавливаются нормативным правовым актом уполномоченного органа.
Страховой агент лично совершает действия, на которые уполномочен страховой организацией, и не вправе передоверять их совершение иному лицу.
Деятельность в качестве страхового агента в случае отсутствия у него полномочий не допускается.`
let otvt_vop_5_4_4 = ``
let otvt_vop_5_4_5 = ``
let otvt_vop_5_5_1 = `1. Исключен в соответствии с Законом РК от 02.07.18 г. № 166-VI<br>
2. Актуарная деятельность должна осуществляться в соответствии с настоящим Законом и нормативными правовыми актами уполномоченного органа, а также с учетом международных принципов (стандартов) осуществления актуарной деятельности.<br>
2-1. Актуарная деятельность включает в себя предоставление услуг по:<br>
1) расчету размеров обязательств по договорам страхования и перестрахования;<br>
2) определению размеров займов, предоставляемых страхователям по договорам накопительного страхования;<br> 
3) составлению актуарного заключения о совершении крупной сделки по договорам страхования и перестрахования;<br>
4) разработке методологии исчисления и экономического обоснования страховых тарифов, а также расчету ставок страховых премий по договорам страхования и перестрахования;<br>
5) анализу и обновлению показателей дожития для оценки страховых премий и страховых резервов по договорам аннуитетного страхования и страхования жизни;<br>
6) оказанию консультационных услуг и предоставлению рекомендаций по вопросам актуарных расчетов;<br>
7) вопросам, связанным с оценкой финансовой устойчивости и платежеспособности страховой (перестраховочной) организации;<br>
8) анализу и количественной, финансовой оценке рисков и (или) обусловленных наличием рисков финансовых обязательств, а также разработке и оценке эффективности методов управления финансовыми рисками.<br>`
let otvt_vop_5_5_2 = `1. Аудит страховой (перестраховочной) организации, страхового брокера и организации, гарантирующей осуществление страховых выплат, производится аудиторской организацией, правомочной на проведение аудита в соответствии с законодательством Республики Казахстан об аудиторской деятельности и соответствующей требованиям пункта 1-1 настоящей статьи.<br>
1-1. Аудиторский отчет признается действительным при условии представления документов, подтверждающих, что аудиторская организация:
независима от проверяемой страховой (перестраховочной) организации, ее акционеров и руководящих работников;<br>
независима от проверяемого страхового брокера, его акционеров (участников) и руководящих работников;
независима от проверяемой организации, гарантирующей осуществление страховых выплат, ее акционеров и руководящих работников;
уполномочена на осуществление аудиторской деятельности в соответствии с лицензией и соответствует минимальным требованиям к аудиторским организациям, которые проводят обязательный аудит финансовых организаций, разработанным уполномоченным государственным органом, осуществляющим государственное регулирование в области аудиторской деятельности и контроль за деятельностью аудиторских и профессиональных аудиторских организаций, по согласованию с уполномоченным органом, либо уполномочена на осуществление аудиторской деятельности в соответствии с лицензией компетентного органа государства, резидентом которого является.
2. Страховая (перестраховочная) организация, страховой брокер, организация, гарантирующая осуществление страховых выплат, страховой холдинг и организации, в которых страховая (перестраховочная) организация и (или) страховой холдинг являются крупными участниками, а также организации, входящие в страховую группу, не вправе производить аудит своей деятельности более семи лет подряд в одной аудиторской организации либо более пяти лет подряд у аудитора, работающего в аудиторской организации.<br>
Требование настоящего пункта не распространяется на страховую (перестраховочную) организацию, входящую в состав банковского конгломерата.
3. Аудит организаций, входящих в страховую группу в качестве родительской организации и ее дочерних организаций, являющихся резидентами Республики Казахстан, осуществляется одной и той же аудиторской организацией. Аудит родительской организации и ее дочерних организаций-нерезидентов Республики Казахстан, входящих в состав страховой группы, должен осуществляться одной и той же аудиторской организацией в случаях, когда проведение такого аудита не противоречит требованиям законодательства страны их резидентства.<br>`
let otvt_vop_5_5_3 = ``
let otvt_vop_5_5_4 = ``
let otvt_vop_5_5_5 = ``

let otvt_vop_6_1_1 = `1. Наследование - это переход имущества умершего гражданина (наследодателя) к другому лицу (лицам) - наследнику (наследникам).<br>
2. Наследство умершего гражданина переходит к другим лицам на условиях универсального правопреемства как единое целое и в один и тот же момент, если из правил настоящего раздела не вытекает иное.<br>
3. Наследование регулируется настоящим Кодексом, а в случаях, прямо им установленных, и иными законодательными актами.<br>`
let otvt_vop_6_1_2 = `1. Наследование осуществляется по завещанию и (или) по закону.<br>
2. Наследование по закону имеет место, когда завещание отсутствует либо определяет судьбу не всего наследства, а также в иных случаях, установленных настоящим Кодексом.<br>`
let otvt_vop_6_1_3 = `1. В состав наследства входит принадлежащее наследодателю имущество, а также права и обязанности, существование которых не прекращается с его смертью.
В состав наследства могут также входить права, необходимые для оформления имущественных прав наследодателя, которые не были оформлены при его жизни, в том числе право на их регистрацию.<br>
2. Не входят в состав наследства права и обязанности, неразрывно связанные с личностью наследодателя:
1) права членства в организациях, являющихся юридическими лицами, если иное не установлено законодательными актами или договором;<br>
2) право на возмещение вреда, причиненного жизни или здоровью;<br>
3) права и обязанности, вытекающие из алиментных обязательств;<br>
4) права на пенсионные выплаты, пособия и другие выплаты на основании трудового законодательства Республики Казахстан и законов Республики Казахстан в сфере социального обеспечения;<br>
5) личные неимущественные права, не связанные с имущественными, за исключением случаев, установленных законодательными актами.<br>
3. Личные неимущественные права и другие нематериальные блага, принадлежавшие наследодателю, могут осуществляться и защищаться наследниками.<br>`
let otvt_vop_6_1_4 = `1. Смерть участника общей совместной собственности является основанием для определения его доли в собственности и раздела общего имущества либо выдела из него доли умершего участника в порядке, установленном статьей 218 настоящего Кодекса. В этом случае наследство открывается на долю умершего участника в общем имуществе, а при невозможности раздела имущества в натуре - в отношении стоимости доли.<br>
2. Участник общей совместной собственности вправе завещать свою долю в общем имуществе, которая будет определена после его смерти в соответствии с пунктом 1 настоящей статьи.<br>`
let otvt_vop_6_1_5 = `1. Наследство открывается вследствие смерти гражданина или объявления его умершим.<br>
2. Временем открытия наследства является день смерти наследодателя, а при объявлении его умершим - день вступления в силу судебного решения об объявлении гражданина умершим, если в решении суда не указан иной день.<br>
3. Если в один и тот же день умерли лица, которые вправе были наследовать один после другого, они признаются умершими одновременно и наследование открывается после каждого из них, и к наследованию призываются наследники каждого из них.<br>`
let otvt_vop_6_2_1 = `1. Завещанием признается волеизъявление гражданина по распоряжению принадлежащим ему имуществом на случай смерти.<br>
1-1. Завещание совершается гражданином, обладающим в момент его совершения дееспособностью в полном объеме.<br>
2. Гражданин может завещать все свое имущество или часть его одному либо нескольким лицам, как входящим, так и не входящим в круг наследников по закону, а также юридическим лицам и государству.<br>
3. Завещание должно быть совершено лично. Совершение завещания через представителя не допускается.<br>
4. Завещатель вправе без объяснения причин лишить наследства одного, нескольких или всех наследников по закону. Лишение наследника по закону наследства не распространяется на его потомков, наследующих по праву представления, если из завещания не вытекает иное.<br>
5. Наследодатель вправе совершить завещание, содержащее распоряжение о любом своем имуществе, в том числе и о том, которое он может приобрести в будущем.<br>
Завещатель может любым образом определять доли наследников в наследстве, распорядиться своим имуществом или какой-либо его частью, составив одно или несколько завещаний, касающихся разного имущества.
6. Наследодатель свободен отменять и изменять составленное завещание в любой момент после его совершения и не обязан указывать причины отмены или изменения.<br>
7. Наследодатель не вправе возложить на лиц, назначенных им наследниками в завещании, обязанность в свою очередь распорядиться определенным образом завещанным им имуществом на случай их смерти.<br>`
let otvt_vop_6_2_2 = `1. Завещатель вправе обусловить получение наследства определенным условием относительно характера поведения наследника.<br>
2. Противоправные условия, включенные в распоряжение о назначении наследника или лишении права наследования, ничтожны.<br>
3. Включенные в завещание условия, которые невыполнимы для наследника по состоянию его здоровья или в силу иных объективных причин, могут быть признаны недействительными по иску наследника.<br>`
let otvt_vop_6_2_3 = `1. Завещатель может на случай, если указанный в завещании наследник умрет до открытия наследства, не примет его либо откажется от него или будет устранен от наследования как недостойный наследник в порядке статьи 1045настоящего Кодекса, а также на случай невыполнения наследником по завещанию правомерных условий наследодателя, назначить другого наследника (подназначение наследника).<br>
2. Подназначенным наследником может быть любое лицо, которое в соответствии со статьей 1044 настоящего Кодекса может быть наследником.<br>
3. Отказ наследника по завещанию не в пользу подназначенного наследника не допускается<br>`
let otvt_vop_6_2_4 = `1. Часть имущества, оставшаяся незавещанной, распределяется между наследниками по закону, призываемыми к наследованию в порядке статей 1061 - 1064 настоящего Кодекса.<br>
2. В число этих наследников входят и те наследники по закону, которым другая часть имущества была оставлена по завещанию.<br>`
let otvt_vop_6_2_5 = `1. Завещание должно быть совершено в письменной форме и нотариально удостоверено с указанием места, даты и времени его составления.<br>
2. Надлежаще оформленными признаются:<br>
1) нотариально удостоверенные завещания;<br>
2) завещания, приравниваемые к нотариально удостоверенным.<br>
3. Завещание должно быть собственноручно подписано завещателем.<br>
Если завещатель в силу физических недостатков, болезни или неграмотности не может собственноручно подписать завещание, оно по его просьбе может быть подписано в присутствии нотариуса или иного лица, удостоверяющего завещание, другим гражданином с указанием причин, в силу которых завещатель не мог подписать завещание собственноручно.
4. В случаях, когда в соответствии с правилами настоящего Кодекса при составлении, подписании или удостоверении завещания должны присутствовать свидетели, не могут быть свидетелями, а также не могут подписывать завещание вместо завещателя:<br>
1) нотариус или иное лицо, удостоверяющее завещание;<br>
2) лицо, в пользу которого составлено завещание или сделан завещательный отказ, его супруг, его дети, родители, внуки и правнуки, а также наследники завещателя по закону;<br>
3) граждане, не обладающие полной дееспособностью;<br>
4) неграмотные и другие лица, не способные прочитать завещание;<br>
5) лица, имеющие судимость за дачу ложных показаний.<br>`
let otvt_vop_6_3_1 = `1. Наследники по закону призываются к наследованию в порядке очередности, предусмотренной статьями 1061 - 1064настоящего Кодекса.<br>
2. При наследовании по закону усыновленный и его потомство, с одной стороны, и усыновитель и его родственники, с другой, приравниваются к кровным родственникам.<br>
Усыновленные и их потомство не наследуют по закону после смерти кровных родителей усыновленного, других его кровных родственников.
Родители усыновленного и другие его кровные родственники не наследуют по закону после смерти усыновленного и его потомства.
3. Каждая последующая очередь наследников по закону получает право на наследование в случае отсутствия наследников предыдущей очереди, устранения их от наследства, непринятия ими наследства либо отказа от него, кроме случаев, указанных в пункте 5 статьи 1074 настоящего Кодекса.<br>
4. Правила настоящего Кодекса об очередности признания наследников по закону к наследованию и о размере их долей в наследстве могут быть изменены нотариально удостоверенным соглашением заинтересованных наследников, заключенным после открытия наследства. Такое соглашение не должно затрагивать прав не участвующих в нем наследников, а также наследников, имеющих право на обязательную долю.<br>`
let otvt_vop_6_3_2 = `1. В первую очередь право на наследование по закону получают в равных долях дети наследодателя, в том числе родившиеся живыми после его смерти, а также супруг (супруга) и родители наследодателя.<br>
2. Внуки наследодателя и их потомки наследуют по праву представления.<br>`
let otvt_vop_6_3_3 = `1. Если нет наследников первой очереди, право на наследование по закону во вторую очередь получают в равных долях полнородные и неполнородные братья и сестры наследодателя, а также его дедушка и бабушка как со стороны отца, так и со стороны матери.<br>
2. Дети полнородных и неполнородных братьев и сестер наследодателя (племянники и племянницы наследодателя) наследуют по праву представления<br>`
let otvt_vop_6_3_4 = `1. Если нет наследников первой и второй очереди, право на наследование по закону в третью очередь получают в равных долях родные дяди и тети наследодателя.<br>
2. Двоюродные братья и сестры наследодателя наследуют по праву представления.<br>`
let otvt_vop_6_3_5 = `1. Если нет наследников первой, второй и третьей очереди, право наследовать по закону получают родственники наследодателя третьей, четвертой и пятой степени родства, не относящиеся к наследникам предшествующих очередей.<br>
Степень родства определяется числом рождений, отделяющих родственников одного от другого. Рождение самого наследодателя в это число не входит.
2. В соответствии с пунктом 1 настоящей статьи призываются к наследованию:<br>
в качестве наследников четвертой очереди родственники третьей степени родства - прадедушки и прабабушки наследодателя;
в качестве наследников пятой очереди родственники четвертой степени родства - дети родных племянников и племянниц наследодателя (двоюродные внуки и внучки) и родные братья и сестры его дедушек и бабушек (двоюродные дедушки и бабушки);
в качестве наследников шестой очереди родственники пятой степени родства - дети двоюродных внуков и внучек наследодателя (двоюродные правнуки и правнучки), дети его двоюродных братьев и сестер (двоюродные племянники и племянницы) и дети его двоюродных дедушек и бабушек (двоюродные дяди и тети).
3. Если нет наследников предшествующих очередей, к наследованию в качестве наследников седьмой очереди по закону призываются сводные братья и сестры, пасынки, падчерицы, отчим и мачеха наследодателя, если они совместно проживали с наследодателем одной семьей не менее десяти лет.<br>`
let otvt_vop_6_4_1 = `1. Для приобретения наследства наследник должен его принять.<br>
2. Принятие наследником части наследства означает принятие всего причитающегося ему наследства.<br>
При призвании наследника к наследованию одновременно по нескольким основаниям наследник может принять наследство, причитающееся ему по одному из этих оснований, по нескольким из них или по всем основаниям.
Не допускается принятие наследства под условием или с оговорками.
3. Принятие наследства одним или несколькими наследниками не означает принятия наследства остальными наследниками.<br>
4. Принятое наследство признается принадлежащим наследнику со дня открытия наследства независимо от времени его фактического принятия, а также независимо от момента государственной регистрации права наследника на наследственное имущество, когда такое право подлежит государственной регистрации.<br>`
let otvt_vop_6_4_2 = `1. Принятие наследства осуществляется подачей по месту открытия наследства нотариусу или уполномоченному в соответствии с законом на выдачу свидетельства о праве на наследство должностному лицу заявления наследника о принятии наследства либо заявления наследника о выдаче свидетельства о праве на наследство.<br>
Если заявление наследника передается нотариусу другим лицом или пересылается по почте, подпись наследника на заявлении должна быть засвидетельствована нотариусом, должностным лицом, уполномоченным совершать нотариальные действия (пункт 5 статьи 1051 настоящего Кодекса), или лицом, уполномоченным удостоверять доверенности в соответствии с пунктом 3 статьи 167 настоящего Кодекса.
Принятие наследства через представителя возможно, если в доверенности специально предусмотрено полномочие на принятие наследства. Для принятия наследства законным представителем доверенность не требуется.
2. Признается, пока не доказано иное, что наследник принял наследство, если он совершил действия, свидетельствующие о фактическом принятии наследства, в частности, если наследник:<br>
вступил во владение или в управление наследственным имуществом;
принял меры по сохранению наследственного имущества, защите его от посягательств или притязаний третьих лиц;
произвел за свой счет расходы на содержание наследственного имущества;
оплатил за свой счет долги наследодателя или получил от третьих лиц причитавшиеся наследодателю деньги.`
let otvt_vop_6_4_3 = `1. Наследство может быть принято в течение шести месяцев со дня открытия наследства.<br>
В случае открытия наследства в день предполагаемой смерти гражданина или объявления его умершим (пункт 2 статьи 1042настоящего Кодекса) наследство может быть принято в течение шести месяцев со дня смерти наследодателя, а при объявлении его умершим - со дня вступления в законную силу решения суда об объявлении гражданина умершим, если в решении суда не указан иной день.
2. Если право наследования возникает для других лиц вследствие отказа наследника от наследства, непринятия наследства другим наследником или устранения от наследования наследника по основаниям, установленным статьей 1045 настоящего Кодекса, такие лица могут принять наследство в течение шести месяцев со дня возникновения у них права наследования.<br>`
let otvt_vop_6_4_4 = `По заявлению наследника, пропустившего срок, установленный для принятия наследства (статья 1072-2 настоящего Кодекса), суд может восстановить этот срок и признать наследника принявшим наследство, если наследник пропустил этот срок по уважительным причинам и при условии, что наследник, пропустивший срок, установленный для принятия наследства, обратился в суд в течение шести месяцев после того, как причины пропуска этого срока отпали.
При признании наследника принявшим наследство суд определяет доли всех наследников в наследственном имуществе и при необходимости - меры по защите прав нового наследника на получение причитающейся ему доли наследства. Ранее выданные свидетельства о праве на наследство признаются судом недействительными.`
let otvt_vop_6_4_5 = `Если наследник по закону или по завещанию умер после открытия наследства, не успев его принять в срок, установленный статьей 1072-2настоящего Кодекса, право на принятие причитающейся ему доли наследства переходит к его наследникам.
Это право умершего наследника может быть осуществлено его наследниками на общих основаниях в течение оставшейся части срока для принятия наследства.
Если оставшаяся часть срока менее трех месяцев, он удлиняется до трех месяцев.
По истечении срока, установленного для принятия наследства, наследники умершего наследника могут быть признаны судом принявшими наследство в соответствии со статьей 1072-3 настоящего Кодекса, если суд найдет уважительными причины пропуска ими этого срока.
Право наследника принять часть наследства в качестве обязательной доли в соответствии со статьей 1069 настоящего Кодекса не переходит к его наследникам.`
let otvt_vop_6_5_1 = `1. Наследники, в течение года до открытия наследства проживавшие совместно с наследодателем, имеют преимущественное право на наследование жилища, а также домашней утвари и предметов домашнего обихода.<br>
2. Наследники, обладавшие вместе с наследодателем правом общей собственности на имущество, имеют преимущественное право наследования имущества, находившегося в общей собственности.<br>
3. При осуществлении преимущественных прав, указанных в пунктах 1 и 2 настоящей статьи, должны быть соблюдены имущественные интересы других наследников, участвующих в разделе. Если имущества, образующего наследство, недостаточно для предоставления причитающихся им долей, наследник, осуществляющий преимущественное право, должен предоставить им соответствующую денежную или имущественную компенсацию.<br>`
let otvt_vop_6_5_2 = `1. В случае отказа наследника от наследства либо его отпадения по обстоятельствам, указанным в настоящем Кодексе, часть наследства, которая причиталась бы такому наследнику, поступает к наследникам по закону, призванным к наследованию, и распределяется между ними пропорционально их наследственным долям.<br>
Если наследодатель завещал все имущество назначенным им наследникам, часть наследства, причитавшаяся отказавшемуся от наследства или отпавшему наследнику, поступает к остальным наследникам по завещанию и распределяется между ними пропорционально их наследственным долям, поскольку иное не предусмотрено завещанием.
2. Правила, содержащиеся в пункте 1 настоящей статьи, не применяются:<br>
1) если отказавшемуся или отпавшему наследнику подназначен наследник;<br>
2) при отказе наследника от наследства в пользу определенного лица;<br>
3) в случаях, когда при наследовании по закону отказ или отпадение наследника влечет призвание к наследованию наследников следующей очереди.<br>`
let otvt_vop_6_5_3 = `За счет наследства до его распределения между наследниками подлежат удовлетворению требования о возмещении необходимых расходов, вызванных предсмертной болезнью наследодателя, расходов на погребение наследодателя, расходов, связанных с охраной, управлением наследством, исполнением завещания, а также выплатой вознаграждения исполнителю завещания или доверительному управляющему наследством. Эти требования подлежат удовлетворению из стоимости наследства преимущественно перед всеми другими требованиями, в том числе и обеспеченными залогом.`
let otvt_vop_6_5_4 = `Кредиторы наследодателя вправе предъявить свои требования, вытекающие из обязательств наследодателя, к исполнителю завещания (доверительному управляющему наследством) или к наследникам, отвечающим как солидарные должники в пределах стоимости имущества, перешедшего к каждому наследнику.
В случае, если наследники, принявшие наследство, уклоняются от регистрации имущества, входящего в состав наследства, или прав на него, кредиторы наследодателя вправе требовать принудительной регистрации.`
let otvt_vop_6_5_5 = `В случае смерти члена крестьянского или фермерского хозяйства наследство открывается по общим правилам. Наследники имеют право на получение денежной компенсации, соразмерной его доле в общей собственности на это имущество.`

let otvt_vop_7_1_1 = `1. Уголовное законодательство Республики Казахстан состоит из настоящего Уголовного кодекса Республики Казахстан. Иные законы, предусматривающие уголовную ответственность, подлежат применению только после их включения в настоящий Кодекс.<br>
2. Настоящий Кодекс основывается на Конституции Республики Казахстан и общепризнанных принципах и нормах международного права. Конституция Республики Казахстан имеет высшую юридическую силу и прямое действие на всей территории Республики. В случае противоречий между нормами настоящего Кодекса и Конституции Республики Казахстан действуют положения Конституции. Нормы настоящего Кодекса, признанные неконституционными, в том числе ущемляющими закрепленные Конституцией Республики Казахстан права и свободы человека и гражданина, утрачивают юридическую силу и не подлежат применению. Нормативные постановления Конституционного Суда и Верховного Суда Республики Казахстан являются составной частью уголовного законодательства Республики Казахстан.<br>
3. Международные договоры, ратифицированные Республикой Казахстан, имеют приоритет перед настоящим Кодексом. Порядок и условия действия на территории Республики Казахстан международных договоров, участником которых является Республика Казахстан, определяются законодательством Республики Казахстан.<br>`
let otvt_vop_7_1_2 = `1. Задачами настоящего Кодекса являются: защита прав, свобод и законных интересов человека и гражданина, собственности, прав и законных интересов организаций, общественного порядка и безопасности, окружающей среды, конституционного строя и территориальной целостности Республики Казахстан, охраняемых законом интересов общества и государства от общественно опасных посягательств, охрана мира и безопасности человечества, а также предупреждение уголовных правонарушений.<br>
2. Для осуществления этих задач настоящий Кодекс устанавливает основания уголовной ответственности, определяет, какие опасные для личности, общества или государства деяния являются уголовными правонарушениями, то есть преступлениями или уголовными проступками, устанавливает наказания и иные меры уголовно-правового воздействия за их совершение.<br`
let otvt_vop_7_1_3 = `Содержащиеся в настоящем Кодексе понятия имеют, если нет особых указаний в законе, следующие значения:
1) эксплуатация человека – использование виновным принудительного труда, то есть любой работы или службы, требуемой от лица путем применения насилия или угрозы его применения, для выполнения которой это лицо не предложило добровольно своих услуг, за исключением случаев, предусмотренных законами Республики Казахстан;<br>
использование виновным занятия проституцией другим лицом или иных оказываемых им услуг в целях присвоения полученных доходов, а равно принуждение лица к оказанию услуг сексуального характера без преследования виновным этой цели;
принуждение лица к занятию попрошайничеством, то есть к совершению антиобщественного деяния, связанного с выпрашиванием у других лиц денег и (или) иного имущества;
иные действия, связанные с осуществлением виновным полномочий собственника в отношении лица, которое по не зависящим от него причинам не может отказаться от выполнения работ и (или) услуг для виновного и (или) другого лица;`
let otvt_vop_7_1_4 = `Единственным основанием уголовной ответственности является совершение уголовного правонарушения, то есть деяния, содержащего все признаки состава преступления либо уголовного проступка, предусмотренного настоящим Кодексом. Никто не может быть подвергнут повторно уголовной ответственности за одно и то же уголовное правонарушение. Применение уголовного закона по аналогии не допускается`
let otvt_vop_7_1_5 = `Преступность и наказуемость деяния определяются законом, действовавшим во время совершения этого деяния. Временем совершения уголовного правонарушения признается время осуществления общественно опасного действия (бездействия) независимо от времени наступления последствий.`
let otvt_vop_7_2_1 = `1. Уголовные правонарушения в зависимости от степени общественной опасности и наказуемости подразделяются на преступления и уголовные проступки.<br>
2. Преступлением признается совершенное виновно общественно опасное деяние (действие или бездействие), запрещенное настоящим Кодексом под угрозой наказания в виде штрафа, исправительных работ, привлечения к общественным работам, ограничения свободы или лишения свободы.<br>
3. Уголовным проступком признается совершенное виновно деяние (действие либо бездействие), не представляющее большой общественной опасности, причинившее незначительный вред либо создавшее угрозу причинения вреда личности, организации, обществу или государству, за совершение которого предусмотрено наказание в виде штрафа, исправительных работ, привлечения к общественным работам, ареста, выдворения за пределы Республики Казахстан иностранца или лица без гражданства.<br>
4. Не является уголовным правонарушением действие или бездействие, хотя формально и содержащее признаки какого-либо деяния, предусмотренного Особенной частью настоящего Кодекса, но в силу малозначительности не представляющее общественной опасности.<br>`
let otvt_vop_7_2_2 = `1. Преступления в зависимости от характера и степени общественной опасности подразделяются на преступления небольшой тяжести, преступления средней тяжести, тяжкие преступления и особо тяжкие преступления.<br>
2. Преступлениями небольшой тяжести признаются умышленные деяния, за совершение которых максимальное наказание, предусмотренное настоящим Кодексом, не превышает двух лет лишения свободы, а также неосторожные деяния, за совершение которых максимальное наказание, предусмотренное настоящим Кодексом, не превышает пяти лет лишения свободы.<br>
3. Преступлениями средней тяжести признаются умышленные деяния, за совершение которых максимальное наказание, предусмотренное настоящим Кодексом, не превышает пяти лет лишения свободы, а также неосторожные деяния, за совершение которых предусмотрено наказание в виде лишения свободы на срок свыше пяти лет.<br>
4. Тяжкими преступлениями признаются умышленные деяния, за совершение которых максимальное наказание, предусмотренное настоящим Кодексом, не превышает двенадцати лет лишения свободы.<br>
5. Особо тяжкими преступлениями признаются умышленные деяния, за совершение которых настоящим Кодексом предусмотрено наказание в виде лишения свободы на срок свыше двенадцати лет или пожизненного лишения свободы.<br>`
let otvt_vop_7_2_3 = `1. Неоднократностью уголовных правонарушений признается совершение двух или более деяний, предусмотренных одной и той же статьей или частью статьи Особенной части настоящего Кодекса. Преступление и уголовный проступок не образуют между собой неоднократность.<br>
2. Уголовное правонарушение не признается совершенным неоднократно, если за ранее совершенное уголовное правонарушение лицо было осуждено либо освобождено от уголовной ответственности по основаниям, установленным законом.<br>
3. Не признается неоднократным продолжаемое уголовное правонарушение, то есть уголовное правонарушение, состоящее из ряда одинаковых противоправных деяний, которые охватываются едиными умыслом и целью и образуют в целом одно уголовное правонарушение.<br>
4. В случаях, когда неоднократность преступлений предусмотрена настоящим Кодексом в качестве обстоятельства, влекущего за собой более строгое наказание, совершенные лицом преступления квалифицируются по соответствующей части статьи Особенной части настоящего Кодекса, предусматривающей наказание за неоднократность преступлений.<br>
5. В случаях, когда неоднократность уголовных проступков предусмотрена настоящим Кодексом в качестве обстоятельства, влекущего за собой более строгое наказание, совершенные лицом уголовные проступки квалифицируются по соответствующей части статьи Особенной части настоящего Кодекса, предусматривающей наказание за неоднократность уголовных проступков.<br>`
let otvt_vop_7_2_4 = `1.Совокупностью уголовных правонарушений признается совершение двух или более деяний, предусмотренных различными статьями или частями статьи настоящего Кодекса, ни за одно из которых лицо не было осуждено или не было освобождено от уголовной ответственности по основаниям, установленным законом. При совокупности уголовных правонарушений лицо несет уголовную ответственность за каждое совершенное деяние по соответствующей статье или части статьи настоящего Кодекса, если признаки этих деяний не охватываются нормой одной статьи или части статьи настоящего Кодекса, предусматривающей более строгое наказание.<br>
2. Совокупностью уголовных правонарушений признается и одно действие (бездействие), содержащее признаки уголовных правонарушений, предусмотренных двумя или более статьями настоящего Кодекса. При такой совокупности лицо несет уголовную ответственность за каждое совершенное деяние по соответствующим статьям настоящего Кодекса, если признаки одного деяния не охватываются нормой статьи настоящего Кодекса, предусматривающей более строгое наказание за другое деяние.<br>
3. Если одно и то же деяние подпадает под признаки общей и специальной норм соответствующих статей настоящего Кодекса, совокупность уголовных правонарушений отсутствует и уголовная ответственность наступает по статье Особенной части настоящего Кодекса, содержащей специальную норму.<br>`
let otvt_vop_7_2_5 = `1. Рецидивом преступлений признается совершение лицом тяжкого преступления, если ранее это лицо осуждалось к лишению свободы за совершение тяжкого преступления. <br>
2. Опасным рецидивом преступлений признается совершение лицом:<br>
1) тяжкого преступления, если ранее это лицо дважды осуждалось к лишению свободы за совершение тяжкого преступления или было осуждено за особо тяжкое преступление;<br>
2) особо тяжкого преступления, если ранее оно было осуждено к лишению свободы за тяжкое или особо тяжкое преступление.<br>
3. Судимости за преступления, совершенные лицом в возрасте до восемнадцати лет, а также судимости, снятые или погашенные в порядке, установленном настоящим Кодексом, не учитываются при признании рецидива преступлений и опасного рецидива преступлений.<br>
4. Рецидив преступлений и опасный рецидив преступлений влекут более строгое наказание на основании и в пределах, предусмотренных настоящим Кодексом.<br>`
let otvt_vop_7_3_1 = `1.Наказание есть мера государственного принуждения, назначаемая по приговору суда. Наказание применяется к лицу, признанному виновным в совершении уголовного правонарушения, и заключается в предусмотренном настоящим Кодексом лишении или ограничении прав и свобод этого лица.<br>
2. Наказание применяется в целях восстановления социальной справедливости, а также исправления осужденного и предупреждения совершения новых уголовных правонарушений как осужденным, так и другими лицами. Наказание не имеет своей целью причинение физических страданий или унижение человеческого достоинства.<br>`
let otvt_vop_7_3_2 = `1. К лицу, признанному виновным в совершении уголовного проступка, могут применяться следующие основные наказания:<br>   
1) штраф;<br>
2) исправительные работы;<br>
3) привлечение к общественным работам;<br>
4) арест;<br>
5) выдворение за пределы Республики Казахстан иностранца или лица без гражданства.<br>
2. К лицу, признанному виновным в совершении преступления, могут применяться следующие основные наказания:<br>
1) штраф;<br>
2) исправительные работы;<br>
2-1) привлечение к общественным работам;<br>
3) ограничение свободы;<br>
4) лишение свободы;<br>`
let otvt_vop_7_3_3 = `1. Штраф есть денежное взыскание, назначаемое в пределах, предусмотренных настоящим Кодексом, в размере, соответствующем определенному количеству месячных расчетных показателей, установленных законодательством Республики Казахстан и действовавших на момент совершения уголовного правонарушения, либо в размере, кратном сумме или стоимости взятки, сумме переданных денег или стоимости переданного имущества, стоимости похищенного имущества, сумме полученного дохода или сумме не поступивших платежей в бюджет.<br>
2. За уголовные проступки штраф устанавливается в пределах от двадцати до двухсот месячных расчетных показателей, за преступления – в пределах от двухсот до десяти тысяч месячных расчетных показателей либо в кратном размере.<br>
3. При назначении штрафа суд определяет его размер и срок уплаты с учетом тяжести уголовного правонарушения, имущественного и семейного положения осужденного, возможности получения им заработной платы или иного дохода.<br>
4. Срок уплаты штрафа исчисляется с момента вступления приговора в законную силу и по приговору суда не может превышать три года. <br>
5. В случае временного ухудшения имущественного положения осужденного в связи с задержкой или невыплатой заработной платы, временной нетрудоспособностью, потерей работы или дохода суд может предоставить отсрочку на срок от одного месяца до одного года. Время отсрочки не входит в исчисление срока уплаты штрафа, установленного приговором суда.<br>
6. При неуплате штрафа в установленные сроки приговор (постановление) суда подлежит принудительному исполнению. Неуплаченная часть штрафа заменяется:<br>
1) осужденным за уголовный проступок – привлечением к общественным работам из расчета один час общественных работ за один неуплаченный месячный расчетный показатель либо арестом из расчета одни сутки ареста за четыре неуплаченных месячных расчетных показателя;<br>
2) осужденным за преступление небольшой или средней тяжести – ограничением свободы либо лишением свободы из расчета один день ограничения свободы или лишения свободы за четыре неуплаченных месячных расчетных показателя;<br>
3) осужденным за тяжкое преступление – лишением свободы из расчета один день лишения свободы за четыре неуплаченных месячных расчетных показателя;<br>
4) осужденным к кратному штрафу – лишением свободы в пределах санкции соответствующей статьи Особенной части настоящего Кодекса с учетом уплаченной и взысканной части штрафа.<br>
7. При назначении более мягкого наказания, чем предусмотрено за данное уголовное правонарушение, назначении наказания за неоконченное преступление, а также при замене наказания размер штрафа может быть ниже низшего предела, установленного настоящей статьей.<br>`
let otvt_vop_7_3_4 = `1.Исправительные работы есть денежное взыскание, назначаемое в пределах, предусмотренных настоящим Кодексом, в размере, соответствующем определенному количеству месячных расчетных показателей, установленных законодательством Республики Казахстан и действовавших на момент совершения уголовного правонарушения.<br>
2. Исправительные работы исполняются путем ежемесячного удержания и перечисления в Фонд компенсации потерпевшим от десяти до пятидесяти процентов заработной платы (денежного содержания) осужденного за вычетом средств, подлежащих периодической уплате (взысканию) в счет алиментов, возмещения вреда, причиненного увечьем или иным повреждением здоровья, а также смертью кормильца.<br>
3.За уголовные проступки исправительные работы устанавливаются в пределах от двадцати до двухсот месячных расчетных показателей, за преступления – в пределах от двухсот до десяти тысяч месячных расчетных показателей.<br>
4.При назначении исправительных работ суд определяет их размер с учетом тяжести уголовного правонарушения, имущественного и семейного положения осужденного.<br>
5. В случае утраты трудоспособности осужденный может быть освобожден от исполнения оставшейся части наказания либо неисполненная часть заменяется штрафом. В случае возникновения иных обстоятельств, препятствующих исполнению исправительных работ, они заменяются:<br>
1) осужденным за уголовный проступок – привлечением к общественным работам либо арестом из расчета один час общественных работ за один невзысканный месячный расчетный показатель, одни сутки ареста за четыре невзысканных месячных расчетных показателя;<br>
2) осужденным за преступление небольшой или средней тяжести – ограничением свободы либо лишением свободы из расчета один день ограничения свободы или лишения свободы за четыре невзысканных месячных расчетных показателя;<br>
3) осужденным за тяжкое преступление – лишением свободы из расчета один день лишения свободы за четыре невзысканных месячных расчетных показателя.<br>
6. При назначении более мягкого наказания, чем предусмотрено за данное уголовное правонарушение, назначении наказания за неоконченное преступление, а также при замене наказания размер исправительных работ может быть ниже низшего предела, установленного настоящей статьей.<br>
7. Исправительные работы не назначаются лицам, признанным нетрудоспособными либо не имеющим постоянной работы или обучающимся в учебных заведениях с отрывом от производства.<br>`
let otvt_vop_7_3_5 = `1. Общественные работы состоят в выполнении осужденным не требующих определенной квалификации бесплатных общественно полезных работ, организуемых местными исполнительными органами в общественных местах.<br>
2. Общественные работы устанавливаются за уголовные проступки на срок от двадцати до двухсот часов, за преступления небольшой и средней тяжести – на срок от двухсот до одной тысячи двухсот часов. Общественные работы отбываются не свыше четырех часов в день с освобождением осужденного на время их отбывания от выполнения трудовых обязанностей по месту основной работы либо в свободное от учебы время.<br>
2-1. В случае уклонения от общественных работ они заменяются:<br>
1) осужденным за уголовный проступок – арестом из расчета одни сутки ареста за четыре неотработанных часа общественных работ;<br>
2) осужденным за преступление – ограничением свободы либо лишением свободы из расчета один день ограничения свободы или лишения свободы за четыре неотработанных часа общественных работ.<br>
2-2. При назначении более мягкого наказания, чем предусмотрено за данное уголовное правонарушение, назначении наказания за неоконченное преступление, а также при замене наказания срок общественных работ может быть ниже низшего предела, установленного настоящей статьей.<br>
3. Привлечение к общественным работам не назначается беременным женщинам, женщинам, имеющим малолетних детей в возрасте до трех лет, мужчинам, воспитывающим в одиночку малолетних детей в возрасте до трех лет, женщинам в возрасте пятидесяти восьми и свыше лет, мужчинам в возрасте шестидесяти трех и свыше лет, лицам с инвалидностью первой или второй группы, военнослужащим.<br>`
let otvt_vop_7_4_1 = `1. Лицу, признанному виновным в совершении уголовного правонарушения, назначается справедливое наказание в пределах, установленных соответствующей статьей Особенной части настоящего Кодекса, и с учетом положений Общей части настоящего Кодекса.<br>
2. Лицу, совершившему уголовное правонарушение, должно быть назначено наказание, необходимое и достаточное для его исправления и предупреждения новых уголовных правонарушений. Более строгий вид наказания из числа предусмотренных за совершенное уголовное правонарушение назначается лишь в случае, если менее строгий его вид не сможет обеспечить достижение целей наказания. Более строгое наказание, чем предусмотрено соответствующими статьями Особенной части настоящего Кодекса за совершенное деяние, может быть назначено по совокупности уголовных правонарушений или по совокупности приговоров в соответствии со статьями 58 и 60 настоящего Кодекса. Основания для назначения менее строгого наказания, чем предусмотрено соответствующими статьями Особенной части настоящего Кодекса за совершенное деяние, определяются статьей 55 настоящего Кодекса.<br>
3. При назначении наказания учитываются характер и степень общественной опасности уголовного правонарушения, личность виновного, в том числе его поведение до и после совершения правонарушения, обстоятельства, смягчающие и отягчающие ответственность и наказание, а также влияние назначенного наказания на исправление осужденного и на условия жизни его семьи или лиц, находящихся на его иждивении.<br>`
let otvt_vop_7_4_2 = `1.Обстоятельствами, смягчающими уголовную ответственность и наказание, признаются:<br>
1) совершение впервые уголовного проступка либо впервые преступления небольшой или средней тяжести вследствие случайного стечения обстоятельств;<br>
2) несовершеннолетие виновного;<br>
3) беременность;<br>
4) наличие малолетних детей у виновного;<br>
5) оказание медицинской или иной помощи потерпевшему непосредственно после совершения уголовного правонарушения независимо от последствий оказания такой помощи;<br>
6) добровольное возмещение имущественного ущерба, причиненного в результате уголовного правонарушения, заглаживание морального и иного вреда, причиненного уголовным правонарушением;<br>
7) совершение уголовного правонарушения вследствие стечения тяжелых личных, семейных или иных обстоятельств либо по мотиву сострадания;<br>
8) совершение уголовного правонарушения в результате физического или психического принуждения либо в силу материальной, служебной или иной зависимости;<br>
9) совершение уголовного правонарушения при нарушении условий правомерности необходимой обороны, крайней необходимости, задержания лица, совершившего правонарушение, обоснованного риска, исполнения приказа или распоряжения, при осуществлении оперативно-розыскных, контрразведывательных мероприятий или негласных следственных действий;<br>
10) противоправность или аморальность поведения потерпевшего, явившегося поводом для уголовного правонарушения;<br>
11) чистосердечное раскаяние, явка с повинной, активное способствование раскрытию уголовного правонарушения, изобличению других соучастников уголовного правонарушения и розыску имущества, добытого в результате уголовного правонарушения.<br>
2. При назначении наказания могут учитываться в качестве смягчающих и обстоятельства, не предусмотренные частью первой настоящей статьи.<br>
3.Если смягчающее обстоятельство предусмотрено соответствующей статьей Особенной части настоящего Кодекса в качестве признака уголовного правонарушения, оно само по себе не может повторно учитываться при назначении наказания.<br>`
let otvt_vop_7_4_3 = `1.Обстоятельствами, отягчающими уголовную ответственность и наказание, признаются:<br>
1) неоднократность уголовных правонарушений, рецидив преступлений, опасный рецидив преступлений;<br>
2) причинение уголовным правонарушением тяжких последствий;<br> 
3) совершение уголовного правонарушения в составе группы лиц, группы лиц по предварительному сговору, преступной группы;
4) особо активная роль в совершении уголовного правонарушения;<br>
5) привлечение к совершению уголовного правонарушения лиц, которые заведомо для виновного страдают тяжелым психическим, поведенческим расстройством (заболеванием), либо лиц, не достигших возраста, с которого наступает уголовная ответственность;<br>
6) совершение уголовного правонарушения по мотиву национальной, расовой и религиозной ненависти или вражды, из мести за правомерные действия других лиц, а также с целью скрыть другое уголовное правонарушение или облегчить его совершение;<br>
7) совершение уголовного правонарушения в отношении женщины, заведомо для виновного находящейся в состоянии беременности, а также в отношении малолетнего, другого беззащитного или беспомощного лица либо лица, находящегося в зависимости от виновного;<br>
8) совершение уголовного правонарушения в отношении лица или его близких в связи с выполнением данным лицом своего служебного, профессионального или общественного долга;<br>
9) совершение уголовного правонарушения с особой жестокостью, садизмом, издевательством, а также мучениями для потерпевшего;<br>
10) совершение уголовного правонарушения с использованием оружия, боевых припасов, взрывчатых веществ, взрывных или имитирующих их устройств, специально изготовленных технических средств, легковоспламеняющихся и горючих жидкостей, ядовитых и радиоактивных веществ, лекарственных и иных химико-фармакологических препаратов, а также с применением физического или психического принуждения либо общеопасным способом;<br>
11) совершение уголовного правонарушения в условиях чрезвычайного положения, чрезвычайной ситуации, а также в ходе массовых беспорядков;<br>
12) совершение уголовного правонарушения в состоянии алкогольного, наркотического или токсикоманического опьянения. Суд вправе в зависимости от характера уголовного правонарушения не признать это обстоятельство отягчающим;<br>
13) совершение уголовного правонарушения лицом, нарушившим тем самым принятую им присягу или профессиональную клятву;<br>
14) совершение уголовного правонарушения с использованием доверия, оказанного виновному в силу его служебного положения или договора;<br>
15) совершение уголовного правонарушения с использованием форменной одежды или документов представителя власти;<br>
16) совершение уголовного правонарушения сотрудником правоохранительного или специального государственного органа, судьей с использованием своего служебного положения.<br>
2. Если обстоятельство, указанное в части первой настоящей статьи, предусмотрено соответствующей статьей Особенной части настоящего Кодекса в качестве признака уголовного правонарушения, оно не может повторно учитываться как обстоятельство, отягчающее ответственность и наказание.<br>
3. При назначении наказания суд не может признать отягчающими обстоятельства, не указанные в части первой настоящей статьи.<br>`


let otvt_vop_7_4_4 = `1. Если статья или часть статьи Особенной части настоящего Кодекса, по которой лицо признано виновным, предусматривает менее строгий, чем лишение свободы, основной вид наказания, лишение свободы не назначается при осуждении лица за совершение преступления:<br>
1) небольшой или средней тяжести в случае, когда лицо добровольно возместило имущественный ущерб, загладило моральный и иной вред, причиненный преступлением;<br>
2) в сфере экономической деятельности, за исключением предусмотренных статьями 218, 248 и 249 настоящего Кодекса, в случае, когда лицо добровольно возместило имущественный ущерб, причиненный преступлением.<br>
2. При наличии смягчающего обстоятельства, не предусмотренного в качестве признака совершенного преступления, и отсутствии отягчающих обстоятельств срок или размер основного вида наказания не может превышать при совершении:<br>
1) уголовного проступка, преступления небольшой или средней тяжести – половины;<br>
2) тяжкого преступления – двух третей;<br>
3) особо тяжкого преступления – трех четвертей максимального срока или размера, предусмотренного соответствующей статьей Особенной части настоящего Кодекса.<br>
3. По делам ускоренного досудебного расследования, а также делам, по которым выполнены все условия процессуального соглашения, срок или размер основного вида наказания за совершенное уголовное правонарушение не может превышать половину максимального срока или размера, предусмотренного соответствующей статьей Особенной части настоящего Кодекса. По делам, по которым обвинительный приговор вынесен в порядке приказного производства, штраф назначается в размере от десяти до двадцати месячных расчетных показателей при совершении уголовного проступка, от пятидесяти до двухсот месячных расчетных показателей – при совершении преступления небольшой тяжести.<br>
4. При наличии исключительных обстоятельств, связанных с целями и мотивами деяния, ролью виновного, его поведением во время или после совершения уголовного правонарушения, и других обстоятельств, существенно уменьшающих степень общественной опасности деяния, а равно при активном содействии участника группового уголовного правонарушения раскрытию совершенных группой деяний наказание может быть назначено ниже низшего предела, предусмотренного соответствующей статьей Особенной части настоящего Кодекса, либо суд может назначить более мягкий вид наказания, чем предусмотрено этой статьей, либо не применять дополнительный вид наказания, предусмотренный в качестве обязательного.<br>
5. Исключительными могут быть признаны как отдельные смягчающие обстоятельства, так и совокупность таких обстоятельств.<br>
6. При наличии обстоятельств, указанных в частях второй или третьей настоящей статьи, наказание может быть назначено ниже низшего предела, предусмотренного соответствующей статьей Особенной части настоящего Кодекса.<br>
7. В случаях назначения наказания за приготовление или покушение на преступление пределы, указанные в частях второй и третьей настоящей статьи, определяются с учетом положений статьи 56 настоящего Кодекса.<br>
8. Положения настоящей статьи не распространяются на лиц, совершивших преступление против половой неприкосновенности несовершеннолетних, за исключением случая совершения такого преступления несовершеннолетним в отношении несовершеннолетнего в возрасте от четырнадцати до восемнадцати лет.<br>`
let otvt_vop_7_4_5 = `1. При назначении наказания за неоконченное преступление учитываются обстоятельства, в силу которых преступление не было доведено до конца.<br>
2. Срок или размер наказания за приготовление к преступлению не может превышать половины максимального срока или размера основного вида наказания, предусмотренного соответствующей статьей Особенной части настоящего Кодекса за оконченное преступление.<br>
3. Срок или размер наказания за покушение на преступление не может превышать трех четвертей максимального срока или размера основного вида наказания, предусмотренного соответствующей статьей Особенной части настоящего Кодекса за оконченное преступление.<br>
4. Пожизненное лишение свободы за приготовление к преступлению и покушение на преступление не назначается.<br>`
let otvt_vop_7_5_1 = `1. Лицо, совершившее уголовный проступок либо впервые совершившее преступление, может быть освобождено от уголовной ответственности с учетом личности виновного, его явки с повинной, способствования им раскрытию, расследованию уголовного правонарушения, заглаживания им вреда, нанесенного уголовным правонарушением.<br>
Лицо, впервые совершившее коррупционное преступление, может быть освобождено от уголовной ответственности в связи с деятельным раскаянием только судом.
2. Положения части первой настоящей статьи не распространяются на лиц, совершивших террористическое преступление, экстремистское преступление, преступление, совершенное в составе преступной группы, преступление против половой неприкосновенности несовершеннолетних, пытки, тяжкое или особо тяжкое преступление против личности, за исключением случаев, специально предусмотренных соответствующими статьями Особенной части настоящего Кодекса. Указанное ограничение не распространяется на несовершеннолетних, совершивших преступление против половой неприкосновенности несовершеннолетнего лица в возрасте от четырнадцати до восемнадцати лет.<br>`
let otvt_vop_7_5_2 = `Лицо, превысившее пределы необходимой обороны вследствие страха, испуга или замешательства, вызванного общественно опасным посягательством, может быть с учетом обстоятельств дела освобождено от уголовной ответственности`
let otvt_vop_7_5_3 = `1. Лицо, выполнившее все условия процессуального соглашения, может быть освобождено от уголовной ответственности.<br>
2. Положение части первой настоящей статьи не распространяется на лиц, совершивших преступления против половой неприкосновенности несовершеннолетних, за исключением случаев совершения такого преступления несовершеннолетним в отношении несовершеннолетнего в возрасте от четырнадцати до восемнадцати лет.<br>`
let otvt_vop_7_5_4 = `1. Лицо, совершившее уголовный проступок или преступление небольшой или средней тяжести, не связанное с причинением смерти, подлежит освобождению от уголовной ответственности, если оно примирилось с потерпевшим, заявителем, в том числе в порядке медиации, и загладило причиненный вред.<br>
2. Несовершеннолетние, беременные женщины, женщины, имеющие малолетних детей, мужчины, воспитывающие в одиночку малолетних детей, женщины в возрасте пятидесяти восьми и свыше лет, мужчины в возрасте шестидесяти трех и свыше лет, впервые совершившие тяжкое преступление, не связанное с причинением смерти или тяжкого вреда здоровью человека, могут быть освобождены от уголовной ответственности, если они примирились с потерпевшим, заявителем, в том числе в порядке медиации, и загладили причиненный вред. При освобождении от уголовной ответственности к несовершеннолетнему применяются принудительные меры воспитательного воздействия.<br>
3. В случаях, когда уголовным правонарушением причинен вред охраняемым законом интересам общества и государства, лицо, указанное в части первой или второй настоящей статьи, может быть освобождено от уголовной ответственности, если оно чистосердечно раскаялось и загладило вред, причиненный охраняемым законом интересам общества или государства.
4. Положения настоящей статьи не распространяются на лиц, совершивших:<br>
1) пытки;<br>
2) преступления против половой неприкосновенности несовершеннолетних, за исключением случая совершения такого преступления лицом, не достигшим совершеннолетия, в отношении несовершеннолетнего в возрасте от четырнадцати до восемнадцати лет;<br>
3) преступления по неосторожности, повлекшие смерть человека либо смерть двух и более лиц, за исключением случая совершения дорожно-транспортного происшествия, повлекшего по неосторожности смерть его близких родственников, супруга (супруги);<br>
4) коррупционное преступление;<br>
5) террористическое преступление;<br>
6) экстремистское преступление;<br>
7) преступление, совершенное в составе преступной группы;<br>
8) в течение срока давности привлечения к уголовной ответственности, установленного частью первой статьи 71 настоящего Кодекса, умышленное преступление после освобождения от уголовной ответственности в связи с примирением сторон за ранее совершенное преступление.<br>`
let otvt_vop_7_5_5 = `1. Лицо, совершившее уголовное правонарушение, подлежит освобождению судом от уголовной ответственности, если будет признано, что ко времени рассмотрения дела в суде вследствие изменения обстановки совершенное им деяние перестало быть общественно опасным.<br>
2. Лицо, впервые совершившее уголовный проступок либо впервые совершившее преступление небольшой или средней тяжести, подлежит освобождению судом от уголовной ответственности, если будет установлено, что в силу последующего безупречного поведения это лицо ко времени рассмотрения дела в суде не может быть сочтено общественно опасным.<br>`

let otvt_vop_8_1_1 = `1. Жилищное законодательство Республики Казахстан регулирует отношения с участием граждан, юридических лиц, государственных органов, связанные с:<br>
1) основаниями возникновения и прекращения права собственности на жилища и права пользования ими;<br>
2) осуществлением права пользования квартирами, нежилыми помещениями и получением коммунальных услуг;<br>
3) требованиями к индивидуальным и многоквартирным жилым домам;<br>
4) обеспечением сохранности и ремонта жилищных фондов;<br>
5) контролем государственных органов за соблюдением прав граждан в жилищной сфере и использованием жилищного фонда;<br>
6) особенностями регулирования жилищных отношений с участием сотрудников специальных государственных органов, органов внутренних дел, оперативно-следственных подразделений уполномоченного органа по противодействию коррупции и военнослужащих.<br>
2. Жилищные отношения в Республике Казахстан регулируются настоящим Законом, нормами Гражданского кодекса и иным законодательством Республики Казахстан, издаваемым в соответствии с ними.<br>
3. Отношения, связанные с финансированием строительства жилья, развития и наращивания жилищного фонда, регулируются соответствующим законодательством Республики Казахстан с учетом требований, установленных настоящим Законом.<br>
4. Проживание (пребывание) в гостиницах, пансионатах, интернатах, медико-социальных учреждениях (организациях) и других объектах аналогичного назначения регулируется законодательством Республики Казахстан.<br>`
let otvt_vop_8_1_2 = `1. Жилищное законодательство Республики Казахстан регулирует отношения с участием граждан, юридических лиц, государственных органов, связанные с:<br>
1) основаниями возникновения и прекращения права собственности на жилища и права пользования ими;<br>
2) осуществлением права пользования квартирами, нежилыми помещениями и получением коммунальных услуг;<br>
3) требованиями к индивидуальным и многоквартирным жилым домам;<br>
4) обеспечением сохранности и ремонта жилищных фондов;<br>
5) контролем государственных органов за соблюдением прав граждан в жилищной сфере и использованием жилищного фонда;<br>
6) особенностями регулирования жилищных отношений с участием сотрудников специальных государственных органов, органов внутренних дел, оперативно-следственных подразделений уполномоченного органа по противодействию коррупции и военнослужащих.<br>
2. Жилищные отношения в Республике Казахстан регулируются настоящим Законом, нормами Гражданского кодекса и иным законодательством Республики Казахстан, издаваемым в соответствии с ними.<br>
3. Отношения, связанные с финансированием строительства жилья, развития и наращивания жилищного фонда, регулируются соответствующим законодательством Республики Казахстан с учетом требований, установленных настоящим Законом.<br>
4. Проживание (пребывание) в гостиницах, пансионатах, интернатах, медико-социальных учреждениях (организациях) и других объектах аналогичного назначения регулируется законодательством Республики Казахстан.<br>`
let otvt_vop_8_1_3 = `1. Жилищный фонд Республики Казахстан включает частный и государственный жилищные фонды.<br>
2. В жилищный фонд не входят нежилые помещения в жилых домах.<br>
2-1. Специальные государственные органы имеют служебные жилища, порядок формирования и предоставления которых устанавливается Правительством Республики Казахстан.<br>
3. Лишение жилища допускается только по решению суда в случаях, предусмотренных законами Республики Казахстан.<br> 
4. Особенности предоставления в собственность жилищ местными исполнительными органами областей, городов республиканского значения, столицы, районов, городов областного значения в виде поощрения спортсменам, являющимся чемпионами и призерами Олимпийских, Паралимпийских и Сурдлимпийских игр, определяются Законом Республики Казахстан "О физической культуре и спорте".<br>`
let otvt_vop_8_1_4 = `Использование квартир, нежилых помещений не должно приводить к их разрушению или порче, нарушать условия проживания (пребывания) других собственников квартир, нежилых помещений и должно соответствовать строительным, санитарным, экологическим, противопожарным и другим обязательным нормам и правилам.
Собственники нежилых помещений, предназначенных для общего пользования, должны обеспечить доступ для лиц с инвалидностью и других маломобильных групп населения`
let otvt_vop_8_1_5 = `Собственники квартир, нежилых помещений осуществляют управление объектом кондоминиума и содержание общего имущества объекта кондоминиума путем участия на собрании, выбора формы управления объектом кондоминиума, избрания совета дома, а также оплаты расходов на управление объектом кондоминиума и содержание общего имущества объекта кондоминиума.`
let otvt_vop_8_2_1 = `1. Гражданин или юридическое лицо может иметь в частной собственности законно приобретенное жилище, независимо от его местонахождения на территории Республики Казахстан, если иное не предусмотрено законодательными актами Республики Казахстан.<br>
2. Количество и размеры жилищ, находящихся в собственности одного гражданина или юридического лица, не ограничиваются.<br>
3. Отношения, связанные с приобретением или осуществлением права собственности на жилище, регулируются также гражданским законодательством Республики Казахстан.<br>`
let otvt_vop_8_2_2 = `Право собственности на жилище или его часть возникает по следующим основаниям: 
1) строительство дома (части дома);<br
2) совершение сделок купли-продажи, обмена, дарения, отчуждения с условием пожизненного содержания и других гражданско-правовых сделок, не противоречащих законодательству Республики Казахстан;<br>
3) получение жилища по наследству или в порядке универсального правопреемства;<br>
4) приобретение в собственность нанимателем занимаемого им жилища или жилого помещения (квартиры) из государственного жилищного фонда путем его приватизации (выкупа или безвозмездной передачи);<br>
 
5) принятие членом жилищно-строительного кооператива квартиры по передаточному акту в соответствии с договором участия в жилищно-строительном кооперативе в введенном в эксплуатацию многоквартирном жилом доме;<br>
 
6) предоставление жилого помещения в собственность в силу договорного обязательства, в том числе договора об участии гражданина своими средствами или трудом в строительстве дома;<br>
 
7) предоставление жилища юридическими лицами, основанными на негосударственной форме собственности, в собственность своему работнику или иному лицу путем продажи либо безвозмездной передачи;<br>
 
8) предоставление жилища государством или юридическим лицом, основанным на государственной форме собственности, в собственность своему работнику либо иному лицу на условиях, установленных законодательством Республики Казахстан;<br>
 
9) предоставление жилища в качестве компенсации за утрату жилища, находившегося в частной собственности, вследствие сноса либо реквизиции или в случае, когда жилище стало непригодным для проживания в результате экологических бедствий, чрезвычайных ситуаций природного и техногенного характера на территории Республики Казахстан;<br>
 
10) по другим основаниям, не запрещенным законодательными актами Республики Казахстан.<br>`
let otvt_vop_8_2_3 = `1. В случаях, предусмотренных настоящим Законом, наниматель жилища из государственного жилищного фонда с согласия совершеннолетних членов семьи и с учетом прав несовершеннолетних вправе приватизировать жилище по остаточной стоимости на условиях, предусмотренных настоящим Законом, и в порядке, определяемом Правительством Республики Казахстан.<br>
 
Круг членов семьи нанимателя определяется в соответствии со статьей 21 настоящего Закона.
 
Круг членов семей сотрудников специальных государственных органов, органов внутренних дел, оперативно-следственных подразделений уполномоченного органа по противодействию коррупции или военнослужащих, в том числе уволенных со службы, определяется в соответствии со статьей 101-10 настоящего Закона.
 
2. Приватизированное жилище переходит в общую совместную собственность нанимателя и всех постоянно проживающих с ним членов семьи, в том числе временно отсутствующих, если иное не предусмотрено договором между ними.<br>
 
3. Отчуждение жилища, находящегося в общей совместной собственности, допускается только с согласия всех собственников. Если сделка затрагивает интересы несовершеннолетних, являющихся собственниками жилища, требуется согласие органа опеки и попечительства.<br>
 
4. Служебные жилища из государственного жилищного фонда могут быть приватизированы по основанию, предусмотренному пунктом 2 или 2-1 статьи 109 настоящего Закона.<br>
 
5. Жилища, приравненные к служебным, из государственного жилищного фонда могут быть приватизированы по основаниям, предусмотренным пунктами 3 и 4 статьи 101 настоящего Закона.<br>
 
6. Жилище, в котором проживает несколько нанимателей, может быть приватизировано только с согласия всех нанимателей и их совершеннолетних членов семьи. В этом случае жилище поступает в общую долевую собственность всех нанимателей.<br>
 
7. Не могут быть приватизированы жилища:
 
1) сдаваемые внаем в соответствии с отдельными договорами найма нескольким нанимателям, в случае несогласия одного из них осуществить покупку;<br>
 
1-1) предоставляемые в качестве арендного жилища без права выкупа;<br>
 
2) во временных строениях;<br>
 
3) не отвечающие установленным санитарно-эпидемиологическим и техническим требованиям;<br>
 
4) подлежащие переоборудованию в нежилые помещения в силу непригодности их для дальнейшего проживания;<br>
 
5) находящиеся на территории закрытых и обособленных военных городков, пограничных отделений и иных закрытых объектов;<br>

6) находящиеся на особо охраняемых природных территориях;<br>
 
7) подлежащие сносу;<br>
 
8) предоставленные из коммунального жилищного фонда в пользование гражданам Республики Казахстан, единственное жилище которых признано аварийным в порядке, установленном законодательством Республики Казахстан;<br>
 
8-1) предоставленные из ведомственного жилищного фонда назначенным на должность в порядке ротации государственным служащим на период исполнения ими должностных обязанностей;<br>`
let otvt_vop_8_2_4 = `1. Для реализации права приобретения гражданами жилья в собственность с использованием ипотечного жилищного займа в рамках ипотечной программы, утвержденной Национальным Банком Республики Казахстан, и (или) государственной программы жилищного строительства, утвержденной Правительством Республики Казахстан, местные исполнительные органы предоставляют жилищные сертификаты как социальная помощь или социальная поддержка в виде бюджетного кредита.<br>
 
2. Размер и перечень категорий получателей жилищных сертификатов определяются местными представительными органами (маслихатами).<br>`
let otvt_vop_8_2_5 = `1. При сносе жилого дома в связи с принудительным отчуждением земельных участков для государственных нужд собственнику до сноса его жилища по его выбору предоставляется в собственность благоустроенное жилище или выплачивается компенсация в размере рыночной стоимости жилища.<br>
 
2. Если стоимость предоставляемого жилища окажется выше стоимости сносимого жилища, то разница в их стоимости с собственника не взимается.<br>
 
3. Если стоимость сносимого жилища окажется выше стоимости предоставляемого жилища, то разница в их стоимости возмещается собственнику.<br>`
let otvt_vop_8_3_1 = `1. Собственник жилища, а также недостроенного жилого дома вправе свободно, по своему усмотрению, продавать его, определяя условия продажи, дарить, обменивать, завещать другим лицам, отдавать в залог, распоряжаться иным образом, не запрещенным законодательными актами Республики Казахстан, с учетом особенностей, предусмотренных настоящей статьей.<br>
 
1-1. С момента государственной регистрации договора купли-продажи жилища, приобретенного полностью или частично за счет средств ипотечного жилищного займа, собственник не вправе без согласия кредитора распоряжаться данным жилищем до полного погашения ипотечного жилищного займа.<br>`
let otvt_vop_8_3_2 = `1. Продажа, дарение, переход по наследству, реализация залога жилого дома, а также недостроенного жилого дома, влекут за собой переход права собственности (землепользования) на земельный участок к новому собственнику жилого дома в таком же объеме правомочий, каким обладал прежний собственник жилого дома.<br>
 
2. Права собственников жилища на земельный участок, закрепленный за жилым домом (жилым зданием), определяются земельным законодательством Республики Казахстан.<br>`
let otvt_vop_8_3_3 = `1. Членами семьи собственника жилища признаются постоянно совместно проживающие супруги и их дети. Родители супругов, а также дети, имеющие свои семьи и постоянно проживающие с собственником, могут быть признаны членами семьи собственника только по взаимному согласию.<br>
 
2. Членами семьи собственника жилища могут быть признаны в исключительных случаях и другие лица, если они постоянно проживают с собственником и ведут с ним общее хозяйство не менее пяти лет. Нетрудоспособные иждивенцы являются членами семьи собственника, если они постоянно проживают с собственником.<br>`
let otvt_vop_8_3_4 = `1. Вселенные собственником в принадлежащее ему жилище члены его семьи вправе наравне с ним пользоваться жилищем, если при их вселении не было оговорено иное. Они вправе вселять в предоставленное им собственником жилище своих несовершеннолетних детей. Вселение других членов семьи допускается только с согласия собственника.<br>
 
В случае прекращения семейных отношений с собственником бывшие члены семьи могут пользоваться жилищем на правах нанимателя без указания срока найма, если иное не предусмотрено письменным соглашением с собственником жилища. При этом бывшие члены семьи обязаны принимать участие в расходах по содержанию жилища и оплату коммунальных услуг. 
 
2. Члены семьи собственника жилища могут требовать устранения нарушения их прав на пользование жилищем от любых лиц, включая собственника, со стороны которых исходят указанные нарушения.<br>
 
3. Совершеннолетние члены (бывшие члены) семьи собственника несут солидарную имущественную ответственность по обязательствам, вытекающим из пользования ими жилым помещением.<br>`
let otvt_vop_8_3_5 = ``
let otvt_vop_8_4_1 = `1. Собственник вправе сдавать внаем жилище, в котором проживает сам, либо жилище, основным назначением которого является предоставление его нанимателям для постоянного либо временного проживания.<br>
 
2. Условия проживания (срок, размер платы за наем, распределение обязанностей по ремонту, основания выселения нанимателей и тому подобное) определяются настоящим Законом, а также договором между наймодателем и нанимателем.<br>
 
3. Выбор лиц, которым сдается внаем жилище, производится собственником.<br>
 
3-1. Собственник или лицо, уполномоченное собственником сдавать жилище внаем, обязаны зарегистрировать проживающих в сдаваемом жилище лиц в порядке, установленном законодательством Республики Казахстан.<br>
 
4. Местный исполнительный орган вправе в соответствии с законодательством Республики Казахстан нанимать жилище внаем в частном жилищном фонде для последующего предоставления их гражданам, указанным в статье 67 настоящего Закона.<br>`
let otvt_vop_8_4_2 = `1. Жилище из частного жилищного фонда, в котором не проживает собственник, может быть предоставлено им внаем другому лицу по договору, заключенному в письменной форме.<br>
 
2. Внаем может предоставляться жилище либо отдельная пригодная для проживания комната (комнаты), отвечающие строительным, санитарно-эпидемиологическим, противопожарным и иным обязательным требованиям.<br>
 
3. Наниматель вправе вселять в нанятое жилище членов своей семьи, поднанимателей и временных жильцов, если иное не предусмотрено договором найма.<br>
 
Лицо, для которого жилище арендовано местным исполнительным органом, не вправе вселять в него поднанимателей и временных жильцов. 
 
3-1. Наниматель обязан зарегистрировать лиц, проживающих в сдаваемом жилище по договору поднайма, в порядке, установленном законодательством Республики Казахстан.<br>
 
4. Наниматель вправе выезжать из нанятого жилища на срок до шести месяцев, если иное не предусмотрено договором.<br>
 
При более длительном отсутствии договор сохраняет силу лишь с согласия на это наймодателя. 
 
5. Действие договора найма прекращается по истечении установленного сторонами срока либо наступлении указанного в договоре обстоятельства. Досрочное расторжение договора по требованию наймодателя допускается при несоблюдении нанимателем условий договора найма, а также по основаниям и на условиях, предусмотренных пунктами 2 и 3 статьи 91, пунктом 7 статьи 101, подпунктами 1), 2), 3) пункта 1 статьи 105, пунктом 5 статьи 106, подпунктами 1)-5) статьи 107 настоящего Закона.<br> 
 
Договор, не предусматривающий срока действия и иных оснований прекращения, может быть расторгнут наймодателем во всякое время с предупреждением нанимателя не менее чем за три месяца. При прекращении либо расторжении договора наниматель вместе со всеми проживающими с ним лицами подлежит выселению без предоставления другого жилища. 
 
6. При досрочном расторжении договора нанимателем он обязан предупредить об этом наймодателя не менее чем за один месяц либо оплатить за этот месяц установленную договором плату.<br> 
 
Указанный срок соответственно сокращается, если до наступления предусмотренного договором срока либо иного обстоятельства, прекращающего действие договора, осталось менее месяца. 
 
7. Член семьи нанимателя, проживающий вместе с ним, в соответствии с условиями договора найма приобретает такое же право пользования жилищем, как и сам наниматель, если при вселении члена семьи между ним и нанимателем не было иного соглашения.<br>
 
Круг членов семьи определяется в соответствии со статьей 21 настоящего Закона. 
 
8. При переходе к другому лицу права собственности на жилище, договор найма сохраняет силу для нового собственника, если иное не предусмотрено договором между нанимателем и собственником, сдавшим жилище внаем.<br>`
let otvt_vop_8_4_3 = `1. В жилище, в котором постоянно проживает собственник, нанимателю может предоставляться внаем жилище или его часть, в том числе смежная комната или часть комнаты. При проживании в жилище нескольких собственников для сдачи жилища внаем требуется согласие всех собственников.<br>
 
2. Наниматель без согласия собственников не вправе вселять других лиц, в том числе и членов своей семьи.<br> 
 
3. По истечении срока найма наниматель не приобретает права на возобновление договора и по требованию наймодателя подлежит выселению без предоставления другого жилища. Договор найма может быть расторгнут по требованию наймодателя досрочно при несоблюдении нанимателем условий договора найма, а также при наличии уважительных непредвиденных обстоятельств либо по основаниям, предусмотренным подпунктами 1)-5) статьи 107 настоящего Закона.<br> 
 
4. Договор найма, заключенный без указания срока, может быть прекращен наймодателем в любое время без объяснения причин. О прекращении договора найма наймодатель обязан предупредить нанимателя не менее чем за месяц.<br>
 
5. Наниматель вправе расторгнуть договор найма досрочно и без предупреждения, если иное не предусмотрено договором.<br>`
let otvt_vop_8_4_4 = `1. Условия проживания поднанимателей, в частности срок проживания, размер и порядок оплаты, определяются договором между нанимателем жилища и поднанимателем.<br>
 
2. Договор поднайма прекращается по истечении установленного сторонами срока либо наступлении указанного в договоре обстоятельства.<br>
 
Досрочное прекращение договора по требованию нанимателя возможно при нарушении договора поднанимателем, а по договорам, не устанавливающим срока либо иных оснований прекращения, во всякое время с предупреждением поднанимателя не менее чем за месяц. Договор поднайма также прекращается в случаях принудительного прекращения права собственности на жилище, предусмотренных статьей 29 настоящего Закона. 
 
3. Поднаниматель вправе расторгнуть договор во всякое время, если иное не предусмотрено договором поднайма.<br> 
 
4. При прекращении договора поднайма либо его расторжении нанимателем поднаниматель подлежит выселению без предоставления другого жилища.<br> 
 
5. Наниматель вправе вселить в жилище временных жильцов без заключения с ними договора поднайма. Условия проживания временных жильцов определяются нанимателем. Временные жильцы подлежат выселению без предоставления другого жилища по требованию нанимателя во всякое время с предупреждением не менее чем за семь рабочих дней.<br>`
let otvt_vop_8_4_5 = `При прекращении договора найма одновременно прекращается договор поднайма. Поднаниматели и временные жильцы при прекращении договора найма подлежат выселению без предоставления другого жилища.`
let otvt_vop_8_5_1 = `1. Право собственности на жилище прекращается при отчуждении собственником жилища другому лицу, в случае смерти собственника либо в случае уничтожения (разрушения) жилища, а также в иных случаях, предусмотренных Гражданским кодексом Республики Казахстан.<br>
 
2. При продаже своей доли одним из участников общей долевой собственности на жилище преимущественное право покупки имеет другой участник общей долевой собственности.<br> 
 
Если на приобретение продаваемой доли претендуют несколько участников общей долевой собственности, право выбора покупателя принадлежит продавцу. Порядок реализации права преимущественной покупки доли в общей собственности на жилище определяется Гражданским кодексом Республики Казахстан. `
let otvt_vop_8_5_2 = `1. Принудительное (помимо воли собственника) прекращение права собственности на жилище допускается в случаях:<br> 
 
1) обращения взыскания на жилище вместе с земельным участком по долгам собственника;<br> 
 
2) реквизиции;<br> 
 
3) конфискации;<br>
 
4) принудительного отчуждения земельного участка, на котором расположен дом, для государственных нужд;<br>
 
5) сноса аварийного многоквартирного жилого дома.<br>
 
2. При принудительном прекращении права собственности на жилище по основаниям, предусмотренным подпунктами 2) и 4) пункта 1 настоящей статьи, собственнику должна быть предоставлена по его выбору:<br> 
 
1) денежная компенсация, выплачиваемая собственнику до прекращения права собственности, включающая рыночные стоимости жилища и земельного участка, а также возмещение в полном объеме убытков, причиненных собственнику;<br>
 
2) благоустроенное жилище (квартира или жилой дом) в собственность в порядке, предусмотренном статьей 15 настоящего Закона;<br> 

3) возврат реквизированного жилища после прекращения чрезвычайных ситуаций, вызвавших реквизицию, с полной компенсацией собственнику убытков, причиненных реквизицией.<br>
 
3. При прекращении права собственности на жилище по основаниям, предусмотренным подпунктами 1) и 3) пункта 1 настоящей статьи, собственник и все проживающие в изымаемом жилище лица подлежат выселению без предоставления другого жилого помещения.<br>
 
3-1. При принудительном прекращении права собственности граждан, относящихся к социально уязвимым слоям населения, на единственное жилище на территории Республики Казахстан по основанию, предусмотренному подпунктом 1) пункта 1 настоящей статьи, выселение в отопительный сезон запрещается.<br>
 
4. При принудительном прекращении права собственности на жилище по основанию, предусмотренному подпунктом 5) пункта 1 настоящей статьи, собственнику предоставляется жилище в соответствии со статьей 67 настоящего Закона.<br>`
let otvt_vop_8_5_3 = `1. При прекращении права собственности на жилище по основаниям, предусмотренным подпунктами 2), 4) и 5) пункта 1 статьи 29 настоящего Закона, члены (бывшие члены) семьи собственника выселяются из жилища и приобретают право проживания в жилище, полученном в качестве компенсации за прежнее жилище.<br>
 
Другие лица, проживающие в прежнем жилище, выселяются без предоставления другого жилого помещения. 
 
2. При прекращении права собственности на жилище (жилое помещение) по воле собственника (продажа, дарение) члены семьи собственника, бывшие члены семьи собственника и временные жильцы выселяются без предоставления другого жилого помещения, если по договору с приобретателем жилища не предусмотрено иное.<br>
 
Прекращение права собственности, затрагивающее интересы несовершеннолетних, являющихся собственниками жилища, регулируется нормами, предусмотренными пунктом 3 статьи 13 настоящего Закона.`
let otvt_vop_8_5_4 = ``
let otvt_vop_8_5_5 = ``