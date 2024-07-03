let hover1n = document.querySelector("#h1");

hover1n.addEventListener("mouseover", (event) => {
    // highlight the mouseover target
    event.target.style.color = "orange";
});