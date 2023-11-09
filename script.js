const toggleBtn = document.querySelector(".btn");
const navItem = document.querySelectorAll(".sidebar-link");

toggleBtn.addEventListener("click", () => {
  document.querySelector("#sidebar").classList.toggle("collapsed");
});

navItem.forEach((el) => {
  el.addEventListener("click", () => {
    navItem.forEach((item) => {
      if (item !== el) {
        item.classList.remove("active");
      }
    });
    el.classList.toggle("active");
  });
});
