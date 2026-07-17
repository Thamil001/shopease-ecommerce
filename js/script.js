// TopBar

function topBar() {
  fetch("./components/topBar.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("topBar").innerHTML = data;

      const currentPage =
        window.location.pathname.split("/").pop() || "index.html";

      const navLinks = document.querySelectorAll("nav a");

      navLinks.forEach((link) => {
        const href = link.getAttribute("href");

        link.classList.remove("active");


        if (href === currentPage) {
          link.classList.add("active");
        }

        if (
          currentPage === "index.html" &&
          href.startsWith("#")
        ) {
          link.addEventListener("click", function () {
            navLinks.forEach((navLink) => {
              navLink.classList.remove("active");
            });

            this.classList.add("active");
          });
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

      const images = [
        "./images/banner.jpg",
        "./images/banner-2.jpg",
        "./images/banner-3.jpg",
      ];

      const banner = document.getElementById("banner-image");
      const leftBtn = document.getElementById("left-btn");
      const rightBtn = document.getElementById("right-btn");
      const shopNow = document.getElementById("shop-now");
      const position = document.querySelector(".position");

      const div = document.createElement("div");
      images.forEach((item, index) => {
        if (images.length - 1 > index) {
          const div = document.createElement("div");
          div.className = "pos-index";
          position.appendChild(div);
        }
      });

      let index = 0;
      const dots = document.querySelectorAll(".pos-index");
      dots[index].classList.add("active");

      shopNow.addEventListener("click", () => {
        console.log("Shop Clicked");
        window.location.href = "#featured-products";
      });

      setInterval(() => {
        index = (index + 1) % images.length;
        banner.src = images[index];
        dots.forEach((dot) => dot.classList.remove("active"));
        dots[index].classList.add("active");
      }, 6000);

      rightBtn.addEventListener("click", () => {
        index = (index + 1) % images.length;
        banner.src = images[index];
        dots.forEach((dot) => dot.classList.remove("active"));
        dots[index].classList.add("active");
      });

      leftBtn.addEventListener("click", () => {
        index = (index - 1 + images.length) % images.length;
        banner.src = images[index];
        dots.forEach((dot) => dot.classList.remove("active"));
        dots[index].classList.add("active");
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

function futuredCategories() {
  const products = [
    {
      productName: "Hoodi",
      image: "./images/hoodi.png",
      color: "#FFE4E1",
      offer: "10%",
      price: "₹3,829",
      oldPrice: "₹4,299",
    },
    {
      productName: "Electronics",
      image: "./images/headphone.png",
      color: "#E6F7FF",
      offer: "21%",
      price: "₹2,999",
      oldPrice: "₹3,699",
    },
    {
      productName: "Shoes",
      image: "./images/shoe.png",
      color: "#FFF8DC",
      offer: "5%",
      price: "₹4,959",
      oldPrice: "₹5,299",
    },
    {
      productName: "Watch",
      image: "./images/watch.png",
      color: "#E8F5E9",
      offer: "18%",
      price: "₹1,699",
      oldPrice: "₹2,099",
    },
    {
      productName: "Bags",
      image: "./images/handBag.png",
      color: "#F3E5F5",
      offer: "35%",
      price: "₹6,939",
      oldPrice: "₹8,299",
    },
    {
      productName: "Accessories",
      image: "./images/sunGlass.png",
      color: "#FFF3E0",
      offer: "20%",
      price: "₹4,949",
      oldPrice: "₹5,999",
    },
    {
      productName: "Shoes",
      image: "./images/shoe.png",
      color: "#FFF8DC",
      offer: "5%",
      price: "₹4,959",
      oldPrice: "₹5,299",
    },
  ];

  const cartRow = document.querySelector(".featured-cart-row");

  products.forEach((product) => {
    // Card
    const card = document.createElement("div");
    card.className = "featured-products-cart";

    // Image Container
    const imageContainer = document.createElement("div");
    imageContainer.className = "cart-image-container";

    // Offer
    const offer = document.createElement("div");
    offer.className = "offer-tag";
    offer.textContent = `${product.offer} OFF`;

    // Product Image
    const image = document.createElement("img");
    image.className = "cart-image";
    image.src = product.image;
    image.alt = product.productName;

    // Favourite Button
    const favDiv = document.createElement("div");

    const fav = document.createElement("img");
    fav.src = "./images/favorite.png";
    fav.alt = "Favourite";

    favDiv.addEventListener("click", () => {
      if (fav.src.includes("heart-red")) {
        fav.src = "../images/favorite.png";
      } else {
        fav.src = "../images/heart-red.png";
      }
    });

    favDiv.appendChild(fav);

    imageContainer.append(offer, image, favDiv);

    // Product Details
    const details = document.createElement("div");
    details.className = "product-details";

    // Title
    const title = document.createElement("div");
    title.className = "cart-title";
    title.textContent = product.productName;

    // Rating
    const rating = document.createElement("div");
    rating.className = "rating";

    for (let i = 1; i <= 5; i++) {
      const star = document.createElement("span");
      star.innerHTML = "★";
      star.style.color = "#ffaa00";
      rating.appendChild(star);
    }

    const vote = document.createElement("span");
    vote.className = "vote";
    vote.textContent = "(123)";
    rating.appendChild(vote);

    // Price
    const price = document.createElement("div");
    price.className = "price";

    const currentPrice = document.createElement("span");
    currentPrice.textContent = product.price;

    const oldPrice = document.createElement("span");
    oldPrice.className = "oldPrice";
    oldPrice.textContent = product.oldPrice;

    price.append(currentPrice, oldPrice);

    details.append(title, rating, price);

    // Add To Cart Button
    const button = document.createElement("div");

    const cartIcon = document.createElement("img");
    cartIcon.src = "./images/shoppingCart.png";
    cartIcon.alt = "Cart";

    const text = document.createElement("span");
    text.textContent = "Add to Cart";

    button.append(cartIcon, text);

    button.addEventListener("click", () => {
      text.textContent = "Added";
    });

    // Append Everything
    card.append(imageContainer, details, button);
    cartRow.appendChild(card);
  });
}

function flashBanner() {
  fetch("../components/flashBanner.html")
    .then((response) => response.text())
    .then((data) => {
      document.querySelector(".flash-banner").innerHTML = data;
      const timeBanner = document.querySelector(".time-container");
      const timeBox_Minute = document.createElement("div");
      timeBox_Minute.className = "time-box";
      const timeBox_Hour = document.createElement("div");
      timeBox_Hour.className = "time-box";
      const timeBox_second = document.createElement("div");
      timeBox_second.className = "time-box";
      const shopNow = document.querySelector(".shop-now");

      shopNow.addEventListener("click", () => {
        console.log("Shop Clicked");
        window.location.href = "products.html";
      });

      setInterval(() => {
        const now = new Date();
        const formatter = new Intl.DateTimeFormat("en-IN", {
          timeZone: "Asia/Kolkata",
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
          hour12: true,
        });
        const parts = formatter.formatToParts(now);

        const hour = parts.find((p) => p.type === "hour").value;
        const minute = parts.find((p) => p.type === "minute").value;
        const second = parts.find((p) => p.type === "second").value;
        timeBox_Hour.innerHTML = `
    <div>
        <span>${hour}</span>
        <span>Hour</span>
    </div>
`;

        timeBox_Minute.innerHTML = `
    <div >
        <span>${minute}</span>
        <span>Minute</span>
    </div>
`;
        timeBox_second.innerHTML = `
    <div>
        <div>${60 - second}</div>
        <div>Seconds</div>
    </div>
`;
        timeBanner.append(timeBox_Hour, timeBox_Minute, timeBox_second);
      }, 1000);
    });
}

const serviceData = [
  {
    img: "../images/fast-delivery.png",
    title: "Free Delivery",
    content: "Free Shipping on all orders above ₹499",
  },
  {
    img: "../images/securePay.png",
    title: "Secure Payment",
    content: "100% Secure Payment guarantee",
  },
  {
    img: "../images/back.png",
    title: "Easy Returns",
    content: "30 Days Easy return policy",
  },
  {
    img: "../images/customerCare.png",
    title: "24/7 Support",
    content: "Dedicated support whenever you need",
  },
];

function service() {
  const services = document.querySelector(".services");

  const wrapper = document.createElement("div");

  serviceData.forEach((data) => {
    const container = document.createElement("div");

    const img = document.createElement("img");
    img.src = data.img;
    img.alt = data.title;

    const textDiv = document.createElement("div");

    const title = document.createElement("div");
    title.className = "title-service";
    title.textContent = data.title;

    const content = document.createElement("div");
    content.className = "service-content";
    content.textContent = data.content;

    textDiv.append(title, content);
    container.append(img, textDiv);

    wrapper.appendChild(container);
  });

  services.appendChild(wrapper);
}

const products = [
  {
    productName: "Shoes",
    image: "./images/shoe.png",
    color: "#FFF8DC",
    offer: "5%",
    price: "₹4,959",
    oldPrice: "₹5,299",
  },
  {
    productName: "Hoodi",
    image: "./images/hoodi.png",
    color: "#FFE4E1",
    offer: "10%",
    price: "₹3,829",
    oldPrice: "₹4,299",
  },
  {
    productName: "Watch",
    image: "./images/watch.png",
    color: "#E8F5E9",
    offer: "18%",
    price: "₹1,699",
    oldPrice: "₹2,099",
  },
  {
    productName: "Bags",
    image: "./images/handBag.png",
    color: "#F3E5F5",
    offer: "35%",
    price: "₹6,939",
    oldPrice: "₹8,299",
  },
  {
    productName: "Accessories",
    image: "./images/sunGlass.png",
    color: "#FFF3E0",
    offer: "20%",
    price: "₹4,949",
    oldPrice: "₹5,999",
  },
  {
    productName: "Shoes",
    image: "./images/shoe.png",
    color: "#FFF8DC",
    offer: "5%",
    price: "₹4,959",
    oldPrice: "₹5,299",
  },
];

const cartRow = document.querySelector(".best-selling-products");

products.forEach((product) => {
  // Card
  const card = document.createElement("div");
  card.className = "best-selling-products-cart";

  // Image Container
  const imageContainer = document.createElement("div");
  imageContainer.className = "cart-image-container";

  // Product Image
  const image = document.createElement("img");
  image.className = "cart-image";
  image.src = product.image;
  image.alt = product.productName;

  // Favourite Button
  const favDiv = document.createElement("div");

  const fav = document.createElement("img");
  fav.src = "./images/favorite.png";
  fav.alt = "Favourite";

  favDiv.addEventListener("click", () => {
    if (fav.src.includes("heart-red")) {
      fav.src = "../images/favorite.png";
    } else {
      fav.src = "../images/heart-red.png";
    }
  });

  favDiv.appendChild(fav);

  imageContainer.append(image, favDiv);

  // Product Details
  const details = document.createElement("div");
  details.className = "best-selling-product-details";

  // Title
  const title = document.createElement("div");
  title.className = "cart-title";
  title.textContent = product.productName;

  // Rating
  const rating = document.createElement("div");
  rating.className = "rating";

  for (let i = 1; i <= 5; i++) {
    const star = document.createElement("span");
    star.innerHTML = "★";
    star.style.color = "#ffaa00";
    rating.appendChild(star);
  }

  const vote = document.createElement("span");
  vote.className = "vote";
  vote.textContent = "(123)";
  rating.appendChild(vote);

  // Price
  const price = document.createElement("div");
  price.className = "price";

  const currentPrice = document.createElement("span");
  currentPrice.textContent = product.price;

  const oldPrice = document.createElement("span");
  oldPrice.className = "oldPrice";
  oldPrice.textContent = product.oldPrice;

  price.append(currentPrice, oldPrice);

  details.append(title, rating, price);

  // Append Everything
  card.append(imageContainer, details);
  cartRow.appendChild(card);
});

function contact() {
  fetch("/components/contact.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("contact-section").innerHTML = data;

      const contactForm = document.getElementById("contactForm");

      // If the form does not exist on this page, stop the function
      if (!contactForm) {
        return;
      }

      const successMessage = document.getElementById("successMessage");

      contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        successMessage.textContent =
          "Thank you! Your message has been sent successfully.";

        contactForm.reset();
      });
    });
}

contact();
topBar();
banner();
shopCategories();
futuredCategories();
flashBanner();
service();
