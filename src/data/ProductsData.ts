export interface LocalizedString {
    en: string;
    bg?: string;
    de?: string;
    fr?: string;
}

export function localize(field: LocalizedString, lang: string): string {
    const val = field[lang as keyof LocalizedString];
    return val || field.en;
}

export interface Category {
    id: number;
    name: LocalizedString;
}

export interface SubCategory {
    id: number;
    parentCategoryId: number;
    name: LocalizedString;
}

export const SubCategories: SubCategory[] = [
    {
        id: 1,
        parentCategoryId: 1,
        name: { en: 'Apple Pectin Based', bg: 'На базата на ябълков пектин', de: 'Auf Apfelpektinbasis', fr: 'À base de pectine de pomme' },
    },
    {
        id: 2,
        parentCategoryId: 1,
        name: { en: 'Others', bg: 'Други', de: 'Sonstige', fr: 'Autres' },
    },
];

export const Categories: Category[] = [
    { id: 1, name: { en: 'Dietary Supplements', bg: 'Хранителни добавки',  de: 'Nahrungsergänzungsmittel', fr: 'Compléments alimentaires' } },
    { id: 2, name: { en: 'Oral Care',            bg: 'Орална хигиена',      de: 'Mundpflege',               fr: 'Hygiène buccale' } },
    { id: 3, name: { en: 'Foot Care',            bg: 'Грижа за крака',      de: 'Fußpflege',                fr: 'Soin des pieds' } },
];

export interface Product {
    id: string;
    title: string;
    description: Array<{ label: LocalizedString; text: LocalizedString }>;
    quickViewDescription?: LocalizedString;
    image: string;
    category?: Category;
    subCategory?: SubCategory;
}

