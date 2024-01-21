document.addEventListener("DOMContentLoaded", function () {
    // Ambil nilai parameter "image" dari URL
    const params = new URLSearchParams(window.location.search);
    const imageName = params.get("image");
    // Setel src gambar berdasarkan nilai parameter
    let menuImage = document.getElementById("menuImg");
    menuImage.src = "img/menu/" + imageName;
  });
  