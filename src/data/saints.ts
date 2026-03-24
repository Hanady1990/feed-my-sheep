import francisImg from "@/assets/saints/francis.jpg";
import thereseImg from "@/assets/saints/therese.jpg";
import thomasAquinasImg from "@/assets/saints/thomas-aquinas.jpg";
import teresaAvilaImg from "@/assets/saints/teresa-avila.jpg";
import ignatiusImg from "@/assets/saints/ignatius.jpg";
import catherineSienaImg from "@/assets/saints/catherine-siena.jpg";
import johnPaulIIImg from "@/assets/saints/john-paul-ii.jpg";
import padrePioImg from "@/assets/saints/padre-pio.jpg";
import augustineImg from "@/assets/saints/augustine.jpg";
import josephImg from "@/assets/saints/joseph.jpg";
import patrickImg from "@/assets/saints/patrick.jpg";
import anthonyPaduaImg from "@/assets/saints/anthony-padua.jpg";
import monicaImg from "@/assets/saints/monica.jpg";
import maximilianKolbeImg from "@/assets/saints/maximilian-kolbe.jpg";

export interface Saint {
  slug: string;
  name: { en: string; ar: string };
  feast: { en: string; ar: string };
  years: string;
  image: string;
  bio: { en: string; ar: string };
  fullBio: { en: string; ar: string };
  sayings: { en: string; ar: string }[];
  books: { en: string; ar: string }[];
  patronOf: { en: string; ar: string };
}

