// ==========================
// Mouse Parallax Effect
// ==========================

const wraps = document.querySelectorAll(".blob-wrap");

let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;

let currentX = mouseX;
let currentY = mouseY;

document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

// ==========================
// Custom Glow Cursor
// ==========================

const cursor = document.createElement("div");
cursor.classList.add("cursor");

document.body.appendChild(cursor);

// ==========================
// Animation Loop
// ==========================

function animate() {

    currentX += (mouseX - currentX) * 0.08;
    currentY += (mouseY - currentY) * 0.08;

    cursor.style.left = `${currentX}px`;
    cursor.style.top = `${currentY}px`;

    wraps.forEach((wrap, index) => {

        const factor = (index + 1) * 18;

        const x =
            (currentX - window.innerWidth / 2) / factor;

        const y =
            (currentY - window.innerHeight / 2) / factor;

        wrap.style.transform =
            `translate(${x}px, ${y}px)`;
    });

    requestAnimationFrame(animate);
}

animate();

// ==========================
// Ripple Effect
// ==========================

document.addEventListener("click", (e) => {

    const ripple = document.createElement("span");

    ripple.classList.add("ripple");

    ripple.style.left = `${e.clientX}px`;
    ripple.style.top = `${e.clientY}px`;

    const hue = Math.random() * 360;

    ripple.style.background =
        `hsla(${hue}, 100%, 70%, .5)`;

    ripple.style.boxShadow = `
        0 0 20px hsla(${hue},100%,70%,.9),
        0 0 80px hsla(${hue},100%,70%,.7),
        0 0 160px hsla(${hue},100%,70%,.5)
    `;

    document.body.appendChild(ripple);

    ripple.addEventListener("animationend", () => {
        ripple.remove();
    });

});

// ==========================
// Window Resize Support
// ==========================

window.addEventListener("resize", () => {

    mouseX = window.innerWidth / 2;
    mouseY = window.innerHeight / 2;

});

const links = document.querySelectorAll("a, .btn");

links.forEach(link => {

    link.addEventListener("mouseenter", () => {

        cursor.style.width = "14px";
        cursor.style.height = "14px";

        cursor.style.background =
            "linear-gradient(135deg,#ff6ec4,#7873f5)";

        cursor.style.boxShadow = `
            0 0 15px #ff6ec4,
            0 0 30px #7873f5,
            0 0 60px #7873f5
        `;

        cursor.style.mixBlendMode = "screen";

    });

    link.addEventListener("mouseleave", () => {

        cursor.style.width = "20px";
        cursor.style.height = "20px";

        cursor.style.background = "#ffffff";

        cursor.style.boxShadow = `
            0 0 20px white,
            0 0 40px white,
            0 0 80px white
        `;

        cursor.style.mixBlendMode = "normal";

    });

});