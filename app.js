const navList = document.querySelectorAll("nav li");
const container = document.querySelector(".container");

navList.forEach((li) => {
  li.addEventListener("click", (e) => {
    const targetId = e.target.dataset.target;
    const scrollTop = document.querySelector(targetId).offsetTop;
    // window.scrollTo() will not work out because of overflow:auto, which is applied on window
    container.scrollTo({ top: scrollTop, behavior: "smooth" });
  });
});
