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
  'chottolan10' : 'The controversial second season of the Tokyo Ghoul anime leaves nothing but bodies in its wake, even mainiding fans of the manga intensely. The second season of Tokyo Ghoul, titled Root A, veers off from the source material and doesnt follow the Manga like season 1 mostly did.',
  'chottolan11' : '"That day, the human race remembered the terror of being dominated by them, and the shame of being held captive in a birdcage..." — Over 100 years ago, a natural predator of humanity appeared: the Titans, giant humanoid but mindless monsters whose sole purpose of existence seemed to be to devour humans. There was an insurmountable gap in power between them and mankind, and as a result, humanity was rapidly exterminated to the brink of extinction.',
  'chottolan12' : 'The story focuses on a young boy named Gon, who discovers that his father, whom he was told was dead, is actually alive and well. He learns that his father, Ging, is a legendary Hunter, an inmainidual who has proven themselves an elite member of humanity and who specializes in finding rare creatures, secret treasures, and other inmainiduals. Despite Ging having left his son with his relatives in order to pursue his own dreams, Gon becomes determined to follow his father footsteps.',
  'chottolan13' : 'Gol D. Roger was known as the Pirate King, the strongest and most infamous pirate to have sailed the Grand Line. The capture and death of Roger by the World Government brought a change throughout the world. His last words before his death revealed the location of the greatest treasure in the world, One Piece. It was this revelation that brought about the Grand Age of Pirates, men who dreamed of finding One Piece (which promises an unlimited amount of riches and fame), and quite possibly the most coveted of titles for the person who found it, the title of the Pirate King.',
  'chottolan14' : 'In the mystical land of Fiore, magic exists as an essential part of everyday life. Countless magic guilds lie at the core of all magical activity, and serve as venues for like-minded mages to band together and take on job requests. Among them, Fairy Tail stands out from the rest as a place of strength, spirit, and family. Lucy Heartfilia is a young mage searching for celestial gate keys, and her dream is to become a full-fledged wizard by joining this famous guild. In her search, she runs into Natsu Dragneel and his partner Happy, who are on a quest to find Natsus foster father, the dragon Igneel.',
  'chottolan15' : 'When a shapeshifting demon with a thirst for human flesh, known as "youma," arrives in Rakis village, a lone woman with silver eyes walks into town with only a sword upon her back. She is a "Claymore," a being manufactured as half-human and half-youma, for the express purpose of exterminating these monsters. After Rakis family is killed, the Claymore saves his life, but he is subsequently banished from his home. With nowhere else to go, Raki finds the Claymore, known as Clare, and decides to follow her on her journeys.',
  'chottolan16' : 'Ichigo Kurosaki is an ordinary high schooler—until his family is attacked by a Hollow, a corrupt spirit that seeks to devour human souls. It is then that he meets a Soul Reaper named Rukia Kuchiki, who gets injured while protecting Ichigos family from the assailant. To save his family, Ichigo accepts Rukias offer of taking her powers and becomes a Soul Reaper as a result. However, as Rukia is unable to regain her powers, Ichigo is given the daunting task of hunting down the Hollows that plague their town.',
  'chottolan17' : 'Twelve years before the start of the series, the Nine-Tails attacked Konohagakure destroying much of the village and taking many lives. The leader of the village, the Fourth Hokage sacrificed his life to seal the Nine-Tails into a newborn, Naruto Uzumaki. Orphaned by the attack, Naruto was shunned by the villagers, who out of fear and anger, viewed him as the Nine-Tails itself. Though the Third Hokage outlawed speaking about anything related to the Nine-Tails, the children — taking their cues from their parents — inherited the same animosity towards Naruto.',
  'chottolan18' : 'Cocky Spike Spiegel and the crew of his spaceship, Bebop, an intrepid band of bounty hunters, land on Mars in the year 2071 chasing an enormous cash reward. The four-person team, also including looming cyborg Jet Black, fearless Faye Valentine and tech expert Edward, are in search of ex-military officer Vincent. The former hero has become a biological terrorist with an arsenal of devastating nano-bots that he`ll let loose on Alba City on the night before Halloween if his demands arent met.',
  'chottolan19' : 'Otonashi awakens only to learn he is dead. A rifle-toting girl named Yuri explains that they are in the afterlife, and Otonashi realizes the only thing he can remember about himself is his name. Yuri tells him that she leads the Shinda Sekai Sensen (Afterlife Battlefront) and wages war against a girl named Tenshi. Unable to believe Yuri`s claims that Tenshi is evil, Otonashi attempts to speak with her, but the encounter doesn`t go as he intended. Otonashi decides to join the SSS and battle Tenshi, but he finds himself oddly drawn to her.',
  'chottolan20' : 'Vash the Stampede is the man with a $$60,000,000,000 bounty on his head. The reason: he`s a merciless villain who lays waste to all those that oppose him and flattens entire cities for fun, garnering him the title "The Humanoid Typhoon." He leaves a trail of death and destruction wherever he goes, and anyone can count themselves dead if they so much as make eye contact—or so the rumors say. In actuality, Vash is a huge softie who claims to have never taken a life and avoids violence at all costs.',
  'chottolan21' : 'Simon and Kamina were born and raised in a deep, underground village, hidden from the fabled surface. Kamina is a free-spirited loose cannon bent on making a name for himself, while Simon is a timid young boy with no real aspirations. One day while excavating the earth, Simon stumbles upon a mysterious object that turns out to be the ignition key to an ancient artifact of war, which the duo dubs Lagann.',
  'chottolan22' : 'Tokyo has become a cruel and merciless city—a place where vicious creatures called “ghouls” exist alongside humans. The citizens of this once great metropolis live in constant fear of these bloodthirsty savages and their thirst for human flesh. However, the greatest threat these ghouls pose is their dangerous ability to masquerade as humans and blend in with society. Based on the best-selling supernatural horror manga by Sui Ishida, Tokyo Ghoul follows Ken Kaneki, a shy, bookish college student, who is instantly drawn to Rize Kamishiro, an avid reader like himself.',
  'chottolan23' : 'In the year 2010, the Holy Empire of Britannia is establishing itself as a dominant military nation, starting with the conquest of Japan. Renamed to Area 11 after its swift defeat, Japan has seen significant resistance against these tyrants in an attempt to regain independence. Lelouch Lamperouge, exiled prince of Britannia, unfortunately finds himself caught in a crossfire between the two nations armed forces. He is able to escape, however, thanks to the timely appearance of a mysterious girl named C.C., who bestows upon him Geass, the "Power of Kings."',
  'chottolan24' : '"In order for something to be obtained, something of equal value must be lost." Alchemy is bound by this Law of Equivalent Exchange—something the young brothers Edward and Alphonse Elric only realize after attempting human transmutation: the one forbidden act of alchemy. They pay a terrible price for their transgression—Edward loses his left leg, Alphonse his physical body. It is only by the desperate sacrifice of Edwards right arm that he is able to affix Alphonses soul to a suit of armor. Devastated and alone, it is the hope that they would both eventually return to their original bodies that gives Edward the inspiration to obtain metal limbs called "automail" and become a state alchemist, the Fullmetal Alchemist.',
  'chottolan25' : 'Seven years after the events of Dragon Ball Z, Earth is at peace, and its people live free from any dangers lurking in the universe. However, this peace is short-lived; a sleeping evil awakens in the dark reaches of the galaxy: Beerus, the ruthless God of Destruction. Disturbed by a prophecy that he will be defeated by a "Super Saiyan God,"Beerus and his angelic attendant Whis start searching the universe for this mysterious being. Before long, they reach Earth where they encounter Gokuu Son, one of the planets mightiest warriors, and his similarly powerful friends.',
  'chottolan26' : 'Justice, and the enforcement of it, has changed. In the 22nd century, Japan enforces the Sibyl System, an objective means of determining the threat level of each citizen by examining their mental state for signs of criminal intent, known as their Psycho-Pass. Inspectors uphold the law by subjugating, often with lethal force, anyone harboring the slightest ill-will; alongside them are Enforcers, jaded Inspectors that have become latent criminals, granted relative freedom in exchange for carrying out the Inspectors dirty work.',
  'chottolan27' : 'In the year 2022, virtual reality has progressed by leaps and bounds, and a massive online role-playing game called Sword Art Online (SAO) is launched. With the aid of "NerveGear" technology, players can control their avatars within the game using nothing but their own thoughts. Kazuto Kirigaya, nicknamed "Kirito," is among the lucky few enthusiasts who get their hands on the first shipment of the game. He logs in to find himself, with ten-thousand others, in the scenic and elaborate world of Aincrad, one full of fantastic medieval weapons and gruesome monsters.',
  'chottolan28' : 'Within Thailand is Roanapur, a depraved, crime-ridden city where not even the authorities or churches are untouched by the claws of corruption. A haven for convicts and degenerates alike, the city is notorious for being the center of illegal activities and operations, often fueled by local crime syndicates. Enter Rokurou Okajima, an average Japanese businessman who has been living a dull and monotonous life, when he finally gets his chance for a change of pace with a delivery trip to Southeast Asia. His business trip swiftly goes downhill as Rokurou is captured by a mercenary group operating in Roanapur, called Black Lagoon.',
  'chottolan29' : 'A group of six sixth-grade-age childhood friends drift apart after one of them, Meiko "Menma" Honma, dies in an accident. Years after the incident, the leader of the group, Jinta Yadomi, has withdrawn from society, does not attend high school, and lives as a recluse. One summer day, the ghost of an older-looking Menma appears beside him and asks to have a wish granted, reasoning that she cannot pass on into the afterlife until it is fulfilled. At first, he only tries to help her minimally because he thinks he is hallucinating. But since Menma does not remember what her wish is, Jinta gathers his estranged friends together once again, believing that they are the key to resolving this problem.',
  'chottolan30' : 'Ryuuji Takasu is a gentle high school student with a love for housework; but in contrast to his kind nature, he has an intimidating face that often gets him labeled as a delinquent. On the other hand is Taiga Aisaka, a small, doll-like student, who is anything but a cute and fragile girl. Equipped with a wooden katana and feisty personality, Taiga is known throughout the school as the "Palmtop Tiger." One day, an embarrassing mistake causes the two students to cross paths.',
  'chottolan31' : 'Energy-conservative high school student Houtarou Oreki ends up with more than he bargained for when he signs up for the Classics Club at his sisters behest—especially when he realizes how deep-rooted the clubs history really is. Begrudgingly, Oreki is dragged into an investigation concerning the 45-year-old mystery that surrounds the club room. Accompanied by his fellow club members, the knowledgeable Satoshi Fukube, the stern but benign Mayaka Ibara, and the ever-curious Eru Chitanda, Oreki must combat deadlines and lack of information with resourcefulness and hidden talent, in order to not only find the truth buried beneath the dust of works created years before them, but of other small side cases as well.',
  'chottolan32' : 'When abandoned kittens and his good conscience force second year Sorata Kanda to move into Suimei High School’s infamous Sakura Hall, the satellite dorm and its eccentric, misfit residents turn his life upside down. The decidedly average Sorata finds it difficult to fit in with the bizarre collection of dorm residents like Misaki, an energetic animator; Jin, a playwright playboy; Ryuunosuke, a reclusive programmer; and Chihiro, the dorm manager, art teacher, and party girl. Soratas friend Nanami, a second year student and aspiring voice actress, pushes him to find new owners for the many cats so that he can quickly move back into the regular dorms. However, his desire to escape Sakura Hall wavers when the pet-like and infantile second year Mashiro Shiina, a world-class artistic savant looking to become a mangaka, transfers in during the spring trimester and quickly latches onto him.',
  'chottolan33' : 'Clannad: After Story, the sequel to the critically acclaimed slice-of-life series Clannad, begins after Tomoya Okazaki and Nagisa Furukawa graduate from high school. Together, they experience the emotional rollercoaster of growing up. Unable to decide on a course for his future, Tomoya learns the value of a strong work ethic and discovers the strength of Nagisas support. Through the couples dedication and unity of purpose, they push forward to confront their personal problems, deepen their old relationships, and create new bonds',
  'chottolan34' : 'Kuronuma Sawako is completely misunderstood by her classmates. Her timid and sweet demeanor is often mistaken for malicious behavior. This is due to her resemblance to the ghost girl from "The Ring," which has led her peers to give her the nickname Sadako. Longing to make friends and live a normal life, she is naturally drawn to Kazehaya Shouta, the most popular guy in class, whose "100% refreshing" personality earns him great admiration from Sawako. So when Kazehaya starts talking to her, maybe there is hope for the friendships Sawako has always longed for. Maybe... there is even a little hope for some romance in her future.'
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
	'chottolan10' : '東京グールアニメの第2シーズンでは、漫画のファンを激しく維持しているだけでなく、肉体を残している。 Root Aというタイトルの東京グールの第2シーズンは、原作の素材から逸脱し、マンガのようなシーズン1はほとんどやった',
  'chottolan11' : '"その日、人類は彼らの支配の恐怖と、鳥かごに捕らえられたという恥を思い出しました..." - 100年以上前、人類の自然な捕食者が登場しました。 存在の唯一の目的が人間を奪うように見えるモンスター。 彼らと人類の間には克服できないほどのギャップがあり、結果として人類は急速に絶滅の危機に駆り立てられました。',
  'chottolan12' : '物語は、彼が死んでいたと言われた父親が実際に生きていることを発見したゴンという若い少年に焦点を当てています。 彼は、彼の父ギンが伝説のハンターであることを知っています。彼は、人類のエリートメンバーであり、珍しい生き物、秘宝やその他の個人を見つけることを専門とする人物です。 Gingは自分の夢を追求するために息子を親戚に残していたにもかかわらず、Gonは父の足跡に従うことに決めました。',
  'chottolan13' : 'Gol D. Rogerは海賊王として知られていました。海賊はGrand Lineを航行した最も有名な海賊です。 世界政府によるロジャーの捕獲と死は、世界中で変化をもたらしました。 彼の死の前の彼の最後の言葉は、世界で最も大きい宝の場所、ワンピースを明らかにしました。 ワンピース（無限の富と名声を約束する）を見つけることを夢見ていた男性、そしてそれを見つけた人のためのタイトルの可能性が最も高くなったのは、海賊の壮大な時代をもたらしたこの啓示でした。 海賊王。',
  'chottolan14' : 'Fioreの神秘的な土地では、魔法は日常生活の不可欠な部分として存在します。 数え切れないほどの魔法のギルドは、魔法のすべての活動の中核をなすもので、同じ考え方の魔術師が一緒にバンドして仕事を依頼する会場となっています。 その中でも、フェアリーテールは残りの部分から強さ、精神、家族の立場から際立っています。 Lucy Heartfiliaは、天のゲートキーを探している若い魔道士であり、この有名なギルドに加わり、本格的な魔法使いになることが夢です。 彼女の検索で、彼女は奈津の養父、龍Igneelを見つけるために探求しているNatsu Dragneelと彼のパートナーHappyにぶつかる。',
  'chottolan15' : '「youma」と呼ばれる人間の肉の渇きを持つ形を変える悪魔がRakiの村に到着すると、シルバーの目を持つ孤独な女性が、唯一の剣で街に歩いて行きます。 彼女は、これらのモンスターを駆除するための明白な目的のために、半人と半分の人として製造されている「クレイモア」です。 ラッキーの家族が殺された後、クレイモアは彼の人生を救うが、その後彼は彼の家から追放される。 ラキはどこにも行くことはないが、クレアモアと呼ばれるクレイモアを見つけ、彼女の旅に従うことに決めた。',
  'chottolan16' : '黒崎一護は普通の高校生です。彼の家族が人間の魂を奪うために腐敗した霊である中空に襲われるまでです。 それから、彼はIchigoの家族を加害者から守りながら負傷したRukia Kuchikiという名前のSoul Reaperに会う。 彼の家族を救うために、Ichigoはルキアの力を引き受けるという申し出を受け入れ、結果としてソウル・リーパーになる。 しかし、ルキアは自分の力を取り戻せないので、イチゴには町を襲っているホローズを狩るという難しい任務が与えられます。',
  'chottolan17' : 'シリーズ開始の12年前、ナイン・テールズはコノハガクレを襲い、多くの命を奪った。 村の指導者である第4火影は、ナインテイルズを新生児のうずまきに封印するために人生を犠牲にしました。 攻撃によって孤児になったナルトは、恐怖と怒りの声でナリテス自身として彼を見た村人たちから逃れました。 第3の火影はナイン・テールズに関係することを禁止していましたが、子供たちは両親からの手がかりを受けて、ナルトと同じ敵意を引き継いでいました。',
  'chottolan18' : 'Cocky Spike Spiegelと彼の宇宙船の乗組員Bebopは、2071年に火星に巨額の現金報酬を追いかけて火星に上陸します。 サイボーグ・ジェット・ブラック、恐れのないフェイ・バレンタイン、技術エドワードエドワードを含む4人チームは、元軍人のヴィンセントを探しています。 彼の要求が満たされなければ、ハロウィンの前の夜にAlba Cityで緩めることになる壊滅的なナノボットの兵器を持つ生物テロになった。',
  'chottolan19' : 'Otonashiは彼が死んだことを知るために目覚める。 ライフルの女の子、ユリは、彼らが死後にいると説明し、オトナシは彼が自分自身について覚えることができるのは彼の名前であることを理解する。 ユリは、新田世界センセーン（後世戦線）を率いて、天使という女の子と戦争をしていると伝えます。 ユリのテンシが悪いという主張を信じることができず、オトナシは彼女と話をしようとしますが、エンカウンターは意図した通りに行かない。 OtonashiはSSSとTenshiの戦いに参加することに決めましたが、彼は奇妙なことに彼女に引き寄せられました。',
  'chottolan20' : 'Vash the Stampedeは彼の頭に$ 60,000,000,000の賞金を得た男です。 理由は：彼は彼に反対するすべての人に無駄を負わせ、彼のタイトル「ヒューマノイド台風」を獲得して、楽しいために都市全体を平らにする無慈悲な悪役だ。 彼はどこに行くにしても死と滅亡の痕跡を残しています。誰もが目の接触をしていれば誰でも自分自身を死に数えることができます。 実際には、Vashは決して人生を送ったことがないと主張し、犠牲を払って暴力を避ける巨大な恋人です。',
  'chottolan21' : 'サイモンとカミナは、伝説的な表面から隠された深い地下の村で生まれ育った。 Kaminaは、自由自在なルーズな大砲で、彼自身の名前をつくっているのに対し、Simonは本当の願望のない臆病な少年です。 ある日、地球を掘削している間に、サイモンは古代の戦争のアーティファクトのイグニッション・キーであると判明した神秘的な物体に遭遇します。',
  'chottolan22' : '東京は残酷で無慈悲な街 - 人間と並んで「グール」と呼ばれる悪質な生き物が存在する都市になった。 この大都市の市民は、このような血の渇きの野蛮人と人間の肉体に対する彼らの渇きを常に懸念しています。 しかし、これらのグールが引き起こす最大の脅威は、人間として偽装して社会と融合する彼らの危険な能力です。 東京グールは、有名な大学生、金子賢（Kaneki Ken）に次いで、自分自身のような熱心な読者、リゼス・カミシロ（Rize Kamishiro）に惹かれる。',
  'chottolan23' : '2010年、ブリタニアの聖帝国は、日本を征服し始め、支配的な軍国として確立しています。 その急速な敗北の後、地域11に改名された日本は、独立を取り戻そうとすると、これらの暴君に対して大きな抵抗を見ている。 ブリタニアの追放された王子ルルーシュ・ランペルージは、残念なことに、両国の軍隊間の激しい戦いに巻き込まれています。 しかし彼はC.Cという名前の神秘的な女の子が適時出現し、「キングスの力」ギアスを授かることで逃げ出すことができます。',
  'chottolan24' : '「何かを得るためには、価値のあるものを失わなければならない」 錬金術は、この等価交換の法則に拘束されています。エドワードとアルフォンス・エルリックの若い兄弟は、錬金術の禁じられた行為である人間の核変換を試みた後でしか実現しません。 エドワードは左脚を失います。アルフォンスは身体を失います。 エドワードの右腕の絶望的な犠牲によって、アルフォンスの魂を鎧のスーツに貼り付けることができます。 荒廃していただけに、彼らは最終的にエドワードに「オートバイ」と呼ばれる金属製手足を手に入れ、国家錬金術師、鋼の錬金術師になる元の身体に最終的に戻るという希望です。',
  'chottolan25' : 'ドラゴンボールZの出来事の7年後、地球は平和にあり、その人々は宇宙に潜んでいるどんな危険からも自由に生きています。 しかし、この平和は短命です。 銀河の暗闇の中で眠っている邪悪な目が目覚めます。破壊の神、ベラス。 彼が "スーパーサイヤ人の神"に敗れたという預言に邪魔されて、ビーラスと彼の天使の仲間のホイスは、この不思議な存在のために宇宙を探し始める。 まもなく彼らは地球に到達し、惑星の最も強力な兵士のひとりである孫悟園と、同様に強力な友人と出会います。',
  'chottolan26' : '正義とその施行が変わった。 22世紀には、日本はサイバー・パスと呼ばれる犯罪意識の兆候を精神状態から調べることによって、各市民の脅威レベルを決定する客観的手段であるシビル・システムを実施しています。 査察官は、致命的な勢力をしばしば軽視している人を服従させることによって法律を支持する。 彼らの横には執行官、潜在的な犯罪者になってしまった警備員がいて、監督者の汚い作業を行う代わりに相対的な自由が与えられている。',
  'chottolan27' : '2022年には、バーチャルリアリティが飛躍的に進歩し、ソードアートオンライン（SAO）と呼ばれる大規模なオンラインロールプレイングゲームが開始されました。 「NerveGear」技術を利用することで、プレイヤーは自分の思考だけでゲーム内のアバターをコントロールできます。 Kirigaya Kazutoは、ゲームの最初の出荷に手を出す幸運な少数の愛好家のうちのひとりです。 彼はログインして、1万人もの人々と一緒に、Aincradの風光明媚な世界で素晴らしい中世の武器と恐ろしいモンスターがいっぱいの場所を見つけます。',
  'chottolan28' : 'タイ国内では、腐敗の爪によって当局や教会にさえ触れられていない腐敗した犯罪救済都市Roanapurがあります。 囚人と退行者のための避難所であるこの街は、多くの場合、地元の犯罪団体によって援助される不法な活動や運営の中心地として知られています。 東南アジアへの出張で最終的にペースの変化のチャンスを得ると、鈍い単調な生活をしている平均的な日本のビジネスマン、岡島六郎に入る。 彼の出張は速やかにロクローがブラックラグーンと呼ばれるロアナプルで活動している傭兵グループに奪われて降りる。',
  'chottolan29' : 'Meiko "Menma" Honmaの1人が事故で死亡した後、6人の第6年齢の小児友人のグループが離れて漂う。 事件の数年後、グループの指導者、神田弥生は社会から撤退し、高校に通っておらず、隠居者として生活している。 ある夏の日、老いたMenmaの幽霊が彼の横に現れ、それが達成されるまで彼は死後に渡ることができないと考えて、願いを叶えるよう求めます。 最初は、彼は彼が幻覚していると思っているので、彼女は最小限に助けようとします。 しかし、Menmaは彼女の望みを覚えていないので、Jintaは、この問題を解決する鍵であると信じて、疎遠な友人を再び集めます。',
  'chottolan30' : '高須隆二は家事を愛する穏やかな高校生です。 彼の親切な性格とは対照的に、彼はしばしば彼が連れ去られたとしてラベル付けされる威圧的な顔をしています。 一方、かわいらしく壊れやすい少女以外の小さな人形様の生徒である、タイカ・アイサカさんがいます。 木製のカタニアと熱心な個性を備えたタイガは、学校全体で「パームトップ・タイガー」として知られています。 ある日、恥ずかしい間違いが2人の生徒を横断させます。',
  'chottolan31' : 'エネルギー保守的な高校生の大木一太郎さんは、姉の願いでクラシッククラブにサインアップしたとき、特にクラブの歴史が本当に根深いことを実感したときに、彼が交渉した以上のもので終わります。 控えめに、オレキはクラブルームを囲む45歳の謎に関する調査に引きずり込まれている。 彼の仲間のクラブ会員によれば、知識豊かな福武諭、善良で良性の井原真由香、そして奇妙なEru Chitanda、Orekiは埋葬された真実を見つけるだけでなく、 何年も前に作られた作品のほこりの下にあるが、他の小さな側面の場合も同様である。',
  'chottolan32' : '放棄された子猫と良心が2年目の雪田神田をSuimei High Schoolの悪名高いSakura Hallに移住させると、衛星寮と偏見のある不自然な住人は人生を逆転させた。 確かに平均的なソラタは、活気のあるアニメーターである美咲のような寮生の奇妙なコレクションに収まるのが難しいと感じています。 ジン、劇作家のプレイボーイ。 閉鎖的なプログラマーである龍之助。 千尋、寮長、美術教師、パーティーガール。 2年生、声優のソラタの仲間ナナミは、多くのネコの新しいオーナーを探すために彼にプッシュし、素早く通常の寮に戻ります。 しかし、サクラホールを脱出したいという彼の願いは、漫画家になることを目指している世界的な芸術家の椎名眞四郎が、春の三ヶ月の間に移り住み、素早く彼に抱きつく。',
  'chottolan33' : 'クラナド：アフター・ストーリー、批判的に評価されたスライス・オブ・ライフシリーズの続編クラナドは、高校卒業後の岡崎知也と古川渚の後に始まります。 一緒に、彼らは成長の感情的なジェットコースターを経験する。 彼の未来のためのコースを決めることができないとき、Tomoyaは強い仕事倫理の価値を学び、Nagisaのサポートの強さを発見する。 夫婦の献身と団結を通じて、彼らは個人的な問題に直面し、古い関係を深め、新たな債券を創り出す',
  'chottolan34' : '彼女のクラスメートは、クロヌマ沢子を完全に誤解しています。 彼女の臆病で甘い態度は、しばしば悪意のある行為と誤認される。 これは、彼女の仲間に彼女の愛称「さだこ」を与えるようになった "リング"からの幽霊の女の子との彼女の類似のためです。 友達を作り、普通の人生を送ることを切望している彼女は、「100％爽やかな」人格が沢子から大きな賞賛を得ている、クラス内で最も人気のある男であるKazehaya Shoutaに自然に引き寄せられます。 だからKazehayaが彼女と話し始めると、沢子が常に憧れていた友情に希望があるかもしれません。 たぶん...彼女の将来のロマンスに少しでも希望があります。'
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
  'chottolan10' : 'La controvertida segunda temporada del anime Tokyo Ghoul no deja nada más que cuerpos a su paso, incluso los fanáticos principales del manga intensamente. La segunda temporada de Tokyo Ghoul, titulada Root A, se desvía del material de origen y no sigue al manga como la temporada 1 en su mayoría.',
  'chottolan11' : '"Ese día, la raza humana recordó el terror de ser dominada por ellos, y la vergüenza de estar cautiva en una jaula de pájaros ..." - Hace más de 100 años, apareció un depredador natural de la humanidad: los Titanes, humanoide gigante pero sin sentido monstruos cuyo único propósito de existencia parecía ser devorar humanos. Había una brecha insuperable en el poder entre ellos y la humanidad, y como resultado, la humanidad fue rápidamente exterminada al borde de la extinción.',
  'chottolan12' : 'La historia se centra en un niño llamado Gon, que descubre que su padre, a quien le dijeron que estaba muerto, está realmente vivo y bien. Se entera de que su padre, Ging, es un legendario cazador, un individuo que ha demostrado ser un miembro élite de la humanidad y que se especializa en encontrar criaturas raras, tesoros secretos y otros individuos. A pesar de que Ging había dejado a su hijo con sus parientes para perseguir sus propios sueños, Gon se empeña en seguir los pasos de su padre.',
  'chottolan13' : 'Gol D. Roger era conocido como el Rey Pirata, el pirata más fuerte y más infame que haya navegado la Gran Línea. La captura y muerte de Roger por parte del Gobierno Mundial produjo un cambio en todo el mundo. Sus últimas palabras antes de su muerte revelaron la ubicación del tesoro más grande del mundo, One Piece. Fue esta revelación la que provocó la Grand Age of Pirates, hombres que soñaban con encontrar One Piece (que promete una cantidad ilimitada de riquezas y fama), y posiblemente el título más codiciado para la persona que lo encontró, el título de el Rey Pirata',
  'chottolan14' : 'En la tierra mística de Fiore, la magia existe como parte esencial de la vida cotidiana. Innumerables gremios mágicos se encuentran en el centro de toda la actividad mágica, y sirven como lugares para que magos de ideas afines se agrupen y acepten solicitudes de trabajo. Entre ellos, Fairy Tail se destaca del resto como un lugar de fortaleza, espíritu y familia. Lucy Heartfilia es una joven maga que busca las llaves de la puerta celestial, y su sueño es convertirse en un mago de pleno derecho uniéndose a este famoso gremio. En su búsqueda, se encuentra con Natsu Dragneel y su compañero Happy, que está en una búsqueda para encontrar al padre adoptivo de Natsu, el dragón Igneel.',
  'chottolan15' : 'Cuando un demonio que cambia de forma con sed de carne humana, conocido como "youma", llega a la aldea de Raki, una mujer solitaria con ojos plateados entra al pueblo con solo una espada en la espalda. Ella es una "Claymore", un ser fabricado como mitad humano y mitad youma, con el expreso propósito de exterminar a estos monstruos. Después de que matan a la familia de Raki, Claymore le salva la vida, pero posteriormente es desterrado de su hogar. Sin otro lugar adonde ir, Raki encuentra a la Claymore, conocida como Clare, y decide seguirla en sus viajes.',
  'chottolan16' : 'Ichigo Kurosaki es un estudiante de bachillerato ordinario, hasta que su familia es atacada por un Hollow, un espíritu corrupto que busca devorar las almas humanas. Es entonces cuando conoce a una Soul Reaper llamada Rukia Kuchiki, quien se lesiona mientras protege a la familia de Ichigo del atacante. Para salvar a su familia, Ichigo acepta la oferta de Rukia de tomar sus poderes y se convierte en un Soul Reaper como resultado. Sin embargo, como Rukia no puede recuperar sus poderes, a Ichigo se le asigna la abrumadora tarea de perseguir a los Hollows que plagan su ciudad.',
  'chottolan17' : 'Doce años antes del comienzo de la serie, los Nueve colas atacaron a Konoha, destruyendo gran parte de la aldea y tomando muchas vidas. El líder de la aldea, el Cuarto Hokage, sacrificó su vida para sellar a los Nueve Colas en un recién nacido, Naruto Uzumaki. Huérfano por el ataque, Naruto fue rechazado por los aldeanos, que por miedo e ira, lo vieron como los Nueve Colas. Aunque el Tercer Hokage prohibió hablar sobre cualquier cosa relacionada con los Nueve Colas, los niños, tomando las señales de sus padres, heredaron la misma animosidad hacia Naruto.',
  'chottolan18' : 'Cocky Spike Spiegel y la tripulación de su nave espacial, Bebop, una intrépida banda de cazadores de recompensas, aterrizan en Marte en el año 2071 persiguiendo una enorme recompensa en efectivo. El equipo de cuatro personas, que también incluye al inminente cyborg Jet Black, la intrépida Faye Valentine y el experto en tecnología Edward, están en busca del ex oficial militar Vincent. El ex héroe se ha convertido en un terrorista biológico con un arsenal de nano-bots devastadores que lanzará en la ciudad de Alba la noche antes de Halloween si no se cumplen sus demandas.',
  'chottolan19' : 'Otonashi despierta solo para descubrir que está muerto. Una niña armada con rifles llamada Yuri explica que están en la otra vida, y Otonashi se da cuenta de que lo único que puede recordar de sí mismo es su nombre. Yuri le dice que lidera el Shinda Sekai Sensen (Batalla de vida futura) y que libra una guerra contra una niña llamada Tenshi. Incapaz de creer las afirmaciones de Yuri de que Tenshi es malvado, Otonashi intenta hablar con ella, pero el encuentro no sale como él quería. Otonashi decide unirse al SSS y luchar contra Tenshi, pero se siente extrañamente atraído por ella.',
  'chottolan20' : 'Vash the Stampede es el hombre con una recompensa de $$ 60,000,000,000 en su cabeza. La razón: es un villano despiadado que malgasta a todos los que se le oponen y aplana ciudades enteras por diversión, lo que le valió el título de "El tifón humanoide". Él deja un rastro de muerte y destrucción donde quiera que vaya, y cualquiera puede considerarse muerto si tan solo hacen contacto visual, o eso dicen los rumores. En realidad, Vash es un gran softie que dice nunca haber tomado una vida y evita la violencia a toda costa.',
  'chottolan21' : 'Simon y Kamina nacieron y se criaron en un pueblo profundo y subterráneo, escondido de la superficie legendaria. Kamina es un cañón de espíritu libre empeñado en hacerse un nombre, mientras que Simon es un niño tímido sin aspiraciones reales. Un día, mientras excavaba la tierra, Simon se topa con un misterioso objeto que resulta ser la llave de encendido de un antiguo artefacto de guerra, que el dúo llama Lagann.',
  'chottolan22' : 'Tokio se ha convertido en una ciudad cruel y despiadada, un lugar donde criaturas feroces llamadas "ghouls" existen junto a los humanos. Los ciudadanos de esta una vez gran metrópoli viven con el temor constante de estos salvajes sedientos de sangre y su sed de carne humana. Sin embargo, la mayor amenaza que representan estos ghouls es su peligrosa habilidad para enmascararse como humanos y mezclarse con la sociedad. Basado en el manga de horror sobrenatural más vendido de Sui Ishida, Tokyo Ghoul sigue a Ken Kaneki, un estudiante universitario tímido y aficionado a los libros, que se siente atraído al instante por Rize Kamishiro, un ávido lector como él.',
  'chottolan23' : 'En el año 2010, el Sacro Imperio de Britannia se está estableciendo como una nación militar dominante, comenzando con la conquista de Japón. Renombrado como Área 11 después de su rápida derrota, Japón ha visto una resistencia significativa contra estos tiranos en un intento por recuperar la independencia. Lelouch Lamperouge, príncipe exiliado de Britannia, lamentablemente, se encuentra atrapado en un fuego cruzado entre las fuerzas armadas de las dos naciones. Él es capaz de escapar, sin embargo, gracias a la aparición oportuna de una chica misteriosa llamada C.C., que le otorga Geass, el "Poder de los Reyes".',
  'chottolan24' : '"Para que se pueda obtener algo, se debe perder algo de igual valor". La Alquimia está sujeta a esta Ley de Intercambio Equivalente, algo que los jóvenes hermanos Edward y Alphonse Elric solo se dan cuenta después de intentar la transmutación humana: el único acto prohibido de la alquimia. Pagan un precio terrible por su transgresión. Edward pierde su pierna izquierda, Alphonse su cuerpo físico. Es solo por el sacrificio desesperado del brazo derecho de Edward que puede poner el alma de Alphonse en una armadura. Devastado y solo, es la esperanza de que ambos eventualmente regresen a sus cuerpos originales que le dan a Edward la inspiración para obtener extremidades de metal llamadas "automail" y convertirse en un alquimista de estado, el Alquimista Fullmetal.',
  'chottolan25' : 'Siete años después de los sucesos de Dragon Ball Z, la Tierra está en paz y su gente vive libre de los peligros que acechan en el universo. Sin embargo, esta paz es efímera; un mal dormido despierta en los confines oscuros de la galaxia: Beerus, el despiadado Dios de la Destrucción. Preocupado por la profecía de que será derrotado por un "Dios Super Saiyajin", Beerus y su asistente angelical Whis comienzan a buscar en el universo a este ser misterioso. En poco tiempo, llegan a la Tierra donde se encuentran con Gokuu Son, uno de los guerreros más poderosos del planeta, y sus amigos igualmente poderosos.',
  'chottolan26' : 'La justicia y su cumplimiento han cambiado. En el siglo 22, Japón aplica el Sistema Sibyl, un medio objetivo para determinar el nivel de amenaza de cada ciudadano mediante el examen de su estado mental en busca de signos de intención criminal, conocido como su Psycho-Pass. Los inspectores defienden la ley subyugando, a menudo con fuerza letal, a cualquiera que albergue la menor mala voluntad; junto a ellos están Enforcers, los Inspectores hastiados que se han convertido en delincuentes latentes, se les concede una libertad relativa a cambio de llevar a cabo el trabajo sucio de los Inspectores.',
  'chottolan27' : 'En el año 2022, la realidad virtual ha progresado a pasos agigantados, y se lanzó un juego de rol masivo en línea llamado Sword Art Online (SAO). Con la ayuda de la tecnología "NerveGear", los jugadores pueden controlar sus avatares dentro del juego usando solo sus propios pensamientos. Kazuto Kirigaya, apodado "Kirito", es uno de los afortunados pocos entusiastas que tienen en sus manos el primer envío del juego. Inicia sesión para encontrarse, junto con otros diez mil, en el pintoresco y elaborado mundo de Aincrad, uno lleno de fantásticas armas medievales y horribles monstruos.',
  'chottolan28' : 'Dentro de Tailandia está Roanapur, una ciudad depravada y plagada de crímenes en la que ni las autoridades ni las iglesias están intocadas por las garras de la corrupción. Un refugio para condenados y degenerados por igual, la ciudad es conocida por ser el centro de actividades y operaciones ilegales, a menudo impulsada por los sindicatos criminales locales. Entra Rokurou Okajima, un empresario japonés promedio que ha estado viviendo una vida aburrida y monótona, cuando finalmente tiene la oportunidad de cambiar de ritmo con un viaje de entrega al sudeste asiático. Su viaje de negocios cae rápidamente mientras Rokurou es capturado por un grupo de mercenarios que opera en Roanapur, llamado Black Lagoon.',
  'chottolan29' : 'Un grupo de seis amigos de la infancia de sexto grado se separan después de que uno de ellos, Meiko "Menma" Honma, muere en un accidente. Años después del incidente, la líder del grupo, Jinta Yadomi, se ha retirado de la sociedad, no asiste a la escuela secundaria y vive como reclusa. Un día de verano, el fantasma de una Menma de mayor edad aparece a su lado y pide que se le otorgue un deseo, razonando que no puede pasar al más allá hasta que se cumpla. Al principio, él solo trata de ayudarla mínimamente porque cree que está alucinando. Pero como Menma no recuerda cuál es su deseo, Jinta reúne a sus amigos distanciados una vez más, creyendo que son la clave para resolver este problema.',
  'chottolan30' : 'Ryuuji Takasu es un suave estudiante de secundaria con un amor por las tareas domésticas; pero a diferencia de su naturaleza amable, tiene una cara intimidante que a menudo lo etiqueta como delincuente. Por otro lado está Taiga Aisaka, una estudiante pequeña, parecida a una muñeca, que no es una niña linda y frágil. Equipado con una katana de madera y personalidad agresiva, Taiga es conocida en toda la escuela como el "Tigre de bolsillo". Un día, un error vergonzoso hace que los dos estudiantes se crucen.',
  'chottolan31' : 'El estudiante de secundaria conservador de energía Houtarou Oreki termina con más de lo que esperaba cuando se inscribe en el Classics Club a instancias de su hermana, especialmente cuando se da cuenta de cuán enraizada está la historia del club. A regañadientes, Oreki es arrastrado a una investigación sobre el misterio de 45 años que rodea la sala del club. Acompañado por sus compañeros de club, el conocedor Satoshi Fukube, el severo pero benévoco Mayaka Ibara y el siempre curioso Eru Chitanda, Oreki debe combatir los plazos y la falta de información con ingenio y talento oculto, para no solo encontrar la verdad enterrada bajo el polvo de obras creadas años antes que ellos, pero también de otros pequeños casos laterales.',
  'chottolan32' : 'Cuando los gatitos abandonados y su buena conciencia obligan al Sorata Kanda del segundo año a mudarse al infame Sakura Hall de Suimei High School, el dormitorio satelital y sus excéntricos e inadaptados residentes ponen su vida patas arriba. El Sorata decididamente promedio encuentra difícil encajar en la extraña colección de residentes de dormitorios como Misaki, un animador enérgico; Jin, un playboy dramaturgo; Ryuunosuke, un programador solitario; y Chihiro, el administrador del dormitorio, el maestro de arte y la chica fiestera. La amiga de Sorata, Nanami, estudiante de segundo año y aspirante a actriz de voz, lo empuja a buscar nuevos dueños para los muchos gatos para que pueda regresar rápidamente a los dormitorios comunes. Sin embargo, su deseo de escapar de Sakura Hall se tambalea cuando el segundo año infantil y como mascota, Mashiro Shiina, un sabio artístico de clase mundial que busca convertirse en un mangaka, se transfiere durante el trimestre de ',
  'chottolan33' : 'Clannad: After Story, la secuela de Clannad, la serie de escenas de la vida aclamada por la crítica, comienza después de que Tomoya Okazaki y Nagisa Furukawa se gradúan de la escuela secundaria. Juntos, experimentan la montaña rusa emocional del crecimiento. Incapaz de decidir un curso para su futuro, Tomoya aprende el valor de una fuerte ética de trabajo y descubre la fuerza del apoyo de Nagisa. A través de la dedicación y la unidad de propósito de la pareja, avanzan para enfrentar sus problemas personales, profundizar sus viejas relaciones y crear nuevos vínculos.',
  'chottolan34' : 'Kuronuma Sawako es completamente incomprendida por sus compañeros de clase. Su comportamiento tímido y dulce a menudo se confunde con un comportamiento malicioso. Esto se debe a su parecido con la chica fantasma de "The Ring", que ha llevado a sus compañeros a darle el sobrenombre de Sadako. Anhelando hacer amigos y vivir una vida normal, naturalmente se siente atraída por Kazehaya Shouta, el chico más popular de la clase, cuya personalidad "100% refrescante" le gran admiración de Sawako. Entonces, cuando Kazehaya comienza a hablar con ella, tal vez haya esperanza para las amistades que Sawako siempre ha deseado. Tal vez ... hay incluso un poco de esperanza para un romance en su futuro.'
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
 'chottolan10' : 'La deuxième saison controversée de l anime de Tokyo Ghoul ne laisse que des corps sur son passage, gardant même les fans de manga intenses. La deuxième saison de Tokyo Ghoul, intitulée Root A, s écarte du matériel source et ne suit pas le manga comme saison 1 dans sa majorité.',
 'chottolan11' : '"Ce jour-là, la race humaine s`est souvenue de la terreur d`être dominée par eux, et la honte d`être retenue captive dans une cage à oiseaux ..." - Il y a plus de 100 ans, un prédateur naturel de l`humanité apparaissait: des monstres dont le seul but de l`existence semblait être de dévorer les humains. Il y avait un écart de pouvoir insurmontable entre eux et l``humanité, et par conséquent, l`humanité a été rapidement exterminée au bord de l`extinction.',
 'chottolan12' : 'L`histoire se concentre sur un jeune garçon nommé Gon, qui découvre que son père, dont on lui a dit qu`il était mort, est bel et bien vivant. Il apprend que son père, Ging, est un chasseur légendaire, un individu qui s`est révélé être un membre d`élite de l`humanité et qui se spécialise dans la recherche de créatures rares, de trésors secrets et d`autres individus. Bien que Ging ait quitté son fils avec ses proches pour poursuivre ses propres rêves, Gon est déterminé à suivreles traces de son père.',
 'chottolan13' : 'Gol D. Roger était connu comme le roi des pirates, le pirate le plus fort et le plus infâme ayant navigué sur la Grand Line. La capture et la mort de Roger par le gouvernement mondial ont apporté un changement à travers le monde. Ses derniers mots avant sa mort ont révélé l`emplacement du plus grand trésor du monde, One Piece. C`est cette révélation qui a provoqué le Grand Age des Pirates, des hommes qui rêvaient de trouver One Piece (qui promet une quantité illimitée de richesses et de renommée), et sans doute le plus convoité des titres pour celui qui l`a trouvé, le titre de le roi des pirates.',
 'chottolan14' : 'Dans le pays mystique de Fiore, la magie existe en tant que partie essentielle de la vie quotidienne. D`innombrables guildes magiques se trouvent au cœur de toutes les activités magiques et servent de lieux de rassemblement pour les mages aux vues similaires et acceptent les demandes d`emploi. Parmi eux, Fairy Tail se démarque des autres comme un lieu de force, d`esprit et de famille. Lucy Heartfilia est une jeune mage à la recherche de clés célestes, et son rêve est de devenir une sorcière à part entière en rejoignant cette célèbre guilde. Dans sa recherche, elle rencontre Natsu Dragneel et son partenaire Happy, qui est à la recherche du père adoptif de Natsu, le dragon Igneel.',
 'chottolan15' : 'Quand un démon métamorphe avec une soif de chair humaine, connu sous le nom de "youma", arrive dans le village de Raki, une femme solitaire aux yeux argentés arrive en ville avec seulement une épée sur le dos. Elle est un «Claymore», un être fabriqué à moitié humain et à moitié-youma, dans le but exprès d`exterminer ces monstres. Après que la famille de Raki soit tuée, le Claymore sauve sa vie, mais il est par la suite banni de sa maison. Nayant nulle part où aller, Raki trouve le Claymore, connu sous le nom de Clare, et décide de la suivre dans ses voyages.',
 'chottolan16' : 'Ichigo Kurosaki est un lycéen ordinaire - jusqu`à ce que sa famille soit attaquée par un Hollow, un esprit corrompu qui cherche à dévorer les âmes humaines. C`est alors qu`il rencontre un Soul Reaper nommé Rukia Kuchiki, qui se blesse en protégeant la famille d`Ichigo de l`assaillant. Pour sauver sa famille, Ichigo accepte loffre de Rukia de prendre ses pouvoirs et devient ainsi une Faucheuse dâmes. Cependant, comme Rukia est incapable de reprendre ses pouvoirs, Ichigo se voit confier la lourde tâche de traquer les Hollows qui sévissent dans leur ville.',
 'chottolan17' : 'Douze ans avant le début de la série, les Neuf-Queues attaquèrent Konohagakure détruisant une grande partie du village et prenant de nombreuses vies. Le chef du village, le quatrième Hokage a sacrifié sa vie pour sceller les Neuf-Queues dans un nouveau-né, Naruto Uzumaki. Orphelin par lattaque, Naruto a été évité par les villageois, qui, par peur et colère, le considéraient comme les Neuf-Queues lui-même. Bien que le Troisième Hokage ait interdit de parler de tout ce qui se rapportait aux Neuf Queues, les enfants - sinspirant de leurs parents - ont hérité de la même animosité envers Naruto.',
 'chottolan18' : 'Cocky Spike Spiegel et léquipage de son vaisseau spatial, Bebop, un groupe intrépide de chasseurs de primes, atterrissent sur Mars en 2071 pour une énorme récompense en argent. Léquipe de quatre personnes, incluant également le cyborg Jet Black, lintrépide Faye Valentine et lexpert en technologie Edward, sont à la recherche de lancien officier Vincent. Lancien héros est devenu un terroriste biologique avec un arsenal de nano-bots dévastateurs quil larguera sur Alba City la nuit précédant Halloween si ses exigences ne sont pas satisfaites.',
 'chottolan19' : 'Otonashi se réveille seulement pour apprendre quil est mort. Une fille à la carabine nommée Yuri explique quils sont dans lau-delà, et Otonashi se rend compte que la seule chose dont il peut se souvenir est son nom. Yuri lui dit quelle dirige le Shinda Sekai Sensen (Front de vie daprès-vie) et mène une guerre contre une fille nommée Tenshi. Incapable de croire les affirmations de Yuri selon lesquelles Tenshi est diabolique, Otonashi tente de parler avec elle, mais la rencontre ne se passe pas comme prévu. Otonashi décide de rejoindre le SSS et combat Tenshi, mais il se retrouve étrangement attiré par elle.',
 'chottolan20' : 'Vash the Stampede est lhomme avec une prime de 60 000 000 000 $ sur sa tête. La raison: cest un méchant impitoyable qui gâche tous ceux qui sopposent à lui et aplatit des villes entières pour samuser, lui donnant le titre de «Typhoon humanoïde». Il laisse une traînée de mort et nimporte qui peut se croire mort sils ont un contact visuel - cest ce que disent les rumeurs. En réalité, Vash est un énorme softie qui prétend navoir jamais pris une vie et évite la violence à tout prix.',
 'chottolan21' : 'Simon et Kamina sont nés et ont grandi dans un village souterrain profond, caché de la surface légendaire. Kamina est un canon lâche et libre despritun nom pour lui-même, tandis que Simon est un jeune garçon timide sans réelles aspirations. Un jour, en fouillant la terre, Simon tombe sur un objet mystérieuxce qui savère être la clé de contact dun ancien artefact de guerre, que le duo du nom de Lagann.',
 'chottolan22' : 'Tokyo est devenue une ville cruelle et impitoyable - un endroit où des créatures vicieuses appelées «goules» existent aux côtés des humains. Les citoyens de cette grande métropole vivent dans la peur constante de ces sauvages sanguinaires et de leur soif de chair humaine. Cependant, la plus grande menace que ces goules posent est leur capacité dangereuse de se faire passer pour des humains et de se fondre dans la société. Basé sur le manga dhorreur surnaturel le plus vendupar Sui Ishida, Tokyo Ghoul suit Ken Kaneki, un étudiant universitaire timide et timide, qui est immédiatement attiré par Rize Kamishiro, un lecteur avide comme lui.',
 'chottolan23' : 'En 2010, le Saint Empire de Britannia saffirme comme une nation militaire dominante, à commencer par la conquête du Japon. Rebaptisé en zone 11 après sa défaite rapide, le Japon a connu une résistance importante contre ces tyrans dans une tentative de regagner son indépendance. Lelouch Lamperouge, prince exilé de Britannia, se retrouve malheureusement pris dans un échange de tirs entre les forces armées des deux pays. Cependant, il peut séchapper grâce à lapparition opportune dune mystérieuse fille nommée C.C., qui lui donne Geass, le «pouvoir des rois».',
 'chottolan24' : '"Pour que quelque chose soit obtenu, quelque chose de valeur égale doit être perdu." Lalchimie est liée par cette loi déchange équivalent - quelque chose que les jeunes frères Edward et Alphonse Elric réalisent seulement après avoir tenté la transmutation humaine: lacte dalchimie interdit. Ils paient un prix terrible pour leur transgression-Edward perd sa jambe gauche, Alphonse son corps physique. Ce nest que par le sacrifice désespéré du bras droit dEdward quil est capable dapposer lâme dAlphonse sur une armure. Dévasté et seul, cest lespoir quils reviendraient tous deux à leurs corps originaux qui donnent à Edward linspiration pour obtenir des membres métalliques appelés "automail" et devenir un alchimiste détat, lAlchimiste Fullmetal.',
 'chottolan25' : 'Sept ans après les événements de Dragon Ball Z, la Terre est en paix et ses habitants vivent à labri des dangers qui guettent lunivers. Cependant, cette paix est de courte durée; un mal endormi séveille dans les ténèbres de la galaxie: Beerus, le dieu impitoyable de la Destruction. Dérangé par une prophétie quil sera vaincu par un "Super Saiyan Dieu", et son assistant angélique Whis commencent à chercher dans lunivers cet être mystérieux. Avant longtemps, ils atteignent la Terre où ils rencontrent Gokuu Son, lun des plus puissants guerriers de la planète, et ses amis puissants.',
 'chottolan26' : 'La justice et son application ont changé. Au 22ème siècle, le Japon applique le système Sibyl, un moyen objectif de déterminer le niveau de menace de chaque citoyen en examinant leur état mental pour des signes dintention criminelle, connue sous le nom de Psycho-Pass. Les inspecteurs soutiennent la loi en subjuguant, souvent avec une force létale, quiconque héberge la moindre malveillance; à côté deux, des Enforcers, des inspecteurs blasés qui sont devenus des criminels latents, ont accordé une relative liberté en échange du travail sale des inspecteurs.',
 'chottolan27' : 'En 2022, la réalité virtuelle a progressé à pas de géant, et un jeu de rôle en ligne massif appelé Sword Art Online (SAO) est lancé. Avec laide de la technologie "NerveGear", les joueurs peuvent contrôler leurs avatars dans le jeu en utilisant uniquement leurs propres pensées. Kazuto Kirigaya, surnommé "Kirito", fait partie des rares chanceux qui ont mis la main sur la première expédition du jeu. Il se connecte pour se retrouver, avec dix mille autres personnes, dans le monde pittoresque et élaboré dAincrad, lun plein darmes médiévales fantastiques et de monstres horribles.',
 'chottolan28' : 'En Thaïlande, Roanapur est une ville dépravée et criminalisée où même les autorités ou les églises ne sont pas épargnées par les griffes de la corruption. Un havre pour les condamnés et les dégénérés, la ville est connue pour être le centre des activités illégales et des opérations, souvent alimenté par les syndicats du crime local. Entrez Rokurou Okajima, un homme daffaires japonais moyen qui vit une vie terne et monotone, quand il obtient finalement sa chance pour un changement de rythme avec un voyage de livraison en Asie du Sud-Est. Son voyage daffaires dégringole rapidement alors que Rokurou est capturé par un groupe de mercenaires opérant à Roanapur, appelé Black Lagoon.',
 'chottolan29' : 'Un groupe de six amis denfance de sixième année dérive après que lun deux, Meiko "Menma" Honma, meure dans un accident. Des années après lincident, le leader du groupe, Jinta Yadomi, sest retiré de la société, ne fréquente pas le lycée et vit en reclus. Un jour dété, le fantôme dune Menma plus âgée apparaît à côté de lui et demande quun vœu lui soit accordé, pensant quelle ne peut pas passer dans lau-delà jusquà ce quelle soit accomplie. Au début, il essaie seulement de laider au minimum parce quil pense quil hallucine. Mais comme Menma ne se souvient pas de ce quelle souhaite, Jinta rassemble une fois de plus ses amis, croyant quils sont la clé pour résoudre ce problème.',
 'chottolan30' : 'Ryuuji Takasu est un gentil étudiant de lycée avec un amour pour les travaux de ménage; mais contrairement à sa gentillesse, il a un visage intimidant qui le fait souvent étiqueter comme un délinquant. Dun autre côté, cest Taiga Aisaka, une petite étudiante qui ressemble à une poupée et qui est tout sauf une fille mignonne et fragile. Doté dun katana en bois et dune personnalité fougueuse, Taiga est connu dans toute lécole sous le nom de «Tiger Palmtop». Un jour, une erreur embarrassante fait croiser les deux étudiants.',
 'chottolan31' : 'Houtarou Oreki, lycéen conservateur dénergie, se retrouve avec plus que ce quil a négocié en sinscrivant au Club Classics à linstigation de sa sœur, surtout lorsquil se rend compte à quel point lhistoire du club est profondément enracinée. À contrecœur, Oreki est entraîné dans une enquête concernant le mystère de 45 ans qui entoure la salle du club. Accompagné par ses collègues membres du club, le savant Satoshi Fukube, le sévère Mayaka Ibara et le toujours curieux Eru Chitanda, Oreki doit combattre les délais et le manque dinformations avec ingéniosité et talent caché, afin de ne pas seulement trouver la vérité enfouie sous la poussière des travaux créés des années avant eux, mais aussi dautres petites caisses latérales.',
 'chottolan32' : 'Lorsque des chatons abandonnés et sa bonne conscience forcent Sorata Kanda de deuxième année à emménager dans linfâme Sakura Hall du Suimei High School, le dortoir satellite et ses habitants excentriques et inadaptés bouleversent sa vie. La Sorata décidément moyenne a du mal à sintégrer dans la curieuse collection de dortoirs comme Misaki, un animateur énergique; Jin, un playboy dramaturge; Ryuunosuke, un programmeur reclus; et Chihiro, le directeur de dortoir, le professeur dart, et la fille de partie. Lami de Sorata, Nanami, étudiant de deuxième année et aspirant actrice vocale, le pousse à trouver de nouveaux propriétaires pour les nombreux chats afin quil puisse rapidement retourner dans les dortoirs habituels. Cependant, son désir déchapper à Sakura Hall vacille lorsque Mashiro Shiina, un savant artistique de classe mondiale qui cherche à devenir un mangaka, se transfère au cours du trimestre de printemps et saccroche rapidement à lui.',
 'chottolan33' : 'Clannad: After Story, la suite de la série de slice de vie acclamée par la critique Clannad, commence après Tomoya Okazaki et Nagisa Furukawa diplômés du lycée. Ensemble, ils éprouvent les montagnes russes émotionnelles de grandir. Incapable de décider dun cours pour son avenir, Tomoya apprend la valeur dune solide éthique du travail et découvre la force du soutien de Nagisa. Grâce au dévouement et à lunité de but du couple, ils poussent vers lavant pour confronter leurs problèmes personnels, approfondir leurs anciennes relations et créer de nouveaux liens.',
 'chottolan34' : 'Kuronuma Sawako est complètement incompris par ses camarades de classe. Son comportement timide et doux est souvent confondu avec un comportement malveillant. Cela est dû à sa ressemblance avec la fille fantôme de "The Ring", qui a conduit ses pairs à lui donner le surnom de Sadako. Désireuse de se faire des amis et de mener une vie normale, elle est naturellement attirée par Kazehaya Shouta, le type le plus populaire de la classe, dont la personnalité «100% rafraîchissante» lui vaut une grande admiration de la part de Sawako. Alors quand Kazehaya commence à lui parler, peut-être y a-t-il de lespoir pour les amitiés que Sawako a toujours rêvées. Peut-être ... il y a même un peu despoir pour un roman dans son avenir.'
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
