// One reusable script controls every accordion item on the page.
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
  const question = item.querySelector(".faq-question");
  const answer = item.querySelector(".faq-answer");

  question.addEventListener("click", () => {
    const wasOpen = item.classList.contains("active");

    // Close every item first so only one answer can be open at a time.
    faqItems.forEach((otherItem) => {
      otherItem.classList.remove("active");
      otherItem.querySelector(".faq-question").setAttribute("aria-expanded", "false");
      otherItem.querySelector(".faq-answer").style.maxHeight = "0px";
    });

    // Reopen the clicked item only if it was closed before the click.
    item.classList.toggle("active", !wasOpen);
    question.setAttribute("aria-expanded", String(!wasOpen));
    answer.style.maxHeight = wasOpen ? "0px" : `${answer.scrollHeight}px`;
  });
});

// Keep an open answer sized correctly when text wraps after a resize.
window.addEventListener("resize", () => {
  const openAnswer = document.querySelector(".faq-item.active .faq-answer");

  if (openAnswer) {
    openAnswer.style.maxHeight = `${openAnswer.scrollHeight}px`;
  }
});
