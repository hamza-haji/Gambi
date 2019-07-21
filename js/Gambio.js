  var swiper = new Swiper('.swiper-container', {
      direction:'vertical',
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    navigation: {
      nextEl: '.button-top',
      prevEl: '.button-bottom',
    },
  });
  //slider
  var slideIndex = 1;
  showDivs(slideIndex);

  function plusDivs(n) {
  showDivs(slideIndex += n);
  }

  function currentDiv(n) {
  showDivs(slideIndex = n);
  }

  function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
  }
  //slider2
  var slideIndex2 = 1;
  showDivs2(slideIndex2);

  function plusDivs2(n) {
  showDivs2(slideIndex2 += n);
  }

  function currentDiv2(n) {
  showDivs2(slideIndex2 = n);
  }

  function showDivs2(n) {
  var i;
  var x2 = document.getElementsByClassName("mySlides2");
  if (n > x2.length) {slideIndex2 = 1}    
  if (n < 1) {slideIndex2 = x2.length}
  for (i = 0; i < x2.length; i++) {
      x2[i].style.display = "none";  
  }
  x2[slideIndex2-1].style.display = "block";  
  }
  //slider3
  var slideIndex3 = 1;
  showDivs3(slideIndex3);

  function plusDivs3(n) {
  showDivs3(slideIndex3 += n);
  }

  function currentDiv3(n) {
  showDivs3(slideIndex3 = n);
  }

  function showDivs3(n) {
  var i;
  var x3 = document.getElementsByClassName("mySlides3");
  if (n > x3.length) {slideIndex3 = 1}    
  if (n < 1) {slideIndex3 = x3.length}
  for (i = 0; i < x3.length; i++) {
      x3[i].style.display = "none";  
  }
  x3[slideIndex3-1].style.display = "block";  
  }

  //fixed top nav
$(window).on('scroll', function() {
  if ($(window).scrollTop()) {
      $('.navbar').addClass('fixed-top');
      $('.navbar-toggler').addClass('fixedetogger');
  } else {
      $('.navbar').removeClass('fixed-top');
      $('.navbar-toggler').removeClass('fixedetogger');
  }
});