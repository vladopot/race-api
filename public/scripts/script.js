var start_buttons = document.querySelectorAll(".start_engine_btn");
start_buttons.forEach(function (e) {
    var temp = e;
    temp === null || temp === void 0 ? void 0 : temp.addEventListener("click", start_engine);
});
function start_engine() {
    var targ = arguments[0].target;
    var cars = document.querySelectorAll(".car_icon");
    var car;
    cars.forEach(function (e) {
        var temp = e;
        if (temp.dataset.carNum === targ.dataset.carNum) {
            car = temp;
            car.setAttribute("style", "transition-property: left; transition-duration: 9s;");
            car.classList.add("race");
            return;
        }
    });
}
