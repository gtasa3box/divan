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
function send(event, php){
  console.log("Отправка запроса");
  event.preventDefault ? event.preventDefault() : event.returnValue = false;
  var req = new XMLHttpRequest();
  req.open('POST', php, true);
  req.onload = function() {
    if (req.status >= 200 && req.status < 400) {
    json = JSON.parse(this.response); // Ебанный internet explorer 11
        console.log(json);
          
        // ЗДЕСЬ УКАЗЫВАЕМ ДЕЙСТВИЯ В СЛУЧАЕ УСПЕХА ИЛИ НЕУДАЧИ
        if (json.result == "success") {
          // Если сообщение отправлено
          alert("Сообщение отправлено");
        } else {
          // Если произошла ошибка
          alert("Ошибка. Сообщение не отправлено");
        }
      // Если не удалось связаться с php файлом
      } else {alert("Ошибка сервера. Номер: "+req.status);}}; 
  
  // Если не удалось отправить запрос. Стоит блок на хостинге
  req.onerror = function() {alert("Ошибка отправки запроса");};
  req.send(new FormData(event.target));
  }