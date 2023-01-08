var num1 = 0;
var num2 = 0;
var op;
var dot2;
var overallDot;
var finalResult = 0;
var activated = false;
var sqr = 1;
update();
const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

const boxes = document.querySelectorAll('.box');

boxes.forEach(box => {
    box.addEventListener('click', function handleClick(event) {
        var val = box.innerHTML;

        if (activated == false) {
            if (num1 <= 1000 && num1 >= -1000) {
                if (num.includes(parseInt(val)) && num1 < 1000) {
                    document.getElementById("result").innerHTML == 0 ? num1 = val : num1 += val;
                    update();
                }
            } else {
                overallDot = true;
            }
        } else if (activated == true) {
            if (num2 < 1000 & num2 > -1000 && num.includes(parseInt(val))) {
                num2 == 0 && dot2 != true ? num2 = val : num2 = num2.toString() + val;
                document.getElementById("result").innerHTML = num1 + op + num2;
            }
        }
        switch (val) {
            case "AC":
                num1 = 0;
                num2 = 0;
                sqr = 1;
                overallDot = false;
                dot2 = false;
                op = null;
                activated = false;
                update();
                break;
            case "±":
                if (num2 != 0) {
                    var intV = parseFloat(num2);
                    intV / intV === 1 ? num2 = intV - 2 * intV : num2 = intV + 2 * intV;
                    document.getElementById("result").innerHTML = num1 + op + num2;
                } else {
                    var intV = parseFloat(num1);
                    intV / intV === 1 ? num1 = intV - 2 * intV : num1 = intV + 2 * intV;
                    update();
                }
                break;
            case "÷":
            case "+":
            case "-":
            case "×":
                op = val;
                activated = true;
                document.getElementById("result").innerHTML = num1 + op;
                overallDot = false;
                break;
            case "=":
                if (num1.toString().length != 0 && num2.toString().length != 0) {
                    switch (op) {
                        case "÷":
                            finalResult = num1 / num2
                            finalResult = +finalResult.toFixed(2);
                            appUpdate(num1, num2, op, finalResult);
                            break;
                        case "+":
                            finalResult = parseInt(num1) + parseInt(num2);
                            finalResult = +finalResult.toFixed(2);
                            appUpdate(num1, num2, op, finalResult);
                            break;
                        case "-":
                            finalResult = num1 - num2
                            finalResult = +finalResult.toFixed(2);
                            appUpdate(num1, num2, op, finalResult);
                            break;
                        case "×":
                            finalResult = num1 * num2
                            finalResult = +finalResult.toFixed(2);
                            appUpdate(num1, num2, op, finalResult);
                            break;
                        case "^":
                            for (var i = 1; i <= num2; i++) {
                                sqr *= num1;
                            }
                            sqr = +sqr.toFixed(2);
                            appUpdate(num1, num2, op, sqr);
                    }
                }
                document.getElementById("equation").style.visibility = "visible";
                break;
            case "^":
                op = "^";
                activated = true;
                document.getElementById("result").innerHTML = num1 + op;
                break;
            case ".":
                if (overallDot == false) {
                    if (activated && num2.toString().length != 0) {
                        num2 = num2.toString() + "."
                        dot2 = true;
                    } else {
                        num1 = num1.toString() + ".";
                    }
                }
                overallDot = true;
                break;
            case "⌫":
                if (num1.toString().length != 0 || num2.toString().length != 0) {
                    activated && num2.toString().length != 0 ? num2 = num2.toString().substring(0, (num2.toString().length) - 1) : num1 = num1.toString().substring(0, (num1.toString().length) - 1);
                    if (activated && num2.toString().length != 0) {
                        document.getElementById("result").innerHTML = num1 + op + num2;
                    } else if (activated) {
                        document.getElementById("result").innerHTML = num1 + op;
                    } else {
                        update();
                    }
                }
        }
    });
});

function update() {
    document.getElementById("result").innerHTML = num1;
}

function appUpdate(numb1, numb2, op, result) {
    document.getElementById("operand").innerHTML = op;
    document.getElementById("equation").innerHTML = numb1 + " <span id='operand'>" + op + "</span> " + numb2;
    num1 = result;
    num2 = 0;
    sqr = 1;
    op = null;
    activated = false;
    dot2 = false;
    finalResult = 0;
    update();
}
