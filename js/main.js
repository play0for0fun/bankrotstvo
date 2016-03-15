$(function(){
$(document).ready(function(){
  setTimeout(function(){if(!$('body').hasClass('loaded')) {$('body').addClass('loaded');initfullpage()};},3000);

  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
  if(!$('body').hasClass('loaded')) {$('body').addClass('loaded')};
    $('<style>section,.section{height:800px;display:block}.animation,.animation2,.animation3{opacity:1}</style>').appendTo('head');
  }

  $('#zz-btn').click(function(e) {
    e.preventDefault();
    $('#zz_pop').arcticmodal();
  });

  $('.logo_t').click(function(e) {
    e.preventDefault();
  });

  $('#go_c1_s1').click(function(e) {
    e.preventDefault();
    $('#d_ok').addClass('k-visible fadeInRight animated');
  });

  $('.go_c1_s2').click(function(e) {
    e.preventDefault();
    $('#d_ok2').addClass('s-visible fadeInRight animated');
  });

  $('.go_c1_s3').click(function(e) {
    e.preventDefault();
    $('#d_ok3').addClass('s-visible fadeInRight animated');
  });

  $('#go_c2_s1').click(function(e) {
    e.preventDefault();
    $('#k_ok').addClass('k-visible fadeInRight animated');
  });

  $('.go_c2_s2').click(function(e) {
    e.preventDefault();
    $('#k_ok2').addClass('s-visible fadeInRight animated');
  });

  $('.go_c2_s3').click(function(e) {
    e.preventDefault();
    $('#k_ok3').addClass('s-visible fadeInRight animated');
  });

  $('#go_c3_s1').click(function(e) {
    e.preventDefault();
    $('#a_ok').addClass('k-visible fadeInRight animated');
  });

  $('.go_c3_s2').click(function(e) {
    e.preventDefault();
    $('#a_ok2').addClass('s-visible fadeInRight animated');
  });

  $('.go_c3_s3').click(function(e) {
    e.preventDefault();
    $('#a_ok3').addClass('s-visible fadeInRight animated');
  });

  $('.back').click(function(e) {
    e.preventDefault();
    $('#a_ok2,#a_ok3,#k_ok2,#k_ok3,#d_ok2,#d_ok3').removeClass('s-visible fadeInRight animated');
    $('#k_ok,#a_ok,#d_ok').removeClass('k-visible fadeInRight animated');
  });

  $('.kto_t').click(function(e){
    e.preventDefault();
    if (!$(this).hasClass('active')) {
      $('.dinam[data-block="'+$('.kto_t.active').data('block')+'"]').fadeOut();
      $('.dinam[data-block="'+$(this).data('block')+'"]').fadeIn();
      $('.kto_t.active').removeClass('active');
      $(this).addClass('active');
    }
  });

  $('.mause').click(function(e){e.preventDefault();$("html, body").animate({ scrollTop: $($(this).attr('href')).offset().top}, 1000);});
  $('.menu_btn').click(function(e){e.preventDefault();
  $('.menu').arcticmodal({
     overlay: {
        css: {
            
          backgroundColor: '#000',
          opacity: .9
        }},
        afterOpen: function(){$('.menu').addClass('m-animate');},
        afterClose:function(){$('.menu').removeClass('m-animate');}
      });
  });

  $('.menu .close').click(function(e){e.preventDefault();
    $('.menu').arcticmodal('close');
  });

  $('.line_menu a').click(function(e){e.preventDefault();
    $('.menu').arcticmodal('close');
    $("html, body").animate({ scrollTop: $($(this).attr('href')).offset().top}, 1000);
  });

  function getURLParameter(name) {return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search)||[,""])[1].replace(/\+/g, '%20'))||null;} 
    function run_geo(geo_url){
        $.ajax({type: 'GET',url: geo_url,dataType: 'xml',
            success: function(xml) {$(xml).find('ip').each(function(){
            var city = $(this).find('city').text();
            var region = $(this).find('region').text();
            if(city!=region){var ipg = city+', '+region;}else{var ipg = city;}
            $('<input type="hidden" />').attr({name: 'location', class: 'location', value:ipg}).appendTo("form");
        });}});
    }
    $.get("http://ipinfo.io", function(response) {geo_url='http://ipgeobase.ru:7020/geo?ip='+response.ip; run_geo(geo_url);}, "jsonp");
    utm=[];$.each(["utm_source","utm_medium","utm_campaign","utm_term",'source_type','source','position_type','position','added','creative','matchtype'],function(i,v){utm[v]=getURLParameter(v) || $('<input type="hidden" />').attr({name: v, class: v, value: function(){if(getURLParameter(v) == undefined)return '-'; else return getURLParameter(v)}}).appendTo("form")}); 
    $('<input type="hidden" />').attr({name: 'url', value: document.location.href}).appendTo("form");
    $('<input type="hidden" />').attr({name: 'title', value: document.title}).appendTo("form");

  $('input[name="phone"]').mask('+7 (999) 999-99-99');
    $('input[name="phone"]').blur(function() {if($(this).val().length != 18) {$(this).addClass('error-input');}});
  $('input[name="phone"]').focus(function() {$(this).removeClass('error-input');});

    $('form').submit(function(e){
        e.preventDefault();
        $(this).find('input[type="text"]').trigger('blur');
        if(!$(this).find('input[type="text"]').hasClass('error-input')){
            var type=$(this).attr('method');
            var url=$(this).attr('action');
            var data=$(this).serialize();
            $.ajax({type: type, url: url, data: data,
            success : function(){
                $.arcticmodal('close');$('#okgo').arcticmodal();
            }
        }); 
        }
    });


});
$(window).load(function(){
  if (!$('body').hasClass('loaded')) {$('body').addClass('loaded');initfullpage()};


  slider1 = $('#sld1').bxSlider({infiniteLoop: true,pager:false,controls:false, auto:false, speed: 500,
      onSlideNext:function($slideElement, oldIndex, newIndex){
          $('#sld1 li').addClass('fadeouted');
          $('#sld1 li').removeClass('active');
          $('#sld1 li[data-sld="'+newIndex+'"]').removeClass('fadeouted');
          $('#sld1 li[data-sld="'+newIndex+'"]').addClass('active');
        //$('#sld1 li').addClass('fadeouted');
        //$slideElement.addClass('active').removeClass('fadeouted');
        //$('.slid_im1,.man').removeClass('active');
        //$('.slid_im1[data-sld="'+newIndex+'"],.man[data-sld="'+newIndex+'"]').addClass('active');
      },
      onSlidePrev:function($slideElement, oldIndex, newIndex){

          $('#sld1 li').addClass('fadeouted');
          $('#sld1 li').removeClass('active');
          $('#sld1 li[data-sld="'+newIndex+'"]').removeClass('fadeouted');
          $('#sld1 li[data-sld="'+newIndex+'"]').addClass('active');
        //$('#sld1 li').addClass('fadeouted');
        //$slideElement.addClass('active').removeClass('fadeouted');
        //$('.slid_im1,.man').removeClass('active');
        //$('.slid_im1[data-sld="'+newIndex+'"],.man[data-sld="'+newIndex+'"]').addClass('active');
      },
      onSliderLoad:function(){
        $('#sld1 li.active.bx-clone').removeClass('active');
        $('#sld1 li').addClass('fadeouted');
        $('#sld1 li.active').removeClass('fadeouted');

      }
    });
    slider1.goToSlide(0);

    $('.str_l').click(function(e){e.preventDefault();slider1.goToPrevSlide();});
    $('.str_r').click(function(e){e.preventDefault();slider1.goToNextSlide();});
  
    slider2 = $('#sld2').bxSlider({pager:false,controls:false, auto:false, speed: 400,
    onSlideNext:function($slideElement, oldIndex, newIndex){
          $('.podh_t').addClass('fadeouted');
          $('.podh_t').removeClass('active');
          $('.podh_t[data-sld="'+newIndex+'"]').removeClass('fadeouted');
          $('.podh_t[data-sld="'+newIndex+'"]').addClass('active');
        //$('.podh_t.active').next().removeClass('fadeouted');
        //$('.podh_t').addClass('fadeouted');
        //$slideElement.addClass('active').removeClass('fadeouted');
        //$('.slid_im1,.man').removeClass('active');
        //$('.slid_im1[data-sld="'+newIndex+'"],.man[data-sld="'+newIndex+'"]').addClass('active');
        //$('.podh_t.active').next().removeClass('fadeouted');
      },
      onSlidePrev:function($slideElement, oldIndex, newIndex){
          $('.podh_t').addClass('fadeouted');
          $('.podh_t').removeClass('active');
          $('.podh_t[data-sld="'+newIndex+'"]').removeClass('fadeouted');
          $('.podh_t[data-sld="'+newIndex+'"]').addClass('active');
        //$('.podh_t').addClass('fadeouted');
        //$slideElement.addClass('active').removeClass('fadeouted');
        //$('.active').prev().removeClass('fadeouted');
        //$('.slid_im1,.man').removeClass('active');
        //$('.slid_im1[data-sld="'+newIndex+'"],.man[data-sld="'+newIndex+'"]').addClass('active');
        
      },
      onSliderLoad:function(){
        $('.podh_t.active.bx-clone').removeClass('active');
        $('.podh_t').addClass('fadeouted');
        $('.podh_t.active').removeClass('fadeouted');
      }});

  $('.pod_left').click(function(e){e.preventDefault();slider2.goToPrevSlide();});
  $('.pod_right').click(function(e){e.preventDefault();slider2.goToNextSlide();});


});
$(window).scroll(function() {
  hfixed();
});
function initfullpage(){
   $('#pages').fullpage({
      scrollBar:true,
      scrollingSpeed: 1000,
      navigation: true,
      afterLoad: function(anchorLink, index){
            $(this).find('.animation').addClass('fadeInUp animated');
            $(this).find('.animation2').addClass('fadeInDown animated');
            $(this).find('.animation3').addClass('fadeIn animated');
            if ($(this).hasClass('sec4')|| $(this).hasClass('sec6')) {$('.fixed-menu-logo').addClass('blacked')}else{$('.fixed-menu-logo').removeClass('blacked')}
            if (!$(this).hasClass('sec1')&&!$('#fp-nav').hasClass('animated')) {$('#fp-nav').addClass('fadeIn animated')}
          },
      onLeave: function(index, nextIndex, direction){
            $('.section:nth-child('+nextIndex+')').find('.animation').addClass('fadeInUp animated');
            $('.section:nth-child('+nextIndex+')').find('.animation2').addClass('fadeInDown animated');
            $('.section:nth-child('+nextIndex+')').find('.animation3').addClass('fadeIn animated');
            //if (direction=='down'&&$(this).next().hasClass('sec4')|| direction=='down'&&$(this).next().hasClass('sec6')||direction=='up'&&$(this).prev().hasClass('sec4')|| direction=='up'&&$(this).prev().hasClass('sec6')) {$('.fixed-menu-logo').addClass('blacked')}else{$('.fixed-menu-logo').removeClass('blacked')}
          },
      afterRender: function(){
            $('#fp-nav').find('a').each(function(index, el) {
              $('<p>'+block_h[index]+'</p>').appendTo(el);
            });
          }
    });
   $('header').addClass('fadeInDown animated');
   setTimeout(function(){$('header').removeClass('fadeInDown animated');},1100);
  }
var block_h = ['Раздел','Раздел','Раздел','Раздел','Раздел','Раздел','Раздел','Раздел','Раздел','Раздел','Раздел'];

function hfixed(){if($(window).scrollTop()>25){
    $('.fixed-menu-logo').addClass('fix');
    $('.menu').addClass('fix-m');
  }else{
    $('.fixed-menu-logo').removeClass('fix');
    $('.menu').removeClass('fix-m');
  }}
});

  
