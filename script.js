const buttons = document.querySelectorAll("button");

const display = document.querySelector(".disp");

buttons.forEach((button) => {
  addEventListener("click", calculate);
});

function calculate(event) {
  const clickedButtonValue = event.target.value;

  if (clickedButtonValue === "=") {
    if (display.value !== "") {
      display.value = eval(display.value);
    }
  } else if (clickedButtonValue === "C") {
    display.value = "";
  } else {
    display.value += clickedButtonValue;
  }
}