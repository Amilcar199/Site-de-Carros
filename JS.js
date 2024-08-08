document.addEventListener("DOMContentLoaded", function() {
    let prevButton = document.getElementById("prev");
    let nextButton = document.getElementById("next");
    let container = document.querySelector(".container");
    let items = container.querySelectorAll(".list .item");
    let indicador = document.querySelector(".indicators");
    let dots = indicador.querySelectorAll("ul li");
    let numbers = indicador.querySelector(".numbers");
    let list = container.querySelector(".list");

    let active = 0;
    let first = 0;
    let last = items.length - 1;

    nextButton.onclick = () => {
        list.style.setProperty("--calculator", 1)
        let itemOld = container.querySelector(".list .item.active");
        itemOld.classList.remove("active");
        active = (active + 1 > last) ? first : active + 1;
        items[active].classList.add("active");
        updateIndicators();
    }

    prevButton.onclick = () => {
        list.style.setProperty("--calculator", -1)
        let itemOld = container.querySelector(".list .item.active");
        itemOld.classList.remove("active");
        active = (active - 1 < first) ? last : active - 1;
        items[active].classList.add("active");
        updateIndicators();
    }

    function updateIndicators() {
        dots.forEach((dot, index) => {
            if (index === active) {
                dot.classList.add("active");
            } else {
                dot.classList.remove("active");
            }
        });
        numbers.textContent = `0${active + 1}`;
    }
});

