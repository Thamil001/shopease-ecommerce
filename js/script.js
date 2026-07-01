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

      const images = ["./images/banner.jpg", "./images/banner-2.jpg","./images/banner-3.jpg"];

      const banner = document.getElementById("banner-image");
      const leftBtn = document.getElementById("left-btn");
      const rightBtn = document.getElementById("right-btn");
      const shopNow = document.getElementById("shop-now");

      const position = document.querySelector(".position");

      const div = document.createElement("div");
      images.forEach((item,index) => {
        
        if (images.length-1>index) {
          const div = document.createElement("div");
          div.className = "pos-index";
          position.appendChild(div);
        }
      });

      let index = 0;
      const dots = document.querySelectorAll(".pos-index");
      dots[index].classList.add("active")

      shopNow.addEventListener("click", () => {
        console.log("Shop Clicked");
        window.location.href = "products.html";
      });

      setInterval(() => {
        index = (index + 1) % images.length;
        banner.src = images[index];
        dots.forEach((dot)=>dot.classList.remove("active"))
        dots[index].classList.add("active")
      }, 6000);

      rightBtn.addEventListener("click", () => {
        index = (index + 1) % images.length;
        banner.src = images[index];
        dots.forEach((dot)=>dot.classList.remove("active"))
        dots[index].classList.add("active")
      });

      leftBtn.addEventListener("click", () => {
        index = (index - 1 + images.length) % images.length;
        banner.src = images[index];
        dots.forEach((dot)=>dot.classList.remove("active"))
        dots[index].classList.add("active")
      });
      
    });
}

// Shop Categories
function shopCategories() {
  const shopCategory = [
    {
      name: "Fashion",
      image: "../images/hoodi.png",
      color: "#FFE4E1",
    },
    {
      name: "Electronics",
      image: "../images/headphone.png",
      color: "#E6F7FF",
    },
    {
      name: "Shoes",
      image: "../images/shoe.png",
      color: "#FFF8DC",
    },
    {
      name: "Watch",
      image: "../images/watch.png",
      color: "#E8F5E9",
    },
    {
      name: "Bags",
      image: "../images/handBag.png",
      color: "#F3E5F5",
    },
    {
      name: "Accessories",
      image: "../images/sunGlass.png",
      color: "#FFF3E0",
    },
  ];

  const cartRow = document.querySelector(".cart-row");
  shopCategory.forEach((item) => {
    const div = document.createElement("div");
    const img = document.createElement("img");
    const title = document.createElement("div");

    div.className = "cart";
    div.style.background = item.color;
    div.onclick = () => {
      window.location.href = "products.html";
    };
    title.textContent = item.name;
    img.src = item.image;
    img.alt = item.name;
    div.append(img, title);
    cartRow.appendChild(div);
  });
}

topBar();
banner();
shopCategories();
