let stop = document.getElementById("stop");
let nav = document.querySelector("nav");
window.addEventListener("scroll", () => {
    let wscroll = window.scrollY;
    let stopoff = stop.offsetTop;
    console.log(stopoff);
    if (wscroll >= stopoff) {
        nav.style.opacity = "0"
    } else {
        nav.style.opacity = "1"
    }
})