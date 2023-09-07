// Headers scroll
let nav = document.querySelector(".navbar")

window.onscroll = function (){
    if (document.documentElement.scrollTop > 50 ){
        nav.classList.add("header-scrolled")
    }else{
        nav.classList.remove("header-scrolled")
    }
}


// Hide nav
let navlink = document.querySelectorAll(".nav-link")
let navCollapse = document.querySelector(".navbar-collapse.collapse")

navlink.forEach(function(e){
    e.addEventListener("click", function (){
        navCollapse.classList.remove("show")
    })
})

// Counter count
const counters = document.querySelectorAll(".counter");

const options = {
  root: null, // Use the viewport as the root
  rootMargin: "0px",
  threshold: 0.15, // Trigger when 15% of the element is visible
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Start the counting animation
      const counter = entry.target;
      let initial_count = 0;
      const final_count = counter.dataset.count;

      const counting = setInterval(updateCounting, 10);

      function updateCounting() {
        if (initial_count < 1000) {
          initial_count += 1;
          counter.innerText = initial_count;
        }
        if (initial_count >= final_count) {
          clearInterval(counting);
        }
      }

      // Unobserve the counter to prevent multiple animations
      observer.unobserve(counter);
    }
  });
}, options);

counters.forEach((counter) => {
  observer.observe(counter);
});


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
