let button = document.querySelector("#button"),
    output = document.querySelector("#output"),
    container = document.querySelector("#container");


colorChang = () => {
    let r = Math.random() * 255 >> 0;
    let g = Math.random() * 255 >> 0;
    let b = Math.random() * 255 >> 0;
    let colors = `rgb(${r}, ${g}, ${b})`;
    container.style.backgroundColor = `${colors}`;
    output.innerText = `${colors}`;

} 

button.addEventListener("click", colorChang);