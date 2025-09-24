/*let num0= "";
let num1= "";
let num2= "";
let num3= "";
let num4= "";
let num5= "";
let num6= "";
let num7= "";
let num8= "";
let num9= "";
let op = "";


function calcular (num1,num2, op){
    switch (op) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            return num1 / num2;
        default:
            return "Operacion no valida"; 
    }
}

document.getElementById("display").innerText = "0"; //innerHTML = "<strong>0</strong>"

const btnNum0 = document.querySelector("#num0");
const btnNum1 = document.querySelector("#num1");
const btnNum2 = document.querySelector("#num2");
const btnNum3 = document.querySelector("#num3");
const btnNum4 = document.querySelector("#num4");
const btnNum5 = document.querySelector("#num5");
const btnNum6 = document.querySelector("#num6");
const btnNum7 = document.querySelector("#num7");
const btnNum8 = document.querySelector("#num8");
const btnNum9 = document.querySelector("#num9");
const btnOpSum = document.querySelector("#opSuma");
const btnOpRest = document.querySelector("#opResta");
const btnOpMul = document.querySelector("#opMulti");
const btnOpDiv = document.querySelector("#opDiv");
const btnOpIgual = document.querySelector("#opIgual");
const btnBorrar = document.querySelector("#borrar");


//console.log(btnNum1);

btnNum0.addEventListener("click", () => {
    document.getElementById("display").innerText = "0";
    num0 = 0;
});

btnNum1.addEventListener("click", () => { //function () {...}
    //console.log("Button 1 clicked");
    document.getElementById("display").innerText = "1";
    num1 = 1;
});

btnNum2.addEventListener("click", () => {
    document.getElementById("display").innerText = "2";
    num2 = 2;
});

btnNum3.addEventListener("click", () => {
    document.getElementById("display").innerText = "3";
    num3 = 3;
});

btnNum4.addEventListener("click", () => {
    document.getElementById("display").innerText = "4";
    num4 = 4;
});

btnNum5.addEventListener("click", () => {
    document.getElementById("display").innerText = "5";
    num5 = 5;
});

btnNum6.addEventListener("click", () => {
    document.getElementById("display").innerText = "6";
    num6 = 6;
});

btnNum7.addEventListener("click", () => {
    document.getElementById("display").innerText = "7";
    num7 = 7;
});

btnNum8.addEventListener("click", () => {
    document.getElementById("display").innerText = "8";
    num8 = 8;
});

btnNum9.addEventListener("click", () => {
    document.getElementById("display").innerText = "9";
    num9 = 9;
});

btnOpSum.addEventListener("click", () => {
    document.getElementById("display").innerText = "+";
    op = "+";
});


btnOpRest.addEventListener("click", () => {
    document.getElementById("display").innerText = "-";
    op = "-";
});

btnOpMul.addEventListener("click", () => {
    document.getElementById("display").innerText = "*";
    op = "*";
});

btnOpDiv.addEventListener("click", () => {
    document.getElementById("display").innerText = "/";
    op = "/";
});

btnOpIgual.addEventListener("click", () => {
    var total = calcular(num1,num2, op)
    document.getElementById("display").innerText = total;
});

btnBorrar.addEventListener("click", () => {
    var total = calcular(undefined, undefined, undefined,);
    document.getElementById("display").innerText = "0";
});*/

let numA = "";
let numB = "";
let op = "";
let escribiendoNumA = true;

function calcular(a, b, op) {
    a = parseFloat(a);
    b = parseFloat(b);
    switch (op) {
        case "+": return a + b;
        case "-": return a - b;
        case "*": return a * b;
        case "/": return b !== 0 ? a / b : "Error";
        default: return "Operacion no valida";
    }
}

function escribirNumero(num) {
    if (escribiendoNumA) {
        numA += num;
        document.getElementById("display").innerText = numA;
    } else {
        numB += num;
        document.getElementById("display").innerText = numB;
    }
}

// === Botones de números ===
document.getElementById("num0").addEventListener("click", () => escribirNumero("0"));
document.getElementById("num1").addEventListener("click", () => escribirNumero("1"));
document.getElementById("num2").addEventListener("click", () => escribirNumero("2"));
document.getElementById("num3").addEventListener("click", () => escribirNumero("3"));
document.getElementById("num4").addEventListener("click", () => escribirNumero("4"));
document.getElementById("num5").addEventListener("click", () => escribirNumero("5"));
document.getElementById("num6").addEventListener("click", () => escribirNumero("6"));
document.getElementById("num7").addEventListener("click", () => escribirNumero("7"));
document.getElementById("num8").addEventListener("click", () => escribirNumero("8"));
document.getElementById("num9").addEventListener("click", () => escribirNumero("9"));

// === Botones de operadores ===
document.getElementById("opSuma").addEventListener("click", () => { op = "+"; escribiendoNumA = false; });
document.getElementById("opResta").addEventListener("click", () => { op = "-"; escribiendoNumA = false; });
document.getElementById("opMulti").addEventListener("click", () => { op = "*"; escribiendoNumA = false; });
document.getElementById("opDiv").addEventListener("click", () => { op = "/"; escribiendoNumA = false; });

// === Botón igual ===
document.getElementById("opIgual").addEventListener("click", () => {
    const total = calcular(numA, numB, op);
    document.getElementById("display").innerText = total;
    numA = total; // el resultado queda como nuevo número A
    numB = "";
    escribiendoNumA = false;
});

// === Botón borrar ===
document.getElementById("borrar").addEventListener("click", () => {
    numA = "";
    numB = "";
    op = "";
    escribiendoNumA = true;
    document.getElementById("display").innerText = "0";
});

// Inicializar display
document.getElementById("display").innerText = "0";
