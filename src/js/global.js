//burger
$('#burger').on('click', function(){
    $('#burgerlink').toggleClass('active')
    $('.nav').toggleClass('active')
});
//dropdown-examples
$('.examples__btn').on('click', function(){
  $(this).toggleClass('active') 
  $($(this).data('target')).stop(true, false).slideToggle()  
});
//dropdown-question
$('.questions__smalltitle').on('click', function(){
    $(this).toggleClass('active') 
    $($(this).data('target')).stop(true, false).slideToggle()  
});
//input numbers
function cislo(){
    if (event.keyCode != 43 && event.keyCode < 48 || event.keyCode > 57)
    event.preventDefault();
}

//slider-howto
$('.slider-howto').slick({
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    responsive: [
      {
        breakpoint: 1601,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: false,
          dots: false,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true
        }
      }
    ]
});

//slider-reviews
$('.slider-reviews').slick({
  arrows: true,
  infinite: true,
  speed: 300,
  slidesToShow: 2,
  slidesToScroll: 1,
  dots: true,
  responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true
      }
    }
  ]
});

$(function() {
  $('.lazy').Lazy();
});

//php mailer

// Отправка данных на сервер
