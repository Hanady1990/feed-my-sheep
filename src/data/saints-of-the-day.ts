export interface SaintOfTheDay {
  name: { en: string; ar: string };
  feast: { en: string; ar: string };
  years: string;
  bio: { en: string; ar: string };
  saying: { en: string; ar: string };
  patronOf: { en: string; ar: string };
  image?: string;
}

export const saintsOfTheDay: SaintOfTheDay[] = [
  {
    name: { en: "St. Francis of Assisi", ar: "القديس فرنسيس الأسيزي" },
    feast: { en: "October 4", ar: "٤ أكتوبر" },
    years: "1181–1226",
    bio: {
      en: "Founder of the Franciscan Order, Francis embraced radical poverty and simplicity. He received the stigmata and is known for his deep love of creation and peace.",
      ar: "مؤسس الرهبنة الفرنسيسكانية، اعتنق الفقر المدقع والبساطة. نال وسوم المسيح وعُرف بحبه العميق للخليقة والسلام."
    },
    saying: {
      en: "\"Lord, make me an instrument of your peace.\"",
      ar: "\"يا رب، اجعلني أداة سلامك.\""
    },
    patronOf: { en: "Animals, ecology, merchants, Italy", ar: "الحيوانات، البيئة، التجار، إيطاليا" },
  },
  {
    name: { en: "St. Thérèse of Lisieux", ar: "القديسة تريزا الطفل يسوع" },
    feast: { en: "October 1", ar: "١ أكتوبر" },
    years: "1873–1897",
    bio: {
      en: "Known as 'The Little Flower,' she entered the Carmelite convent at 15 and developed 'the Little Way' of spiritual childhood — doing small things with great love.",
      ar: "عُرفت بـ\"الزهرة الصغيرة\"، دخلت دير الكرمليات في سن الخامسة عشرة وطوّرت \"الطريقة الصغيرة\" للطفولة الروحية — فعل الأشياء الصغيرة بحبٍّ عظيم."
    },
    saying: {
      en: "\"Miss no single opportunity of making some small sacrifice.\"",
      ar: "\"لا تفوّت أي فرصة لتقديم تضحية صغيرة.\""
    },
    patronOf: { en: "Missionaries, florists, France", ar: "المرسلين، بائعي الزهور، فرنسا" },
  },
  {
    name: { en: "St. Thomas Aquinas", ar: "القديس توما الأكويني" },
    feast: { en: "January 28", ar: "٢٨ يناير" },
    years: "1225–1274",
    bio: {
      en: "The 'Angelic Doctor' and greatest theologian of the Church, he authored the Summa Theologica, harmonizing faith and reason in a monumental synthesis of Christian thought.",
      ar: "\"المعلّم الملائكي\" وأعظم لاهوتيي الكنيسة، ألّف الخلاصة اللاهوتية موفّقًا بين الإيمان والعقل في تركيبة ضخمة للفكر المسيحي."
    },
    saying: {
      en: "\"To one who has faith, no explanation is necessary. To one without faith, no explanation is possible.\"",
      ar: "\"من لديه إيمان لا يحتاج إلى تفسير. ومن ليس لديه إيمان لا ينفع معه تفسير.\""
    },
    patronOf: { en: "Students, scholars, universities, theologians", ar: "الطلاب، العلماء، الجامعات، اللاهوتيين" },
  },
  {
    name: { en: "St. Teresa of Ávila", ar: "القديسة تريزا الأفيلية" },
    feast: { en: "October 15", ar: "١٥ أكتوبر" },
    years: "1515–1582",
    bio: {
      en: "A mystic and Doctor of the Church, she reformed the Carmelite Order and authored masterpieces on prayer including 'The Interior Castle' and 'The Way of Perfection.'",
      ar: "صوفية ومعلّمة في الكنيسة، أصلحت الرهبنة الكرملية وألّفت روائع عن الصلاة منها \"القلعة الداخلية\" و\"طريق الكمال\"."
    },
    saying: {
      en: "\"Christ has no body now but yours.\"",
      ar: "\"ليس للمسيح الآن جسد سوى جسدك.\""
    },
    patronOf: { en: "Headache sufferers, Spanish writers", ar: "من يعانون من الصداع، الكتّاب الإسبان" },
  },
  {
    name: { en: "St. Ignatius of Loyola", ar: "القديس إغناطيوس دي لويولا" },
    feast: { en: "July 31", ar: "٣١ يوليو" },
    years: "1491–1556",
    bio: {
      en: "A soldier turned saint, he founded the Society of Jesus (Jesuits) and authored the Spiritual Exercises, a transformative guide to discernment and prayer.",
      ar: "جندي تحوّل إلى قديس، أسّس جمعية يسوع (اليسوعيين) وألّف الرياضات الروحية، دليل تحويلي للتمييز والصلاة."
    },
    saying: {
      en: "\"Go forth and set the world on fire.\"",
      ar: "\"انطلقوا وأشعلوا العالم نارًا.\""
    },
    patronOf: { en: "Soldiers, educators, Jesuits", ar: "الجنود، المربّين، اليسوعيين" },
  },
  {
    name: { en: "St. Catherine of Siena", ar: "القديسة كاترينا السيانية" },
    feast: { en: "April 29", ar: "٢٩ أبريل" },
    years: "1347–1380",
    bio: {
      en: "A Dominican mystic and Doctor of the Church, she boldly advised popes, negotiated peace, and authored 'The Dialogue,' a spiritual masterpiece on divine providence.",
      ar: "صوفية دومينيكانية ومعلّمة في الكنيسة، نصحت البابوات بجرأة وتوسّطت للسلام وألّفت \"الحوار\"، تحفة روحية عن العناية الإلهية."
    },
    saying: {
      en: "\"Be who God meant you to be and you will set the world on fire.\"",
      ar: "\"كن من أرادك الله أن تكون وستشعل العالم نارًا.\""
    },
    patronOf: { en: "Italy, nurses, firefighters, Europe", ar: "إيطاليا، الممرضات، رجال الإطفاء، أوروبا" },
  },
  {
    name: { en: "St. John Paul II", ar: "القديس يوحنا بولس الثاني" },
    feast: { en: "October 22", ar: "٢٢ أكتوبر" },
    years: "1920–2005",
    bio: {
      en: "Pope for 27 years, he helped end communism in Europe, traveled the world spreading the Gospel, championed human dignity, and developed the Theology of the Body.",
      ar: "بابا لمدة ٢٧ عامًا، ساهم في إنهاء الشيوعية في أوروبا، وطاف العالم ناشرًا الإنجيل، ودافع عن كرامة الإنسان، وطوّر لاهوت الجسد."
    },
    saying: {
      en: "\"Do not be afraid. Open wide the doors for Christ.\"",
      ar: "\"لا تخافوا. افتحوا الأبواب على مصراعيها للمسيح.\""
    },
    patronOf: { en: "World Youth Day, families", ar: "يوم الشباب العالمي، العائلات" },
  },
  {
    name: { en: "St. Padre Pio", ar: "القديس الأب بيو" },
    feast: { en: "September 23", ar: "٢٣ سبتمبر" },
    years: "1887–1968",
    bio: {
      en: "A Capuchin friar who bore the stigmata for 50 years, he was renowned for his gifts of healing, bilocation, reading souls in confession, and profound prayer life.",
      ar: "راهب كبوشي حمل وسوم المسيح لمدة ٥٠ عامًا، اشتهر بمواهب الشفاء والتواجد في مكانين والقراءة في النفوس أثناء الاعتراف وحياة الصلاة العميقة."
    },
    saying: {
      en: "\"Pray, hope, and don't worry.\"",
      ar: "\"صلِّ وارجُ ولا تقلق.\""
    },
    patronOf: { en: "Civil defense volunteers, adolescents, stress relief", ar: "متطوعي الدفاع المدني، المراهقين، تخفيف التوتر" },
  },
  {
    name: { en: "St. Augustine of Hippo", ar: "القديس أوغسطينوس" },
    feast: { en: "August 28", ar: "٢٨ أغسطس" },
    years: "354–430",
    bio: {
      en: "After a dramatic conversion, he became Bishop of Hippo and one of the most influential Church Fathers. His 'Confessions' and 'City of God' shaped Western theology.",
      ar: "بعد اهتداء درامي، أصبح أسقف هيبو وأحد أكثر آباء الكنيسة تأثيرًا. شكّلت \"الاعترافات\" و\"مدينة الله\" اللاهوت الغربي."
    },
    saying: {
      en: "\"Our hearts are restless until they rest in You, O Lord.\"",
      ar: "\"قلوبنا قلقة حتى تستريح فيك يا رب.\""
    },
    patronOf: { en: "Brewers, printers, theologians", ar: "صانعي البيرة، الطباعين، اللاهوتيين" },
  },
  {
    name: { en: "St. Joseph", ar: "القديس يوسف" },
    feast: { en: "March 19", ar: "١٩ مارس" },
    years: "1st century",
    bio: {
      en: "The foster father of Jesus and spouse of the Blessed Virgin Mary. A humble carpenter, he is the model of silent faithfulness, obedience, and fatherly love.",
      ar: "الأب الحاضن ليسوع وعريس مريم العذراء. نجّار متواضع، وهو نموذج الأمانة الصامتة والطاعة والحب الأبوي."
    },
    saying: {
      en: "\"He did as the angel of the Lord commanded him.\" (Mt 1:24)",
      ar: "\"فَفَعَلَ كَمَا أَمَرَهُ مَلاَكُ الرَّبّ.\" (متى ١: ٢٤)"
    },
    patronOf: { en: "Universal Church, workers, fathers, dying", ar: "الكنيسة الجامعة، العمال، الآباء، المحتضرين" },
  },
  {
    name: { en: "St. Patrick", ar: "القديس باتريك" },
    feast: { en: "March 17", ar: "١٧ مارس" },
    years: "385–461",
    bio: {
      en: "Kidnapped to Ireland as a slave, he escaped, became a priest, and returned to convert all of Ireland to Christianity, using the shamrock to explain the Trinity.",
      ar: "اختُطف إلى أيرلندا كعبد، هرب وأصبح كاهنًا، ثم عاد لتحويل أيرلندا كلها إلى المسيحية مستخدمًا نبتة النفل لشرح الثالوث."
    },
    saying: {
      en: "\"Christ beside me, Christ before me, Christ behind me, Christ within me.\"",
      ar: "\"المسيح بجانبي، المسيح أمامي، المسيح خلفي، المسيح في داخلي.\""
    },
    patronOf: { en: "Ireland, engineers, excluded people", ar: "أيرلندا، المهندسين، المنبوذين" },
  },
  {
    name: { en: "St. Anthony of Padua", ar: "القديس أنطونيوس البادواني" },
    feast: { en: "June 13", ar: "١٣ يونيو" },
    years: "1195–1231",
    bio: {
      en: "A Franciscan friar and Doctor of the Church, famed for his powerful preaching and miraculous intercession. He is invoked worldwide for finding lost things.",
      ar: "راهب فرنسيسكاني ومعلّم في الكنيسة، اشتهر بوعظه القوي وشفاعته المعجزية. يُستشفع به في جميع أنحاء العالم لإيجاد الأشياء المفقودة."
    },
    saying: {
      en: "\"Actions speak louder than words; let your words teach and your actions speak.\"",
      ar: "\"الأفعال أبلغ من الكلمات؛ فلتُعلّم كلماتك ولتتكلّم أفعالك.\""
    },
    patronOf: { en: "Lost things, the poor, travelers", ar: "الأشياء المفقودة، الفقراء، المسافرين" },
  },
  {
    name: { en: "St. Monica", ar: "القديسة مونيكا" },
    feast: { en: "August 27", ar: "٢٧ أغسطس" },
    years: "332–387",
    bio: {
      en: "Mother of St. Augustine, she prayed and wept for her son's conversion for over 17 years. Her persevering faith is a beacon for all mothers who pray for wayward children.",
      ar: "والدة القديس أوغسطينوس، صلّت وبكت من أجل اهتداء ابنها لأكثر من ١٧ عامًا. إيمانها المثابر منارة لكل أم تصلي من أجل أبنائها الضالين."
    },
    saying: {
      en: "\"Nothing is far from God.\"",
      ar: "\"لا شيء بعيد عن الله.\""
    },
    patronOf: { en: "Mothers, wives, abuse victims", ar: "الأمهات، الزوجات، ضحايا الإساءة" },
  },
  {
    name: { en: "St. Maximilian Kolbe", ar: "القديس ماكسيميليان كولبي" },
    feast: { en: "August 14", ar: "١٤ أغسطس" },
    years: "1894–1941",
    bio: {
      en: "A Franciscan priest who volunteered to die in place of a stranger at Auschwitz. He founded the Militia Immaculatae and used modern media to spread the faith.",
      ar: "كاهن فرنسيسكاني تطوّع للموت بدلًا من غريب في أوشفيتز. أسّس جيش مريم البريئة واستخدم وسائل الإعلام الحديثة لنشر الإيمان."
    },
    saying: {
      en: "\"The most deadly poison of our times is indifference.\"",
      ar: "\"أكثر سموم عصرنا فتكًا هو اللامبالاة.\""
    },
    patronOf: { en: "Journalists, prisoners, pro-life movement", ar: "الصحفيين، السجناء، حركة الحياة" },
  },
];

/** Returns a saint based on the day of the year, cycling through the list. */
export function getSaintOfTheDay(): SaintOfTheDay {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const dayOfYear = Math.floor((now.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
  return saintsOfTheDay[dayOfYear % saintsOfTheDay.length];
}
