window.addEventListener('DOMContentLoaded', () => {
  //const scroll = new Scroll();
  const portfolioContainer = document.querySelector('.portfolio__container');
  const projectTypeOptions = document.querySelectorAll('.project__option');

  if (isInPage(portfolioContainer)) {

    const portfolio = new Portfolio();
    const firstProjectCategory = projectTypeOptions[0].dataset.projectType;

    portfolio.displayResults(firstProjectCategory);
  }


});