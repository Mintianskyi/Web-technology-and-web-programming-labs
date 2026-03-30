function charater_counter() {
    const fullText = document.getElementById('tex').value;

    const textWithoutSpaces = fullText.replace(/\s/g, ''); 

    if (textWithoutSpaces === "") {
        alert("Введіть текст");
        return;
    }

    const count = textWithoutSpaces.length;

    document.getElementById('count_tex').innerText = "Кількість символів: " + count;
}