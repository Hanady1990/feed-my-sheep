export interface CatechismRef {
  paragraph: string;
  text: string;
}

export interface Article {
  id: string;
  slug: string;
  section: "teachings" | "fathers" | "papal" | "vatican" | "heresies" | "social" | "saints";
  title: string;
  titleAr: string;
  subtitle?: string;
  subtitleAr?: string;
  author?: string;
  date?: string;
  readTime?: string;
  content: string;
  contentAr: string;
  catechismRefs: CatechismRef[];
  relatedIds: string[];
  tags: string[];
}

export const articles: Article[] = [
  // Teachings
  {
    id: "t-faith",
    slug: "faith-and-creed",
    section: "teachings",
    title: "Faith & Creed",
    titleAr: "الإيمان والعقيدة",
    subtitle: "The foundations of Catholic belief",
    subtitleAr: "أسس الإيمان الكاثوليكي",
    readTime: "8 min",
    content: `The Catholic faith is summarized in the Nicene Creed, professed at every Sunday Mass. This ancient formula, refined at the Councils of Nicaea (325) and Constantinople (381), articulates the core beliefs that unite all Catholics.\n\n## The Nature of God\n\nWe believe in one God, the Father almighty, maker of heaven and earth, of all things visible and invisible. This foundational truth affirms that God is the origin and end of all creation.\n\n## Jesus Christ, Son of God\n\nThe Creed professes that Jesus is "God from God, Light from Light, true God from true God, begotten, not made, consubstantial with the Father." This teaching, defended against Arianism, affirms the full divinity of Christ.\n\n## The Holy Spirit\n\nThe Spirit "proceeds from the Father and the Son" and "with the Father and the Son is adored and glorified." The Spirit is the Lord and giver of life, who spoke through the prophets.\n\n## One, Holy, Catholic, and Apostolic Church\n\nThe four marks of the Church — unity, holiness, catholicity, and apostolicity — describe her essential nature as founded by Christ and sustained by the Holy Spirit through the ages.`,
    contentAr: `يُلَخَّص الإيمان الكاثوليكي في قانون الإيمان النيقاوي، الذي يُتلى في كل قداس يوم الأحد. هذه الصيغة القديمة، التي صُقلت في مجمعَي نيقية (325) والقسطنطينية (381)، تُعبّر عن المعتقدات الجوهرية التي توحّد جميع الكاثوليك.\n\n## طبيعة الله\n\nنؤمن بإله واحد، الآب الضابط الكل، خالق السماء والأرض، كل ما يُرى وما لا يُرى. هذه الحقيقة الأساسية تُؤكّد أن الله هو أصل كل الخليقة وغايتها.\n\n## يسوع المسيح، ابن الله\n\nيُعلن قانون الإيمان أن يسوع هو \"إله من إله، نور من نور، إله حق من إله حق، مولود غير مخلوق، مساوٍ للآب في الجوهر.\" هذا التعليم، الذي دُوفع عنه ضد الآريوسية، يُؤكّد ألوهية المسيح الكاملة.\n\n## الروح القدس\n\nالروح \"المنبثق من الآب والابن\" و\"الذي هو مع الآب والابن مسجود له وممجّد.\" الروح هو الرب المحيي، الذي تكلّم بالأنبياء.\n\n## كنيسة واحدة، مقدسة، جامعة، رسولية\n\nالعلامات الأربع للكنيسة — الوحدة، القداسة، الجامعية، والرسولية — تصف طبيعتها الجوهرية كما أسّسها المسيح ويحفظها الروح القدس عبر العصور.`,
    catechismRefs: [
      { paragraph: "CCC 185-197", text: "The Creed as a summary of faith" },
      { paragraph: "CCC 198-231", text: "I believe in God the Father" },
      { paragraph: "CCC 422-682", text: "I believe in Jesus Christ" },
      { paragraph: "CCC 683-747", text: "I believe in the Holy Spirit" },
    ],
    relatedIds: ["t-salvation", "t-church"],
    tags: ["creed", "trinity", "nicaea"],
  },
  {
    id: "t-sacraments",
    slug: "the-seven-sacraments",
    section: "teachings",
    title: "Sacraments",
    titleAr: "الأسرار المقدسة",
    subtitle: "The seven sacraments of the Church",
    subtitleAr: "أسرار الكنيسة السبعة",
    readTime: "10 min",
    content: `The seven sacraments — Baptism, Confirmation, Eucharist, Penance, Anointing of the Sick, Holy Orders, and Matrimony — are efficacious signs of grace, instituted by Christ and entrusted to the Church.\n\n## Sacraments of Initiation\n\n**Baptism** is the gateway to life in the Spirit and the door that gives access to the other sacraments. Through Baptism we are freed from sin and reborn as children of God.\n\n**Confirmation** perfects baptismal grace and strengthens us to spread and defend the faith by word and action as true witnesses of Christ.\n\n**The Eucharist** is the source and summit of the Christian life. In it, Christ himself is truly, really, and substantially present — Body, Blood, Soul, and Divinity.\n\n## Sacraments of Healing\n\n**Penance and Reconciliation** provides forgiveness of sins committed after Baptism. Through the ministry of the priest, the penitent receives God's mercy.\n\n**Anointing of the Sick** gives special grace to those experiencing serious illness or old age, uniting their suffering to Christ's.\n\n## Sacraments at the Service of Communion\n\n**Holy Orders** configures men to serve the Church as bishops, priests, and deacons.\n\n**Matrimony** establishes a lifelong covenant between husband and wife, ordered to the good of the spouses and the procreation of children.`,
    contentAr: `الأسرار السبعة — المعمودية، التثبيت، القربان المقدس، التوبة، مسحة المرضى، الكهنوت، والزواج — هي علامات فعّالة للنعمة، أسّسها المسيح وأوكلها للكنيسة.\n\n## أسرار التنشئة\n\n**المعمودية** هي باب الحياة في الروح والبوابة التي تفتح الطريق إلى الأسرار الأخرى.\n\n**التثبيت** يُكمّل نعمة المعمودية ويُقوّينا لنشر الإيمان والدفاع عنه.\n\n**القربان المقدس** هو ينبوع الحياة المسيحية وقمّتها. فيه يحضر المسيح نفسه حقيقةً وجوهريًا.\n\n## أسرار الشفاء\n\n**التوبة والمصالحة** توفّر مغفرة الخطايا المرتكبة بعد المعمودية.\n\n**مسحة المرضى** تمنح نعمة خاصة لمن يعانون من مرض خطير أو شيخوخة.\n\n## أسرار خدمة الشركة\n\n**الكهنوت** يُهيّئ الرجال لخدمة الكنيسة كأساقفة وكهنة وشمامسة.\n\n**الزواج** يُنشئ عهدًا مدى الحياة بين الزوج والزوجة.`,
    catechismRefs: [
      { paragraph: "CCC 1210-1211", text: "The seven sacraments overview" },
      { paragraph: "CCC 1322-1419", text: "The Eucharist" },
      { paragraph: "CCC 1422-1498", text: "Penance and Reconciliation" },
    ],
    relatedIds: ["t-faith", "t-prayer"],
    tags: ["sacraments", "eucharist", "baptism"],
  },
  {
    id: "t-moral",
    slug: "moral-theology",
    section: "teachings",
    title: "Moral Theology",
    titleAr: "اللاهوت الأخلاقي",
    subtitle: "Living a virtuous Christian life",
    subtitleAr: "عيش حياة مسيحية فاضلة",
    readTime: "7 min",
    content: `Catholic moral theology is grounded in the natural law, the Ten Commandments, and the teaching of Christ. It guides the faithful in the pursuit of virtue and the avoidance of sin.\n\n## The Natural Law\n\nThe natural moral law, written on the human heart by God, expresses the dignity of the person and determines the basis for fundamental rights and duties.\n\n## The Virtues\n\nThe cardinal virtues — prudence, justice, fortitude, and temperance — are the hinges on which the moral life turns. The theological virtues — faith, hope, and charity — are infused by God and direct us toward him.\n\n## Conscience and Freedom\n\nConscience is the interior voice that calls us to do good and avoid evil. A well-formed conscience, educated by Church teaching, is essential for moral decision-making.`,
    contentAr: `يرتكز اللاهوت الأخلاقي الكاثوليكي على الشريعة الطبيعية والوصايا العشر وتعليم المسيح. وهو يرشد المؤمنين في سعيهم نحو الفضيلة وتجنّب الخطيئة.\n\n## الشريعة الطبيعية\n\nالشريعة الأخلاقية الطبيعية، المكتوبة على قلب الإنسان من الله، تُعبّر عن كرامة الشخص وتحدّد أساس الحقوق والواجبات الأساسية.\n\n## الفضائل\n\nالفضائل الأساسية — الحكمة والعدالة والشجاعة والاعتدال — هي المحاور التي تدور حولها الحياة الأخلاقية.\n\n## الضمير والحرية\n\nالضمير هو الصوت الداخلي الذي يدعونا لفعل الخير وتجنّب الشر.`,
    catechismRefs: [
      { paragraph: "CCC 1749-1761", text: "The morality of human acts" },
      { paragraph: "CCC 1803-1845", text: "The virtues" },
      { paragraph: "CCC 1776-1802", text: "Conscience" },
    ],
    relatedIds: ["t-faith", "t-salvation"],
    tags: ["morality", "virtues", "conscience"],
  },
  {
    id: "t-prayer",
    slug: "prayer-and-worship",
    section: "teachings",
    title: "Prayer & Worship",
    titleAr: "الصلاة والعبادة",
    subtitle: "The spiritual life and liturgy",
    subtitleAr: "الحياة الروحية والليتورجيا",
    readTime: "6 min",
    content: `Prayer is the raising of the mind and heart to God. The Church recognizes many forms of prayer: vocal prayer, meditation, and contemplation. The liturgy — especially the Mass — is the summit of the Church's prayer life.\n\n## The Our Father\n\nThe Lord's Prayer, taught by Jesus himself, is the model and summary of all Christian prayer. Each petition opens us to God's will and draws us deeper into communion with him.\n\n## The Liturgy of the Hours\n\nThe Divine Office sanctifies the whole course of the day through psalms, canticles, readings, and prayers. It is the prayer of the whole Church.`,
    contentAr: `الصلاة هي رفع العقل والقلب إلى الله. تعترف الكنيسة بأشكال عديدة من الصلاة: الصلاة الشفوية، التأمّل، والتأمّل العميق. الليتورجيا — وخاصة القداس — هي قمّة حياة الكنيسة الصلاتية.\n\n## أبانا الذي\n\nصلاة الربّ، التي علّمها يسوع نفسه، هي نموذج وملخّص كل صلاة مسيحية.\n\n## صلاة الساعات\n\nالفريضة الإلهية تُقدّس مسار اليوم كله من خلال المزامير والتسابيح والقراءات والصلوات.`,
    catechismRefs: [
      { paragraph: "CCC 2558-2565", text: "Prayer in Christian life" },
      { paragraph: "CCC 2759-2865", text: "The Lord's Prayer" },
    ],
    relatedIds: ["t-sacraments", "t-church"],
    tags: ["prayer", "liturgy", "mass"],
  },
  {
    id: "t-church",
    slug: "the-church",
    section: "teachings",
    title: "The Church",
    titleAr: "الكنيسة",
    subtitle: "Ecclesiology and Church structure",
    subtitleAr: "علم الكنيسة وبنيتها",
    readTime: "9 min",
    content: `The Church is the Body of Christ, the People of God, and the Temple of the Holy Spirit. Founded by Jesus upon the apostles, she is both a visible society and a spiritual community.\n\n## The Pope and Bishops\n\nThe Pope, as successor of Peter, holds the supreme authority in the Church. Together with the bishops, successors of the apostles, he guides the faithful in truth.\n\n## The Laity\n\nThe laity share in Christ's priestly, prophetic, and kingly office. They are called to sanctify the world from within through their daily lives and work.`,
    contentAr: `الكنيسة هي جسد المسيح وشعب الله وهيكل الروح القدس. أسّسها يسوع على الرسل، وهي مجتمع مرئي وجماعة روحية في آن واحد.\n\n## البابا والأساقفة\n\nالبابا، بصفته خليفة بطرس، يملك السلطة العليا في الكنيسة.\n\n## العلمانيون\n\nيشارك العلمانيون في وظيفة المسيح الكهنوتية والنبوية والملكية.`,
    catechismRefs: [
      { paragraph: "CCC 748-870", text: "The Church in God's plan" },
      { paragraph: "CCC 871-945", text: "The hierarchical constitution" },
    ],
    relatedIds: ["t-faith", "t-sacraments"],
    tags: ["ecclesiology", "pope", "laity"],
  },
  {
    id: "t-salvation",
    slug: "salvation",
    section: "teachings",
    title: "Salvation",
    titleAr: "الخلاص",
    subtitle: "Soteriology and redemption",
    subtitleAr: "علم الخلاص والفداء",
    readTime: "7 min",
    content: `Salvation is the free gift of God, won for us by the death and resurrection of Jesus Christ. Through grace, we are freed from sin and called to eternal life.\n\n## Grace and Justification\n\nJustification is the work of God's grace that frees us from sin and makes us righteous. It is received through faith and Baptism.\n\n## Heaven, Purgatory, and Hell\n\nThe Church teaches that after death, each person faces particular judgment. The faithful may enter heaven directly, pass through purification in purgatory, or suffer eternal separation from God in hell.`,
    contentAr: `الخلاص هو هبة الله المجانية، التي نالها لنا موت يسوع المسيح وقيامته. من خلال النعمة، نتحرّر من الخطيئة ونُدعى إلى الحياة الأبدية.\n\n## النعمة والتبرير\n\nالتبرير هو عمل نعمة الله الذي يحرّرنا من الخطيئة ويجعلنا أبرارًا.\n\n## السماء والمطهر والجحيم\n\nتُعلّم الكنيسة أنه بعد الموت، يواجه كل شخص الدينونة الخاصة.`,
    catechismRefs: [
      { paragraph: "CCC 1987-2029", text: "Grace and justification" },
      { paragraph: "CCC 1020-1060", text: "The Last Things" },
    ],
    relatedIds: ["t-faith", "t-moral"],
    tags: ["salvation", "grace", "heaven"],
  },
  {
    id: "t-mary",
    slug: "mary-and-the-saints",
    section: "teachings",
    title: "Mary & the Saints",
    titleAr: "مريم والقديسين",
    subtitle: "Marian devotion and hagiology",
    subtitleAr: "التكريم المريمي وسير القديسين",
    readTime: "6 min",
    content: `The Blessed Virgin Mary holds a unique place in salvation history as the Mother of God (Theotokos). The Church honors her with special devotion and looks to the saints as models of holiness.\n\n## Marian Dogmas\n\nThe Church teaches four Marian dogmas: the Divine Motherhood, the Perpetual Virginity, the Immaculate Conception, and the Assumption.\n\n## The Communion of Saints\n\nThe saints in heaven, the souls in purgatory, and the faithful on earth form one mystical body. We can ask the saints to intercede for us before God.`,
    contentAr: `تحتل العذراء مريم مكانة فريدة في تاريخ الخلاص بصفتها أم الله (ثيوتوكوس). تُكرّمها الكنيسة بتقوى خاصة وتنظر إلى القديسين كنماذج للقداسة.\n\n## العقائد المريمية\n\nتُعلّم الكنيسة أربع عقائد مريمية: الأمومة الإلهية، البتولية الدائمة، الحبل بلا دنس، والانتقال.\n\n## شركة القديسين\n\nالقديسون في السماء والنفوس في المطهر والمؤمنون على الأرض يشكّلون جسدًا سرّيًا واحدًا.`,
    catechismRefs: [
      { paragraph: "CCC 484-511", text: "Mary, Mother of Christ" },
      { paragraph: "CCC 946-962", text: "The communion of saints" },
    ],
    relatedIds: ["t-church", "t-faith"],
    tags: ["mary", "saints", "devotion"],
  },

  // Fathers
  {
    id: "f-augustine",
    slug: "st-augustine-of-hippo",
    section: "fathers",
    title: "St. Augustine of Hippo",
    titleAr: "القديس أوغسطينوس",
    subtitle: "354–430 · North Africa",
    subtitleAr: "354–430 · شمال أفريقيا",
    author: "Doctor of Grace",
    readTime: "12 min",
    content: `Augustine of Hippo is one of the most influential theologians in the history of Christianity. Born in Thagaste (modern Algeria) in 354, his journey from a life of worldly pursuit to profound faith is chronicled in his masterpiece, the *Confessions*.\n\n## Early Life and Conversion\n\nAugustine's mother, St. Monica, prayed ceaselessly for his conversion. After years of exploring Manichaeism and Neoplatonism, Augustine was baptized by St. Ambrose in Milan in 387.\n\n## Major Works\n\n**Confessions** — An autobiographical work that is both a prayer to God and a philosophical exploration of memory, time, and the soul.\n\n**The City of God** — Written after the sack of Rome in 410, this monumental work contrasts the earthly city with the heavenly city and presents a Christian philosophy of history.\n\n**On the Trinity** — A systematic exploration of Trinitarian theology that profoundly influenced Western Christian thought.\n\n## Theological Contributions\n\nAugustine's teachings on grace, original sin, and predestination shaped Western theology for centuries. He emphasized that salvation is entirely a gift of God's grace, not earned by human merit.`,
    contentAr: `أوغسطينوس هو أحد أكثر اللاهوتيين تأثيرًا في تاريخ المسيحية. وُلد في طاغست (الجزائر حاليًا) عام 354، ورحلته من حياة السعي الدنيوي إلى الإيمان العميق مسجّلة في تحفته الاعترافات.\n\n## الحياة المبكرة والتحوّل\n\nصلّت أمه القديسة مونيكا بلا توقف من أجل تحوّله. بعد سنوات من استكشاف المانوية والأفلاطونية المحدثة، اعتمد أوغسطينوس على يد القديس أمبروسيوس في ميلانو عام 387.\n\n## الأعمال الرئيسية\n\n**الاعترافات** — عمل سيرة ذاتية هو في آن صلاة لله واستكشاف فلسفي للذاكرة والزمن والنفس.\n\n**مدينة الله** — كُتب بعد نهب روما عام 410، يقابل المدينة الأرضية بالمدينة السماوية.\n\n**عن الثالوث** — استكشاف منهجي للاهوت الثالوث أثّر عميقًا في الفكر المسيحي الغربي.`,
    catechismRefs: [
      { paragraph: "CCC 1996-2005", text: "Augustine on grace" },
      { paragraph: "CCC 397-401", text: "Original sin" },
    ],
    relatedIds: ["f-ambrose", "t-salvation"],
    tags: ["augustine", "grace", "confessions"],
  },
  {
    id: "f-ambrose",
    slug: "st-ambrose-of-milan",
    section: "fathers",
    title: "St. Ambrose of Milan",
    titleAr: "القديس أمبروسيوس",
    subtitle: "339–397 · Milan",
    subtitleAr: "339–397 · ميلانو",
    readTime: "7 min",
    content: `Ambrose was bishop of Milan and one of the four original Doctors of the Western Church. He was instrumental in the conversion of St. Augustine and was known for his powerful preaching and courageous defense of the faith against imperial interference.\n\n## Becoming Bishop\n\nAmbrose was still a catechumen when the people of Milan acclaimed him as their bishop. He was baptized and ordained in quick succession, devoting himself entirely to the study of Scripture and theology.\n\n## Legacy\n\nHis hymns enriched the liturgy, and his moral writings influenced centuries of Christian ethics. He famously confronted Emperor Theodosius, demanding public penance for the massacre at Thessalonica.`,
    contentAr: `كان أمبروسيوس أسقف ميلانو وأحد آباء الكنيسة الأربعة الأصليين في الغرب. كان له دور فعّال في تحوّل القديس أوغسطينوس.\n\n## أن يصبح أسقفًا\n\nكان أمبروسيوس لا يزال موعوظًا عندما هتف به شعب ميلانو أسقفًا.\n\n## الإرث\n\nأغنت ترانيمه الليتورجيا، وأثّرت كتاباته الأخلاقية في قرون من الأخلاق المسيحية.`,
    catechismRefs: [
      { paragraph: "CCC 1375", text: "Ambrose on the Eucharist" },
    ],
    relatedIds: ["f-augustine", "t-church"],
    tags: ["ambrose", "milan", "doctor"],
  },

  // Papal
  {
    id: "p-laudato-si",
    slug: "laudato-si",
    section: "papal",
    title: "Laudato Si'",
    titleAr: "كن مسبّحًا",
    subtitle: "Pope Francis · 2015 · Encyclical",
    subtitleAr: "البابا فرنسيس · 2015 · رسالة عامة",
    readTime: "15 min",
    content: `*Laudato Si'* (\"Praise Be to You\") is the landmark encyclical of Pope Francis on care for our common home. Published in 2015, it addresses the interconnected crises of environmental destruction and social injustice.\n\n## Integral Ecology\n\nPope Francis introduces the concept of \"integral ecology,\" arguing that environmental, economic, social, and cultural issues are deeply intertwined. We cannot address the ecological crisis without also addressing poverty and inequality.\n\n## A Call to Conversion\n\nThe encyclical calls for an \"ecological conversion\" — a fundamental change in how we relate to creation. This involves recognizing that the earth is a gift, not a resource to be exploited.\n\n## Practical Proposals\n\nFrancis advocates for international dialogue, new economic policies that account for environmental costs, and changes in personal lifestyle. He emphasizes that small daily actions can make a difference.`,
    contentAr: `\"كن مسبّحًا\" هي الرسالة العامة الرائدة للبابا فرنسيس حول العناية ببيتنا المشترك. نُشرت عام 2015 وتتناول الأزمات المترابطة للدمار البيئي والظلم الاجتماعي.\n\n## البيئة المتكاملة\n\nيُقدّم البابا فرنسيس مفهوم \"البيئة المتكاملة\"، مؤكدًا أن القضايا البيئية والاقتصادية والاجتماعية والثقافية مترابطة بعمق.\n\n## دعوة للتحوّل\n\nتدعو الرسالة إلى \"تحوّل بيئي\" — تغيير جذري في علاقتنا بالخليقة.\n\n## مقترحات عملية\n\nيدعو فرنسيس إلى حوار دولي وسياسات اقتصادية جديدة وتغييرات في أسلوب الحياة الشخصي.`,
    catechismRefs: [
      { paragraph: "CCC 2415-2418", text: "Respect for creation" },
      { paragraph: "CCC 339-344", text: "The goodness of creation" },
    ],
    relatedIds: ["s-environment", "t-moral"],
    tags: ["ecology", "francis", "encyclical"],
  },

  // Social
  {
    id: "s-dignity",
    slug: "dignity-of-human-life",
    section: "social",
    title: "The Dignity of Human Life",
    titleAr: "كرامة الحياة البشرية",
    subtitle: "Catholic teaching on the sanctity of life",
    subtitleAr: "التعليم الكاثوليكي حول قدسية الحياة",
    readTime: "8 min",
    content: `The Catholic Church teaches that every human life is sacred from conception to natural death. This foundational principle shapes the Church's positions on abortion, euthanasia, capital punishment, and many other issues.\n\n## Created in the Image of God\n\nEvery person bears the image and likeness of God (*Imago Dei*). This divine image is the basis of human dignity and cannot be lost or diminished by any circumstance.\n\n## From Conception to Natural Death\n\nThe Church defends the right to life at every stage. This includes opposition to abortion, embryonic stem cell research, euthanasia, and assisted suicide.\n\n## The Consistent Ethic of Life\n\nCatholic teaching calls for a \"consistent ethic of life\" that opposes all threats to human dignity — from poverty and war to trafficking and discrimination.`,
    contentAr: `تُعلّم الكنيسة الكاثوليكية أن كل حياة بشرية مقدسة من الحمل حتى الموت الطبيعي. هذا المبدأ الأساسي يُشكّل مواقف الكنيسة من الإجهاض والقتل الرحيم وعقوبة الإعدام وقضايا أخرى كثيرة.\n\n## مخلوق على صورة الله\n\nكل شخص يحمل صورة الله ومثاله. هذه الصورة الإلهية هي أساس كرامة الإنسان.\n\n## من الحمل حتى الموت الطبيعي\n\nتدافع الكنيسة عن الحق في الحياة في كل مرحلة.\n\n## أخلاقيات الحياة المتّسقة\n\nيدعو التعليم الكاثوليكي إلى \"أخلاقيات حياة متّسقة\" تعارض كل تهديدات الكرامة البشرية.`,
    catechismRefs: [
      { paragraph: "CCC 2258-2283", text: "Respect for human life" },
      { paragraph: "CCC 1700-1715", text: "The dignity of the human person" },
    ],
    relatedIds: ["t-moral", "s-environment"],
    tags: ["life", "dignity", "bioethics"],
  },
  {
    id: "s-environment",
    slug: "environment-and-creation",
    section: "social",
    title: "Environment & Creation",
    titleAr: "البيئة والخليقة",
    subtitle: "Stewardship of creation and integral ecology",
    subtitleAr: "رعاية الخليقة والبيئة المتكاملة",
    readTime: "6 min",
    content: `Catholic social teaching on the environment is rooted in the biblical mandate to care for creation. Pope Francis's *Laudato Si'* gave this teaching renewed urgency.\n\n## Stewardship, Not Dominion\n\nHumans are called to be stewards of creation, not its masters. The goods of the earth are destined for all people.\n\n## Integral Ecology\n\nThe environmental crisis cannot be separated from the crisis of social justice. The poor suffer most from environmental degradation.`,
    contentAr: `يرتكز التعليم الاجتماعي الكاثوليكي حول البيئة على الأمر الكتابي بالعناية بالخليقة.\n\n## الرعاية لا السيطرة\n\nالإنسان مدعوّ ليكون راعيًا للخليقة لا سيّدًا لها.\n\n## البيئة المتكاملة\n\nلا يمكن فصل الأزمة البيئية عن أزمة العدالة الاجتماعية.`,
    catechismRefs: [
      { paragraph: "CCC 2415-2418", text: "Respect for the integrity of creation" },
    ],
    relatedIds: ["p-laudato-si", "s-dignity"],
    tags: ["ecology", "creation", "stewardship"],
  },
];

export const getArticleBySlug = (slug: string): Article | undefined =>
  articles.find((a) => a.slug === slug);

export const getArticleById = (id: string): Article | undefined =>
  articles.find((a) => a.id === id);

export const getRelatedArticles = (article: Article): Article[] =>
  article.relatedIds.map((id) => getArticleById(id)).filter(Boolean) as Article[];

export const getArticlesBySection = (section: Article["section"]): Article[] =>
  articles.filter((a) => a.section === section);
