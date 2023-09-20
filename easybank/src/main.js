import "./scss/main.scss";
import Lenis from "@studio-freight/lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const navToggle = document.querySelector(".nav-toggle");
const hamburgerIcon = document.querySelector(".hamburger");
const closeIcon = document.querySelector(".close");
const navMenu = document.querySelector(".nav-list");
const backgroundOverlay = document.querySelector(".bg-overlay");
const headings = Array.from(document.querySelectorAll(".heading"));

navToggle.addEventListener("click", (e) => {
    hamburgerIcon.classList.toggle("hidden");
    closeIcon.classList.toggle("hidden");
    navMenu.classList.toggle("show-nav");
    backgroundOverlay.classList.toggle("hidden");
    navToggle.setAttribute("aria-expanded", !backgroundOverlay.classList.contains("hidden"));
});

const lenis = new Lenis({
    duration: 0.9
})

lenis.on('scroll', (e) => {
    console.log(e)
})

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}

requestAnimationFrame(raf);

headings.forEach((heading) => {
    gsap.to(heading, {
        y: "10px",
        duration: 1.2,
        scrollTrigger: heading
    })
});

console.log("bunee!");