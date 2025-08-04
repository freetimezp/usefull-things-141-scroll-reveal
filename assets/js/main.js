gsap.registerPlugin(ScrollTrigger);

const bgColors = ["#e14434", "#1378bb", "#eb872f", "#095741", "#6643e5", "#d36c61", "#0b55a0", "#d2900c"];
const bgColorElement = document.querySelector(".bg-color");

gsap.utils.toArray(".item").forEach((item, index) => {
    let img = item.querySelector(".item-img img");

    gsap.fromTo(
        img,
        {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
            scale: 1,
            opacity: 0.6,
        },
        {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            ease: "power1.out",
            scale: 1.25,
            duration: 2,
            opacity: 1,
            scrollTrigger: {
                trigger: item,
                start: "center bottom",
                end: "bottom top",
                toggleActions: "play reverse play reverse",
                onEnter: () => updateBackground(bgColors[index]),
                onEnterBack: () => updateBackground(bgColors[index]),
            },
        }
    );
});

function updateBackground(color) {
    gsap.to(bgColorElement, {
        background: `linear-gradient(0deg, ${color} 100%, rgba(252, 176, 69, 0) 100%)`,
        duration: 2,
        ease: "power1.out",
    });
}

document.addEventListener("DOMContentLoaded", function () {
    const counterElement = document.querySelector(".counter p");
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;

    function updateScrollPercentage() {
        const scrollPosition = window.scrollY;
        const scrolledPercentage = Math.round((scrollPosition / docHeight) * 100);
        counterElement.textContent = scrolledPercentage;
    }

    window.addEventListener("scroll", updateScrollPercentage);
});
