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
    this.body = document.getElementsByTagName('body')[0];
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

    //this.modalDate.innerHTML = createDate; /* Date */

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

    this.body.style.overflowY = 'hidden';
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
        this.body.style.overflowY = 'auto';
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
        this.body.style.overflowY = 'auto';
      }
    });
  }

  


}