function calculate() {
    let input_onw = document.getElementById('num1');
    let input_two = document.getElementById('num2');
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var operation = document.getElementById('operation').value;
    var result;

    switch (operation) {
        case 'addition':
            result = num1 + num2;
            break;
        case 'subtraction':
            result = num1 - num2;
            break;
        case 'multiplication':
            result = num1 * num2;
            break;
        case 'division':
            result = num1 / num2;
            break;
        default:
            result = "Invalid operation";
    }

    document.getElementById('result').innerText = "Result: " + result;

    input_onw.value = ' ';
    input_two.value = ' ';

}