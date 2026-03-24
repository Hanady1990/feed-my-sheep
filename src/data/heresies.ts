export interface HeresyPoint {
  heresy: string;
  heresyAr: string;
  catholic: string;
  catholicAr: string;
}

export interface Heresy {
  slug: string;
  name: string;
  nameAr: string;
  period: string;
  periodAr: string;
  founder: string;
  founderAr: string;
  summary: string;
  summaryAr: string;
  councilResponse: string;
  councilResponseAr: string;
  catechismRefs: string[];
  keyFigures: string[];
  keyFiguresAr: string[];
  points: HeresyPoint[];
}

export const heresies: Heresy[] = [
  {
    slug: "arianism",
    name: "Arianism",
    nameAr: "الآريوسية",
    period: "4th century",
    periodAr: "القرن الرابع",
    founder: "Arius of Alexandria",
    founderAr: "آريوس الإسكندري",
    summary: "Arianism taught that the Son of God was a created being, not co-eternal or consubstantial with the Father. It was the most widespread heresy of the early Church.",
    summaryAr: "علّمت الآريوسية أن ابن الله مخلوق، وليس أزليًا أو مساويًا للآب في الجوهر. كانت أكثر البدع انتشارًا في الكنيسة الأولى.",
    councilResponse: "Council of Nicaea (325) & Council of Constantinople (381)",
    councilResponseAr: "مجمع نيقية (٣٢٥) ومجمع القسطنطينية (٣٨١)",
    catechismRefs: ["242", "465", "467"],
    keyFigures: ["St. Athanasius", "St. Hilary of Poitiers", "St. Basil the Great"],
    keyFiguresAr: ["القديس أثناسيوس", "القديس هيلاري البواتييري", "القديس باسيليوس الكبير"],
    points: [
      {
        heresy: "Christ is a created being — the highest of creatures, but not truly God.",
        heresyAr: "المسيح مخلوق — أعلى المخلوقات، لكنه ليس إلهًا حقيقيًا.",
        catholic: "Christ is \"God from God, Light from Light, true God from true God, begotten not made, consubstantial with the Father\" (Nicene Creed).",
        catholicAr: "المسيح هو \"إله من إله، نور من نور، إله حقّ من إله حقّ، مولود غير مخلوق، مساوٍ للآب في الجوهر\" (قانون الإيمان النيقاوي)."
      },
      {
        heresy: "\"There was a time when the Son was not\" — He had a beginning.",
        heresyAr: "\"كان هناك وقت لم يكن فيه الابن\" — له بداية.",
        catholic: "The Son is eternally begotten of the Father, with no beginning and no end. He is co-eternal with the Father.",
        catholicAr: "الابن مولود من الآب أزليًا، بلا بداية ولا نهاية. هو أزليّ مع الآب."
      },
      {
        heresy: "The Son is of a \"similar substance\" (homoiousios) but not the \"same substance\" as the Father.",
        heresyAr: "الابن من \"جوهر مشابه\" لكن ليس من \"نفس الجوهر\" مع الآب.",
        catholic: "The Son is homoousios (consubstantial) — of the same substance as the Father. They share one divine nature.",
        catholicAr: "الابن مساوٍ في الجوهر (هومووسيوس) — من نفس جوهر الآب. يشتركان في طبيعة إلهية واحدة."
      },
      {
        heresy: "The Holy Spirit is also a created being, subordinate to the Son.",
        heresyAr: "الروح القدس أيضًا مخلوق، خاضع للابن.",
        catholic: "The Holy Spirit proceeds from the Father and the Son, and is equally God — the third Person of the Trinity.",
        catholicAr: "الروح القدس ينبثق من الآب والابن، وهو إله مساوٍ — الأقنوم الثالث في الثالوث."
      }
    ]
  },
  {
    slug: "pelagianism",
    name: "Pelagianism",
    nameAr: "البيلاجية",
    period: "5th century",
    periodAr: "القرن الخامس",
    founder: "Pelagius",
    founderAr: "بيلاجيوس",
    summary: "Pelagianism denied original sin and taught that humans can achieve salvation through their own natural efforts without the necessity of divine grace.",
    summaryAr: "أنكرت البيلاجية الخطيئة الأصلية وعلّمت أن الإنسان يستطيع بلوغ الخلاص بجهوده الطبيعية دون الحاجة إلى النعمة الإلهية.",
    councilResponse: "Council of Carthage (418) & Council of Ephesus (431)",
    councilResponseAr: "مجمع قرطاجة (٤١٨) ومجمع أفسس (٤٣١)",
    catechismRefs: ["405", "1996", "2001"],
    keyFigures: ["St. Augustine of Hippo", "St. Jerome"],
    keyFiguresAr: ["القديس أوغسطينوس", "القديس إيرونيموس"],
    points: [
      {
        heresy: "Adam's sin affected only himself; there is no inherited original sin.",
        heresyAr: "خطيئة آدم أثّرت عليه فقط؛ لا توجد خطيئة أصلية موروثة.",
        catholic: "Original sin is transmitted to all human beings by propagation, depriving us of original holiness and justice (CCC 404-405).",
        catholicAr: "الخطيئة الأصلية تنتقل إلى جميع البشر بالتناسل، وتحرمنا من القداسة والبرّ الأصليين (التعليم المسيحي ٤٠٤-٤٠٥)."
      },
      {
        heresy: "Human beings can live sinless lives by their own free will alone.",
        heresyAr: "يمكن للإنسان أن يعيش بلا خطيئة بإرادته الحرة وحدها.",
        catholic: "Without God's grace, no one can avoid all sin. Grace is necessary for salvation and for every good work (CCC 1996).",
        catholicAr: "بدون نعمة الله، لا يمكن لأحد أن يتجنب كل خطيئة. النعمة ضرورية للخلاص ولكل عمل صالح (التعليم المسيحي ١٩٩٦)."
      },
      {
        heresy: "Grace merely makes it easier to do good, but is not strictly necessary.",
        heresyAr: "النعمة تسهّل فعل الخير فقط، لكنها ليست ضرورية بشكل مطلق.",
        catholic: "Grace is absolutely necessary. It is a free gift from God that enables us to respond to His call and cooperate in our salvation (CCC 2001).",
        catholicAr: "النعمة ضرورية بشكل مطلق. هي هبة مجانية من الله تمكّننا من الاستجابة لدعوته والتعاون في خلاصنا (التعليم المسيحي ٢٠٠١)."
      },
      {
        heresy: "Infant baptism is unnecessary since there is no original sin to cleanse.",
        heresyAr: "معمودية الأطفال غير ضرورية لأنه لا توجد خطيئة أصلية تُطهَّر.",
        catholic: "Infant baptism is essential to free children from original sin and incorporate them into the Body of Christ (CCC 1250).",
        catholicAr: "معمودية الأطفال ضرورية لتحرير الأطفال من الخطيئة الأصلية وضمّهم إلى جسد المسيح (التعليم المسيحي ١٢٥٠)."
      }
    ]
  },
  {
    slug: "nestorianism",
    name: "Nestorianism",
    nameAr: "النسطورية",
    period: "5th century",
    periodAr: "القرن الخامس",
    founder: "Nestorius of Constantinople",
    founderAr: "نسطور القسطنطيني",
    summary: "Nestorianism proposed that Christ existed as two separate persons — one divine and one human — rather than as one united person with two natures.",
    summaryAr: "اقترحت النسطورية أن المسيح وُجد كشخصين منفصلين — إلهي وبشري — بدلاً من شخص واحد متحد بطبيعتين.",
    councilResponse: "Council of Ephesus (431)",
    councilResponseAr: "مجمع أفسس (٤٣١)",
    catechismRefs: ["466", "468", "495"],
    keyFigures: ["St. Cyril of Alexandria", "Pope Celestine I"],
    keyFiguresAr: ["القديس كيرلس الإسكندري", "البابا سلستين الأول"],
    points: [
      {
        heresy: "Christ is two separate persons: one divine (the Word) and one human (Jesus).",
        heresyAr: "المسيح شخصان منفصلان: إلهي (الكلمة) وبشري (يسوع).",
        catholic: "Christ is one divine Person with two natures — fully God and fully man — united in the hypostatic union (CCC 468).",
        catholicAr: "المسيح شخص إلهي واحد بطبيعتين — إله كامل وإنسان كامل — متحدتين في الاتحاد الأقنومي (التعليم المسيحي ٤٦٨)."
      },
      {
        heresy: "Mary is only \"Christotokos\" (Mother of Christ), not \"Theotokos\" (Mother of God).",
        heresyAr: "مريم هي فقط \"كريستوتوكوس\" (أم المسيح)، وليست \"ثيوتوكوس\" (أم الله).",
        catholic: "Mary is truly Theotokos — Mother of God — because she bore the eternal Son of God made man (CCC 495).",
        catholicAr: "مريم هي حقًا ثيوتوكوس — أم الله — لأنها حملت ابن الله الأزلي المتجسد (التعليم المسيحي ٤٩٥)."
      },
      {
        heresy: "The divine nature merely indwelt the human nature, like God dwelling in a temple.",
        heresyAr: "الطبيعة الإلهية سكنت الطبيعة البشرية فقط، كما يسكن الله في هيكل.",
        catholic: "The union of the two natures is real, personal, and inseparable — not merely a moral or functional union (CCC 466).",
        catholicAr: "اتحاد الطبيعتين حقيقي وشخصي ولا ينفصل — ليس مجرد اتحاد أدبي أو وظيفي (التعليم المسيحي ٤٦٦)."
      }
    ]
  },
  {
    slug: "monophysitism",
    name: "Monophysitism",
    nameAr: "المونوفيزيّة",
    period: "5th century",
    periodAr: "القرن الخامس",
    founder: "Eutyches",
    founderAr: "أوطيخا",
    summary: "Monophysitism taught that Christ had only one nature — a divine nature that absorbed or replaced His human nature after the Incarnation.",
    summaryAr: "علّمت المونوفيزية أن للمسيح طبيعة واحدة فقط — طبيعة إلهية امتصت أو حلّت محل طبيعته البشرية بعد التجسد.",
    councilResponse: "Council of Chalcedon (451)",
    councilResponseAr: "مجمع خلقيدونية (٤٥١)",
    catechismRefs: ["467", "469", "470"],
    keyFigures: ["Pope Leo the Great", "St. Flavian of Constantinople"],
    keyFiguresAr: ["البابا لاون الكبير", "القديس فلافيان القسطنطيني"],
    points: [
      {
        heresy: "After the Incarnation, Christ's human nature was absorbed into His divine nature, leaving only one nature.",
        heresyAr: "بعد التجسد، امتُصّت الطبيعة البشرية للمسيح في طبيعته الإلهية، فبقيت طبيعة واحدة فقط.",
        catholic: "Christ possesses two natures — divine and human — \"without confusion, without change, without division, without separation\" (Council of Chalcedon, CCC 467).",
        catholicAr: "يمتلك المسيح طبيعتين — إلهية وبشرية — \"بلا اختلاط ولا تغيير ولا انقسام ولا انفصال\" (مجمع خلقيدونية، التعليم المسيحي ٤٦٧)."
      },
      {
        heresy: "Christ did not truly suffer and die as a man, since His humanity was not real.",
        heresyAr: "لم يتألم المسيح ولم يمت حقًا كإنسان، لأن إنسانيته لم تكن حقيقية.",
        catholic: "Christ truly suffered and died in His human nature. His humanity is real, complete, and perfect (CCC 470).",
        catholicAr: "تألّم المسيح ومات حقًا في طبيعته البشرية. إنسانيته حقيقية وكاملة وتامة (التعليم المسيحي ٤٧٠)."
      },
      {
        heresy: "The human will and intellect of Christ were dissolved into the divine.",
        heresyAr: "الإرادة البشرية وعقل المسيح ذابا في الإلهية.",
        catholic: "Christ has a true human will and a true human intellect, which operate in perfect harmony with His divine will (CCC 475).",
        catholicAr: "للمسيح إرادة بشرية حقيقية وعقل بشري حقيقي، يعملان في انسجام تام مع إرادته الإلهية (التعليم المسيحي ٤٧٥)."
      }
    ]
  },
  {
    slug: "gnosticism",
    name: "Gnosticism",
    nameAr: "الغنوصية",
    period: "2nd century",
    periodAr: "القرن الثاني",
    founder: "Various teachers (Valentinus, Basilides, Marcion)",
    founderAr: "معلمون مختلفون (فالنتينوس، باسيليدس، مرقيون)",
    summary: "Gnosticism was a diverse movement claiming that salvation comes through secret knowledge (gnosis) and that the material world is evil, created by an inferior deity.",
    summaryAr: "كانت الغنوصية حركة متنوعة تدّعي أن الخلاص يأتي من خلال المعرفة السرّية (الغنوص) وأن العالم المادي شرّير، خلقه إله أدنى.",
    councilResponse: "St. Irenaeus (Against Heresies), St. Hippolytus",
    councilResponseAr: "القديس إيريناوس (ضد الهرطقات)، القديس هيبوليتوس",
    catechismRefs: ["285", "299", "1006"],
    keyFigures: ["St. Irenaeus of Lyon", "St. Hippolytus of Rome", "Tertullian"],
    keyFiguresAr: ["القديس إيريناوس الليوني", "القديس هيبوليتوس الروماني", "ترتليانوس"],
    points: [
      {
        heresy: "The material world is evil, created by an ignorant or malevolent lesser god (Demiurge).",
        heresyAr: "العالم المادي شرّير، خلقه إله أدنى جاهل أو خبيث (الديميورج).",
        catholic: "God created all things visible and invisible, and creation is good. \"God saw everything that he had made, and indeed, it was very good\" (Gen 1:31, CCC 299).",
        catholicAr: "خلق الله كل شيء منظور وغير منظور، والخليقة صالحة. \"رأى الله كل ما صنعه فإذا هو حسن جدًا\" (تك ١:٣١، التعليم المسيحي ٢٩٩)."
      },
      {
        heresy: "Salvation comes through secret mystical knowledge (gnosis) available only to the elite.",
        heresyAr: "الخلاص يأتي من خلال معرفة سرّية صوفية (غنوص) متاحة للنخبة فقط.",
        catholic: "Salvation is offered to all through faith in Jesus Christ and the sacraments of the Church, not through secret knowledge (CCC 851).",
        catholicAr: "الخلاص مقدَّم للجميع من خلال الإيمان بيسوع المسيح وأسرار الكنيسة، لا من خلال معرفة سرّية (التعليم المسيحي ٨٥١)."
      },
      {
        heresy: "The body is a prison for the soul; bodily resurrection is impossible and undesirable.",
        heresyAr: "الجسد سجن للروح؛ قيامة الجسد مستحيلة وغير مرغوبة.",
        catholic: "The body is the temple of the Holy Spirit. We profess belief in the resurrection of the body and life everlasting (CCC 1006).",
        catholicAr: "الجسد هيكل الروح القدس. نعلن إيماننا بقيامة الجسد والحياة الأبدية (التعليم المسيحي ١٠٠٦)."
      },
      {
        heresy: "Christ only appeared to have a human body (Docetism); His suffering was an illusion.",
        heresyAr: "ظهر المسيح فقط بأن له جسدًا بشريًا (الظاهرية)؛ آلامه كانت وهمًا.",
        catholic: "The Son of God truly became man, with a real human body and soul. His suffering and death were real (CCC 465).",
        catholicAr: "صار ابن الله إنسانًا حقًا، بجسد بشري حقيقي وروح بشرية. آلامه وموته كانا حقيقيين (التعليم المسيحي ٤٦٥)."
      }
    ]
  },
  {
    slug: "iconoclasm",
    name: "Iconoclasm",
    nameAr: "تحطيم الأيقونات",
    period: "8th century",
    periodAr: "القرن الثامن",
    founder: "Emperor Leo III",
    founderAr: "الإمبراطور لاون الثالث",
    summary: "Iconoclasm was the movement that opposed the veneration of sacred images, icons, and statues, claiming it constituted idolatry.",
    summaryAr: "كانت حركة تحطيم الأيقونات تعارض تكريم الصور المقدسة والأيقونات والتماثيل، مدّعية أنها عبادة أوثان.",
    councilResponse: "Second Council of Nicaea (787)",
    councilResponseAr: "مجمع نيقية الثاني (٧٨٧)",
    catechismRefs: ["1159", "1161", "2132"],
    keyFigures: ["St. John Damascene", "St. Germanus of Constantinople", "Empress Irene"],
    keyFiguresAr: ["القديس يوحنا الدمشقي", "القديس جرمانوس القسطنطيني", "الإمبراطورة إيريني"],
    points: [
      {
        heresy: "Venerating images and icons is idolatry forbidden by the commandments.",
        heresyAr: "تكريم الصور والأيقونات هو عبادة أوثان محرّمة بالوصايا.",
        catholic: "The veneration of sacred images is not idolatry. We honor not the image itself, but the person it represents (CCC 2132).",
        catholicAr: "تكريم الصور المقدسة ليس عبادة أوثان. نحن نكرّم لا الصورة ذاتها بل الشخص الذي تمثّله (التعليم المسيحي ٢١٣٢)."
      },
      {
        heresy: "God cannot be depicted in any form; all religious art should be destroyed.",
        heresyAr: "لا يمكن تصوير الله بأي شكل؛ يجب تدمير كل الفن الديني.",
        catholic: "Since the Word became flesh and dwelt among us, the Incarnation justifies the depiction of Christ in sacred art (CCC 1159).",
        catholicAr: "بما أن الكلمة صار جسدًا وحلّ بيننا، فالتجسد يبرر تصوير المسيح في الفن المقدس (التعليم المسيحي ١١٥٩)."
      },
      {
        heresy: "No physical object can mediate the divine; sacred images have no spiritual value.",
        heresyAr: "لا يمكن لأي شيء مادي أن يتوسط الإلهي؛ الصور المقدسة ليس لها قيمة روحية.",
        catholic: "Sacred images help the faithful contemplate the mysteries of faith and foster devotion. They are windows to the divine (CCC 1161).",
        catholicAr: "تساعد الصور المقدسة المؤمنين على التأمل في أسرار الإيمان وتعزيز التقوى. إنها نوافذ إلى الإلهي (التعليم المسيحي ١١٦١)."
      }
    ]
  },
  {
    slug: "albigensianism",
    name: "Albigensianism (Catharism)",
    nameAr: "الألبيجينية (الكثارية)",
    period: "12th century",
    periodAr: "القرن الثاني عشر",
    founder: "Various Cathar leaders",
    founderAr: "قادة كثاريون مختلفون",
    summary: "Albigensianism was a dualistic heresy that taught the existence of two gods — one good (spiritual) and one evil (material) — and rejected the sacraments, the clergy, and the goodness of creation.",
    summaryAr: "كانت الألبيجينية بدعة ثنوية علّمت بوجود إلهين — واحد صالح (روحاني) وواحد شرير (مادي) — ورفضت الأسرار والكهنوت وصلاح الخليقة.",
    councilResponse: "Fourth Lateran Council (1215)",
    councilResponseAr: "مجمع لاتيران الرابع (١٢١٥)",
    catechismRefs: ["285", "299", "1601"],
    keyFigures: ["St. Dominic de Guzmán", "St. Bernard of Clairvaux"],
    keyFiguresAr: ["القديس دومينيك دي غوزمان", "القديس برنارد الكليرفوي"],
    points: [
      {
        heresy: "Two opposing gods exist: a good spiritual god and an evil god who created the material world.",
        heresyAr: "يوجد إلهان متعارضان: إله روحاني صالح وإله شرير خلق العالم المادي.",
        catholic: "There is only one God, Creator of all things visible and invisible. Evil is not a separate divine principle but a privation of good (CCC 285).",
        catholicAr: "لا يوجد إلا إله واحد، خالق كل شيء منظور وغير منظور. الشرّ ليس مبدأ إلهيًا منفصلًا بل هو نقص في الخير (التعليم المسيحي ٢٨٥)."
      },
      {
        heresy: "Marriage and procreation are evil because they trap souls in material bodies.",
        heresyAr: "الزواج والإنجاب شرّ لأنهما يحبسان الأرواح في أجساد مادية.",
        catholic: "Marriage is a sacrament instituted by God. The union of man and woman is blessed, and procreation is a sharing in God's creative work (CCC 1601).",
        catholicAr: "الزواج سرّ أسّسه الله. اتحاد الرجل والمرأة مبارك، والإنجاب مشاركة في عمل الله الخلّاق (التعليم المسيحي ١٦٠١)."
      },
      {
        heresy: "The sacraments, especially the Eucharist, are meaningless because matter is evil.",
        heresyAr: "الأسرار، وخاصة الإفخارستيا، لا معنى لها لأن المادة شرّ.",
        catholic: "The sacraments are efficacious signs of grace instituted by Christ. In the Eucharist, bread and wine truly become the Body and Blood of Christ (CCC 1131).",
        catholicAr: "الأسرار علامات فعّالة للنعمة أسسها المسيح. في الإفخارستيا، يصبح الخبز والخمر حقًا جسد المسيح ودمه (التعليم المسيحي ١١٣١)."
      }
    ]
  }
];

export const getHeresyBySlug = (slug: string): Heresy | undefined =>
  heresies.find((h) => h.slug === slug);
