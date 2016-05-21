$(document).ready(function(){
  $('<link rel="stylesheet" href="css/libs_old.min.css"><link rel="stylesheet" href="css/style.css"><link href="https://fonts.googleapis.com/css?family=Noto+Serif:400,400italic,700,700italic&amp;subset=latin,cyrillic" rel="stylesheet" type="text/css">').appendTo('head');
  setTimeout(function(){if(!$('body').hasClass('loaded')) {$('body').addClass('loaded');initfullpage()};},3000);

var isMobile = false; 
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
isMobile = true;
}


  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
  if(!$('body').hasClass('loaded')) {$('body').addClass('loaded')};
    $('<style>.fixed-menu-logo .stat.fix-stat{position: fixed;left: 15%;top: 20px;margin-left: -151px;}.point_gr, header{position: absolute!important;}section,.section{height:800px!important;display:block}.animation,.animation2,.animation3{opacity:1}.site-nav.down,.site-nav.up{display:none!important}section.se3_f_n{height:600px!important}.sec6 .middle-wrap{max-height:80%}.sec8 .middle-wrap{max-height: initial;height: initial;}.sec8{height:1500px!important;background-size:cover!important}.sec6{height:1000px!important}</style>').appendTo('head');
  $('body').addClass('loaded');
    
  }

if (isMobile == true) {
  $('.animation').addClass('animated');
    $('<style>section,.section{height:800px!important;display:block}.animation,.animation2,.animation3*{opacity:1;transition:0s all 0s!important;animation-duration:0s!important;animation-delay:0s!important}section.se3_f_n{height:600px!important}.sec6 .middle-wrap{max-height:80%}.sec8 .middle-wrap{max-height: initial;height: initial;}.sec8{height:1500px!important;background-size:cover!important}.sec6{height:1000px!important}</style>').appendTo('head');
}

    //анимация
  if (isMobile != true) {
    setTimeout(function(){$('.animation').viewportChecker({classToAdd: 'animated'})},1000); 
  }

$('.site-nav.down').click(function(e) {
    e.preventDefault();
    $.fn.fullpage.moveSectionDown();
  }).on('mouseover', function() {
        $(".site-nav.down").addClass('active');
    }).on('mouseout', function() {
        $(".site-nav.down").removeClass('active');
    });

$('.site-nav.up').click(function(e) {
    e.preventDefault();
    $.fn.fullpage.moveSectionUp();
  }).on('mouseover', function() {
        $(".site-nav.up").addClass('active');
    }).on('mouseout', function() {
        $(".site-nav.up").removeClass('active');
    });



      
  $('#zz-btn').click(function(e) {
    e.preventDefault();
    $('#zz_pop').arcticmodal();
  });
