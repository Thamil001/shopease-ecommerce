fetch("./components/topBar.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("topBar").innerHTML = data;

    let currentPage = window.location.pathname.split("/").pop();

    const navLinks = document.querySelectorAll("nav a");
    console.log(currentPage);
    
    if (currentPage === "") {
      currentPage = "index.html";
    }

    navLinks.forEach((link) => {
      if (link.getAttribute("href") === currentPage) {
        link.classList.add("active");
      }
    });
  });
