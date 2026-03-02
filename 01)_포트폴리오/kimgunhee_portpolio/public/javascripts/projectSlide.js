document.querySelectorAll('.project_img_slider').forEach(slider => {

  let slides = slider.querySelector('ul');
  let slideImg = slider.querySelectorAll('li');
  let prev = slider.querySelector('.prev');
  let next = slider.querySelector('.next');

  let currentIdx = 0;
  let slideCount = slideImg.length;
  let slideWidth = 600;
  let slideMargin = 100;

  function makeClone() {
    let cloneFirst = slideImg[0].cloneNode(true);
    let cloneLast = slides.lastElementChild.cloneNode(true);
    slides.append(cloneFirst);
    slides.insertBefore(cloneLast, slides.firstElementChild);
  }

  function init() {
    slides.style.width =
      (slideWidth + slideMargin) * (slideCount + 2) + 'px';
    slides.style.left = -(slideWidth + slideMargin) + 'px';
  }

  makeClone();
  init();

  next.addEventListener('click', function () {
    if (currentIdx <= slideCount - 1) {
      slides.style.left =
        -(currentIdx + 2) * (slideWidth + slideMargin) + 'px';
      slides.style.transition = `0.5s ease-out`;
    }

    if (currentIdx === slideCount - 1) {
      setTimeout(function () {
        slides.style.left = -(slideWidth + slideMargin) + 'px';
        slides.style.transition = `0s ease-out`;
      }, 500);
      currentIdx = -1;
    }

    currentIdx += 1;
  });

  prev.addEventListener('click', function () {
    if (currentIdx >= 0) {
      slides.style.left =
        -currentIdx * (slideWidth + slideMargin) + 'px';
      slides.style.transition = `0.5s ease-out`;
    }

    if (currentIdx === 0) {
      setTimeout(function () {
        slides.style.left =
          -slideCount * (slideWidth + slideMargin) + 'px';
        slides.style.transition = `0s ease-out`;
      }, 500);
      currentIdx = slideCount;
    }

    currentIdx -= 1;
  });

});