$('.confbtn').click(function(e) {
    e.preventDefault();
    $('#conf_pop').arcticmodal();
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

$('#zz-btn').click(function(e) {
    e.preventDefault();
    $('#zz_pop').arcticmodal();
  });
  $('.back').click(function(e) {
    e.preventDefault();
    $('#a_ok2,#a_ok3,#k_ok2,#k_ok3,#d_ok2,#d_ok3').removeClass('s-visible fadeInRight animated');
    $('#k_ok,#a_ok,#d_ok').removeClass('k-visible fadeInRight animated');
  });


  $('.pf1').click(function(){
      $("#step1_0").val($(this).data('value'));
    });
  $('.pf1').click(function(){
      $("#step2_0").val($(this).data('value'));
    });

  $('.pf1').click(function(){
      $("#step3_0").val($(this).data('value'));
    });


$('.d_v1').click(function(){
      $("#step1_1").val('Сколько Вы должны? : '+$(this).data('value'));
    });

$('.d_v2').click(function() {
       $('#step1_2').val('Вы уже подали заявление в суд? : '+$(this).data('value'));
    });

$('.d_v3').click(function(){
      $("#step2_1").val('Сколько Вам должны? : '+$(this).data('value'));
    });

$('.d_v4').click(function() {
       $('#step2_2').val('Вы уже подали заявление в суд? : '+$(this).data('value'));
    });

$('.d_v5').click(function(){
      $("#step3_1").val('Вас уже назначили назначили? : '+$(this).data('value'));
    });

$('.d_v6').click(function() {
       $('#step3_2').val('По какой причине Вам необходима экспертная помощь коллег? : '+$(this).data('value'));
    });


$('.mst').click(function() {
       $('#step4_1').val($(this).data('value'));
    });
$('.mst').click(function() {
       $('#step4_2').val($(this).data('value'));
    });
$('.mst').click(function() {
       $('#step4_3').val($(this).data('value'));
    });



  $('.kto_t').click(function(e){
    e.preventDefault();
    if (!$(this).hasClass('active')) {
      $("html, body").animate({ scrollTop: $('#sec3').offset().top}, 1000);
      $('.dinam[data-block="'+$('.kto_t.active').data('block')+'"]').fadeOut();
      $('.dinam[data-block="'+$(this).data('block')+'"]').fadeIn();
      $('.kto_t.active').removeClass('active');
      $(this).addClass('active');
      //console.log('ftp-push');
      $.fn.fullpage.moveTo(parseInt($(this).attr('data-href')));
    }
  });

  $('.mause').click(function(e){e.preventDefault();

$.fn.fullpage.moveTo(2);});

//menu
var menu_active = 0;
$('.menu_btn').click(function(){
  if (!$('.menu').hasClass('active')) {
    $(this).addClass('as-close');
    $('.menu').addClass('active');
    menu_active = 1;
  } else{
    $(this).removeClass('as-close');
    $('.menu').removeClass('active');
    menu_active = 0;
  }
});
$('section').click(function(){
  if (menu_active == 1) {
    $('.menu').removeClass('active');
    $('.menu_btn').removeClass('as-close');
    menu_active = 0;
  }
});
$('.menu .menu-a').click(function(e){
  e.preventDefault();
  $("html, body").animate({ scrollTop: $($(this).attr('href')).offset().top}, 1000);
  $('.menu').removeClass('active');
    $('.menu_btn').removeClass('as-close');
    menu_active = 0;
});

  $('.menu-scroll-a').click(function(e){e.preventDefault();
    if ($(this).hasClass('click')) {
      $('.back').trigger('click');
      $($(this).data('trig')).trigger('click');
      if (!$('header .kto_t[data-block="'+$(this).data('part')+'"]').hasClass('active')) {
      //$("html, body").animate({ scrollTop: $('#sec3').offset().top}, 1000);
      $('.dinam[data-block="'+$('.kto_t.active').data('block')+'"]').fadeOut();
      $('.dinam[data-block="'+$('header .kto_t[data-block="'+$(this).data('part')+'"]').data('block')+'"]').fadeIn();
      $('.kto_t.active').removeClass('active');
      $('header .kto_t[data-block="'+$(this).data('part')+'"]').addClass('active');
      //console.log('ftp-push');
    }
      //$('header .kto_t[data-block="'+$(this).data('part')+'"]').trigger('click');
    }
    $.fn.fullpage.moveTo(parseInt($(this).attr('data-href')));
    
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
                ga('send','event','submit','submit');yaCounter36555965.reachGoal('submit');
            }
        }); 
        }
    });


});
$(window).load(function(){
  console.log('window.load');
 if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
  var nheight = $('#sec10 .middle-wrap').height() + 200 +'px!important';
  console.log(nheight);
  $('#sec10').attr('style','height:'+nheight);

}

  if (!$('body').hasClass('loaded')) {$('body').addClass('loaded');initfullpage()};


  slider1 = $('#sld1').bxSlider({infiniteLoop: true,pager:false,controls:false, auto:false, speed: 500,
      onSlideNext:function($slideElement, oldIndex, newIndex){
          $('#sld1 li').addClass('fadeouted');
          $('#sld1 li').removeClass('active');
          $('#sld1 li[data-sld="'+newIndex+'"]').removeClass('fadeouted');
          $('#sld1 li[data-sld="'+newIndex+'"]').addClass('active');
        //$('#sld1 li').addClass('fadeouted');
        //$slideElement.addClass('active').removeClass('fadeouted');
        $('.slid_im1,.man').removeClass('active');
        $('.slid_im1[data-sld="'+newIndex+'"],.man[data-sld="'+newIndex+'"]').addClass('active');
      },
      onSlidePrev:function($slideElement, oldIndex, newIndex){

          $('#sld1 li').addClass('fadeouted');
          $('#sld1 li').removeClass('active');
          $('#sld1 li[data-sld="'+newIndex+'"]').removeClass('fadeouted');
          $('#sld1 li[data-sld="'+newIndex+'"]').addClass('active');
        //$('#sld1 li').addClass('fadeouted');
        //$slideElement.addClass('active').removeClass('fadeouted');
        $('.slid_im1,.man').removeClass('active');
        $('.slid_im1[data-sld="'+newIndex+'"],.man[data-sld="'+newIndex+'"]').addClass('active');
      },
      onSliderLoad:function(){
        $('#sld1 li.active.bx-clone').removeClass('active');
        $('#sld1 li').addClass('fadeouted');
        $('#sld1 li.active').removeClass('fadeouted');

      }
    });
    //slider1.goToSlide(0);

    $('.slid_im1').click(function(e){
      e.preventDefault();
      var cur_sld = parseInt($('.slid_im1.active').data('sld'))+1;
      var tar_sld = parseInt($(this).data('sld'))+1;

function loopPrev () {
      if (i <= cur_sld-tar_sld) {
        slider1.goToPrevSlide();console.log('go-prev');
      }               
      setTimeout(function () {        
      i++;                    
      if (i < cur_sld-tar_sld) {             
         console.log('prev'); loopPrev();            
      }                        
   }, 600)
}
function loopNext () {
      if (i <= tar_sld-cur_sld) {      
        slider1.goToNextSlide();console.log('go-next');
      }          
      setTimeout(function () {         
      i++;                    
      if (i < tar_sld-cur_sld) {           
         console.log('next');loopNext();             
      }                        
   }, 600)
}

      if (cur_sld > tar_sld) {
        var i = 0;
        loopPrev();
      }else if(cur_sld < tar_sld){
        var i = 0;
        loopNext();
      }
      //slider1.goToSlide(parseInt($(this).data('sld')));
    });

    $('.str_l').click(function(e){e.preventDefault();
      slider1.goToPrevSlide();});
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
    //slider2.goToSlide(0);

  $('.pod_left').click(function(e){e.preventDefault();slider2.goToPrevSlide();});
  $('.pod_right').click(function(e){e.preventDefault();slider2.goToNextSlide();});


});
function initfullpage(){

var isMobile = false; 
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
isMobile = true;
}
  if (isMobile != true) {
   $('#pages').fullpage({ 
    autoScrolling: false,
      afterLoad: function(anchorLink, index){
            //$(this).find('.animation').addClass('fadeInUp animated');
            //$(this).find('.animation2').addClass('fadeInDown animated');
            //$(this).find('.animation3').addClass('fadeIn animated');
            //if ($(this).hasClass('sec4')|| $(this).hasClass('sec6')) {$('.fixed-menu-logo').addClass('blacked')}else{$('.fixed-menu-logo').removeClass('blacked')}
            //if (!$(this).hasClass('sec1')&&!$('#fp-nav').hasClass('animated')) {$('#fp-nav').addClass('fadeIn animated')}
            //if (!$(this).hasClass('sec1')){$('.not-fixed-part').fadeOut()}else{$('.not-fixed-part').fadeIn();}
          },
      onLeave: function(index, nextIndex, direction){
            //$('.section:nth-child('+nextIndex+')').find('.animation').addClass('fadeInUp animated');
            //$('.section:nth-child('+nextIndex+')').find('.animation2').addClass('fadeInDown animated');
            //$('.section:nth-child('+nextIndex+')').find('.animation3').addClass('fadeIn animated');
            if (direction=='down'&&$(this).next().hasClass('sec4')|| direction=='down'&&$(this).next().hasClass('sec6')||direction=='up'&&$(this).prev().hasClass('sec4')|| direction=='up'&&$(this).prev().hasClass('sec6')) {$('.fixed-menu-logo').addClass('blacked')}else{$('.fixed-menu-logo').removeClass('blacked')}
          },
      afterRender: function(){
            $('#fp-nav').find('a').each(function(index, el) {
              $('<p>'+block_h[index]+'</p>').appendTo(el);
            });
            console.log('full-page rendered');
            k50Tracker.change();
          }
    });
   $('header').addClass('fadeInDown animated');
   setTimeout(function(){$('header').removeClass('fadeInDown animated');},1100);
  }
}
var block_h = ['Раздел','Раздел','Раздел','Раздел','Раздел','Раздел','Раздел','Раздел','Раздел','Раздел','Раздел'];

