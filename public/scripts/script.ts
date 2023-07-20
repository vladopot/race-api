const start_buttons = document.querySelectorAll(".start_engine_btn");
start_buttons.forEach((e) => {
    const temp: HTMLElement = <HTMLElement>e;
    temp?.addEventListener("click", start_engine);
});

function start_engine() {
    const targ = arguments[0].target;
    const cars = document.querySelectorAll(".car_icon");
    let car: HTMLElement | null;
    cars.forEach((e) => {
        const temp: HTMLElement = <HTMLElement>e;
        if (temp.dataset.carNum === targ.dataset.carNum) {
            car = <HTMLElement>temp;
            car.setAttribute("style", "transition-property: left; transition-duration: 9s;");
            car.classList.add("race");
            return;
        }
    });
}