// # Harvard Referencing (HR6)
$(document).ready(function() {

 $(".cross").hide();
 $(".menu").hide();
 $(".hamburger").click(function() {
  $(".menu").slideToggle("slow", function() {
   $(".hamburger").hide();
   $(".cross").show();
  });
 });

 $(".cross").click(function() {
  $(".menu").slideToggle("slow", function() {
   $(".cross").hide();
   $(".hamburger").show();
  });
 });

});

// # Harvard Referencing (HR)
(function($) {

 skel.breakpoints({
  xlarge: '(max-width: 1680px)',
  large: '(max-width: 1280px)',
  medium: '(max-width: 980px)',
  small: '(max-width: 736px)',
  xsmall: '(max-width: 480px)'
 });

 $(function() {

  var $window = $(window),
   $body = $('body');

  // Disable animations/transitions until the page has loaded.
  // Just to inform. I made sure to understand every jquery, i also changed most
  //of the jquery from the original code. If i cant transform it to js. I use it and make it my own
  $body.addClass('is-loading');

  $window.on('load', function() {
   window.setTimeout(function() {
    $body.removeClass('is-loading');
   }, 100);
  });

  // Fix: Placeholder polyfill.
  $('form').placeholder();

  // Banner.
  var $banner = $('#banner');

  if ($banner.length > 0) {

   // IE fix.
   if (skel.vars.IEVersion < 12) {

    $window.on('resize', function() {

     var wh = $window.height() * 0.60,
      bh = $banner.height();

     $banner.css('height', 'auto');

     window.setTimeout(function() {

      if (bh < wh)
       $banner.css('height', wh + 'px');

     }, 0);

    });

    $window.on('load', function() {
     $window.triggerHandler('resize');
    });

   }

   // Video check.
   var video = $banner.data('video');

   if (video)
    $window.on('load.banner', function() {

     // Disable banner load event (so it doesn't fire again).
     $window.off('load.banner');

     // Append video if supported.
     if (!skel.vars.mobile && !skel.breakpoint('large').active && skel.vars.IEVersion > 9)
      $banner.append('<video autoplay loop><source src="' + video + '.mp4" type="video/mp4" /><source src="' + video + '.webm" type="video/webm" /></video>');

    });

   // More button.
   $banner.find('.more')
    .addClass('scrolly');

  }

  // Scrolly.
  $('.scrolly').scrolly();

  // Poptrox.
  $window.on('load', function() {

   var $thumbs = $('.thumbnails');

   if ($thumbs.length > 0)
    $thumbs.poptrox({
     onPopupClose: function() {
      $body.removeClass('is-covered');
     },
     onPopupOpen: function() {
      $body.addClass('is-covered');
     },
     baseZIndex: 10001,
     useBodyOverflow: false,
     overlayColor: '#222226',
     overlayOpacity: 0.75,
     popupLoaderText: '',
     fadeSpeed: 500,
     usePopupDefaultStyling: false,
     windowMargin: (skel.breakpoint('small').active ? 5 : 50)
    });

  });

  // Initial scroll.
  $window.on('load', function() {
   $window.trigger('scroll');
  });

 });

 // Scroll to the top # Harvard Referencing (HR7).
 $(window).scroll(function() {
  if ($(this).scrollTop() > 100) {
   $('#scroll').fadeIn();
  } else {
   $('#scroll').fadeOut();
  }
 });
 $('#scroll').click(function() {
  $("html, body").animate({
   scrollTop: 0
  }, 600);
  return false;
 });



 var sound = true;

 function muter() {
  if (sound === true) {
   $("video").prop('muted', true);
   sound = false;
   $('.speaker');
  } else {
   $("video").prop('muted', false);
   sound = true;
   $('.speaker');
  }
 }

 $('.speaker').click(function() {
  muter();
  $(this).toggleClass('mute');
 });

 var arrLang = {
 	'en': {
 	'chottolan1' : 'Where Anime & Gaming brings out the best in ones Imagination',
 	'chottolan2' : 'Please Subscribe and Enjoy',
 	'chottolan3' : 'Welcome To ChottoItsAnime',
 	'chottolan4' : 'Best Anime Image',
 	'home' : 'Home',
 	'anime' : 'Anime',
 	'youtube' : 'Youtube',
 	'about' : 'About'
 	},

 	'jp' : {
 	'home' : 'ホーム',
 	'anime' : 'アニメ',
 	'youtube' : 'Youtube',
 	'about' : '約',
 	'chottolan1' : 'アニメ＆ゲームが想像力を最大限に引き出す場所',
 	'chottolan2' : '購読してお楽しみください。',
 	'chottolan3' : 'うぇｌこめ と ちょっといつぁにめ',
 	'chottolan4' : 'ベストアニメ画像',
  'chottolan5' : '墓侵攻者の襲撃は 年以来 ララ・クロフトのゲームで一番楽しかったことです。その物語は 危険と陰謀という正しい種類のもので その墓は荒々しく 私は巨大でロマンチックな環境に襲われました 私は子供のようにオリジナルを演奏していたので。 私はいくつかのパズルと全体的な戦闘を減らすことができたかもしれません 私はそれを心から楽しんでいました。',
  'chottolan6' : 'デューティの第二次世界大戦への復帰は、驚くほど速いペースで古典的な環境を取り戻すことです。 それは良いキャンペーン、他の良い変化の中でマルチプレイヤーで素晴らしい新しいモード、そしてナチスゾンビのよりクリーンで濃密なバージョンを提供します。 しかし、Call of Duty：WW2の各コア部分は、シリーズのランドマークではない矛盾や軽微な欠陥によって傷ついています。 それでも、それはデューティ・ゲームへの堅実なコールであり、私はすでにそれに注ぎ込んだ多くの時間を楽しんだ',
  'chottolan7' : 'ドラゴンボールZは、西洋で最も有名なアニメシリーズの一つです。 マンガやTVシリーズは、好きなキャラクター、魅惑的でカラフルな宇宙、そしてジャンルで最も記憶に残る戦いシーンのいくつかを主流に沸かせます。 そんなに多くのゲームがたくさんありますドラフトボールが有名になったのを再現することはほとんどできませんでした。',
  'chottolan8' : 'このビデオは私が私のYouTubeチャンネルで作った最初のビデオの一つです。 なぜ私はなぜ他の人がアニメを好きなのかを表現する。 見て、ありがとうございます。',
	'chottolan9' : 'チハヤフルは、スエツグゆうきが書いたイラストを描いたマンガシリーズで、Be Loveで連載され、講談社で出版されています。 それは、学校の女の子、綾瀬ちはやさん、新学友に勇気を出して、白金一族カルタを競争させる',
	'chottolan10' : '東京グールアニメの第2シーズンでは、漫画のファンを激しく維持しているだけでなく、肉体を残している。 Root Aというタイトルの東京グールの第2シーズンは、原作の素材から逸脱し、マンガのようなシーズン1はほとんどやった'

 },

 	'sp': {
 	'chottolan1' : 'Donde Anime & Gaming saca lo mejor de la imaginación',
 	'chottolan2' : 'Por favor suscríbete y disfruta',
 	'chottolan3' : 'Bien pelusa y un poco cuando se trata de',
 	'chottolan4' : 'Mejor imagen de Anime',
 	'home' :'Casa',
 	'anime':'Animado',
 	'youtube':'Youtube',
 	'about':'Acerca de'
  },

 'fr': {
 'chottolan1' : 'Où Anime & Gaming fait ressortir le meilleur de limagination',
 'chottolan2' : 'S il vous plaît vous abonner et profiter',
 'chottolan3' : 'Eh bien beaucoup et un peu quand tante',
 'chottolan4' : 'Meilleure image d anime',
 'home' :'Accueil',
 'anime':'Animé',
 'youtube':'Youtube',
 'about':'Sur'

 }

 };

 $(function(){
 $('.translate').click(function(){
 var lang = $(this).attr('id');

 $('.lang').each(function(index, element){
   $(this).text(arrLang[lang][$(this).attr('key')]);
 });
 });
 });


})(jQuery);
