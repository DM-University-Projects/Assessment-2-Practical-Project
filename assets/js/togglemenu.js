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
 	'about' : 'About',
  'chottolan5' : 'Rise of the Tomb Raider is the most fun I’ve had with a Lara Croft game since 1996. Its story is full of the right kind of danger and intrigue, its tombs are dastardly, and I was as struck by its huge, romantic environments as I was as a kid playing the original Although I could have done with a few more puzzles and fewer firefights overall, I enjoyed every rollicking, big-hearted second of it',
  'chottolan6' : 'Call of Duty’s return to World War II is surprisingly a fast-paced take on the classic setting. It provides for a good campaign, a great new mode in multiplayer among other good changes, and a creepier, dense version of Nazi Zombies. However, each core part of Call of Duty: WW2 is marred by inconsistencies and minor flaws that hold it back from being a landmark in the series. Still, it’s a solid Call of Duty game and I’ve enjoyed the many hours I’ve already poured into it.',
  'chottolan7' : 'Dragon Ball Z is one of the most famous anime series in the West. The manga and TV series burst into the mainstream with likeable characters, a fascinating, colourful universe and some of the most memorable fight scenes in the genre. So many games on so many platforms have come and gone trying to capture the unique action and look of the series, but few have really managed to recreate what Dragon Ball has become famous for',
  'chottolan8' : 'This Video is one of the first videos i made on my youtube channel. Representing why i and why others like anime. Please do watch and enjoy, Thank You.',
  'chottolan9' : 'Chihayafuru is a manga series written and illustrated by Yuki Suetsugu, serialised in Be Love and published by Kodansha. It is about a school girl, Chihaya Ayase, who is inspired by a new classmate to take up Hyakunin Isshu karuta competitively',
  'chottolan10' : 'The controversial second season of the Tokyo Ghoul anime leaves nothing but bodies in its wake, even mainiding fans of the manga intensely. The second season of Tokyo Ghoul, titled Root A, veers off from the source material and doesnt follow the Manga like season 1 mostly did.'
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
 	'about':'Acerca de',
  'chottolan5' : 'Rise of the Tomb Raider es lo más divertido que he tenido con un juego de Lara Croft desde 1996. Su historia está llena del tipo correcto de peligro e intriga, sus tumbas son cobardes, y me sorprendieron sus enormes entornos románticos. como yo era un niño jugando el original. Aunque podría haberlo hecho con algunos enigmas más y menos tiroteos en general, disfruté cada segundo alegre y desgarbado de él',
  'chottolan6' : 'El regreso de Call of Duty a la Segunda Guerra Mundial es, sorprendentemente, una toma rápida del escenario clásico. Proporciona una buena campaña, un gran modo nuevo de multijugador entre otros buenos cambios, y una versión más espeluznante y densa de Zombies nazis. Sin embargo, cada parte central de Call of Duty: WW2 está marcada por incoherencias y fallas menores que la impiden ser un hito en la serie. Aún así, es un juego sólido de Call of Duty y he disfrutado las muchas horas que ya le he dedicado.',
  'chottolan7' : 'Dragon Ball Z es una de las series de anime más famosas de Occidente. El manga y la serie de televisión irrumpieron en la corriente principal con personajes agradables, un universo fascinante y colorido y algunas de las escenas de lucha más memorables del género. Tantos juegos en tantas plataformas han ido y venido tratando de capturar la acción y el aspecto únicos de la serie, pero pocos realmente han logrado recrear por lo que Dragon Ball se ha hecho famoso.',
  'chottolan8' : 'Este video es uno de los primeros videos que hice en mi canal de youtube. Representando por qué yo y por qué a otros les gusta el anime. Por favor mira y disfruta. Gracias.',
  'chottolan9' : 'Chihayafuru es una serie de manga escrita e ilustrada por Yuki Suetsugu, serializada en Be Love y publicada por Kodansha. Se trata de una niña de la escuela, Chihaya Ayase, que está inspirada en un nuevo compañero de clase para asumir Hyakunin Isshu karuta competitivamente',
  'chottolan10' : 'La controvertida segunda temporada del anime Tokyo Ghoul no deja nada más que cuerpos a su paso, incluso los fanáticos principales del manga intensamente. La segunda temporada de Tokyo Ghoul, titulada Root A, se desvía del material de origen y no sigue al manga como la temporada 1 en su mayoría.'

  },

 'fr': {
 'chottolan1' : 'Où Anime & Gaming fait ressortir le meilleur de limagination',
 'chottolan2' : 'S il vous plaît vous abonner et profiter',
 'chottolan3' : 'Eh bien beaucoup et un peu quand tante',
 'chottolan4' : 'Meilleure image d anime',
 'home' :'Accueil',
 'anime':'Animé',
 'youtube':'Youtube',
 'about':'Sur',
 'chottolan5' : 'Rise of the Tomb Raider est le plus amusant que j ai eu avec un jeu Lara Croft depuis 1996. Son histoire est pleine du bon type de danger et d intrigue, ses tombes sont lamentables, et j ai été aussi frappé par ses environnements énormes et romantiques comme j étais enfant jouant l original. Bien que j aurais pu faire avec quelques énigmes de plus et moins de combats dans l ensemble, j ai apprécié chaque deuxième partie.',
 'chottolan6' : 'Le retour de Call of Duty à la Seconde Guerre mondiale est étonnamment une prise rapide sur le réglage classique. Il fournit une bonne campagne, un nouveau mode de multijoueur parmi d autres bons changements, et une version plus épaisse, dense des zombies nazis. Cependant, chaque partie principale de Call of Duty: WW2 est gâchée par des incohérences et des défauts mineurs qui la retiennent d être un point de repère dans la série. Pourtant, c est un jeu Call of Duty solide et jai apprécié les nombreuses heures que j ai déjà versé dedans.',
 'chottolan7' : 'Dragon Ball Z est l une des séries animées les plus célèbres de l Ouest. Le manga et la série TV font irruption dans le grand public avec des personnages attachants, un univers fascinant et coloré et certaines des scènes de combat les plus mémorables du genre. Tant de jeux sur tant de plateformes sont venus et sont partis en essayant de capturer l action et le look uniques de la série, mais peu ont vraiment réussi à recréer ce que Dragon Ball est devenu célèbre.',
 'chottolan8' : 'Cette vidéo est l une des premières vidéos que j ai faites sur ma chaîne YouTube. Représentant pourquoi je et pourquoi les autres aiment les animes. S il vous plaît regarder et apprécier, merci.',
 'chottolan9' : 'Chihayafuru est une série de mangas écrite et illustrée par Yuki Suetsugu, sérialisée dans Be Love et publiée par Kodansha. Il s agit d une écolière, Chihaya Ayase, qui s inspire d un nouveau camarade de classe pour s emparer compétitivement de Hyakunin Isshu karuta',
 'chottolan10' : 'La deuxième saison controversée de l anime de Tokyo Ghoul ne laisse que des corps sur son passage, gardant même les fans de manga intenses. La deuxième saison de Tokyo Ghoul, intitulée Root A, s écarte du matériel source et ne suit pas le manga comme saison 1 dans sa majorité.'
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
