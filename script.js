document.getElementById("modelo").addEventListener("change", (e) => {
  const modelo = e.target.value;
  const imagen = document.getElementById("imagen-modelo");

  const imagenes = {
    "iPhone 12": "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-og-2020?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1604343707000",
    "iPhone 13": "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-og-2021?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1631652955000",
    "iPhone 13 Pro Max": "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-max-og-2021?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1631652957000",
    "iPhone 15": "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-og-2023?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1693501371384",
    "iPhone 15 Pro Max": "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-max-og-2023?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1693501372508"
  };

  if (imagenes[modelo]) {
    imagen.src = imagenes[modelo];
    imagen.style.display = "block";
  }

  document.getElementById("detalles").style.display = "block";
});