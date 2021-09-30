//burger
$('#burger').on('click', function(){
    $('#burgerlink').toggleClass('active')
    $('.nav').toggleClass('active')
});
//dropdown
$('.filters__title').on('click', function(){
    $(this).toggleClass('active') 
    $($(this).data('target')).stop(true, false).slideToggle()  
});
