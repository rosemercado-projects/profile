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


