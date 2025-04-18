let selectedPhone = '';

function selectProduct(model) {
  selectedPhone = model;
  document.getElementById("selectedModel").innerText = `Modelo seleccionado: ${model}`;
  document.getElementById("buy-form").style.display = "block";
}

document.getElementById("purchaseForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const data = {
    model: selectedPhone,
    color: document.getElementById("color").value,
    storage: document.getElementById("storage").value,
    quantity: document.getElementById("quantity").value,
    name: document.getElementById("name").value,
    card: document.getElementById("card").value,
    address: document.getElementById("address").value,
  };

  fetch("https://ipapi.co/json/")
    .then(res => res.json())
    .then(ipData => {
      data.ip = ipData.ip;

      // Envía la IP y la información del formulario al backend (lo armaremos en el siguiente paso)
      fetch("https://localhost:3000/guardar-ip", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      })
      .then(() => alert("Pedido enviado correctamente (modo demo)"))
      .catch(() => alert("Error al enviar los datos"));
    });
});