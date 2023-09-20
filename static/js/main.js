// Headers scroll
let nav = document.querySelector(".navbar")

window.onscroll = function () {
    if (document.documentElement.scrollTop > 50) {
        nav.classList.add("header-scrolled")
    } else {
        nav.classList.remove("header-scrolled")
    }
}


// Hide nav
let navlink = document.querySelectorAll(".nav-link")
let navCollapse = document.querySelector(".navbar-collapse.collapse")

navlink.forEach(function (e) {
    e.addEventListener("click", function () {
        navCollapse.classList.remove("show")
    })
})

// Counter count
const counters = document.querySelectorAll(".counter");

const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.15,
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const counter = entry.target;
            let initial_count = 0;
            const final_count = counter.dataset.count;

            const counting = setInterval(updateCounting, 10);

            function updateCounting() {
                if (initial_count < final_count) {
                    initial_count += 1;
                    counter.innerText = "+" + convertToArabicNumeral(initial_count);
                } else {
                    clearInterval(counting);
                }
            }


            observer.unobserve(counter);
        }
    });
}, options);

counters.forEach((counter) => {
    observer.observe(counter);
});

window.addEventListener("scroll", () => {
    counters.forEach((counter) => {
        const rect = counter.getBoundingClientRect();
        if (rect.top > window.innerHeight) {
            counter.innerText = "0";
            observer.observe(counter);
        }
    });
});

function convertToArabicNumeral(number) {
    const arabicNumerals = ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"];
    return String(number).split('').map(char => arabicNumerals[char]).join('');
}

// To top button
let toTopButton = document.querySelector(".to-top-btn");

window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > (130 * window.innerHeight / 100) || document.documentElement.scrollTop > (130 * window.innerHeight / 100)) {
        toTopButton.style.display = "block";
    } else {
        toTopButton.style.display = "none";
    }
}

toTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
