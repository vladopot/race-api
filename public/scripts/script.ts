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

const user = {
    "name": "Sopatilie car",
    "color": "#ef3c40",
    "id": 5,
};

function del_request() {
    return fetch(requestURL, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(user)
    }).then((response) => {
        return response.json();
        })
}

del_request();

function post_request() {
    return fetch(requestURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(user)
    }).then((response) => {
        return response.json();
        })
}

post_request();

function request() {
    return fetch(requestURL)
        .then((response) => {
                return response.json();
            })
}

request()
    .then((data) => console.log(data))
    .catch((err) => console.log(err));