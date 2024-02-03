gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.defaults({
    toggleActions: "retart pause resume pause",
    scroller:  ".scroll-container"
});

gsap.to('.sky', {
    scrollTrigger: {
        trigger: "#page2", // Make sure this matches the ID in your HTML
        toggleActions: "restart pause reverse reset"
    },
    duration: 4,
    background: "linear-gradient(to bottom, #FFD700, #87CEEB)",
    ease: "none"
});

gsap.to('.sky', {
    scrollTrigger: {
        trigger: "#page3", // Make sure this matches the ID in your HTML
        toggleActions: "restart pause reverse pause"
    },
    duration: 4,
    background: "linear-gradient(to bottom, #FF8C00, #FFD700)",
    ease: "none"
});