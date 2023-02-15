document.querySelectorAll(".question_main").forEach((div) => {
    div.addEventListener("click", (div) => {
      questionDiv = div.currentTarget;
      answer = questionDiv.querySelector(".question_answer");
      answer.style.display =
        answer.style.display == "none" || answer.style.display == ""
          ? "block"
          : "none";
      switchButton = questionDiv.querySelector(".question_title_switch");
      switchButton.classList.toggle("active");
    });
  });
  




