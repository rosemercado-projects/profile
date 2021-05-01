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

      const screenWidth = window.innerWidth;

      if(screenWidth > 1024){
        window.scroll({
          top: projectTypeOptions[0].offsetTop - 150,
          left: 0,
          behavior: 'smooth'
        });
      }else{
        const scroll = new Scroll();
        e.preventDefault();

        scroll.smoothScroll(".portfolio__container", 1000);
      }

    });


    /* Automatically displays portfolio results */
    const portfolio = new Portfolio();
    const firstProjectCategory = projectTypeOptions[0].dataset.projectType;

    portfolio.displayResults(firstProjectCategory);

  }

  if (isInPage(contactContainer)){

    const triggers = [navContact, btnContact]
    const screenWidth = window.innerWidth;
    /* Loops over the triggers */
    triggers.forEach(trigger => {
      trigger.addEventListener('click', (e) => {

        if (screenWidth > 1024){
          window.scroll({
            top: contactContainer.offsetTop - 150,
            left: 0,
            behavior: 'smooth'
          });
        }else{
          const scroll = new Scroll();
          e.preventDefault();

          scroll.smoothScroll('#contactContainer', 1000);
        }
       

       

      });
    });

    
  }



});