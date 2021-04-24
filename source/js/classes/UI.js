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

