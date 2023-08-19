let colorInterval; // To store the interval for color changing

document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll("input[type='button']");
    const resultField = document.getElementById("result");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            if (button.value === "=") {
                resultField.value = "F*CK YOU <3";
                startColorChanging();
            } else if (button.value === "C") {
                resultField.value = "";
                stopColorChanging();
            } else {
                resultField.value += button.value;
            }
        });
    });
});

function startColorChanging() {
    colorInterval = setInterval(changeColors, 200); // Change colors every 500 milliseconds
}

function stopColorChanging() {
    clearInterval(colorInterval);
}

function changeColors() {
    const randomColor = getRandomColor();
    document.body.style.backgroundColor = randomColor;
    document.getElementById("result").style.color = randomColor;
}

function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}