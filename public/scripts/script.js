"use strict";
let start_buttons = document.querySelectorAll(".start_engine_btn");
let race_btn = document.querySelector(".btn_race");
let create_btn = document.querySelector(".create_btn");
let btn_reset = document.querySelector(".btn_reset");
let requestURL = 'http://127.0.0.1:3000/garage';
let cars_names = ["mersedes", "renault", "audi", "BMW", "crysler", "jaguar", "Range Rover", "Porshe", "MClaren", "Maseratti", "SAAB", "Ferrari", "Lamborgini", "KIA", "Huindai"];
let btn_cars_generator = document.querySelector(".btn_cars_generator");
let stop_btn = document.querySelectorAll(".stop_emgine_btn");
let remove_btn = document.querySelectorAll(".remove_btn");
let btn_prev = document.querySelector(".btn_prev");
let btn_next = document.querySelector(".btn_next");
function handler() {
    stop_btn.forEach((e) => {
        const temp = e;
        temp === null || temp === void 0 ? void 0 : temp.addEventListener("click", stop_engine);
    });
    start_buttons.forEach((e) => {
        const temp = e;
        temp === null || temp === void 0 ? void 0 : temp.addEventListener("click", start_engine);
    });
    race_btn === null || race_btn === void 0 ? void 0 : race_btn.addEventListener("click", race);
    btn_reset === null || btn_reset === void 0 ? void 0 : btn_reset.addEventListener("click", reset);
    btn_cars_generator === null || btn_cars_generator === void 0 ? void 0 : btn_cars_generator.addEventListener("click", () => { return cars_generator(100); });
    create_btn === null || create_btn === void 0 ? void 0 : create_btn.addEventListener("click", () => { return cars_generator(1); });
    remove_btn.forEach((e) => {
        const temp = e;
        temp === null || temp === void 0 ? void 0 : temp.addEventListener("click", del);
    });
    btn_next === null || btn_next === void 0 ? void 0 : btn_next.addEventListener("click", next_page);
    btn_prev === null || btn_prev === void 0 ? void 0 : btn_prev.addEventListener("click", previous_page);
}
function cars_viewer(page = 1) {
    request()
        .then((data) => {
        var _a;
        let cars_to_remove = document.querySelectorAll(".car");
        cars_to_remove.forEach((e) => {
            const temp = e;
            temp.remove();
        });
        const temp = document.querySelector(".cars_number");
        temp.innerHTML = `GARAGE ${data.length}`;
        temp.dataset.page = `${page}`;
        const page_number = document.querySelector(".page_number");
        const footer = document.querySelector(".footer");
        if (data.length < 10) {
            for (let i = 0; i < data.length; i++) {
                footer.insertAdjacentHTML("beforebegin", `<div class="car" data-car-num="${data[i].id}" data-car-color="${data[i].color}">
                    <div class="del_sel_btns">
                        <button class="select_btn" data-car-num="${data[i].id}">SELECT</button>
                        <button class="remove_btn" data-car-num="${data[i].id}">REMOVE</button>
                    </div>
                    <p class="car-name">${data[i].name}</p>
                    <div class="control_btns">
                        <button class="start_engine_btn" data-car-num="${data[i].id}">Start<br>engine</button>
                        <button class="stop_emgine_btn" data-car-num="${data[i].id}">Stop<br>engine</button>
                    </div>
                    <div class="car_icon" data-car-num="${data[i].id}">
                        <img src="assets/car_icon.jpg">
                    </div>
                    <div class="flag">
                        <img src="assets/formula-1.png" alt="flag">
                    </div>
                    <div class="flad_leg"></div>
                    <div class="road"></div>
                </div>`);
            }
        }
        else {
            for (let i = page * 10 - 1; i > page * 10 - 11; i--) {
                page_number === null || page_number === void 0 ? void 0 : page_number.insertAdjacentHTML("afterend", `<div class="car" data-car-num="${data[i].id}" data-car-color="${data[i].color}">
                <div class="del_sel_btns">
                    <button class="select_btn" data-car-num="${data[i].id}">SELECT</button>
                    <button class="remove_btn" data-car-num="${data[i].id}">REMOVE</button>
                </div>
                <p class="car-name">${data[i].name}</p>
                <div class="control_btns">
                    <button class="start_engine_btn" data-car-num="${data[i].id}">Start<br>engine</button>
                    <button class="stop_emgine_btn" data-car-num="${data[i].id}">Stop<br>engine</button>
                </div>
                <div class="car_icon" data-car-num="${data[i].id}">
                    <img src="assets/car_icon.jpg">
                </div>
                <div class="flag">
                    <img src="assets/formula-1.png" alt="flag">
                </div>
                <div class="flad_leg"></div>
                <div class="road"></div>
            </div>`);
            }
        }
        page_number.innerHTML = `PAGE #${page}`;
        (_a = document.querySelector(".car")) === null || _a === void 0 ? void 0 : _a.classList.add("first_car");
        start_buttons = document.querySelectorAll(".start_engine_btn");
        race_btn = document.querySelector(".btn_race");
        create_btn = document.querySelector(".create_btn");
        btn_reset = document.querySelector(".btn_reset");
        btn_cars_generator = document.querySelector(".btn_cars_generator");
        stop_btn = document.querySelectorAll(".stop_emgine_btn");
        remove_btn = document.querySelectorAll(".remove_btn");
        handler();
    });
}
cars_viewer();
function next_page() {
    let page_number = document.querySelector(".cars_number").dataset.page;
    cars_viewer(Number(page_number) + 1);
}
function previous_page() {
    let page_number = document.querySelector(".cars_number").dataset.page;
    cars_viewer(Number(page_number) - 1);
}
function start_engine() {
    const end_point = window.innerWidth / 75;
    const targ = arguments[0].target;
    const cars = document.querySelectorAll(".car_icon");
    let car;
    cars.forEach((e) => {
        const temp = e;
        if (temp.dataset.carNum === targ.dataset.carNum) {
            car = temp;
            car.setAttribute("style", `transform: translate(${75 * end_point - 95}px); transition-property: transform; transition-duration: 2s;`);
            return;
        }
    });
}
function race() {
    const end_point = window.innerWidth / 75;
    const cars = document.querySelectorAll(".car_icon");
    cars.forEach((e) => {
        const temp = e;
        temp.setAttribute("style", `transform: translate(${75 * end_point - 95}px); transition-property: transform; transition-duration: 2s;`);
    });
}
function reset() {
    const cars = document.querySelectorAll(".car_icon");
    cars.forEach((e) => {
        const temp = e;
        temp.removeAttribute("style");
    });
}
function stop_engine() {
    const targ = arguments[0].target;
    const cars = document.querySelectorAll(".car_icon");
    let car;
    cars.forEach((e) => {
        const temp = e;
        if (temp.dataset.carNum === targ.dataset.carNum) {
            car = temp;
            car.removeAttribute("style");
            return;
        }
    });
}
function color_randomizer() {
    let r;
    let g;
    let b;
    let result;
    r = Math.floor(Math.random() * (256));
    g = Math.floor(Math.random() * (256));
    b = Math.floor(Math.random() * (256));
    result = "#" + r.toString(16) + g.toString(16) + b.toString(16);
    return result;
}
function car_name_generator() {
    const count_names = cars_names.length;
    return cars_names[Math.floor(Math.random() * (count_names))];
}
function cars_generator(n = 1) {
    const car_name = document.querySelector(".car_name").value;
    const color = document.querySelector(".color").value;
    request()
        .then((data) => {
        for (let i = 0; i < n; i++) {
            if (n > 1) {
                POST_method({
                    name: car_name_generator(),
                    color: color_randomizer(),
                    id: data.length + 1 + i
                });
            }
            else if (n === 1 && car_name !== '') {
                POST_method({
                    name: car_name,
                    color: color,
                    id: data.length + 1 + i
                });
            }
        }
        cars_viewer();
    })
        .catch((err) => console.log(err));
}
function request() {
    return fetch(requestURL)
        .then((response) => {
        return response.json();
    });
}
function POST_method(user) {
    return fetch(requestURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(user)
    }).then((res) => res.json());
}
// request().then((data) => {
//     console.log(data);
// });
function del() {
    let targ = arguments[0].target;
    console.log(targ);
    let targ_num = targ.dataset.carNum;
    return fetch(`${requestURL}/${targ_num}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
    }).then(response => {
        cars_viewer();
        response.json();
    });
}
// del().then((data) => {console.log(data)});
