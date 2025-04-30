const SENHA = "12345";
const TENTATIVAS = 3;
let tentRestantes = TENTATIVAS;
let contaBloqueada = false;

atualizarContador();

function validarLogin() {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;
    const messageDiv = document.getElementById("message");

    messageDiv.style.display = "none";
    messageDiv.className = "message";
    if (contaBloqueada) {
        mostrarMensagem("Sua conta está bloqueada. Por favor, entre em contato com o suporte.", "error");
        return;
    }
    
    if (username === "" || password === "") {
        mostrarMensagem("Por favor, preencha todos os campos.", "error");
        return;
    }
    
    if (password === SENHA) {
        document.getElementById("login-form").style.display = "none";
        document.getElementById("welcome-screen").style.display = "block";
        document.getElementById("welcome-message").textContent = `Bem-vindo, ${username}!`;
    } else {
        tentRestantes--;
        atualizarContador();
        
        if (tentRestantes <= 0) {
            contaBloqueada = true;
            mostrarMensagem("Número máximo de tentativas excedido. Sua conta foi bloqueada.", "error");
        } else {
            mostrarMensagem("Senha incorreta. Tente novamente.", "error");
        }
    }
}

function mostrarMensagem(texto, tipo) {
    const messageDiv = document.getElementById("message");
    messageDiv.textContent = texto;
    messageDiv.className = `message ${tipo}`;
    messageDiv.style.display = "block";
}

function togglePasswordVisibility() {
    const passwordInput = document.getElementById("password");
    const toggleButton = document.querySelector(".toggle-password");
    
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        toggleButton.textContent = "Ocultar";
    } else {
        passwordInput.type = "password";
        toggleButton.textContent = "Mostrar";
    }
}

function atualizarContador() {
    const attemptsInfo = document.getElementById("attempts-info");
    if (tentRestantes < TENTATIVAS) {
        attemptsInfo.textContent = `Tentativas restantes: ${tentRestantes}`;
    } else {
        attemptsInfo.textContent = "";
    }
}

function logout() {
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
    document.getElementById("welcome-screen").style.display = "none";
    document.getElementById("login-form").style.display = "block";
    document.getElementById("message").style.display = "none";
}

function login() {
    window.location.href = "Aula13.html"
}

document.getElementById("password").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        validarLogin();
    }
});
