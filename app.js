// write code here
let input1 = prompt("Enter input number 1:");
let input2 = prompt("Enter input number 2:");

if (input1 === "" || input2 === "")
    alert("Please enter number-1 and number-2");
else if (!(isNaN(+input1) || isNaN(+input2)))
    alert(`The sum result of ${+input1} + ${+input2} = ${+input1 + +input2}`);
else
    alert("Invalid, The received input is not number");