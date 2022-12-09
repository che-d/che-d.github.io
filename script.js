const analogBtn = document.querySelector(".analog__btn");
const analogLinks = document.querySelectorAll(".analog__link");
analogLinks.forEach((el) => {
    el.addEventListener("mouseover", () => {
        analogBtn.style.display = "block";
        analogBtn.style.top = el.offsetTop + "px";
        analogBtn.href = el.href;

        const li = el.parentElement;
        const index = [...li.parentElement.children].indexOf(li);

        document.querySelectorAll(".analog__main-info").forEach((cont) => {
            const img = cont.querySelectorAll(".analog__link")[index].dataset.img;
            cont.querySelector("img").src = img;
        });
    });

    el.addEventListener("click", (event) => {
        event.preventDefault();
        getDetails(el.href);
    });
});

const comparisonSection = document.querySelector("section.comparison");
analogBtn.addEventListener("click", (event) => {
    event.preventDefault();
    getDetails(analogBtn.href);
});

function getDetails(link) {
    fetch(link)
        .then((res) => {
            return res.text();
        })
        .then((res) => {
            comparisonSection.innerHTML = res;
            comparisonSection.scrollIntoView({ behavior: "smooth" });
            handleComparisonVarItem();
        });
}

function handleComparisonVarItem() {
    const comparisonVarItem = document.querySelectorAll(".comparison__var-item");
    comparisonVarItem.forEach((el) => {
        el.addEventListener("click", () => {
            const index = [...el.parentElement.children].indexOf(el);

            document.querySelectorAll(".comparison__brand").forEach((cont) => {
                const img = cont.querySelectorAll(".comparison__var-item img")[index].dataset.img;
                cont.querySelector(".comparison__img img").src = img;
            });
        });
    });
}
