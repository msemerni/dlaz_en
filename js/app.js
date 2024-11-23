window.onload = function () {
  currYear();
}

function currYear() {
  document.querySelector('.copyRight').innerHTML += new Date().getFullYear();
}

/* start animation */
function handleIntersection(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('rotate-once');
      setTimeout(() => {
        entry.target.classList.remove('rotate-once');
      }, 500);
    }
  });
}

const images = document.querySelectorAll('.advantage-col-item-img > img');

const observer = new IntersectionObserver(handleIntersection, {
  threshold: 1,
});

images.forEach((img) => {
  observer.observe(img);
});
/* end animation */
