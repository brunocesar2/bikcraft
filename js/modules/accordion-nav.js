export default function initAccordionNav() {
  const questions = document.querySelectorAll("[data-accordion-nav] button");
  const responses = document.querySelectorAll("[data-accordion-nav] dd");
  if (responses.length && questions.length) {
    responses[0].classList.add("active");
    function activeResponse(event) {
      const controls = event.currentTarget.getAttribute("aria-controls");
      const response = document.getElementById(controls);
      response.classList.toggle("active");
      const active = response.classList.contains("active");
      event.currentTarget.setAttribute("aria-expanded", active);
    }
    questions.forEach((question) => {
      question.addEventListener("click", activeResponse);
    });
  }
}
