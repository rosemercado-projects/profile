window.addEventListener('DOMContentLoaded', () => {
  //const scroll = new Scroll();
  const portfolioContainer = document.querySelector('.portfolio__container');

  if (isInPage(portfolioContainer)) {

    const portfolio = new Portfolio();

    portfolio.displayResults('website-design');
  }


});