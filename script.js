document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".buy-btn");

  buttons.forEach(button => {
    button.addEventListener("click", (e) => {
      const card = e.target.closest(".card");
      const model = card.querySelector("h2").textContent;
      const color = card.querySelector(".color").value;
      const storage = card.querySelector(".storage").value;
      const quantity = card.querySelector(".quantity").value;

      alert(`Has seleccionado:\nModelo: ${model}\nColor: ${color}\nAlmacenamiento: ${storage}\nCantidad: ${quantity}`);
    });
  });
});