var isMobile = false; 
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
isMobile = true;
}
function hfixed(scrl_t){
  if(scrl_t>25){    
    $('.fixed-menu-logo').addClass('fix');
    $('.menu').addClass('fix-m');
    $('.fixed-menu-logo').css('margin-left',-scrl_l)
  }else{
    $('.fixed-menu-logo').removeClass('fix');
    $('.menu').removeClass('fix-m');
  }}

  var b_srolltop;

$(window).scroll(function() {
  scrl_t=$(window).scrollTop();
  scrl_l=$(window).scrollLeft();
  
  if(isMobile != true){
  if (scrl_t>0) {
    $('.not-fixed-part').fadeOut();
  }else{
    $('.not-fixed-part').fadeIn();
  }
  }

  b_srolltop = $('body').scrollTop();
          //console.log(b_srolltop);
          //console.log($('.sec3').offset().top);
            
          //if(isMobile != true){

            if(b_srolltop >= $('.sec3').offset().top && b_srolltop<= $('.se3_f_n').offset().top){$('.stat').not('.stat-abs').addClass('fix-stat');$('.stat-abs').removeClass('stat-show');}else{$('.stat').not('.stat-abs').removeClass('fix-stat')}
          //}


            if(b_srolltop < $('.sec2').offset().top) {$('.site-nav.up').hide();}else{$('.site-nav.up').show();} 
            
            if(b_srolltop >= $('#sec11').offset().top){$('.site-nav.down').hide();}else{$('.site-nav.down').show();}
            if(b_srolltop >= $('.sec3').offset().top && b_srolltop<= $('.se3_f_n').offset().top){$('.site-nav.down').addClass('black');}else{$('.site-nav.down').removeClass('black');}
            
            if(b_srolltop >= $('.sec6').offset().top && b_srolltop< $('.sec7').offset().top){$('.site-nav.up,.site-nav.down').addClass('black');}else{$('.site-nav.down,.site-nav.up').removeClass('black');} 
            //if(b_srolltop < $('.sec2').offset().top){$('.site-nav.down').addClass('animation4');}else{$('.site-nav.down').removeClass('animation4');}
            //if(b_srolltop < $('.sec2').offset().top){$('.site-nav.down').addClass('animated');}else{$('.site-nav.down').removeClass('animated');}

            //if (nextIndex == 2 && direction == "up") {$('.stat').not('.stat-abs').removeClass('fix-stat');}
            //if (nextIndex == 5 && direction == "down") {$('.stat').not('.stat-abs').removeClass('fix-stat');$('.stat-abs').addClass('stat-show');}

    console.log('test');
  //hfixed(scrl_t);
});
  
