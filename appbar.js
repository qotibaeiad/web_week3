document.querySelector("body").addEventListener("click", (e) => {
    console.log("body");
    if (
      document
        .getElementById("drop-down-div_dropdown_3")
        .classList.contains("active")
    ) {
      document
        .getElementById("drop-down-div_dropdown_3")
        .classList.add("hidden");
      document
        .getElementById("drop-down-div_dropdown_3")
        .classList.remove("active");
    }
  });
  function showDropDownMenu_dropdown_3(el) {
    document.querySelectorAll(".hideme").forEach((el) => {
      el.classList.remove("active");
    });
    el.parentElement.children[1].classList.add("active");
    el.parentElement.children[1].classList.remove("hidden");
  }
  function text_dropdown_3(el) {
    const targetText = el.innerText;
    document.getElementById(
      "drop-down-content-setter_dropdown_3"
    ).innerText = targetText;
    document
      .getElementById("drop-down-div_dropdown_3")
      .classList.toggle("hidden");
  }