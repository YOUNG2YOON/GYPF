$(function () {
  $('a[href="#"]').on('click', function (e) {
    e.preventDefault();
  });
});

$('.mobile-menu-btn').on('click', function () {
  $('.global-menu').toggleClass('toggle-menu')
});



$('.pc-hover').mouseenter(function () {
  $('.pc-menu-wrapper').toggleClass('hover-menu')
});


$('.pc-menu-wrapper').mouseleave(function () {
  $('.pc-menu-wrapper').toggleClass('hover-menu')
});




// 모바일 헤더 메뉴 아이콘 애니메이션


var theToggle = document.getElementById('toggle');

// based on Todd Motto functions
// https://toddmotto.com/labs/reusable-js/

// hasClass
function hasClass(elem, className) {
  return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
}
// addClass
function addClass(elem, className) {
  if (!hasClass(elem, className)) {
    elem.className += ' ' + className;
  }
}
// removeClass
function removeClass(elem, className) {
  var newClass = ' ' + elem.className.replace(/[\t\r\n]/g, ' ') + ' ';
  if (hasClass(elem, className)) {
    while (newClass.indexOf(' ' + className + ' ') >= 0) {
      newClass = newClass.replace(' ' + className + ' ', ' ');
    }
    elem.className = newClass.replace(/^\s+|\s+$/g, '');
  }
}
// toggleClass
function toggleClass(elem, className) {
  var newClass = ' ' + elem.className.replace(/[\t\r\n]/g, " ") + ' ';
  if (hasClass(elem, className)) {
    while (newClass.indexOf(" " + className + " ") >= 0) {
      newClass = newClass.replace(" " + className + " ", " ");
    }
    elem.className = newClass.replace(/^\s+|\s+$/g, '');
  } else {
    elem.className += ' ' + className;
  }
}

theToggle.onclick = function () {
  toggleClass(this, 'on');
  return false;
}


      $('header .logo').on('click', function () {
        scrollTo({
          top: 0,
          behavior: 'smooth'
        })
      });


      $(window).on('scroll', function () {
        const mainTop = $('main').offset().top;
        const headerHt = $('header').outerHeight();

        if (scrollY > mainTop) {
          $('header').addClass('active');

        } else {
          $('header').removeClass('active');
        }
      });


