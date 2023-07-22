const start_buttons = document.querySelectorAll(".start_engine_btn");
const race_btn = document.querySelector(".btn_race");
const create_btn = document.querySelector(".create_btn");
const requestURL:string = 'http://127.0.0.1:3000/garage';

start_buttons.forEach((e) => {
    const temp: HTMLElement = <HTMLElement>e;
    temp?.addEventListener("click", start_engine);
});
race_btn?.addEventListener("click", race);

function start_engine() {
    const end_point: number = window.innerWidth / 75;
    const targ = arguments[0].target;
    const cars = document.querySelectorAll(".car_icon");
    let car: HTMLElement | null;
    cars.forEach((e) => {
        const temp: HTMLElement = <HTMLElement>e;
        if (temp.dataset.carNum === targ.dataset.carNum) {
            car = <HTMLElement>temp;
            car.setAttribute("style", `transform: translate(${75 * end_point - 95}px); transition-property: transform; transition-duration: 2s;`);
            return;
        }
    });
}

function race() {
    const end_point: number = window.innerWidth / 75;
    const cars = document.querySelectorAll(".car_icon");
    cars.forEach((e) => {
        const temp:HTMLElement = <HTMLElement>e;
        temp.setAttribute("style", `transform: translate(${75 * end_point - 95}px); transition-property: transform; transition-duration: 2s;`);
    });
}

create_btn?.addEventListener("click", request)
const xhr = new XMLHttpRequest();
function request() {
    xhr.open("GET", requestURL);
    console.log(JSON.parse(xhr.response));
    xhr.send();
}