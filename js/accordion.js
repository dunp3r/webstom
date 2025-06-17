function toggleGlossary(button) {
    const container = button.parentElement;
    const content = container.querySelector(".glossary-content");
    const isOpen = container.classList.toggle("open");

    if (isOpen) {
      content.style.maxHeight = content.scrollHeight + "px";
      content.style.opacity = "1";
    } else {
      content.style.maxHeight = "0";
      content.style.opacity = "0";
    }
  }