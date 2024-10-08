// Eventos - Javascript

const btn = document.querySelector("#buttonEnviar");
document.addEventListener("DOMContentLoaded", function() {
    const btn = document.querySelector("#buttonEnviar");
    btn.addEventListener("click", function() {
        alert("Enviado!");
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector("#buttonEnviar");

    button.addEventListener("mouseenter", () => {
        button.style.backgroundColor = "green";
    });

    button.addEventListener("mouseleave", () => {
        button.style.backgroundColor = "";
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const input = document.querySelector("#input_nome");
    input.focus();
});

