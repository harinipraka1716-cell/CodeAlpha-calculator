const display = document.getElementById("display");
const historyList = document.getElementById("history-list");

// Append values
function appendValue(value) {
    display.value += value;
}

// Clear display
function clearDisplay() {
    display.value = "";
}

// Delete last character
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// Calculate result
function calculate() {
    try {
        let expression = display.value;
        let result = eval(expression);

        let li = document.createElement("li");
        li.textContent = expression + " = " + result;
        historyList.prepend(li);

        display.value = result;
    } catch {
        display.value = "Error";
    }
}

// Scientific Functions
function squareRoot() {
    try {
        let result = Math.sqrt(parseFloat(display.value));
        addHistory(`√(${display.value})`, result);
        display.value = result;
    } catch {
        display.value = "Error";
    }
}

function sine() {
    try {
        let result = Math.sin(parseFloat(display.value));
        addHistory(`sin(${display.value})`, result);
        display.value = result;
    } catch {
        display.value = "Error";
    }
}

function cosine() {
    try {
        let result = Math.cos(parseFloat(display.value));
        addHistory(`cos(${display.value})`, result);
        display.value = result;
    } catch {
        display.value = "Error";
    }
}

function tangent() {
    try {
        let result = Math.tan(parseFloat(display.value));
        addHistory(`tan(${display.value})`, result);
        display.value = result;
    } catch {
        display.value = "Error";
    }
}

function logarithm() {
    try {
        let result = Math.log(parseFloat(display.value));
        addHistory(`log(${display.value})`, result);
        display.value = result;
    } catch {
        display.value = "Error";
    }
}

// Add history
function addHistory(expression, result) {
    let li = document.createElement("li");
    li.textContent = `${expression} = ${result}`;
    historyList.prepend(li);
}

// Keyboard Support
document.addEventListener("keydown", (event) => {

    let key = event.key;

    if (!isNaN(key) || "+-*/.%".includes(key)) {
        appendValue(key);
    }

    if (key === "Enter") {
        calculate();
    }

    if (key === "Backspace") {
        deleteLast();
    }

    if (key === "Escape") {
        clearDisplay();
    }
});

// Theme Toggle
const themeBtn = document.getElementById("theme-toggle");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
        themeBtn.innerHTML = "☀️";
    } else {
        themeBtn.innerHTML = "🌙";
    }
});

// Live Clock
setInterval(() => {

    document.getElementById("clock").innerHTML =
        new Date().toLocaleTimeString();

}, 1000);