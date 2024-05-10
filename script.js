const display = document.getElementById("display_bar");
const buttons = document.querySelectorAll(".btn");
const clear = document.querySelector(".clear");
const equal = document.querySelector(".btn-equal");

let flag = 0;

function clearDisplay() {
    return (display.value = "");
}

function deleteValues() {
    return (display.value = display.value.slice(0, -1));
}

function calculate(values) {
    const opa = ["+", "-", "*", "/"];
    const lastValue = opa.includes(values[values.length - 1]);
    if (lastValue) {
        display.value = "Syntax Error...";
    } else {
        var result = eval(values);
        try {
            display.value = result;
        } catch {
            display.value = "Syntax Error...";
        }
    }
}

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        {
            let button_value = buttons[i].innerText;
            if (button_value === "AC") {
                clearDisplay();
            } else if (button_value === "Del") {
                deleteValues();
            } else {
                if (button_value === "=") {
                    calculate(display.value);
                } else {
                    if (
                        button_value === "+" ||
                        button_value === "-" ||
                        button_value === "/" ||
                        button_value === "*" ||
                        button_value === "."
                    ) {
                        if (!flag) {
                            if (button_value === ".") {
                                display.value += button_value;
                                display.value = Number(display.value);
                                display.value = String(display.value);
                                display.value += ".";
                            } else display.value += button_value;
                        }
                        flag = 1;
                    } else {
                        display.value += button_value;
                        flag = 0;
                    }
                }
            }
        }
    });
}
