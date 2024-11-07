window.addEventListener('load',function(){
    document.body.classList.add('loaded');
  });
  
window.addEventListener('scroll', function() {
  const elements = document.querySelectorAll('.card');
  const contents=document.querySelectorAll('.content');
  const titles=this.document.querySelectorAll(".title");
  const triggerBottom = window.innerHeight / 5 * 4;

  elements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;

      if (elementTop < triggerBottom) {
          element.classList.add('active');
      } else {
          element.classList.remove('active');
      } 
  });

  contents.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;

      if (elementTop < triggerBottom) {
          element.classList.add('active');
      } else {
          element.classList.remove('active');
      } 
  });

  titles.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;

    if (elementTop < triggerBottom) {
        element.classList.add('active');
    } else {
        element.classList.remove('active');
    } 
});

});
