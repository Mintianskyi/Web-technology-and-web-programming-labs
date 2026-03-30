function SumAndProduct() {
    const val1 = document.getElementById('num1').value;
    const val2 = document.getElementById('num2').value;

    if (val1 === "" || val2 === "") {
        alert("Заповніть обидва поля!");
        return;
    }

    const n1 = parseFloat(val1);
    const n2 = parseFloat(val2);

    const sum = n1 + n2;
    const product = n1 * n2;

    document.getElementById('sumResult').innerText = "Сума: " + sum;
    document.getElementById('prodResult').innerText = "Добуток: " + product;
}
