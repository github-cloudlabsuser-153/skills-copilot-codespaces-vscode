const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter the first number: ', (firstNum) => {
  rl.question('Enter the second number: ', (secondNum) => {
    rl.question('Enter the operator ( +, -, *, / ): ', (operator) => {
      let result;
      firstNum = parseFloat(firstNum);
      secondNum = parseFloat(secondNum);

      switch(operator) {
        case '+':
          result = firstNum + secondNum;
          break;
        case '-':
          result = firstNum - secondNum;
          break;
        case '*':
          result = firstNum * secondNum;
          break;
        case '/':
          if(secondNum !== 0) {
            result = firstNum / secondNum;
          } else {
            console.log('Cannot divide by zero');
            rl.close();
            return;
          }
          break;
        default:
          console.log('Invalid operator');
          rl.close();
          return;
      }

      console.log(`The result is: ${result}`);
      rl.close();
    });
  });
});