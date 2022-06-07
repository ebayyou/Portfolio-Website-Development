const allSection = document.querySelector('.main-content'),
  secsBtns = document.querySelectorAll('.controlls'),
  secsBtn = document.querySelectorAll('.control'),
  sections = document.querySelectorAll('.section');

// ? : pageTransitions
function pageTransitions() {
  // Todo : control btn active
  for (let i = 0; i < secsBtn.length; i++) {
    secsBtn[i].addEventListener('click', function () {
      let currentBtn = document.querySelectorAll('.active-btn');
      currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
      this.classList.add('active-btn');
    });
  }

  // Todo 2 : Section active
  allSection.addEventListener('click', (e) => {
    const id = e.target.dataset.id;

    if (id) {
      // ? : removing selected from the other btns
      secsBtn.forEach((btn) => {
        btn.classList.remove('active-section');
      });
      e.target.classList.add('active-section');

      // ? : hide other section
      sections.forEach((section) => {
        section.classList.remove('active-section');
      });

      const element = document.getElementById(id);
      element.classList.add('active-section');
    }
  });

  // Todo 2 : toggle theme
  const themeBtn = document.querySelector('.theme-btn');
  themeBtn.addEventListener('click', () => {
    let element = document.body;
    element.classList.toggle('light-theme');
  });
}

// active function
pageTransitions();
