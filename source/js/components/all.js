window.addEventListener('DOMContentLoaded', () => {
  //const scroll = new Scroll();
  const portfolioContainer = document.querySelector('.portfolio__container');
  const projectTypeOptions = document.querySelectorAll('.project__option');
  
  const contactContainer = document.querySelector('#contactContainer');

  const navWork = document.querySelector('#navWork');
  const navContact = document.querySelector('#navContact');
  const btnContact = document.querySelector('#btnContact');

  if (isInPage(portfolioContainer)) {

    /* When clicked on Works Nav */
    navWork.addEventListener('click', (e) => {
      window.scroll({
        top: projectTypeOptions[0].offsetTop - 150,
        left: 0,
        behavior: 'smooth'
      });

    });

    /* Automatically displays portfolio results */
    const portfolio = new Portfolio();
    const firstProjectCategory = projectTypeOptions[0].dataset.projectType;

    portfolio.displayResults(firstProjectCategory);

  }

  if (isInPage(contactContainer)){

    const triggers = [navContact, btnContact]

    /* Loops over the triggers */
    triggers.forEach(trigger => {
      trigger.addEventListener('click', (e) => {

        window.scroll({
          top: contactContainer.offsetTop - 150,
          left: 0,
          behavior: 'smooth'
        });

      });
    });

    
  }



});