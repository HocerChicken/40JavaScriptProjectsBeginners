const closeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");
const toggle = document.querySelector(".sidebar-toggle");

toggle.addEventListener("click", () => {
    sidebar.classList.toggle("show-sidebar");
});

closeBtn.addEventListener("click", () => {
    sidebar.classList.remove("show-sidebar");
});
