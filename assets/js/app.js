class Data {
  constructor() {
    this.api = '../../projects.json';

  }

  //Methods
  async fetchProjects(type) {
    this.api = `${this.api}`;
    let response = await fetch(this.api);
    let data = await response.json();

    return data;
  }

  /* async fetchSingleProject(id) {
    this.singleProjectApi = `${this.api}/${id}`;
    let response = await fetch(this.singleProjectApi);
    let data = await response.json();

    return data;
  } */

}



class Modal {
  constructor() {
    this.api = 'https://strapi-rap.herokuapp.com';

    /* Primary Modals */
    this.modalOverlay = document.querySelector('#cmodalOverlay');
    this.modal = document.querySelector('#cmodal');
    this.modalClose = document.querySelector('#cmodalClose');
    this.modalTitle = document.querySelector('#cmodalTitle');
    this.modalCategory = document.querySelector('#cmodalCategory');
    this.modalDescription = document.querySelector('#cmodalDescription');
    this.gutsVideo = document.querySelector('.cmodal__video-guts');
    this.gutsImage = document.querySelector('.cmodal-guts');

    this.modalVideo = document.querySelector('.cmodal__video');
    this.modalImage = document.querySelector('.cmodal-img');
    /* this.modalDate = document.querySelector('#modalDate');
    this.modalDesc = document.querySelector('#modalDesc'); */


    /* Image Modal */
/*     this.modalImgOverlay = document.querySelector('#modalImgOverlay');
    this.modalCloseSecondary = document.querySelector('#modalCloseSecondary');
    this.modalTypeImg = document.querySelector('.modal__type-img');
    this.modalTypeImgContainer = document.querySelector('.modal__type-img__container');
 */
    this.UI = new UI();
  }

  //Once modal is opened it fetches the information of the project from an API
  openModalInfo(project) {

    /* Sets the date format options */
    //const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };

    /* Declare the Javascript Date Object */
   // const date = new Date(project.create_date);

    /* And uses the Intl.dateformat to finalize the date format */
    /* const createDate = new Intl.DateTimeFormat('en-US', dateOptions).format(date);
    const technologiesList = this.loopTechnologies(project);
    const collaboratorsList = this.loopCollaborators(project);
    const gallery = this.showGalleryImages(project); */


    //this.modalTitle.innerHTML = project.name; /* Title */
    //this.modalDate.innerHTML = createDate; /* Date */
    //this.modalDesc.innerHTML = project.description; /* Description */
    //this.modalTech.innerHTML = technologiesList; /* Technologies */
    //this.collaborators.innerHTML = collaboratorsList; /* Collaborators */
    //this.modalMainImage.src = `${project.main_image.url}`; /* Image URL */
    //this.modalMainImage.title = `Rap Esteva - Projects | ${project.name}`; /* Image Title */
    //this.modalMainImage.alt = `Rap Esteva - Projects | ${project.name}`;  /* Image Alt */

    if (project.preview.ext == '.jpg'){
      this.gutsVideo.classList.add('cmodal--hide');

      this.modalTitle.innerHTML = project.title;
      this.modalDescription.innerHTML = project.description;
      this.modalCategory.innerHTML = project.type;
      this.modalImage.src = `${project.preview.url}`;

    }else if(project.preview.ext == '.mp4'){
      this.modalVideo.src = `${project.preview.url}`;
      this.gutsImage.classList.add('cmodal--hide');
      this.modal.classList.add('modal__video-height');
    }

    this.modalOverlay.classList.remove('cmodal--hide');
    this.modal.classList.remove('cmodal--hide');
  }

  //Bind Close modal
  bindCloseModal() {
    this.modalOverlay.addEventListener('click', (e) => {

      /* Close if clicked is an overlay or Close Button */
      if (e.target == this.modalOverlay || e.target == this.modalClose) {

        e.preventDefault();
        this.modalOverlay.classList.add('cmodal--hide');
        this.modal.classList.add('cmodal--hide');
        this.modalVideo.src = '';

        this.gutsVideo.classList.remove('cmodal--hide');
        this.gutsImage.classList.remove('cmodal--hide');
        this.modal.classList.remove('modal__video-height');
      }
    });

    this.modalClose.addEventListener('click', (e) => {

      /* Close if clicked is an overlay or Close Button */
      if (e.target == this.modalOverlay || e.target == this.modalClose) {

        e.preventDefault();
        this.modalOverlay.classList.add('cmodal--hide');
        this.modal.classList.add('cmodal--hide');
        this.modalVideo.src = '';

        this.gutsVideo.classList.remove('cmodal--hide');
        this.gutsImage.classList.remove('cmodal--hide');
        this.modal.classList.remove('modal__video-height');
      }
    });
  }

  


}
function isInPage(node) {
  return (node === document.body) ? false : document.body.contains(node);
}
class Portfolio {
  constructor() {
    this.options = document.querySelectorAll('.project__option');
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
         if(project.type_slug == type){
           html = `${this.UI.makeProjectCards(project)} ${html}`;
         }
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
        const pastSelectedOption = document.querySelector('.project__option--current');
        if (pastSelectedOption) {
          pastSelectedOption.classList.remove('project__option--current');
        }

        /* Then adds it to the current selected option */
        e.target.classList.add('project__option--current');

        /* Adds a spinner before displaying actual results */
        portfolioResultsContainer.innerHTML = `<span class="spinner"></span>`;
        const projectType = option.dataset.projectType;

        this.displayResults(projectType);

      });
    });
  }
}
class UI {
  constructor() {
    this.source = 'https://strapi-rap.herokuapp.com';
  }

  //Methods
  makeProjectCards(project) {
    let layout = ``;


    layout += `
     <div class="project">
        <div class="project-overlay">
          <div class="project-overlay__info">
            <h6 class="hex-white text-center project__title">${project.title}</h6>
            <a href="#" target="_blank" class="mt-10 hex-white text-decoration-none viewButton" id="${project.id}">
            <i class="far fa-eye"></i> View
            </a>
          </div>
        </div>
        <img src="${project.thumbnail}" alt="Rose Gil Mercado - Projects | ${project.preview.caption}"
          title="Rose Gil Mercado - Projects | ${project.preview.caption}" class="project-img" loading="lazy">
      </div>
    `;



    return layout;
  }


  /* makeBtnVisit(url) {
    let layout = '';

    if (url) {
      layout = `<a href="${url}" target="_blank" class="btn btn-circle-primary btn-visit">
          <i class="fas fa-link"></i>
         </a>`;
    }

    return layout;

  } */

  makeBtnInfo(project) {
    let layout = '';

    if (project.modal_type != 'none') {
      layout = `
   <a href="#" target="_blank" class="btn btn-circle-accent btn-open-modal" id="${project.id}">
           <i class="fas fa-eye"></i>
         </a>
  `;
    }

    return layout;
  }



}


window.addEventListener('DOMContentLoaded', () => {
  //const scroll = new Scroll();
  const portfolioContainer = document.querySelector('.portfolio__container');

  if (isInPage(portfolioContainer)) {

    const portfolio = new Portfolio();

    portfolio.displayResults('website-design');
  }


});

let pattern;

/* Regular expression pattern */
pattern = /hello/i;

//String to match
const str = 'Hello';

//Log Results
const result = pattern.exec(str);
/* console.log(result); */


/* Function to test if the str passes the pattern. */
function patternTest(pattern, str){
 if(pattern.test(str)){
  console.log(`${str} matches ${pattern.source}`);
 }else{
  console.log(`${str} does NOT match ${pattern.source}`);
 }
}

/* patternTest(pattern, str); */

