gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.defaults({
    scroller:  ".scroll-container"
});

gsap.to('.sky', {
    scrollTrigger: {
        trigger: "#page2",
        toggleActions: "play none none none",
    },
    duration: 4,
    background: "linear-gradient(to bottom, #FFD700, #87CEEB)",
    ease: "none"
});

gsap.to('.sky', {
    scrollTrigger: {
        trigger: "#page3",
        toggleActions: "play none none none"
    },
    duration: 4,
    background: "linear-gradient(to bottom, #FF8C00, #FFD700)",
    ease: "none"
});