export const saints: Saint[] = [
  {
    slug: "francis-of-assisi",
    name: { en: "St. Francis of Assisi", ar: "القديس فرنسيس الأسيزي" },
    feast: { en: "October 4", ar: "٤ أكتوبر" },
    years: "1181–1226",
    image: francisImg,
    bio: {
      en: "Founder of the Franciscan Order who embraced radical poverty and received the stigmata.",
      ar: "مؤسس الرهبنة الفرنسيسكانية الذي اعتنق الفقر المدقع ونال وسوم المسيح."
    },
    fullBio: {
      en: "Born Giovanni di Pietro di Bernardone in Assisi, Italy, Francis was the son of a wealthy cloth merchant. After a year as a prisoner of war and a serious illness, he experienced a profound conversion. He renounced his inheritance, embraced Lady Poverty, and began preaching the Gospel with radical simplicity. He founded the Order of Friars Minor (Franciscans), the Order of Saint Clare, and the Third Order. In 1224, he received the stigmata — the wounds of Christ — on Mount La Verna, becoming the first recorded person to bear them. He composed the Canticle of the Sun, one of the earliest works of Italian literature, and is remembered for his deep love of all creation.",
      ar: "وُلد جيوفاني دي بيترو دي بيرناردوني في أسيزي بإيطاليا، وكان ابن تاجر أقمشة ثري. بعد سنة كأسير حرب ومرض خطير، اختبر اهتداءً عميقًا. تخلّى عن ميراثه واعتنق السيدة الفقر وبدأ يبشّر بالإنجيل ببساطة جذرية. أسّس رهبنة الإخوة الأصاغر (الفرنسيسكان) ورهبنة القديسة كلارا والرهبنة الثالثة. في عام ١٢٢٤ نال وسوم المسيح — جراحات المسيح — على جبل لافيرنا ليكون أول شخص مسجّل يحملها. ألّف نشيد الشمس، أحد أقدم الأعمال الأدبية الإيطالية، ويُذكر بحبه العميق لكل الخليقة."
    },
    sayings: [
      { en: "Lord, make me an instrument of your peace.", ar: "يا رب، اجعلني أداة سلامك." },
      { en: "Start by doing what's necessary; then do what's possible; and suddenly you are doing the impossible.", ar: "ابدأ بفعل الضروري، ثم افعل الممكن، وفجأة ستفعل المستحيل." },
      { en: "Preach the Gospel at all times. When necessary, use words.", ar: "بشّر بالإنجيل في كل وقت. وعند الضرورة، استخدم الكلمات." },
      { en: "Where there is hatred, let me sow love.", ar: "حيث توجد كراهية، دعني أزرع حبًّا." },
    ],
    books: [
      { en: "The Canticle of the Sun", ar: "نشيد الشمس" },
      { en: "The Rule of St. Francis", ar: "قانون القديس فرنسيس" },
      { en: "The Admonitions", ar: "التحذيرات" },
      { en: "Letter to All the Faithful", ar: "رسالة إلى جميع المؤمنين" },
    ],
    patronOf: { en: "Animals, ecology, merchants, Italy", ar: "الحيوانات، البيئة، التجار، إيطاليا" },
  },
  {
    slug: "therese-of-lisieux",
    name: { en: "St. Thérèse of Lisieux", ar: "القديسة تريزا الطفل يسوع" },
    feast: { en: "October 1", ar: "١ أكتوبر" },
    years: "1873–1897",
    image: thereseImg,
    bio: {
      en: "The 'Little Flower' who developed the 'Little Way' of spiritual childhood.",
      ar: "\"الزهرة الصغيرة\" التي طوّرت \"الطريقة الصغيرة\" للطفولة الروحية."
    },
    fullBio: {
      en: "Marie Françoise-Thérèse Martin was born in Alençon, France. The youngest of five daughters, she entered the Carmelite convent in Lisieux at just 15 after personally petitioning Pope Leo XIII. Despite her short life, she developed a profound spirituality known as 'the Little Way' — doing small things with great love and complete trust in God's mercy. She suffered from tuberculosis and experienced a painful 'dark night of the soul' in her final months. Her autobiography, 'Story of a Soul,' published after her death, became one of the most widely read spiritual classics. She was declared a Doctor of the Church in 1997.",
      ar: "وُلدت ماري فرانسواز تريز مارتان في ألونسون بفرنسا. الابنة الصغرى من خمس بنات، دخلت دير الكرمليات في ليزيو في سن الخامسة عشرة بعد أن التمست شخصيًّا من البابا لاون الثالث عشر. رغم حياتها القصيرة، طوّرت روحانية عميقة تُعرف بـ\"الطريقة الصغيرة\" — فعل الأشياء الصغيرة بحب كبير وثقة كاملة برحمة الله. عانت من السلّ واختبرت \"ليلة الروح المظلمة\" المؤلمة في أشهرها الأخيرة. نُشرت سيرتها الذاتية \"قصة نفس\" بعد وفاتها وأصبحت من أكثر الكتب الروحية قراءةً. أُعلنت معلّمة في الكنيسة عام ١٩٩٧."
    },
    sayings: [
      { en: "Miss no single opportunity of making some small sacrifice.", ar: "لا تفوّت أي فرصة لتقديم تضحية صغيرة." },
      { en: "My vocation is love!", ar: "دعوتي هي الحب!" },
      { en: "I will spend my heaven doing good on earth.", ar: "سأقضي سمائي في فعل الخير على الأرض." },
      { en: "The splendor of the rose and the whiteness of the lily do not rob the little violet of its scent.", ar: "بهاء الوردة وبياض الزنبق لا ينزعان من البنفسجة الصغيرة عطرها." },
    ],
    books: [
      { en: "Story of a Soul (Autobiography)", ar: "قصة نفس (سيرة ذاتية)" },
      { en: "Letters of St. Thérèse", ar: "رسائل القديسة تريزا" },
      { en: "Last Conversations", ar: "المحادثات الأخيرة" },
    ],
    patronOf: { en: "Missionaries, florists, France, AIDS patients", ar: "المرسلين، بائعي الزهور، فرنسا، مرضى الإيدز" },
  },
  {
    slug: "thomas-aquinas",
    name: { en: "St. Thomas Aquinas", ar: "القديس توما الأكويني" },
    feast: { en: "January 28", ar: "٢٨ يناير" },
    years: "1225–1274",
    image: thomasAquinasImg,
    bio: {
      en: "The 'Angelic Doctor,' greatest theologian who harmonized faith and reason.",
      ar: "\"المعلّم الملائكي\"، أعظم لاهوتي وفّق بين الإيمان والعقل."
    },
    fullBio: {
      en: "Born into a noble family near Naples, Thomas joined the Dominican Order against his family's wishes. He studied under St. Albert the Great in Cologne and Paris, becoming the foremost philosopher-theologian of the medieval Church. His magnum opus, the Summa Theologica, remains the most influential work of systematic theology ever written, synthesizing Aristotelian philosophy with Christian doctrine. He also composed beautiful Eucharistic hymns including 'Tantum Ergo' and 'Pange Lingua.' Near the end of his life, after a mystical experience during Mass, he stopped writing, saying all he had written seemed 'like straw' compared to what had been revealed to him.",
      ar: "وُلد في عائلة نبيلة قرب نابولي، انضم توما إلى الرهبنة الدومينيكانية ضد رغبة عائلته. درس تحت إشراف القديس ألبرت الكبير في كولونيا وباريس ليصبح أبرز فيلسوف-لاهوتي في الكنيسة القروسطية. تبقى تحفته \"الخلاصة اللاهوتية\" أكثر عمل في اللاهوت المنهجي تأثيرًا على الإطلاق، حيث جمع بين الفلسفة الأرسطية والعقيدة المسيحية. ألّف أيضًا تراتيل إفخارستية جميلة منها \"تانتوم إرغو\" و\"بانجي لينغوا\". قرب نهاية حياته، بعد خبرة صوفية أثناء القداس، توقف عن الكتابة قائلًا إن كل ما كتبه يبدو \"كالقشّ\" مقارنةً بما كُشف له."
    },
    sayings: [
      { en: "To one who has faith, no explanation is necessary. To one without faith, no explanation is possible.", ar: "من لديه إيمان لا يحتاج إلى تفسير. ومن ليس لديه إيمان لا ينفع معه تفسير." },
      { en: "The things that we love tell us what we are.", ar: "الأشياء التي نحبها تخبرنا من نحن." },
      { en: "There is nothing on this earth more to be prized than true friendship.", ar: "لا يوجد شيء على هذه الأرض أثمن من الصداقة الحقيقية." },
      { en: "Grant me, O Lord my God, a mind to know you, a heart to seek you, wisdom to find you.", ar: "امنحني يا ربي إلهي عقلًا ليعرفك وقلبًا ليطلبك وحكمة ليجدك." },
    ],
    books: [
      { en: "Summa Theologica", ar: "الخلاصة اللاهوتية" },
      { en: "Summa Contra Gentiles", ar: "الخلاصة ضد الوثنيين" },
      { en: "Compendium of Theology", ar: "مختصر اللاهوت" },
      { en: "On Being and Essence", ar: "في الوجود والماهية" },
    ],
    patronOf: { en: "Students, scholars, universities, theologians, philosophers", ar: "الطلاب، العلماء، الجامعات، اللاهوتيين، الفلاسفة" },
  },
  {
    slug: "teresa-of-avila",
    name: { en: "St. Teresa of Ávila", ar: "القديسة تريزا الأفيلية" },
    feast: { en: "October 15", ar: "١٥ أكتوبر" },
    years: "1515–1582",
    image: teresaAvilaImg,
    bio: {
      en: "Mystic, Doctor of the Church, and reformer of the Carmelite Order.",
      ar: "صوفية ومعلّمة في الكنيسة ومصلحة الرهبنة الكرملية."
    },
    fullBio: {
      en: "Born Teresa de Cepeda y Ahumada in Ávila, Spain, she entered the Carmelite convent at 20. After years of spiritual dryness, she experienced profound mystical graces including visions, ecstasies, and the 'transverberation' — when an angel pierced her heart with a golden spear of divine love. She reformed the Carmelite Order, founding the Discalced (barefoot) Carmelites and establishing 17 convents despite enormous opposition. Her writings on mystical prayer, including 'The Interior Castle' and 'The Way of Perfection,' are masterpieces of Christian spirituality. She was declared a Doctor of the Church in 1970.",
      ar: "وُلدت تريزا دي ثيبيدا إي أهومادا في أبيلا بإسبانيا، ودخلت دير الكرمليات في سن العشرين. بعد سنوات من الجفاف الروحي، اختبرت نعمًا صوفية عميقة تشمل رؤى وحالات وجد و\"اختراق القلب\" — حين طعن ملاك قلبها برمح ذهبي من الحب الإلهي. أصلحت الرهبنة الكرملية وأسّست الكرمليات الحفاة وأقامت ١٧ ديرًا رغم معارضة هائلة. كتاباتها عن الصلاة الصوفية بما فيها \"القلعة الداخلية\" و\"طريق الكمال\" هي روائع الروحانية المسيحية. أُعلنت معلّمة في الكنيسة عام ١٩٧٠."
    },
    sayings: [
      { en: "Christ has no body now but yours.", ar: "ليس للمسيح الآن جسد سوى جسدك." },
      { en: "Let nothing disturb you, let nothing frighten you. All things pass. God does not change.", ar: "لا يقلقك شيء ولا يخيفك شيء. كل شيء يمضي. الله لا يتغيّر." },
      { en: "God alone suffices.", ar: "الله وحده يكفي." },
      { en: "Prayer is nothing else than being on terms of friendship with God.", ar: "الصلاة ليست شيئًا آخر سوى أن تكون على علاقة صداقة مع الله." },
    ],
    books: [
      { en: "The Interior Castle", ar: "القلعة الداخلية" },
      { en: "The Way of Perfection", ar: "طريق الكمال" },
      { en: "The Book of Her Life (Autobiography)", ar: "كتاب حياتها (سيرة ذاتية)" },
      { en: "The Foundations", ar: "التأسيسات" },
    ],
    patronOf: { en: "Headache sufferers, Spanish writers, chess players", ar: "من يعانون من الصداع، الكتّاب الإسبان، لاعبي الشطرنج" },
  },
  {
    slug: "ignatius-of-loyola",
    name: { en: "St. Ignatius of Loyola", ar: "القديس إغناطيوس دي لويولا" },
    feast: { en: "July 31", ar: "٣١ يوليو" },
    years: "1491–1556",
    image: ignatiusImg,
    bio: {
      en: "Soldier turned saint who founded the Jesuits and wrote the Spiritual Exercises.",
      ar: "جندي تحوّل إلى قديس وأسّس اليسوعيين وألّف الرياضات الروحية."
    },
    fullBio: {
      en: "Born Íñigo López de Oñaz y Loyola in the Basque country of Spain, Ignatius was a soldier and courtier until a cannonball shattered his leg at the Battle of Pamplona. During his long recovery, reading the lives of Christ and the saints transformed him. He made a pilgrimage to the Holy Land, studied theology in Paris, and gathered six companions who together formed the Society of Jesus (Jesuits) in 1540. The Jesuits became the most influential religious order of the Counter-Reformation, establishing schools, universities, and missions worldwide. His 'Spiritual Exercises' remain one of the most influential guides to prayer and discernment.",
      ar: "وُلد إنييغو لوبيز دي أونياث إي لويولا في بلاد الباسك بإسبانيا. كان جنديًّا ورجل بلاط حتى حطّمت قذيفة مدفع ساقه في معركة بامبلونا. خلال فترة نقاهته الطويلة، غيّرته قراءة حياة المسيح والقديسين. قام بحج إلى الأرض المقدسة ودرس اللاهوت في باريس وجمع ستة رفاق شكّلوا معًا جمعية يسوع (اليسوعيين) عام ١٥٤٠. أصبح اليسوعيون أكثر الرهبنات تأثيرًا في الإصلاح المضاد وأسّسوا مدارس وجامعات وإرساليات حول العالم. تبقى \"رياضاته الروحية\" من أكثر الأدلّة تأثيرًا في الصلاة والتمييز."
    },
    sayings: [
      { en: "Go forth and set the world on fire.", ar: "انطلقوا وأشعلوا العالم نارًا." },
      { en: "Teach us to give and not to count the cost.", ar: "علّمنا أن نعطي دون أن نحسب الثمن." },
      { en: "In all things, to love and to serve.", ar: "في كل شيء، أن نحب ونخدم." },
      { en: "Take, Lord, and receive all my liberty, my memory, my understanding, and my entire will.", ar: "خذ يا رب واقبل كل حريتي وذاكرتي وفهمي وإرادتي كلها." },
    ],
    books: [
      { en: "The Spiritual Exercises", ar: "الرياضات الروحية" },
      { en: "The Autobiography of St. Ignatius", ar: "سيرة القديس إغناطيوس الذاتية" },
      { en: "Constitutions of the Society of Jesus", ar: "دستور جمعية يسوع" },
      { en: "Letters and Instructions", ar: "الرسائل والتعليمات" },
    ],
    patronOf: { en: "Soldiers, educators, Jesuits, spiritual retreats", ar: "الجنود، المربّين، اليسوعيين، الخلوات الروحية" },
  },
  {
    slug: "catherine-of-siena",
    name: { en: "St. Catherine of Siena", ar: "القديسة كاترينا السيانية" },
    feast: { en: "April 29", ar: "٢٩ أبريل" },
    years: "1347–1380",
    image: catherineSienaImg,
    bio: {
      en: "Dominican mystic, Doctor of the Church, and bold adviser to popes.",
      ar: "صوفية دومينيكانية ومعلّمة في الكنيسة ومستشارة جريئة للبابوات."
    },
    fullBio: {
      en: "Born the 24th of 25 children in Siena, Italy, Catherine experienced mystical visions from age six. She became a Dominican tertiary and devoted herself to prayer, fasting, and serving the sick and poor. She received the stigmata (invisible during her lifetime) and experienced a mystical marriage with Christ. Despite being a laywoman with no formal education, she boldly corresponded with popes, kings, and queens. She played a crucial role in persuading Pope Gregory XI to return from Avignon to Rome. Her masterwork 'The Dialogue' is a profound treatise on divine providence and the spiritual life. She was declared a Doctor of the Church in 1970.",
      ar: "وُلدت كالطفلة الرابعة والعشرين من ٢٥ طفلًا في سيينا بإيطاليا. اختبرت كاترينا رؤى صوفية منذ سن السادسة. أصبحت راهبة دومينيكانية من الرتبة الثالثة وكرّست نفسها للصلاة والصوم وخدمة المرضى والفقراء. نالت وسوم المسيح (غير مرئية خلال حياتها) واختبرت زواجًا صوفيًّا مع المسيح. رغم كونها علمانية بدون تعليم رسمي، راسلت بجرأة البابوات والملوك والملكات. لعبت دورًا حاسمًا في إقناع البابا غريغوريوس الحادي عشر بالعودة من أفينيون إلى روما. تحفتها \"الحوار\" رسالة عميقة عن العناية الإلهية والحياة الروحية. أُعلنت معلّمة في الكنيسة عام ١٩٧٠."
    },
    sayings: [
      { en: "Be who God meant you to be and you will set the world on fire.", ar: "كن من أرادك الله أن تكون وستشعل العالم نارًا." },
      { en: "All the way to heaven is heaven, because Jesus said, 'I am the Way.'", ar: "كل الطريق إلى السماء هو سماء، لأن يسوع قال: \"أنا الطريق\"." },
      { en: "Nothing great is ever achieved without much enduring.", ar: "لا يُنجز شيء عظيم أبدًا بدون صبر كثير." },
    ],
    books: [
      { en: "The Dialogue of Divine Providence", ar: "حوار العناية الإلهية" },
      { en: "Letters of St. Catherine", ar: "رسائل القديسة كاترينا" },
      { en: "The Prayers of Catherine of Siena", ar: "صلوات كاترينا السيانية" },
    ],
    patronOf: { en: "Italy, nurses, firefighters, Europe, miscarriages", ar: "إيطاليا، الممرضات، رجال الإطفاء، أوروبا، حالات الإجهاض" },
  },
  {
    slug: "john-paul-ii",
    name: { en: "St. John Paul II", ar: "القديس يوحنا بولس الثاني" },
    feast: { en: "October 22", ar: "٢٢ أكتوبر" },
    years: "1920–2005",
    image: johnPaulIIImg,
    bio: {
      en: "Pope for 27 years who helped end communism and championed human dignity.",
      ar: "بابا لمدة ٢٧ عامًا ساهم في إنهاء الشيوعية ودافع عن كرامة الإنسان."
    },
    fullBio: {
      en: "Born Karol Józef Wojtyła in Wadowice, Poland, he lost his mother, brother, and father by age 20. He studied secretly during the Nazi occupation and was ordained in 1946. Elected pope in 1978, he was the first non-Italian pope in 455 years. He survived an assassination attempt in 1981, forgiving his would-be assassin. He traveled to 129 countries, canonized 482 saints, and played a pivotal role in the fall of communism in Eastern Europe. He instituted World Youth Day, developed the revolutionary Theology of the Body, and wrote 14 encyclicals. He continued his ministry even while suffering from Parkinson's disease, teaching the world the dignity of suffering.",
      ar: "وُلد كارول يوزف فويتيوا في فادوفيتسه ببولندا. فقد أمه وأخاه وأباه قبل بلوغه العشرين. درس سرًّا خلال الاحتلال النازي ورُسم كاهنًا عام ١٩٤٦. انتُخب بابا عام ١٩٧٨ ليكون أول بابا غير إيطالي منذ ٤٥٥ عامًا. نجا من محاولة اغتيال عام ١٩٨١ وسامح مَن حاول قتله. سافر إلى ١٢٩ دولة وطوّب ٤٨٢ قديسًا ولعب دورًا محوريًّا في سقوط الشيوعية في أوروبا الشرقية. أسّس يوم الشباب العالمي وطوّر لاهوت الجسد الثوري وكتب ١٤ رسالة عامة. واصل خدمته حتى وهو يعاني من مرض باركنسون معلّمًا العالم كرامة المعاناة."
    },
    sayings: [
      { en: "Do not be afraid. Open wide the doors for Christ.", ar: "لا تخافوا. افتحوا الأبواب على مصراعيها للمسيح." },
      { en: "The future starts today, not tomorrow.", ar: "المستقبل يبدأ اليوم لا غدًا." },
      { en: "Freedom consists not in doing what we like, but in having the right to do what we ought.", ar: "الحرية لا تكمن في فعل ما نحب بل في أن يكون لنا الحق في فعل ما يجب." },
      { en: "Have no fear of moving into the unknown.", ar: "لا تخف من الانتقال إلى المجهول." },
    ],
    books: [
      { en: "Theology of the Body", ar: "لاهوت الجسد" },
      { en: "Crossing the Threshold of Hope", ar: "عبور عتبة الرجاء" },
      { en: "Fides et Ratio (Faith and Reason)", ar: "الإيمان والعقل" },
      { en: "Redemptor Hominis", ar: "فادي الإنسان" },
      { en: "Veritatis Splendor", ar: "بهاء الحقيقة" },
    ],
    patronOf: { en: "World Youth Day, families, young people", ar: "يوم الشباب العالمي، العائلات، الشباب" },
  },
  {
    slug: "padre-pio",
    name: { en: "St. Padre Pio", ar: "القديس الأب بيو" },
    feast: { en: "September 23", ar: "٢٣ سبتمبر" },
    years: "1887–1968",
    image: padrePioImg,
    bio: {
      en: "Capuchin friar who bore the stigmata for 50 years and had miraculous gifts.",
      ar: "راهب كبوشي حمل وسوم المسيح لمدة ٥٠ عامًا وامتلك مواهب معجزية."
    },
    fullBio: {
      en: "Born Francesco Forgione in Pietrelcina, Italy, he entered the Capuchin Order at 15. In 1918, he received the stigmata while praying before a crucifix — wounds that remained visible and bleeding for 50 years until his death, when they healed without a scar. He was renowned for supernatural gifts including bilocation, healing, prophecy, and the ability to read souls during confession. He heard confessions for up to 16 hours a day, drawing penitents from around the world. He founded the Casa Sollievo della Sofferenza (Home for the Relief of Suffering), a major hospital in San Giovanni Rotondo. His Masses were deeply moving, often lasting hours as he mystically participated in Christ's Passion.",
      ar: "وُلد فرانشيسكو فورجيوني في بييتريلتشينا بإيطاليا. دخل الرهبنة الكبوشية في سن الخامسة عشرة. عام ١٩١٨ نال وسوم المسيح أثناء الصلاة أمام صليب — جراحات بقيت مرئية ونازفة لمدة ٥٠ عامًا حتى وفاته حين شُفيت بدون ندبة. اشتهر بمواهب خارقة تشمل التواجد في مكانين والشفاء والنبوءة والقدرة على قراءة النفوس أثناء الاعتراف. كان يسمع اعترافات حتى ١٦ ساعة يوميًّا مستقطبًا تائبين من حول العالم. أسّس بيت تخفيف المعاناة، مستشفى كبير في سان جيوفاني روتوندو. كانت قداساته مؤثرة عميقًا وتستمر ساعات أحيانًا إذ كان يشارك صوفيًّا في آلام المسيح."
    },
    sayings: [
      { en: "Pray, hope, and don't worry.", ar: "صلِّ وارجُ ولا تقلق." },
      { en: "Prayer is the best weapon we possess. It is the key that opens the heart of God.", ar: "الصلاة أفضل سلاح نملكه. إنها المفتاح الذي يفتح قلب الله." },
      { en: "The rosary is the weapon for these times.", ar: "المسبحة هي سلاح هذا الزمن." },
      { en: "Do not worry about tomorrow, for tomorrow will worry about itself.", ar: "لا تقلقوا بشأن الغد فالغد يقلق بشأن نفسه." },
    ],
    books: [
      { en: "Letters (Epistolario)", ar: "الرسائل" },
      { en: "Words of Light: Spiritual Counsel", ar: "كلمات نور: إرشاد روحي" },
    ],
    patronOf: { en: "Civil defense volunteers, adolescents, stress relief", ar: "متطوعي الدفاع المدني، المراهقين، تخفيف التوتر" },
  },
  {
    slug: "augustine-of-hippo",
    name: { en: "St. Augustine of Hippo", ar: "القديس أوغسطينوس" },
    feast: { en: "August 28", ar: "٢٨ أغسطس" },
    years: "354–430",
    image: augustineImg,
    bio: {
      en: "After a dramatic conversion, he became one of the most influential Church Fathers.",
      ar: "بعد اهتداء درامي أصبح أحد أكثر آباء الكنيسة تأثيرًا."
    },
    fullBio: {
      en: "Born in Thagaste (modern Algeria), Augustine led a dissolute youth, fathering a son out of wedlock and embracing Manichaeism. His mother St. Monica prayed tirelessly for his conversion. After hearing St. Ambrose preach in Milan and reading Paul's Letter to the Romans, he experienced a dramatic conversion at age 31. Ordained a priest and later Bishop of Hippo, he became the most influential theologian of Western Christianity. His 'Confessions' is the first great autobiography in Western literature — a profound meditation on sin, grace, and God's mercy. 'The City of God,' written after the fall of Rome, shaped Christian political theology for centuries.",
      ar: "وُلد في طاغاست (الجزائر حاليًّا). عاش أوغسطينوس شبابًا ماجنًا فأنجب ابنًا خارج الزواج واعتنق المانوية. صلّت أمه القديسة مونيكا بلا كلل من أجل اهتدائه. بعد سماعه وعظ القديس أمبروسيوس في ميلانو وقراءة رسالة بولس إلى الرومان، اختبر اهتداءً دراميًّا في سن الحادية والثلاثين. رُسم كاهنًا ثم أسقفًا لهيبو وأصبح أكثر لاهوتيي المسيحية الغربية تأثيرًا. \"اعترافاته\" أول سيرة ذاتية عظيمة في الأدب الغربي — تأمل عميق في الخطيئة والنعمة ورحمة الله. \"مدينة الله\" التي كتبها بعد سقوط روما شكّلت اللاهوت السياسي المسيحي لقرون."
    },
    sayings: [
      { en: "Our hearts are restless until they rest in You, O Lord.", ar: "قلوبنا قلقة حتى تستريح فيك يا رب." },
      { en: "Late have I loved you, beauty so old and so new: late have I loved you.", ar: "متأخرًا أحببتك أيها الجمال القديم والجديد: متأخرًا أحببتك." },
      { en: "The truth is like a lion; you don't have to defend it. Let it loose; it will defend itself.", ar: "الحقيقة كالأسد؛ لا تحتاج أن تدافع عنها. أطلقها وستدافع عن نفسها." },
      { en: "God provides the wind, but man must raise the sails.", ar: "الله يوفّر الرياح لكن على الإنسان أن يرفع الأشرعة." },
    ],
    books: [
      { en: "Confessions", ar: "الاعترافات" },
      { en: "The City of God", ar: "مدينة الله" },
      { en: "On the Trinity", ar: "في الثالوث" },
      { en: "On Christian Doctrine", ar: "في التعليم المسيحي" },
      { en: "Enchiridion (Handbook on Faith, Hope, and Love)", ar: "دليل الإيمان والرجاء والمحبة" },
    ],
    patronOf: { en: "Brewers, printers, theologians, sore eyes", ar: "صانعي البيرة، الطباعين، اللاهوتيين، أمراض العيون" },
  },
  {
    slug: "joseph",
    name: { en: "St. Joseph", ar: "القديس يوسف" },
    feast: { en: "March 19", ar: "١٩ مارس" },
    years: "1st century",
    image: josephImg,
    bio: {
      en: "Foster father of Jesus and spouse of the Virgin Mary, model of silent faithfulness.",
      ar: "الأب الحاضن ليسوع وعريس مريم العذراء، نموذج الأمانة الصامتة."
    },
    fullBio: {
      en: "St. Joseph, a descendant of King David, was a carpenter in Nazareth. He was betrothed to Mary when the angel Gabriel announced to her that she would bear the Son of God. When Joseph learned of Mary's pregnancy, he planned to divorce her quietly, but an angel appeared to him in a dream, revealing the divine origin of the child. He faithfully protected the Holy Family, fleeing to Egypt to escape Herod's massacre of the innocents and returning to settle in Nazareth. Though Scripture records none of his words, his actions reveal a man of deep faith, obedience, and tender love. Pope Pius IX declared him patron of the Universal Church in 1870.",
      ar: "القديس يوسف من نسل الملك داود كان نجارًا في الناصرة. كان مخطوبًا لمريم حين بشّرها الملاك جبرائيل بأنها ستحمل ابن الله. عندما علم يوسف بحمل مريم عزم على تركها سرًّا لكن ملاكًا ظهر له في حلم كاشفًا الأصل الإلهي للطفل. حمى العائلة المقدسة بأمانة هاربًا إلى مصر من مذبحة هيرودس للأبرياء وعائدًا ليستقر في الناصرة. رغم أن الكتاب المقدس لم يسجّل أي كلمة من كلماته، تكشف أفعاله رجلًا ذا إيمان عميق وطاعة وحب رقيق. أعلنه البابا بيوس التاسع شفيع الكنيسة الجامعة عام ١٨٧٠."
    },
    sayings: [
      { en: "He did as the angel of the Lord commanded him. (Mt 1:24)", ar: "فَفَعَلَ كَمَا أَمَرَهُ مَلاَكُ الرَّبّ. (متى ١: ٢٤)" },
      { en: "Rise, take the child and his mother, and flee to Egypt. (Mt 2:13)", ar: "قُمْ وَخُذِ الصَّبِيَّ وَأُمَّهُ وَاهْرُبْ إِلَى مِصْرَ. (متى ٢: ١٣)" },
    ],
    books: [],
    patronOf: { en: "Universal Church, workers, fathers, the dying, housing", ar: "الكنيسة الجامعة، العمال، الآباء، المحتضرين، السكن" },
  },
  {
    slug: "patrick",
    name: { en: "St. Patrick", ar: "القديس باتريك" },
    feast: { en: "March 17", ar: "١٧ مارس" },
    years: "385–461",
    image: patrickImg,
    bio: {
      en: "Apostle of Ireland who converted the entire nation using the shamrock.",
      ar: "رسول أيرلندا الذي حوّل الأمة بأكملها مستخدمًا نبتة النفل."
    },
    fullBio: {
      en: "Born in Roman Britain, Patrick was kidnapped at 16 by Irish raiders and enslaved for six years as a shepherd. During captivity, he turned to God in fervent prayer. After escaping and returning home, he received a vision calling him back to Ireland. Ordained a bishop, he returned to convert the pagan Irish to Christianity. He used the shamrock to explain the Holy Trinity — three persons in one God. He established monasteries, schools, and churches across Ireland, and the island became a center of learning and Christian civilization. His 'Confession' and 'Letter to Coroticus' are the only surviving writings, revealing a humble man of deep faith.",
      ar: "وُلد في بريطانيا الرومانية واختُطف في سن السادسة عشرة من غزاة أيرلنديين واستُعبد ست سنوات كراعي غنم. خلال الأسر توجّه إلى الله بصلاة حارّة. بعد هروبه وعودته إلى وطنه رأى رؤيا تدعوه للعودة إلى أيرلندا. رُسم أسقفًا وعاد ليحوّل الأيرلنديين الوثنيين إلى المسيحية. استخدم نبتة النفل لشرح الثالوث الأقدس — ثلاثة أقانيم في إله واحد. أسّس أديرة ومدارس وكنائس عبر أيرلندا فأصبحت الجزيرة مركزًا للعلم والحضارة المسيحية. \"اعترافه\" و\"رسالته إلى كوروتيكوس\" هما الكتابتان الوحيدتان الباقيتان وتكشفان رجلًا متواضعًا ذا إيمان عميق."
    },
    sayings: [
      { en: "Christ beside me, Christ before me, Christ behind me, Christ within me.", ar: "المسيح بجانبي، المسيح أمامي، المسيح خلفي، المسيح في داخلي." },
      { en: "I arise today through a mighty strength, the invocation of the Trinity.", ar: "أنهض اليوم بقوة عظيمة، باستدعاء الثالوث." },
      { en: "If I have any worth, it is to live my life for God.", ar: "إن كان لي أي قيمة فهي أن أحيا حياتي لله." },
    ],
    books: [
      { en: "Confession (Confessio)", ar: "الاعتراف" },
      { en: "Letter to Coroticus", ar: "رسالة إلى كوروتيكوس" },
      { en: "St. Patrick's Breastplate (Lorica)", ar: "درع القديس باتريك" },
    ],
    patronOf: { en: "Ireland, engineers, excluded people, Nigeria", ar: "أيرلندا، المهندسين، المنبوذين، نيجيريا" },
  },
  {
    slug: "anthony-of-padua",
    name: { en: "St. Anthony of Padua", ar: "القديس أنطونيوس البادواني" },
    feast: { en: "June 13", ar: "١٣ يونيو" },
    years: "1195–1231",
    image: anthonyPaduaImg,
    bio: {
      en: "Franciscan friar famed for powerful preaching and finding lost things.",
      ar: "راهب فرنسيسكاني اشتهر بوعظه القوي وإيجاد الأشياء المفقودة."
    },
    fullBio: {
      en: "Born Fernando Martins de Bulhões in Lisbon, Portugal, he first joined the Augustinian canons before transferring to the Franciscan Order, inspired by the martyrdom of five Franciscan missionaries in Morocco. Originally intended for a quiet life of study, his extraordinary preaching ability was discovered by accident when he was asked to give an impromptu sermon. St. Francis himself appointed him the first theology teacher of the Order. Known as the 'Hammer of Heretics,' his sermons drew crowds of thousands. He died at just 36 and was canonized less than a year later — one of the fastest canonizations in history. His tongue was found incorrupt when his tomb was opened 30 years after death.",
      ar: "وُلد فرناندو مارتينس دي بولهويس في لشبونة بالبرتغال. انضم أولًا إلى شمامسة القديس أوغسطينوس قبل أن ينتقل إلى الرهبنة الفرنسيسكانية بإلهام من استشهاد خمسة مرسلين فرنسيسكان في المغرب. كان مُعدًّا أصلًا لحياة دراسة هادئة لكن اكتُشفت قدرته الخطابية بالصدفة عندما طُلب منه إلقاء عظة ارتجالية. عيّنه القديس فرنسيس نفسه أول معلّم لاهوت في الرهبنة. عُرف بـ\"مطرقة الهراطقة\" واستقطبت عظاته آلافًا. توفي في سن ٣٦ فقط وطُوّب بعد أقل من سنة — من أسرع التطويبات في التاريخ. وُجد لسانه سليمًا حين فُتح قبره بعد ٣٠ عامًا من وفاته."
    },
    sayings: [
      { en: "Actions speak louder than words; let your words teach and your actions speak.", ar: "الأفعال أبلغ من الكلمات؛ فلتُعلّم كلماتك ولتتكلّم أفعالك." },
      { en: "The life of the body is the soul; the life of the soul is God.", ar: "حياة الجسد هي الروح؛ وحياة الروح هي الله." },
      { en: "Attribute to God every good that you have received.", ar: "انسب إلى الله كل خير تلقّيته." },
    ],
    books: [
      { en: "Sermons for Feast Days", ar: "عظات للأعياد" },
      { en: "Sermons for Sundays and Festivals", ar: "عظات الآحاد والأعياد" },
    ],
    patronOf: { en: "Lost things, the poor, travelers, mail, elderly", ar: "الأشياء المفقودة، الفقراء، المسافرين، البريد، المسنين" },
  },
  {
    slug: "monica",
    name: { en: "St. Monica", ar: "القديسة مونيكا" },
    feast: { en: "August 27", ar: "٢٧ أغسطس" },
    years: "332–387",
    image: monicaImg,
    bio: {
      en: "Mother of St. Augustine who prayed for his conversion for 17 years.",
      ar: "والدة القديس أوغسطينوس التي صلّت من أجل اهتدائه ١٧ عامًا."
    },
    fullBio: {
      en: "Born in Thagaste, North Africa, Monica was raised Christian but married a pagan Roman named Patricius. She endured his violent temper and infidelity with patience and prayer, eventually leading to his conversion and baptism. Her greatest sorrow was watching her brilliant son Augustine embrace a dissolute lifestyle and the Manichaean heresy. For over 17 years, she followed him from Africa to Rome to Milan, praying and weeping constantly. A bishop once consoled her: 'It is impossible that the son of so many tears should perish.' Her prayers were answered when Augustine was baptized by St. Ambrose in Milan in 387. She died shortly after at Ostia, having witnessed her life's greatest prayer answered.",
      ar: "وُلدت في طاغاست بشمال أفريقيا. نشأت مونيكا مسيحية لكنها تزوجت وثنيًّا رومانيًّا يُدعى باتريسيوس. احتملت طبعه العنيف وخيانته بصبر وصلاة حتى اهتدى واعتمد. كان حزنها الأكبر مشاهدة ابنها العبقري أوغسطينوس يعتنق حياة ماجنة وبدعة المانوية. لأكثر من ١٧ عامًا تبعته من أفريقيا إلى روما إلى ميلانو مصلّية وباكية باستمرار. عزّاها أسقف قائلًا: \"يستحيل أن يهلك ابن هذه الدموع الكثيرة\". استُجيبت صلواتها حين اعتمد أوغسطينوس على يد القديس أمبروسيوس في ميلانو عام ٣٨٧. توفيت بعدها بفترة قصيرة في أوستيا بعد أن شهدت استجابة أعظم صلوات حياتها."
    },
    sayings: [
      { en: "Nothing is far from God.", ar: "لا شيء بعيد عن الله." },
      { en: "Son, nothing in this world now affords me delight. What do I here any longer?", ar: "يا بني، لا شيء في هذا العالم يسعدني بعد الآن. ما الذي يبقيني هنا؟" },
    ],
    books: [],
    patronOf: { en: "Mothers, wives, abuse victims, alcoholics, converts", ar: "الأمهات، الزوجات، ضحايا الإساءة، مدمني الكحول، المهتدين" },
  },
  {
    slug: "maximilian-kolbe",
    name: { en: "St. Maximilian Kolbe", ar: "القديس ماكسيميليان كولبي" },
    feast: { en: "August 14", ar: "١٤ أغسطس" },
    years: "1894–1941",
    image: maximilianKolbeImg,
    bio: {
      en: "Franciscan priest who died in place of a stranger at Auschwitz.",
      ar: "كاهن فرنسيسكاني مات بدلًا من غريب في أوشفيتز."
    },
    fullBio: {
      en: "Born Rajmund Kolbe in Russian-occupied Poland, he had a childhood vision of the Virgin Mary offering him two crowns — one white for purity and one red for martyrdom — and he chose both. He joined the Conventual Franciscans, earned two doctorates in Rome, and founded the Militia Immaculatae (Army of the Immaculate) to convert sinners through Mary. He established a religious community in Poland called Niepokalanów (City of the Immaculate), which grew to 762 friars — the largest Catholic religious house in the world. He pioneered the use of radio, magazines, and newspapers for evangelization. Arrested by the Nazis in 1941, he was sent to Auschwitz. When a prisoner was selected for execution, Kolbe volunteered to take his place, spending two weeks in a starvation bunker before being killed by lethal injection.",
      ar: "وُلد رايموند كولبي في بولندا تحت الاحتلال الروسي. في طفولته رأى رؤيا للعذراء مريم تعرض عليه تاجين — أبيض للطهارة وأحمر للشهادة — فاختار كليهما. انضم إلى الفرنسيسكان الأديرة ونال شهادتي دكتوراه في روما وأسّس جيش مريم البريئة لتحويل الخطأة من خلال مريم. أسّس جماعة دينية في بولندا تُدعى نيبوكالانوف (مدينة البريئة) نمت لتضمّ ٧٦٢ راهبًا — أكبر بيت ديني كاثوليكي في العالم. كان رائدًا في استخدام الراديو والمجلات والصحف للتبشير. اعتُقل من النازيين عام ١٩٤١ وأُرسل إلى أوشفيتز. عندما اختير سجين للإعدام تطوّع كولبي ليحلّ محله وقضى أسبوعين في زنزانة التجويع قبل أن يُقتل بحقنة مميتة."
    },
    sayings: [
      { en: "The most deadly poison of our times is indifference.", ar: "أكثر سموم عصرنا فتكًا هو اللامبالاة." },
      { en: "No one in the world can change Truth. What we can do and should do is to seek truth and to serve it when we have found it.", ar: "لا أحد في العالم يمكنه تغيير الحقيقة. ما يمكننا ويجب أن نفعله هو البحث عن الحقيقة وخدمتها حين نجدها." },
      { en: "If angels could be jealous of men, they would be so for one reason: Holy Communion.", ar: "لو كان بإمكان الملائكة أن تغار من البشر لكان ذلك لسبب واحد: القربان المقدس." },
    ],
    books: [
      { en: "Letters from Auschwitz", ar: "رسائل من أوشفيتز" },
      { en: "Militia Immaculatae writings", ar: "كتابات جيش مريم البريئة" },
    ],
    patronOf: { en: "Journalists, prisoners, pro-life movement, drug addicts, families", ar: "الصحفيين، السجناء، حركة الحياة، مدمني المخدرات، العائلات" },
  },
];

export function getSaintBySlug(slug: string): Saint | undefined {
  return saints.find((s) => s.slug === slug);
}
