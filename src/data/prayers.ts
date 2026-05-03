export interface Prayer {
  slug: string;
  category: PrayerCategory;
  title: string;
  titleAr: string;
  subtitle?: string;
  subtitleAr?: string;
  content: string;
  contentAr: string;
  tags?: string[];
}

export type PrayerCategory =
  | "marian"
  | "holy_spirit"
  | "rosary"
  | "saints"
  | "morning_evening"
  | "eucharistic"
  | "general";

export const PRAYER_CATEGORIES: PrayerCategory[] = [
  "marian",
  "holy_spirit",
  "rosary",
  "saints",
  "morning_evening",
  "eucharistic",
  "general",
];

// Static fallback (subset). Full content lives in Supabase.
export const prayers: Prayer[] = [
  {
    slug: "our-father",
    category: "general",
    title: "The Our Father",
    titleAr: "الأبانا",
    subtitle: "Pater Noster",
    subtitleAr: "الصلاة الربية",
    content:
      "Our Father, who art in heaven, hallowed be thy name; thy kingdom come, thy will be done on earth as it is in heaven. Give us this day our daily bread, and forgive us our trespasses, as we forgive those who trespass against us; and lead us not into temptation, but deliver us from evil. Amen.",
    contentAr:
      "أبانا الذي في السماوات، ليتقدّس اسمُك، ليأتِ ملكوتُك، لتكن مشيئتُك كما في السماءِ كذلك على الأرض. خبزَنا كفافَنا أعطنا اليوم، واغفر لنا خطايانا، كما نغفرُ نحنُ أيضاً للمذنبينَ إلينا، ولا تُدخلنا في التجربة، لكن نجِّنا من الشرير. آمين.",
  },
  {
    slug: "hail-mary",
    category: "marian",
    title: "Hail Mary",
    titleAr: "السلام عليك يا مريم",
    subtitle: "Ave Maria",
    subtitleAr: "الصلاة الملائكية",
    content:
      "Hail Mary, full of grace, the Lord is with thee. Blessed art thou amongst women, and blessed is the fruit of thy womb, Jesus. Holy Mary, Mother of God, pray for us sinners, now and at the hour of our death. Amen.",
    contentAr:
      "السلامُ عليكِ يا مريمُ، يا ممتلئةً نعمة، الربُّ معكِ، مباركةٌ أنتِ في النساء، ومباركةٌ ثمرةُ بطنِكِ يسوع. يا قديسةَ مريم، يا والدةَ الله، صلّي لأجلنا نحن الخطأة، الآن وفي ساعةِ موتنا. آمين.",
  },
  {
    slug: "come-holy-spirit",
    category: "holy_spirit",
    title: "Come, Holy Spirit",
    titleAr: "تعالَ أيها الروح القدس",
    content:
      "Come, Holy Spirit, fill the hearts of your faithful and kindle in them the fire of your love.",
    contentAr:
      "تعالَ أيها الروحُ القدس، واملأ قلوبَ المؤمنينَ بك، وأضرم فيها نارَ محبتك.",
  },
];
