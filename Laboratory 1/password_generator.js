function password_generator() {
    const lengthValue = document.getElementById('length').value;

    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";
    let password = "";

    if (lengthValue === "" || lengthValue <= 0) {
        alert("Введіть довжину пароля");
        return;
    }

    for (let i = 0; i < lengthValue; i++) {
        let randomPos = Math.floor(Math.random() * charset.length);
        password += charset.charAt(randomPos);
    }

    document.getElementById('password').innerText = "Ваш пароль: " + password;
}
