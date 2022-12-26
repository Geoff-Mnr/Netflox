document.querySelectorAll(".question__main").forEach((div) => {
    div.addEventListener("click", (div) => {
      questionDiv = div.currentTarget;
      answer = questionDiv.querySelector(".question__answer");
      answer.style.display =
        answer.style.display == "none" || answer.style.display == ""
          ? "block"
          : "none";
      switchButton = questionDiv.querySelector(".question__title__switch");
      switchButton.classList.toggle("active");
    });
  });
  




