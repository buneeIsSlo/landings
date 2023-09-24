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
const statCards = Array.from(document.querySelectorAll(".stats-item"));
const aritcles = Array.from(document.querySelectorAll(".articles-item"));

navToggle.addEventListener("click", (e) => {
    hamburgerIcon.classList.toggle("hidden");
    closeIcon.classList.toggle("hidden");
    navMenu.classList.toggle("show-nav");
    backgroundOverlay.classList.toggle("hidden");
    navToggle.setAttribute("aria-expanded", !backgroundOverlay.classList.contains("hidden"));
});

/* Smooth scroll */
const lenis = new Lenis({
    duration: 0.9
})

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}

requestAnimationFrame(raf);

/* Animate hero image */
gsap.fromTo(
    ".hero-image",
    {
        opacity: 0,
        y: -50
    },
    {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.inOut"
    }
)

/* Animate call to actions */
gsap.fromTo(
    ".cta",
    {
        opacity: 0,
        scale: 0.5
    },
    {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "expo.out"
    }
)

/* Animate headings */
headings.forEach((heading) => {
    gsap.fromTo(
        heading,
        {
            opacity: 0,
            y: 5
        },
        {
            opacity: 1,
            y: 0,
            duration: 1.4,
            scrollTrigger: {
                trigger: heading,
                start: "center bottom",
            },
            ease: "power2"
        }
    )
});

/* Animate stats cards */
statCards.forEach((card, i) => {
    gsap.fromTo(
        card,
        {
            opacity: 0,
            x: -20,
        },
        {
            delay: 0.1 * i,
            opacity: 1,
            x: 0,
            duration: 1.4,
            scrollTrigger: {
                trigger: card,
                start: "top bottom",
            },
            ease: "power3.out"
        }
    )
});

/* Animate article cards */
aritcles.forEach((article, i) => {
    gsap.fromTo(
        article,
        {
            opacity: 0,
            x: -20,
        },
        {
            delay: 0.15 * i,
            opacity: 1,
            x: 0,
            duration: 1.4,
            scrollTrigger: {
                trigger: article,
                start: "top bottom",
            },
            ease: "power3.out"
        }
    )
});

/* Animate footer */
gsap.fromTo(
    "footer",
    {
        opacity: 0,
        scaleX: 0.9,
    },
    {
        opacity: 1,
        scaleX: 1,
        duration: 1,
        scrollTrigger: {
            trigger: "footer",
            start: "top bottom",
        },
        ease: "circ.out"
    }
)

console.log("bunee!");