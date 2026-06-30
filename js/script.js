// TopBar
function topBar() {
  fetch("./components/topBar.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("topBar").innerHTML = data;

      let currentPage = window.location.pathname.split("/").pop();

      const navLinks = document.querySelectorAll("nav a");

      if (currentPage === "") {
        currentPage = "index.html";
      }

      navLinks.forEach((link) => {
        if (link.getAttribute("href") === currentPage) {
          link.classList.add("active");
        }
      });
    });
}
// Banner
function banner() {
  fetch("./components/banner.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("banner").innerHTML = data;

      const images = ["./images/banner.jpg", "./images/banner-2.jpg"];

      const banner = document.getElementById("banner-image");
      const leftBtn = document.getElementById("left-btn");
      const rightBtn = document.getElementById("right-btn");
      const shopNow = document.getElementById("shop-now");

      let index = 0;

      shopNow.addEventListener("click", () => {
        console.log("Shop Clicked");
        window.location.href = "products.html";
      });

      setInterval(() => {
        index = (index + 1) % images.length;
        banner.src = images[index];
      }, 6000);

      rightBtn.addEventListener("click", () => {
        index = (index + 1) % images.length;
        banner.src = images[index];
      });

      leftBtn.addEventListener("click", () => {
        index = (index - 1 + images.length) % images.length;
        banner.src = images[index];
      });
    });
}
topBar();
banner();