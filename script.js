function toggleAbstract(button) {
    // Find the sibling .abstract-content within the parent publication-item
    const publicationItem = button.parentElement;
    const abstractContent = publicationItem.querySelector(".abstract-content");
  
    // Toggle the display of the abstract-content and update the button text
    if (abstractContent.style.display === "block") {
      abstractContent.style.display = "none";
      button.textContent = "Abstract";
    } else {
      abstractContent.style.display = "block";
      button.textContent = "Hide Abstract";
    }
  }
