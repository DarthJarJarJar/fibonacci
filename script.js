const button = document.getElementById("calc");
const fibo = document.getElementById("fibo");
const inputField = document.getElementById("inputField");
let fiboFunc = number => {
    let fiboArray = [0, 1];
    let x = 0;
    let y = 1;
    let fiboString = "";
    for(let i = 0; i<number-1; i++) {
        let z = x + y;
        x = y;
        y = z;
        fiboArray.push(z)
    }
    for (let ct = 0; ct<fiboArray.length-1; ct++) {
        fiboString = fiboString + fiboArray[ct] + ", ";
    }
    return fiboString;
}

button.onclick = function caclulateFibo() {
    fibo.innerHTML = "Fibonacci series: "
    fibo.innerHTML = fibo.innerHTML + fiboFunc(inputField.value);
}

