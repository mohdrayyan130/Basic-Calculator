let input = document.getElementById("inputBox");
let buttons = document.querySelectorAll("button");

let string = "";
let arr = Array.from(buttons);

arr.forEach((button) => {
  button.addEventListener("click", (e) => {
    let value = e.target.innerHTML; // ✅ Define 'value' here

    if (value == "=") {
      try {
        string = eval(string); // Evaluate the expression
        input.value = string;
      } catch {
        input.value = "Error"; // Handle invalid expressions
        string = "";
      }
    } else if (value == "AC") {
      string = "";
      input.value = string;
    } else if (value == "DEL") {
      string = string.substring(0, string.length - 1);
      input.value = string;
    } else {
      let lastChar = string[string.length - 1];
      let operators = ["+", "-", "*", "/"];

      // Avoid multiple operators in a row
      if (operators.includes(value) && operators.includes(lastChar)) {
        return;
      }

      string += value;
      input.value = string;
    }
  });
});
