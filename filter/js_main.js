class NoteBook {
    constructor(artic_prim, proiz_prim, proce_prim, chas_proce_prim, edro_proce_prim, tip_oper_prim, obiem_oper_prim, ssd_nacop_prim, video_card_prim, monit_gc_prim, monit_dum_prim, ekran_prim, cena_prim) {
        this.artic = artic_prim
        this.proiz = proiz_prim
        this.proce = proce_prim
        this.chas_proce = chas_proce_prim
        this.edro_proce = edro_proce_prim
        this.tip_oper = tip_oper_prim
        this.obiem_oper = obiem_oper_prim
        this.ssd_nacop = ssd_nacop_prim
        this.video_card = video_card_prim
        this.monit_gc = monit_gc_prim
        this.monit_dum = monit_dum_prim
        this.ekran = ekran_prim
        this.cena = cena_prim
    }
    print_name() {
        return (`Ноутбук ${this.proiz}`)
    }
    print_artic() {
        return (`Артикул: ${this.artic}`)
    }
    print_cena() {
        let str = String(this.cena)
        let per_0 = str.split('')
        let result = ''
        for (let i_0 = per_0.length - 1, i_1 = 0; i_1 < per_0.length; i_0--, i_1++) {
            if (i_1 % 3 == 0) {
                result = ' ' + result
            }
            result = per_0[i_0] + result
        }
        return (`${result} Т`)
    }
    // Процессор
    // Частота процессора, ГГц
    // Количество ядер
    // Тип оперативной памяти
    // Объем оперативной памяти, ГБ
    // Твердотельный накопитель
    // Графический процессор
    // Особенности
    // Диагональ экрана, дюйм
    // Разрешение экрана
    print_html() {
        return (`Производитель: <div class="black_txt_0">&nbsp${this.proiz} /&nbsp</div> Процессор: <div class="black_txt_0">&nbsp${this.proce} /&nbsp</div>
        Частота процессора : <div class="black_txt_0">&nbsp${this.chas_proce} /&nbsp</div> Количество ядер: <div class="black_txt_0">&nbsp${this.edro_proce} /&nbsp</div> 
        Тип оперативной памяти: <div class="black_txt_0">&nbsp${this.tip_oper} /&nbsp</div> Объем оперативной памяти : <div class="black_txt_0">&nbsp${this.obiem_oper} /&nbsp</div> 
        Твердотельный накопитель: <div class="black_txt_0">&nbsp${this.ssd_nacop} /&nbsp</div> Графический процессор: <div class="black_txt_0">&nbsp${this.video_card} /&nbsp</div> 
        Особенности: <div class="black_txt_0">&nbsp${this.monit_gc} /&nbsp</div>Диагональ экрана : <div class="black_txt_0">&nbsp${this.monit_dum} /&nbsp</div> 
        Разрешение экрана: <div class="black_txt_0">&nbsp${this.ekran} /&nbsp</div>`)
    }
}
let NB_1 = new NoteBook('0', 'Acer', 'Intel Core i3', '1 ГГц', '4 ядра', 'DDR4', '8 ГБ', '256 ГБ SSD', 'Radeon RX 5600M', '120 Гц', '14 дюйм', '1920 x 1080', 189000)
let NB_2 = new NoteBook('1', 'ASUS', 'Intel Core i5', '2 ГГц', '6 ядер', 'DDR4', '16 ГБ', '512 ГБ SSD', 'Radeon RX 6600M', '120 Гц', '15 дюйм', '1920 x 1280', 290000)
let NB_3 = new NoteBook('2', 'HP', 'Intel Core i7', '3 ГГц', '12 ядер', 'DDR4', '32 ГБ', '128 ГБ SSD', 'GeForce GTX 1660', '120 Гц', '16 дюйм', '2560 x 1440', 250000)
let NB_4 = new NoteBook('3', 'Lenovo', 'Intel Core i9', '4 ГГц', '16 ядер', 'DDR4', '24 ГБ', '128 ГБ SSD', 'GeForce GTX 3080', '144 Гц', '17 дюйм', '2560 x 1600', 99000)
let NB_5 = new NoteBook('4', 'MSI', 'AMD Ryzen 3', '5 ГГц', '4 ядра', 'DDR5', '8 ГБ', '512 ГБ SSD', 'GeForce GTX 4080', '165 Гц', '18 дюйм', '1920 x 1080', 50000)
let NB_6 = new NoteBook('5', 'RAZER', 'AMD Ryzen 4', '1 ГГц', '6 ядер', 'DDR5', '8 ГБ', '256 ГБ SSD', 'Radeon RX 5500M', '165 Гц', '14 дюйм', '1920 x 1280', 500000)
let NB_7 = new NoteBook('6', 'Xiaomi', 'AMD Ryzen 7', '2 ГГц', '8 ядер', 'DDR5', '24 ГБ', '256 ГБ SSD', 'Radeon RX 5600M', '240 Гц', '15 дюйм', '2560 x 1440', 1890000)
let NB_8 = new NoteBook('7', 'Acer', 'AMD Ryzen 9', '3 ГГц', '16 ядер', 'DDR4', '64 ГБ', '512 ГБ SSD', 'Radeon RX 6600M ', '300 Гц', '16 дюйм', '2560 x 1600', 1000000)
let NB_9 = new NoteBook('8', 'ASUS', 'Intel Core i9', '4 ГГц', '24 ядра', 'DDR4', '32 ГБ', '256 ГБ SSD', 'GeForce GTX 1660', '360 Гц', '17 дюйм', '1920 x 1080', 2000000)
let NB_10 = new NoteBook('9', 'HP', 'Intel Core i7', '5 ГГц', '12 ядер', 'DDR5', '8 ГБ', '256 ГБ SSD', 'GeForce GTX 2050', '120 Гц', '18 дюйм', '1920 x 1280', 1200000)
let NB_11 = new NoteBook('10', 'Lenovo', 'Intel Core i5', '1 ГГц', '12 ядер', 'DDR5', '32 ГБ', '512 ГБ SSD', 'GeForce GTX 2080', '144 Гц', '14 дюйм', '2560 x 1440', 1500000)
let NB_12 = new NoteBook('11', 'MSI', 'AMD Ryzen 9', '2 ГГц', '24 ядра', 'DDR5', '24 ГБ', '128 ГБ SSD', 'GeForce GTX 3050', '165 Гц', '15 дюйм', '2560 x 1600', 900000)
let NB_13 = new NoteBook('12', 'RAZER', 'AMD Ryzen 7', '3 ГГц', '8 ядер', 'DDR5', '64 ГБ', '256 ГБ SSD', 'GeForce GTX 3060', '240 Гц', '16 дюйм', '1920 x 1280', 600000)
let NB_14 = new NoteBook('13', 'Xiaomi', 'Intel Core i7', '4 ГГц', '10 ядер', 'DDR5', '32 ГБ', '128 ГБ SSD', 'GeForce GTX 3080', '300 Гц', '17 дюйм', '2560 x 1440', 200000)
let NB_15 = new NoteBook('14', 'Acer', 'Intel Core i5', '5 ГГц', '12 ядер', 'DDR5', '16 ГБ', '256 ГБ SSD', 'GeForce GTX 4080', '360 Гц', '18 дюйм', '2560 x 1600', 100000)

