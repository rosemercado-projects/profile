class Portfolio {
  constructor() {
    this.options = document.querySelectorAll('.portfolio-option');
    this.UI = new UI();
    this.modal = new Modal();
    this.data = new Data();
    /* Autoplay */
    this.bindClick();
    this.modal.bindCloseModal();
  }

  //Methods

  /* Displays the result to the Front End */
  displayResults(type) {
    const data = new Data();
    const portfolioResultsContainer = document.querySelector('#portfolioResultsContainer');


    data.fetchProjects(type)
      .then(data => {
        let html = ``;

        /* Loops then prepends newly fetched projects so that new projects stays in the top */
        data.forEach(project => {
          html = `${this.UI.makeProjectCards(project)} ${html}`;
        });

        portfolioResultsContainer.innerHTML = html;

        /* Bind a click to each info buttons */
        const viewButtons = document.querySelectorAll('.viewButton');

        /* Loops over info buttons */
        viewButtons.forEach(button => {
          button.addEventListener('click', (e) => {
            e.preventDefault();
            const projectId = e.target.id;

            /* Fetches one project only */
            /* Checks if Modal type is info */
            const singleProject = data.find(element => element.id === projectId);
            this.modal.openModalInfo(singleProject);


          });
        });
        

      })
      .catch(err => console.log(err));

  }




  /* Binds click events to Filter options */
  bindClick() {
    this.options.forEach(option => {
      option.addEventListener('click', (e) => {
        e.preventDefault();
        const portfolioResultsContainer = document.querySelector('#portfolioResultsContainer');

        /* Removes active class to past selected option */
        const pastSelectedOption = document.querySelector('.portfolio-link--active');
        if (pastSelectedOption) {
          pastSelectedOption.classList.remove('portfolio-link--active');
        }

        /* Then adds it to the current selected option */
        e.target.classList.add('portfolio-link--active');

        /* Adds a spinner before displaying actual results */
        portfolioResultsContainer.innerHTML = `<span class="spinner"></span>`;
        const projectType = option.dataset.projectType;

        this.displayResults(projectType);

      });
    });
  }
}