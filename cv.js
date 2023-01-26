
const ref = document.getElementById("ref");
const mostrar = document.getElementById("mostrar");
const divExp = document.getElementById("divExperiencia");
const referencias = document.getElementById("referencias");


referencias.addEventListener("click", () => {
    divExp.style.display = "none";
    ref.style.display = "block";

});