let arr_obj_0 = [NB_1, NB_2, NB_3, NB_4, NB_5, NB_6, NB_7, NB_8, NB_9, NB_10, NB_11, NB_12, NB_13, NB_14, NB_15]
// console.log(arr_obj_0[0].length)
// console.log(arr_obj_0[0].cena)



// console.log(Object.keys(NoteBook).length)

let html_index_0 =
    `<div class="inf_box">
        <div class="inf_box_in_1">
            <img src="./image/165883_01.jpg" alt="">
        </div>
        <div class="inf_box_in_2">
            <div class="inf_box_in_2_txt_1">
                <div class="inf_box_in_2_txt_1_out_1"> Ноутбук Acer</div>
            </div>
            <div class="inf_box_in_2_txt_2">
                <div class="inf_box_in_2_txt_2_articul">
                    Артикул: 165883
                </div>
                <div class="inf_box_in_2_txt_2_inform">
                    Производитель: Acer / Процессор: Intel Core i3 / Частота процессора, ГГц: 1.2 / Объем оперативной памяти, ГБ: 4 / Жесткий диск: HDD нет / Твердотельный накопитель: 256 ГБ SSD / Диагональ экрана, дюйм: 15 / Разрешение экрана: 1920 x 1080 / Тип оперативной памяти: DDR4 / Графический процессор: GeForce GTX 1660 Ti, 6 ГБ / Особенности: 12 Гц
                </div>
            </div>
        </div>
        <div class="inf_box_in_3">
            <div class="inf_box_in_3_txt_1">
                <div class="inf_box_in_3_txt_1_cena">
                    189 000 T
                </div>
            </div>         
        </div>
    </div>`

function vidno() {
    for (let i = 0; i < 15; i++) {
        $("#main_in_inform").append(`${html_index_0}`);
        $('.inf_box_in_2_txt_2_articul').eq(i).html(arr_obj_0[i].print_artic());
        $('.inf_box_in_2_txt_2_inform').eq(i).html(arr_obj_0[i].print_html());
        $('.inf_box_in_2_txt_1_out_1').eq(i).html(arr_obj_0[i].print_name());
        $('.inf_box_in_3_txt_1_cena').eq(i).html(arr_obj_0[i].print_cena());
    }
}
vidno()


