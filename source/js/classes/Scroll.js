class Scroll {
  constructor() {

  }

  //Methods

  smoothScroll(target, duration) {
    //This Function gets the target Section and your desired duration
    const targetted = document.querySelector(target);
    const targetPosition = targetted.getBoundingClientRect().top - 100;

    //Gets the window PageY off set and substract by target position
    //to get the distance
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;

    function animation(currentTime) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = ease(timeElapsed, startPosition, distance, duration);

      window.scrollTo(0, run);

      if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function ease(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
  }

}



