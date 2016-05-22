$(document).ready(function(){
  //$('<link rel="stylesheet" href="css/style.css"><link href="https://fonts.googleapis.com/css?family=Noto+Serif:400,400italic,700,700italic&subset=latin,cyrillic" rel="stylesheet" type="text/css">').appendTo('head');
  $('<link rel="stylesheet" href="css/full.min.css"><link href="https://fonts.googleapis.com/css?family=Noto+Serif:400,400italic,700,700italic&subset=latin,cyrillic" rel="stylesheet" type="text/css">').appendTo('head');
     
  $('.btn_vop').click(function(e) {
    e.preventDefault();
    $('.vop_okno').toggleClass('open');
    $('.btn_vop').toggleClass('top');
  });

  $('#proc-1').click(function(e) {
    e.preventDefault();
    $('#proc-1').addClass('active');
    $('#proc-2, #proc-3').removeClass('active');
    $('.proc1').attr('style','opacity:1');
    $('.proc2, .proc3').attr('style','opacity:0');
  });
  $('#proc-2').click(function(e) {
    e.preventDefault();
    $('#proc-2').addClass('active');
    $('#proc-1, #proc-3').removeClass('active');
    $('.proc2').attr('style','opacity:1');
    $('.proc1, .proc3').attr('style','opacity:0');
  });
  $('#proc-3').click(function(e) {
    e.preventDefault();
    $('#proc-3').addClass('active');
    $('#proc-1, #proc-2').removeClass('active');
    $('.proc3').attr('style','opacity:1');
    $('.proc1, .proc2').attr('style','opacity:0');
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
    $('.bank_gr,.kalk_gr2,.kalk_gr3').removeClass('active');
    $('.kalk_gr1').addClass('active');
    $('#v_1_1').addClass('active');
  });
 $('#go_c2_s1').click(function(e) {
    e.preventDefault();
    $('.bank_gr,.kalk_gr1,.kalk_gr3').removeClass('active');
    $('.kalk_gr2').addClass('active');
    $('#v_2_1').addClass('active');
  });
 $('#go_c3_s1').click(function(e) {
    e.preventDefault();
    $('.bank_gr,.kalk_gr1,.kalk_gr2').removeClass('active');
    $('.kalk_gr3').addClass('active');
    $('#v_3_1').addClass('active');
  });

 $('.v_1_1').click(function(e) {
    e.preventDefault();
    $('#v_1_1').removeClass('active');
    $('#v_1_2').addClass('active');
  });
  $('.v_1_2').click(function(e) {
    e.preventDefault();
    $('#v_1_2').removeClass('active');
    $('#v_1_3').addClass('active');
  });

  $('.v_2_1').click(function(e) {
    e.preventDefault();
    $('#v_2_1').removeClass('active');
    $('#v_2_2').addClass('active');
  });
  $('.v_2_2').click(function(e) {
    e.preventDefault();
    $('#v_2_2').removeClass('active');
    $('#v_2_3').addClass('active');
  });

  $('.v_3_1').click(function(e) {
    e.preventDefault();
    $('#v_3_1').removeClass('active');
    $('#v_3_2').addClass('active');
  });
  $('.v_3_2').click(function(e) {
    e.preventDefault();
    $('#v_3_2').removeClass('active');
    $('#v_3_3').addClass('active');
  });

  $('.back').click(function(e) {
    e.preventDefault();
    $('.kalk_gr1,.kalk_gr2,.kalk_gr3,#v_1_1,#v_1_2,#v_1_3,#v_2_1,#v_2_2,#v_2_3,#v_3_1,#v_3_2,#v_3_3').removeClass('active');
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


$('.v_1_1').click(function(){
      $("#step1_1").val('Сколько Вы должны? : '+$(this).data('value'));
    });

$('.v_1_2').click(function() {
       $('#step1_2').val('Вы уже подали заявление в суд? : '+$(this).data('value'));
    });

$('.v_2_1').click(function(){
      $("#step2_1").val('Сколько Вам должны? : '+$(this).data('value'));
    });

$('.v_2_2').click(function() {
       $('#step2_2').val('Вы уже подали заявление в суд? : '+$(this).data('value'));
    });

$('.v_3_1').click(function(){
      $("#step3_1").val('Вас уже назначили назначили? : '+$(this).data('value'));
    });

$('.v_3_2').click(function() {
       $('#step3_2').val('По какой причине Вам необходима экспертная помощь коллег? : '+$(this).data('value'));
    });


$('.mst').click(function() {
       $('#step4_1').val($(this).data('value'));
    });


//menu
var menu_active = 0;
$('.menu_btn,.btn_foot').click(function(){
  if (!$('.menu').hasClass('active')) {
    $('.menu').addClass('active');
    $('.menu_btn').addClass('men_btn_h');
    menu_active = 1;
  } else{
    $('.menu').removeClass('active');
    $('.menu_btn').removeClass('men_btn_h');
    menu_active = 0;
  }
});
$('.menu .menu-a').click(function(e){
  e.preventDefault();
  $("html, body").animate({ scrollTop: $($(this).attr('href')).offset().top}, 1000);
  $('.menu').removeClass('active');
  $('.menu_btn').removeClass('men_btn_h');
    menu_active = 0;
});

 $('.menu-scroll-a').click(function(e){e.preventDefault();
    if ($(this).hasClass('click')) {
      $('.back').trigger('click');
      $($(this).data('trig')).trigger('click');
    }

  });
 $('.close').click(function(e) {
    e.preventDefault();
    $('.menu').removeClass('active');
    $('.menu_btn').removeClass('men_btn_h');
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
