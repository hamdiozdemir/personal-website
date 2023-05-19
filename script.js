// const images = [
//     '/images/python.png',
//     '/images/django.png',
//     '/images/celery.png',
//     '/images/flask.png',
//     '/images/html.svg',
//     '/images/css.png',
//     '/images/amazon-s3.png',
//     '/images/js.png',
//     '/images/postgres.png',
//     'images/rabbitmq.png'
//   ];
  
// const slideshow = document.getElementById('slider');
// let currentImageIndex = 0;

// function changeImage() {
//   slideshow.style.opacity = 0;

//   setTimeout(() => {
//     currentImageIndex = (currentImageIndex + 1) % images.length;
//     slideshow.src = images[currentImageIndex];
//     slideshow.style.opacity = 1;
//   }, 50);
// }
  
// setInterval(changeImage, 2000);



const pythonObjects = document.querySelectorAll('.python');

function handleHoverPython() {
  pythonObjects.forEach((obj) => {
    obj.classList.toggle('hover');
  });
}

pythonObjects.forEach((obj) => {
  obj.addEventListener('mouseover', handleHoverPython);
  obj.addEventListener('mouseout', handleHoverPython);
});



const boxes = document.querySelectorAll('.card-wrapper');
const navbar = document.getElementById('navbar')

function handleHover(event) {
  const hoveredBox = event.currentTarget;

  boxes.forEach((box) => {
    if (box !== hoveredBox) {
      box.classList.add('blur');
      navbar.classList.add('blur');
    }
  });
}

function handleMouseOut() {
  boxes.forEach((box) => {
    box.classList.remove('blur');
    navbar.classList.remove('blur');
  });
}

boxes.forEach((box) => {
  box.addEventListener('mouseenter', handleHover);
  box.addEventListener('mouseleave', handleMouseOut);

  // Add event listeners to child divs as well
  const childDivs = box.querySelectorAll('.child');
  childDivs.forEach((childDiv) => {
    childDiv.addEventListener('mouseenter', handleHover);
    childDiv.addEventListener('mouseleave', handleMouseOut);
  });
});










document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', (event) => {
    event.preventDefault();
    const target = document.querySelector(anchor.getAttribute('href'));
    target.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});