// for (let item in NB_1) {
//     console.log(item)
// }

// Функция each jQuery используется для перебора элементов объекта jQuery. 
// Он содержит один или несколько элементов DOM и предоставляет все функции jQuery. 
// Дополнительно jQuery предоставляет вспомогательную функцию с тем же именем, которая может быть вызвана без предварительного выбора или создания элементов DOM. 
// Давайте узнаем об этом более подробно.
let num_check
$('#fil_but_open').click(function () {
    num_check = 0
    let value_arr_0 = []
    $('.input_fil').each(function (l, n) {
        if (n.checked == true) {
            value_arr_0.push(n.value)
            num_check++
        }
    })
    result(value_arr_0)
})
let val_1 = 50000
let val_2 = 2000000
function result(value_arr) {
    let obj_arr_99 = [];
    if (value_arr.length == 0) {
        vidno()
        return;
    }
    for (let w = 0; w < arr_obj_0.length; w++) {
        let count = 0
        for (let prop in arr_obj_0[w]) {
            for (let q = 0; q < value_arr.length; q++) {
                if (value_arr[q] == arr_obj_0[w][prop]) {
                    count++
                    if (count > num_check - 1) {
                        obj_arr_99.push(arr_obj_0[w].artic)
                    }
                }
            }
        }
    }


    let per = 0
    for (let i = 0; i < obj_arr_99.length; i++) {
        if (obj_arr_99[i] == obj_arr_99[i + 1]) {
            for (per = i; per < obj_arr_99.length - 1; per = per + 1) {
                obj_arr_99[per] = obj_arr_99[per + 1]
            }
            obj_arr_99.pop()
            i--
        }
    }
    val_1 = $("#cena_1").val()
    val_2 = $("#cena_2").val()
    let cena_arr = []
    val_1 = Number(val_1)
    val_2 = Number(val_2)
    if (val_1 < 50000 || val_1 > 2000000 || val_2 > 2000000 || val_2 < 50000 || val_1 > val_2) {
        return
    }
    let obj_cena = 0
    for (let i = 0; i < obj_arr_99.length; i++) {
        let artic_n = obj_arr_99[i]
        obj_cena = arr_obj_0[artic_n].cena
        for (let w = 0; w < arr_obj_0.length; w++) {
            if (val_1 < obj_cena && obj_cena < val_2) {
                cena_arr.push(artic_n)
            }
        }
    }
    for (let i = 0; i < cena_arr.length; i++) {
        if (cena_arr[i] == cena_arr[i + 1]) {
            for (per = i; per < cena_arr.length - 1; per = per + 1) {
                cena_arr[per] = cena_arr[per + 1]
            }
            cena_arr.pop()
            i--
        }
    }
    obj_vidno(cena_arr)
}
$('#fil_but_close_0').click(function () {
    $('.input_fil').each(function (l, n) {
        n.checked = false
    })
    b = 0
    vidno()
});
let a, b;
function foo_1(c) {
    if (a != c) {
        b = 0;
        a = c
    };
    b ^= 1;
    c.checked = b

};
// let val_1 = 50000
// let val_2 = 2000000
// $("#cena_1").on("input", () => {
//     val_1 = $("#cena_1").val()
//     schet()
// });
// $("#cena_2").on("input", () => {
//     val_2 = $("#cena_2").val()
//     schet()
// });

// function schet() {
//     let cena_arr = []
//     val_1 = Number(val_1)
//     val_2 = Number(val_2)
//     if (val_1 < 50000 || val_1 > 2000000 || val_2 > 2000000 || val_2 < 50000 || val_1 > val_2) {
//         return
//     }
//     console.log(val_1)
//     console.log(val_2)
//     let obj_cena = 0
//     for (let w = 0; w < arr_obj_0.length; w++) {
//         obj_cena = arr_obj_0[w].cena
//         if (val_1 < obj_cena && obj_cena < val_2) {
//             arr_obj_0[w].artic
//             cena_arr.push(arr_obj_0[w].artic)
//         }
//     }
// }
function obj_vidno(array_obj) {
    $("#main_in_inform").html(' ')
    for (let k = 0; k < array_obj.length; k++) {
        let per_num = array_obj[k]
        $("#main_in_inform").append(`${html_index_0}`);
        $('.inf_box_in_2_txt_2_articul').eq(k).html(arr_obj_0[per_num].print_artic());
        $('.inf_box_in_2_txt_2_inform').eq(k).html(arr_obj_0[per_num].print_html());
        $('.inf_box_in_2_txt_1_out_1').eq(k).html(arr_obj_0[per_num].print_name());
        $('.inf_box_in_3_txt_1_cena').eq(k).html(arr_obj_0[per_num].print_cena());
    }
}


