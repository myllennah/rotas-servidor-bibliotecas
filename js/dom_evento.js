document.addEventListener("DOMContentLoaded", () => {
    //Exibir descrição
    const link = document.getElementById("item");
    const mostrarDescricao = document.getElementsByClassName("descricao")[0];

    link.addEventListener("click", (event) => {
        event.preventDefault();
        if (mostrarDescricao.style.display === "none") {
            mostrarDescricao.style.display = "block";
        } else {
            mostrarDescricao.style.display = "none";
        }
    });
});