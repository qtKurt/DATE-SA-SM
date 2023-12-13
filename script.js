const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesbtn = document.querySelector(".yes-btn");
const nobtn = document.querySelector(".no-btn");

yesbtn.addEventListener("click", () => {
    question.innerHTML = "YEHEEYYY!!! <3";
    
    // Set a heart (❤️) as the content of the gif element
    gif.innerHTML = "&#10084;";
});

nobtn.addEventListener("mouseover", () => {
    const nobtnRect = nobtn.getBoundingClientRect();
    const maxX = window.innerWidth - nobtnRect.width;
    const maxY = window.innerHeight - nobtnRect.height;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    nobtn.style.left = randomX + "px";
    nobtn.style.top = randomY + "px";
});

// Adjust the button position when the window is resized
window.addEventListener("resize", () => {
    const nobtnRect = nobtn.getBoundingClientRect();
    const maxX = window.innerWidth - nobtnRect.width;
    const maxY = window.innerHeight - nobtnRect.height;

    // Ensure the button stays within the visible area
    const randomX = Math.min(Math.floor(Math.random() * maxX), maxX);
    const randomY = Math.min(Math.floor(Math.random() * maxY), maxY);

    nobtn.style.left = randomX + "px";
    nobtn.style.top = randomY + "px";
});
