$(document).ready(function(){
 preloader();
 hamburger();
 scrollto();
 animations();
 password();
 splittext();
});

function preloader() {
  //<![CDATA[
        $(window).on('load', function() { // makes sure the whole site is loaded 
            $('#status').fadeOut(); // will first fade out the loading animation 
            $(".loader").delay(10).queue(function(){
               $(this).addClass("animate").dequeue();
            });
             $(".header").delay(10).queue(function(){
               $(this).addClass("animate").dequeue();
            });
              $(".footer").delay(10).queue(function(){
               $(this).addClass("animate").dequeue();
            });
               $(".hero").delay(10).queue(function(){
               $(this).addClass("animate").dequeue();
            });
            setTimeout(function(){
               document.getElementById("HeroVideo").play();
            }, 2200);
            $("body").addClass("stop-scrolling").delay(6500).queue(function(){
               $(this).removeClass("stop-scrolling").dequeue();
            });
           $("#loader").delay(6500).queue(function(){
               $(this).addClass("u-display-none").dequeue();
            });
        })
    //]]>
}

function hamburger() {
 var $hamburger = $(".hamburger");
 $hamburger.on("click", function(e) {
   $hamburger.toggleClass("is-active");
   $(".menu").toggle("visible");
 });
 $('.menu li a').on('click', function(e){
       $hamburger.toggleClass("is-active");
       $(".menu").toggle("visible");
 });
}

function scrollto() {
 window.scrollTo(0,0);
}

function scrollsnap() {
  $(window).one('scroll', function () {
       //var top = $('#content').scrollTop();
       var top1 = $('#Trigger-One').offset().top;
      
       $("body").animate({
           scrollTop: top1
       }, 2000, 'swing');
   });


   $view = $(window).height();
   $feature = $('#hero');
   $feature.css('height', $view + 'px');
}

function scrollto() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
}

function password() {
  $('.rsvpform-password').submit(function(e) {
    if ( $('input[name="dance"]').val() === 'IDO2017' ) {
      $('#rsvpform-full').show();
      $('.rsvpform-password').hide();
      $('.rsvperror').hide();
  }
  else if ( $('input[name="dance"').val() != 'IDO2017' ) {
   $('.rsvperror').show();
    }
    event.preventDefault();  
  })
}

function animations() {
    var controller = new ScrollMagic.Controller({});
    //-------SetUps-------

      // Flower One
    var tween = new TimelineMax ()
      .add([
        TweenMax.fromTo(".bio-pics", 1, {top: 300}, {top: -350, ease: Linear.easeNone}),
        TweenMax.fromTo(".flower-one", 1, {top: 300}, {top: 0, ease: Linear.easeNone})
      ]);
    // F1 - build scene
    var scene = new ScrollMagic.Scene({triggerElement: "#Trigger-One", duration: $(window).width()})
      .setTween(tween)
      .addTo(controller);

      // Wedding
    var tween = new TimelineMax ()
      .add([
        TweenMax.fromTo(".cbvillage", 1, {top: 150}, {top: -35, ease: Linear.easeNone}),
        TweenMax.fromTo(".map", 1, {top: 300}, {top: -0, ease: Linear.easeNone})
      ]);
    // Wedding - build scene
    var scene = new ScrollMagic.Scene({triggerElement: "#Trigger-Three", duration: $(window).width()})
      .setTween(tween)
      .addTo(controller);

      // Flower Two
    var tween = new TimelineMax ()
      .add([
        TweenMax.fromTo(".flower-two", 1, {top: -45}, {top: -350, ease: Linear.easeNone}),
      ]);
    // F2 - build scene
    var scene = new ScrollMagic.Scene({triggerElement: "#Trigger-Four", duration: $(window).width()})
      .setTween(tween)
      .addTo(controller);

    ScrollMagic._util.addClass = function _patchedAddClass(elem, classname) {
    if (classname) {
    if (elem.classList) {
    classname.split(' ').forEach(function _addCls(c) {
    elem.classList.add(c);
    });
    } else elem.className += ' ' + classname;
    }
    };
    ScrollMagic._util.removeClass = function _patchedRemoveClass(elem, classname) {
    if (classname) {
    if (elem.classList) {
    classname.split(' ').forEach(function _removeCls(c) {
    elem.classList.remove(c);
    });
    } else elem.className = elem.className.replace(new RegExp('(^|\b)' + classname.split(' ').join('|') + '(\b|$)', 'gi'), ' ');
    }
    };

    var elements = ['.form'];

    // Init ScrollMagic Controller
    var ctrl = new ScrollMagic.Controller();

    // Create a ScrollMagic Scene
    new ScrollMagic.Scene({
      triggerElement: "#formreveal-trigger"
    })
    .setClassToggle('.form','r-animate s-animate v-animate h3-animate p-animate form-animate')
    .addTo(ctrl);
}

function splittext() {
  var ctrl2 = new ScrollMagic.Controller();
  $(".a-s").each(function (index, elem) {
      var tween = TweenMax.to(elem, 0.375, {opacity:1, easeOut:Sine.easeOut});
      new ScrollMagic.Scene({
          offset: 180,
          triggerElement: elem,
          triggerHook: "onEnter",
          reverse: false
      })
      .setTween(tween)
      .addTo(ctrl2)
  });
}
