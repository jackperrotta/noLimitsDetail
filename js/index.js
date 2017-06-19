$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

// Carousel
$(document).ready(function() {
  //carousel options
  $('#quote-carousel').carousel({
    pause: true, interval: 7000,
  });
});

function mailOut(){
  var name = $("#name").val()
  var email = $("#email").val()
  var phone = $("#phone").val()
  var message = $("#message").val()
  // console.log('mailto:Preferredhomeimprovementllc@gmail.com?subject=Preferred%20Home%20Improvement Website Contact&amp;body=Name%3B%20'+name+'%0D%0AEmail%3B%20'+email+'%0D%0APhone%3B%20'+phone+'%0D%0AMessage%3B%20'+message);
  location.href = 'mailto:Preferredhomeimprovementllc@gmail.com?subject=Preferred%20Home%20Improvement Website Contact&amp;body=Name%3B%20'+name+'%0D%0AEmail%3B%20'+email+'%0D%0APhone%3B%20'+phone+'%0D%0AMessage%3B%20'+message;
}

$('#contactForm').submit(function(e) {
  e.preventDefault();

  $.ajax({
    url: '../contact/contact.php',
    type: 'POST',
    data: $(this).serialize(), // it will serialize the form data
  })
  .success(function() {
    alert('Email sent!');
  })
  .fail(function(){
    alert('Submit failed, please reload the page.'); 
  });
});
