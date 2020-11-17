

$(document).ready(function(){
  $('.responsive').slick({
    dots: true,
    infinite: false,
    speed: 300,
    arrows: true,
    accessibility: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
});

var modal = document.querySelector('.modal');
var closeBtn = document.querySelector('.close-btn');
var contactBtns = document.querySelectorAll('.contact-btn');
var sendBtn = document.querySelector('.send-btn');
var body = document.querySelector('body');

contactBtns.forEach(function(button) {
  button.onclick = function(){
    modal.classList.add('show');
  body.classList.add('modal-open');
  }
});

closeBtn.onclick = function(){
  modal.classList.remove('show');
  body.classList.remove('modal-open');
}