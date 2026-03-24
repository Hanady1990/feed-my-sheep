import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Language = "en" | "ar";
type Theme = "light" | "dark";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  isRTL: boolean;
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // App
    "app.title": "Verbum Fidei",
    "app.subtitle": "The Word of Faith",

    // Nav
    "nav.home": "Home",
    "nav.teachings": "Teachings",
    "nav.bible": "Bible",
    "nav.search": "Search",
    "nav.more": "More",
    "nav.fathers": "Church Fathers",
    "nav.papal": "Papal Letters",
    "nav.vatican": "Vatican",
    "nav.heresies": "Heresies",
    "nav.social": "Social Topics",
    "nav.saints": "Saints",
    "nav.catechism": "Catechism",

    // Home
    "home.dailyGospel": "Daily Gospel",
    "home.explore": "Explore",
    "home.featuredTeaching": "Featured Teaching",
    "home.saintOfTheDay": "Saint of the Day",
    "home.saint.patron": "Patron of",
    "home.vaticanNews": "Vatican News",
    "home.gospel.ref": "Matthew 5:14-16",
    "home.gospel.text": "\"You are the light of the world. A city set on a hill cannot be hidden. Nor do people light a lamp and put it under a basket, but on a stand, and it gives light to all in the house. In the same way, let your light shine before others, so that they may see your good works and give glory to your Father who is in heaven.\"",
    "home.quote.text": "\"Late have I loved you, beauty so old and so new: late have I loved you.\"",
    "home.quote.author": "St. Augustine of Hippo",
    "home.quote.source": "Confessions, Book X",
    "home.featured.title": "The Real Presence in the Eucharist",
    "home.featured.category": "Sacraments",
    "home.featured.summary": "The Church teaches that in the Eucharist, Christ is truly, really, and substantially present — Body, Blood, Soul, and Divinity — under the appearances of bread and wine.",

    // Quick Links
    "link.teachings": "Teachings",
    "link.bible": "Bible",
    "link.fathers": "Fathers",
    "link.papal": "Papal Letters",
    "link.vatican": "Vatican",
    "link.saints": "Saints",
    "link.heresies": "Heresies",
    "link.social": "Social",

    // News
    "news.1.title": "Pope Francis addresses global peace summit",
    "news.1.date": "March 14, 2026",
    "news.2.title": "Vatican announces Jubilee Year pilgrimage routes",
    "news.2.date": "March 12, 2026",
    "news.3.title": "New encyclical on digital ethics expected",
    "news.3.date": "March 10, 2026",

    // Teachings
    "teachings.title": "Catholic Teachings",
    "teachings.subtitle": "Organized by theme from the Catechism",
    "teachings.faith": "Faith & Creed",
    "teachings.faith.desc": "The foundations of Catholic belief",
    "teachings.sacraments": "Sacraments",
    "teachings.sacraments.desc": "The seven sacraments of the Church",
    "teachings.moral": "Moral Theology",
    "teachings.moral.desc": "Living a virtuous Christian life",
    "teachings.prayer": "Prayer & Worship",
    "teachings.prayer.desc": "The spiritual life and liturgy",
    "teachings.church": "The Church",
    "teachings.church.desc": "Ecclesiology and Church structure",
    "teachings.salvation": "Salvation",
    "teachings.salvation.desc": "Soteriology and redemption",
    "teachings.mary": "Mary & the Saints",
    "teachings.mary.desc": "Marian devotion and hagiology",

    // Bible
    "bible.title": "Bible Commentary",
    "bible.subtitle": "With patristic commentary from the Holy Fathers",
    "bible.ot": "Old Testament",
    "bible.nt": "New Testament",
    "bible.goto": "Go to Verse",
    "bible.selectBook": "Select Book",
    "bible.selectChapter": "Select Chapter",
    "bible.chapterLabel": "Chapter",
    "bible.verseOptional": "Verse (optional)",
    "bible.goButton": "Go",
    "bible.searchBooks": "Search books...",
    "bible.searchVerses": "Search words in the Bible...",
    "bible.searchButton": "Search",
    "bible.searching": "Searching all books…",
    "bible.resultsFound": "results found",
    "bible.tooManyResults": "Showing first 200 results. Try a more specific search.",
    "bible.wordSearch": "Word Search",

    // Catechism
    "catechism.title": "Catechism",
    "catechism.subtitle": "Catechism of the Catholic Church",
    "catechism.gotoPlaceholder": "Go to § number (1–2865)",
    "catechism.search": "Search",
    "catechism.searchSubtitle": "Search across all paragraphs",
    "catechism.searchPlaceholder": "Search the Catechism...",
    "catechism.searchBtn": "Search",
    "catechism.searching": "Searching…",
    "catechism.resultsFound": "results found",
    "catechism.tooMany": "Showing first 200 results.",
    "catechism.noResults": "No results found.",
    "catechism.tableOfContents": "Table of Contents",
    "catechism.back": "Back",
    "catechism.readAll": "Read all paragraphs in this section",

    // Fathers
    "fathers.title": "Church Fathers",
    "fathers.subtitle": "The great teachers of the early Church",

    // Papal
    "papal.title": "Papal Letters & Documents",
    "papal.subtitle": "Encyclicals, exhortations, and apostolic letters",

    // Vatican
    "vatican.title": "Vatican News",
    "vatican.subtitle": "Latest from the Holy See",

    // Saints
    "saints.title": "Saints & Spirituality",
    "saints.subtitle": "Lives of holiness and spiritual wisdom",

    // Heresies
    "heresies.title": "Heresies & Christian Thought",
    "heresies.subtitle": "Historical errors and the Church's response",
    "heresies.response": "Response:",

    // Social
    "social.title": "Social Christian Topics",
    "social.subtitle": "Catholic perspective on modern issues",

    // Search
    "search.title": "Search",
    "search.subtitle": "Search across all content",
    "search.placeholder": "Search teachings, saints, scripture...",
    "search.noResults": "No results found for",

    // More
    "more.title": "More",
    "more.subtitle": "Explore all sections",
    "more.settings": "Settings",
    "more.darkMode": "Dark Mode",
    "more.bookmarks": "Bookmarks",
    "more.share": "Share App",
    "more.comingSoon": "Coming soon",
    "more.language": "Language",
    "more.fathersLibrary": "Church Fathers Library",
    "more.papalDocs": "Papal Letters & Documents",
    "more.vaticanNews": "Vatican News",
    "more.heresiesThought": "Heresies & Christian Thought",
    "more.socialTopics": "Social Christian Topics",
    "more.saintsSpirituality": "Saints & Spirituality",
    "more.installApp": "Install App",
    "more.alreadyInstalled": "Installed",

    // PWA
    "pwa.title": "Install Verbum Fidei",
    "pwa.description": "Add to your home screen for quick access and offline reading.",
    "pwa.install": "Install",
    "pwa.iosGuide": "Tap the Share button",
    "pwa.addToHome": "Add to Home Screen",
    "pwa.iosGuideToast": "Use Safari's Share menu to install the app",
    "pwa.androidGuide": "Open the browser menu and tap Install app or Add to Home screen.",
    "pwa.androidGuideToast": "Use the browser menu to install the app",
  },
  ar: {
    // App
    "app.title": "كلمة الإيمان",
    "app.subtitle": "Verbum Fidei",

    // Nav
    "nav.home": "الرئيسية",
    "nav.teachings": "التعاليم",
    "nav.bible": "الكتاب المقدس",
    "nav.search": "بحث",
    "nav.more": "المزيد",
    "nav.fathers": "آباء الكنيسة",
    "nav.papal": "الرسائل البابوية",
    "nav.vatican": "الفاتيكان",
    "nav.heresies": "البدع",
    "nav.social": "قضايا اجتماعية",
    "nav.saints": "القديسين",
    "nav.catechism": "التعليم المسيحي",

    // Home
    "home.dailyGospel": "إنجيل اليوم",
    "home.explore": "استكشف",
    "home.featuredTeaching": "تعليم مميز",
    "home.vaticanNews": "أخبار الفاتيكان",
    "home.gospel.ref": "متى ٥: ١٤-١٦",
    "home.gospel.text": "\"أَنْتُمْ نُورُ الْعَالَمِ. لاَ يُمْكِنُ أَنْ تُخْفَى مَدِينَةٌ مَوْضُوعَةٌ عَلَى جَبَلٍ، وَلاَ يُوقِدُونَ سِرَاجًا وَيَضَعُونَهُ تَحْتَ الْمِكْيَالِ، بَلْ عَلَى الْمَنَارَةِ فَيُضِيءُ لِجَمِيعِ الَّذِينَ فِي الْبَيْتِ. فَلْيُضِئْ نُورُكُمْ هكَذَا قُدَّامَ النَّاسِ، لِكَيْ يَرَوْا أَعْمَالَكُمُ الْحَسَنَةَ، وَيُمَجِّدُوا أَبَاكُمُ الَّذِي فِي السَّمَاوَاتِ.\"",
    "home.quote.text": "\"مُتَأَخِّرًا أَحْبَبْتُكِ، أَيَّتُهَا الْجَمَالُ الْقَدِيمُ وَالْجَدِيدُ: مُتَأَخِّرًا أَحْبَبْتُكِ.\"",
    "home.quote.author": "القديس أوغسطينوس",
    "home.quote.source": "الاعترافات، الكتاب العاشر",
    "home.featured.title": "الحضور الحقيقي في القربان المقدس",
    "home.featured.category": "الأسرار",
    "home.featured.summary": "تُعلّم الكنيسة أنّ المسيح حاضرٌ حقيقةً وجوهريًّا في القربان المقدس — جسدًا ودمًا وروحًا ولاهوتًا — تحت مظاهر الخبز والخمر.",

    // Quick Links
    "link.teachings": "التعاليم",
    "link.bible": "الكتاب المقدس",
    "link.fathers": "الآباء",
    "link.papal": "الرسائل البابوية",
    "link.vatican": "الفاتيكان",
    "link.saints": "القديسين",
    "link.heresies": "البدع",
    "link.social": "اجتماعي",

    // News
    "news.1.title": "البابا فرنسيس يخاطب قمة السلام العالمية",
    "news.1.date": "١٤ مارس ٢٠٢٦",
    "news.2.title": "الفاتيكان يعلن عن مسارات حج سنة اليوبيل",
    "news.2.date": "١٢ مارس ٢٠٢٦",
    "news.3.title": "رسالة عامة جديدة حول أخلاقيات الرقمنة متوقعة",
    "news.3.date": "١٠ مارس ٢٠٢٦",

    // Teachings
    "teachings.title": "التعاليم الكاثوليكية",
    "teachings.subtitle": "مُنَظَّمة حسب المواضيع من التعليم المسيحي",
    "teachings.faith": "الإيمان والعقيدة",
    "teachings.faith.desc": "أسس الإيمان الكاثوليكي",
    "teachings.sacraments": "الأسرار المقدسة",
    "teachings.sacraments.desc": "أسرار الكنيسة السبعة",
    "teachings.moral": "اللاهوت الأخلاقي",
    "teachings.moral.desc": "عيش حياة مسيحية فاضلة",
    "teachings.prayer": "الصلاة والعبادة",
    "teachings.prayer.desc": "الحياة الروحية والليتورجيا",
    "teachings.church": "الكنيسة",
    "teachings.church.desc": "علم الكنيسة وبنيتها",
    "teachings.salvation": "الخلاص",
    "teachings.salvation.desc": "علم الخلاص والفداء",
    "teachings.mary": "مريم والقديسين",
    "teachings.mary.desc": "التكريم المريمي وسير القديسين",

    // Bible
    "bible.title": "تفسير الكتاب المقدس",
    "bible.subtitle": "مع تفسير آبائي من الآباء القديسين",
    "bible.ot": "العهد القديم",
    "bible.nt": "العهد الجديد",
    "bible.goto": "اذهب إلى آية",
    "bible.selectBook": "اختر سفرًا",
    "bible.selectChapter": "اختر إصحاحًا",
    "bible.chapterLabel": "إصحاح",
    "bible.verseOptional": "آية (اختياري)",
    "bible.goButton": "اذهب",
    "bible.searchBooks": "ابحث في الأسفار...",
    "bible.searchVerses": "ابحث بالكلمات في الكتاب المقدس...",
    "bible.searchButton": "بحث",
    "bible.searching": "جارٍ البحث في جميع الأسفار…",
    "bible.resultsFound": "نتيجة",
    "bible.tooManyResults": "عرض أول 200 نتيجة. حاول بحثًا أكثر تحديدًا.",
    "bible.wordSearch": "بحث بالكلمات",

    // Catechism
    "catechism.title": "التعليم المسيحي",
    "catechism.subtitle": "التعليم المسيحي للكنيسة الكاثوليكية",
    "catechism.gotoPlaceholder": "اذهب إلى § رقم (١–٢٨٦٥)",
    "catechism.search": "بحث",
    "catechism.searchSubtitle": "البحث في جميع الفقرات",
    "catechism.searchPlaceholder": "ابحث في التعليم المسيحي...",
    "catechism.searchBtn": "بحث",
    "catechism.searching": "جارٍ البحث…",
    "catechism.resultsFound": "نتيجة",
    "catechism.tooMany": "عرض أول 200 نتيجة.",
    "catechism.noResults": "لا توجد نتائج.",
    "catechism.tableOfContents": "الفهرس",
    "catechism.back": "رجوع",
    "catechism.readAll": "قراءة جميع فقرات هذا القسم",

    // Fathers
    "fathers.title": "آباء الكنيسة",
    "fathers.subtitle": "المعلمون العظام للكنيسة الأولى",

    // Papal
    "papal.title": "الرسائل والوثائق البابوية",
    "papal.subtitle": "الرسائل العامة والإرشادات الرسولية",

    // Vatican
    "vatican.title": "أخبار الفاتيكان",
    "vatican.subtitle": "آخر الأخبار من الكرسي الرسولي",

    // Saints
    "saints.title": "القديسين والروحانية",
    "saints.subtitle": "حياة القداسة والحكمة الروحية",

    // Heresies
    "heresies.title": "البدع والفكر المسيحي",
    "heresies.subtitle": "الأخطاء التاريخية وردّ الكنيسة",
    "heresies.response": "الردّ:",

    // Social
    "social.title": "القضايا الاجتماعية المسيحية",
    "social.subtitle": "المنظور الكاثوليكي حول القضايا المعاصرة",

    // Search
    "search.title": "بحث",
    "search.subtitle": "البحث في جميع المحتويات",
    "search.placeholder": "ابحث في التعاليم، القديسين، الكتاب المقدس...",
    "search.noResults": "لا توجد نتائج لـ",

    // More
    "more.title": "المزيد",
    "more.subtitle": "استكشف جميع الأقسام",
    "more.settings": "الإعدادات",
    "more.darkMode": "الوضع الداكن",
    "more.bookmarks": "المحفوظات",
    "more.share": "مشاركة التطبيق",
    "more.comingSoon": "قريبًا",
    "more.language": "اللغة",
    "more.fathersLibrary": "مكتبة آباء الكنيسة",
    "more.papalDocs": "الرسائل والوثائق البابوية",
    "more.vaticanNews": "أخبار الفاتيكان",
    "more.heresiesThought": "البدع والفكر المسيحي",
    "more.socialTopics": "القضايا الاجتماعية المسيحية",
    "more.saintsSpirituality": "القديسين والروحانية",
    "more.installApp": "تثبيت التطبيق",
    "more.alreadyInstalled": "مثبّت",

    // PWA
    "pwa.title": "تثبيت كلمة الإيمان",
    "pwa.description": "أضف التطبيق لشاشتك الرئيسية للوصول السريع والقراءة بدون إنترنت.",
    "pwa.install": "تثبيت",
    "pwa.iosGuide": "اضغط على زر المشاركة",
    "pwa.addToHome": "إضافة للشاشة الرئيسية",
    "pwa.iosGuideToast": "استخدم قائمة المشاركة في Safari لتثبيت التطبيق",
    "pwa.androidGuide": "افتح قائمة المتصفح ثم اضغط تثبيت التطبيق أو إضافة إلى الشاشة الرئيسية.",
    "pwa.androidGuideToast": "استخدم قائمة المتصفح لتثبيت التطبيق",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem("vf-language");
    return (saved === "ar" ? "ar" : "en") as Language;
  });

  const [theme, setThemeState] = useState<Theme>(() => {
    const saved = localStorage.getItem("vf-theme");
    if (saved === "dark" || saved === "light") return saved;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  });

  const isRTL = language === "ar";

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("vf-language", lang);
  };

  const setTheme = (t: Theme) => {
    setThemeState(t);
    localStorage.setItem("vf-theme", t);
  };

  useEffect(() => {
    document.documentElement.dir = isRTL ? "rtl" : "ltr";
    document.documentElement.lang = language;
  }, [language, isRTL]);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const t = (key: string): string => {
    return translations[language][key] || translations.en[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isRTL, theme, setTheme }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
};
