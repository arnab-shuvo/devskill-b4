document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("#hamburger").addEventListener("click", () => {
    const ele = document.querySelector("#hamburger-menu-items");
    if (ele.style.display === "none") {
      ele.style.display = "block";
      document.querySelector(".container").style.display = "none";
    } else {
      ele.style.display = "none";
      document.querySelector(".container").style.display = "block";
    }
  });
});
