
//===============ROTATE WORDS================//


var html = '';
var words = [
  {Title: ' Web Designer.'},
  {Title: ' Ski Coach.'},
  {Title: ' Longboarder.'},
  {Title: ' Problem-Solver.'},
  {Title: ' Baltimorean.'},
  {Title: ' Do-It-Yourselfer.'},
  {Title: ' Golfer.'},
  {Title: ' Friend.'}
  ];

function rotateWord(word) {

  var ret = ''

  ret += '<span id="animateWord" class="rotating-word">' + word.Title + '</span>';
  return ret;
};

  for (var i = 0; i < words.length; i++) {
    html += rotateWord(words[i]);
  }

  $('#rotateWord').html(html);


$(document).ready(function() {
  $('#rotateWord span:nth-child(1)').addClass('active-word');
  $('#rotateWord span:nth-child(1)').removeClass('rotating-word');

});

setInterval(function() {

    var active = $('.active-word')
    var lastChild = $('.active-word').is('#animateWord:last-child');

    if (lastChild) {

        active.removeClass('active-word');
        active.addClass('rotating-word');
        $('#animateWord:first-child').addClass('active-word');
        $('#animateWord:first-child').removeClass('rotating-word');
        return true;

    } else {

        active.removeClass('active-word');
        active.addClass('rotating-word');
        active.next().removeClass('rotating-word');
        active.next().addClass('active-word');
        return true;
    }

  }, 3500);



//===============Scroll Top=============//



$(window).scroll(function() {
  if($(window).scrollTop() == 0){
    $('#scrollTop').fadeOut("fast");
    $('#scrollTop').addClass('hide');

  } else {

    $('#scrollTop').removeClass('hide');
    $('#scrollTop').fadeIn("fast");
  }
});



//============Easy Scroll=============//




$('a[href*=#]:not([href=#])').click(function() {

  if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
    if (target.length) {
      $('html,body').animate({
        scrollTop: target.offset().top - 112
      }, 1000);
      return false;
    }
  }
});



//==============CAROUSEL=============//



$('#next').on('click', function () {
  $('#carousel-example-generic').carousel('next');
});

$('#prev').on('click', function () {
  $('#carousel-example-generic').carousel('prev');
});



//=============MODALS==================//



var openModal = function(e) {
  $('#modal-sample-' + e.data.index).modal('show');
};

for (var i = 1; i <= 10; i++) {
  $('#modal-' + i).click({ index: i }, openModal);
}

