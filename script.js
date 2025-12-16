const menuBtn = document.getElementById("mobile-menu");
const navMenu = document.querySelector(".navbar-menu");
const navbar = document.querySelector(".navbar");
const contentBoxes = document.querySelectorAll(".content-box");

// Mobile menu toggle
menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});

// Scroll effects (navbar + content boxes)
window.addEventListener("scroll", () => {

    /* Navbar color change */
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

    /* Content box shadow change */
    contentBoxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (boxTop < windowHeight - 150) {
            box.classList.add("active-box");
        } else {
            box.classList.remove("active-box");
        }
    });
});

// Smooth scroll for menu links
const navLinks = document.querySelectorAll(".navbar-menu li a");

navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute("href"));
        target.scrollIntoView({ behavior: "smooth" });

        if (navMenu.classList.contains("active")) {
            navMenu.classList.remove("active");
        }
    });
});
