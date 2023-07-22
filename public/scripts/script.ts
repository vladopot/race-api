const start_buttons = document.querySelectorAll(".start_engine_btn");
const race_btn = document.querySelector(".btn_race");
const create_btn = document.querySelector(".create_btn");
const btn_reset = document.querySelector(".btn_reset")
const requestURL:string = 'http://127.0.0.1:3000/garage';
const cars_names:string[] = ["mersedes", "renault", "audi", "BMW", "crysler", "jaguar", "Range Rover", "Porshe", "MClaren", "Maseratti", "SAAB", "Ferrari", "Lamborgini", "KIA", "Huindai"];
const btn_cars_generator = document.querySelector(".btn_cars_generator");

start_buttons.forEach((e) => {
    const temp: HTMLElement = <HTMLElement>e;
    temp?.addEventListener("click", start_engine);
});
race_btn?.addEventListener("click", race);
btn_reset?.addEventListener("click", reset);
btn_cars_generator?.addEventListener("click", () => {return cars_generator(100)});

interface car {
    name: string;
    color: string;
    id: number;
}

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

function reset() {
    const cars = document.querySelectorAll(".car_icon");
    cars.forEach((e) => {
        const temp:HTMLElement = <HTMLElement>e;
        temp.removeAttribute("style");
    });
}

function color_randomizer() {
    let r:number;
    let g:number;
    let b:number;
    let result:string;
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

function cars_generator(n:number = 1, color:string = color_randomizer()): void {
    let result: car[] = [];
    request()
        .then((data) => {
            for (let i = 0; i < n; i++) {
                result.push({
                    name: car_name_generator(),
                    color: color_randomizer(),
                    id: data.length + 1 + i
                });
            }
            console.log(data.concat(result));
        })
        .catch((err) => console.log(err));
}

function request() {
    return fetch(requestURL)
        .then((response) => {
                return response.json();
            })
}

// function del() {
//     return fetch("http://127.0.0.1:3000/garage/5", {
//         method: 'DELETE',
//         headers: {
//             'Content-Type': 'application/json;charset=utf-8'
//           },
//     }).then(response => response.json())
// }

// del().then((data) => {console.log(data)});