const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log(":::Basic calculator:::");

calc = () => {
  readline.question("Enter the first numbers: ", (num1) => {
    readline.question("Enter the second numbers: ", (num2) => {
      readline.question("Enter the operand: ", (operand) => {
        let result,
          operandAry = ["+", "-", "*", "/"];
        if (
          !isNaN(parseFloat(num1)) &&
          isFinite(num1) &&
          !isNaN(parseFloat(num2)) &&
          isFinite(num2) &&
          operandAry.includes(operand)
        ) {
          switch (operand) {
            case "+":
              result = parseFloat(num1) + parseFloat(num2);
              break;
            case "-":
              result = parseFloat(num1) - parseFloat(num2);
              break;
            case "*":
              result = parseFloat(num1) * parseFloat(num2);
              break;
            case "/":
              if (parseFloat(num2) == 0) {
                result = "Divide by zero";
                break;
              } else {
                result = parseFloat(num1) / parseFloat(num2);
                break;
              }
            default:
              result = "Oops! Invalid operand ";
          }
          console.log(result);
        } else {
          console.log("Not a valid input");
        }
        calc();
      });
    });
  });
};

calc();