export const products: Product[] = [
    {
        id: 'Osteolla',
        title: 'Osteolla',
        quickViewDescription: {
            en: 'Calcium complex for healthy bones and joints.',
            bg: 'Калциев комплекс за здрави кости и стави.',
            de: 'Kalziumkomplex für gesunde Knochen und Gelenke.',
            fr: 'Complexe calcique pour des os et articulations sains.',
        },
        description: [
            {
                label: { en: '' },
                text: {
                    en: "Calcium is essential for human's body and Osteolla+ delivers it in a physiological and effective way. Osteolla+ is a liquid calcium nano suspension, with mild taste of fresh mango and is very easy to swallow. Osteolla+ s innovative formula allows the Calcium to be released gradually, which creates a constant high level of Calcium in blood serum. Maintaining those Calcium levels is mandatory to ensure that the Calcium from blood serum will be built in the bones. In addition to the Calcium complexes, vitamins K2 and D3 are added in Osteolla+, in order to support the maintenance of bones' density. Osteolla+ is taken once daily and is very gentle to the stomach.",
                    bg: 'Калцият е от съществено значение за човешкото тяло, а Osteolla+ го доставя по физиологичен и ефективен начин. Osteolla+ е течна калциева нано-суспензия с мек вкус на пресно манго, която се поглъща много лесно. Иновативната формула на Osteolla+ позволява на калция да се освобождава постепенно, което поддържа постоянно високо ниво на калций в кръвния серум. Поддържането на тези нива на калций е задължително, за да се гарантира, че калцият от кръвния серум ще се изгради в костите. В допълнение към калциевите комплекси, в Osteolla+ са добавени витамини K2 и D3, за да поддържат костната плътност. Osteolla+ се приема веднъж дневно и е много щадящ за стомаха.',
                    de: 'Kalzium ist für den menschlichen Körper unentbehrlich, und Osteolla+ liefert es auf physiologische und effektive Weise. Osteolla+ ist eine flüssige Kalzium-Nano-Suspension mit mildem Geschmack von frischer Mango und lässt sich sehr leicht schlucken. Die innovative Formel von Osteolla+ ermöglicht eine schrittweise Freisetzung des Kalziums, was einen konstant hohen Kalziumspiegel im Blutserum schafft. Die Aufrechterhaltung dieser Kalziumspiegel ist notwendig, um sicherzustellen, dass das Kalzium aus dem Blutserum in die Knochen eingebaut wird. Zusätzlich zu den Kalziumkomplexen wurden in Osteolla+ die Vitamine K2 und D3 hinzugefügt, um die Erhaltung der Knochendichte zu unterstützen. Osteolla+ wird einmal täglich eingenommen und ist sehr magenfreundlich.',
                    fr: "Le calcium est essentiel pour le corps humain et Osteolla+ le délivre de manière physiologique et efficace. Osteolla+ est une nano-suspension liquide de calcium, avec un goût doux de mangue fraîche et très facile à avaler. La formule innovante d'Osteolla+ permet au calcium d'être libéré progressivement, ce qui crée un niveau constant élevé de calcium dans le sérum sanguin. Le maintien de ces niveaux de calcium est indispensable pour garantir que le calcium du sérum sanguin sera intégré dans les os. En plus des complexes calciques, les vitamines K2 et D3 sont ajoutées dans Osteolla+, afin de soutenir le maintien de la densité osseuse. Osteolla+ est pris une fois par jour et est très doux pour l'estomac.",
                },
            },
        ],
        image: '/img/Mpharm_images/Osteolla.jpg',
        category: Categories[0],
        subCategory: SubCategories[1],
    },
    {
        id: 'AppleAquaDiaPectin',
        title: 'Apple Aqua Dia Pectin',
        quickViewDescription: {
            en: 'Natural apple pectin for digestive health.',
            bg: 'Натурален ябълков пектин за здраво храносмилане.',
            de: 'Natürliches Apfelpektin für die Verdauungsgesundheit.',
            fr: 'Pectine de pomme naturelle pour la santé digestive.',
        },
        description: [
            {
                label: { en: '' },
                text: {
                    en: '"Apple Aqua Dia Pectin Detoxr" supports the natural detoxification process of the body in cases of excessive consumption of processed foods and beverages, excessive smoking and chronic stress. The liquid form of the product has a detoxifying effect and ensures maximum absorption by the body. This product is indicated for people with diabetes.',
                    bg: '"Apple Aqua Dia Pectin Detoxr" подпомага естествения процес на детоксикация на организма при прекомерна консумация на преработени храни и напитки, прекомерно тютюнопушене и хроничен стрес. Течната форма на продукта има детоксикиращ ефект и осигурява максимално усвояване от организма. Продуктът е подходящ за хора с диабет.',
                    de: '"Apple Aqua Dia Pectin Detoxr" unterstützt den natürlichen Entgiftungsprozess des Körpers bei übermäßigem Konsum von verarbeiteten Lebensmitteln und Getränken, übermäßigem Rauchen und chronischem Stress. Die flüssige Form des Produkts hat eine entgiftende Wirkung und gewährleistet maximale Aufnahme durch den Körper. Dieses Produkt ist für Menschen mit Diabetes geeignet.',
                    fr: "\"Apple Aqua Dia Pectin Detoxr\" soutient le processus naturel de détoxification du corps en cas de consommation excessive d'aliments et de boissons transformés, de tabagisme excessif et de stress chronique. La forme liquide du produit a un effet détoxifiant et assure une absorption maximale par l'organisme. Ce produit est indiqué pour les personnes diabétiques.",
                },
            },
        ],
        image: '/img/Mpharm_images/AppleAquaDiaPectin.jpg',
        category: Categories[0],
        subCategory: SubCategories[0],
    },
    {
        id: 'AppleAquaPectinDetoxFilter',
        title: 'Apple Aqua Pectin Detox Filter',
        quickViewDescription: {
            en: 'Detoxifying apple pectin for cleansing.',
            bg: 'Детоксикиращ ябълков пектин за прочистване.',
            de: 'Entgiftendes Apfelpektin zur Reinigung.',
            fr: 'Pectine de pomme détoxifiante pour la purification.',
        },
        description: [
            {
                label: { en: '' },
                text: {
                    en: '"Apple Aqua Pectin Detox Filter" supports the natural detoxification process of the body in cases of excessive consumption of processed foods and beverages, excessive smoking and chronic stress.The liquid form of the product has a detoxifying effect and ensures maximum absorption by the body.',
                    bg: '"Apple Aqua Pectin Detox Filter" подпомага естествения процес на детоксикация на организма при прекомерна консумация на преработени храни и напитки, прекомерно тютюнопушене и хроничен стрес. Течната форма на продукта има детоксикиращ ефект и осигурява максимално усвояване от организма.',
                    de: '"Apple Aqua Pectin Detox Filter" unterstützt den natürlichen Entgiftungsprozess des Körpers bei übermäßigem Konsum von verarbeiteten Lebensmitteln und Getränken, übermäßigem Rauchen und chronischem Stress. Die flüssige Form des Produkts hat eine entgiftende Wirkung und gewährleistet maximale Aufnahme durch den Körper.',
                    fr: "\"Apple Aqua Pectin Detox Filter\" soutient le processus naturel de détoxification du corps en cas de consommation excessive d'aliments et de boissons transformés, de tabagisme excessif et de stress chronique. La forme liquide du produit a un effet détoxifiant et assure une absorption maximale par l'organisme.",
                },
            },
        ],
        image: '/img/Mpharm_images/AppleAquaPectinDetoxFilter.jpg',
        category: Categories[0],
        subCategory: SubCategories[0],
    },
    {
        id: 'AppleAquaPectinProfessional',
        title: 'Apple Aqua Pectin Professional',
        quickViewDescription: {
            en: 'Professional-grade apple pectin for detoxification.',
            bg: 'Ябълков пектин от професионална серия за детоксикация.',
            de: 'Professionelles Apfelpektin zur Entgiftung.',
            fr: 'Pectine de pomme de qualité professionnelle pour la détoxification.',
        },
        description: [
            {
                label: { en: '' },
                text: {
                    en: 'The "Apple Aqua Pectin" professional series was especially developed for people, exposed to urban, professional, industrial, radioactive and other types of pollution, as well as in case chemotherapy, radiotherapy and prolonged intake of medications. It has a powerful prophylactic effect also in extracting heavy metals from the body and ensures maximum assimilation of the apple pectin, which renders it exceptionally suitable for professionals, exposed to the harmful effects of the environment. Specially developed bland of low- and high-esterified apple pectin was used, focused on the extraction of poisons from the human body. This product does not require the intake of any additional nutritional supplements.',
                    bg: 'Професионалната серия "Apple Aqua Pectin" е специално разработена за хора, изложени на градско, професионално, индустриално, радиоактивно и друго замърсяване, както и при химиотерапия, лъчетерапия и продължителен прием на медикаменти. Притежава мощен профилактичен ефект при извличане на тежки метали от организма и осигурява максимално усвояване на ябълковия пектин, което го прави изключително подходящ за специалисти, изложени на вредното въздействие на околната среда. Използва се специално разработена смес от нискоестерифициран и високоестерифициран ябълков пектин, насочена към извличане на отрови от човешкото тяло. Продуктът не изисква прием на допълнителни хранителни добавки.',
                    de: 'Die professionelle Serie "Apple Aqua Pectin" wurde speziell für Menschen entwickelt, die städtischer, beruflicher, industrieller, radioaktiver und anderer Verschmutzung ausgesetzt sind, sowie bei Chemotherapie, Strahlentherapie und langfristiger Medikamenteneinnahme. Es hat eine starke prophylaktische Wirkung bei der Extraktion von Schwermetallen aus dem Körper und gewährleistet maximale Assimilation des Apfelpektins. Es wurde eine speziell entwickelte Mischung aus niedrig- und hochverestertem Apfelpektin verwendet, die auf die Extraktion von Giftstoffen aus dem menschlichen Körper ausgerichtet ist. Dieses Produkt erfordert keine zusätzliche Einnahme von Nahrungsergänzungsmitteln.',
                    fr: "La série professionnelle \"Apple Aqua Pectin\" a été spécialement développée pour les personnes exposées à la pollution urbaine, professionnelle, industrielle, radioactive et à d'autres types de pollution, ainsi qu'en cas de chimiothérapie, de radiothérapie et de prise prolongée de médicaments. Elle a un puissant effet prophylactique pour l'extraction des métaux lourds de l'organisme et assure une assimilation maximale de la pectine de pomme. Un mélange spécialement développé de pectine de pomme faiblement et hautement estérifiée a été utilisé, axé sur l'extraction des poisons du corps humain. Ce produit ne nécessite pas la prise de suppléments nutritionnels supplémentaires.",
                },
            },
        ],
        image: '/img/Mpharm_images/AppleAquaPectinProfesional.jpg',
        category: Categories[0],
        subCategory: SubCategories[0],
    },
    {
        id: 'ProBioPectin6Sasets',
        title: 'Pro BioPectin 6 Sasets',
        quickViewDescription: {
            en: 'Probiotic supplement for good health.',
            bg: 'Пробиотична добавка за добро здраве.',
            de: 'Probiotisches Nahrungsergänzungsmittel für gute Gesundheit.',
            fr: 'Complément probiotique pour une bonne santé.',
        },
        description: [],
        image: '/img/Mpharm_images/ProBioPectin6Sasets.jpg',
        category: Categories[0],
        subCategory: SubCategories[0],
    },
    {
        id: 'ProBioPectin250g',
        title: 'Pro BioPectin 250g',
        quickViewDescription: {
            en: 'Probiotic supplement for good health.',
            bg: 'Пробиотична добавка за добро здраве.',
            de: 'Probiotisches Nahrungsergänzungsmittel für gute Gesundheit.',
            fr: 'Complément probiotique pour une bonne santé.',
        },
        description: [],
        image: '/img/Mpharm_images/ProBioPectin250g.jpg',
        category: Categories[0],
        subCategory: SubCategories[0],
    },
    {
        id: 'CalcievGluconat',
        title: 'Calcium Gluconate',
        quickViewDescription: {
            en: 'Syrup with fresh taste of strawberry.',
            bg: 'Сироп с пресен вкус на ягода.',
            de: 'Sirup mit frischem Erdbeergeschmack.',
            fr: 'Sirop au goût frais de fraise.',
        },
        description: [
            {
                label: { en: '' },
                text: {
                    en: 'Syrup with fresh taste of strawberry. Calcium gluconate Syrup is a food supplement that contains a highly water-soluble form of calcium. Calcium ions accelerate blood-coagulation process. Calcium ions stabilizes the permeability of cell membranes. Food supplement. This product is not a substitute of the varied nutrition. Maximal recommended daily amount – 50 ml (650 mg of elementary calcium). Do not exceed the recommended daily amount.',
                    bg: 'Сироп с пресен вкус на ягода. Калциев глюконат сироп е хранителна добавка, съдържаща силно разтворима във вода форма на калций. Калциевите йони ускоряват процеса на кръвосъсирване. Калциевите йони стабилизират пропускливостта на клетъчните мембрани. Хранителна добавка. Продуктът не е заместител на разнообразното хранене. Максимално препоръчително дневно количество – 50 мл (650 мг елементарен калций). Не превишавайте препоръчителното дневно количество.',
                    de: 'Sirup mit frischem Erdbeergeschmack. Kalziumgluconat-Sirup ist ein Nahrungsergänzungsmittel, das eine hochlösliche Form von Kalzium enthält. Kalziumionen beschleunigen den Blutgerinnungsprozess. Kalziumionen stabilisieren die Permeabilität der Zellmembranen. Nahrungsergänzungsmittel. Dieses Produkt ist kein Ersatz für abwechslungsreiche Ernährung. Maximale empfohlene Tagesmenge – 50 ml (650 mg elementares Kalzium). Empfohlene Tagesmenge nicht überschreiten.',
                    fr: "Sirop au goût frais de fraise. Le sirop de gluconate de calcium est un complément alimentaire contenant une forme de calcium hautement soluble dans l'eau. Les ions calcium accélèrent le processus de coagulation sanguine. Les ions calcium stabilisent la perméabilité des membranes cellulaires. Complément alimentaire. Ce produit ne remplace pas une alimentation variée. Quantité journalière maximale recommandée – 50 ml (650 mg de calcium élémentaire). Ne pas dépasser la dose journalière recommandée.",
                },
            },
            {
                label: { en: 'Warning', bg: 'Предупреждение', de: 'Warnung', fr: 'Avertissement' },
                text: {
                    en: 'Keep out of the reach of children.',
                    bg: 'Да се пази от деца.',
                    de: 'Von Kindern fernhalten.',
                    fr: 'Tenir hors de la portée des enfants.',
                },
            },
        ],
        image: '/img/Mpharm_images/CalcievGluconat.jpg',
        category: Categories[0],
        subCategory: SubCategories[1],
    },
    {
        id: 'CornsCalloutsCleaner',
        title: 'Corns Callouts Cleaner',
        quickViewDescription: {
            en: 'Effective treatment for corns and calluses.',
            bg: 'Ефективно лечение на мазоли и натоптиши.',
            de: 'Wirksame Behandlung von Hühneraugen und Schwielen.',
            fr: 'Traitement efficace des cors et callosités.',
        },
        description: [
            {
                label: { en: 'Effect', bg: 'Ефект', de: 'Wirkung', fr: 'Effet' },
                text: {
                    en: 'Remove keratinized skin cells to sites of local\nthickening (calluses)\n',
                    bg: 'Премахва кератинизираните кожни клетки на места с локално удебеляване (натоптиши).',
                    de: 'Entfernt verhornte Hautzellen an Stellen lokaler Verdickungen (Schwielen).',
                    fr: "Élimine les cellules cutanées kératinisées aux sites d'épaississement local (callosités).",
                },
            },
            {
                label: { en: 'Use', bg: 'Употреба', de: 'Anwendung', fr: 'Utilisation' },
                text: {
                    en: 'Protect the area around the corn with a perforated plaster\nor a thick layer of vaseline. Apply a thin layer of the solution\nexactly on the corn and leave to dry. Remove the plaster or\nvaseline. Repeat 2 times a day on dry clean skin, until\ncomplete removal of the corn.\nDo not use longer than 2 weeks.\n',
                    bg: 'Защитете кожата около мазола с перфориран пластир или дебел слой вазелин. Нанесете тънък слой от разтвора точно върху мазола и оставете да изсъхне. Отстранете пластира или вазелина. Повтаряйте 2 пъти дневно върху суха чиста кожа до пълното отстраняване на мазола. Не използвайте повече от 2 седмици.',
                    de: 'Schützen Sie den Bereich um das Hühnerauge mit einem perforierten Pflaster oder einer dicken Schicht Vaseline. Tragen Sie eine dünne Schicht der Lösung genau auf das Hühnerauge auf und lassen Sie sie trocknen. Entfernen Sie das Pflaster oder die Vaseline. Wiederholen Sie dies 2 Mal täglich auf trockener, sauberer Haut, bis das Hühnerauge vollständig entfernt ist. Nicht länger als 2 Wochen verwenden.',
                    fr: "Protégez la zone autour du cor avec un pansement perforé ou une épaisse couche de vaseline. Appliquez une fine couche de la solution exactement sur le cor et laissez sécher. Retirez le pansement ou la vaseline. Répétez 2 fois par jour sur une peau sèche et propre, jusqu'à l'élimination complète du cor. Ne pas utiliser plus de 2 semaines.",
                },
            },
            {
                label: { en: 'ATTENTION!', bg: 'ВНИМАНИЕ!', de: 'ACHTUNG!', fr: 'ATTENTION !' },
                text: {
                    en: 'Cosmetic product! For external use only!\nKeep out of reach of children! Apply on feet only!\nDo not use on damaged or irritated skin!\nIn case of contact with the eyes, wash with plenty of water\nand consult your doctor! Not to be used from diabetics or people with circulatory problems!\n',
                    bg: 'Козметичен продукт! Само за външна употреба! Да се пази от деца! Прилагайте само върху краката! Не използвайте върху наранена или раздразнена кожа! При контакт с очите измийте обилно с вода и се консултирайте с лекар! Да не се използва от диабетици или хора с нарушено кръвообращение!',
                    de: 'Kosmetisches Produkt! Nur zur äußerlichen Anwendung! Von Kindern fernhalten! Nur auf die Füße auftragen! Nicht auf beschädigter oder gereizter Haut verwenden! Bei Kontakt mit den Augen mit reichlich Wasser waschen und einen Arzt aufsuchen! Nicht von Diabetikern oder Personen mit Kreislaufproblemen verwenden!',
                    fr: "Produit cosmétique ! Usage externe uniquement ! Tenir hors de la portée des enfants ! Appliquer uniquement sur les pieds ! Ne pas utiliser sur une peau endommagée ou irritée ! En cas de contact avec les yeux, rincer abondamment à l'eau et consulter un médecin ! Ne pas utiliser chez les diabétiques ou les personnes ayant des problèmes circulatoires !",
                },
            },
        ],
        image: '/img/Mpharm_images/CornsCalloutsCleaner.jpg',
        category: Categories[2],
    },
    {
        id: 'FootOderFree',
        title: 'Foot Oder Free',
        quickViewDescription: {
            en: 'Foot spray for odor control.',
            bg: 'Спрей за крака за контрол на миризмата.',
            de: 'Fußspray zur Geruchskontrolle.',
            fr: 'Spray pour les pieds contre les odeurs.',
        },
        description: [
            {
                label: { en: 'Effect', bg: 'Ефект', de: 'Wirkung', fr: 'Effet' },
                text: {
                    en: 'Removes the unpleasant smell.\nKeeps feet dry and fresh.\n',
                    bg: 'Премахва неприятната миризма. Поддържа краката сухи и свежи.',
                    de: 'Beseitigt unangenehme Gerüche. Hält die Füße trocken und frisch.',
                    fr: 'Élimine les odeurs désagréables. Garde les pieds secs et frais.',
                },
            },
            {
                label: { en: 'Use', bg: 'Употреба', de: 'Anwendung', fr: 'Utilisation' },
                text: {
                    en: 'Spray the product on clean dry feet every morning. Put on socks or shoes on after the skin has dried. Your feet will feel and smell fresh throughout the day.\nFor better effect, use in combination with No Myco products by Dr. Hanss.\n',
                    bg: 'Пръскайте продукта върху чисти сухи крака всяка сутрин. Обуйте чорапи или обувки след като кожата изсъхне. Краката ви ще се чувстват и миришат свежо през целия ден. За по-добър ефект използвайте в комбинация с продуктите No Myco на Dr. Hanss.',
                    de: 'Sprühen Sie das Produkt jeden Morgen auf saubere, trockene Füße. Ziehen Sie Socken oder Schuhe an, nachdem die Haut getrocknet ist. Ihre Füße werden den ganzen Tag frisch duften. Für bessere Wirkung in Kombination mit No Myco Produkten von Dr. Hanss verwenden.',
                    fr: 'Vaporiser le produit sur des pieds propres et secs chaque matin. Mettre des chaussettes ou des chaussures après que la peau ait séché. Vos pieds se sentiront frais tout au long de la journée. Pour un meilleur effet, utiliser en combinaison avec les produits No Myco du Dr. Hanss.',
                },
            },
            {
                label: { en: 'ATTENTION!', bg: 'ВНИМАНИЕ!', de: 'ACHTUNG!', fr: 'ATTENTION !' },
                text: {
                    en: 'Cosmetic product! For external use only!\nKeep out of reach of children! Apply on feet only!\nIn case of contact with the eyes, wash with plenty of water\nand consult your doctor! Not suitable for children under\n3 years of age! Do not use on sore or irritated skin!\n',
                    bg: 'Козметичен продукт! Само за външна употреба! Да се пази от деца! Прилагайте само върху краката! При контакт с очите измийте обилно с вода и се консултирайте с лекар! Не е подходящ за деца под 3 години! Не използвайте върху наранена или раздразнена кожа!',
                    de: 'Kosmetisches Produkt! Nur zur äußerlichen Anwendung! Von Kindern fernhalten! Nur auf die Füße auftragen! Bei Kontakt mit den Augen mit reichlich Wasser waschen und einen Arzt aufsuchen! Nicht für Kinder unter 3 Jahren geeignet! Nicht auf wunder oder gereizter Haut verwenden!',
                    fr: "Produit cosmétique ! Usage externe uniquement ! Tenir hors de la portée des enfants ! Appliquer uniquement sur les pieds ! En cas de contact avec les yeux, rincer abondamment à l'eau et consulter un médecin ! Ne convient pas aux enfants de moins de 3 ans ! Ne pas utiliser sur une peau irritée !",
                },
            },
        ],
        image: '/img/Mpharm_images/FootOdourFree.jpg',
        category: Categories[2],
    },
    {
        id: 'FreshFootSpray',
        title: 'Fresh Foot Spray',
        quickViewDescription: {
            en: 'Refreshing foot spray for all-day freshness.',
            bg: 'Освежаващ спрей за крака за свежест през целия ден.',
            de: 'Erfrischendes Fußspray für ganztägige Frische.',
            fr: 'Spray rafraîchissant pour les pieds pour une fraîcheur toute la journée.',
        },
        description: [
            {
                label: { en: 'Effect', bg: 'Ефект', de: 'Wirkung', fr: 'Effet' },
                text: {
                    en: 'Has a refreshing and cooling effect, prevents perspiration and keeps feet dry.',
                    bg: 'Има освежаващ и охлаждащ ефект, предотвратява изпотяването и поддържа краката сухи.',
                    de: 'Hat eine erfrischende und kühlende Wirkung, verhindert Schwitzen und hält die Füße trocken.',
                    fr: 'A un effet rafraîchissant et rafraîchissant, prévient la transpiration et garde les pieds secs.',
                },
            },
            {
                label: { en: 'Use', bg: 'Употреба', de: 'Anwendung', fr: 'Utilisation' },
                text: {
                    en: 'Spray the product on clean and dry feet every morning. Put on socks or shoes on after the skin has dried.\nYour feet will feel and smell fresh throughout the day.\nFor better effect, use in combination with No Myco products by Dr. Hanss.\n',
                    bg: 'Пръскайте продукта върху чисти и сухи крака всяка сутрин. Обуйте чорапи или обувки след като кожата изсъхне. Краката ви ще се чувстват и миришат свежо през целия ден. За по-добър ефект използвайте в комбинация с продуктите No Myco на Dr. Hanss.',
                    de: 'Sprühen Sie das Produkt jeden Morgen auf saubere und trockene Füße. Ziehen Sie Socken oder Schuhe an, nachdem die Haut getrocknet ist. Ihre Füße werden den ganzen Tag frisch duften. Für bessere Wirkung in Kombination mit No Myco Produkten von Dr. Hanss verwenden.',
                    fr: 'Vaporiser le produit sur des pieds propres et secs chaque matin. Mettre des chaussettes ou des chaussures après que la peau ait séché. Vos pieds se sentiront frais tout au long de la journée. Pour un meilleur effet, utiliser en combinaison avec les produits No Myco du Dr. Hanss.',
                },
            },
            {
                label: { en: 'ATTENTION!', bg: 'ВНИМАНИЕ!', de: 'ACHTUNG!', fr: 'ATTENTION !' },
                text: {
                    en: 'Cosmetic product! For external use only!\nKeep out of reach of children! Apply on feet only!\nIn case of contact with the eyes, wash with plenty of water\nand consult your doctor! Not suitable for children under\n3 years of age! Do not use on sore or irritated skin!\n',
                    bg: 'Козметичен продукт! Само за външна употреба! Да се пази от деца! Прилагайте само върху краката! При контакт с очите измийте обилно с вода и се консултирайте с лекар! Не е подходящ за деца под 3 години! Не използвайте върху наранена или раздразнена кожа!',
                    de: 'Kosmetisches Produkt! Nur zur äußerlichen Anwendung! Von Kindern fernhalten! Nur auf die Füße auftragen! Bei Kontakt mit den Augen mit reichlich Wasser waschen und einen Arzt aufsuchen! Nicht für Kinder unter 3 Jahren geeignet! Nicht auf wunder oder gereizter Haut verwenden!',
                    fr: "Produit cosmétique ! Usage externe uniquement ! Tenir hors de la portée des enfants ! Appliquer uniquement sur les pieds ! En cas de contact avec les yeux, rincer abondamment à l'eau et consulter un médecin ! Ne convient pas aux enfants de moins de 3 ans ! Ne pas utiliser sur une peau irritée !",
                },
            },
        ],
        image: '/img/Mpharm_images/FreshFoot.jpg',
        category: Categories[2],
    },
    {
        id: 'MycoProtectFootPowder',
        title: 'Myco Protect Foot Powder',
        quickViewDescription: {
            en: 'Antifungal foot powder for protection.',
            bg: 'Противогъбичен прах за крака за защита.',
            de: 'Antimykotisches Fußpuder zum Schutz.',
            fr: 'Poudre antifongique pour les pieds pour la protection.',
        },
        description: [
            {
                label: { en: 'Action', bg: 'Действие', de: 'Wirkung', fr: 'Action' },
                text: {
                    en: 'Creates an antiseptic environment on the skin and between the toes. Relieves itching.',
                    bg: 'Създава антисептична среда върху кожата и между пръстите. Облекчава сърбежа.',
                    de: 'Schafft ein antiseptisches Milieu auf der Haut und zwischen den Zehen. Lindert Juckreiz.',
                    fr: 'Crée un environnement antiseptique sur la peau et entre les orteils. Soulage les démangeaisons.',
                },
            },
            {
                label: { en: 'Dosage', bg: 'Дозировка', de: 'Dosierung', fr: 'Dosage' },
                text: {
                    en: 'Apply the powder on the skin of the feet 2 times a day. Before application of the powder, the feet should be cleaned and dried up. The powder may also be applied on the inside of socks and shoes.\nApplication should continue at least two weeks after all visible symptoms have disappeared. To maximize the effect the product can be used together with with Dr.Hanss No Myco foot spray.\n',
                    bg: 'Нанасяйте праха върху кожата на краката 2 пъти дневно. Преди нанасяне краката трябва да са чисти и сухи. Прахът може да се нанесе и върху вътрешността на чорапите и обувките. Прилагането трябва да продължи поне две седмици след изчезването на всички видими симптоми. За максимален ефект продуктът може да се използва заедно с Dr.Hanss No Myco спрей за крака.',
                    de: 'Tragen Sie das Puder 2 Mal täglich auf die Fußhaut auf. Vor dem Auftragen sollten die Füße gereinigt und getrocknet werden. Das Puder kann auch auf der Innenseite von Socken und Schuhen aufgetragen werden. Die Anwendung sollte mindestens zwei Wochen nach dem Verschwinden aller sichtbaren Symptome fortgesetzt werden. Zur Maximierung der Wirkung kann das Produkt zusammen mit Dr.Hanss No Myco Fußspray verwendet werden.',
                    fr: "Appliquer la poudre sur la peau des pieds 2 fois par jour. Avant l'application, les pieds doivent être nettoyés et séchés. La poudre peut également être appliquée à l'intérieur des chaussettes et des chaussures. L'application doit se poursuivre au moins deux semaines après la disparition de tous les symptômes visibles. Pour maximiser l'effet, le produit peut être utilisé avec le spray pour les pieds Dr.Hanss No Myco.",
                },
            },
            {
                label: { en: 'ATTENTION!', bg: 'ВНИМАНИЕ!', de: 'ACHTUNG!', fr: 'ATTENTION !' },
                text: {
                    en: 'Cosmetic product! For external use only!\nKeep out of reach of children! Apply on feet only!\nIn case of contact with the eyes, wash with plenty of water\nand consult your doctor! Not suitable for children under\n3 years of age! Do not use on sore or irritated skin!\n',
                    bg: 'Козметичен продукт! Само за външна употреба! Да се пази от деца! Прилагайте само върху краката! При контакт с очите измийте обилно с вода и се консултирайте с лекар! Не е подходящ за деца под 3 години! Не използвайте върху наранена или раздразнена кожа!',
                    de: 'Kosmetisches Produkt! Nur zur äußerlichen Anwendung! Von Kindern fernhalten! Nur auf die Füße auftragen! Bei Kontakt mit den Augen mit reichlich Wasser waschen und einen Arzt aufsuchen! Nicht für Kinder unter 3 Jahren geeignet! Nicht auf wunder oder gereizter Haut verwenden!',
                    fr: "Produit cosmétique ! Usage externe uniquement ! Tenir hors de la portée des enfants ! Appliquer uniquement sur les pieds ! En cas de contact avec les yeux, rincer abondamment à l'eau et consulter un médecin ! Ne convient pas aux enfants de moins de 3 ans ! Ne pas utiliser sur une peau irritée !",
                },
            },
        ],
        image: '/img/Mpharm_images/MycoProtectFootPowder.jpg',
        category: Categories[2],
    },
    {
        id: 'MycoProtectFootSpray',
        title: 'Myco Protect Foot Spray',
        quickViewDescription: {
            en: 'Antifungal spray for foot protection.',
            bg: 'Противогъбичен спрей за защита на краката.',
            de: 'Antimykotisches Spray zum Fußschutz.',
            fr: 'Spray antifongique pour la protection des pieds.',
        },
        description: [
            {
                label: { en: 'Action', bg: 'Действие', de: 'Wirkung', fr: 'Action' },
                text: {
                    en: 'Creates an antiseptic environment on the skin and\nbetween the toes. Relieves itching.\n',
                    bg: 'Създава антисептична среда върху кожата и между пръстите. Облекчава сърбежа.',
                    de: 'Schafft ein antiseptisches Milieu auf der Haut und zwischen den Zehen. Lindert Juckreiz.',
                    fr: 'Crée un environnement antiseptique sur la peau et entre les orteils. Soulage les démangeaisons.',
                },
            },
            {
                label: { en: 'Dosage', bg: 'Дозировка', de: 'Dosierung', fr: 'Dosage' },
                text: {
                    en: 'Spray on the skin of the feet 2 times a day. Before application of the spray, the feet should be cleaned and dried up.\nThe spray can also be applied on the inside of shoes.\nApplication should continue at least two weeks after all visible symptoms have disappeared. To maximize the effect the product can be used together with Dr. Hanss, No Myco foot powder.\n',
                    bg: 'Пръскайте върху кожата на краката 2 пъти дневно. Преди нанасяне краката трябва да са чисти и сухи. Спреят може да се нанесе и върху вътрешността на обувките. Прилагането трябва да продължи поне две седмици след изчезването на всички видими симптоми. За максимален ефект продуктът може да се използва заедно с прах за крака Dr. Hanss, No Myco.',
                    de: 'Auf die Fußhaut 2 Mal täglich sprühen. Vor dem Auftragen sollten die Füße gereinigt und getrocknet werden. Das Spray kann auch auf der Innenseite der Schuhe aufgetragen werden. Die Anwendung sollte mindestens zwei Wochen nach dem Verschwinden aller sichtbaren Symptome fortgesetzt werden. Zur Maximierung der Wirkung kann das Produkt zusammen mit Dr. Hanss No Myco Fußpuder verwendet werden.',
                    fr: "Vaporiser sur la peau des pieds 2 fois par jour. Avant l'application, les pieds doivent être nettoyés et séchés. Le spray peut également être appliqué à l'intérieur des chaussures. L'application doit se poursuivre au moins deux semaines après la disparition de tous les symptômes visibles. Pour maximiser l'effet, le produit peut être utilisé avec la poudre pour les pieds Dr. Hanss, No Myco.",
                },
            },
            {
                label: { en: 'ATTENTION!', bg: 'ВНИМАНИЕ!', de: 'ACHTUNG!', fr: 'ATTENTION !' },
                text: {
                    en: 'Cosmetic product! For external use only!\nKeep out of reach of children! Apply on feet only! In case of\ncontact with the eyes, wash with plenty of water and consult\nyour doctor! Not suitable for children under 3 years of age!\n',
                    bg: 'Козметичен продукт! Само за външна употреба! Да се пази от деца! Прилагайте само върху краката! При контакт с очите измийте обилно с вода и се консултирайте с лекар! Не е подходящ за деца под 3 години!',
                    de: 'Kosmetisches Produkt! Nur zur äußerlichen Anwendung! Von Kindern fernhalten! Nur auf die Füße auftragen! Bei Kontakt mit den Augen mit reichlich Wasser waschen und einen Arzt aufsuchen! Nicht für Kinder unter 3 Jahren geeignet!',
                    fr: "Produit cosmétique ! Usage externe uniquement ! Tenir hors de la portée des enfants ! Appliquer uniquement sur les pieds ! En cas de contact avec les yeux, rincer abondamment à l'eau et consulter un médecin ! Ne convient pas aux enfants de moins de 3 ans !",
                },
            },
        ],
        image: '/img/Mpharm_images/MycoProtectFootSpray.jpg',
        category: Categories[2],
    },
    {
        id: 'MycoProtectFungi',
        title: 'Myco Protect Fungi',
        quickViewDescription: {
            en: 'Antifungal treatment for skin infections.',
            bg: 'Противогъбично лечение на кожни инфекции.',
            de: 'Antimykotische Behandlung von Hautinfektionen.',
            fr: 'Traitement antifongique des infections cutanées.',
        },
        description: [],
        image: '/img/Mpharm_images/MycoProtectFungi.jpg',
        category: Categories[2],
    },
    {
        id: 'NatrievCitrat',
        title: 'Sodium Citrate',
        quickViewDescription: {
            en: 'Sodium citrate for various applications.',
            bg: 'Натриев цитрат за различни приложения.',
            de: 'Natriumcitrat für verschiedene Anwendungen.',
            fr: 'Citrate de sodium pour diverses applications.',
        },
        description: [
            {
                label: { en: '' },
                text: {
                    en: 'Syrup with fresh citrus taste.\nThe Sodium citrate might be used sporadically in\ncases of nausea and vomiting.\nThe substance is produced as a food supplement because\nit is a highly water-soluble form of sodium.\nFood supplement.\nThis product is not a substitute of the varied nutrition.\nDo not exceed the recommended daily amount.\n',
                    bg: 'Сироп с пресен цитрусов вкус. Натриевият цитрат може да се използва периодично при гадене и повръщане. Веществото се произвежда като хранителна добавка, тъй като е силно разтворима във вода форма на натрий. Хранителна добавка. Продуктът не е заместител на разнообразното хранене. Не превишавайте препоръчителното дневно количество.',
                    de: 'Sirup mit frischem Zitrusgeschmack. Natriumcitrat kann sporadisch bei Übelkeit und Erbrechen verwendet werden. Die Substanz wird als Nahrungsergänzungsmittel produziert, da es eine hochlösliche Form von Natrium ist. Nahrungsergänzungsmittel. Dieses Produkt ist kein Ersatz für abwechslungsreiche Ernährung. Empfohlene Tagesmenge nicht überschreiten.',
                    fr: "Sirop au goût frais d'agrumes. Le citrate de sodium peut être utilisé de manière sporadique en cas de nausées et de vomissements. La substance est produite comme complément alimentaire car c'est une forme de sodium hautement soluble dans l'eau. Complément alimentaire. Ce produit ne remplace pas une alimentation variée. Ne pas dépasser la dose journalière recommandée.",
                },
            },
            {
                label: { en: 'Warning!', bg: 'Предупреждение!', de: 'Warnung!', fr: 'Avertissement !' },
                text: {
                    en: 'Keep out of the reach of children.',
                    bg: 'Да се пази от деца.',
                    de: 'Von Kindern fernhalten.',
                    fr: 'Tenir hors de la portée des enfants.',
                },
            },
        ],
        image: '/img/Mpharm_images/NatrievCitrat.jpg',
        category: Categories[0],
        subCategory: SubCategories[1],
    },
    {
        id: 'OralProtectClassic',
        title: 'Oral Protect Classic',
        quickViewDescription: {
            en: 'Oral care liquid for better oral hygiene',
            bg: 'Течност за уста за по-добра орална хигиена.',
            de: 'Mundspülung für bessere Mundhygiene.',
            fr: 'Bain de bouche pour une meilleure hygiène buccale.',
        },
        description: [
            {
                label: { en: 'Benefits', bg: 'Ползи', de: 'Vorteile', fr: 'Avantages' },
                text: {
                    en: 'This mouthwash contains active components in\norder to provide the desired results and it also fights\nplaque. For everyday use, it is appropriate for people\nof all ages except for those aged under 6.\n',
                    bg: 'Тази вода за уста съдържа активни компоненти, за да осигури желаните резултати, като също така се бори с плаката. За ежедневна употреба, подходяща за хора от всички възрасти с изключение на тези под 6 години.',
                    de: 'Diese Mundspülung enthält aktive Komponenten, um die gewünschten Ergebnisse zu erzielen und bekämpft auch Plaque. Zur täglichen Anwendung geeignet für Menschen jeden Alters, außer für Kinder unter 6 Jahren.',
                    fr: 'Ce bain de bouche contient des composants actifs afin de fournir les résultats souhaités et combat également la plaque. Pour une utilisation quotidienne, il convient aux personnes de tous âges, sauf aux moins de 6 ans.',
                },
            },
            {
                label: { en: 'Ingredients', bg: 'Съставки', de: 'Inhaltsstoffe', fr: 'Ingrédients' },
                text: {
                    en: 'eucalyptus oil, mint oil, menthol\nand thymol - have a refreshing and stimulating effect on\nthe mucous membranes resulting in a pleasant longlasting\nmint flavor. In addition, the product provides oral hygiene, and also quickly and permanently eliminates bad breath.\n',
                    bg: 'Масло от евкалипт, масло от мента, ментол и тимол – имат освежаващ и стимулиращ ефект върху лигавиците, осигурявайки приятен дълготраен ментов аромат. Освен това продуктът осигурява орална хигиена и бързо и трайно премахва лошия дъх.',
                    de: 'Eukalyptusöl, Pfefferminzöl, Menthol und Thymol – haben eine erfrischende und stimulierende Wirkung auf die Schleimhäute und sorgen für einen angenehm langanhaltenden Minzgeschmack. Außerdem sorgt das Produkt für Mundhygiene und beseitigt schnell und dauerhaft schlechten Atem.',
                    fr: "Huile d'eucalyptus, huile de menthe, menthol et thymol – ont un effet rafraîchissant et stimulant sur les muqueuses, résultant en une saveur mentholée agréable et durable. De plus, le produit assure l'hygiène buccale et élimine rapidement et définitivement la mauvaise haleine.",
                },
            },
            {
                label: { en: 'Directions', bg: 'Указания', de: 'Anwendung', fr: "Mode d'emploi" },
                text: {
                    en: 'Morning and evening, after brushing your\nteeth, rinse your mouth for 15-30 seconds with half a\nlid-full (to the line indicated).\n',
                    bg: 'Сутрин и вечер, след миене на зъбите, изплакнете устата си за 15-30 секунди с половин капачка (до обозначената линия).',
                    de: 'Morgens und abends nach dem Zähneputzen den Mund 15-30 Sekunden mit einem halben Deckel (bis zur angegebenen Linie) spülen.',
                    fr: "Matin et soir, après vous être brossé les dents, rincez-vous la bouche pendant 15 à 30 secondes avec un demi-bouchon (jusqu'à la ligne indiquée).",
                },
            },
            {
                label: { en: 'Warning!', bg: 'Предупреждение!', de: 'Warnung!', fr: 'Avertissement !' },
                text: {
                    en: 'Do not swallow! Keep out of reach of children\nunder 6 years of age!\n',
                    bg: 'Не поглъщайте! Да се пази от деца под 6 години!',
                    de: 'Nicht schlucken! Von Kindern unter 6 Jahren fernhalten!',
                    fr: 'Ne pas avaler ! Tenir hors de la portée des enfants de moins de 6 ans !',
                },
            },
        ],
        image: '/img/Mpharm_images/OralProtectClasic.jpg',
        category: Categories[1],
    },
    {
        id: 'OralProtectForte',
        title: 'Oral Protect Forte',
        quickViewDescription: {
            en: 'Intensive oral care liquid for better oral hygiene',
            bg: 'Интензивна течност за уста за по-добра орална хигиена.',
            de: 'Intensive Mundspülung für bessere Mundhygiene.',
            fr: 'Bain de bouche intensif pour une meilleure hygiène buccale.',
        },
        description: [
            {
                label: { en: 'Benefits', bg: 'Ползи', de: 'Vorteile', fr: 'Avantages' },
                text: {
                    en: 'This mouthwash contains active components, in higher concentrations, in order to provide the desired results faster and stronger, and it also fights plaque. For everyday use, it is appropriate for people of all ages except for those aged under 6.',
                    bg: 'Тази вода за уста съдържа активни компоненти в по-високи концентрации, за да осигури желаните резултати по-бързо и по-ефективно, като също така се бори с плаката. За ежедневна употреба, подходяща за хора от всички възрасти с изключение на тези под 6 години.',
                    de: 'Diese Mundspülung enthält aktive Komponenten in höheren Konzentrationen, um die gewünschten Ergebnisse schneller und stärker zu erzielen und bekämpft auch Plaque. Zur täglichen Anwendung geeignet für Menschen jeden Alters, außer für Kinder unter 6 Jahren.',
                    fr: "Ce bain de bouche contient des composants actifs, en concentrations plus élevées, afin de fournir les résultats souhaités plus rapidement et plus efficacement, et combat également la plaque. Pour une utilisation quotidienne, il convient aux personnes de tous âges, sauf aux moins de 6 ans.",
                },
            },
            {
                label: { en: 'Ingredients', bg: 'Съставки', de: 'Inhaltsstoffe', fr: 'Ingrédients' },
                text: {
                    en: 'eucalyptus oil, mint oil, menthol and\nthymol - have a refreshing and stimulating effect on the\nmucous membranes resulting in a pleasant long-lasting\nmint flavor. In addition, the product provides oral hygiene, and also quickly and permanently eliminates bad breath.\n',
                    bg: 'Масло от евкалипт, масло от мента, ментол и тимол – имат освежаващ и стимулиращ ефект върху лигавиците, осигурявайки приятен дълготраен ментов аромат. Освен това продуктът осигурява орална хигиена и бързо и трайно премахва лошия дъх.',
                    de: 'Eukalyptusöl, Pfefferminzöl, Menthol und Thymol – haben eine erfrischende und stimulierende Wirkung auf die Schleimhäute und sorgen für einen angenehm langanhaltenden Minzgeschmack. Außerdem sorgt das Produkt für Mundhygiene und beseitigt schnell und dauerhaft schlechten Atem.',
                    fr: "Huile d'eucalyptus, huile de menthe, menthol et thymol – ont un effet rafraîchissant et stimulant sur les muqueuses, résultant en une saveur mentholée agréable et durable. De plus, le produit assure l'hygiène buccale et élimine rapidement et définitivement la mauvaise haleine.",
                },
            },
            {
                label: { en: 'Directions', bg: 'Указания', de: 'Anwendung', fr: "Mode d'emploi" },
                text: {
                    en: 'Morning and evening, after brushing your teeth, rinse your mouth for 15-30 seconds with half a lid-full (to the line indicated).',
                    bg: 'Сутрин и вечер, след миене на зъбите, изплакнете устата си за 15-30 секунди с половин капачка (до обозначената линия).',
                    de: 'Morgens und abends nach dem Zähneputzen den Mund 15-30 Sekunden mit einem halben Deckel (bis zur angegebenen Linie) spülen.',
                    fr: "Matin et soir, après vous être brossé les dents, rincez-vous la bouche pendant 15 à 30 secondes avec un demi-bouchon (jusqu'à la ligne indiquée).",
                },
            },
            {
                label: { en: 'Warning!', bg: 'Предупреждение!', de: 'Warnung!', fr: 'Avertissement !' },
                text: {
                    en: 'Do not swallow! Keep out of reach of children under 6 years of age!',
                    bg: 'Не поглъщайте! Да се пази от деца под 6 години!',
                    de: 'Nicht schlucken! Von Kindern unter 6 Jahren fernhalten!',
                    fr: 'Ne pas avaler ! Tenir hors de la portée des enfants de moins de 6 ans !',
                },
            },
        ],
        image: '/img/Mpharm_images/OralprotectForte-1.jpg',
        category: Categories[1],
    },
    {
        id: 'OralProtectJazzy',
        title: 'Oral Protect Jazzy',
        quickViewDescription: {
            en: 'Oral care liquid with a refreshing flavor',
            bg: 'Течност за уста с освежаващ аромат.',
            de: 'Mundspülung mit erfrischendem Aroma.',
            fr: 'Bain de bouche avec une saveur rafraîchissante.',
        },
        description: [
            {
                label: { en: 'Benefits', bg: 'Ползи', de: 'Vorteile', fr: 'Avantages' },
                text: {
                    en: 'This mouthwash contains active components\nin order to provide the desired results and it also fights\nplaque. For everyday use, it is appropriate for people of\nall ages except for those aged under 6.\n',
                    bg: 'Тази вода за уста съдържа активни компоненти, за да осигури желаните резултати, като също така се бори с плаката. За ежедневна употреба, подходяща за хора от всички възрасти с изключение на тези под 6 години.',
                    de: 'Diese Mundspülung enthält aktive Komponenten, um die gewünschten Ergebnisse zu erzielen und bekämpft auch Plaque. Zur täglichen Anwendung geeignet für Menschen jeden Alters, außer für Kinder unter 6 Jahren.',
                    fr: 'Ce bain de bouche contient des composants actifs afin de fournir les résultats souhaités et combat également la plaque. Pour une utilisation quotidienne, il convient aux personnes de tous âges, sauf aux moins de 6 ans.',
                },
            },
            {
                label: { en: 'Ingredients', bg: 'Съставки', de: 'Inhaltsstoffe', fr: 'Ingrédients' },
                text: {
                    en: 'eucalyptus oil, mint oil, menthol and\nthymol - have a refreshing and stimulating effect on the\nmucous membranes resulting in a pleasant long-lasting\nmint flavor which combined with raspberry flavor\ncreates a refreshing combination. In addition, the product\nprovides oral hygiene, and also quickly and permanently eliminates bad breath.\n',
                    bg: 'Масло от евкалипт, масло от мента, ментол и тимол – имат освежаващ и стимулиращ ефект върху лигавиците, осигурявайки приятен дълготраен ментов аромат в комбинация с аромат на малина, създавайки освежаваща комбинация. Освен това продуктът осигурява орална хигиена и бързо и трайно премахва лошия дъх.',
                    de: 'Eukalyptusöl, Pfefferminzöl, Menthol und Thymol – haben eine erfrischende und stimulierende Wirkung auf die Schleimhäute und sorgen für einen angenehm langanhaltenden Minzgeschmack in Kombination mit Himbeeraroma. Außerdem sorgt das Produkt für Mundhygiene und beseitigt schnell und dauerhaft schlechten Atem.',
                    fr: "Huile d'eucalyptus, huile de menthe, menthol et thymol – ont un effet rafraîchissant et stimulant sur les muqueuses, résultant en une saveur mentholée agréable et durable, combinée avec un arôme de framboise. De plus, le produit assure l'hygiène buccale et élimine rapidement et définitivement la mauvaise haleine.",
                },
            },
            {
                label: { en: 'Directions', bg: 'Указания', de: 'Anwendung', fr: "Mode d'emploi" },
                text: {
                    en: 'Morning and evening, after brushing your\nteeth, rinse your mouth for 15-30 seconds with half a\nlid-full (to the line indicated).\n',
                    bg: 'Сутрин и вечер, след миене на зъбите, изплакнете устата си за 15-30 секунди с половин капачка (до обозначената линия).',
                    de: 'Morgens und abends nach dem Zähneputzen den Mund 15-30 Sekunden mit einem halben Deckel (bis zur angegebenen Linie) spülen.',
                    fr: "Matin et soir, après vous être brossé les dents, rincez-vous la bouche pendant 15 à 30 secondes avec un demi-bouchon (jusqu'à la ligne indiquée).",
                },
            },
            {
                label: { en: 'Warning!', bg: 'Предупреждение!', de: 'Warnung!', fr: 'Avertissement !' },
                text: {
                    en: 'Do not swallow! Keep out of reach of children\nunder 6 years of age!\n',
                    bg: 'Не поглъщайте! Да се пази от деца под 6 години!',
                    de: 'Nicht schlucken! Von Kindern unter 6 Jahren fernhalten!',
                    fr: 'Ne pas avaler ! Tenir hors de la portée des enfants de moins de 6 ans !',
                },
            },
        ],
        image: '/img/Mpharm_images/oralprotectJazzy.jpg',
        category: Categories[1],
    },
    {
        id: 'OralProtectZaPushachi',
        title: 'Ora Protect for Smokers',
        quickViewDescription: {
            en: 'Oral care for smokers.',
            bg: 'Орална грижа за пушачи.',
            de: 'Mundpflege für Raucher.',
            fr: 'Soin buccal pour les fumeurs.',
        },
        description: [
            {
                label: { en: 'Description', bg: 'Описание', de: 'Beschreibung', fr: 'Description' },
                text: {
                    en: 'This mouthwash contains ingredients such as: eucalyptus oil, mint oil, menthol and thymol - have a refreshing and stimulating effect on the mucous membranes resulting in a pleasant long-lasting mint flavor and eliminates bad breath. In addition the hydrogen peroxide, included in its composition, provides an excellent teeth-whitenning effect by gently and quickly removing food stains, coffee stains and nicotine stains.',
                    bg: 'Тази вода за уста съдържа съставки като: масло от евкалипт, масло от мента, ментол и тимол – имат освежаващ и стимулиращ ефект върху лигавиците, осигурявайки приятен дълготраен ментов аромат и премахват лошия дъх. Освен това водородният прекис, включен в състава му, осигурява отличен ефект на избелване на зъбите, като внимателно и бързо премахва хранителни петна, петна от кафе и никотинови петна.',
                    de: 'Diese Mundspülung enthält Inhaltsstoffe wie: Eukalyptusöl, Pfefferminzöl, Menthol und Thymol – haben eine erfrischende und stimulierende Wirkung auf die Schleimhäute und sorgen für einen angenehm langanhaltenden Minzgeschmack und beseitigen schlechten Atem. Zusätzlich sorgt das enthaltene Wasserstoffperoxid für einen hervorragenden Zahnaufhellungseffekt, indem es Speisereste, Kaffeeflecken und Nikotinflecken sanft und schnell entfernt.',
                    fr: "Ce bain de bouche contient des ingrédients tels que : huile d'eucalyptus, huile de menthe, menthol et thymol – ont un effet rafraîchissant et stimulant sur les muqueuses, résultant en une saveur mentholée agréable et durable et éliminent la mauvaise haleine. De plus, le peroxyde d'hydrogène inclus offre un excellent effet blanchissant en éliminant doucement les taches alimentaires, de café et de nicotine.",
                },
            },
            {
                label: { en: 'Use', bg: 'Употреба', de: 'Verwendung', fr: 'Utilisation' },
                text: {
                    en: 'ORALPROTECT+ mouthwash for smokers is\nsuitable for people of all ages except for those\naged under 6.\n',
                    bg: 'Вода за уста ORALPROTECT+ за пушачи е подходяща за хора от всички възрасти с изключение на тези под 6 години.',
                    de: 'ORALPROTECT+ Mundspülung für Raucher ist für Menschen jeden Alters geeignet, außer für Kinder unter 6 Jahren.',
                    fr: 'Le bain de bouche ORALPROTECT+ pour fumeurs est adapté aux personnes de tous âges, sauf aux moins de 6 ans.',
                },
            },
            {
                label: { en: 'Directions', bg: 'Указания', de: 'Anwendung', fr: "Mode d'emploi" },
                text: {
                    en: 'Morning and evening, after brushing your\nteeth, rinse your mouth for 15-30 seconds with half a\nlid-full (to the line indicated).\n',
                    bg: 'Сутрин и вечер, след миене на зъбите, изплакнете устата си за 15-30 секунди с половин капачка (до обозначената линия).',
                    de: 'Morgens und abends nach dem Zähneputzen den Mund 15-30 Sekunden mit einem halben Deckel (bis zur angegebenen Linie) spülen.',
                    fr: "Matin et soir, après vous être brossé les dents, rincez-vous la bouche pendant 15 à 30 secondes avec un demi-bouchon (jusqu'à la ligne indiquée).",
                },
            },
            {
                label: { en: 'Warning!', bg: 'Предупреждение!', de: 'Warnung!', fr: 'Avertissement !' },
                text: {
                    en: 'Do not swallow! Keep out of reach of children\nunder 6 years of age!\n',
                    bg: 'Не поглъщайте! Да се пази от деца под 6 години!',
                    de: 'Nicht schlucken! Von Kindern unter 6 Jahren fernhalten!',
                    fr: 'Ne pas avaler ! Tenir hors de la portée des enfants de moins de 6 ans !',
                },
            },
        ],
        image: '/img/Mpharm_images/OralProtectZaPushachi.jpg',
        category: Categories[1],
    },
    {
        id: 'SvezhDyh',
        title: 'Kiss me',
        quickViewDescription: {
            en: 'A refreshing spray for your breath.',
            bg: 'Освежаващ спрей за дъх.',
            de: 'Ein erfrischendes Spray für Ihren Atem.',
            fr: 'Un spray rafraîchissant pour votre haleine.',
        },
        description: [
            {
                label: { en: 'Description', bg: 'Описание', de: 'Beschreibung', fr: 'Description' },
                text: {
                    en: 'A refreshing spray for your breath.',
                    bg: 'Освежаващ спрей за дъх.',
                    de: 'Ein erfrischendes Spray für Ihren Atem.',
                    fr: 'Un spray rafraîchissant pour votre haleine.',
                },
            },
        ],
        image: '/img/Mpharm_images/SvezhDyh.jpg',
        category: Categories[1],
    },
];
