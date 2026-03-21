export interface BibleBook {
  id: number;
  name: string;
  fullName: string;
  desc: string;
  chapters: { n: number; title: string }[];
}

export const bibleBooks: BibleBook[] = [
  {
    "id": 1,
    "name": "Genesis",
    "fullName": "THE BOOK OF GENESIS",
    "desc": "This book is so called from its treating of the GENERATION, that is, of the creation and the beginning of the world.  The Hebrews call it BERESITH, from the Word with which it begins.  It contains not only the history of the Creation of the world; but also an account of its progress during the space of 2369 years, that is, until the death of JOSEPH.",
    "chapters": [
      {
        "n": 1,
        "title": "God createth Heaven and Earth, and all things therein, in six days."
      },
      {
        "n": 2,
        "title": "God resteth on the seventh day and blesseth it.  The earthly paradise, in which God placeth man.  He commandeth him not to eat of the tree of knowledge.  And formeth a woman of his rib."
      },
      {
        "n": 3,
        "title": "The serpent's craft.  The fall of our first parents.  Their punishment. The promise of a Redeemer."
      },
      {
        "n": 4,
        "title": "The history of Cain and Abel."
      },
      {
        "n": 5,
        "title": "The genealogy, age, and death of the Patriarchs, from Adam to Noe.  The translation of Henoch."
      },
      {
        "n": 6,
        "title": "Man's sin is the cause of the deluge.  Noe is commanded to build the ark."
      },
      {
        "n": 7,
        "title": "Noe with his family go into the ark.  The deluge overflows the earth."
      },
      {
        "n": 8,
        "title": "The deluge ceaseth.  Noe goeth out of the ark, and offereth a sacrifice. God's covenant to him."
      },
      {
        "n": 9,
        "title": "God blesseth Noe:  forbiddeth blood, and promiseth never more to destroy the world by water.  The blessing of Sem and Japheth."
      },
      {
        "n": 10,
        "title": "The genealogy of the children of Noe, by whom the world was peopled after the flood."
      },
      {
        "n": 11,
        "title": "The tower of Babel.  The confusion of tongues.  The genealogy of Sem down to Abram."
      },
      {
        "n": 12,
        "title": "The call of Abram, and the promise made to him.  He sojourneth in Chanaan, and then by occasion of a famine, goeth down to Egypt."
      },
      {
        "n": 13,
        "title": "Abram and Lot part from each other.  God's promise to Abram."
      },
      {
        "n": 14,
        "title": "The expedition of the four kings; the victory of Abram; he is blessed by Melchisedech."
      },
      {
        "n": 15,
        "title": "God promiseth seed to Abram.  His faith, sacrifice and vision."
      },
      {
        "n": 16,
        "title": "Abram marrieth Agar, who bringeth forth Ismael."
      },
      {
        "n": 17,
        "title": "The Covenant of circumcision."
      },
      {
        "n": 18,
        "title": "Angels are entertained by Abraham.  They foretell the birth of Isaac. Abraham's prayer for the men of Sodom."
      },
      {
        "n": 19,
        "title": "Lot, entertaining Angels in his house, is delivered from Sodom, which is destroyed:  his wife for looking back is turned into a statue of salt."
      },
      {
        "n": 20,
        "title": "Abraham sojourned in Gerara:  Sara is taken into king Abimelech's house, but by God's commandment is restored untouched."
      },
      {
        "n": 21,
        "title": "Isaac is born.  Agar and Ismael are cast forth."
      },
      {
        "n": 22,
        "title": "The faith and obedience of Abraham is proved in his readiness to sacrifice his son Isaac.  He is stayed from the act by an angel.  Former promises are renewed to him.  His brother Nachor's issue."
      },
      {
        "n": 23,
        "title": "Sara's death and burial in the field bought of Ephron."
      },
      {
        "n": 24,
        "title": "Abraham's servant, sent by him into Mesopotamia, bringeth from thence Rebecca, who is married to Isaac."
      },
      {
        "n": 25,
        "title": "Abraham's children by Cetura; his death and that of Ismael.  Isaac hath Esau and Jacob twins.  Esau selleth his first birthright to Jacob."
      },
      {
        "n": 26,
        "title": "Isaac sojourneth in Gerara, where God reneweth to him the promise made to Abraham.  King Abimelech maketh league with him."
      },
      {
        "n": 27,
        "title": "Jacob, by him mother's counsel, obtaineth his father's blessing instead of Esau.  And by her is advised to fly to his uncle Laban."
      },
      {
        "n": 28,
        "title": "Jacob's journey to Mesopotamia:  his vision and vow."
      },
      {
        "n": 29,
        "title": "Jacob serveth Laban seven years for Rachel:  but is deceived with Lia: he afterwards marrieth Rachel.  Lia bears him four sons."
      },
      {
        "n": 30,
        "title": "Rachel, being barren, delivereth her handmaid to Jacob; she beareth two sons.  Lia ceasing to bear, giveth also her handmaid, and she beareth two more.  Then Lia beareth other two sons and one daughter.  Rachel beareth Joseph.  Jacob, desirous to return home, is hired to stay for a certain part of the flock's increase, whereby he becometh exceeding rich."
      },
      {
        "n": 31,
        "title": "Jacob's departure:  he is pursued and overtaken by Laban.  They make a covenant."
      },
      {
        "n": 32,
        "title": "Jacob's vision of angels; his message and presents to Esau; his wrestling with an angel."
      },
      {
        "n": 33,
        "title": "Jacob and Esau meet:  Jacob goeth to Salem, where he raiseth an altar."
      },
      {
        "n": 34,
        "title": "Dina is ravished, for which the Sichemites are destroyed."
      },
      {
        "n": 35,
        "title": "Jacob purgeth his family from idols:  goeth by God's commandment to Bethel, and there buildeth an altar.  God appearing again to Jacob blesseth him, and changeth his name into Israel.  Rachel dieth in childbirth.  Isaac also dieth."
      },
      {
        "n": 36,
        "title": "Esau with his wives and children parteth from Jacob.  An account of his descendants, and of the first kings of Edom."
      },
      {
        "n": 37,
        "title": "Joseph's dreams:  he is sold by his brethren, and carried into Egypt."
      },
      {
        "n": 38,
        "title": "The sons of Juda:  the death of Her and Onan:  the birth of Phares and Zara."
      },
      {
        "n": 39,
        "title": "Joseph hath charge of his master's house:  rejecteth his mistress's solicitations:  is falsely accused by her, and cast into prison, where he hath the charge of all the prisoners."
      },
      {
        "n": 40,
        "title": "Joseph interpreteth the dreams of two of Pharao's servants in prison: the event declareth the interpretations to be true, but Joseph is forgotten."
      },
      {
        "n": 41,
        "title": "Joseph interpreteth the two dreams of Pharao:  he is made ruler over all Egypt."
      },
      {
        "n": 42,
        "title": "Jacob sendeth his ten sons to buy corn in Egypt.  Their treatment by Joseph."
      },
      {
        "n": 43,
        "title": "The sons of Jacob go again into Egypt with Benjamin.  They are entertained by Joseph."
      },
      {
        "n": 44,
        "title": "Joseph's contrivance to stop his brethren.  The humble supplication of Juda."
      },
      {
        "n": 45,
        "title": "Joseph maketh himself known to his brethren:  and sendeth for his father."
      },
      {
        "n": 46,
        "title": "Israel, warranted by a vision from God, goeth down into Egypt with all his family."
      },
      {
        "n": 47,
        "title": "Jacob and his sons are presented before Pharao:  he giveth them the land of Gessen.  The famine forceth the Egyptians to sell all their possessions to the king."
      },
      {
        "n": 48,
        "title": "Joseph visiteth his father in his sickness, who adopteth his two sons Manasses and Ephraim, and blesseth them, preferring the younger before the elder."
      },
      {
        "n": 49,
        "title": "Jacob's prophetical blessings of his twelve sons:  his death."
      },
      {
        "n": 50,
        "title": "The mourning for Jacob, and his interment.  Joseph's kindness towards his brethren.  His death."
      }
    ]
  },
  {
    "id": 2,
    "name": "Exodus",
    "fullName": "THE BOOK OF EXODUS",
    "desc": "The Second Book of Moses is called EXODUS, from the Greek word EXODOS, which signifies going out:  because it contains the history of the going out of the children of Israel out of Egypt.  The Hebrews, from the words with which it begins, call it VEELLE SEMOTH:  These are the names.  It contains transactions for 145 years; that is, from the death of Joseph to the erecting of the tabernacle.",
    "chapters": [
      {
        "n": 1,
        "title": "The Israelites are multiplied in Egypt.  They are oppressed by a new king, who commandeth all their male children to be killed."
      },
      {
        "n": 2,
        "title": "Moses is born and exposed on the bank of the river; where he is taken up by the daughter of Pharao, and adopted for her son.  He killeth an Egyptian, and fleeth into Madian; where he marrieth a wife."
      },
      {
        "n": 3,
        "title": "God appeareth to Moses in a bush, and sendeth him to deliver Israel."
      },
      {
        "n": 4,
        "title": "Moses is empowered to confirm his mission with miracles:  his brother Aaron is appointed to assist him."
      },
      {
        "n": 5,
        "title": "Pharao refuseth to let the people go.  They are more oppressed."
      },
      {
        "n": 6,
        "title": "God reneweth his promise.  The genealogies of Ruben, Simon and Levi, down to Moses and Aaron. 6;1. And the Lord said to Moses:  Now thou shalt see what I will do to Pharao:  for by a mighty hand shall he let them go, and with a strong hand shall he cast them out of his land."
      },
      {
        "n": 7,
        "title": "Moses and Aaron go into Pharao:  they turn the rod into a serpent; and the waters of Egypt into blood, which was the first plague.  The magicians do the like, and Pharao's heart is hardened."
      },
      {
        "n": 8,
        "title": "The second plague is of frogs:  Pharao promiseth to let the Israelites go, but breaketh his promise.  The third plague is of sciniphs.  The fourth is of flies.  Pharao again promiseth to dismiss the people, but doth it not."
      },
      {
        "n": 9,
        "title": "The fifth plague is a murrain among the cattle.  The sixth, of boils in men and beasts.  The seventh, of hail.  Pharao promiseth again to let the people go, and breaketh his word."
      },
      {
        "n": 10,
        "title": "The eighth plague of the locusts.  The ninth, of darkness:  Pharao is still hardened."
      },
      {
        "n": 11,
        "title": "Pharao and his people are threatened with the death of their firstborn."
      },
      {
        "n": 12,
        "title": "The manner of preparing, and eating the paschal lamb:  the firstborn of Egypt are all slain:  the Israelites depart."
      },
      {
        "n": 13,
        "title": "The paschal solemnity is to be observed; and the firstborn are to be consecrated to God.  The people are conducted through the desert by a pillar of fire in the night, and a cloud in the day."
      },
      {
        "n": 14,
        "title": "Pharao pursueth the children of Israel.  They murmur against Moses, but are encouraged by him, and pass through the Red Sea.  Pharao and his army following them are drowned."
      },
      {
        "n": 15,
        "title": "The canticle of Moses.  The bitter waters of Mara are made sweet."
      },
      {
        "n": 16,
        "title": "The people murmur for want of meat:  God giveth them quails and manna."
      },
      {
        "n": 17,
        "title": "The people murmur again for want of drink; the Lord giveth them water out of a rock.  Moses lifting up his hand in prayer, Amalec is overcome."
      },
      {
        "n": 18,
        "title": "Jethro bringeth to Moses his wife and children.  His counsel."
      },
      {
        "n": 19,
        "title": "They come to Sinai:  the people are commanded to be sanctified.  The Lord, coming in thunder and lightning, speaketh with Moses."
      },
      {
        "n": 20,
        "title": "The ten commandments."
      },
      {
        "n": 21,
        "title": "Laws relating to Justice."
      },
      {
        "n": 22,
        "title": "The punishment of theft, and other trespasses.  The law of lending without usury, of taking pledges of reverences to superiors, and of paying tithes."
      },
      {
        "n": 23,
        "title": "Laws for judges; the rest of the seventh year, and day:  three principal feasts to be solemnized every year; the promise of an angel, to conduct and protect them:  idols are to be destroyed."
      },
      {
        "n": 24,
        "title": "Moses writeth his law; and after offering sacrifices, sprinkleth the blood of the testament upon the people:  then goeth up the mountain which God covereth with a fiery cloud."
      },
      {
        "n": 25,
        "title": "Offerings prescribed for making the tabernacle, the ark, the candlestick, etc."
      },
      {
        "n": 26,
        "title": "The form of the tabernacle with its appurtenances."
      },
      {
        "n": 27,
        "title": "The altar; and the court of the tabernacle with its hangings and pillars.  Provision of oil for lamps."
      },
      {
        "n": 28,
        "title": "The holy vestments for Aaron and his sons."
      },
      {
        "n": 29,
        "title": "The manner of consecrating Aaron and other priests; the institution of the daily sacrifice of two lambs, one in the morning, the other at evening."
      },
      {
        "n": 30,
        "title": "The altar of incense:  money to be gathered for the use of the tabernacle:  the brazen laver:  the holy oil of unction, and the composition of the perfume."
      },
      {
        "n": 31,
        "title": "Beseleel and Ooliab are appointed by the Lord to make the tabernacle, and the things belonging thereto.  The observation of the sabbath day is again commanded.  And the Lord delivereth to Moses two tables written with the finger of God."
      },
      {
        "n": 32,
        "title": "The people fall into idolatry.  Moses prayeth for them.  He breaketh the tables:  destroyeth the idol:  blameth Aaron, and causeth many of the idolaters to be slain."
      },
      {
        "n": 33,
        "title": "The people mourn for their sin.  Moses pitcheth the tabernacle without the camp.  He converseth familiarly with God.  Desireth to see his glory."
      },
      {
        "n": 34,
        "title": "The tables are renewed:  all society with the Chanaanites is forbid: some precepts concerning the firstborn, the sabbath, and other feasts: after forty days' fast, Moses returneth to the people with the commandments, and his face appearing horned with rays of light, he covereth it, whensoever he speaketh to the people."
      },
      {
        "n": 35,
        "title": "The sabbath.  Offerings for making the tabernacle.  Beseleel and Ooliab are called to the work."
      },
      {
        "n": 36,
        "title": "The offerings are delivered to the workmen, the curtains, coverings, boards, bars, veil, pillars, and hanging are made."
      },
      {
        "n": 37,
        "title": "Beseleel maketh the ark:  the propitiatory, and cherubims, the table, the candlestick, the lamps, and the altar of incense, and compoundeth the incense."
      },
      {
        "n": 38,
        "title": "He maketh the altar of holocaust.  The brazen laver.  The court with its pillars and hangings.  The sum of what the people offered."
      },
      {
        "n": 39,
        "title": "All the ornaments of Aaron and his sons are made.  And the whole work of the tabernacle is finished."
      },
      {
        "n": 40,
        "title": "The tabernacle is commanded to be set up and anointed.  God filleth it with his majesty."
      }
    ]
  },
  {
    "id": 3,
    "name": "Leviticus",
    "fullName": "THE BOOK OF LEVITICUS",
    "desc": "This Book is called LEVITICUS, because it treats of the Offices, Ministries, Rites and Ceremonies of the Priests and Levites.  The Hebrews call it VAICRA, from the word with which it begins.",
    "chapters": [
      {
        "n": 1,
        "title": "Of holocausts or burnt offerings."
      },
      {
        "n": 2,
        "title": "Of offerings of flour, and firstfruits."
      },
      {
        "n": 3,
        "title": "Of peace offerings."
      },
      {
        "n": 4,
        "title": "Of offerings for sins of ignorance."
      },
      {
        "n": 5,
        "title": "Of other sacrifices for sins."
      },
      {
        "n": 6,
        "title": "Oblation for sins of injustice:  ordinances concerning the holocausts and the perpetual fire:  the sacrifices of the priests, and the sin offerings."
      },
      {
        "n": 7,
        "title": "Of sacrifices for trespasses and thanks offerings.  No fat nor blood is to be eaten."
      },
      {
        "n": 8,
        "title": "Moses consecrateth Aaron and his sons."
      },
      {
        "n": 9,
        "title": "Aaron offereth sacrifice for himself and the people.  Fire cometh from the Lord upon the altar."
      },
      {
        "n": 10,
        "title": "Nadab and Abiu for offering strange fire, are burnt by fire.  Priests are forbidden to drink wine, when they enter into the tabernacle.  The law of eating the holy things."
      },
      {
        "n": 11,
        "title": "The distinction of clean and unclean animals."
      },
      {
        "n": 12,
        "title": "The purification of women after childbirth."
      },
      {
        "n": 13,
        "title": "The law concerning leprosy in men, and in garments."
      },
      {
        "n": 14,
        "title": "The rites of sacrifices in cleansing the leprosy.  Leprosy in houses."
      },
      {
        "n": 15,
        "title": "Other legal uncleannesses."
      },
      {
        "n": 16,
        "title": "When and how the high priest must enter into the sanctuary.  The feast of expiation."
      },
      {
        "n": 17,
        "title": "No sacrifices to be offered but at the door of the tabernacle:  a prohibition of blood."
      },
      {
        "n": 18,
        "title": "Marriage is prohibited in certain degrees of kindred:  Anda all unnatural lusts."
      },
      {
        "n": 19,
        "title": "Divers ordinances, partly moral, partly ceremonial or judicial."
      },
      {
        "n": 20,
        "title": "Divers crimes to be punished with death."
      },
      {
        "n": 21,
        "title": "Ordinances relating to the priests."
      },
      {
        "n": 22,
        "title": "Who may eat the holy things:  and what things may be offered."
      },
      {
        "n": 23,
        "title": "Holy days to be kept."
      },
      {
        "n": 24,
        "title": "The oil for the lamps.  The loaves of proposition.  The punishment of blasphemy."
      },
      {
        "n": 25,
        "title": "The law of the seventh and of the fiftieth year of jubilee."
      },
      {
        "n": 26,
        "title": "God's promises to them that keep his commandments.  And the many punishments with which he threatens transgressors."
      },
      {
        "n": 27,
        "title": "Of vows and tithes."
      }
    ]
  },
  {
    "id": 4,
    "name": "Numbers",
    "fullName": "THE BOOK OF NUMBERS",
    "desc": "This fourth Book of Moses is called NUMBERS, because it begins with the numbering of the people.  The Hebrews, from its first words, call it VAIEDABBER.  It contains the transactions of the Israelites from the second month of the second year after their going out of Egypt, until the beginning of the eleventh month of the fortieth year; that is, a history almost of thirty-nine years.",
    "chapters": [
      {
        "n": 1,
        "title": "The children of Israel are numbered:  the Levites are designed to serve the tabernacle."
      },
      {
        "n": 2,
        "title": "The order of the tribes in their camp."
      },
      {
        "n": 3,
        "title": "The Levites are numbered and their offices distinguished.  They are taken in the place of the firstborn of the children of Israel."
      },
      {
        "n": 4,
        "title": "The age and time of the Levites' service:  their offices and burdens."
      },
      {
        "n": 5,
        "title": "The unclean are removed out of the camp:  confession of sins, and satisfaction:  firstfruits and oblations belonging to the priests:  trial of jealousy."
      },
      {
        "n": 6,
        "title": "The law of the Nazarites:  the form of blessing the people."
      },
      {
        "n": 7,
        "title": "The offerings of the princes at the dedication of the tabernacle.  God speaketh to Moses from the propitiatory."
      },
      {
        "n": 8,
        "title": "The seven lamps are placed on the golden candlestick, to shine towards the loaves of proposition:  the ordination of the Levites:  and to what age they shall serve in the tabernacle."
      },
      {
        "n": 9,
        "title": "The precept of the pasch is renewed:  the unclean and travellers are to observe it the second month:  the camp is guided by the pillar of the cloud."
      },
      {
        "n": 10,
        "title": "The silver trumpets and their use.  They march from Sinai."
      },
      {
        "n": 11,
        "title": "The people murmur and are punished with fire.  God appointeth seventy ancients for assistants to Moses.  They prophesy.  The people have their fill of flesh, but forthwith many die of the plague."
      },
      {
        "n": 12,
        "title": "Mary and Aaron murmur against Moses, whom God praiseth above other prophets.  Mary being struck with leprosy, Aaron confesseth his fault. Moses prayeth for her, and after seven days' separation from the camp, she is restored."
      },
      {
        "n": 13,
        "title": "The twelve spies are sent to view the land.  The relation they make of it."
      },
      {
        "n": 14,
        "title": "The people murmur.  God threateneth to destroy them.  He is appeased by Moses, yet so as to exclude the murmurers from entering the promised land.  The authors of the sedition are struck dead.  The rest going to fight against the will of God are beaten."
      },
      {
        "n": 15,
        "title": "Certain laws concerning sacrifices.  Sabbath breaking is punished with death.  The law of fringes on their garments."
      },
      {
        "n": 16,
        "title": "The schism of Core and his adherents:  their punishment."
      },
      {
        "n": 17,
        "title": "The priesthood is confirmed to Aaron by the miracle of the blooming of his rod, which is kept for a monument in the tabernacle."
      },
      {
        "n": 18,
        "title": "The charge of the priests and of the Levites, and their portion."
      },
      {
        "n": 19,
        "title": "The law of the sacrifice of the red cow, and the water of expiation."
      },
      {
        "n": 20,
        "title": "The death of Mary the sister of Moses.  The people murmur for want of water:  God giveth it them from the rock.  The death of Aaron."
      },
      {
        "n": 21,
        "title": "King Arad is overcome.  The people murmur and are punished with fiery serpents:  they are healed by the brazen serpent.  They conquer the kings Sehon and Og."
      },
      {
        "n": 22,
        "title": "Balac, king of Moab, sendeth twice for Balaam to curse Israel.  In his way Balaam is rebuked by an angel."
      },
      {
        "n": 23,
        "title": "Balaam, instead of cursing Israel, is obliged to bless them, and prophesy good things of them."
      },
      {
        "n": 24,
        "title": "Balaam still continues to prophesy good things in favour of Israel."
      },
      {
        "n": 25,
        "title": "The people fall into fornication and idolatry; for which twenty-four thousand are slain.  The zeal of Phinees."
      },
      {
        "n": 26,
        "title": "The people are again numbered by their tribes and families."
      },
      {
        "n": 27,
        "title": "The law of inheritance.  Josue is appointed to succeed Moses."
      },
      {
        "n": 28,
        "title": "Sacrifices are appointed as well for every day as for sabbaths, and other festivals."
      },
      {
        "n": 29,
        "title": "Sacrifices for the festivals of the seventh month."
      },
      {
        "n": 30,
        "title": "Of vows and oaths:  and their obligation."
      },
      {
        "n": 31,
        "title": "The Madianites are slain for having drawn the people of Israel into sin.  The dividing of the booty."
      },
      {
        "n": 32,
        "title": "The tribes of Ruben and Gad, and half of the tribe of Manasses, receive their inheritance on the east side of Jordan, upon conditions approved of by Moses."
      },
      {
        "n": 33,
        "title": "The mansions or journeys of the children of Israel towards the land of promise."
      },
      {
        "n": 34,
        "title": "The limits of Chanaan; with the names of the men that make the division of it."
      },
      {
        "n": 35,
        "title": "Cities are appointed for the Levites.  Of which six are to be the cities of refuge."
      },
      {
        "n": 36,
        "title": "That the inheritances may not be alienated from one tribe to another, all are to marry within their own tribes."
      }
    ]
  },
  {
    "id": 5,
    "name": "Deuteronomy",
    "fullName": "THE BOOK OF DEUTERONOMY",
    "desc": "This Book is called DEUTERONOMY, which signifies a SECOND LAW, because it repeats and inculcates the ordinances formerly given on mount Sinai, with other precepts not expressed before.  The Hebrews, from the first words in the book, call it ELLE HADDEBARIM.",
    "chapters": [
      {
        "n": 1,
        "title": "A repetition of what passed at Sinai and Cadesbarne:  and of the people's murmuring and their punishment."
      },
      {
        "n": 2,
        "title": "They are forbid to fight against the Edomites, Moabites, and Ammonites. Their victory over Sehon king of Hesebon."
      },
      {
        "n": 3,
        "title": "The victory over Og king of Basan.  Ruben, Gad, and half the tribe of Manasses receive their possession on the other side of Jordan."
      },
      {
        "n": 4,
        "title": "Moses exhorteth the people to keep God's commandments:  particularly to fly idolatry.  Appointeth three cities of refuge, on that side of the Jordan."
      },
      {
        "n": 5,
        "title": "The ten commandments are repeated and explained."
      },
      {
        "n": 6,
        "title": "An exhortation to the love of God, and obedience to his law."
      },
      {
        "n": 7,
        "title": "No league nor fellowship to be made with the Chanaanites:  God promiseth his people his blessing and assistance, if they keep his commandments."
      },
      {
        "n": 8,
        "title": "The people is put in mind of God's dealings with them, to the end that they may love him and serve him."
      },
      {
        "n": 9,
        "title": "Lest they should impute their victories to their own merits, they are put in mind of their manifold rebellions and other sins, for which they should have been destroyed, but God spared them for his promise made to Abraham, Isaac, and Jacob."
      },
      {
        "n": 10,
        "title": "God giveth the second tables of the law:  a further exhortation to fear and serve the Lord."
      },
      {
        "n": 11,
        "title": "The love and service of God are still inculcated, with a blessing to them that serve him, and threats of punishment if they forsake his law."
      },
      {
        "n": 12,
        "title": "All idolatry must be extirpated:  sacrifices, tithes, and firstfruits must be offered in one only place:  all eating of blood is prohibited."
      },
      {
        "n": 13,
        "title": "False prophets must be slain, and idolatrous cities destroyed."
      },
      {
        "n": 14,
        "title": "In mourning for the dead they are not to follow the ways of the Gentiles:  the distinction of clean and unclean meats:  ordinances concerning tithes, and firstfruits."
      },
      {
        "n": 15,
        "title": "The law of the seventh year of remission.  The firstlings of cattle are to be sanctified to the Lord."
      },
      {
        "n": 16,
        "title": "The three principal solemnities to be observed:  just judges to be appointed in every city:  all occasions of idolatry to be avoided."
      },
      {
        "n": 17,
        "title": "Victims must be without blemish.  Idolaters are to be slain. Controversies are to be decided by the high priest and council, whose sentence must be obeyed under pain of death.  The duty of a king, who is to receive the law of God at the priest's hands."
      },
      {
        "n": 18,
        "title": "The Lord is the inheritance of the priests and Levites.  Heathenish abominations are to be avoided.  The great PROPHET CHRIST is promised. False prophets must be slain."
      },
      {
        "n": 19,
        "title": "The cities of refuge.  Wilful murder, and false witnesses must be punished."
      },
      {
        "n": 20,
        "title": "Laws relating to war."
      },
      {
        "n": 21,
        "title": "The expiation of a secret murder.  The marrying a captive.  The eldest son must not be deprived of his birthright for hatred of his mother.  A stubborn son is to be stoned to death.  When one is hanged on a gibbet, he must be taken down the same day and buried."
      },
      {
        "n": 22,
        "title": "Humanity towards neighbours.  Neither sex may use the apparel of the other.  Cruelty to be avoided even to birds.  Battlements about the roof of a house.  Things of divers kinds not to be mixed.  The punishment of him that slandereth his wife, as also of adultery and rape."
      },
      {
        "n": 23,
        "title": "Who may and who may not enter into the church:  uncleanness to be avoided:  other precepts concerning fugitives, fornication, usury, vows, and eating other men's grapes and corn."
      },
      {
        "n": 24,
        "title": "Divorce permitted to avoid greater evil:  the newly married must not go to war:  of men stealers, of leprosy, of pledges, of labourers' hire, of justice, and of charity to the poor."
      },
      {
        "n": 25,
        "title": "Stripes must not exceed forty.  The ox is not to be muzzled.  Of raising seed to the brother.  Of the immodest woman.  Of unjust weight.  Of destroying the Amalecites."
      },
      {
        "n": 26,
        "title": "The form of words with which the firstfruits and tithes are to be offered.  God's covenant."
      },
      {
        "n": 27,
        "title": "The commandments must be written on stones:  and an altar erected, and sacrifices offered.  The observers of the commandments are to be blessed, and the transgressors cursed."
      },
      {
        "n": 28,
        "title": "Many blessings are promised to observers of God's commandments:  and curses threatened to transgressors."
      },
      {
        "n": 29,
        "title": "The covenant is solemnly confirmed between God and his people.  Threats against those that shall break it."
      },
      {
        "n": 30,
        "title": "Great mercies are promised to the penitent:  God's commandment is feasible.  Life and death are set before them."
      },
      {
        "n": 31,
        "title": "Moses encourageth the people, and Josue, who is appointed to succeed him.  He delivereth the law to the priests.  God foretelleth that the people will often forsake him, and that he will punish them.  He commandeth Moses to write a canticle, as a constant remembrancer of the law."
      },
      {
        "n": 32,
        "title": "A canticle for the remembrance of the law.  Moses is commanded to go up into a mountain, from whence he shall see the promised land but not enter into it."
      },
      {
        "n": 33,
        "title": "Moses before his death blesseth the tribes of Israel."
      },
      {
        "n": 34,
        "title": "Moses seeth the promised land, but is not suffered to go into it.  He dieth at the age of 120 years.  God burieth his body secretly, and all Israel mourn for him thirty days.  Josue, replenished (by imposition of Moses's hands) with the spirit of God, succeedeth.  But Moses, for his special familiarity with God, and for most wonderful miracles, is commended above all other prophets."
      }
    ]
  },
  {
    "id": 6,
    "name": "Josue",
    "fullName": "THE BOOK OF JOSUE",
    "desc": "This Book is called JOSUE, because it contains the history of what passed under him, and according to the common opinion was written by him.  The Greeks call him Jesus:  for Josue and Jesus in the Hebrew, are the same name, and have the same signification, viz., A SAVIOUR.  And it was not without a mystery that he who was to bring the people into the land of promise should have his name changed from OSEE (for so he was called before, Num. 13.17,) to JOSUE or JESUS, to give us to understand, that Moses by his law could only bring the people within sight of the promised inheritance, but that our Saviour JESUS was to bring us into it.",
    "chapters": [
      {
        "n": 1,
        "title": "Josue, encouraged by the Lord, admonisheth the people to prepare themselves to pass over the Jordan."
      },
      {
        "n": 2,
        "title": "Two spies are sent to Jericho, who are received and concealed by Rahab."
      },
      {
        "n": 3,
        "title": "The river Jordan is miraculously dried up for the passage of the children of Israel."
      },
      {
        "n": 4,
        "title": "Twelve stones are taken out of the river to be set up for a monument of the miracle; and other twelve are placed in the midst of the river."
      },
      {
        "n": 5,
        "title": "The people are circumcised:  they keep the pasch.  The manna ceaseth.  An angel appeareth to Josue."
      },
      {
        "n": 6,
        "title": "After seven days' processions, the priests sounding the trumpets, the walls of Jericho fall down:  and the city is taken and destroyed."
      },
      {
        "n": 7,
        "title": "For the sins of Achan, the Israelites are defeated at Hai.  The offender is found out; and stoned to death, and God's wrath is turned from them."
      },
      {
        "n": 8,
        "title": "Hai is taken and burnt, and all the inhabitants slain.  An altar is built, and sacrifices offered.  The law is written on stones, and the blessings and cursings are read before all the people."
      },
      {
        "n": 9,
        "title": "Josue is deceived by the Gabaonites:  who being detected are condemned to be perpetual servants."
      },
      {
        "n": 10,
        "title": "Five kings war against Gabaon.  Josue defeateth them:  many are slain with hailstones.  At the prayer of Josue the sun and moon stand still the space of one day.  The five kings are hanged.  Divers cities are taken."
      },
      {
        "n": 11,
        "title": "The kings of the north are overthrown:  the whole country is taken."
      },
      {
        "n": 12,
        "title": "A list of the kings slain by Moses and Josue,"
      },
      {
        "n": 13,
        "title": "God commandeth Josue to divide the land:  the possessions of Ruben, Gad, and half the tribe of Manasses, beyond the Jordan."
      },
      {
        "n": 14,
        "title": "Caleb's petition; Hebron is given to him and to his seed."
      },
      {
        "n": 15,
        "title": "The borders of the lot of Juda.  Caleb's portion and conquest.  The cities of Juda."
      },
      {
        "n": 16,
        "title": "The lot of the sons of Joseph.  The borders of the tribe of Ephraim."
      },
      {
        "n": 17,
        "title": "The lot of the half tribe of Manasses."
      },
      {
        "n": 18,
        "title": "Surveyors are sent to divide the rest of the land into seven tribes. The lot of Benjamin."
      },
      {
        "n": 19,
        "title": "The lots of the tribes of Simeon, Zabulon, Issachar, Aser, Nephtali and Dan.  A city is given to Josue."
      },
      {
        "n": 20,
        "title": "The cities of refuge are appointed for casual manslaughter."
      },
      {
        "n": 21,
        "title": "Cities with their suburbs are assigned for the priests and Levites."
      },
      {
        "n": 22,
        "title": "The tribes of Ruben and Gad, and half the tribe of Manasses return to their possessions.  They build an altar by the side of the Jordan, which alarms the other tribes.  An embassage is sent to them, to which they give a satisfactory answer."
      },
      {
        "n": 23,
        "title": "Josue being old admonisheth the people to keep God's commandments:  and to avoid marriages and all society with the Gentiles for fear of being brought to idolatry."
      },
      {
        "n": 24,
        "title": "Josue assembleth the people, and reneweth the covenant between them and God.  His death and burial."
      }
    ]
  },
  {
    "id": 7,
    "name": "Judges",
    "fullName": "THE BOOK OF JUDGES",
    "desc": "This Book is called JUDGES, because it contains the history of what passed under the government of the judges, who ruled Israel before they had kings.  The writer of it, according to the more general opinion, was the prophet Samuel.",
    "chapters": [
      {
        "n": 1,
        "title": "The expedition and victory of Juda against the Chanaanites:  who are tolerated in many places."
      },
      {
        "n": 2,
        "title": "An angel reproveth Israel.  They weep for their sins.  After the death of Josue, they often fall, and repenting are delivered from their afflictions, but still fall worse and worse."
      },
      {
        "n": 3,
        "title": "The people falling into idolatry are oppressed by their enemies; but repenting are delivered by Othoniel, Aod, and Samgar."
      },
      {
        "n": 4,
        "title": "Debbora and Barac deliver Israel from Jabin and Sisara, Jahal killeth Sisara."
      },
      {
        "n": 5,
        "title": "The canticle of Debbora and Barac after their victory."
      },
      {
        "n": 6,
        "title": "The people for their sins, are oppressed by the Madianites.  Gedeon is called to deliver them."
      },
      {
        "n": 7,
        "title": "Gedeon, with three hundred men, by stratagem defeateth the Madianites."
      },
      {
        "n": 8,
        "title": "Gedeon appeaseth the Ephraimites.  Taketh Zebee and Salmana.  Destroyeth Soccoth and Phanuel.  Refuseth to be king.  Maketh an ephod of the gold of the prey, and dieth in a good old age.  The people return to idolatry."
      },
      {
        "n": 9,
        "title": "Abimelech killeth his brethren.  Joatham's parable.  Gaal conspireth with the Sichemites against Abimelech, but is overcome.  Abimelech destroyeth Sichem:  but is killed at Thebes."
      },
      {
        "n": 10,
        "title": "Thola ruleth Israel twenty-three years; and Jair twenty-two.  The people fall again into idolatry, and are afflicted again by the Philistines and Ammonites.  They cry to God for help, who upon their repentance hath compassion on them."
      },
      {
        "n": 11,
        "title": "Jephte is made ruler of the people of Galaad:  he first pleads their cause against the Ammonites; then making a vow obtains a signal victory; he performs his vow."
      },
      {
        "n": 12,
        "title": "The Ephraimites quarrel with Jephte:  forty-two thousand of them are slain:  Abeson, Ahialon, and Abdon, are judges."
      },
      {
        "n": 13,
        "title": "The people fall again into idolatry and are afflicted by the Philistines.  An angel foretelleth the birth of Samson."
      },
      {
        "n": 14,
        "title": "Samson desireth a wife of the Philistines.  He killeth a lion:  in whose mouth he afterwards findeth honey.  His marriage feast, and riddle, which is discovered by his wife.  He killeth, and strippeth thirty Philistines.  His wife taketh another man."
      },
      {
        "n": 15,
        "title": "Samson is denied his wife.  He burns the corn of the Philistines, and kills many of them."
      },
      {
        "n": 16,
        "title": "Samson is deluded by Dalila:  and falls into the hands of the Philistines.  His death."
      },
      {
        "n": 17,
        "title": "The history of the idol of Michas, and the young Levite."
      },
      {
        "n": 18,
        "title": "The expedition of the men of Dan against Lais:  in their way they rob Michas of his priest and his gods."
      },
      {
        "n": 19,
        "title": "A Levite bringing home his wife, is lodged by an old man at Gabaa in the tribe of Benjamin.  His wife is there abused by wicked men, and in the morning found dead.  Her husband cutteth her body in pieces, and sendeth to every tribe of Israel, requiring them to revenge the wicked fact."
      },
      {
        "n": 20,
        "title": "The Israelites warring against Benjamin are twice defeated; but in the third battle the Benjamites are all slain, saving six hundred men."
      },
      {
        "n": 21,
        "title": "The tribe of Benjamin is saved from being utterly extinct, by providing wives for the six hundred that remained."
      }
    ]
  },
  {
    "id": 8,
    "name": "Ruth",
    "fullName": "THE BOOK OF RUTH",
    "desc": "This Book is called RUTH, from the name of the person whose history is here recorded:  who, being a Gentile, became a convert to the true faith, and marrying Booz, the great-grandfather of David, was one of those from whom Christ sprung according to the flesh, and an illustrious figure of the Gentile church.  It is thought this book was written by the prophet Samuel.",
    "chapters": [
      {
        "n": 1,
        "title": "Elimelech of Bethlehem going with his wife Noemi, and two sons, into the land of Moab, dieth there.  His sons marry wives of that country and die without issue.  Noemi returneth home with her daughter in law Ruth, who refuseth to part with her."
      },
      {
        "n": 2,
        "title": "Ruth gleaneth in the field of Booz, who sheweth her favour."
      },
      {
        "n": 3,
        "title": "Ruth instructed by her mother in law lieth at Booz's feet, claiming him for her husband by the law of affinity:  she receiveth a good answer, and six measures of barley."
      },
      {
        "n": 4,
        "title": "Upon the refusal of the nearer kinsman, Booz marrieth Ruth, who bringeth forth Obed, the grandfather of David."
      }
    ]
  },
  {
    "id": 9,
    "name": "1 Kings",
    "fullName": "THE FIRST BOOK OF SAMUEL, OTHERWISE CALLED THE FIRST BOOK OF KINGS",
    "desc": "This and the following Book are called by the Hebrews the books of Samuel, because they contain the history of Samuel, and of the two kings, Saul and David, whom he anointed.  They are more commonly named by the Fathers, the first and second book of kings.  As to the writer of them, it is the common opinion that Samuel composed the first book, as far as the twenty-fifth chapter; and that the prophets Nathan and Gad finished the first, and wrote the second book.  See 1 Paralipomenon, alias 1 Chronicles, 29.29.",
    "chapters": [
      {
        "n": 1,
        "title": "Anna the wife of Elcana being barren, by vow and prayer obtaineth a son:  whom she calleth Samuel:  and presenteth him to the service of God in Silo, according to her vow."
      },
      {
        "n": 2,
        "title": "The canticle of Anna.  The wickedness of the sons of Heli:  for which they are not duly corrected by their father.  A prophecy against the house of Heli."
      },
      {
        "n": 3,
        "title": "Samuel is four times called by the Lord:  who revealeth to him the evil that shall fall on Heli, and his house."
      },
      {
        "n": 4,
        "title": "The Israelites being overcome by the Philistines, send for the ark of God:  but they are beaten again, the sons of Heli are killed, and the ark taken:  upon the hearing of the news Heli falleth backward and dieth."
      },
      {
        "n": 5,
        "title": "Dagon twice falleth down before the ark.  The Philistines are grievously afflicted, wherever the ark cometh."
      },
      {
        "n": 6,
        "title": "The ark is sent back to Bethsames:  where many are slain for looking through curiosity into it."
      },
      {
        "n": 7,
        "title": "The ark is brought to Cariathiarim.  By Samuel's exhortation the people cast away their idols and serve God alone.  The Lord defeateth the Philistines, while Samuel offereth sacrifice."
      },
      {
        "n": 8,
        "title": "Samuel growing old, and his sons not walking in his ways, the people desire a king."
      },
      {
        "n": 9,
        "title": "Saul seeking his father's asses, cometh to Samuel, by whom he is entertained."
      },
      {
        "n": 10,
        "title": "Saul is anointed.  He prophesieth, and is changed into another man. Samuel calleth the people together, to make a king:  the lot falleth on Saul."
      },
      {
        "n": 11,
        "title": "Saul defeateth the Ammonites, and delivereth Jabes Galaad."
      },
      {
        "n": 12,
        "title": "Samuel's integrity is acknowledged.  God sheweth by a sign from heaven that they had done ill in asking for a king."
      },
      {
        "n": 13,
        "title": "The war between Saul and the Philistines.  The distress of the Israelites.  Saul offereth sacrifice before the coming of Samuel:  for which he is reproved."
      },
      {
        "n": 14,
        "title": "Jonathan attacketh the Philistines.  A miraculous victory.  Saul's unadvised oath, by which Jonathan is put in danger of his life, but is delivered by the people."
      },
      {
        "n": 15,
        "title": "Saul is sent to destroy Amalec:  he spareth their king and the best of their cattle:  for which disobedience he is cast off by the Lord."
      },
      {
        "n": 16,
        "title": "Samuel is sent to Bethlehem, where he anointeth David:  who is taken into Saul's family."
      },
      {
        "n": 17,
        "title": "War with the Philistines.  Goliath challengeth Israel.  He is slain by David."
      },
      {
        "n": 18,
        "title": "The friendship of Jonathan and David.  The envy of Saul, and his design upon David's life.  He marrieth him to his daughter Michol."
      },
      {
        "n": 19,
        "title": "Other attempts of Saul upon David's life.  He cometh to Samuel.  Saul's messengers, and Saul himself prophesy."
      },
      {
        "n": 20,
        "title": "Saul being obstinately bent upon killing David, he is sent away by Jonathan."
      },
      {
        "n": 21,
        "title": "David receiveth holy bread of Achimelech, the priest:  and feigneth himself mad before Achis, king of Geth."
      },
      {
        "n": 22,
        "title": "Many resort to David.  Doeg accuseth Achimelech to Saul.  He ordereth him and all the other priests of Nobe to be slain.  Abiathar escapeth."
      },
      {
        "n": 23,
        "title": "David relieveth Ceila, besieged by the Philistines.  He fleeth into the desert of Ziph.  Jonathan and he confirm their former covenant.  The Ziphites discover him to Saul, who pursuing close after him, is called away by an invasion from the Philistines."
      },
      {
        "n": 24,
        "title": "Saul seeketh David in the wilderness of Engaddi:  he goeth into a cave where David hath him in his power."
      },
      {
        "n": 25,
        "title": "The death of Samuel.  David, provoked by Nabal, threateneth to destroy him:  but is appeased by Abigail."
      },
      {
        "n": 26,
        "title": "Saul goeth out again after David, who cometh by night where Saul and his men are asleep, but suffereth him not to be touched.  Saul again confesseth his fault, and promiseth peace."
      },
      {
        "n": 27,
        "title": "David goeth again to Achis king of Geth, and obtaineth of him the city of Siceleg."
      },
      {
        "n": 28,
        "title": "The Philistines go out to war against Israel.  Saul being forsaken by God, hath recourse to a witch.  Samuel appeareth to him."
      },
      {
        "n": 29,
        "title": "David going with the Philistines is sent back by their princes."
      },
      {
        "n": 30,
        "title": "The Amalecites burn Siceleg, and carry off the prey:  David pursueth after them, and recovereth all out of their hands."
      },
      {
        "n": 31,
        "title": "Israel is defeated by the Philistines:  Saul and his sons are slain."
      }
    ]
  },
  {
    "id": 10,
    "name": "2 Kings",
    "fullName": "THE SECOND BOOK OF SAMUEL, OTHERWISE CALLED THE SECOND BOOK OF KINGS",
    "desc": "This Book relates the transactions from the death of Saul until the end of David's reign, being a history for the space of about forty-six years.",
    "chapters": [
      {
        "n": 1,
        "title": "David mourneth for the death of Saul and Jonathan:  he ordereth the man to be slain who pretended he had killed Saul."
      },
      {
        "n": 2,
        "title": "David is received and anointed king of Juda.  Isboseth the son of Saul reigneth over the rest of Israel.  A battle between Abner and Joab."
      },
      {
        "n": 3,
        "title": "David groweth daily stronger.  Abner cometh over to him:  he is treacherously slain by Joab."
      },
      {
        "n": 4,
        "title": "Isboseth is murdered by two of his servants.  David punisheth the murderers."
      },
      {
        "n": 5,
        "title": "David is anointed king of all Israel.  He taketh Jerusalem, and dwelleth there.  He defeateth the Philistines."
      },
      {
        "n": 6,
        "title": "David fetcheth the ark from Cariathiarim.  Oza is struck dead for touching it.  It is deposited in the house of Obededom:  and from thence carried to David's house."
      },
      {
        "n": 7,
        "title": "David's purpose to build a temple is rewarded with the promise of great blessings in his seed:  his prayer and thanksgiving."
      },
      {
        "n": 8,
        "title": "David's victories, and his chief officers."
      },
      {
        "n": 9,
        "title": "David's kindness to Miphiboseth for the sake of his father Jonathan."
      },
      {
        "n": 10,
        "title": "The Ammonites shamefully abuse the ambassadors of David:  they hire the Syrians to the their assistance:  but are overthrown with their allies."
      },
      {
        "n": 11,
        "title": "David falleth into the crime of adultery with Bethsabee:  and not finding other means to conceal it, causeth her husband Urias to be slain.  Then marrieth her, who beareth him a son."
      },
      {
        "n": 12,
        "title": "Nathan's parable.  David confesseth his sin, and is forgiven:  yet so as to be sentenced to most severe temporal punishments.  The death of the child.  The birth of Solomon.  The taking of Rabbath."
      },
      {
        "n": 13,
        "title": "Ammon ravisheth Thamar.  For which Absalom killeth him, and flieth to Gessur."
      },
      {
        "n": 14,
        "title": "Joab procureth Absalom's return, and his admittance to the king's presence."
      },
      {
        "n": 15,
        "title": "Absalom's policy and conspiracy.  David is obliged to flee."
      },
      {
        "n": 16,
        "title": "Siba bringeth provisions to David.  Semei curseth him.  Absalom defileth his father's wives."
      },
      {
        "n": 17,
        "title": "Achitophel's counsel is defeated by Chusai:  who sendeth intelligence to David.  Achitophel hangeth himself."
      },
      {
        "n": 18,
        "title": "Absalom is defeated, and slain by Joab.  David mourneth for him."
      },
      {
        "n": 19,
        "title": "David, at the remonstrances of Joab, ceaseth his mourning.  He is invited back and met by Semei and Miphiboseth:  a strife between the men of Juda and the men of Israel."
      },
      {
        "n": 20,
        "title": "Seba's rebellion.  Amasa is slain by Joab.  Abela is besieged, but upon the citizens casting over the wall the head of Seba, Joab departeth with all his army."
      },
      {
        "n": 21,
        "title": "A famine of three years, for the sin of Saul against the Gabaonites, at whose desire seven of Saul's race are crucified.  War again with the Philistines."
      },
      {
        "n": 22,
        "title": "King David's psalm of thanksgiving for his deliverance from all his enemies."
      },
      {
        "n": 23,
        "title": "The last words of David.  A catalogue of his valiant men."
      },
      {
        "n": 24,
        "title": "David numbereth the people:  God sendeth a pestilence, which is stopt by David's prayer and sacrifice."
      }
    ]
  },
  {
    "id": 11,
    "name": "3 Kings",
    "fullName": "THE THIRD BOOK OF KINGS",
    "desc": "This and the following Book are called by the holy fathers the third and fourth book of Kings; but by the Hebrews, the first and second. They contain the history of the kingdoms of Israel and Juda, from the beginning of the reign of Solomon, to the captivity.  As to the writer of these books, it seems most probable they were not written by one man; nor at one time; but as there was all along a succession of prophets in Israel, who recorded, by divine inspiration, the most remarkable things that happened in their days, these books seem to have been written by these prophets.  See 2 Paralip. alias 2 Chron. 9.29; 12.15; 13.22; 20.34; 26.22; 32.32.",
    "chapters": [
      {
        "n": 1,
        "title": "King David growing old, Abisag a Sunamitess is brought to him.  Adonias pretending to reign, Nathan and Bethsabee obtain that Solomon should be declared and anointed king."
      },
      {
        "n": 1,
        "title": "David, after giving his last charge to Solomon, dieth.  Adonias is put to death:  Abiathar is banished:  Joab and Semei are slain."
      },
      {
        "n": 3,
        "title": "Solomon marrieth Pharao's daughter.  He sacrificeth in Gabaon:  in the choice which God gave him he preferreth wisdom.  His wise judgment between the two harlots."
      },
      {
        "n": 4,
        "title": "Solomon's chief officers.  His riches and wisdom."
      },
      {
        "n": 5,
        "title": "Hiram king of Tyre agreeth to furnish timber and workmen for building the temple:  the number of workmen and overseers."
      },
      {
        "n": 6,
        "title": "The building of Solomon's temple."
      },
      {
        "n": 7,
        "title": "Solomon's palace, his house in the forest, and the queen's house:  the work of the two pillars:  the sea (or laver) and other vessels."
      },
      {
        "n": 8,
        "title": "The dedication of the temple:  Solomon's prayer and sacrifices."
      },
      {
        "n": 9,
        "title": "The Lord appeareth again to Solomon:  he buildeth cities:  he sendeth a fleet to Ophir."
      },
      {
        "n": 10,
        "title": "The queen of Saba cometh to king Solomon:  his riches and glory."
      },
      {
        "n": 11,
        "title": "Solomon by means of his wives falleth into idolatry:  God raiseth him adversaries, Adad, Razon, and Jeroboam:  Solomon dieth."
      },
      {
        "n": 12,
        "title": "Roboam, following the counsel of young men alienateth from him the minds of the people.  They make Jeroboam king over ten tribes:  he setteth up idolatry."
      },
      {
        "n": 13,
        "title": "A prophet sent from Juda to Bethel foretelleth the birth of Josias, and the destruction of Jeroboam's altar.  Jeroboam's hand offering violence to the prophet withereth, but is restored by the prophet's prayer:  the same prophet is deceived by another prophet, and slain by a lion."
      },
      {
        "n": 14,
        "title": "Ahias prophesieth the destruction of the family of Jeroboam.  He dieth, and is succeeded by his son Nadab.  The king of Egypt taketh and pillageth Jerusalem.  Roboam dieth and his son Abiam succeedeth."
      },
      {
        "n": 15,
        "title": "The acts of Abiam and of Asa kings of Juda.  And of Nadab and Baasa kings of Israel."
      },
      {
        "n": 16,
        "title": "Jehu prophesieth against Baasa:  his son Ela is slain and all his family destroyed by Zambri.  Of the reign of Amri father of Achab."
      },
      {
        "n": 17,
        "title": "Elias shutteth up the heaven from raining.  He is fed by ravens, and afterwards by a widow of Sarephta.  He raiseth the window's son to life."
      },
      {
        "n": 18,
        "title": "Elias cometh before Achab.  He convinceth the false prophets by bringing fire from heaven:  he obtaineth rain by his prayer."
      },
      {
        "n": 19,
        "title": "Elias, fleeing from Jezabel, is fed by an angel in the desert; and by the strength of that food walketh forty days, till he cometh to Horeb, where he hath a vision of God."
      },
      {
        "n": 20,
        "title": "The Syrians besiege Samaria:  they are twice defeated by Achab:  who is reprehended by a prophet for letting Benadad go."
      },
      {
        "n": 21,
        "title": "Naboth, for denying his vineyard to king Achab, is by Jezabel's commandment, falsely accused and stoned to death.  For which crime Elias denounceth to Achab the judgments of God:  upon his humbling himself the sentence is mitigated."
      },
      {
        "n": 22,
        "title": "Achab believing his false prophets, rather than Micheas, is slain in Ramoth Galaad.  Ochozias succeedeth him.  Good king Josaphat dieth, and his son Joram succeedeth him."
      }
    ]
  },
  {
    "id": 12,
    "name": "4 Kings",
    "fullName": "THE FOURTH BOOK OF KINGS",
    "desc": "",
    "chapters": [
      {
        "n": 1,
        "title": "Ochozias sendeth to consult Beelzebub:  Elias foretelleth his death:  and causeth fire to come down from heaven, upon two captains and their companies."
      },
      {
        "n": 2,
        "title": "Eliseus will not part from Elias.  The water of the Jordan is divided by Elias' cloak.  Elias is taken up in a fiery chariot, and his double spirit is given to Eliseus.  Eliseus healeth the waters by casting in salt.  Boys are torn by bears for mocking Eliseus."
      },
      {
        "n": 3,
        "title": "The kings of Israel, Juda, and Edom, fight against the king of Moab. They want water, which Eliseus procureth without rain:  and prophesieth victory.  The king of Moab is overthrown, his city is besieged:  he sacrificeth his firstborn son:  so the Israelites raise the siege."
      },
      {
        "n": 4,
        "title": "Miracles of Eliseus.  He raiseth a dead child to life."
      },
      {
        "n": 5,
        "title": "Naaman the Syrian is cleansed of his leprosy.  He professeth his belief in one God, promising to serve him.  Giezi taketh gifts of Naaman, and is struck with leprosy."
      },
      {
        "n": 6,
        "title": "Eliseus maketh iron to swim upon the water:  he leadeth the Syrians that were sent to apprehend him into Samaria, where there eyes being opened, they are courteously entertained.  The Syrians besiege Samaria:  the famine there causeth a woman to eat her own child.  Upon this the king commandeth Eliseus to be put to death."
      },
      {
        "n": 7,
        "title": "Eliseus prophesieth a great plenty, which presently ensueth upon the sudden flight of the Syrians; of which four lepers bring the news to the city.  The incredulous nobleman is trod to death."
      },
      {
        "n": 8,
        "title": "After seven years' famine foretold by Eliseus, the Sunamitess returning home, recovereth her lands, and revenues.  Eliseus foresheweth the death of Benadad, king of Syria, and the reign of Hazael.  Joram's wicked reign in Juda.  He dieth, and his son Ochozias succeedeth."
      },
      {
        "n": 9,
        "title": "Jehu is anointed king of Israel, to destroy the house of Achab and Jezebel.  He killeth Joram king of Israel, and Ochozias king of Juda. Jezebel is eaten by dogs."
      },
      {
        "n": 10,
        "title": "Jehu destroyeth the house of Achab:  abolisheth the worship of Baal, and killeth the worshippers:  but sticketh to the calves of Jeroboam.  Israel is afflicted by the Syrians."
      },
      {
        "n": 11,
        "title": "Athalia's usurpation and tyranny.  Joas is made king.  Athalia is slain."
      },
      {
        "n": 12,
        "title": "The temple is repaired.  Hazael is bought off from attacking Jerusalem. Joas is slain."
      },
      {
        "n": 13,
        "title": "The reign of Joachaz and of Joas kings of Israel.  The last acts and death of Eliseus the prophet:  a dead man is raised to life by the touch of his bones."
      },
      {
        "n": 14,
        "title": "Amasias reigneth in Juda:  he overcometh the Edomites:  but is overcome by Joas king of Israel.  Jereboam the second reigneth in Israel."
      },
      {
        "n": 15,
        "title": "The reign of Azarias, and Joatham in Juda:  and of Zacharias, Sellum, Manahem, Phaceia, and Phacee in Israel."
      },
      {
        "n": 16,
        "title": "The wicked reign of Achaz:  the kings of Syria and Israel war against him:  he hireth the king of the Assyrians to assist him:  he causeth an altar to be made after the pattern of that of Damascus."
      },
      {
        "n": 17,
        "title": "The reign of Osee.  The Israelites for their sins are carried into captivity:  other inhabitants are sent to Samaria, who make a mixture of religion."
      },
      {
        "n": 18,
        "title": "The reign of Ezechias:  he abolisheth idolatry and prospereth. Sennacherib cometh up against him:  Rabsaces soliciteth the people to revolt; and blasphemeth the Lord."
      },
      {
        "n": 19,
        "title": "Ezechias is assured of God's help by Isaias the prophet.  The king of the Assyrians still threateneth and blasphemeth.  Ezechias prayeth, and God promiseth to protect Jerusalem.  An angel destroyeth the army of the Assyrians, their king returneth to Nineve, and is slain by his two sons."
      },
      {
        "n": 20,
        "title": "Ezechias being sick, is told by Isaias that he shall die; but praying to God, he obtaineth longer life, and in confirmation thereof receiveth a sign by the sun's returning back.  He sheweth all his treasures to the ambassadors of the king of Babylon:  Isaias reproving him for it, foretelleth the Babylonish captivity."
      },
      {
        "n": 21,
        "title": "The wickedness of Manasses:  God's threats by his prophets.  His wicked son Amon succeedeth him, and is slain by his servants."
      },
      {
        "n": 22,
        "title": "Josias repaireth the temple.  The book of the law is found, upon which they consult the Lord, and are told that great evils shall fall upon them, but not in the time of Josias."
      },
      {
        "n": 23,
        "title": "Josias readeth the law before all the people.  They promise to observe it.  He abolisheth all idolatry, celebrateth the phase:  is slain in battle by the king of Egypt.  The short reign of Joachaz, in whose place Joakim is made king."
      },
      {
        "n": 24,
        "title": "The reign of Joakim, Joachin, and Sedecias."
      },
      {
        "n": 25,
        "title": "Jerusalem is besieged and taken by Nabuchodonosor:  Sedecias is taken: the city and temple are destroyed.  Godolias, who is left governor, is slain.  Joachin is exalted by Evilmerodach."
      }
    ]
  },
  {
    "id": 13,
    "name": "1 Paralipomenon",
    "fullName": "THE FIRST BOOK OF PARALIPOMENON",
    "desc": "These Books are called by the Greek interpreters, Paralipomenon, that is, of things left out, or omitted; because they are a kind of a supplement of such things as were passed over in the books of the Kings.  The Hebrews call them Dibre Haijamim, that is, The words of the days, or The Chronicles.--Not that they are the books which are so often quoted in the Kings, under the title of the words of the days of the kings of Israel, and of the kings of Juda:  for the books of Paralipomenon were written after the books of Kings:  but because in all probability they have been abridged from those ancient words of the days, by Esdras or some other sacred writer.",
    "chapters": [
      {
        "n": 1,
        "title": "The genealogy of the patriarchs down to Abraham:  The posterity of Abraham and of Esau."
      },
      {
        "n": 2,
        "title": "The twelve tribes of Israel.  The genealogy of Juda down to David.  Other genealogies of the tribe of Juda."
      },
      {
        "n": 3,
        "title": "The genealogy of the house of David."
      },
      {
        "n": 4,
        "title": "Other genealogies of Juda and Simeon, and their victories."
      },
      {
        "n": 5,
        "title": "Genealogies of Ruben and Gad:  their victories over the Agarites:  their captivity."
      },
      {
        "n": 6,
        "title": "The genealogies of Levi, and of Aaron:  the cities of the Levites."
      },
      {
        "n": 7,
        "title": "Genealogies of Issachar, Benjamin, Nephtali, Manasses, Ephraim, and Aser."
      },
      {
        "n": 8,
        "title": "The posterity of Benjamin is further declared down to Saul.  His issue."
      },
      {
        "n": 9,
        "title": "The Israelites, priests, and Levites, who first dwelt in Jerusalem after the captivity.  A repetition of the genealogy of Saul."
      },
      {
        "n": 10,
        "title": "Saul is slain for his sins:  he is buried by the men of Jabes."
      },
      {
        "n": 11,
        "title": "David is made king.  He taketh the castle of Sion.  A catalogue of his valiant men."
      },
      {
        "n": 12,
        "title": "Who followed David when he fled from Saul.  And who came to Hebron to make him king."
      },
      {
        "n": 13,
        "title": "The ark is brought from Cariathiarim.  Oza for touching it is struck dead."
      },
      {
        "n": 14,
        "title": "David's house, and children:  his victories over the Philistines."
      },
      {
        "n": 15,
        "title": "The ark is brought into the city of David, with great solemnity.  Michol derideth David's devotion."
      },
      {
        "n": 16,
        "title": "The ark is placed in the tabernacle.  Sacrifice is offered.  David blesseth the people, disposeth the offices of Levites, and maketh a psalm of praise to God."
      },
      {
        "n": 17,
        "title": "David's purpose to build a temple, is rewarded by most ample promises: David's thanksgiving."
      },
      {
        "n": 18,
        "title": "David's victories.  His chief officers."
      },
      {
        "n": 19,
        "title": "The Ammonites abuse David's ambassadors:  both they and their confederates are overthrown."
      },
      {
        "n": 20,
        "title": "Rabba is taken.  Other victories over the Philistines."
      },
      {
        "n": 21,
        "title": "David's sin in numbering the people is punished by a pestilence:  which ceaseth upon his offering sacrifice in the thrashingfloor of Ornan."
      },
      {
        "n": 22,
        "title": "David having prepared all necessaries, chargeth Solomon to build the temple and the princes to assist him."
      },
      {
        "n": 23,
        "title": "David appointeth Solomon king.  The distribution of the Levites and their offices."
      },
      {
        "n": 24,
        "title": "The divisions of the priests into four and twenty courses, to serve in the temple:  the chiefs of the Levites."
      },
      {
        "n": 25,
        "title": "The number and divisions of the musicians."
      },
      {
        "n": 26,
        "title": "The divisions of the porters.  Offices of other Levites."
      },
      {
        "n": 27,
        "title": "The twelve captains for every month; the twelve princes of the tribes. David's several officers."
      },
      {
        "n": 28,
        "title": "David's speech, in a solemn assembly:  his exhortation to Solomon.  He giveth him a pattern of the temple."
      },
      {
        "n": 29,
        "title": "David by word and example encourageth the princes to contribute liberally to the building of the temple.  His thanksgiving, prayer, and sacrifices:  his death."
      }
    ]
  },
  {
    "id": 14,
    "name": "2 Paralipomenon",
    "fullName": "THE SECOND BOOK OF PARALIPOMENON",
    "desc": "",
    "chapters": [
      {
        "n": 1,
        "title": "Solomon offereth sacrifices at Gabaon.  His choice of wisdom which God giveth him."
      },
      {
        "n": 2,
        "title": "Solomon's embassy to Hiram, who sends him a skilful workman and timber."
      },
      {
        "n": 3,
        "title": "The plan and ornaments of the temple:  the cherubims, the veil, and the pillars."
      },
      {
        "n": 4,
        "title": "The altar of brass, the molten sea upon twelve oxen, the ten loaves, the candlesticks and other vessels and ornaments of the temple."
      },
      {
        "n": 5,
        "title": "The ark is brought with great solemnity into the temple:  the temple is filled with the glory of God."
      },
      {
        "n": 6,
        "title": "Solomon's blessings and prayer."
      },
      {
        "n": 7,
        "title": "Fire from heaven consumeth the sacrifices.  The solemnity of the dedication of the temple.  God signifieth his having heard Solomon's prayer:  yet so if he continue to serve him."
      },
      {
        "n": 8,
        "title": "Solomon's buildings and other acts."
      },
      {
        "n": 9,
        "title": "The queen of Saba admireth the wisdom of Solomon.  His riches and glory. His death."
      },
      {
        "n": 10,
        "title": "Roboam answereth the people roughly:  upon which ten tribes revolt."
      },
      {
        "n": 11,
        "title": "Roboam's reign.  His kingdom is strengthened."
      },
      {
        "n": 12,
        "title": "Roboam for his sins is delivered up into the hands of the king of Egypt:  who carrieth away all the treasures of the temple."
      },
      {
        "n": 13,
        "title": "Abia's reign:  his victory over Jeroboam."
      },
      {
        "n": 14,
        "title": "The reign of Asa:  his victory over the Ethiopians."
      },
      {
        "n": 15,
        "title": "The prophecy of Azarias.  Asa's covenant with God.  He deposeth his mother."
      },
      {
        "n": 16,
        "title": "Asa is reproved for seeking help from the Syrians:  his last acts and death."
      },
      {
        "n": 17,
        "title": "Josaphat's reign:  his care for the instruction of his people:  his numerous forces."
      },
      {
        "n": 18,
        "title": "Josaphat accompanies Achab in his expedition against Ramoth; where Achab is slain, as Micheas had foretold."
      },
      {
        "n": 19,
        "title": "Josaphat's charge to the judges and to the Levites."
      },
      {
        "n": 20,
        "title": "The Ammonites, Moabites, and Syrians combine against Josaphat:  he seeketh God's help by public prayer and fasting.  A prophet foretelleth that God will fight for his people:  the enemies destroy one another. Josaphat with his men gathereth the spoils.  He reigneth in peace, but his navy perisheth, for his society with wicked Ochozias."
      },
      {
        "n": 21,
        "title": "Joram's wicked reign:  his punishment and death."
      },
      {
        "n": 22,
        "title": "The reign and death of Ochozias.  The tyranny of Athalia."
      },
      {
        "n": 23,
        "title": "Joiada the high priest causeth Joas to be made king:  Athalia to be slain, and idolatry to be destroyed."
      },
      {
        "n": 24,
        "title": "Joas reigneth well all the days of Joiada:  afterwards falleth into idolatry and causeth Zacharias to be slain.  He is slain himself by his servants."
      },
      {
        "n": 25,
        "title": "Amasias' reign:  he beginneth well, but endeth ill:  he is overthrown by Joas, and slain by his people."
      },
      {
        "n": 26,
        "title": "Ozias reigneth prosperously, till he invadeth the priests' office, upon which he is struck with a leprosy."
      },
      {
        "n": 27,
        "title": "Joatham's good reign."
      },
      {
        "n": 28,
        "title": "The wicked and unhappy reign of Achaz."
      },
      {
        "n": 29,
        "title": "Ezechias purifieth the temple, and restoreth religion."
      },
      {
        "n": 30,
        "title": "Ezechias inviteth all Israel to celebrate the pasch; the solemnity is kept fourteen days."
      },
      {
        "n": 31,
        "title": "Idolatry is abolished; and provisions made for the ministers."
      },
      {
        "n": 32,
        "title": "Sennacherib invadeth Juda:  his army is destroyed by an angel.  Ezechias recovereth from his sickness:  his other acts."
      },
      {
        "n": 33,
        "title": "Manasses for his manifold wickedness is led captive to Babylon:  he repenteth, and is restored to his kingdom, and destroyeth idolatry:  his successor Amon is slain by his servants."
      },
      {
        "n": 34,
        "title": "Josias destroyeth idolatry, repaireth the temple, and reneweth the covenant between God and the people."
      },
      {
        "n": 35,
        "title": "Josias celebrateth a most solemn pasch.  He is slain by the king of Egypt."
      },
      {
        "n": 36,
        "title": "The reigns of Joachaz, Joakim, Joachin, and Sedecias:  the captivity of Babylon released at length by Cyrus."
      }
    ]
  },
  {
    "id": 15,
    "name": "1 Esdras",
    "fullName": "THE FIRST BOOK OF ESDRAS",
    "desc": "This Book taketh its name from the writer:  who was a holy priest, and doctor of the law.  He is called by the Hebrews, Ezra.",
    "chapters": [
      {
        "n": 1,
        "title": "Cyrus king of Persia releaseth God's people from their captivity, with license to return and build the temple in Jerusalem:  and restoreth the holy vessels which Nabuchodonosor had taken from thence."
      },
      {
        "n": 2,
        "title": "The number of them that returned to Judea:  their oblations."
      },
      {
        "n": 3,
        "title": "An altar is built for sacrifice, the feast of tabernacles is solemnly celebrated, and the foundations of the temple are laid."
      },
      {
        "n": 4,
        "title": "The Samaritans by their letter to the king hinder the building."
      },
      {
        "n": 5,
        "title": "By the exhortation of Aggeus, and Zacharias, the people proceed in building the temple.  Which their enemies strive in vain to hinder."
      },
      {
        "n": 6,
        "title": "King Darius favoureth the building and contributeth to it."
      },
      {
        "n": 7,
        "title": "Esdras goeth up to Jerusalem to teach, and assist the people, with a gracious decree of Artaxerxes."
      },
      {
        "n": 8,
        "title": "The companions of Esdras.  The fast which he appointed.  They bring the holy vessels into the temple."
      },
      {
        "n": 9,
        "title": "Esdras mourneth for the transgression of the people:  his confession and prayer."
      },
      {
        "n": 10,
        "title": "Order is given for discharging strange women:  the names of the guilty."
      }
    ]
  },
  {
    "id": 16,
    "name": "2 Esdras",
    "fullName": "THE BOOK OF NEHEMIAS, WHICH IS CALLED THE SECOND OF ESDRAS",
    "desc": "This Book takes its name from the writer, who was cupbearer to Artaxerxes (surnamed Longimanus) king of Persia, and was sent by him with a commission to rebuild the walls of Jerusalem.  It is also called the second book of Esdras; because it is a continuation of the history, begun by Esdras, of the state of the people of God after their return from captivity.",
    "chapters": [
      {
        "n": 1,
        "title": "Nehemias hearing the miserable state of his countrymen in Judea, lamenteth, fasteth, and prayeth to God for their relief."
      },
      {
        "n": 2,
        "title": "Nehemias with commission from king Artaxerxes cometh to Jerusalem:  and exhorteth the Jews to rebuild the walls."
      },
      {
        "n": 3,
        "title": "They begin to build the walls:  the names and order of the builders."
      },
      {
        "n": 4,
        "title": "The building is carried on notwithstanding the opposition of their enemies."
      },
      {
        "n": 5,
        "title": "Nehemias blameth the rich, for their oppressing the poor.  His exhortation, and bounty to his countrymen."
      },
      {
        "n": 6,
        "title": "The enemies seek to terrify Nehemias.  He proceedeth and finisheth the wall."
      },
      {
        "n": 7,
        "title": "Nehemias appointeth watchmen in Jerusalem.  The list of those who came first from Babylon."
      },
      {
        "n": 8,
        "title": "Esdras readeth the law before the people.  Nehemias comforteth them. They celebrate the feast of tabernacles."
      },
      {
        "n": 9,
        "title": "The people repent with fasting and sackcloth.  The Levites confess God's benefits, and the people's ingratitude:  they pray for them, and make a covenant with God."
      },
      {
        "n": 10,
        "title": "The names of the subscribers to the covenant, and the contents of it."
      },
      {
        "n": 11,
        "title": "Who were the inhabitants of Jerusalem, and the other cities."
      },
      {
        "n": 12,
        "title": "The priests, and Levites that came up with Zorobabel.  The succession of high priests:  the solemnity of the dedication of the wall."
      },
      {
        "n": 13,
        "title": "Divers abuses are reformed."
      }
    ]
  },
  {
    "id": 17,
    "name": "Tobias",
    "fullName": "THE BOOK OF TOBIAS",
    "desc": "This Book takes its name from the holy man Tobias, whose wonderful virtues are herein recorded.  It contains most excellent documents of great piety, extraordinary patience, and of a perfect resignation to the will of God.  His humble prayer was heard, and the angel Raphael was sent to relieve him:  he is thankful and praises the Lord, calling on the children of Israel to do the same.  Having lived to the age of one hundred and two years, he exhorts his son and grandsons to piety, foretells the destruction of Ninive and the rebuilding of Jerusalem:  he dies happily.",
    "chapters": [
      {
        "n": 1,
        "title": "Tobias's early piety:  his works of mercy, particularly in burying the dead."
      },
      {
        "n": 2,
        "title": "Tobias leaveth his dinner to bury the dead:  he loseth his sight by God's permission, for manifestation of his patience."
      },
      {
        "n": 3,
        "title": "The prayer of Tobias, and of Sara, in their several afflictions, are heard by God, and the angel Raphael is sent to relieve them."
      },
      {
        "n": 4,
        "title": "Tobias thinking he shall die, giveth his son godly admonitions:  and telleth him of money he had lent to a friend."
      },
      {
        "n": 5,
        "title": "Young Tobias seeking a guide for his journey, the angel Raphael, in shape of a man, undertaketh this office."
      },
      {
        "n": 6,
        "title": "By the angel's advice young Tobias taketh hold on a fish that assaulteth him.  Reserveth the heart, the gall, and the liver for medicines.  They lodge at the house of Raguel, whose daughter Sara, Tobias is to marry; she had before been married to seven husbands, who were all slain by a devil."
      },
      {
        "n": 7,
        "title": "They are kindly entertained by Raguel.  Tobias demandeth Sara to wife."
      },
      {
        "n": 8,
        "title": "Tobias burneth part of the fish's liver, and Raphael bindeth the devil. Tobias and Sara pray."
      },
      {
        "n": 9,
        "title": "The angel Raphael goeth to Gabelus, receiveth the money, and bringeth him to the marriage."
      },
      {
        "n": 10,
        "title": "The parents lament the long absence of their son Tobias.  He sets out to return."
      },
      {
        "n": 11,
        "title": "Tobias anointeth his father's eyes with the fish's gall, and he recovereth his sight."
      },
      {
        "n": 12,
        "title": "Raphael maketh himself known."
      },
      {
        "n": 13,
        "title": "Tobias the father praiseth God, exhorting all Israel to do the same. Prophesieth the restoration and better state of Jerusalem."
      },
      {
        "n": 14,
        "title": "Old Tobias dieth at the age of a hundred and two years, after exhorting his son and grandsons to piety, foreshewing that Ninive shall be destroyed, and Jerusalem rebuilt.  The younger Tobias returneth with his family to Raguel, and dieth happily as he had lived."
      }
    ]
  },
  {
    "id": 18,
    "name": "Judith",
    "fullName": "THE BOOK OF JUDITH",
    "desc": "The sacred writer of this Book is generally believed to be the high priest Eliachim (called also Joachim).  The transactions herein related, most probably happened in his days, and in the reign of Manasses, after his repentance and return from captivity.  It takes its name from that illustrious woman, by whose virtue and fortitude, and armed with prayer, the children of Israel were preserved from the destruction threatened them by Holofernes and his great army.  It finishes with her canticle of thanksgiving to God.",
    "chapters": [
      {
        "n": 1,
        "title": "Nabuchodonosor king of the Assyrians overcometh Arphaxad king of the Medes."
      },
      {
        "n": 2,
        "title": "Nabuchodonosor sendeth Holofernes to waste the countries of the west."
      },
      {
        "n": 3,
        "title": "Many submit themselves to Holofernes.  He destroyeth their cities, and their gods, that Nabuchodonosor only might be called God."
      },
      {
        "n": 4,
        "title": "The children of Israel prepare themselves to resist Holofernes.  They cry to the Lord for help."
      },
      {
        "n": 5,
        "title": "Achior gives Holofernes an account of the people of Israel."
      },
      {
        "n": 6,
        "title": "Holofernes in great rage sendeth Achior to Bethulia, there to be slain with the Israelites."
      },
      {
        "n": 7,
        "title": "Holofernes besiegeth Bethulia.  The distress of the besieged."
      },
      {
        "n": 8,
        "title": "The character of Judith:  her discourse to the ancients."
      },
      {
        "n": 9,
        "title": "Judith's prayer, to beg of God to fortify her in her undertaking."
      },
      {
        "n": 10,
        "title": "Judith goeth out towards the camp, and is taken, and brought to Holofernes."
      },
      {
        "n": 11,
        "title": "Judith's speech to Holofernes."
      },
      {
        "n": 12,
        "title": "Judith goeth out in the night to pray:  she is invited to a banquet with Holofernes."
      },
      {
        "n": 13,
        "title": "Judith cutteth off the head of Holofernes, and returneth to Bethulia."
      },
      {
        "n": 14,
        "title": "The Israelites assault the Assyrians, who finding their general slain, are seized with a panic fear."
      },
      {
        "n": 15,
        "title": "The Assyrians flee:  the Hebrews pursue after them, and are enriched by their spoils."
      },
      {
        "n": 16,
        "title": "The canticle of Judith:  her virtuous life and death."
      }
    ]
  },
  {
    "id": 19,
    "name": "Esther",
    "fullName": "THE BOOK OF ESTHER",
    "desc": "This Book takes its name from queen Esther, whose history is here recorded.  The general opinion of almost all commentators on the Holy Scriptures makes Mardochai the writer of it:  which also may be collected below from chap. 9 ver. 20.",
    "chapters": [
      {
        "n": 1,
        "title": "King Assuerus maketh a great feast.  Queen Vasthi being sent for refuseth to come:  for which disobedience she is deposed."
      },
      {
        "n": 2,
        "title": "Esther is advanced to be queen.  Mardochai detecteth a plot against the king."
      },
      {
        "n": 3,
        "title": "Aman, advanced by the king, is offended at Mardochai, and therefore procureth the king's decree to destroy the whole nation of the Jews."
      },
      {
        "n": 4,
        "title": "Mardochai desireth Esther to petition the king for the Jews.  They join in fasting and prayer."
      },
      {
        "n": 5,
        "title": "Esther is graciously received:  she inviteth the king and Aman to dinner, Aman prepareth a gibbet for Mardochai."
      },
      {
        "n": 6,
        "title": "The king hearing of the good service done him by Mardochai, commandeth Aman to honour him next to the king, which he performeth."
      },
      {
        "n": 7,
        "title": "Esther's petition for herself and her people:  Aman is hanged upon the gibbet he had prepared for Mardochai."
      },
      {
        "n": 8,
        "title": "Mardochai is advanced:  Aman's letters are reversed."
      },
      {
        "n": 9,
        "title": "The Jews kill their enemies that would have killed them.  The days of Phurim are appointed to be kept holy."
      },
      {
        "n": 10,
        "title": "Assuerus's greatness.  Mardochai's dignity."
      },
      {
        "n": 11,
        "title": "The dream of Mardochai, which in the ancient Greek and Latin Bibles was into the beginning of the book, but was detached by St. Jerome, and put in this place."
      },
      {
        "n": 12,
        "title": "Mardochai detects the conspiracy of the two eunuchs."
      },
      {
        "n": 13,
        "title": "A copy of a letter sent by Aman to destroy the Jews.  Mardochai's prayer for the people."
      },
      {
        "n": 14,
        "title": "The prayer of Esther for herself and her people."
      },
      {
        "n": 15,
        "title": "Esther comes into the king's presence:  she is terrified, but God turns his heart."
      },
      {
        "n": 16,
        "title": "A copy of the king's letter in favour of the Jews."
      }
    ]
  },
  {
    "id": 20,
    "name": "Job",
    "fullName": "THE BOOK OF JOB",
    "desc": "This Book takes its name from the holy man of whom it treats:  who, according to the more probable opinion, was of the race of Esau; and the same as Jobab, king of Edom, mentioned Gen. 36.33.  It is uncertain who was the writer of it.  Some attribute it to Job himself; others to Moses, or some one of the prophets.  In the Hebrew it is written in verse, from the beginning of the third chapter to the forty-second chapter.",
    "chapters": [
      {
        "n": 1,
        "title": "Job's virtue and riches.  Satan by permission from God strippeth him of all his substance.  His patience."
      },
      {
        "n": 2,
        "title": ""
      },
      {
        "n": 3,
        "title": ""
      },
      {
        "n": 4,
        "title": ""
      },
      {
        "n": 5,
        "title": ""
      },
      {
        "n": 6,
        "title": ""
      },
      {
        "n": 7,
        "title": ""
      },
      {
        "n": 8,
        "title": ""
      },
      {
        "n": 9,
        "title": ""
      },
      {
        "n": 10,
        "title": ""
      },
      {
        "n": 11,
        "title": "Sophar reproves Job, for justifying himself, and invites him to repentance."
      },
      {
        "n": 12,
        "title": "Job's reply to Sophar.  He extols God's power and wisdom."
      },
      {
        "n": 13,
        "title": "Job persists in maintaining his innocence:  and reproves his friends."
      },
      {
        "n": 14,
        "title": "Job declares the shortness of man's days:  and professes his belief of a resurrection."
      },
      {
        "n": 15,
        "title": "Eliphaz returns to the charge against Job, and describes the wretched state of the wicked."
      },
      {
        "n": 16,
        "title": "Job expostulates with his friends:  and appeals to the judgment of God."
      },
      {
        "n": 17,
        "title": "Job's hope in God:  he expects rest in death."
      },
      {
        "n": 18,
        "title": "Baldad again reproves Job and describes the miseries of the wicked."
      },
      {
        "n": 19,
        "title": "Job complains of the cruelty of his friends; he describes his own sufferings:  and his belief of a future resurrection."
      },
      {
        "n": 20,
        "title": "Sophar declares the shortness of the prosperity of the wicked:  and their sudden downfall."
      },
      {
        "n": 21,
        "title": "Job shews that the wicked often prosper in this world, even to the end of their life:  but that their judgment is in another world."
      },
      {
        "n": 22,
        "title": "Eliphaz falsely imputes many crimes to Job, but promises him prosperity if he will repent."
      },
      {
        "n": 23,
        "title": "Job wishes to be tried at God's tribunal."
      },
      {
        "n": 24,
        "title": "God's providence often suffers the wicked to go on a long time in their sins:  but punisheth them in another life."
      },
      {
        "n": 25,
        "title": "God's providence often suffers the wicked to go on a long time in their sins:  but punisheth them in another life."
      },
      {
        "n": 26,
        "title": "Job declares his sentiments of the wisdom and power of God."
      },
      {
        "n": 27,
        "title": "Job persists in asserting his own innocence, and that hypocrites will be punished in the end."
      },
      {
        "n": 28,
        "title": "Man's industry searcheth out many things:  true wisdom is taught by God alone."
      },
      {
        "n": 29,
        "title": "Job relates his former happiness, and the respect that all men shewed him."
      },
      {
        "n": 30,
        "title": "Job shews the wonderful change of his temporal estate, from welfare to great calamity."
      },
      {
        "n": 31,
        "title": "Job, to defend himself from the unjust judgments of his friends, gives a sincere account of his own virtues."
      },
      {
        "n": 32,
        "title": "Eliu is angry with Job and his friends.  He boasts of himself."
      },
      {
        "n": 33,
        "title": "Eliu blames Job for asserting his own innocence."
      },
      {
        "n": 34,
        "title": "Eliu charges Job with blasphemy:  and sets forth the power and justice of God."
      },
      {
        "n": 35,
        "title": "Eliu declares that the good or evil done by man cannot reach God."
      },
      {
        "n": 36,
        "title": "Eliu proceeds in setting forth the justice and power of God."
      },
      {
        "n": 37,
        "title": "Eliu goes on in his discourse, shewing God's wisdom and power, by his wonderful works."
      },
      {
        "n": 38,
        "title": "God interposes and shews from the things he hath made, that man cannot comprehend his power and wisdom."
      },
      {
        "n": 39,
        "title": "The wonders of the power and providence of God in many of his creatures."
      },
      {
        "n": 40,
        "title": "Of the power of God in the behemoth and the leviathan."
      },
      {
        "n": 41,
        "title": "A further description of the leviathan."
      },
      {
        "n": 42,
        "title": "Job submits himself.  God pronounces in his favour.  Job offers sacrifice for his friends.  He is blessed with riches and children, and dies happily,"
      }
    ]
  },
  {
    "id": 21,
    "name": "Psalms",
    "fullName": "THE BOOK OF PSALMS",
    "desc": "The psalms are called by the Hebrews TEHILLIM, that is, Hymns of Praise.  The author, of a great part of them at least, was king David: but many are of opinion that some of them were made by Asaph, and others whose names are prefixed in the titles.",
    "chapters": [
      {
        "n": 1,
        "title": "Beatus vir. The happiness of the just and the evil state of the wicked."
      },
      {
        "n": 2,
        "title": "Quare fremuerunt. The vain efforts of persecutors against Christ and his church."
      },
      {
        "n": 3,
        "title": "Domine, quid multiplicati. The prophet's danger and delivery from his son Absalom:  mystically, the passion and resurrection of Christ."
      },
      {
        "n": 4,
        "title": "Cum invocarem. The prophet teacheth us to flee to God in tribulation, with confidence in him."
      },
      {
        "n": 5,
        "title": "Verba mea auribul. A prayer to God against the iniquities of men."
      },
      {
        "n": 6,
        "title": "Domine, ne in furore. A prayer of a penitent sinner, under the scourge of God.  The first penitential psalm."
      },
      {
        "n": 7,
        "title": "Domine, Deus meus. David, trusting in the justice of his cause, prayeth for God's help against his enemies."
      },
      {
        "n": 8,
        "title": "Domine, Dominus noster. God is wonderful in his works; especially in mankind, singularly exalted by the incarnation of Christ."
      },
      {
        "n": 9,
        "title": "Confitebor tibi, Domine.  The church praiseth God for his protection against her enemies."
      },
      {
        "n": 10,
        "title": "In Domino confido. The just man's confidence in God in the midst of persecutions."
      },
      {
        "n": 11,
        "title": "Salvum me fac. The prophet calls for God's help against the wicked."
      },
      {
        "n": 12,
        "title": "Usquequo, Domine. A prayer in tribulation."
      },
      {
        "n": 13,
        "title": "Dixit insipiens. The general corruption of man before our redemption by Christ."
      },
      {
        "n": 14,
        "title": "Domine, quis habitabit. What kind of men shall dwell in the heavenly Sion."
      },
      {
        "n": 15,
        "title": "Conserva me, Domine. Christ's future victory and triumph over the world and death."
      },
      {
        "n": 16,
        "title": "Exaudi, Domine, justitiam. A just man's prayer in tribulation against the malice of his enemy."
      },
      {
        "n": 17,
        "title": "Diligam te, Domine. David's thanks to God for his delivery from all his enemies."
      },
      {
        "n": 18,
        "title": "Coeli enarrant. The works of God shew forth his glory:  his law is greatly to be esteemed and loved."
      },
      {
        "n": 19,
        "title": "Exaudiat te Dominus. A prayer for the king."
      },
      {
        "n": 20,
        "title": "Domine, in virtute. Praise to God for Christ's exaltation after his passion."
      },
      {
        "n": 21,
        "title": "Deus Deus meus. Christ's passion:  and the conversion of the Gentiles."
      },
      {
        "n": 22,
        "title": "Dominus regit me. God's spiritual benefits to faithful souls."
      },
      {
        "n": 23,
        "title": "Domini est terra. Who are they that shall ascend to heaven:  Christ's triumphant ascension thither."
      },
      {
        "n": 24,
        "title": "Ad te, Domine, levavi. A prayer for grace, mercy, and protection against our enemies."
      },
      {
        "n": 25,
        "title": "Judica me, Domine. David's prayer to God in his distress, to be delivered, that he may come to worship him in his tabernacle."
      },
      {
        "n": 26,
        "title": "Dominus illuminatio. David's faith and hope in God."
      },
      {
        "n": 27,
        "title": "Ad te, Domine, clamabo. David's prayer that his enemies may not prevail over him."
      },
      {
        "n": 28,
        "title": "Afferte Domino. An invitation to glorify God, with a commemoration of his mighty works."
      },
      {
        "n": 29,
        "title": "Exaltabo te, Domine. David praiseth God for his deliverance, and his merciful dealings with him."
      },
      {
        "n": 30,
        "title": "In te, Domine, speravi. A prayer of a just man under affliction."
      },
      {
        "n": 31,
        "title": "Beati quorum. The second penitential psalm."
      },
      {
        "n": 32,
        "title": "Exultate, justi. An exhortation to praise God, and to trust in him."
      },
      {
        "n": 33,
        "title": "Benedicam Dominum. An exhortation to the praise, and service of God."
      },
      {
        "n": 34,
        "title": "Judica, Domine, nocentes me. David, in the person of Christ, prayeth against his persecutors: prophetically foreshewing the punishments that shall fall upon them."
      },
      {
        "n": 35,
        "title": "Dixit injustus. The malice of sinners, and the goodness of God."
      },
      {
        "n": 36,
        "title": "Noli aemulari. An exhortation to despise this world; and the short prosperity of the wicked; and to trust in Providence."
      },
      {
        "n": 37,
        "title": "Domine, ne in furore. A prayer of a penitent for the remission of his sins.  The third penitential psalm."
      },
      {
        "n": 38,
        "title": "Dixi custodiam. A just man's peace and patience in his sufferings; considering the vanity of the world, and the providence of God."
      },
      {
        "n": 39,
        "title": "Expectans expectavi. Christ's coming, and redeeming mankind."
      },
      {
        "n": 40,
        "title": "Beatus qui intelligit. The happiness of him that shall believe in Christ; notwithstanding the humility and poverty in which he shall come:  the malice of his enemies, especially of the traitor Judas."
      },
      {
        "n": 41,
        "title": "Quemadmodum desiderat. The fervent desire of the just after God:  hope in afflictions."
      },
      {
        "n": 42,
        "title": "Judica me, Deus. The prophet aspireth after the temple and altar of God."
      },
      {
        "n": 43,
        "title": "Deus auribus nostris. The church commemorates former favours, and present afflictions; under which she prays for succour."
      },
      {
        "n": 44,
        "title": "Eructavit cor meum. The excellence of Christ's kingdom, and the endowments of his church."
      },
      {
        "n": 45,
        "title": "Deus noster refugium. The church in persecution trusteth in the protection of God."
      },
      {
        "n": 46,
        "title": "Omnes gentes, plaudite. The Gentiles are invited to praise God for the establishment of the kingdom of Christ."
      },
      {
        "n": 47,
        "title": "Magnus Dominus. God is greatly to be praised for the establishment of his church."
      },
      {
        "n": 48,
        "title": "Audite haec, omnes gentes. The folly of worldlings, who live on in sin, without thinking of death or hell."
      },
      {
        "n": 49,
        "title": "Deus deorum. The coming of Christ:  who prefers virtue and inward purity before the blood of victims."
      },
      {
        "n": 50,
        "title": "Miserere. The repentance and confession of David after his sin.  The fourth penitential psalm."
      },
      {
        "n": 51,
        "title": "Quid gloriaris. David condemneth the wickedness of Doeg, and foretelleth his destruction."
      },
      {
        "n": 52,
        "title": "Dixit insipiens. The general corruption of man before the coming of Christ."
      },
      {
        "n": 53,
        "title": "Deus, in nomine tuo. A prayer for help in distress."
      },
      {
        "n": 54,
        "title": "Exaudi, Deus. A prayer of a just man under persecution from the wicked.  It agrees to Christ persecuted by the Jews, and betrayed by Judas."
      },
      {
        "n": 55,
        "title": "Miserere mei, Deus. A prayer of David in danger and distress."
      },
      {
        "n": 56,
        "title": "Miserere mei, Deus.  The prophet prays in his affliction, and praises God for his delivery."
      },
      {
        "n": 57,
        "title": "Si vere utique. David reproveth the wicked, and foretelleth their punishment."
      },
      {
        "n": 58,
        "title": "Eripe me. A prayer to be delivered from the wicked, with confidence in God's help and protection.  It agrees to Christ and his enemies the Jews."
      },
      {
        "n": 59,
        "title": "Deus, repulisti nos. After many afflictions, the church of Christ shall prevail."
      },
      {
        "n": 60,
        "title": "Exaudi, Deus. A prayer for the coming of the kingdom of Christ, which shall have no end."
      },
      {
        "n": 61,
        "title": "Nonne Deo. The prophet encourageth himself and all others to trust in God, and serve him."
      },
      {
        "n": 62,
        "title": "Deus Deus meus, ad te. The prophet aspireth after God."
      },
      {
        "n": 63,
        "title": "Exaudi Deus orationem. A prayer in affliction, with confidence in God that he will bring to nought the machinations of persecutors."
      },
      {
        "n": 64,
        "title": "Te decet. God is to be praised in his church, to which all nations shall be called."
      },
      {
        "n": 65,
        "title": "Jubilate Deo. An invitation to praise God."
      },
      {
        "n": 66,
        "title": "Deus misereatur. A prayer for the propagation of the church."
      },
      {
        "n": 67,
        "title": "Exurgat Deus. The glorious establishment of the church of the New Testament, prefigured by the benefits bestowed on the people of Israel."
      },
      {
        "n": 68,
        "title": "Salvum me fac, Deus. Christ in his passion declareth the greatness of his sufferings, and the malice of his persecutors the Jews; and foretelleth their reprobation."
      },
      {
        "n": 69,
        "title": "Deus in adjutorium. A prayer in persecution."
      },
      {
        "n": 70,
        "title": "In te, Domine. A prayer for perseverance."
      },
      {
        "n": 71,
        "title": "Deus, judicium tuum. A prophecy of the coming of Christ, and of his kingdom:  prefigured by Solomon and his happy reign."
      },
      {
        "n": 72,
        "title": "Quam bonus Israel Deus. The temptation of the weak, upon seeing the prosperity of the wicked, is overcome by the consideration of the justice of God, who will quickly render to every one according to his works."
      },
      {
        "n": 73,
        "title": "Ut quid, Deus. A prayer of the church under grievous persecutions."
      },
      {
        "n": 74,
        "title": "Confitebimur tibi. There is a just judgment to come:  therefore let the wicked take care."
      },
      {
        "n": 75,
        "title": "Notus in Judaea. God is known in his church:  and exerts his power in protecting it.  It alludes to the slaughter of the Assyrians, in the days of king Ezechias."
      },
      {
        "n": 76,
        "title": "Voce mea. The faithful have recourse to God in trouble of mind, with confidence in his mercy and power."
      },
      {
        "n": 77,
        "title": "Attendite. God's great benefits to the people of Israel, notwithstanding their ingratitude."
      },
      {
        "n": 78,
        "title": "Deus, venerunt gentes. The church in time of persecution prayeth for relief.  It seems to belong to the time of the Machabees."
      },
      {
        "n": 79,
        "title": "Qui regis Israel. A prayer for the church in tribulation, commemorating God's former favours."
      },
      {
        "n": 80,
        "title": "Exultate Deo. An invitation to a solemn praising of God."
      },
      {
        "n": 81,
        "title": "Deus stetit. An exhortation to judges and men in power."
      },
      {
        "n": 82,
        "title": "Deus, quis similis. A prayer against the enemies of God's church."
      },
      {
        "n": 83,
        "title": "Quam dilecta. The soul aspireth after heaven; rejoicing in the mean time, in being in the communion of God's church upon earth."
      },
      {
        "n": 84,
        "title": "Benedixisti, Domine. The coming of Christ, to bring peace and salvation to man."
      },
      {
        "n": 85,
        "title": "Inclina, Domine. A prayer for God's grace to assist us to the end."
      },
      {
        "n": 86,
        "title": "Fundamenta ejus. The glory of the church of Christ."
      },
      {
        "n": 87,
        "title": "Domine, Deus salutis. A prayer of one under grievous affliction:  it agrees to Christ in his passion, and alludes to his death and burial."
      },
      {
        "n": 88,
        "title": "Misericordias Domini. The perpetuity of the church of Christ, in consequence of the promise of God:  which, notwithstanding, God permits her to suffer sometimes most grievous afflictions."
      },
      {
        "n": 89,
        "title": "Domine, refugium. A prayer for the mercy of God:  recounting the shortness and miseries of the days of man."
      },
      {
        "n": 90,
        "title": "Qui habitat. The just is secure under the protection of God."
      },
      {
        "n": 91,
        "title": "Bonum est confiteri. God is to be praised for his wondrous works."
      },
      {
        "n": 92,
        "title": "Dominus regnavit. The glory and stability of the kingdom; that is, of the church of Christ. Praise in the way of a canticle, for David himself, on the day before the sabbath, when the earth was founded."
      },
      {
        "n": 93,
        "title": "Deus ultionum. God shall judge and punish the oppressors of his people. A psalm for David himself on the fourth day of the week."
      },
      {
        "n": 94,
        "title": "Venite exultemus. An invitation to adore and serve God, and to hear his voice. Praise of a canticle for David himself."
      },
      {
        "n": 95,
        "title": "Cantate Domino. An exhortation to praise God for the coming of Christ and his kingdom."
      },
      {
        "n": 96,
        "title": "Dominus regnavit. All are invited to rejoice at the glorious coming and reign of Christ."
      },
      {
        "n": 97,
        "title": "Cantate Domino. All are again invited to praise the Lord, for the victories of Christ."
      },
      {
        "n": 98,
        "title": "Dominus regnavit. The reign of the Lord in Sion:  that is, of Christ in his church."
      },
      {
        "n": 99,
        "title": "Jubilate Deo. All are invited to rejoice in God the creator of all."
      },
      {
        "n": 100,
        "title": "Misericordiam et judicium. The prophet exhorteth all by his example, to follow mercy and justice."
      },
      {
        "n": 101,
        "title": "Domine, exaudi. A prayer for one in affliction:  the fifth penitential psalm."
      },
      {
        "n": 102,
        "title": "Benedic, anima. Thanksgiving to God for his mercies."
      },
      {
        "n": 103,
        "title": "Benedic, anima. God is to be praised for his mighty works, and wonderful providence."
      },
      {
        "n": 104,
        "title": "Confitemini Domino. A thanksgiving to God for his benefits to his people Israel. Alleluia."
      },
      {
        "n": 105,
        "title": "Confitemini Domino. A confession of the manifold sins and ingratitudes of the Israelites. Alleluia."
      },
      {
        "n": 106,
        "title": "Confitemini Domino. All are invited to give thanks to God for his perpetual providence over men. Alleluia."
      },
      {
        "n": 107,
        "title": "Paratum cor meum. The prophet praiseth God for benefits received."
      },
      {
        "n": 108,
        "title": "Deus, laudem meam. David in the person of Christ, prayeth against his persecutors; more especially the traitor Judas:  foretelling and approving his just punishment for his obstinacy in sin and final impenitence."
      },
      {
        "n": 109,
        "title": "Dixit Dominus. Christ's exaltation and everlasting priesthood."
      },
      {
        "n": 110,
        "title": "Confitebor tibi, Domine. God is to be praised for his graces, and benefits to his church. Alleluia."
      },
      {
        "n": 111,
        "title": "Beatus vir. The good man is happy. Alleluia, of the returning of Aggeus and Zacharias."
      },
      {
        "n": 112,
        "title": "Laudate, pueri. God is to be praised for his regard to the poor and humble. Alleluia."
      },
      {
        "n": 113,
        "title": "In exitu Israel. God hath shewn his power in delivering his people:  idols are vain.  The Hebrews divide this into two psalms. Alleluia."
      },
      {
        "n": 114,
        "title": "Dilexi. The prayer of a just man in affliction, with a lively confidence in God. Alleluia."
      },
      {
        "n": 115,
        "title": "Credidi. This in the Hebrew is joined with the foregoing psalm, and continues to express the faith and gratitude of the psalmist. Alleluia."
      },
      {
        "n": 116,
        "title": "Laudate Dominum. All nations are called upon to praise God for his mercy and truth. Alleluia."
      },
      {
        "n": 117,
        "title": "Confitemini Domino. The psalmist praiseth God for his delivery from evils:  putteth his whole trust in him; and foretelleth the coming of Christ. Alleluia."
      },
      {
        "n": 118,
        "title": "Beati immaculati. Of the excellence of virtue consisting in the love and observance of the commandments of God. Alleluia. ALEPH."
      },
      {
        "n": 119,
        "title": "Ad Dominum. A prayer in tribulation. A gradual canticle."
      },
      {
        "n": 120,
        "title": "Levavi oculos. God is the keeper of his servants. A gradual canticle."
      },
      {
        "n": 121,
        "title": "Laetatus sum in his. The desire and hope of the just for the coming of the kingdom of God, and the peace of his church."
      },
      {
        "n": 122,
        "title": "Ad te levavi. A prayer in affliction, with confidence in God. A gradual canticle."
      },
      {
        "n": 123,
        "title": "Nisi quia Domini. The church giveth glory to God for her deliverance, from the hands of her enemies."
      },
      {
        "n": 124,
        "title": "Qui confidunt. The just are always under God's protection."
      },
      {
        "n": 125,
        "title": "In convertendo. The people of God rejoice at their delivery from captivity."
      },
      {
        "n": 126,
        "title": "Nisi Dominus. Nothing can be done without God's grace and blessing."
      },
      {
        "n": 127,
        "title": "Beati omnes. The fear of God is the way to happiness."
      },
      {
        "n": 128,
        "title": "Saepe expugnaverunt. The church of God is invincible :  her persecutors come to nothing."
      },
      {
        "n": 129,
        "title": "De profundis. A prayer of a sinner, trusting in the mercies of God.  The sixth penitential psalm."
      },
      {
        "n": 130,
        "title": "Domine, none est. The prophet's humility."
      },
      {
        "n": 131,
        "title": "Memento, Domine. A prayer for the fulfilling of the promise made to David."
      },
      {
        "n": 132,
        "title": "Ecce quam bonum. The happiness of brotherly love and concord."
      },
      {
        "n": 133,
        "title": "Ecce nunc benedicite. An exhortation to praise God continually."
      },
      {
        "n": 134,
        "title": "Laudate nomen. An exhortation to praise God:  the vanity of idols."
      },
      {
        "n": 135,
        "title": "Confitemini Domino. God is to be praised for his wonderful works."
      },
      {
        "n": 136,
        "title": "Super flumina. The lamentation of the people of God in their captivity in Babylon. A psalm of David, for Jeremias."
      },
      {
        "n": 137,
        "title": "Confitebor tibi. Thanksgiving to God for his benefits."
      },
      {
        "n": 138,
        "title": "Domine, probasti. God's special providence over his servants."
      },
      {
        "n": 139,
        "title": "Eripe me, Domine. A prayer to be delivered from the wicked."
      },
      {
        "n": 140,
        "title": "Domine, clamavi. A prayer against sinful words, and deceitful flatterers. A psalm of David."
      },
      {
        "n": 141,
        "title": "Voce mea. A prayer of David in extremity of danger."
      },
      {
        "n": 142,
        "title": "Domine, exaudi. The psalmist in tribulation calleth upon God for his delivery.  The seventh penitential psalm."
      },
      {
        "n": 143,
        "title": "Benedictus Dominus. The prophet praiseth God, and prayeth to be delivered from his enemies. No worldly happiness is to be compared with that of serving God. A psalm of David against Goliath."
      },
      {
        "n": 144,
        "title": "Exaltabo te, Deus. A psalm of praise, to the infinite majesty of God."
      },
      {
        "n": 145,
        "title": "Lauda, anima. We are not to trust in men, but in God alone."
      },
      {
        "n": 146,
        "title": "Laudate Dominum. An exhortation to praise God for his benefits."
      },
      {
        "n": 147,
        "title": "Lauda, Jerusalem. The church is called upon to praise God for his peculiar graces and favours to his people.  In the Hebrew, this psalm is joined to the foregoing. Alleluia."
      },
      {
        "n": 148,
        "title": "Laudate Dominum de caelis. All creatures are invited to praise their Creator. Alleluia."
      },
      {
        "n": 149,
        "title": "Cantate Domino. The church is particularly bound to praise God. Alleluia."
      },
      {
        "n": 150,
        "title": "Laudate Dominum in sanctis. An exhortation to praise God with all sorts of instruments. Alleluia."
      }
    ]
  },
  {
    "id": 22,
    "name": "Proverbs",
    "fullName": "THE BOOK OF PROVERBS",
    "desc": "This Book is so called, because it consists of wise and weighty sentences:  regulating the morals of men:  and directing them to wisdom and virtue.  And these sentences are also called PARABLES, because great truths are often couched in them under certain figures and similitudes.",
    "chapters": [
      {
        "n": 1,
        "title": "The use and end of the proverbs.  An exhortation to flee the company of the wicked:  and to hearken to the voice of wisdom."
      },
      {
        "n": 2,
        "title": "The advantages of wisdom:  and the evils from which it delivers."
      },
      {
        "n": 3,
        "title": "An exhortation to the practice of virtue."
      },
      {
        "n": 4,
        "title": "A further exhortation to seek after wisdom."
      },
      {
        "n": 5,
        "title": "An exhortation to fly unlawful lust, and the occasions of it."
      },
      {
        "n": 6,
        "title": "Documents on several heads."
      },
      {
        "n": 7,
        "title": "The love of wisdom is the best preservative from being led astray by temptation."
      },
      {
        "n": 8,
        "title": "The preaching of wisdom.  Her excellence."
      },
      {
        "n": 9,
        "title": "Wisdom invites all to her feast.  Folly calls another way."
      },
      {
        "n": 10,
        "title": "In the twenty following chapters are contained many wise sayings and axioms, relating to wisdom and folly, virtue and vice."
      },
      {
        "n": 11,
        "title": ""
      },
      {
        "n": 12,
        "title": ""
      },
      {
        "n": 13,
        "title": ""
      },
      {
        "n": 14,
        "title": ""
      },
      {
        "n": 15,
        "title": ""
      },
      {
        "n": 16,
        "title": ""
      },
      {
        "n": 17,
        "title": ""
      },
      {
        "n": 18,
        "title": ""
      },
      {
        "n": 19,
        "title": ""
      },
      {
        "n": 20,
        "title": ""
      },
      {
        "n": 21,
        "title": ""
      },
      {
        "n": 22,
        "title": ""
      },
      {
        "n": 23,
        "title": ""
      },
      {
        "n": 24,
        "title": ""
      },
      {
        "n": 25,
        "title": ""
      },
      {
        "n": 26,
        "title": ""
      },
      {
        "n": 27,
        "title": ""
      },
      {
        "n": 28,
        "title": ""
      },
      {
        "n": 29,
        "title": ""
      },
      {
        "n": 30,
        "title": "The wise man thinketh humbly of himself.  His prayer and sentiments upon certain virtues and vices."
      },
      {
        "n": 31,
        "title": "An exhortation to chastity, temperance, and works of mercy; with the praise of a wise woman."
      }
    ]
  },
  {
    "id": 23,
    "name": "Ecclesiastes",
    "fullName": "ECCLESIASTES",
    "desc": "This Book is called Ecclesiastes, or The Preacher, (in Hebrew, Coheleth,) because in it, Solomon, as an excellent preacher, setteth forth the vanity of the things of this world:  to withdraw the hearts and affections of men from such empty toys.",
    "chapters": [
      {
        "n": 1,
        "title": "The vanity of all temporal things."
      },
      {
        "n": 2,
        "title": "The vanity of pleasures, riches, and worldly labours."
      },
      {
        "n": 3,
        "title": "All human things are liable to perpetual changes.  We are to rest on God's providence, and cast away fruitless cares."
      },
      {
        "n": 4,
        "title": "Other instances of human miseries."
      },
      {
        "n": 5,
        "title": "Caution in words.  Vows are to be paid.  Riches are often pernicious: the moderate use of them is the gift of God."
      },
      {
        "n": 6,
        "title": "The misery of the covetous man."
      },
      {
        "n": 7,
        "title": "Prescriptions against worldly vanities:  mortification, patience, and seeking wisdom."
      },
      {
        "n": 8,
        "title": "True wisdom is to observe God's commandments.  The ways of God are unsearchable."
      },
      {
        "n": 9,
        "title": "Man knows not certainty that he is in God's grace.  After death no more work or merit."
      },
      {
        "n": 10,
        "title": "Observations on wisdom and folly, ambition and detraction."
      },
      {
        "n": 11,
        "title": "Exhortation to works of mercy, while we have time, to diligence in good, and to the remembrance of death and judgment."
      },
      {
        "n": 12,
        "title": "The Creator is to be remembered in the days of our youth:  all worldly things are vain:  we should fear God and keep his commandments."
      }
    ]
  },
  {
    "id": 24,
    "name": "Canticle of Canticles",
    "fullName": "SOLOMON'S CANTICLE OF CANTICLES",
    "desc": "This Book is called the Canticle of Canticles, that is to say, the most excellent of all canticles:  because it is full of high mysteries, relating to the happy union of Christ and his spouse:  which is here begun by love; and is to be eternal in heaven.  The spouse of Christ is the church:  more especially as to the happiest part of it, viz., perfect souls, every one of which is his beloved, but, above all others, the immaculate and ever blessed virgin mother.",
    "chapters": [
      {
        "n": 1,
        "title": "The spouse aspires to an union with Christ, their mutual love for one another."
      },
      {
        "n": 2,
        "title": "Christ caresses his spouse:  he invites her to him."
      },
      {
        "n": 3,
        "title": "The spouse seeks Christ.  The glory of his humanity."
      },
      {
        "n": 4,
        "title": "Christ sets forth the graces of his spouse:  and declares his love for her."
      },
      {
        "n": 5,
        "title": "Christ calls his spouse:  she languishes with love:  and describes him by his graces."
      },
      {
        "n": 6,
        "title": "The spouse of Christ is but one:  she is fair and terrible."
      },
      {
        "n": 7,
        "title": "A further description of the graces of the church the spouse of Christ."
      },
      {
        "n": 8,
        "title": "The love of the church to Christ:  his love to her."
      }
    ]
  },
  {
    "id": 25,
    "name": "Wisdom",
    "fullName": "THE BOOK OF WISDOM",
    "desc": "This Book is so called, because it treats of the excellence of WISDOM, the means to obtain it, and the happy fruits it produces.  It is written in the person of Solomon, and contains his sentiments.  But it is uncertain who was the writer.  It abounds with instructions and exhortations to kings and all magistrates to minister justice in the commonwealth, teaching all kinds of virtues under the general names of justice and wisdom.  It contains also many prophecies of Christ's coming, passion, resurrection, and other Christian mysteries.  The whole may be divided into three parts.  In the first six chapters, the author admonishes all superiors to love and exercise justice and wisdom.  In the next three, he teacheth that wisdom proceedeth only from God, and is procured by prayer and a good life.  In the other ten chapters, he sheweth the excellent effects and utility of wisdom and justice.",
    "chapters": [
      {
        "n": 1,
        "title": "An exhortation to seek God sincerely, who cannot be deceived, and desireth not our death."
      },
      {
        "n": 2,
        "title": "The vain reasonings of the wicked:  their persecuting the just, especially the Son of God."
      },
      {
        "n": 3,
        "title": "The happiness of the just:  and the unhappiness of the wicked."
      },
      {
        "n": 4,
        "title": "The difference between the chaste and the adulterous generations:  and between the death of the just and the wicked."
      },
      {
        "n": 5,
        "title": "The fruitless repentance of the wicked in another world:  the reward of the just."
      },
      {
        "n": 6,
        "title": "An address to princes to seek after wisdom:  she is easily found by those that seek her."
      },
      {
        "n": 7,
        "title": "The excellence of wisdom:  how she is to be found."
      },
      {
        "n": 8,
        "title": "Further praises of wisdom:  and her fruits."
      },
      {
        "n": 9,
        "title": "Solomon's prayer for wisdom."
      },
      {
        "n": 10,
        "title": "What wisdom did for Adam, Noe, Abraham, Lot, Jacob, Joseph, and the people of Israel."
      },
      {
        "n": 11,
        "title": "Other benefits of wisdom to the people of God."
      },
      {
        "n": 12,
        "title": "God's wisdom and mercy in his proceedings with the Chanaanites."
      },
      {
        "n": 13,
        "title": "Idolaters are inexcusable:  and those most of all that worship for gods the works of the hands of men."
      },
      {
        "n": 14,
        "title": "The beginning of worshipping idols:  and the effects thereof."
      },
      {
        "n": 15,
        "title": "The servants of God praise him who hath delivered them from idolatry; condemning both the makers and the worshippers of idols."
      },
      {
        "n": 16,
        "title": "God's different dealings with the Egyptians and with his own people."
      },
      {
        "n": 17,
        "title": "The Egyptian darkness."
      },
      {
        "n": 18,
        "title": "The slaughter of the firstborn in Egypt:  the efficacy of Aaron's intercession, in the sedition on occasion of Core."
      },
      {
        "n": 19,
        "title": "Why God shewed no mercy to the Egyptians.  His favour to the Israelites. All creatures obey God's orders for the service of the good, and the punishment of the wicked."
      }
    ]
  },
  {
    "id": 26,
    "name": "Ecclesiasticus",
    "fullName": "ECCLESIASTICUS",
    "desc": "This Book is so called from a Greek word that signifies a preacher: because, like an excellent preacher, it gives admirable lessons of all virtues.  The author was Jesus the son of Sirach of Jerusalem, who flourished about two hundred years before Christ.  As it was written after the time of Esdras, it is not in the Jewish canon; but is received as canonical and divine by the Catholic Church, instructed by apostolical tradition, and directed by the spirit of God.  It was first written in the Hebrew, but afterwards translated into Greek, by another Jesus, the grandson of the author, whose prologue to this book is the following: THE PROLOGUE. The knowledge of many and great things hath been shewn us by the law, and the prophets, and others that have followed them:  for which things Israel is to be commended for doctrine and wisdom, because not only they that speak must needs be skilful, but strangers also, both speaking and writing, may by their means become most learned.  My grandfather Jesus, after he had much given himself to a diligent reading of the law, and the prophets, and other books, that were delivered to us from our fathers, had a mind also to write something himself, pertaining to doctrine and wisdom; that such as are desirous to learn, and are made knowing in these things, may be more and more attentive in mind, and be strengthened to live according to the law.  I entreat you therefore to come with benevolence, and to read with attention, and to pardon us for those things wherein we may seem, while we follow the image of wisdom, to come short in the composition of words; for the Hebrew words have not the same force in them when translated into another tongue.  And not only these, but the law also itself, and the prophets, and the rest of the books, have no small difference, when they are spoken in their own language.  For in the eight and thirtieth year coming into Egypt, when Ptolemy Evergetes was king, and continuing there a long time, I found there books left, of no small nor contemptible learning.  Therefore I thought it good, and necessary for me to bestow some diligence and labour to interpret this book; and with much watching and study in some space of time, I brought the book to an end, and set it forth for the service of them that are willing to apply their mind, and to learn how they ought to conduct themselves, who purpose to lead their life according to the law of the Lord.",
    "chapters": [
      {
        "n": 1,
        "title": "All wisdom is from God, and is given to them that fear and love God."
      },
      {
        "n": 2,
        "title": "God's servants must look for temptations:  and must arm themselves with patience and confidence in God."
      },
      {
        "n": 3,
        "title": "Lessons concerning the honour of parents, and humility, and avoiding curiosity."
      },
      {
        "n": 4,
        "title": "An exhortation to works of mercy, and to the love of wisdom."
      },
      {
        "n": 5,
        "title": "We must not presume of our wealth or strength:  nor of the mercy of God, to go on in sin:  we must be steadfast in virtue and truth."
      },
      {
        "n": 6,
        "title": "Of true and false friends:  and of the of the fruits of wisdom."
      },
      {
        "n": 7,
        "title": "Religious and moral duties."
      },
      {
        "n": 8,
        "title": "Other lessons of wisdom and virtue."
      },
      {
        "n": 9,
        "title": "Cautions with regard to women, and dangerous conversations."
      },
      {
        "n": 10,
        "title": "The virtues and vices of men in power:  the great evil of pride."
      },
      {
        "n": 11,
        "title": "Lessons of humility and moderation in all things."
      },
      {
        "n": 12,
        "title": "We are to be liberal to the just:  and not to trust the wicked."
      },
      {
        "n": 13,
        "title": "Cautions in the choice of company."
      },
      {
        "n": 14,
        "title": "The evil of avarice:  works of mercy are recommended, and the love of wisdom."
      },
      {
        "n": 15,
        "title": "Wisdom embraceth them that fear God.  God is not the author of sin."
      },
      {
        "n": 16,
        "title": "It is better to have none than many wicked children.  Of the justice and mercy of God.  His ways are unsearchable."
      },
      {
        "n": 17,
        "title": "The creation and favour of God to man.  An exhortation to turn to God."
      },
      {
        "n": 18,
        "title": "God's works are wonderful:  we must serve him, and not our lusts."
      },
      {
        "n": 19,
        "title": "Admonition against sundry vices."
      },
      {
        "n": 20,
        "title": "Rules with regard to correction, discretion, and avoiding lies."
      },
      {
        "n": 21,
        "title": "Cautions against sin in general, and some sins in particular."
      },
      {
        "n": 22,
        "title": "Wise sayings on divers subjects."
      },
      {
        "n": 23,
        "title": "A prayer for grace to flee sin:  cautions against profane swearing and other vices."
      },
      {
        "n": 24,
        "title": "Wisdom praiseth herself:  her origin, her dwelling, her dignity, and her fruits."
      },
      {
        "n": 25,
        "title": "Documents of wisdom on several subjects."
      },
      {
        "n": 26,
        "title": "Of good and bad women."
      },
      {
        "n": 27,
        "title": "Dangers of sin from several heads:  the fear of God is the best preservative.  He that diggeth a pit, shall fall into it."
      },
      {
        "n": 28,
        "title": "Lessons against revenge and quarrels.  The evils of the tongue."
      },
      {
        "n": 29,
        "title": "Of charity in lending money, and justice in repaying.  Of alms, and of being surety."
      },
      {
        "n": 30,
        "title": "Of correction of children.  Health is better than wealth.  Excessive grief is hurtful."
      },
      {
        "n": 31,
        "title": "Of the desire of riches, and of moderation in eating and drinking."
      },
      {
        "n": 32,
        "title": "Lessons for superiors and inferiors.  Advantages of fearing God, and doing nothing without counsel."
      },
      {
        "n": 33,
        "title": "The fear of God is the best security.  Times and men are in the hands of God.  Take care of thyself as long as thou livest, and look to thy servants."
      },
      {
        "n": 34,
        "title": "The vanity of dreams.  The advantage of experience, and of the fear of God."
      },
      {
        "n": 35,
        "title": "What sacrifices are pleasing to God."
      },
      {
        "n": 36,
        "title": "A prayer for the church of God.  Of a good heart, and a good wife."
      },
      {
        "n": 37,
        "title": "Of the choice of friends and counsellors."
      },
      {
        "n": 38,
        "title": "Of physicians and medicines:  what is to be done in sickness, and how we are to mourn for the dead.  Of the employments of labourers and artificers."
      },
      {
        "n": 39,
        "title": "The exercises of the wise man.  The Lord is to be glorified for his works."
      },
      {
        "n": 40,
        "title": "The miseries of the life of man are relieved by the grace of God and his fear."
      },
      {
        "n": 41,
        "title": "Of the remembrance of death:  of an evil and of a good name:  of what things we ought to be ashamed."
      },
      {
        "n": 42,
        "title": "Of what things we ought not to be ashamed.  Cautions with regard to women.  The works and greatness of God."
      },
      {
        "n": 43,
        "title": "The works of God are exceedingly glorious and wonderful:  no man is able sufficiently to praise him."
      },
      {
        "n": 44,
        "title": "The praises of the holy fathers, in particular of Enoch, Noe, Abraham, Isaac, and Jacob."
      },
      {
        "n": 45,
        "title": "The praises of Moses, of Aaron, and of Phinees."
      },
      {
        "n": 46,
        "title": "The praise of Josue, of Caleb, and of Samuel."
      },
      {
        "n": 47,
        "title": "The praise of Nathan, of David, and of Solomon:  Of his fall and punishment."
      },
      {
        "n": 48,
        "title": "The praise of Elias, of Eliseus, of Ezechias, and of Isaias."
      },
      {
        "n": 49,
        "title": "The praise of Josias, of Jeremias, Ezechiel, and the twelve prophets. Also of Zorobabel, Jesus the son of Josedech, Nehemias, Enoch, Joseph, Seth, Sem, and Adam."
      },
      {
        "n": 50,
        "title": "The praises of Simon the high priest.  The conclusion."
      },
      {
        "n": 51,
        "title": "A prayer of praise and thanksgiving."
      }
    ]
  },
  {
    "id": 27,
    "name": "Isaias",
    "fullName": "THE PROPHECY OF ISAIAS",
    "desc": "This inspired writer is called by the Holy Ghost, the great prophet, (Ecclesiasticus 48.25,) from the greatness of his prophetic spirit, by which he hath foretold so long before, and in so clear a manner, the coming of Christ, the mysteries of our redemption, the calling of the Gentiles, and the glorious establishment, and perpetual flourishing of the church of Christ:  insomuch that he may seem to have been rather an evangelist than a prophet.  His very name is not without mystery; for Isaias in Hebrew signifies the salvation of the Lord, or Jesus is the Lord.  He was, according to the tradition of the Hebrews, of the blood royal of the kings of Juda:  and after a most holy life, ended his days by a glorious martyrdom; being sawed in two, at the command of his wicked son in law, King Manasses, for reproving his evil ways.",
    "chapters": [
      {
        "n": 1,
        "title": "The prophet complains of the sins of Juda and Jerusalem, and exhorts them to a sincere conversion."
      },
      {
        "n": 2,
        "title": "All nations shall flow to the church of Christ.  The Jews shall be rejected for their sins.  Idolatry shall be destroyed."
      },
      {
        "n": 3,
        "title": "The confusion and other evils that shall come upon the Jews for their sins.  The pride of their women shall be punished."
      },
      {
        "n": 4,
        "title": "After an extremity of evils that shall fall upon the Jews, a remnant shall be comforted by Christ."
      },
      {
        "n": 5,
        "title": "The reprobation of the Jews is foreshewn under the parable of a vineyard.  A woe is pronounced against sinners:  the army of God shall send against them."
      },
      {
        "n": 6,
        "title": "A glorious vision, in which the prophet's lips are cleansed:  he foretelleth the obstinacy of the Jews."
      },
      {
        "n": 7,
        "title": "The prophet assures king Achaz that the two kings his enemies shall not take Jerusalem.  A virgin shall conceive and bear a son."
      },
      {
        "n": 8,
        "title": "The name of a child that is to be born:  many evils shall come upon the Jews for their sins."
      },
      {
        "n": 9,
        "title": "What joy shall come after afflictions by the birth and kingdom of Christ; which shall flourish for ever.  Judgments upon Israel for their sins."
      },
      {
        "n": 10,
        "title": "Woe to the makers of wicked laws.  The Assyrian shall be a rod for punishing Israel:  but for their pride they shall be destroyed:  and a remnant of Israel saved."
      },
      {
        "n": 11,
        "title": "Of the spiritual kingdom of Christ, to which all nations shall repair."
      },
      {
        "n": 12,
        "title": "A canticle of thanksgiving for the benefits of Christ."
      },
      {
        "n": 13,
        "title": "The desolation of Babylon."
      },
      {
        "n": 14,
        "title": "The restoration of Israel after their captivity.  The parable or song insulting over the king of Babylon.  A prophecy against the Philistines."
      },
      {
        "n": 15,
        "title": "A prophecy of the desolation of the Moabites."
      },
      {
        "n": 16,
        "title": "The prophet prayeth for Christ's coming.  The affliction of the Moabites for their pride."
      },
      {
        "n": 17,
        "title": "Judgments upon Damascus and Samaria.  The overthrow of the Assyrians."
      },
      {
        "n": 18,
        "title": "A woe to the Ethiopians, who fed Israel with vain hopes, their future conversion."
      },
      {
        "n": 19,
        "title": "The punishment of Egypt:  their call to the church."
      },
      {
        "n": 20,
        "title": "The ignominious captivity of the Egyptians, and the Ethiopians."
      },
      {
        "n": 21,
        "title": "The destruction of Babylon by the Medes and Persians:  a prophecy against the Edomites and the Arabians."
      },
      {
        "n": 22,
        "title": "The prophet laments the devastation of Juda.  He foretells the deprivation of Sobna, and the substitution of Eliacim, a figure of Christ."
      },
      {
        "n": 23,
        "title": "The destruction of Tyre.  It shall be repaired again after seventy years."
      },
      {
        "n": 24,
        "title": "The judgments of God upon all the sinners of the world.  A remnant shall joyfully praise him."
      },
      {
        "n": 25,
        "title": "A canticle of thanksgiving for God's judgments and benefits."
      },
      {
        "n": 26,
        "title": "A canticle of thanks for the deliverance of God's people."
      },
      {
        "n": 27,
        "title": "The punishment of the oppressors of God's people.  The Lord's favour to his church."
      },
      {
        "n": 28,
        "title": "The punishment of the Israelites, for their pride, intemperance, and contempt of religion.  Christ the cornerstone."
      },
      {
        "n": 29,
        "title": "God's heavy judgments upon Jerusalem, for their obstinacy:  with a prophecy of the conversion of the Gentiles."
      },
      {
        "n": 30,
        "title": "The people are blamed for their confidence in Egypt.  God's mercies towards his church.  The punishment of sinners."
      },
      {
        "n": 31,
        "title": "The folly of trusting to Egypt, and forgetting God.  He will fight for his people against the Assyrians."
      },
      {
        "n": 32,
        "title": "The blessings of the reign of Christ.  The desolation of the Jews, and prosperity of the church of Christ."
      },
      {
        "n": 33,
        "title": "God's revenge against the enemies of his church.  The happiness of the heavenly Jerusalem."
      },
      {
        "n": 34,
        "title": "The general judgment of the wicked."
      },
      {
        "n": 35,
        "title": "The joyful flourishing of Christ's kingdom:  in his church shall be a holy and secure way."
      },
      {
        "n": 36,
        "title": "Sennacherib invades Juda:  his blasphemies."
      },
      {
        "n": 37,
        "title": "Ezechias, his mourning and prayer.  God's promise of protection.  The Assyrian army is destroyed.  Sennacherib is slain."
      },
      {
        "n": 38,
        "title": "Ezechias being advertised that he shall die, obtains by prayer a prolongation of his life:  in confirmation of which the sun goes back. The canticle of Ezechias."
      },
      {
        "n": 39,
        "title": "Ezechias shews all his treasures to the ambassadors of Babylon:  upon which Isaias foretells the Babylonish captivity."
      },
      {
        "n": 40,
        "title": "The prophet comforts the people with the promise of the coming of Christ to forgive their sins.  God's almighty power and majesty."
      },
      {
        "n": 41,
        "title": "The reign of the just one:  the vanity of idols."
      },
      {
        "n": 42,
        "title": "The office of Christ.  The preaching of the gospel to the Gentiles.  The blindness and reprobation of the Jews."
      },
      {
        "n": 43,
        "title": "God comforts his church, promising to protect her for ever:  he expostulates with the Jews for their ingratitude."
      },
      {
        "n": 44,
        "title": "God's favour to his church.  The folly of idolatry.  The people shall be delivered from captivity."
      },
      {
        "n": 45,
        "title": "A prophecy of Cyrus, as a figure of Christ, the great deliverer of God's people."
      },
      {
        "n": 46,
        "title": "The idols of Babylon shall be destroyed.  Salvation is promised through Christ."
      },
      {
        "n": 47,
        "title": "God's judgment upon Babylon."
      },
      {
        "n": 48,
        "title": "He reproaches the Jews for their obstinacy:  he will deliver them out of their captivity, for his own name's sake."
      },
      {
        "n": 49,
        "title": "Christ shall bring the Gentiles to salvation.  God's love to his church is perpetual."
      },
      {
        "n": 50,
        "title": "The synagogue shall be divorced for her iniquities.  Christ for her sake will endure ignominious afflictions."
      },
      {
        "n": 51,
        "title": "An exhortation to trust in Christ.  He shall protect the children of his church."
      },
      {
        "n": 52,
        "title": "Under the figure of the deliverance from the Babylonish captivity, the church is invited to rejoice for her redemption from sin.  Christ's kingdom shall be exalted."
      },
      {
        "n": 53,
        "title": "A prophecy of the passion of Christ."
      },
      {
        "n": 54,
        "title": "The Gentiles, who were barren before, shall multiply in the church of Christ:  from which God's mercy shall never depart."
      },
      {
        "n": 55,
        "title": "God promises abundance of spiritual graces to the faithful, that shall believe in Christ out of all nations, and sincerely serve him."
      },
      {
        "n": 56,
        "title": "God invites all to keep his commandments:  the Gentiles that keep them shall be the people of God:  the Jewish pastors are reproved."
      },
      {
        "n": 57,
        "title": "The infidelity of the Jews:  their idolatry.  Promises to humble penitents."
      },
      {
        "n": 58,
        "title": "God rejects the hypocritical fasts of the Jews:  recommends works of mercy, and sincere godliness."
      },
      {
        "n": 59,
        "title": "The dreadful evil of sin is displayed, as the great obstacle to all good from God:  yet he will send a Redeemer, and make an everlasting covenant with his church."
      },
      {
        "n": 60,
        "title": "The light of true faith shall shine forth in the church of Christ, and shall be spread through all nations, and continue for all ages."
      },
      {
        "n": 61,
        "title": "The office of Christ:  the mission of the Apostles; the happiness of their converts."
      },
      {
        "n": 62,
        "title": "The prophet will not cease from preaching Christ:  to whom all nations shall be converted:  and whose church shall continue for ever."
      },
      {
        "n": 63,
        "title": "Christ's victory over his enemies:  his mercies to his people:  their complaint."
      },
      {
        "n": 64,
        "title": "The prophet prays for the release of his people; and for the remission of their sins."
      },
      {
        "n": 65,
        "title": "The Gentiles shall seek and find Christ, but the Jews will persecute him, and be rejected, only a remnant shall be reserved.  The church shall multiply, and abound with graces."
      },
      {
        "n": 66,
        "title": "More of the reprobation of the Jews, and of the call of the Gentiles."
      }
    ]
  },
  {
    "id": 28,
    "name": "Jeremias",
    "fullName": "THE PROPHECY OF JEREMIAS",
    "desc": "Jeremias was a priest, a native of Anathoth, a priestly city in the tribe of Benjamin:  and was sanctified from his mother's womb, to be a prophet of God; which office he began to execute when he was yet a child in age.  He was in his whole life, according to the signification of his name, Great before the Lord; and a special figure of Jesus Christ, in the persecutions he underwent for discharging his duty; in his charity for his persecutors; and in the violent death he suffered at their hands:  it being an ancient tradition of the Hebrews, that he was stoned to death by the remnant of the Jews who had retired into Egypt.",
    "chapters": [
      {
        "n": 1,
        "title": "The time, and the calling, of Jeremias:  his prophetical visions.  God encourages him."
      },
      {
        "n": 2,
        "title": "God expostulates with the Jews for their ingratitude and infidelity."
      },
      {
        "n": 3,
        "title": "God invites the rebel Jews to return to him, with a promise to receive them:  he foretells the conversion of the Gentiles."
      },
      {
        "n": 4,
        "title": "And admonition to sincere repentance, and circumcision of the heart, with threats of grievous punishment to those that persist in sin."
      },
      {
        "n": 5,
        "title": "The judgments of God shall fall upon the Jews for their manifold sins."
      },
      {
        "n": 6,
        "title": "The evils that threaten Jerusalem.  She is invited to return, and walk in the good way, and not to rely on sacrifices without obedience."
      },
      {
        "n": 7,
        "title": "The temple of God shall not protect a sinful people, without a sincere conversion.  The Lord will not receive the prayers of the prophet for them:  because they are obstinate in their sins."
      },
      {
        "n": 8,
        "title": "Other evils that shall fall upon the Jews for their impenitence."
      },
      {
        "n": 9,
        "title": "The prophet laments the miseries of his people:  and their sins, which are the cause of them.  He exhorts them to repentance."
      },
      {
        "n": 10,
        "title": "Neither stars nor idols are to be feared, but the great Creator of all things.  The chastisement of Jerusalem for her sins."
      },
      {
        "n": 11,
        "title": "The prophet proclaims the covenant of God:  and denounces evils to the obstinate transgressors of it.  The conspiracy of the Jews against him, a figure of their conspiracy against Christ."
      },
      {
        "n": 12,
        "title": "The prosperity of the wicked shall be but for a short time.  The desolation of the Jews for their sins.  Their return from their captivity."
      },
      {
        "n": 13,
        "title": "Under the figure of a linen girdle is foretold the destruction of the Jews.  Their obstinacy in sin brings all miseries upon them."
      },
      {
        "n": 14,
        "title": "A grievous famine:  and the prophet's prayer on that occasion.  Evils denounced to false prophets.  The prophet mourns for his people."
      },
      {
        "n": 15,
        "title": "God is determined to punish the Jews for their sins.  The prophet's complaint, and God's promise to him."
      },
      {
        "n": 16,
        "title": "The prophet is forbid to marry.  The Jews shall be utterly ruined for their idolatry:  but shall at length be released from their captivity, and the Gentiles shall be converted."
      },
      {
        "n": 17,
        "title": "For their obstinacy in sin the Jews shall be led captive.  He is cursed that trusteth in flesh.  God alone searcheth the heart, giving to every one as he deserves.  The prophet prayeth to be delivered from his enemies, and preacheth up the observance of the sabbath."
      },
      {
        "n": 18,
        "title": "As the clay in the hand of the potter, so is Israel in God's hand.  He pardoneth penitents, and punisheth the obstinate.  They conspire against Jeremias, for which he denounceth to them the miseries that hang over them."
      },
      {
        "n": 19,
        "title": "Under the type of breaking a potter's vessel, the prophet foresheweth the desolation of the Jews for their sins."
      },
      {
        "n": 20,
        "title": "The prophet is persecuted:  he denounces captivity to his persecutors, and bemoans himself."
      },
      {
        "n": 21,
        "title": "The prophet's answer to the messengers of Sedecias, when Jerusalem was besieged."
      },
      {
        "n": 22,
        "title": "An exhortation both to king and people to return of God.  The sentence of God upon Joachaz, Joakim, and Jechonias."
      },
      {
        "n": 23,
        "title": "God reproves evil governors; and promises to send good pastors; and Christ himself the prince of the pastors.  He inveighs against false prophets preaching without being sent."
      },
      {
        "n": 24,
        "title": "Under the type of good and bad figs, he foretells the restoration of the Jews that had been carried away captive with Jechonias, and the desolation of those that were left behind."
      },
      {
        "n": 25,
        "title": "The prophet foretells the seventy years captivity; after that the destruction of Babylon, and other nations."
      },
      {
        "n": 26,
        "title": "The prophet is apprehended and accused by the priests:  but discharged by the princes."
      },
      {
        "n": 27,
        "title": "The prophet sends chains to divers kings, signifying that they must bend their necks under the yoke of the king of Babylon.  The vessels of the temple shall not be brought back till all the rest are carried away."
      },
      {
        "n": 28,
        "title": "The false prophecy of Hananias:  he dies that same year, as Jeremias foretold."
      },
      {
        "n": 29,
        "title": "Jeremias writeth to the captives in Babylon, exhorting them to be easy there, and not to hearken to false prophets.  That they shall be delivered after seventy years.  But those that remain in Jerusalem shall perish by the sword, famine, and pestilence.  And that Achab, Sedecias, and Semeias, false prophets, shall die miserably."
      },
      {
        "n": 30,
        "title": "God will deliver his people from their captivity:  Christ shall be their king:  and his church shall be glorious for ever."
      },
      {
        "n": 31,
        "title": "The restoration of Israel.  Rachel shall cease from morning.  The new covenant.  The church shall never fail."
      },
      {
        "n": 32,
        "title": "Jeremias by God's commandment purchases a field of his kinsman:  and prophesies the return of the people out of captivity:  and the everlasting covenant God will make with his church."
      },
      {
        "n": 33,
        "title": "God promises reduction from captivity, and other blessings:  especially the coming of Christ, whose reign in his church shall be glorious and perpetual."
      },
      {
        "n": 34,
        "title": "The prophet foretells that Sedecias shall fall into the hands of Nabuchodonosor:  God's sentence upon the princes and people that had broken his covenant."
      },
      {
        "n": 35,
        "title": "The obedience of the Rechabites condemns the disobedience of the Jews. The reward of the Rechabites."
      },
      {
        "n": 36,
        "title": "Jeremias sends Baruch to read his prophecies in the temple; the book is brought to king Joakim, who burns it.  The prophet denounces his judgment, and causes Baruch to write a new copy."
      },
      {
        "n": 37,
        "title": "Jeremias prophesies that the Chaldeans, who had departed from Jerusalem, would return and burn the city.  He is cast into prison.  His conference with Sedecias."
      },
      {
        "n": 38,
        "title": "The prophet at the instance of the great men is cast into a filthy dungeon:  he is drawn out by Abdemelech, and has another conference with the king."
      },
      {
        "n": 39,
        "title": "After two years' siege Jerusalem is taken.  Sedecias is carried before Nabuchodonosor, who kills his sons in his sight, and then puts out his eyes.  Jeremias is set at liberty."
      },
      {
        "n": 40,
        "title": "Jeremias remains with Godolias the governor; who receives all the Jews that resort to him."
      },
      {
        "n": 41,
        "title": "Godolias is slain:  the Jews that were with him are apprehensive of the Chaldeans."
      },
      {
        "n": 42,
        "title": "Jeremias assures the remnant of the people, that if they will stay in Juda, they shall be safe; but if they go down into Egypt, they shall perish."
      },
      {
        "n": 43,
        "title": "The Jews, contrary to the orders of God by the prophet, go into Egypt, carrying Jeremias with them.  He foretells the devastation of that land by the king of Babylon."
      },
      {
        "n": 44,
        "title": "The prophet's admonition to the Jews in Egypt against idolatry is not regarded:  he denounces to them their destruction."
      },
      {
        "n": 45,
        "title": "The prophet comforts Baruch in his affliction."
      },
      {
        "n": 46,
        "title": "A prophecy against Egypt.  The Jews shall return from captivity."
      },
      {
        "n": 47,
        "title": "A prophecy of the desolation of the Philistines, of Tyre, Sidon, Gaza, and Ascalon."
      },
      {
        "n": 48,
        "title": "A prophecy of the desolation of Moab for their pride:  but their captivity shall at last be released."
      },
      {
        "n": 49,
        "title": "The like desolation of Ammon, of Idumea, of the Syrians, of the Agarenes, and of the Elamites."
      },
      {
        "n": 50,
        "title": "Babylon, which hath afflicted the Israelites, after their restoration, shall be utterly destroyed."
      },
      {
        "n": 51,
        "title": "The miseries that shall fall upon Babylon from the Medes:  the destruction of her idols."
      },
      {
        "n": 52,
        "title": "A recapitulation of the reign of Sedecias, and the destruction of Jerusalem.  The number of the captives."
      }
    ]
  },
  {
    "id": 29,
    "name": "Lamentations",
    "fullName": "THE LAMENTATIONS OF JEREMIAS",
    "desc": "In these JEREMIAS laments in a most pathetical manner the miseries of his people, and the destruction of JERUSALEM and the temple, in Hebrew verses, beginning with different letters according to the order of the Hebrew alphabet.",
    "chapters": [
      {
        "n": 1,
        "title": "PREFACE:  And it came to pass, after Israel was carried into captivity, and Jerusalem was desolate, that Jeremias the prophet sat weeping, and mourned with this lamentation over Jerusalem, and with a sorrowful mind, sighing and moaning, he said:"
      },
      {
        "n": 2,
        "title": ""
      },
      {
        "n": 3,
        "title": ""
      },
      {
        "n": 4,
        "title": ""
      },
      {
        "n": 5,
        "title": ""
      }
    ]
  },
  {
    "id": 30,
    "name": "Baruch",
    "fullName": "THE PROPHECY OF BARUCH",
    "desc": "BARUCH was a man of noble extraction, and learned in the law, secretary and disciple to the prophet JEREMIAS, and a sharer in his labours and persecutions:  which is the reason why the ancient fathers have considered this book as a part of the prophecy of JEREMIAS, and have usually quoted it under his name.",
    "chapters": [
      {
        "n": 1,
        "title": "The Jews of Babylon send the book of Baruch with money to Jerusalem, requesting their brethren there to offer sacrifice, and to pray for the king and for them, acknowledging their manifold sins."
      },
      {
        "n": 2,
        "title": "A further confession of the sins of the people, and of the justice of God."
      },
      {
        "n": 3,
        "title": "They pray for mercy, acknowledging that they are justly punished for forsaking true wisdom.  A prophecy of Christ."
      },
      {
        "n": 4,
        "title": "The prophet exhorts to the keeping of the law of wisdom, and encourages the people to be patient, and to hope for their deliverance."
      },
      {
        "n": 5,
        "title": "Jerusalem is invited to rejoice and behold the return of her children out of their captivity."
      },
      {
        "n": 6,
        "title": "The epistle of Jeremias to the captives, as a preservative against idolatry. A copy of the epistle that Jeremias sent to them that were to be led away captives into Babylon, by the king of Babylon, to declare to them according to what was commanded him by God."
      }
    ]
  },
  {
    "id": 31,
    "name": "Ezechiel",
    "fullName": "THE PROPHECY OF EZECHIEL",
    "desc": "EZECHIEL, whose name signifies the STRENGTH OF GOD, was of the priestly race; and of the number of captives that were carried away to Babylon with king JOACHIN.  He was contemporary with JEREMIAS, and prophesied to the same effect in Babylon, as JEREMIAS did in Jerusalem; and is said to have ended his days in like manner, by martyrdom.",
    "chapters": [
      {
        "n": 1,
        "title": "The time of Ezechiel's prophecy:  he sees a glorious vision."
      },
      {
        "n": 2,
        "title": "The prophet receives his commission."
      },
      {
        "n": 3,
        "title": "The prophet eats the book, and receives further instructions:  the office of a watchman."
      },
      {
        "n": 4,
        "title": "A prophetic description of the siege of Jerusalem, and the famine that shall reign there."
      },
      {
        "n": 5,
        "title": "The judgments of God upon the Jews are foreshewn under the type of the prophet's hair."
      },
      {
        "n": 6,
        "title": "The punishment of Israel for their idolatry:  a remnant shall be saved."
      },
      {
        "n": 7,
        "title": "The final desolation of Israel:  from which few shall escape."
      },
      {
        "n": 8,
        "title": "The prophet sees in a vision the abominations committed in Jerusalem; which determine the Lord to spare them no longer."
      },
      {
        "n": 9,
        "title": "All are ordered to be destroyed that are not marked in their foreheads. God will not be entreated for them."
      },
      {
        "n": 10,
        "title": "Fire is taken from the midst of the wheels under the cherubims, and scattered over the city.  A description of the cherubims."
      },
      {
        "n": 11,
        "title": "A prophecy against the presumptuous assurance of the great ones.  A remnant shall be saved, and receive a new spirit, and a new heart."
      },
      {
        "n": 12,
        "title": "The prophet forsheweth, by signs, the captivity of Sedecias, and the desolation of the people:  all which shall quickly come to pass."
      },
      {
        "n": 13,
        "title": "God declares against false prophets and prophetesses, that deceive the people with lies."
      },
      {
        "n": 14,
        "title": "God suffers the wicked to be deceived in punishment of their wickedness.  The evils that shall come upon them for their sins:  for which they shall not be delivered by the prayers of Noe, Daniel, and Job.  But a remnant shall be preserved."
      },
      {
        "n": 15,
        "title": "As a vine cut down is fit for nothing but the fire; so it shall be with Jerusalem, for her sins."
      },
      {
        "n": 16,
        "title": "Under the figure of an unfaithful wife, God upbraids Jerusalem with her ingratitude and manifold disloyalties:  but promiseth mercy by a new covenant."
      },
      {
        "n": 17,
        "title": "The parable of the two eagles and the vine.  A promise of the cedar of Christ and his church."
      },
      {
        "n": 18,
        "title": "One man shall not bear the sins of another, but every one his own; if a wicked man truly repent, he shall be saved; and if a just man leave his justice, he shall perish."
      },
      {
        "n": 19,
        "title": "The parable of the young lions, and of the vineyard that is wasted."
      },
      {
        "n": 20,
        "title": "God refuses to answer the ancients of Israel inquiring by the prophet: but by him setteth his benefits before their eyes, and their heinous sins:  threatening yet greater punishments:  but still mixed with mercy."
      },
      {
        "n": 21,
        "title": "The destruction of Jerusalem by the sword is further described:  the ruin also of the Ammonites is forshewn.  And finally Babylon, the destroyer of others, shall be destroyed."
      },
      {
        "n": 22,
        "title": "The general corruption of the inhabitants of Jerusalem:  for which God will consume them as dross in his furnace."
      },
      {
        "n": 23,
        "title": "Under the names of the two harlots, Oolla and Ooliba, are described the manifold disloyalties of Samaria and Jerusalem, with the punishment of them both."
      },
      {
        "n": 24,
        "title": "Under the parable of a boiling pot is shewn the utter destruction of Jerusalem:  for which the Jews at Babylon shall not dare to mourn."
      },
      {
        "n": 25,
        "title": "A prophecy against the Ammonites, Moabites, Edomites, and Philistines, for their malice against the Israelites."
      },
      {
        "n": 26,
        "title": "A prophecy of the destruction of the famous city of Tyre by Nabuchodonosor."
      },
      {
        "n": 27,
        "title": "A description of the glory and riches of Tyre:  and of her irrecoverable fall."
      },
      {
        "n": 28,
        "title": "The king of Tyre, who affected to be like to God, shall fall under the like sentence with Lucifer.  The judgment of Sidon.  The restoration of Israel."
      },
      {
        "n": 29,
        "title": "The king of Egypt shall be overthrown, and his kingdom wasted:  it shall be given to Nabuchodonosor for his service against Tyre."
      },
      {
        "n": 30,
        "title": "The desolation of Egypt and her helpers:  all her cities shall be wasted."
      },
      {
        "n": 31,
        "title": "The Assyrian empire fell for their pride:  the Egyptian shall fall in like manner."
      },
      {
        "n": 32,
        "title": "The prophet's lamentation for the king of Egypt."
      },
      {
        "n": 33,
        "title": "The duty of the watchman appointed by God:  the justice of God's ways: his judgments upon the Jews."
      },
      {
        "n": 34,
        "title": "Evil pastors are reproved.  Christ the true pastor shall come, and gather together his flock from all parts of the earth, and preserve it for ever."
      },
      {
        "n": 35,
        "title": "The judgment of mount Seir, for their hatred of Israel."
      },
      {
        "n": 36,
        "title": "The restoration of Israel, not for their merits, but by God's special grace.  Christ's baptism."
      },
      {
        "n": 37,
        "title": "A vision of the resurrection of dry bones, foreshewing the deliverance of the people from their captivity.  Juda and Israel shall be all one kingdom under Christ.  God's everlasting covenant with the church."
      },
      {
        "n": 38,
        "title": "Gog shall persecute the church in the latter days.  He shall be overthrown."
      },
      {
        "n": 39,
        "title": "God's judgments upon Gog.  God's people were punished for their sins: but shall be favoured with everlasting kindness."
      },
      {
        "n": 40,
        "title": "The prophet sees in a vision the rebuilding of the temple:  the dimensions of several parts thereof."
      },
      {
        "n": 41,
        "title": "A description of the temple, and of all the parts of it."
      },
      {
        "n": 42,
        "title": "A description of the courts, chambers, and other places belonging to the temple."
      },
      {
        "n": 43,
        "title": "The glory of God returns to the new temple.  The Israelites shall no more profane God's name by idolatry:  the prophet is commanded to shew them the dimensions, and form of the temple, and of the altar, with the sacrifices to be offered thereon."
      },
      {
        "n": 44,
        "title": "The east gate of the sanctuary shall be always shut.  The uncircumcised shall not enter into the sanctuary:  nor the Levites that have served idols:  but the sons of Sadoc shall do the priestly functions, who stood firm in the worst of times."
      },
      {
        "n": 45,
        "title": "Portions of land for the sanctuary, for the city, and for the prince. Ordinances for the prince."
      },
      {
        "n": 46,
        "title": "Other ordinances for the prince and for the sacrifices."
      },
      {
        "n": 47,
        "title": "The vision of the holy waters issuing out from under the temple:  the borders of the land to be divided among the twelve tribes."
      },
      {
        "n": 48,
        "title": "The portions of the twelve tribes, of the sanctuary, of the city, and of the prince.  The dimensions and gates of the city."
      }
    ]
  },
  {
    "id": 32,
    "name": "Daniel",
    "fullName": "THE PROPHECY OF DANIEL",
    "desc": "DANIEL, whose name signifies THE JUDGMENT OF GOD, was of the royal blood of the kings of Juda:  and one of those that were first of all carried away into captivity.  He was so renowned for wisdom and knowledge, that it became a proverb among the Babylonians, AS WISE AS DANIEL (Ezech. 28.3).  And his holiness was so great from his very childhood, that at the time when he was as yet but a young man, he is joined by the SPIRIT of GOD with NOE and JOB, as three persons most eminent for virtue and sanctity, Ezech. 14.  He is not commonly numbered by the Hebrews among THE PROPHETS:  because he lived at court, and in high station in the world:  but if we consider his many clear predictions of things to come, we shall find that no one better deserves the name and title of A PROPHET:  which also has been given him by the SON of GOD himself, Matt. 24, Mark 13., Luke 21.",
    "chapters": [
      {
        "n": 1,
        "title": "Daniel and his companions are taken into the palace of the king of Babylon:  they abstain from his meat and wine, and succeed better with pulse and water.  Their excellence and wisdom."
      },
      {
        "n": 2,
        "title": "Daniel, by divine revelation, declares the dream of Nabuchodonosor, and the interpretation of it.  He is highly honoured by the king."
      },
      {
        "n": 3,
        "title": "Nabuchodonosor set up a golden statue; which he commands all to adore: the three children for refusing to do it are cast into the fiery furnace; but are not hurt by the flames.  Their prayer and canticle of praise."
      },
      {
        "n": 4,
        "title": "Nabuchodonosor's dream, by which the judgments of God are denounced against him for his pride, is interpreted by Daniel, and verified by the event."
      },
      {
        "n": 5,
        "title": "Baltasar's profane banquet:  his sentence is denounced by a handwriting on the wall, which Daniel reads and interprets."
      },
      {
        "n": 6,
        "title": "Daniel is promoted by Darius:  his enemies procure a law forbidding prayer; for the transgression of this law Daniel is cast into the lions' den:  but miraculously delivered."
      },
      {
        "n": 7,
        "title": "Daniel's vision of the four beasts, signifying four kingdoms:  of God sitting on his throne:  and of the opposite kingdoms of Christ and Antichrist."
      },
      {
        "n": 8,
        "title": "Daniel's vision of the ram and the he goat interpreted by the angel Gabriel."
      },
      {
        "n": 9,
        "title": "Daniel's confession and prayer:  Gabriel informs him concerning the seventy weeks to the coming of Christ."
      },
      {
        "n": 10,
        "title": "Daniel having humbled himself by fasting and penance seeth a vision, with which he is much terrified; but he is comforted by an angel."
      },
      {
        "n": 11,
        "title": "The angel declares to Daniel many things to come, with regard to the Persian and Grecian kings:  more especially with regard to Antiochus as a figure of Antichrist."
      },
      {
        "n": 12,
        "title": "Michael shall stand up for the people of God:  with other things relating to Antichrist, and the end of the world."
      },
      {
        "n": 13,
        "title": "The history of Susanna and the two elders. This history of Susanna, in all the ancient Greek and Latin Bibles, was placed in the beginning of the book of Daniel:  till St. Jerome, in his translation, detached it from thence; because he did not find it in the Hebrew:  which is also the case of the history of Bel and the Dragon. But both the one and the other are received by the Catholic Church:  and were from the very beginning a part of the Christian Bible."
      },
      {
        "n": 14,
        "title": "The history of Bel, and of the great serpent worshipped by the Babylonians."
      }
    ]
  },
  {
    "id": 33,
    "name": "Osee",
    "fullName": "THE PROPHECY OF OSEE",
    "desc": "OSEE, or Hosea, whose name signifies A saviour, was the first in the order of time among those who are commonly called lesser prophets, because their prophecies are short.  He prophesied in the kingdom of Israel, that is, of the ten tribes, about the same time that Isaias prophesied in the kingdom of Juda.",
    "chapters": [
      {
        "n": 1,
        "title": "By marrying a harlot, and by the names of his children, the prophet sets forth the crimes of Israel and their punishment.  He foretells their redemption by Christ."
      },
      {
        "n": 2,
        "title": "Israel is justly punished for leaving God.  The abundance of grace in the church of Christ."
      },
      {
        "n": 3,
        "title": "The prophet is commanded again to love an adulteress; to signify God's love to the synagogue.  The wretched state of the Jews for a long time, till at last they shall be converted."
      },
      {
        "n": 4,
        "title": "God's judgment against the sins of Israel:  Juda is warned not to follow their example."
      },
      {
        "n": 5,
        "title": "God's threats against the priests, the people, and princes of Israel, for their idolatry."
      },
      {
        "n": 6,
        "title": "Affliction shall be a means to bring many to Christ, a complaint of the untowardness of the Jews.  God loves mercy more than sacrifice."
      },
      {
        "n": 7,
        "title": "The manifold sins of Israel, and of their kings, hinder the Lord from healing them."
      },
      {
        "n": 8,
        "title": "The Israelites are threatened with destruction for their impiety and idolatry."
      },
      {
        "n": 9,
        "title": "The distress and captivity of Israel for their sins and idolatry."
      },
      {
        "n": 10,
        "title": "After many benefits, great affliction shall fall upon the ten tribes, for their ingratitude to God."
      },
      {
        "n": 11,
        "title": "God proceeds in threatening Israel for their ingratitude:  yet he will not utterly destroy them."
      },
      {
        "n": 12,
        "title": "Israel is reproved for sin.  God's favours to them."
      },
      {
        "n": 13,
        "title": "The judgments of God upon Israel for their sins.  Christ shall one day redeem them."
      },
      {
        "n": 14,
        "title": "Samaria shall be destroyed.  An exhortation to repentance:  God's favour through Christ to the penitent."
      }
    ]
  },
  {
    "id": 34,
    "name": "Joel",
    "fullName": "THE PROPHECY OF JOEL",
    "desc": "JOEL, whose name, according to ST. JEROME, signifies THE LORD GOD:  or, as others say, THE COMING DOWN OF GOD:  prophesied about the same time in the kingdom of Judea, as OSEE did in the kingdom of Israel.  He foretells under figure the great evils that were coming upon the people for their sins:  earnestly exhorts them to repentance:  and comforts them with the promise of a TEACHER OF JUSTICE, viz., CHRIST JESUS OUR LORD, and of the coming down of his holy SPIRIT.",
    "chapters": [
      {
        "n": 1,
        "title": "The prophet describes the judgments that shall fall upon the people, and invites them to fasting and prayer."
      },
      {
        "n": 2,
        "title": ""
      },
      {
        "n": 3,
        "title": ""
      }
    ]
  },
  {
    "id": 35,
    "name": "Amos",
    "fullName": "THE PROPHECY OF AMOS",
    "desc": "AMOS prophesied in Israel about the same time as OSEE:  and was called from following the cattle to denounce GOD'S judgments to the people of Israel, and the neighbouring nations, for their repeated crimes, in which they continued without repentance.",
    "chapters": [
      {
        "n": 1,
        "title": "The prophet threatens Damascus, Gaza, Tyre, Edom, and Ammon with the judgments of God, for their obstinacy in sin."
      },
      {
        "n": 2,
        "title": "The judgments with which God threatens Moab, Juda, and Israel for their sins, and their ingratitude."
      },
      {
        "n": 3,
        "title": "The evils that shall fall upon Israel for their sins."
      },
      {
        "n": 4,
        "title": "The Israelites are reproved for their oppressing the poor, for their idolatry, and their incorrigibleness."
      },
      {
        "n": 5,
        "title": "A lamentation for Israel:  an exhortation to return to God."
      },
      {
        "n": 6,
        "title": "The desolation of Israel for their pride and luxury."
      },
      {
        "n": 7,
        "title": "The prophet sees, in three visions, evils coming upon Israel:  he is accused of treason by the false priest of Bethel."
      },
      {
        "n": 8,
        "title": "Under the figure of a hook, which bringeth down the fruit, the approaching desolation of Israel is foreshewed for their avarice and injustices."
      },
      {
        "n": 9,
        "title": "The certainty of the desolation of Israel:  the restoring of the tabernacle of David, and the conversion of the Gentiles to the church; which shall flourish for ever."
      }
    ]
  },
  {
    "id": 36,
    "name": "Abdias",
    "fullName": "THE PROPHECY OF ABDIAS",
    "desc": "ABDIAS, whose name is interpreted THE SERVANT OF THE LORD, is believed to have prophesied about the same time as OSEE, JOEL, and AMOS:  though some of the Hebrews, who believe him to be the same with ACHAB's steward, make him much more ancient.  His prophecy is the shortest of any in number of words, but yields to none, says ST. JEROME, in the sublimity of mysteries.  It contains but one chapter.",
    "chapters": [
      {
        "n": 1,
        "title": "The destruction of Edom for their pride:  and the wrongs they did to Jacob:  the salvation and victory of Israel."
      }
    ]
  },
  {
    "id": 37,
    "name": "Jonas",
    "fullName": "THE PROPHECY OF JONAS",
    "desc": "JONAS prophesied in the reign of JEREBOAM the second:  as we learn from 4 Kings 14.25. To whom also he foretold his success in restoring all the borders of Israel.  He was of GETH OPHER in the tribe of ZABULON, and consequently of GALILEE:  which confutes that assertion of the Pharisees, John 7.52, that no prophet ever rose out of GALILEE.  He prophesied and prefigured in his own person the death and resurrection of CHRIST:  and was the only one among the prophets that was sent to preach to the Gentiles.",
    "chapters": [
      {
        "n": 1,
        "title": "Jonas being sent to preach in Ninive, fleeth away by sea:  a tempest riseth:  of which he being found, by lot, to be the cause, is cast into the sea, which thereupon is calmed."
      },
      {
        "n": 2,
        "title": "Jonas is swallowed up by a great fish:  he prayeth with confidence in God; and the fish casteth him out on the dry land."
      },
      {
        "n": 3,
        "title": "Jonas is sent again to preach in Ninive.  Upon their fasting and repentance, God recalleth the sentence by which they were to be destroyed."
      },
      {
        "n": 4,
        "title": ""
      }
    ]
  },
  {
    "id": 38,
    "name": "Micheas",
    "fullName": "THE PROPHECY OF MICHEAS",
    "desc": "MICHEAS, of Morasti, a little town in the tribe of JUDA, was contemporary with the prophet ISAIAS:  whom he resembles both in his spirit and his style.  He is different from the prophet MICHEAS mentioned in the third book of Kings, chap. 22.  For that MICHEAS lived in the days of king ACHAB, one hundred and fifty years before the time of EZECHIAS, under whom this MICHEAS prophesied.",
    "chapters": [
      {
        "n": 1,
        "title": "Samaria for her sins shall be destroyed by the Assyrians; they shall also invade Juda and Jerusalem."
      },
      {
        "n": 2,
        "title": "The Israelites by their crying injustices provoke God to punish them. He shall at last restore Jacob."
      },
      {
        "n": 3,
        "title": "For the sins of the rich oppressing the poor, of false prophets flattering for lucre, and of judges perverting justice, Jerusalem and the temple shall be destroyed."
      },
      {
        "n": 4,
        "title": "The glory of the church of Christ, by the conversion of the Gentiles. The Jews shall be carried captives to Babylon, and be delivered again."
      },
      {
        "n": 5,
        "title": "The birth of Christ in Bethlehem:  his reign and spiritual conquests."
      },
      {
        "n": 6,
        "title": "God expostulates with the Jews for their ingratitude and sins:  for which they shall be punished."
      },
      {
        "n": 7,
        "title": "The prophet laments, that notwithstanding all his preaching, the generality are still corrupt in their manners:  therefore their desolation is at hand:  but they shall be restored again and prosper; and all mankind shall be redeemed by Christ."
      }
    ]
  },
  {
    "id": 39,
    "name": "Nahum",
    "fullName": "THE PROPHECY OF NAHUM",
    "desc": "NAHUM, whose name signifies A COMFORTER, was a native of Elcese, or Elcesai, supposed to be a little town in Galilee.  He prophesied, after the ten tribes were carried into captivity, and foretold the utter destruction of Ninive, by the Babylonians and Medes:  which happened in the reign of JOSIAS.",
    "chapters": [
      {
        "n": 1,
        "title": "The majesty of God, his goodness to his people, and severity to his enemies."
      },
      {
        "n": 2,
        "title": "God sends his armies against Ninive to destroy it."
      },
      {
        "n": 3,
        "title": "The miserable destruction of Ninive."
      }
    ]
  },
  {
    "id": 40,
    "name": "Habacuc",
    "fullName": "THE PROPHECY OF HABACUC",
    "desc": "HABACUC was a native of Bezocher, and prophesied in JUDA, some time before the invasion of the CHALDEANS, which he foretold.  He lived to see this prophecy fulfilled, and for many years after, according to the general opinion, which supposes him to be the same that was brought by the ANGEL to DANIEL in BABYLON, Dan. 14.",
    "chapters": [
      {
        "n": 1,
        "title": "The prophet complains of the wickedness of the people:  God reveals to him the vengeance he is going to take of them by the Chaldeans."
      },
      {
        "n": 2,
        "title": "The prophet is admonished to wait with faith.  The enemies of God's people shall assuredly be punished."
      },
      {
        "n": 3,
        "title": ""
      }
    ]
  },
  {
    "id": 41,
    "name": "Sophonias",
    "fullName": "THE PROPHECY OF SOPHONIAS",
    "desc": "SOPHONIAS, whose name, saith St. Jerome, signifies The Watchman of the Lord, or The hidden of the Lord, prophesied in the beginning of the reign of Josias.  He was a native of Sarabatha, and of the tribe of Simeon, according to the more general opinion.  He prophesied the punishments of the Jews, for their idolatry and other crimes; also the punishments that were to come on divers nations; the coming of Christ, the conversion of the Gentiles, the blindness of the Jews, and their conversion towards the end of the world.",
    "chapters": [
      {
        "n": 1,
        "title": "For divers enormous sins, the kingdom of Juda is threatened with severe judgment."
      },
      {
        "n": 2,
        "title": "An exhortation to repentance.  The judgment of the Philistines, of the Moabites, and the Ammonites; of the Ethiopians and the Assyrians."
      },
      {
        "n": 3,
        "title": "A woe to Jerusalem for her sins.  A prophecy of the conversion of the Gentiles, and of the poor of Israel:  God shall be with them.  The Jews shall be converted at last."
      }
    ]
  },
  {
    "id": 42,
    "name": "Aggeus",
    "fullName": "THE PROPHECY OF AGGEUS",
    "desc": "AGGEUS was one of those that returned from the captivity of Babylon, in the first year of the reign of king Cyrus.  He was sent by the Lord, in the second year of the reign of king Darius, the son of Hystaspes, to exhort Zorobabel the prince of Juda, and Jesus the high priest, to the building of the temple; which they had begun, but left off again through the opposition of the Samaritans.  In consequence of this exhortation they proceeded in the building and finished the temple.  And the prophet was commissioned by the Lord to assure them that this second temple should be more glorious than the former, because the Messiah should honour it with his presence:  signifying withal how much the church of the New Testament should excel that of the Old Testament.",
    "chapters": [
      {
        "n": 1,
        "title": "The people are reproved for neglecting to build the temple.  They are encouraged to set about the work."
      },
      {
        "n": 2,
        "title": "Christ by his coming shall make the latter temple more glorious than the former.  The blessing of God shall reward their labour in building. God's promise to Zorobabel."
      }
    ]
  },
  {
    "id": 43,
    "name": "Zacharias",
    "fullName": "THE PROPHECY OF ZACHARIAS",
    "desc": "ZACHARIAS began to prophesy in the same year as Aggeus, and upon the same occasion.  His prophecy is full of mysterious figures and promises of blessings, partly relating to the synagogue, and partly to the church of Christ.",
    "chapters": [
      {
        "n": 1,
        "title": "The prophet exhorts the people to return to God, and declares his visions, by which he puts them in hopes of better times."
      },
      {
        "n": 2,
        "title": "Under the name of Jerusalem, he prophesieth the progress of the church of Christ, by the conversion of some Jews and many Gentiles."
      },
      {
        "n": 3,
        "title": "In a vision Satan appeareth accusing the high priest.  He is cleansed from his sins.  Christ is promised, and great fruit from his passion."
      },
      {
        "n": 4,
        "title": "The vision of the golden candlestick and seven lamps, and of the two olive trees."
      },
      {
        "n": 5,
        "title": "The vision of the flying volume, and of the woman in the vessel."
      },
      {
        "n": 6,
        "title": "The vision of the four chariots.  Crowns are ordered for Jesus the high priest, as a type of Christ."
      },
      {
        "n": 7,
        "title": "The people inquire concerning fasting:  they are admonished to fast from sin."
      },
      {
        "n": 8,
        "title": "Joyful promises to Jerusalem:  fully verified in the church of Christ."
      },
      {
        "n": 9,
        "title": "God will defend his church, and bring over even her enemies to the faith.  The meek coming of Christ, to bring peace, to deliver the captives by his blood, and to give us all good things."
      },
      {
        "n": 10,
        "title": "God is to be sought to, and not idols.  The victories of his church, which shall arise originally from the Jewish nation."
      },
      {
        "n": 11,
        "title": "The destruction of Jerusalem and the temple.  God's dealings with the Jews, and their reprobation."
      },
      {
        "n": 12,
        "title": "God shall protect his church against her persecutors.  The mourning of Jerusalem."
      },
      {
        "n": 13,
        "title": "The fountain of Christ.  Idols and false prophets shall be extirpated: Christ shall suffer:  his people shall be tried by fire."
      },
      {
        "n": 14,
        "title": "After the persecutions of the church shall follow great prosperity. Persecutors shall be punished:  so shall all that will not serve God in his church."
      }
    ]
  },
  {
    "id": 44,
    "name": "Malachias",
    "fullName": "THE PROPHECY OF MALACHIAS",
    "desc": "MALACHIAS, whose name signifies The Angel of the Lord, was contemporary with NEHEMIAS, and by some is believed to have been the same person as ESDRAS.  He was the last of the prophets, in the order of time, and flourished about four hundred years before Christ.  He foretells the coming of Christ; the reprobation of the Jews and their sacrifices; and the calling of the Gentiles, who shall offer up to God in every place an acceptable sacrifice.",
    "chapters": [
      {
        "n": 1,
        "title": "God reproaches the Jews with their ingratitude:  and the priests for not offering pure sacrifices.  He will accept of the sacrifice that shall be offered in every place among the Gentiles."
      },
      {
        "n": 2,
        "title": "The priests are sharply reproved for neglecting their covenant.  The evil of marrying with idolaters:  and too easily putting away their wives."
      },
      {
        "n": 3,
        "title": "Christ shall come to his temple, and purify the priesthood.  They that continue in their evil ways shall be punished:  but true penitents shall receive a blessing."
      },
      {
        "n": 4,
        "title": "The judgment of the wicked, and reward of the just.  An exhortation to observe the law.  Elias shall come for the conversion of the Jews."
      }
    ]
  },
  {
    "id": 45,
    "name": "1 Machabees",
    "fullName": "THE FIRST BOOK OF MACHABEES",
    "desc": "These books are so called, because they contain the history of the people of God under the command of Judas Machabeus and his brethren: and he, as some will have it, was surnamed Machabeus, from carrying in his ensigns, or standards, those words of Exodus 15.11, Who is like to thee among the strong, O Lord:  in which the initial letters, in the Hebrew, are M. C. B. E. I.  It is not known who is the author of these books.  But as to their authority, though they are not received by the Jews, saith St. Augustine, (lib. 18, De Civ. Dei, c. 36,) they are received by the church:  who, in settling her canon of the scriptures, chose rather to be directed by the tradition she had received from the apostles of Christ, than by that of the scribes and Pharisees.  And as the church has declared these two Books canonical, even in two general councils, viz., Florence and Trent, there can be no doubt of their authenticity.",
    "chapters": [
      {
        "n": 1,
        "title": "The reign of Alexander and his successors:  Antiochus rifles and profanes the temple of God:  and persecutes unto death all that will not forsake the law of God, and the religion of their fathers."
      },
      {
        "n": 2,
        "title": "The zeal and success of Mathathias.  His exhortation to his sons at his death."
      },
      {
        "n": 3,
        "title": "Judas Machabeus succeeds his father, and overthrows Apollonius and Seron.  A great army is sent against him out of Syria.  He prepares his people for battle by fasting and prayer."
      },
      {
        "n": 4,
        "title": "Judas routs the king's army.  Gorgias flies before him.  Lysias comes against him with a great army, but is defeated.  Judas cleanses the temple, sets up a new altar, and fortifies the sanctuary."
      },
      {
        "n": 5,
        "title": "Judas and his brethren attack the enemies of their country, and deliver them that were distressed.  Josephus and Azarius, attempting contrary to order to fight against their enemies, are defeated."
      },
      {
        "n": 6,
        "title": "The fruitless repentance and death of Antiochus.  His son comes against Judas with a formidable army.  He besieges Sion:  but at last makes peace with the Jews."
      },
      {
        "n": 7,
        "title": "Demetrius is made king, and sends Bacchides and Alcimus the priest into Judea, and after them Nicanor, who is slain by Judas with all his army."
      },
      {
        "n": 8,
        "title": "Judas hears of the great character of the Romans:  he makes a league with them."
      },
      {
        "n": 9,
        "title": "Bacchides is sent again into Judea:  Judas fights against him with eight hundred men and is slain.  Jonathan succeeds him and revenges the murder of his brother John.  He fights against Bacchides.  Alcimus dies miserably.  Bacchides besieges Bethbessen.  He is forced to raise the siege and leave the country."
      },
      {
        "n": 10,
        "title": "Alexander Bales sets himself up for king:  both he and Demetrius seek to make Jonathan their friend.  Alexander kills Demetrius in battle, and honours Jonathan.  His victory over Apollonius."
      },
      {
        "n": 11,
        "title": "Ptolemee invades the kingdom of Alexander:  the latter is slain:  and the former dies soon after.  Demetrius honours Jonathan, and is rescued by the Jews from his own subjects in Antioch.  Antiochus the younger favours Jonathan.  His exploits in divers places."
      },
      {
        "n": 12,
        "title": "Jonathan renews his league with the Romans and Lacedemonians.  The forces of Demetrius flee away from him.  He is deceived and made prisoner by Tryphon."
      },
      {
        "n": 13,
        "title": "Simon is made captain general in the room of his brother.  Jonathan is slain by Tryphon.  Simon is favoured by Demetrius:  he taketh Gaza, and the castle of Jerusalem."
      },
      {
        "n": 14,
        "title": "Demetrius is taken by the king of Persia.  Judea flourishes under the government of Simon."
      },
      {
        "n": 15,
        "title": "Antiochus son of Demetrius honours Simon.  The Romans write to divers nations in favour of the Jews.  Antiochus quarrels with Simon, and sends troops to annoy him."
      },
      {
        "n": 16,
        "title": "The sons of Simon defeat the troops of Antiochus.  Simon with two of his sons are treacherously murdered by Ptolemee his son in law."
      }
    ]
  },
  {
    "id": 46,
    "name": "2 Machabees",
    "fullName": "THE SECOND BOOK OF MACHABEES",
    "desc": "This second book of MACHABEES is not a continuation of the history contained in the first:  nor does is come down so low as the first does: but relates many of the same facts more at large, and adds other remarkable particulars, omitted in the first book, relating to the state of the Jews, as well before as under the persecution of ANTIOCHUS.  The author, who is not the same with that of the first book, has given (as we learn from chap. 2.20, etc.) a short abstract of what JASON of Cyrene had written in the five volumes, concerning JUDAS and his brethren.  He wrote in Greek, and begins with two letters, sent by the Jews of Jerusalem to their brethren in Egypt.",
    "chapters": [
      {
        "n": 1,
        "title": "Letters of the Jews of Jerusalem to them that were in Egypt.  They give thanks for their delivery from Antiochus:  and exhort their brethren to keep the feast of the dedication of the altar, and of the miraculous fire."
      },
      {
        "n": 2,
        "title": "A continuation of the second letter.  Of Jeremias' hiding the ark at the time of the captivity.  The author's preface."
      },
      {
        "n": 3,
        "title": "Heliodorus is sent by king Seleucus to take away the treasures deposited in the temple.  He is struck by God, and healed by the prayers of the high priest."
      },
      {
        "n": 4,
        "title": "Onias has recourse to the king.  The ambition and wickedness of Jason and Menelaus.  Onias is treacherously murdered."
      },
      {
        "n": 5,
        "title": "Wonderful signs are seen in the air.  Jason's wickedness and end. Antiochus takes Jerusalem, and plunders the temple."
      },
      {
        "n": 6,
        "title": "Antiochus commands the law to be abolished, sets up an idol in the temple, and persecutes the faithful.  The martyrdom of Eleazar."
      },
      {
        "n": 7,
        "title": "The glorious martyrdom of the seven brethren and their mother."
      },
      {
        "n": 8,
        "title": "Judas Machabeus gathering an army gains divers victories."
      },
      {
        "n": 9,
        "title": "The wretched end, and fruitless repentance of king Antiochus."
      },
      {
        "n": 10,
        "title": "The purification of the temple and city.  Other exploits of Judas.  His victory over Timotheus."
      },
      {
        "n": 11,
        "title": "Lysias is overthrown by Judas.  He sues for peace."
      },
      {
        "n": 12,
        "title": "The Jews are still molested by their neighbours.  Judas gains divers victories over them.  He orders sacrifice and prayers for the dead."
      },
      {
        "n": 13,
        "title": "Antiochus and Lysias again invade Judea.  Menelaus is put to death.  The king's great army is worsted twice.  The peace is renewed."
      },
      {
        "n": 14,
        "title": "Demetrius challenges the kingdom.  Alcimus applies to him to be made high priest:  Nicanor is sent into Judea:  his dealings with Judas:  his threats.  The history of Razias."
      },
      {
        "n": 15,
        "title": "Judas encouraged by a vision gains a glorious victory over Nicanor.  The conclusion."
      }
    ]
  },
  {
    "id": 47,
    "name": "Matthew",
    "fullName": "THE HOLY GOSPEL OF JESUS CHRIST ACCORDING TO SAINT MATTHEW",
    "desc": "Saint Matthew, one of the twelve Apostles, who from being a publican, that is, a taxgatherer, was called by our Saviour to the Apostleship: in that profession his name is Levi.  (Luke 5.27, and Mark 2.14.)  He was the first of the Evangelists that wrote the Gospel, and that in Hebrew or Syro-Chaldaic which the Jews in Palestine spoke at that time.  The original is not now extant; but it was translated in the time of the Apostles into Greek, that version was of equal authority.  He wrote about six years after the Lord's Ascension.",
    "chapters": [
      {
        "n": 1,
        "title": "The genealogy of Christ:  he is conceived and born of a virgin."
      },
      {
        "n": 2,
        "title": "The offerings of the wise men:  the flight into Egypt:  the massacre of the Innocents."
      },
      {
        "n": 3,
        "title": "The preaching of John:  Christ is baptized."
      },
      {
        "n": 4,
        "title": "Christ's fast of forty days:  He is tempted.  He begins to preach, to call disciples to him, and to work miracles."
      },
      {
        "n": 5,
        "title": "Christ's sermon upon the mount.  The eight beatitudes."
      },
      {
        "n": 6,
        "title": "A continuation of the sermon on the mount."
      },
      {
        "n": 7,
        "title": "The third part of the sermon on the mount."
      },
      {
        "n": 8,
        "title": "Christ cleanses the leper, heals the centurion's servant, Peter's mother-in-law, and many others:  he stills the storm at sea, drives the devils out of two men possessed, and suffers them to go into the swine."
      },
      {
        "n": 9,
        "title": "Christ heals one sick of palsy:  calls Matthew:  cures the issue of blood:  raises to life the daughter of Jairus:  gives sight to two blind men:  and heals a dumb man possessed by the devil."
      },
      {
        "n": 10,
        "title": "Christ sends out his twelve apostles, with the power of miracles.  The lessons he gives them."
      },
      {
        "n": 11,
        "title": "John sends his disciples to Christ, who upbraids the Jews for their incredulity, and calls to him such as are sensible of their burdens."
      },
      {
        "n": 12,
        "title": "Christ reproves the blindness of the Pharisees, and confutes their attributing his miracles to Satan."
      },
      {
        "n": 13,
        "title": "The parables of the sower and the cockle:  of the mustardseed, etc."
      },
      {
        "n": 14,
        "title": "Herod puts John to death.  Christ feeds five thousand in the desert.  He walks upon the sea, and heals all the diseased with the touch of his garment."
      },
      {
        "n": 15,
        "title": "Christ reproves the Scribes.  He cures the daughter of the woman of Canaan:  and many others:  and feeds four thousand with seven loaves."
      },
      {
        "n": 16,
        "title": "Christ refuses to shew the Pharisees a sign from heaven.  Peter's confession is rewarded.  He is rebuked for opposing Christ's passion. All his followers must deny themselves."
      },
      {
        "n": 17,
        "title": "The Transfiguration of Christ:  He cures the lunatic child:  foretells his passion; and pays the didrachma."
      },
      {
        "n": 18,
        "title": "Christ teaches humility, to beware of scandal, and to flee the occasions of sin:  to denounce to the church incorrigible sinners, and to look upon such as refuse to hear the church as heathens.  He promises to his disciples the power of binding and loosing:  and that he will be in the midst of their assemblies.  No forgiveness for them that will not forgive."
      },
      {
        "n": 19,
        "title": "Christ declares matrimony to be indissoluble:  he recommends the making one's self an eunuch for the kingdom of heaven; and parting with all things for him.  He shews the danger of riches, and the reward of leaving all to follow him."
      },
      {
        "n": 20,
        "title": "The parable of the labourers in the vineyard.  The ambition of the two sons of Zebedee.  Christ gives sight to two blind men."
      },
      {
        "n": 21,
        "title": "Christ rides into Jerusalem upon an ass.  He casts the buyers and sellers out of the temple, curses the fig tree and puts to silence the priests and scribes."
      },
      {
        "n": 22,
        "title": "The parable of the marriage feast.  Christ orders tribute to be paid to Caesar.  He confutes the Sadducees, shews which is the first commandment in the law and puzzles the Pharisees."
      },
      {
        "n": 23,
        "title": "Christ admonishes the people to follow the good doctrine, not the bad example of the scribes and Pharisees.  He warns his disciples not to imitate their ambition and denounces divers woes against them for their hypocrisy and blindness."
      },
      {
        "n": 24,
        "title": "Christ foretells the destruction of the temple, with the signs that shall come before it and before the last judgment.  We must always watch."
      },
      {
        "n": 25,
        "title": "The parable of the ten virgins and of the talents.  The description of the last judgment."
      },
      {
        "n": 26,
        "title": "The Jews conspire against Christ.  He is anointed by Mary.  The treason of Judas.  The last supper.  The prayer in the garden.  The apprehension of our Lord.  His treatment in the house of Caiphas."
      },
      {
        "n": 27,
        "title": "The continuation of the history of the passion of Christ.  His death and burial."
      },
      {
        "n": 28,
        "title": "The resurrection of Christ.  His commission to his disciples."
      }
    ]
  },
  {
    "id": 48,
    "name": "Mark",
    "fullName": "THE HOLY GOSPEL OF JESUS CHRIST ACCORDING TO ST. MARK",
    "desc": "St. Mark, the disciple and interpreter of St. Peter (saith St. Jerome), according to what he heard from Peter himself, wrote at Rome a brief Gospel at the request of the Brethren, about ten years after our lord's Ascension; which when Peter had heard, he approved of it and with his authority published it to the church to be read.  Baronius and others say that the original was written in Latin:  but the more general opinion is that the Evangelist wrote it in Greek.",
    "chapters": [
      {
        "n": 1,
        "title": "The preaching of John the Baptist.  Christ is baptized by him.  He calls his disciples and works many miracles."
      },
      {
        "n": 2,
        "title": "Christ heals the sick of the palsy.  He calls Matthew and excuses his disciples."
      },
      {
        "n": 3,
        "title": "Christ heals the withered hand.  He chooses the twelve.  He confutes the blasphemy of the Pharisees."
      },
      {
        "n": 4,
        "title": "The parable of the sower.  Christ stills the tempest at sea."
      },
      {
        "n": 5,
        "title": "Christ casts out a legion of devils:  he heals the issue of blood, and raises the daughter of Jairus to life."
      },
      {
        "n": 6,
        "title": "Christ teaches at Nazareth:  he sends forth the twelve apostles:  he feeds five thousand with five loaves; and walks upon the sea."
      },
      {
        "n": 7,
        "title": "Christ rebukes the Pharisees.  He heals the daughter of the woman of Chanaan; and the man that was deaf and dumb."
      },
      {
        "n": 8,
        "title": "Christ feeds four thousand.  He gives sight to a blind man.  He foretells his passion."
      },
      {
        "n": 9,
        "title": "Christ is transfigured.  He casts out the dumb spirit.  He teaches humility and to avoid scandal."
      },
      {
        "n": 10,
        "title": "Marriage is not to be dissolved.  The danger of riches.  The ambition of the sons of Zebedee.  A blind man is restored to his sight."
      },
      {
        "n": 11,
        "title": "Christ enters into Jerusalem upon an ass.  He curses the barren fig tree and drives the buyers and sellers out of the temple."
      },
      {
        "n": 12,
        "title": "The parable of the vineyard and husbandmen.  Caesar's right to tribute. The Sadducees are confuted.  The first commandment.  The widow's mite."
      },
      {
        "n": 13,
        "title": "Christ foretells the destruction of the temple and the signs that shall forerun the day of judgment."
      },
      {
        "n": 14,
        "title": "The first part of the history of the passion of Christ."
      },
      {
        "n": 15,
        "title": "The continuation of the history of the passion."
      },
      {
        "n": 16,
        "title": "Christ's resurrection and ascension."
      }
    ]
  },
  {
    "id": 49,
    "name": "Luke",
    "fullName": "THE HOLY GOSPEL OF JESUS CHRIST ACCORDING TO ST. LUKE",
    "desc": "St. Luke was a native of Antioch, the capital of Syria.  He was by profession a physician; and some ancient writers say, that he was very skillful in painting.  He was converted by St. Paul and became his disciple and companion in his travels, and fellow-labourer in the ministry of the Gospel.  He wrote in Greek, about twenty-four years after our Lord's Ascension.",
    "chapters": [
      {
        "n": 1,
        "title": "The conception of John the Baptist, and of Christ.  The visitation and canticle of the Blessed Virgin.  The birth of the Baptist and the canticle of Zachary."
      },
      {
        "n": 2,
        "title": "The birth of Christ.  His presentation in the temple.  Simeon's prophecy. Christ at twelve years of age, is found amongst the doctors."
      },
      {
        "n": 3,
        "title": "John's mission and preaching.  Christ is baptized by him."
      },
      {
        "n": 4,
        "title": "Christ's fasting and temptation.  He is persecuted in Nazareth.  His miracles in Capharnaum."
      },
      {
        "n": 5,
        "title": "The miraculous draught of fishes.  The cure of the leper and of the paralytic.  The call of Matthew."
      },
      {
        "n": 6,
        "title": "Christ excuses his disciples.  He cures upon the sabbath day, chooses the twelve and makes a sermon to them."
      },
      {
        "n": 7,
        "title": "Christ heals the centurion's servant.  He raises the widow's son to life, answers the messengers sent by John and absolves the penitent sinner."
      },
      {
        "n": 8,
        "title": "The parable of the seed.  Christ stills the storm at sea, casts out the legion, heals the issue of blood and raises the daughter of Jairus to life."
      },
      {
        "n": 9,
        "title": "Christ sends forth his apostles, feeds five thousand with five loaves, is transfigured and casts out a devil."
      },
      {
        "n": 10,
        "title": "Christ sends forth and instructs his seventy-two disciples.  The good Samaritan."
      },
      {
        "n": 11,
        "title": "Christ teaches his disciples to pray.  He casts out a dumb devil, confutes the Pharisees, and pronounces woes against them for their hypocrisy."
      },
      {
        "n": 12,
        "title": "Christ warns us against hypocrisy, the fear of the world and covetousness.  He admonishes all to watch."
      },
      {
        "n": 13,
        "title": "The necessity of penance.  The barren fig tree.  The cure of the infirm woman.  The journey to Jerusalem."
      },
      {
        "n": 14,
        "title": "Christ heals the dropsical man.  The parable of the supper.  The necessity of renouncing all to follow Christ."
      },
      {
        "n": 15,
        "title": "The parables of the lost sheep and of the prodigal son."
      },
      {
        "n": 16,
        "title": "The parable of the unjust steward and of the rich man and Lazarus."
      },
      {
        "n": 17,
        "title": "Lessons of avoiding scandal and of the efficacy of faith.  The ten lepers.  The manner of the coming of Christ."
      },
      {
        "n": 18,
        "title": "We must pray always.  The Pharisee and the publican.  The danger of riches.  The blind man is restored to sight."
      },
      {
        "n": 19,
        "title": "Zacheus entertains Christ.  The parable of the pounds.  Christ rides upon an ass and weeps over Jerusalem."
      },
      {
        "n": 20,
        "title": "The parable of the husbandmen.  Of paying tribute to Caesar and of the resurrection of the dead."
      },
      {
        "n": 21,
        "title": "The widow's mites.  The signs that should forerun the destruction of Jerusalem and the end of the world."
      },
      {
        "n": 22,
        "title": "The treason of Judas.  The last supper.  The first part of the history of the passion."
      },
      {
        "n": 23,
        "title": "The continuation of the history of the passion."
      },
      {
        "n": 24,
        "title": "Christ's resurrection and manifestation of himself to his disciples."
      }
    ]
  },
  {
    "id": 50,
    "name": "John",
    "fullName": "THE HOLY GOSPEL OF JESUS CHRIST ACCORDING TO ST. JOHN",
    "desc": "St. John the Apostle and Evangelist was the son of Zebedee and Salome, brother to James the Greater.  He was called the Beloved disciple of Christ and stood by at his Crucifixion.  He wrote the Gospel after the other Evangelists, about sixty-three years after our Lord's Ascension. Many things that they had omitted were supplied by him.  The original was written in Greek; and by the Greeks he is titled:  The Divine.  St. Jerome relates that, when he was earnestly requested by the brethren to write the Gospel, he answered he would do it, if by ordering a common fast, they would all put up their prayers together to the Almighty God; which being ended replenished with the clearest and fullest revelation coming from Heaven, he burst forth into that preface:  IN THE BEGINNING WAS THE WORD.",
    "chapters": [
      {
        "n": 1,
        "title": "The divinity and incarnation of Christ.  John bears witness of him.  He begins to call his disciples."
      },
      {
        "n": 2,
        "title": "Christ changes water into wine.  He casts the sellers out of the temple."
      },
      {
        "n": 3,
        "title": "Christ's discourse with Nicodemus.  John's testimony."
      },
      {
        "n": 4,
        "title": "Christ talks with the Samaritan woman.  He heals the ruler's son."
      },
      {
        "n": 5,
        "title": "Christ heals on the sabbath the man languishing thirty-eight years.  His discourse upon this occasion."
      },
      {
        "n": 6,
        "title": "Christ feeds five thousand with five loaves.  He walks upon the sea and discourses of the bread of life."
      },
      {
        "n": 7,
        "title": "Christ goes up to the feast of the tabernacles.  He teaches in the temple."
      },
      {
        "n": 8,
        "title": "The woman taken in adultery.  Christ justifies his doctrine."
      },
      {
        "n": 9,
        "title": "He gives sight to the man born blind."
      },
      {
        "n": 10,
        "title": "Christ is the door and the good shepherd.  He and his Father are one."
      },
      {
        "n": 11,
        "title": "Christ raises Lazarus to life.  The rulers resolve to put him to death."
      },
      {
        "n": 12,
        "title": "The anointing of Christ's feet.  His riding into Jerusalem upon an ass. A voice from heaven."
      },
      {
        "n": 13,
        "title": "Christ washes his disciples' feet.  The treason of Judas.  The new commandment of love."
      },
      {
        "n": 14,
        "title": "Christ's discourse after his last supper."
      },
      {
        "n": 15,
        "title": "A continuation of Christ's discourse to his disciples."
      },
      {
        "n": 16,
        "title": "The conclusion of Christ's last discourse to his disciples."
      },
      {
        "n": 17,
        "title": "Christ's prayer for his disciples."
      },
      {
        "n": 18,
        "title": "The history of the passion of Christ."
      },
      {
        "n": 19,
        "title": "The continuation of the history of the Passion of Christ."
      },
      {
        "n": 20,
        "title": "Christ's resurrection and manifestation to his disciples."
      },
      {
        "n": 21,
        "title": "Christ manifests himself to his disciples by the sea side and gives Peter the charge of his sheep."
      }
    ]
  },
  {
    "id": 51,
    "name": "Acts",
    "fullName": "THE ACTS OF THE APOSTLES",
    "desc": "This Book, which, from the first ages, hath been called, THE ACTS OF THE APOSTLES, is not to be considered as a history of what was done by all the Apostles, who were dispersed into different nations; but only a short view of the first establishment of the Christian Church.  A part of the preaching and action of St. Peter are related in the first twelve chapters; and a particular account of St. Paul's apostolical labours in the subsequent chapters.  It was written by St. Luke the Evangelist, and the original in Greek.  Its history commences from the Ascension of Christ our Lord and ends in the year sixty-three, being a brief account of the Church for the space of about thirty years.",
    "chapters": [
      {
        "n": 1,
        "title": "The ascension of Christ.  Matthias is chosen in place of Judas."
      },
      {
        "n": 2,
        "title": "The disciples receive the Holy Ghost.  Peter's sermon to the people.  The piety of the first converts."
      },
      {
        "n": 3,
        "title": "The miracle upon the lame man, followed by the conversion of many."
      },
      {
        "n": 4,
        "title": "Peter and John are apprehended.  Their constancy.  The church is increased."
      },
      {
        "n": 5,
        "title": "The judgment of God upon Ananias and Saphira.  The apostles are cast into prison."
      },
      {
        "n": 6,
        "title": "The ordination of the seven deacons.  The zeal of Stephen."
      },
      {
        "n": 7,
        "title": "Stephen's speech before the council.  His martyrdom."
      },
      {
        "n": 8,
        "title": "Philip converts the Samaritans and baptizes the eunuch."
      },
      {
        "n": 9,
        "title": "Paul's conversion and zeal.  Peter heals Eneas and raises up Tabitha to life."
      },
      {
        "n": 10,
        "title": "Cornelius is received into the church.  Peter's vision."
      },
      {
        "n": 11,
        "title": "Peter defends his having received the Gentiles into the church."
      },
      {
        "n": 12,
        "title": "Herod's persecution.  Peter's deliverance by an angel.  Herod's punishment."
      },
      {
        "n": 13,
        "title": "Saul and Barnabas are sent forth by the Holy Ghost.  They preach in Cyprus and in Antioch of Pisidia."
      },
      {
        "n": 14,
        "title": "Paul and Barnabas preach in Iconium and Lystra.  Paul heals a cripple. They are taken for gods.  Paul is stoned.  They preach in Derbe and Perge."
      },
      {
        "n": 15,
        "title": "A dissension about circumcision.  The decision and letter of the council of Jerusalem."
      },
      {
        "n": 16,
        "title": "Paul visits the churches.  He is called to preach in Macedonia.  He is scourged at Philippi."
      },
      {
        "n": 17,
        "title": "Paul preaches to the Thessalonians and Bereans.  His discourse to the Athenians."
      },
      {
        "n": 18,
        "title": "Paul founds the church of Corinth and preaches at Ephesus and in other places.  Apollo goes to Corinth."
      },
      {
        "n": 19,
        "title": "Paul establishes the church at Ephesus.  The tumult of the silversmiths."
      },
      {
        "n": 20,
        "title": "Paul passes through Macedonia and Greece.  He raises a dead man to life at Troas.  His discourse to the clergy of Ephesus."
      },
      {
        "n": 21,
        "title": "Paul goes up to Jerusalem.  He is apprehended by the Jews in the temple."
      },
      {
        "n": 22,
        "title": "Paul declares to the people the history of his conversion.  He escapes scourging by claiming the privilege of a Roman citizen."
      },
      {
        "n": 23,
        "title": "Paul stands before the council.  The Jews conspire his death.  He is sent away to Cesarea."
      },
      {
        "n": 24,
        "title": "Paul defends his innocence before Felix the governor.  He preaches the faith to him."
      },
      {
        "n": 25,
        "title": "Paul appeals to Caesar.  King Agrippa desires to hear him."
      },
      {
        "n": 26,
        "title": "Paul gives an account to Agrippa of his life, conversion and calling."
      },
      {
        "n": 27,
        "title": "Paul is shipped for Rome.  His voyage and shipwreck."
      },
      {
        "n": 28,
        "title": "Paul, after three months' stay in Melita, continues his voyage and arrives at Rome.  His conference there with the Jews."
      }
    ]
  },
  {
    "id": 52,
    "name": "Romans",
    "fullName": "THE EPISTLE OF ST. PAUL THE APOSTLE TO THE ROMANS",
    "desc": "St. Paul wrote this epistle at Corinth, when he was preparing to go to Jerusalem with the charitable contributions collected in Achaia and Macedonia for the relief of the Christians in Judea; which was about twenty-four years after Our Lord's Ascension.  It was written in Greek; but at the same time translated into Latin, for the benefit of those who did not understand that language.  And though it is not the first of his Epistles in the order of time, yet it is first placed on account of sublimity of the matter contained in it, of the preeminence of the place to which it was sent, and in veneration of the Church.",
    "chapters": [
      {
        "n": 1,
        "title": "He commends the faith of the Romans, whom he longs to see.  The philosophy of the heathens, being void of faith and humility, betrayed them into shameful sins."
      },
      {
        "n": 2,
        "title": "The Jews are censured, who make their boast of the law and keep it not. He declares who are the true Jews."
      },
      {
        "n": 3,
        "title": "The advantages of the Jews.  All men are sinners and none can be justified by the works of the law, but only by the grace of Christ."
      },
      {
        "n": 4,
        "title": "Abraham was not justified by works done, as of himself, but by grace and by faith.  And that before he was circumcised.  Gentiles, by faith, are his children."
      },
      {
        "n": 5,
        "title": "The grounds we have for hope in Christ.  Sin and death came by Adam, grace and life by Christ."
      },
      {
        "n": 6,
        "title": "The Christian must die to sin and live to God."
      },
      {
        "n": 7,
        "title": "We are released by Christ from the law and from the guilt of sin, though the inclination to it still tempts us."
      },
      {
        "n": 8,
        "title": "There is no condemnation to them that, being justified by Christ, walk not according to the flesh, but according to the spirit.  Their strong hope and love of God."
      },
      {
        "n": 9,
        "title": "The apostle's concern for the Jews.  God's election is free and not confined to their nation."
      },
      {
        "n": 10,
        "title": "The end of the law is faith in Christ.  which the Jews refusing to submit to, cannot be justified."
      },
      {
        "n": 11,
        "title": "God hath not cast off all Israel.  The Gentiles must not be proud but stand in faith and fear."
      },
      {
        "n": 12,
        "title": "Lessons of Christian virtues."
      },
      {
        "n": 13,
        "title": "Lessons of obedience to superiors and mutual charity."
      },
      {
        "n": 14,
        "title": "The strong must bear with the weak.  Cautions against judging and giving scandal."
      },
      {
        "n": 15,
        "title": "He exhorts them to be all of one mind and promises to come and see them."
      },
      {
        "n": 16,
        "title": "He concludes with salutations, bidding them beware of all that should oppose the doctrine they had learned."
      }
    ]
  },
  {
    "id": 53,
    "name": "1 Corinthians",
    "fullName": "THE FIRST EPISTLE OF ST. PAUL TO THE CORINTHIANS",
    "desc": "St. Paul, having planted the faithful in Corinth, where he had preached a year and a half and converted a great many, went to Ephesus.  After being there three years, he wrote this first Epistle to the Corinthians and sent it by the same persons, Stephanus, Fortunatus and Achaicus, who had brought their letter to him.  It was written about twenty-four years after our Lord's Ascension and contains several matters appertaining to faith and morals and also to ecclesiastical discipline.",
    "chapters": [
      {
        "n": 1,
        "title": "He reproveth their dissensions about their teachers.  The world was to be saved by preaching of the cross, and not by human wisdom or eloquence."
      },
      {
        "n": 2,
        "title": "His preaching was not in loftiness of words, but in spirit and power. And the wisdom he taught was not to be understood by the worldly wise or sensual man, but only by the spiritual man."
      },
      {
        "n": 3,
        "title": "They must not contend about their teachers, who are but God's ministers and accountable to him.  Their works shall be tried by fire."
      },
      {
        "n": 4,
        "title": "God's ministers are not to be judged.  He reprehends their boasting of their preachers and describes the treatment the apostles every where met with."
      },
      {
        "n": 5,
        "title": "He excommunicates the incestuous adulterer and admonishes them to purge out the old leaven."
      },
      {
        "n": 6,
        "title": "He blames them for going to law before unbelievers.  Of sins that exclude from the kingdom of heaven.  The evil of fornication."
      },
      {
        "n": 7,
        "title": "Lessons relating to marriage and celibacy.  Virginity is preferable to a married state."
      },
      {
        "n": 8,
        "title": "Though an idol be nothing, yet things offered up to idols are not to be eaten, for fear of scandal."
      },
      {
        "n": 9,
        "title": "The apostle did not make use of his power of being maintained at the charges of those to whom he preached, that he might give no hindrance to the gospel.  Of running in the race and striving for the mastery."
      },
      {
        "n": 10,
        "title": "By the example of the Israelites, he shews that we are not to build too much upon favours received but to avoid their sins and fly from the service of idols and from things offered to idols."
      },
      {
        "n": 11,
        "title": "Women must have a covering over their heads.  He blameth the abuses of their love feasts and upon that occasion treats of the Blessed Sacrament."
      },
      {
        "n": 12,
        "title": "Of the diversity of spiritual gifts.  The members of the mystical body, like those of the natural body, must mutually cherish one another."
      },
      {
        "n": 13,
        "title": "Charity is to be preferred before all gifts."
      },
      {
        "n": 14,
        "title": "The gift of prophesying is to be preferred before that of speaking strange tongues."
      },
      {
        "n": 15,
        "title": "Christ's resurrection and ours.  The manner of our resurrection."
      },
      {
        "n": 16,
        "title": "Of collection of alms.  Admonitions and salutations."
      }
    ]
  },
  {
    "id": 54,
    "name": "2 Corinthians",
    "fullName": "THE SECOND EPISTLE OF ST. PAUL TO THE CORINTHIANS",
    "desc": "In this Epistle St. Paul comforts those who are now reformed by his admonitions to them in the former and absolves the incestuous man on doing penance, whom he had before excommunicated for his crime.  Hence he treats of true penance and of the dignity of the ministers of the New Testament.  He cautions the faithful against false teachers and the society of infidels.  He gives an account of his sufferings and also of the favours and graces which God hath bestowed on him.  This second Epistle was written in the same year with the first and sent by Titus from some place in Macedonia.",
    "chapters": [
      {
        "n": 1,
        "title": "He speaks of his troubles in Asia.  His not coming to them was not out of levity.  The constancy and sincerity of his doctrine."
      },
      {
        "n": 2,
        "title": "He grants a pardon to the incestuous man upon his doing penance."
      },
      {
        "n": 3,
        "title": "He needs no commendatory letters.  The glory of the ministry of the New Testament."
      },
      {
        "n": 4,
        "title": "The sincerity of his preaching.  His comfort in his afflictions."
      },
      {
        "n": 5,
        "title": "He is willing to leave his earthly mansion to be with the Lord.  His charity to the Corinthians."
      },
      {
        "n": 6,
        "title": "He exhorts them to a correspondence with God's grace and not to associate with unbelievers."
      },
      {
        "n": 7,
        "title": "The apostle's affection for the Corinthians.  His comfort and joy on their account."
      },
      {
        "n": 8,
        "title": "He exhorts them to contribute bountifully to relieve the poor of Jerusalem."
      },
      {
        "n": 9,
        "title": "A further exhortation to almsgiving.  The fruits of it."
      },
      {
        "n": 10,
        "title": "To stop the calumny and boasting of false apostles, he set forth the power of his apostleship."
      },
      {
        "n": 11,
        "title": "He is forced to commend himself and his labours, lest the Corinthians should be imposed upon by the false apostles."
      },
      {
        "n": 12,
        "title": "His raptures and revelations, His being buffeted by Satan.  His fear for the Corinthians."
      },
      {
        "n": 13,
        "title": "He threatens the impenitent, to provoke them to penance."
      }
    ]
  },
  {
    "id": 55,
    "name": "Galatians",
    "fullName": "THE EPISTLE OF ST. PAUL TO THE GALATIANS",
    "desc": "The Galatians, soon after St. Paul had preached the Gospel to them, were seduced by some false teachers, who had been Jews and who were for obliging all Christians, even those who had been Gentiles, to observe circumcision and the other ceremonies of the Mosaical law.  In this Epistle, he refutes the pernicious doctrine of those teachers and also their calumny against his mission and apostleship.  The subject matter of this Epistle is much the same as that to the Romans.  It was written at Ephesus, about twenty-three years after our Lord's Ascension.",
    "chapters": [
      {
        "n": 1,
        "title": "He blames the Galatians for suffering themselves to be imposed upon by new teachers.  The apostle's calling."
      },
      {
        "n": 2,
        "title": "The apostle's preaching was approved of by the other apostles.  The Gentiles were not to be constrained to the observance of the law."
      },
      {
        "n": 3,
        "title": "The Spirit, and the blessing promised to Abraham cometh not by the law, but by faith."
      },
      {
        "n": 4,
        "title": "Christ has freed us from the servitude of the law.  We are the freeborn sons of Abraham."
      },
      {
        "n": 5,
        "title": "He exhorts them to stand to their Christian liberty.  Of the fruits of the flesh and of the spirit."
      },
      {
        "n": 6,
        "title": "He exhorts to charity, humility and all virtue.  He glories in nothing but in the cross of Christ."
      }
    ]
  },
  {
    "id": 56,
    "name": "Ephesians",
    "fullName": "THE EPISTLE OF ST. PAUL TO THE EPHESIANS",
    "desc": "Ephesus was the capital of Lesser Asia, and celebrated for the temple of Diana, to which the most part of the people of the East went frequently to worship.  But St. Paul having preached the Gospel there, for two years the first time and afterwards for about a year, converted many.  He wrote this Epistle to them when he was a prisoner in Rome; and sent it by Tychicus.  He admonishes them to hold firmly the faith which they had received and warns them, and also those of the neighbouring cities, against the sophistry of philosophers and doctrine of false teachers who were come among them.  The matters of faith contained in this Epistle are exceedingly sublime, and consequently very difficult to be understood.  It was written about twenty-nine years after our Lord's Ascension.",
    "chapters": [
      {
        "n": 1,
        "title": "The great blessings we have received through Christ.  He is the head of all the church."
      },
      {
        "n": 2,
        "title": "All our good comes through Christ.  He is our peace."
      },
      {
        "n": 3,
        "title": "The mystery hidden from former ages was discovered to the apostle, to be imparted to the Gentiles.  He prays that they may be strengthened in God."
      },
      {
        "n": 4,
        "title": "He exhorts them to unity, to put on the new man, and to fly sin."
      },
      {
        "n": 5,
        "title": "Exhortations to a virtuous life.  The mutual duties of man and wife, by the example of Christ and of the Church."
      },
      {
        "n": 6,
        "title": "Duties of children and servants.  The Christian's armour."
      }
    ]
  },
  {
    "id": 57,
    "name": "Philippians",
    "fullName": "THE EPISTLE OF ST. PAUL TO THE PHILIPPIANS",
    "desc": "The Philippians were the first among the Macedonians converted to the faith.  They had a great veneration for St. Paul and supplied his wants when he was a prisoner in Rome, sending to him by Epaphroditus, by whom he sent this Epistle; in which he recommends charity, unity and humility and warns them against false teachers, whom he calls dogs and enemies of the cross of Christ.  He also returns thanks for their benefactions.  It was written about twenty-nine years after our Lord's Ascension.",
    "chapters": [
      {
        "n": 1,
        "title": "The apostle's affection for the Philippians."
      },
      {
        "n": 2,
        "title": "He recommends them to unity and humility, and to work out their salvation with fear and trembling."
      },
      {
        "n": 3,
        "title": "He warneth them against false teachers.  He counts all other things loss, that he may gain Christ."
      },
      {
        "n": 4,
        "title": "He exhorts them to perseverance in all good and acknowledges their charitable contributions to him."
      }
    ]
  },
  {
    "id": 58,
    "name": "Colossians",
    "fullName": "THE EPISTLE OF ST. PAUL TO THE COLOSSIANS",
    "desc": "Colossa was a city of Phrygia, near Laodicea.  It does not appear that St. Paul had preached there himself, but that the Colossians were converted by Epaphras, a disciple of the Apostles.  However, as St. Paul was the great Apostle of the Gentiles, he wrote this Epistle to the Colossians when he was in prison, and about the same time that he wrote to the Ephesians and Philippians.  The exhortations and doctrine it contains are similar to that which is set forth in his Epistle to the Ephesians.",
    "chapters": [
      {
        "n": 1,
        "title": "He gives thanks for the grace bestowed upon the Colossians and prays for them.  Christ is the head of the church and the peacemaker through his blood.  Paul is his minister."
      },
      {
        "n": 2,
        "title": "He warns them against the impostures of the philosophers and the Jewish teachers, that would withdraw them from Christ."
      },
      {
        "n": 3,
        "title": "He exhorts them to put off the old man, and to put on the new.  The duties of wives and husbands, children and servants."
      },
      {
        "n": 4,
        "title": "He recommends constant prayer and wisdom.  Various salutations."
      }
    ]
  },
  {
    "id": 59,
    "name": "1 Thessalonians",
    "fullName": "THE FIRST EPISTLE OF ST. PAUL TO THE THESSALONIANS",
    "desc": "Thessalonica was the capital of Macedonia, in which St. Paul, having preached the Gospel, converted some Jews and a great number of the Gentiles:  but the unbelieving Jews, envying his success, raised such a commotion against him that he, and his companion, Sylvanus were obliged to quit the city.  Afterwards he went to Athens, where he heard that the converts in Thessalonica were under a severe persecution, ever since his departure; and lest they should lose their fortitude, he sent Timothy to strengthen and comfort them in their sufferings.  In the meantime St. Paul came to Corinth, where he wrote this first Epistle, and also the second to the Thessalonians, both in the same year, being the nineteenth after our Lord's Ascension.  These are the first of his Epistles in the order of time.",
    "chapters": [
      {
        "n": 1,
        "title": "He gives thanks for the grace bestowed on the Thessalonians."
      },
      {
        "n": 2,
        "title": "The sincerity of the apostle's preaching the gospel to them and of their receiving it."
      },
      {
        "n": 3,
        "title": "The apostle's concern and love for the Thessalonians."
      },
      {
        "n": 4,
        "title": "He exhorts them to purity and mutual charity.  He treats of the resurrection of the dead."
      },
      {
        "n": 5,
        "title": "The day of the Lord shall come when least expected.  Exhortations to several duties."
      }
    ]
  },
  {
    "id": 60,
    "name": "2 Thessalonians",
    "fullName": "THE SECOND EPISTLE OF ST. PAUL TO THE THESSALONIANS",
    "desc": "In this Epistle St. Paul admonishes the Thessalonians to be constant in the faith of Christ and not to be terrified by the insinuations of false teachers telling them that the day of judgment was near at hand, as there must come many signs and wonders before it.  He bids them to hold firm the traditions received from him, whether by word, or by epistle, and shews them how they may be certain of his letters by the manner he writes.",
    "chapters": [
      {
        "n": 1,
        "title": "He gives thanks to God for their faith and constancy and prays for their advancement in all good."
      },
      {
        "n": 2,
        "title": "The day of the Lord is not to come till the man of sin be revealed.  The apostle's traditions are to be observed."
      },
      {
        "n": 3,
        "title": "He begs their prayers and warns them against idleness."
      }
    ]
  },
  {
    "id": 61,
    "name": "1 Timothy",
    "fullName": "THE FIRST EPISTLE OF ST. PAUL TO TIMOTHY",
    "desc": "St. Paul write this Epistle to his BELOVED TIMOTHY, being then bishop of Ephesus, to instruct him in the duties of a bishop, both in respect to himself and to his charge; and that he ought to be well informed of the good morals of those on whom he was to impose hands:  Impose not hands lightly upon any man.  He tells him also how he should behave towards his clergy.  The Epistle was written about 33 years after our Lord's Ascension; but where it was written is uncertain:  the more general opinion is, that it was in Macedonia.",
    "chapters": [
      {
        "n": 1,
        "title": "He puts Timothy in mind of his charge and blesses God for the mercy he himself had received."
      },
      {
        "n": 2,
        "title": "Prayers are to be said for all men, because God wills the salvation of all.  Women are not to teach."
      },
      {
        "n": 3,
        "title": "What sort of men are to be admitted into the clergy.  The church is the pillar of truth."
      },
      {
        "n": 4,
        "title": "He warns him against heretics, and exhorts him to the exercise of piety."
      },
      {
        "n": 5,
        "title": "He gives him lessons concerning widows, and how he is to behave to his clergy."
      },
      {
        "n": 6,
        "title": "Duties of servants.  The danger of covetousness.  Lessons for the rich."
      }
    ]
  },
  {
    "id": 62,
    "name": "2 Timothy",
    "fullName": "THE SECOND EPISTLE OF ST. PAUL TO TIMOTHY",
    "desc": "In this Epistle, the Apostle again instructs and admonishes Timothy in what belonged to his office, as in the former; and also warns him to shun the conversation of those who had erred from the truth, describing at the same time their character, He tells him of his approaching death and desires him to come speedily to him.  It appears from this circumstance that he wrote this second Epistle in the time of his last imprisonment at Rome and not long before his martyrdom.",
    "chapters": [
      {
        "n": 1,
        "title": "He admonishes him to stir up the grace he received by his ordination and not to be discouraged at his sufferings, but to hold firm the sound doctrine of the gospel."
      },
      {
        "n": 2,
        "title": "He exhorts him to diligence in his office and patience in suffering. The danger of the delusions of heretics."
      },
      {
        "n": 3,
        "title": "The character of heretics of latter days.  He exhorts Timothy to constancy.  Of the great profit of the knowledge of the scriptures."
      },
      {
        "n": 4,
        "title": "His charge to Timothy.  He tells him of his approaching death and desires him to come to him."
      }
    ]
  },
  {
    "id": 63,
    "name": "Titus",
    "fullName": "THE EPISTLE OF ST. PAUL TO TITUS",
    "desc": "St. Paul, having preached the faith in the island of Crete, he ordained his beloved disciple and companion, Titus, bishop, and left him there to finish the work which he had begun.  Afterwards the Apostle, on a journey to Nicopolis, a city of Macedonia, wrote this Epistle to Titus, in which he directs him to ordain bishops and priests for the different cities, shewing him the principal qualities necessary for a bishop.  He also gives him particular advice for his own conduct to his flock, exhorting him to hold to strictness of discipline, but seasoned with lenity.  It was written about thirty-three years after our Lord's Ascension.",
    "chapters": [
      {
        "n": 1,
        "title": "What kind of men he is to ordain priests.  Some men are to be sharply rebuked."
      },
      {
        "n": 2,
        "title": "How he is to instruct both old and young.  The duty of servants.  The Christian's rule of life."
      },
      {
        "n": 3,
        "title": "Other instructions and directions for life and doctrine."
      }
    ]
  },
  {
    "id": 64,
    "name": "Philemon",
    "fullName": "THE EPISTLE OF ST. PAUL TO PHILEMON",
    "desc": "Philemon, a noble citizen of Colossa, had a servant named Onesimus, who robbed him and fled to Rome, where he met St. Paul, who was then a prisoner there the first time.  The apostle took compassion on him and received him with tenderness and converted him to the faith; for he was a Gentile before.  St. Paul sends him back to his master with this Epistle in his favour:  and though he beseeches Philemon to pardon him, yet the Apostle writes with becoming dignity and authority.  It contains divers profitable instructions and points out the charity and humanity that masters should have for their servants.",
    "chapters": [
      {
        "n": 1,
        "title": "He commends the faith and charity of Philemon; and sends back to him his fugitive servant, whom he had converted in prison."
      }
    ]
  },
  {
    "id": 65,
    "name": "Hebrews",
    "fullName": "THE EPISTLE OF ST. PAUL TO THE HEBREWS",
    "desc": "St. Paul wrote this Epistle to the Christians in Palestine, the most part of whom being Jews before their conversion, they were called Hebrews.  He exhorts them to be thoroughly converted and confirmed in the faith of Christ, clearly shewing them the preeminence of Christ's priesthood above the Levitical, and also the excellence of the new law above the old.  He commends faith by the example of the ancient fathers: and exhorts them to patience and perseverance and to remain in fraternal charity.  It appears from chap. 13 that this Epistle was written in Italy, and probably at Rome, about twenty-nine years after our Lord's Ascension.",
    "chapters": [
      {
        "n": 1,
        "title": "God spoke of old by the prophets, but now by his Son, who is incomparably greater than the angels."
      },
      {
        "n": 2,
        "title": "The transgression of the precepts of the Son of God is far more condemnable than of those of the Old Testament given by angels."
      },
      {
        "n": 3,
        "title": "Christ is more excellent than Moses.  Wherefore we must adhere to him by faith and obedience."
      },
      {
        "n": 4,
        "title": "The Christian's rest.  We are to enter into it through Jesus Christ."
      },
      {
        "n": 5,
        "title": "The office of a high priest.  Christ is our high priest."
      },
      {
        "n": 6,
        "title": "He warns them of the danger of falling by apostasy and exhorts them to patience and perseverance."
      },
      {
        "n": 7,
        "title": "The priesthood of Christ according to the order of Melchisedech excels the Levitical priesthood and puts an end both to that and to the law."
      },
      {
        "n": 8,
        "title": "More of the excellence of the priesthood of Christ and of the New Testament."
      },
      {
        "n": 9,
        "title": "The sacrifices of the law were far inferior to that of Christ."
      },
      {
        "n": 10,
        "title": "Because of the insufficiency of the sacrifices of the law, Christ our high priest shed his own blood for us, offering up once for all the sacrifice of our redemption.  He exhorts them to perseverance."
      },
      {
        "n": 11,
        "title": "What faith is.  Its wonderful fruits and efficacy demonstrated in the fathers."
      },
      {
        "n": 12,
        "title": "Exhortation to constancy under their crosses.  The danger of abusing the graces of the New Testament."
      },
      {
        "n": 13,
        "title": "Divers admonitions and exhortations."
      }
    ]
  },
  {
    "id": 66,
    "name": "James",
    "fullName": "THE CATHOLIC EPISTLE OF ST. JAMES THE APOSTLE",
    "desc": "This Epistle is called Catholic or Universal, as formerly were also the two Epistles of St. Peter, the first of St. John and that of St. Jude, because they were not written to any peculiar people or particular person, but to the faithful in general.  It was written by the apostle St. James, called the Less, who was also called the brother of our Lord, being his kinsman (for cousins german with the Hebrews were called brothers).  He was the first Bishop of Jerusalem.  In this Epistle are set forth many precepts appertaining to faith and morals; particularly, that faith without good works will not save a man and that true wisdom is given only from above.  In the fifth chapter he publishes the sacrament of anointing the sick.  It was written a short time before his martyrdom, about twenty-eight years after our Lord's Ascension.",
    "chapters": [
      {
        "n": 1,
        "title": "The benefit of tribulations.  Prayer with faith.  God is the author of all good, but not of evil.  We must be slow to anger and not hearers only, but doers of the word.  Of bridling the tongue and of pure religion."
      },
      {
        "n": 2,
        "title": "Against respect of persons.  The danger of transgressing one point of the law.  Faith is dead without works."
      },
      {
        "n": 3,
        "title": "Of the evils of the tongue.  Of the difference between the earthly and heavenly wisdom."
      },
      {
        "n": 4,
        "title": "The evils that flow from yielding to concupiscence and being friends to this world.  Admonitions against pride, detraction and the like."
      },
      {
        "n": 5,
        "title": "A woe to the rich that oppress the poor.  Exhortations to patience and to avoid swearing.  Of the anointing the sick, confession of sins and fervour in prayer."
      }
    ]
  },
  {
    "id": 67,
    "name": "1 Peter",
    "fullName": "THE FIRST EPISTLE OF ST. PETER THE APOSTLE",
    "desc": "The first Epistle of St. Peter, though brief, contains much doctrine concerning Faith, Hope, and Charity, with divers instructions to all persons of what state or condition soever.  The Apostle commands submission to rulers and superiors and exhorts all to the practice of a virtuous life in imitation, of Christ.  This Epistle is written with such apostolical dignity as to manifest the supreme authority with which its writer, the Prince of the Apostles, had been vested by his Lord and Master, Jesus Christ.  He wrote it at Rome, which figuratively he calls Babylon, about fifteen years after our Lord's Ascension.",
    "chapters": [
      {
        "n": 1,
        "title": "He gives thanks to God for the benefit of our being called to the true faith and to eternal life, into which we are to enter by many tribulations.  He exhorts to holiness of life, considering the holiness of God and our redemption by the blood of Christ."
      },
      {
        "n": 2,
        "title": "We are to lay aside all guile and go to Christ the living stone, and, as being now his people, walk worthily of him, with submission to superiors and patience under sufferings."
      },
      {
        "n": 3,
        "title": "How wives are to behave to their husbands.  What ornaments they are to seek.  Exhortations to divers Virtues."
      },
      {
        "n": 4,
        "title": "Exhortations to cease from sin, to mutual charity, to do all for the glory of God, to be willing to suffer for Christ."
      },
      {
        "n": 5,
        "title": "He exhorts both priests and laity to their respective duties and recommends to all humility and watchfulness."
      }
    ]
  },
  {
    "id": 68,
    "name": "2 Peter",
    "fullName": "THE SECOND EPISTLE OF ST. PETER THE APOSTLE",
    "desc": "In this Epistle St. Peter says (chap. 3.), Behold this second Epistle I write to you:  and before (chap. 1. 14,) Being assured that the laying away of this my tabernacle is at hand.  This shews, that it was written a very short time before his martyrdom, which was about thirty-five years after our Lord's Ascension.  In this Epistle he admonishes the faithful to be mindful of the great gifts they received from God and to join all other virtues with their faith.  He warns them against false teachers, by describing their practices and foretelling their punishments.  He describes the dissolution of this world by fire and the day of judgment.",
    "chapters": [
      {
        "n": 1,
        "title": "He exhorts them to join all other virtues with their faith, in order to secure their salvation."
      },
      {
        "n": 2,
        "title": "He warns them against false teachers and foretells their punishment."
      },
      {
        "n": 3,
        "title": "Against scoffers denying the second coming of Christ.  He declares the sudden dissolution of this world and exhorts to holiness of life."
      }
    ]
  },
  {
    "id": 69,
    "name": "1 John",
    "fullName": "THE FIRST EPISTLE OF ST. JOHN THE APOSTLE",
    "desc": "The same vein of divine love and charity towards our neighbour, which runs throughout the Gospel written by the beloved disciple and Evangelist, St. John, is found also in his Epistles.  He confirms the two principal mysteries of faith:  The mystery of the Trinity and the mystery of the incarnation of Jesus Christ the Son of God.  The sublimity and excellence of the evangelical doctrine he declares:  And this commandment we have from God, that he, who loveth God, love also his brother (chap. 4,21).  And again:  For this is the charity of God, that we keep his commandments, and:  His commandments are not heavy (chap. 5,3).  He shews how to distinguish the children of God from those of the devil:  marks out those who should be called Antichrists: describes the turpitude and gravity of sin.  Finally, he shews how the sinner may hope for pardon.  It was written, according to Baronius' account, sixty-six years after our Lord's Ascension.",
    "chapters": [
      {
        "n": 1,
        "title": "He declares what he has seen and heard of Christ who is the life eternal, to the end that we may have fellowship with God and all good through him.  Yet so if we confess our sins."
      },
      {
        "n": 2,
        "title": "Christ is our advocate.  We must keep his commandments and love one another.  We must not love the world nor give ear to new teachers, but abide by the spirit of God in the church."
      },
      {
        "n": 3,
        "title": "Of the love of God to us.  How we may distinguish the children of God and those of the devil.  Of loving one another and of purity of conscience."
      },
      {
        "n": 4,
        "title": "What spirits are of God, and what are not.  We must love one another, because God has loved us."
      },
      {
        "n": 5,
        "title": "Of them that are born of God, and of true charity.  Faith overcomes the world.  Three that bear witness to Christ.  Of faith in his name and of sin that is and is not to death."
      }
    ]
  },
  {
    "id": 70,
    "name": "2 John",
    "fullName": "THE SECOND EPISTLE OF ST. JOHN THE APOSTLE",
    "desc": "The Apostle commends Electa and her family for their steadfastness in the true faith and exhorts them to persevere, lest they lose the reward of their labours.  He exhorts them to love one another.  But with heretics to have no society, even not to salute them.  Although this Epistle is written to a particular person, yet its instructions may serve as a lesson to others, especially to those who, from their connections, situation, or condition in life, are in danger of perversion.",
    "chapters": [
      {
        "n": 1,
        "title": "He recommends walking in truth, loving one another and to beware of false teachers."
      }
    ]
  },
  {
    "id": 71,
    "name": "3 John",
    "fullName": "THE THIRD EPISTLE OF ST. JOHN THE APOSTLE",
    "desc": "St. John praises Gaius for his walking in truth and for his charity, complains of the bad conduct of Diotrephes and gives a good testimony to Demetrius.",
    "chapters": [
      {
        "n": 1,
        "title": ""
      }
    ]
  },
  {
    "id": 72,
    "name": "Jude",
    "fullName": "THE CATHOLIC EPISTLE OF ST. JUDE",
    "desc": "St. Jude, who wrote this Epistle, was one of the twelve Apostles and brother to St. James the Less.  The time it was written is uncertain: only it may be inferred from verse 17 that few or none of the Apostles were then living, except St. John.  He inveighs against the heresies and wicked practices of the Simonians, Nicolaites, and Gnostics, etc., describing them and their leaders by strong epithets and similes, He exhorts the faithful to contend earnestly for the faith first delivered to them and to beware of heretics.",
    "chapters": [
      {
        "n": 1,
        "title": "He exhorts them to stand to the faith first delivered to them and to beware of heretics."
      }
    ]
  },
  {
    "id": 73,
    "name": "Apocalypse",
    "fullName": "THE APOCALYPSE OF ST. JOHN THE APOSTLE",
    "desc": "In the first, second, and third chapters of this Book are contained instructions and admonitions which St. John was commanded to write to the seven bishops of the churches in Asia.  And in the following chapters, to the end, are contained prophecies of things that are to come to pass in the Church of Christ, particularly towards the end of the world, in the time of Antichrist.  It was written in Greek, in the island of Patmos, where St. John was in banishment by order of the cruel emperor Domitian, about sixty-four years after our Lord's Ascension.",
    "chapters": [
      {
        "n": 1,
        "title": "St. John is ordered to write to the seven churches in Asia.  The manner of Christ's appearing to him."
      },
      {
        "n": 2,
        "title": "Directions what to write to the angels or bishops of Ephesus, Smyrna, Pergamus and Thyatira."
      },
      {
        "n": 3,
        "title": "Directions what to write to Sardis, Philadelphia and Laodicea."
      },
      {
        "n": 4,
        "title": "The vision of the throne of God, the twenty-four ancients and the four living creatures."
      },
      {
        "n": 5,
        "title": "The book sealed with seven seals is opened by the Lamb, who thereupon receives adoration and praise from all."
      },
      {
        "n": 6,
        "title": "What followed upon opening six of the seals."
      },
      {
        "n": 7,
        "title": "The number of them that were marked with the seal of the living God and clothed in white robes."
      },
      {
        "n": 8,
        "title": "The seventh seal is opened.  The angels with the seven trumpets."
      },
      {
        "n": 9,
        "title": "Locusts come forth from the bottomless pit.  The vision of the army of horsemen."
      },
      {
        "n": 10,
        "title": "The cry of a mighty angel.  He gives John a book to eat."
      },
      {
        "n": 11,
        "title": "He is ordered to measure the temple.  The two witnesses."
      },
      {
        "n": 12,
        "title": "The vision of the woman clothed with the sun and of the great dragon her persecutor."
      },
      {
        "n": 13,
        "title": "Of the beast with seven heads and of a second beast."
      },
      {
        "n": 14,
        "title": "Of the Lamb and of the virgins that follow him.  Of the judgments that shall fall upon the wicked."
      },
      {
        "n": 15,
        "title": "They that have overcome the beast glorify God.  Of the seven angels with the seven vials."
      },
      {
        "n": 16,
        "title": "The seven vials are poured out.  The plagues that ensue."
      },
      {
        "n": 17,
        "title": "The description of the great harlot and of the beast upon which she sits."
      },
      {
        "n": 18,
        "title": "The fall of Babylon.  Kings and merchants lament over her."
      },
      {
        "n": 19,
        "title": "The saints glorify God for his judgments on the great harlot.  Christ's victory over the beast and the kings of the earth."
      },
      {
        "n": 20,
        "title": "Satan is bound for a thousand years.  The souls of the martyrs reign with Christ in the first resurrection.  The last attempts of Satan against the church.  The last judgment."
      },
      {
        "n": 21,
        "title": "The new Jerusalem described."
      },
      {
        "n": 22,
        "title": "The water and tree of life.  The conclusion."
      }
    ]
  }
];

export const oldTestamentIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46];
export const newTestamentIds = [47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73];
