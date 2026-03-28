import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

// Soins data configuration
const SOINS_DATA = {
  'epilation-laser': {
    title: 'ÉPILATION LASER',
    subtitle: 'Réduction progressive et durable de la pilosité',
    heroImage: 'https://static.wixstatic.com/media/9426a1_dbc406d1496a4ec5a3a4899459a57be8~mv2.jpg/v1/crop/x_422,y_0,w_1120,h_1071/fill/w_528,h_505,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/a-girl-is-happy-with-Laser-Hair-removal-services-in-Vancouver.jpg',
    mainImage: 'https://static.wixstatic.com/media/9426a1_e3c8fd3d4e7745d284836d9fa5055ac0~mv2.webp/v1/fill/w_600,h_485,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/9426a1_e3c8fd3d4e7745d284836d9fa5055ac0~mv2.webp',
    questionTitle: "QU'EST-CE QUE LE LASER DIODE?",
    description: `Le laser diode est une technologie utilisée en soins esthétiques qui émet un faisceau lumineux par impulsion. Cette lumière est dirigée vers la zone ciblée afin de réduire progressivement la repousse des poils. Le faisceau vise spécifiquement le follicule pileux, tout en préservant les tissus environnants, ce qui permet une approche localisée, confortable et non invasive.

Chez L'Atelier Secret, nous utilisons une technologie esthétique reconnue pour sa précision et son efficacité dans le cadre de soins non médicaux. Nos séances sont adaptées à chaque client·e en fonction de son type de peau, de la zone traitée et du cycle de repousse du poil. L'objectif est d'offrir une expérience sécuritaire, agréable et axée sur l'amélioration progressive de l'apparence de la pilosité.

Le nombre de séances nécessaires peut varier selon plusieurs facteurs, dont la densité des poils et la réponse individuelle de la peau.`,
    costTitle: "COMBIEN COÛTE UN SOIN D'ÉPILATION LASER?",
    costDescription: "Les tarifs varient selon les zones à traiter, le nombre de séances et le forfait choisi. Lors d'une rencontre avec une technicienne en soins esthétiques, vous bénéficierez d'une évaluation gratuite et sans engagement, qui permettra de déterminer le plan de soin le plus adapté à vos objectifs. Chaque personne étant unique, nos recommandations sont personnalisées en fonction de vos besoins et de votre type de peau.",
    zonesTitle: "ZONES TRAITABLES PAR ÉPILATION LASER",
    zonesDescription: `Toutes les zones du corps et du visage peuvent faire l'objet d'un soin d'épilation au laser à des fins esthétiques.

Certaines zones sont toutefois plus populaires que d'autres. Chez les femmes, il s'agit notamment des aisselles, des aines, du bikini intégral, des jambes, des bras et de la lèvre supérieure. Chez les hommes, le thorax, le dos et la barbe sont les plus souvent demandés. Il est possible de cibler plusieurs zones au cours d'une même séance, ce qui optimise le temps tout en maintenant l'efficacité du soin.

En moyenne, de 6 à 10 séances espacées peuvent être nécessaires pour obtenir une réduction significative et durable de la pilosité. Le rasage est autorisé entre les rendez-vous, et il est recommandé de raser la zone concernée 24 heures avant chaque séance.`,
    procedureTitle: "LE DÉROULEMENT D'UNE SÉANCE D'ÉPILATION LASER",
    procedure: [
      "Rasage de la zone traitée",
      "Marquage de la zone à traiter",
      "Application du gel protecteur",
      "Protection adéquate pour les yeux",
      "Réglage des paramètres de la machine d'épilation laser",
      "Début du traitement",
      "Nettoyage et application de produits adaptés"
    ],
    procedureImage: 'https://static.wixstatic.com/media/9426a1_2f89400d83b4432286f5121ff2581568~mv2.webp/v1/fill/w_483,h_322,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/9426a1_2f89400d83b4432286f5121ff2581568~mv2.webp',
    disclaimer: "Ce soin est effectué à des fins esthétiques uniquement. Les paramètres sont ajustés pour offrir une expérience sécuritaire et adaptée à chaque type de peau."
  },
  'facial-de-luxe': {
    title: 'FACIAL DE LUXE',
    subtitle: 'Rituel cabine unique',
    heroImage: 'https://static.wixstatic.com/media/11062b_017f998d03a44d5494c1f4eb4a9fcace~mv2.jpg/v1/fill/w_529,h_505,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Gros%20plan%20sur%20les%20soins%20de%20la%20peau.jpg',
    mainImage: 'https://static.wixstatic.com/media/11062b_3bc3b147c0304c37b1d90a705c95e64d~mv2.jpg/v1/fill/w_892,h_542,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Soin%20du%20visage%20relaxant.jpg',
    introDescription: "Découvrez des rituels cabine uniques réalisés par nos esthéticiennes expertes tout en combinant plaisir des sens, efficacité et approche personnalisée des soins, afin de faire de chaque rendez-vous un havre de bien-être qui nourrit le corps et l'esprit.",
    questionTitle: "QU'EST-CE QUE LE SOIN FACIAL DE LUXE ?",
    description: `Ce soin exclusif combine des technologies esthétiques avancées et des actifs hautement performants pour offrir une expérience incomparable d'hydratation et de revitalisation. Conçu pour purifier, raviver et illuminer la peau, il agit en synergie pour lisser visiblement les traits, améliorer l'apparence de la peau et raviver l'éclat du teint.

Grâce à des techniques expertes et à des ingrédients de qualité, ce soin allie nettoyage en profondeur, exfoliation ciblée, sérums concentrés et luminothérapie pour révéler une peau d'apparence plus ferme, lumineuse et repulpée. Idéal pour celles et ceux qui souhaitent un effet coup d'éclat durable, ce soin procure une sensation immédiate de fraîcheur et de confort, tout en contribuant à maintenir la souplesse et la vitalité de la peau.`,
    benefitsTitle: "COMMENT FONCTIONNE LE SOIN FACIAL DE LUXE ?",
    benefits: [
      "Nettoyage et exfoliation permettant d'éliminer les impuretés et les cellules mortes",
      "Application de sérums enrichis en acide hyaluronique, peptides ou collagène",
      "Hydratation de la peau en profondeur pour un aspect plus uniforme et éclatant",
      "Luminothérapie LED pour raviver l'éclat et favoriser un effet tonifiant",
      "Masque personnalisé et hydratation adaptée",
      "Effet immédiat de fraîcheur et de confort"
    ],
    benefitsImage: 'https://static.wixstatic.com/media/9426a1_43e9cd6a316c45d8a45460da787e57aa~mv2.jpg/v1/crop/x_75,y_0,w_1050,h_1200/fill/w_440,h_503,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Natural%20Beauty_edited.jpg',
    procedureTitle: "LE DÉROULEMENT DU SOIN",
    procedure: [
      "Préparation de la peau – Analyse visuelle et nettoyage initial pour préparer la peau au soin",
      "Nettoyage en profondeur – Utilisation d'un nettoyant doux adapté au type de peau",
      "Exfoliation – Gommage enzymatique ou mécanique pour lisser et purifier la surface de la peau",
      "Application d'un sérum activateur – Sérum concentré en acide hyaluronique, peptides ou collagène",
      "Massage du visage – Techniques esthétiques drainantes et tonifiantes",
      "Application d'un masque personnalisé – Masque hydratant ou tonifiant selon les besoins",
      "Luminothérapie LED – Lumière douce utilisée à des fins esthétiques",
      "Soin des yeux et des lèvres – Sérum contour des yeux et baume nourrissant",
      "Hydratation et protection finale – Crème adaptée pour protéger et maintenir le confort cutané"
    ],
    procedureImage: 'https://static.wixstatic.com/media/dacd52b614a644b194d59f707251745f.jpg/v1/crop/x_1268,y_0,w_4680,h_5412/fill/w_422,h_488,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/soin%20du%20visage.jpg',
    disclaimer: "Ce soin est offert à des fins esthétiques uniquement. Il ne remplace pas une consultation médicale et ne vise pas à traiter une condition de santé."
  },
  'soin-anti-age': {
    title: 'SOIN ANTI-ÂGE',
    subtitle: 'Soin Sothys',
    heroImage: 'https://static.wixstatic.com/media/9426a1_c45128d5bd5a485f843d9d9b936b06ff~mv2.jpg/v1/fill/w_529,h_505,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/prix-lifting-visage-dubai-1.jpg',
    mainImage: 'https://static.wixstatic.com/media/9426a1_11bdaf4c5f7f426ebf541f7f0aa0cff8~mv2.jpg/v1/crop/x_52,y_0,w_720,h_438/fill/w_864,h_525,al_c,lg_1,q_85,enc_avif,quality_auto/intro-1612922402.jpg',
    introDescription: "Découvrez des rituels cabine uniques réalisés par nos esthéticiennes expertes tout en combinant plaisir des sens, efficacité et approche personnalisée des soins, afin de faire de chaque rendez-vous un havre de bien-être qui nourrit le corps et l'esprit.",
    questionTitle: "QU'EST-CE QUE LE SOIN ANTI-ÂGE SOTHYS?",
    description: `Ce soin a été spécialement mise au point pour optimiser les traitements et l'assimilation des actifs. Elle associe des techniques de digito-pression et de massage issues d'Orient et d'Occident avec des formules de lotions puissantes et efficaces.

Au-delà des formules, Sothys s'attache depuis l'origine à développer des protocoles uniques qui mêlent sensorialité, efficacité et approche personnalisée du soin transformant chaque rendez-vous en une parenthèse de bien-être pour le corps et l'esprit. Un art qui fait toute la différence.`,
    zonesTitle: "LE VISAGE N'EST PAS LA SEULE RÉGION TRAITABLE",
    zonesDescription: `Le soin anti-âge ne se limite pas au visage. Bien que celui-ci soit souvent la priorité, d'autres zones méritent tout autant d'attention. Le cou, le décolleté, les lèvres et les mains sont tout aussi exposés aux signes du vieillissement et nécessitent des soins adaptés pour préserver leur jeunesse et leur éclat. Ces zones délicates sont particulièrement sensibles à la perte de fermeté et à l'apparition des taches pigmentaires. En intégrant un rituel complet et ciblé, il est possible de maintenir une peau uniforme, lisse et visiblement plus jeune.`,
    procedureTitle: "LE DÉROULEMENT DU SOIN ANTI-ÂGE",
    procedure: [
      "ACTION NETTOYANTE RENOVATRICE - Lotion exfoliante préparatrice",
      "Pâte exfoliante rénovatrice",
      "ACTION JEUNESSE ZONES CIBLÉES - Sérum jeunesse zone rides",
      "Sérum jeunesse zone lift",
      "MODELAGE JEUNESSE - Baume de modelage tonifiant",
      "MULTI-MASKING - Masques zones ciblées 2 temps"
    ],
    procedureImage: 'https://static.wixstatic.com/media/9426a1_f00da04be732412abe88f4bb6856e126~mv2.jpg/v1/crop/x_557,y_4,w_1761,h_1662/fill/w_498,h_470,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/9426a1_f00da04be732412abe88f4bb6856e126~mv2.jpg',
    disclaimer: "Ce soin est offert à des fins esthétiques uniquement. Il ne remplace pas une consultation médicale ni un traitement dermatologique."
  },
  'irregularites-pigmentaires': {
    title: 'SOIN IRRÉGULARITÉS PIGMENTAIRES',
    subtitle: 'Teint uniforme et lumineux',
    heroImage: 'https://static.wixstatic.com/media/9426a1_e5d99015cdec4706b3f52512a012b16f~mv2.jpg/v1/crop/x_236,y_0,w_479,h_499/fill/w_485,h_505,al_c,lg_1,q_80,enc_avif,quality_auto/eviter-taches-brunes-au-soleil-e1148043245d9085e6deae6e4ef0a27f.jpg',
    mainImage: 'https://static.wixstatic.com/media/9426a1_ac7bc34bafc94cd8aba42ce1e2e215d7~mv2.jpg/v1/crop/x_0,y_234,w_1232,h_749/fill/w_892,h_542,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/qualite-de-peau-taches-brunes-dr-ben-youssef-paris.jpg',
    introDescription: "Certaines irrégularités pigmentaires, telles que les taches brunes superficielles (souvent appelées taches de soleil ou de vieillesse), sont associées au vieillissement cutané et à l'exposition répétée au soleil. Ce soin esthétique a été conçu pour améliorer l'apparence de ces zones et offrir un teint visiblement plus uniforme et lumineux.",
    questionTitle: "QU'EST-CE QUE LES TACHES BRUNES ?",
    description: `Les taches brunes superficielles, aussi appelées « taches de soleil » ou « taches de vieillesse », sont des irrégularités pigmentaires fréquentes qui peuvent apparaître avec le temps, particulièrement après une exposition répétée au soleil. Elles se présentent souvent sous forme de petites zones plus foncées, plates, et bien délimitées. Ces variations de pigmentation sont purement esthétiques et peuvent être ciblées par des soins adaptés visant à uniformiser l'apparence du teint.`,
    benefitsTitle: "QU'EST-CE QUE CE SOIN CIBLÉ POUR LE TEINT ?",
    benefits: [
      "Peeling enzymatique pour affiner le grain de peau",
      "Microdermabrasion pour révéler l'éclat naturel du teint",
      "Exfoliation douce adaptée à votre peau",
      "Atténuation visible de l'apparence des taches pigmentaires superficielles",
      "Amélioration de l'uniformité du teint",
      "Sensation de douceur, de clarté et de fraîcheur"
    ],
    benefitsImage: 'https://static.wixstatic.com/media/9426a1_df9f401dcab74948861799d973df93ac~mv2.jpg/v1/crop/x_51,y_0,w_921,h_1024/fill/w_440,h_489,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/masque-argile.jpg',
    zonesTitle: "D'AUTRES ZONES PEUVENT ÉGALEMENT ÊTRE CIBLÉES",
    zonesDescription: "Bien que le visage soit souvent la première zone visée en esthétique, d'autres régions peuvent également bénéficier de ce soin, comme le cou, le décolleté, les mains ou le dos. Ces zones sont fréquemment demandées lorsqu'on souhaite unifier le teint et améliorer l'apparence de la peau de manière globale.",
    procedureTitle: "LE DÉROULEMENT DU SOIN ANTI-TACHE",
    procedure: [
      "Lotion nettoyante préparatrice",
      "Exfoliation aux enzymes",
      "Microdermabrasion",
      "Lotion apaisante",
      "Peeling chimique (ou naturel)",
      "Sérum hydratant",
      "Masque éclaircissant",
      "Sérum éclaircissant"
    ],
    procedureImage: 'https://static.wixstatic.com/media/9426a1_7944d783a10b4c6f82a661f9aa2f1e04~mv2.jpg/v1/crop/x_66,y_0,w_260,h_257/fill/w_364,h_360,al_c,lg_1,q_80,enc_avif,quality_auto/facial-treatment-therapist-applying-clay-260nw-1755410549_edited.jpg',
    disclaimer: "Ce soin est offert à des fins esthétiques uniquement. Il ne remplace pas une consultation médicale ni un traitement dermatologique."
  },
  'facial-desincrustant': {
    title: 'FACIAL DÉSINCRUSTANT',
    subtitle: 'Pour peaux à imperfections',
    heroImage: 'https://static.wixstatic.com/media/9426a1_881f72f3647e485bace581e6ab558d66~mv2.webp/v1/fill/w_528,h_505,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Untitled-design-2022-12-07T114715_938.webp',
    mainImage: 'https://static.wixstatic.com/media/9426a1_c746e9eaf9ba471fb4f2475c298336a8~mv2.jpg/v1/fill/w_540,h_542,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Traitement-acne-Avant-apres-laser-Harmony-XL-Pro-Acne-Rive-Sud-de-Montreal-Longueuil-Chamb.jpg',
    questionTitle: "QU'EST-CE QUE LE SOIN POUR ÉRUPTIONS CUTANÉES ET IMPERFECTIONS ?",
    description: `Notre soin du visage est spécialement conçu pour les peaux sujettes aux éruptions cutanées, aux brillances, aux comédons et aux irrégularités visibles. Réalisé avec les produits professionnels SOTHYS, il offre un nettoyage en profondeur tout en respectant l'équilibre naturel de la peau.

Ce soin vise à améliorer l'apparence des boutons superficiels, à affiner le grain de peau, à réduire l'excès de sébum, et à procurer une sensation de peau purifiée et apaisée. Il est idéal pour les personnes ayant une peau à tendance grasse, congestionnée ou avec des imperfections récurrentes.`,
    zonesTitle: "ZONES TRAITABLES PAR LE SOIN",
    zonesDescription: `Le visage (zone la plus fréquemment demandée), le cou, le décolleté et le dos.

Des rougeurs localisées ou une légère desquamation peuvent apparaître temporairement après le soin. Ces effets sont normaux et disparaissent généralement dans les heures suivant la séance.`,
    procedureTitle: "LE DÉROULEMENT DU SOIN",
    procedure: [
      "Examen de la peau",
      "Lotion nettoyante",
      "Lotion désincrustante",
      "Séance de vapozone",
      "Extraction mécanique",
      "Exfoliation mécanique",
      "Exfoliation aux enzymes",
      "Lotion personnalisée",
      "Masque personnalisé",
      "Luminothérapie",
      "Sérum personnalisé",
      "Crème personnalisée"
    ],
    procedureImage: 'https://static.wixstatic.com/media/38043b3c05f64dbf99237fc72a2d7f5e.jpg/v1/crop/x_272,y_0,w_1506,h_1280/fill/w_499,h_424,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Mod%C3%A8le%20d\'appliquer%20la%20cr%C3%A8me.jpg',
    disclaimer: "Ce soin est effectué à des fins esthétiques uniquement. Les paramètres sont ajustés pour offrir une expérience sécuritaire et adaptée à chaque type de peau."
  },
  'peeling-charbon': {
    title: 'PEELING AU CHARBON',
    subtitle: 'Soin détoxifiant',
    heroImage: 'https://static.wixstatic.com/media/9426a1_b4d51e128ae74eac8fc0965706e4ca34~mv2.png/v1/crop/x_0,y_275,w_1920,h_1999/fill/w_485,h_505,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/mayagi_a_medium_shot_portrait_of_a_35_yo.png',
    mainImage: 'https://static.wixstatic.com/media/11062b_c08353118ce849f98c46f9788443b1fe~mv2.jpg/v1/crop/x_0,y_147,w_5000,h_3038/fill/w_892,h_542,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Traitement%20facial%20au%20laser.jpg',
    introDescription: "Un soin de peeling au charbon, conçu pour purifier la peau en douceur, améliorer l'apparence des pores et raviver l'éclat du teint. Ce soin est idéal pour les peaux mixtes à grasses, sujettes aux irrégularités ou au teint terne, et procure un effet lumineux dès la première séance.",
    questionTitle: "QU'EST-CE QUE LE TRAITEMENT DE PEELING AU CHARBON ?",
    description: `Le peeling au charbon est un soin esthétique détoxifiant qui associe le charbon actif à des agents exfoliants doux pour purifier la peau en surface. Il aide à éliminer l'excès de sébum, les cellules mortes et à améliorer visiblement l'uniformité du teint.

Grâce à ses propriétés absorbantes, le charbon actif contribue à donner à la peau un aspect plus net et matifié. Ce soin est particulièrement adapté aux peaux mixtes à grasses, sujettes aux brillances et à l'aspect irrégulier, ou exposées à la pollution urbaine.

Dès la première séance, la peau paraît plus fraîche, lisse et lumineuse, avec une sensation de propreté et de confort durable.`,
    benefitsTitle: "COMMENT FONCTIONNE LE TRAITEMENT DE PEELING AU CHARBON ?",
    benefits: [
      "Application d'un masque au charbon actif enrichi d'agents exfoliants doux",
      "Libération de la peau des impuretés et de l'excès de sébum",
      "Exfoliation pour lisser la surface de la peau",
      "Aspect plus uniforme et éclatant",
      "Texture de la peau affinée visiblement",
      "Sensation de fraîcheur et de douceur",
      "Teint plus lumineux"
    ],
    benefitsImage: 'https://static.wixstatic.com/media/9426a1_60e6f7f65d5943cf9c1f8a81e66d9efd~mv2.png/v1/crop/x_10,y_0,w_1180,h_1320/fill/w_426,h_476,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Beige%20Blush%20_edited.png',
    procedureTitle: "LE DÉROULEMENT DU SOIN",
    procedure: [
      "Consultation esthétique et observation de la peau",
      "Nettoyage et préparation – Nettoyage doux de la peau et application d'un pré-soin",
      "Application du peeling au charbon – Pose d'un masque au charbon actif et agents exfoliants",
      "Temps de pose et activation – Le soin reste en place quelques minutes",
      "Retrait du masque et apaisement – Nettoyage délicat de la peau",
      "Soin hydratant final – Application d'un sérum et d'une crème hydratante",
      "Protection solaire – Application d'un écran solaire à large spectre (SPF 50)"
    ],
    procedureImage: 'https://static.wixstatic.com/media/11062b_ebd18b146d35447c9f521b744c160509~mv2.jpg/v1/crop/x_1566,y_0,w_2872,h_3333/fill/w_475,h_595,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Traitement%20au%20laser.jpg',
    disclaimer: "Ce soin est offert à des fins esthétiques uniquement. Il ne remplace pas une consultation médicale ni un traitement dermatologique."
  },
  'peeling-algues': {
    title: 'PEELING AUX ALGUES',
    subtitle: 'Naturel',
    heroImage: 'https://static.wixstatic.com/media/da88f0575401483fb62f625d9b0033cb.jpg/v1/fill/w_528,h_505,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Femme.jpg',
    mainImage: 'https://static.wixstatic.com/media/dacd52b614a644b194d59f707251745f.jpg/v1/fill/w_540,h_571,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/soin%20du%20visage.jpg',
    introDescription: "Le peeling aux algues exfolie la peau en douceur tout en contribuant à lui redonner une apparence plus fraîche et lumineuse. Riche en nutriments marins, ce soin aide à unifier le teint, à lisser visiblement la texture de la peau et à lui apporter une sensation de vitalité et d'éclat naturel.",
    questionTitle: "QU'EST-CE QUE LE PEELING AUX ALGUES ?",
    description: `Le Peeling aux algues est un soin esthétique naturel qui utilise le pouvoir des extraits d'algues marines pour exfolier la peau en douceur. Contrairement aux peelings chimiques classiques, ce soin repose sur une exfoliation biologique progressive, respectueuse de l'épiderme, qui aide à lisser visiblement la texture de la peau et à raviver son éclat.

Grâce à sa richesse en minéraux, vitamines et antioxydants, le Peeling aux algues contribue à éliminer les cellules mortes et à améliorer l'apparence du teint. Il peut également aider à unifier la peau et à atténuer certaines irrégularités superficielles.

Naturel et bien toléré, ce soin convient à toute personne souhaitant retrouver une peau d'apparence plus lisse, lumineuse et revitalisée, sans inconfort ni interruption des activités quotidiennes.`,
    benefitsTitle: "POURQUOI CHOISIR LE PEELING AUX ALGUES ?",
    benefits: [
      "Exfoliation naturelle et en douceur, sans agression pour la peau",
      "Stimulation du renouvellement cellulaire pour une peau plus éclatante",
      "Unification du teint et atténuation des taches pigmentaires",
      "Réduction des imperfections et des pores dilatés",
      "Effet raffermissant et anti-âge grâce à l'activation du collagène",
      "Hydratation et revitalisation intense grâce aux nutriments marins",
      "Adapté à tous les types de peau, même les plus sensibles",
      "Traitement non invasif et sans éviction sociale"
    ],
    benefitsImage: 'https://static.wixstatic.com/media/11062b_8164f6ede3334e059ea1ba9c11257907~mv2.jpeg/v1/crop/x_1207,y_0,w_3698,h_4193/fill/w_462,h_493,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Portrait%20rieur.jpeg',
    procedureTitle: "LE DÉROULEMENT D'UNE SÉANCE DE PEELING AUX ALGUES",
    procedure: [
      "Observation esthétique de la peau – pour adapter le soin à votre type de peau",
      "Nettoyage et préparation – élimination des impuretés et préparation de la peau",
      "Application du peeling aux algues – soin appliqué de manière uniforme selon les besoins",
      "Temps de pose – courte période de repos pour permettre au soin d'agir en douceur",
      "Application d'un masque apaisant – selon le type de peau et les objectifs esthétiques",
      "Retrait du soin et phase de détente – nettoyage doux de la peau et sensation de fraîcheur",
      "Application de soins hydratants et protecteurs – pour nourrir et protéger la peau après le soin"
    ],
    procedureImage: 'https://static.wixstatic.com/media/11062b_a9649e6bc69a46b8b69b5c3093456279~mv2.jpg/v1/crop/x_0,y_470,w_1920,h_1610/fill/w_402,h_412,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Comparaison%20des%20faces%20divis%C3%A9es.jpg',
    disclaimer: "Ce soin est effectué à des fins esthétiques uniquement. Les paramètres sont ajustés pour offrir une expérience sécuritaire et adaptée à chaque type de peau."
  },
  'traitement-raffermissant': {
    title: 'TRAITEMENT RAFFERMISSANT',
    subtitle: 'Lumière LED',
    heroImage: 'https://static.wixstatic.com/media/9426a1_a5d06b721a534c1ba46748fa5d85b741~mv2.jpg/v1/fill/w_529,h_505,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/shutterstock-1456053788_edited_edited_jp.jpg',
    mainImage: 'https://static.wixstatic.com/media/9426a1_a77891ac427b42c8bacb3237c26255e4~mv2.jpg/v1/crop/x_0,y_2340,w_4912,h_2984/fill/w_892,h_542,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/pexels-shiny-diamond-3762754.jpg',
    introDescription: "Plongez dans une expérience sensorielle inédite grâce à nos soins exclusifs, conçus par nos esthéticiennes expertes pour allier expertise, bien-être et résultats esthétiques visibles. Chaque rituel est pensé pour s'adapter aux besoins uniques de votre peau, tout en offrant un moment de détente profonde qui harmonise beauté et relaxation.",
    questionTitle: "QU'EST-CE QUE LE SOIN RAFFERMISSANT À LA LUMIÈRE LED ?",
    description: `Ce soin esthétique innovant utilise la lumière LED pour contribuer à améliorer visiblement l'apparence de la peau. Il est particulièrement apprécié pour ses effets esthétiques tels qu'un teint plus uniforme, une peau d'apparence plus ferme, et une sensation de vitalité.

La technologie LED est reconnue en esthétique pour son action douce et non invasive. Elle est utilisée dans plusieurs contextes professionnels pour raviver l'éclat naturel de la peau et lui donner un aspect plus tonique et lumineux.`,
    benefitsTitle: "COMMENT FONCTIONNE LE SOIN RAFFERMISSANT À LA LUMIÈRE LED",
    benefits: [
      "Lumière rouge LED pour améliorer visiblement l'apparence de la peau",
      "Action en surface et en profondeur pour raviver l'éclat du teint",
      "Sensation de fermeté et texture cutanée unifiée",
      "Réduction de l'aspect des signes de fatigue",
      "Effet apaisant et revitalisant",
      "Bien tolérée par tous les types de peau",
      "Aspect plus reposé, lumineux et tonique"
    ],
    benefitsImage: 'https://static.wixstatic.com/media/9426a1_ac7bc34bafc94cd8aba42ce1e2e215d7~mv2.jpg/v1/crop/x_69,y_0,w_1094,h_1216/fill/w_440,h_503,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/qualite-de-peau-taches-brunes-dr-ben-youssef-paris.jpg',
    procedureTitle: "LE DÉROULEMENT D'UNE SÉANCE DE SOIN RAFFERMISSANT À LA LUMIÈRE LED",
    procedure: [
      "Préparation de la peau – Nettoyage délicat du visage pour retirer les impuretés",
      "Exfoliation douce – Application d'un exfoliant léger pour lisser la surface de la peau",
      "Application d'un sérum activateur – Sérum enrichi en peptides, acide hyaluronique ou collagène",
      "Exposition à la lumière LED – Application de la lumière rouge pendant 3 à 5 minutes",
      "Masque apaisant et nourrissant – Pose d'un masque enrichi en antioxydants ou agents hydratants",
      "Hydratation et protection finale – Application d'une crème hydratante et protection solaire au besoin"
    ],
    procedureImage: 'https://static.wixstatic.com/media/9426a1_33b99919e2e14340b837d04d858a41dc~mv2.jpg/v1/crop/x_264,y_0,w_1519,h_1434/fill/w_422,h_619,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/perfectio.jpg',
    disclaimer: "Ce soin est effectué à des fins esthétiques uniquement. Les paramètres sont ajustés pour offrir une expérience sécuritaire et adaptée à chaque type de peau."
  },
  'microdermabrasion': {
    title: 'MICRODERMABRASION',
    subtitle: 'Soin facial exfoliant',
    heroImage: 'https://static.wixstatic.com/media/11062b_6dfa28682dbf4247930028a218950e64~mv2.jpg/v1/crop/x_2019,y_0,w_2658,h_2543/fill/w_528,h_505,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Gros%20plan%20sur%20le%20visage%20d\'une%20femme.jpg',
    mainImage: 'https://static.wixstatic.com/media/11062b_ee4c6f7007fb49b5ab00657a5be9471a~mv2.jpg/v1/fill/w_540,h_571,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Femme%20Exfoliant%20Visage.jpg',
    introDescription: "La microdermabrasion est un soin esthétique qui exfolie la surface de la peau à l'aide de microcristaux pour améliorer visiblement la texture et l'éclat du teint. En affinant l'apparence du grain de peau, elle aide à révéler une peau d'apparence plus lisse, douce et lumineuse. Ce soin est idéal pour les peaux ternes, irrégulières ou en quête de fraîcheur et de vitalité.",
    questionTitle: "QU'EST-CE QUE LA MICRODERMABRASION ?",
    description: `La microdermabrasion est une technique exfoliante esthétique qui permet d'améliorer l'apparence de la peau en éliminant en douceur les cellules mortes et les impuretés à la surface de l'épiderme. Réalisée à l'aide d'un embout en diamant ou de microcristaux, cette méthode offre un gommage mécanique précis et non invasif.

Ce soin aide à affiner visiblement le grain de peau, à raviver l'éclat du teint et à lisser la texture cutanée. Il peut également favoriser une meilleure réception des produits appliqués après la séance. Sans douleur et sans interruption des activités, la microdermabrasion est idéale pour celles et ceux qui souhaitent une peau d'apparence plus uniforme, douce et lumineuse.`,
    benefitsTitle: "POURQUOI CHOISIR LA MICRODERMABRASION ?",
    benefits: [
      "Exfoliation profonde et douce pour un teint plus net et unifié",
      "Peau plus lumineuse et éclatante dès la première séance",
      "Réduction des taches pigmentaires, cicatrices superficielles et ridules",
      "Affinement du grain de peau et resserrement des pores dilatés",
      "Stimulation du renouvellement cellulaire pour une peau plus jeune",
      "Amélioration de l'absorption des sérums et crèmes hydratantes",
      "Traitement non invasif et sans douleur, adapté à tous les types de peau"
    ],
    benefitsImage: 'https://static.wixstatic.com/media/11062b_d8e10d1a29194e44828298452026733e~mv2.jpg/v1/crop/x_0,y_251,w_1920,h_2047/fill/w_462,h_493,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Avant%20et%20apr%C3%A8s%20la%20peau.jpg',
    procedureTitle: "LE DÉROULEMENT D'UNE SÉANCE DE MICRODERMABRASION",
    procedure: [
      "Observation esthétique personnalisée – pour adapter le soin selon le type de peau",
      "Nettoyage en profondeur – nettoyage doux pour préparer la peau à l'exfoliation",
      "Exfoliation par microdermabrasion – à l'aide d'un embout en diamant ou de microcristaux",
      "Application d'un sérum ciblé – enrichi en acide hyaluronique, antioxydants ou collagène",
      "Masque apaisant et hydratant – pour favoriser le confort et la fraîcheur de la peau",
      "Exposition à la lumière LED – utilisée à des fins esthétiques pour raviver l'éclat du teint",
      "Application d'une crème hydratante et protectrice – pour nourrir et protéger la peau"
    ],
    procedureImage: 'https://static.wixstatic.com/media/11062b_489acfa04b614cd78a159be37e7a7d9a~mv2.jpeg/v1/crop/x_560,y_0,w_4352,h_3648/fill/w_402,h_397,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Soin%20du%20visage%20professionnel.jpeg',
    disclaimer: "Ce soin est effectué à des fins esthétiques uniquement. Les paramètres sont ajustés pour offrir une expérience sécuritaire et adaptée à chaque type de peau."
  },
  'microneedling': {
    title: 'MICRONEEDLING',
    subtitle: 'Pour une peau de meilleur aspect',
    heroImage: 'https://static.wixstatic.com/media/9426a1_630e0e5a864a40bfae3fd88b92a965e6~mv2.png/v1/fill/w_420,h_553,al_c,lg_1,q_85,enc_avif,quality_auto/showImageResized_edited_edited.png',
    mainImage: 'https://static.wixstatic.com/media/9426a1_38a2314696464f0b9ad743718b6e45ad~mv2.jpg/v1/fill/w_540,h_542,al_c,lg_1,q_80,enc_avif,quality_auto/626c616e636869722d7065617562ce4352.jpg',
    questionTitle: "QU'EST-CE QUE LE MICRONEEDLING?",
    description: `Le Microneedling est une technique innovante qui repose sur l'utilisation de micro-aiguilles pour stimuler la régénération cutanée en profondeur. À l'aide d'un dispositif équipé de fines aiguilles, ce traitement crée des micro-perforations à la surface de la peau, déclenchant ainsi un processus naturel de guérison. Ces micro-perforations sont réalisées de manière contrôlée et précise, à différentes profondeurs selon la zone traitée.

Le Microneedling favorise la production de collagène et d'élastine, des fibres essentielles au maintien de la fermeté et de l'élasticité de la peau. Ce traitement permet également d'améliorer la perméabilité de la peau aux produits de soin appliqués après la séance, optimisant ainsi leur efficacité.

Sans nécessiter de temps de récupération prolongé, le Microneedling aide à réduire l'apparence des rides, des cicatrices, des vergetures et des taches pigmentaires causées par le soleil. Il améliore également la texture de la peau, la rendant plus lisse, plus ferme et plus lumineuse.

Les résultats sont généralement visibles de 4 à 6 semaines après la procédure, avec une amélioration continue au fil des traitements. Pour des résultats optimaux, il est recommandé de suivre plusieurs séances de manière régulière et d'associer le Microneedling à d'autres soins de la peau.`,
    benefitsTitle: "POURQUOI CHOISIR LE MICRONEEDLING?",
    benefits: [
      "Une stimulation douce de la peau favorisant un effet tonifiant naturel.",
      "Une peau d'apparence plus lisse et plus ferme dès les premières séances.",
      "Une amélioration progressive de l'uniformité du teint et de la texture cutanée.",
      "Une solution esthétique pour atténuer l'apparence d'irrégularités superficielles.",
      "Un soin rapide, avec peu ou pas de temps de récupération.",
      "Une meilleure absorption des sérums et soins appliqués après la séance.",
      "Convient à tous les types de peau et à plusieurs zones du visage et du corps.",
      "Une technique esthétique non invasive, réalisée avec précaution."
    ],
    benefitsImage: 'https://static.wixstatic.com/media/9426a1_aa6d7437594f4167976b306c9367e1aa~mv2.png/v1/fill/w_435,h_493,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Untitled%20design.png',
    procedureTitle: "LE DÉROULEMENT D'UNE SÉANCE DE MICRONEEDLING",
    procedure: [
      "Évaluation personnalisée",
      "Nettoyage et désinfection de la peau",
      "Application d'un gel anesthésiant (facultatif)",
      "Application d'un sérum personnalisé",
      "Soin par Microneedling",
      "Masque calmante",
      "Luminothérapie",
      "Nettoyage et sérum post-traitement"
    ],
    procedureImage: 'https://static.wixstatic.com/media/9426a1_e8dd768d0e394116befbf3e7a17f41f0~mv2.png/v1/fill/w_475,h_477,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/1.png',
    disclaimer: "Ce soin est effectué à des fins esthétiques uniquement. Les paramètres sont ajustés pour offrir une expérience sécuritaire et adaptée à chaque type de peau."
  },
  'soin-silhouette': {
    title: 'SOIN SILHOUETTE',
    subtitle: 'Affinement Visuel',
    heroImage: 'https://static.wixstatic.com/media/9426a1_f45957c9984348b8a170040a952b448f~mv2.webp/v1/fill/w_528,h_505,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/plan-body-1.webp',
    mainImage: 'https://static.wixstatic.com/media/9426a1_ab0cf06e55df46978fdd4d934a7b06f8~mv2.webp/v1/fill/w_552,h_504,al_c,lg_1,q_80,enc_avif,quality_auto/Ultrasound-Cavitation-body-contouring_1024x1024_2x.webp',
    questionTitle: "QU'EST-CE QUE LA LIPOCAVITATION?",
    description: `La lipocavitation est une technique esthétique non invasive qui utilise une combinaison d'ultrasons et de radiofréquence pour améliorer l'apparence de certaines zones du corps. Ce soin est reconnu pour contribuer à une silhouette visuellement plus harmonieuse, en ciblant les zones où la peau peut sembler moins lisse ou plus dense.

Sans chirurgie ni éviction sociale, la lipocavitation est appréciée par les personnes souhaitant un soin esthétique de raffermissement et de remodelage corporel. Les résultats sont progressifs et varient selon chaque personne. Pour compléter l'expérience, nous incluons un soin de drainage esthétique, qui favorise une sensation de légèreté et un meilleur confort corporel après la séance.`,
    costTitle: "COMBIEN COÛTE UNE SÉANCE DE LIPOCAVITATION?",
    costDescription: "Les tarifs varient en fonction des zones ciblées, du forfait choisi et du mode de paiement. Lors d'une rencontre avec une technicienne en soins esthétiques, vous bénéficierez d'une consultation gratuite et sans engagement pour établir un plan adapté à vos objectifs. Chaque personne ayant des besoins uniques, nos soins sont toujours personnalisés afin d'offrir une expérience sur mesure.",
    zonesTitle: "ZONES CIBLÉES PAR LA LIPOCAVITATION",
    zonesDescription: `La lipocavitation est une technologie esthétique qui peut être appliquée sur plusieurs zones du corps, selon les besoins et les objectifs de chaque personne.

Certaines zones sont particulièrement populaires, notamment les cuisses, le ventre, les bras et les fessiers. Lors d'une séance, il est possible de cibler plusieurs régions du corps, ce qui permet d'optimiser le temps sans compromettre la qualité du soin.

En général, une série de 5 à 10 séances espacées est recommandée pour observer une amélioration progressive de l'apparence de la silhouette. Le nombre exact de séances peut varier selon les besoins de la personne et la zone visée.`,
    procedureTitle: "LE DÉROULEMENT D'UNE SÉANCE DE LIPOCAVITATION",
    procedure: [
      "Réchauffement des zones ciblées – préparation de la peau à l'aide de mouvements circulaires ou de chaleur douce",
      "Réglage personnalisé de l'appareil de lipocavitation – selon la zone et les besoins esthétiques",
      "Application par radiofréquence – utilisée à des fins esthétiques pour améliorer la texture de la peau",
      "Application par ultrasons – ciblant les zones souhaitées pour une apparence plus harmonieuse",
      "Application d'un gel protecteur – pour optimiser le confort et la diffusion du soin",
      "Massage esthétique de type drainage – pour favoriser une sensation de légèreté après la séance",
      "Nettoyage final et application de produits adaptés – hydratation et soin protecteur"
    ],
    procedureImage: 'https://static.wixstatic.com/media/9426a1_c8648ee10ce14d3bb35bd383c0ecbcaf~mv2.webp/v1/fill/w_483,h_399,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Woman-getting-an-anti-cellulite-lase-treatment-at-the-spa-1296x728-header.webp',
    disclaimer: "Ce soin est effectué à des fins esthétiques uniquement. Les paramètres sont ajustés pour offrir une expérience sécuritaire et adaptée à chaque type de peau."
  },
  'soin-lumineux': {
    title: 'SOIN LUMINEUX',
    subtitle: 'PICO LASER',
    heroImage: 'https://static.wixstatic.com/media/9426a1_eca629e46cc74efdb3ecfe0c137af72a~mv2.jpg/v1/fill/w_528,h_505,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/instagram-bg-0_4.jpg',
    mainImage: 'https://static.wixstatic.com/media/9426a1_97c8451f3e9e4a0a81b9da22542ad807~mv2.jpeg/v1/fill/w_540,h_430,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/female-cosmetologist-is-performing-forehead-photor-2022-09-02-17-06-20-utc.jpeg',
    introDescription: "Le soin de photorajeunissement est une technique esthétique non invasive qui utilise la lumière pour améliorer l'apparence de la peau. Il contribue à raviver l'éclat du teint, à unifier la texture cutanée et à offrir une peau d'apparence plus lumineuse, lisse et reposée.",
    questionTitle: "QU'EST-CE QUE LE PICO LASER?",
    description: `Le Pico Laser est une technologie esthétique avancée qui émet des impulsions ultra-courtes, mesurées en picosecondes (soit un trillionième de seconde). Grâce à ses longueurs d'onde spécifiques, cette technologie est utilisée à des fins esthétiques pour améliorer l'apparence de la peau, notamment en unifiant le teint, en affinant la texture cutanée et en atténuant certaines irrégularités pigmentaires superficielles.

Ce soin est non invasif et convient à différents types de peau. Il est particulièrement apprécié pour ses résultats visibles et progressifs dans le cadre d'une routine esthétique personnalisée.`,
    benefitsTitle: "POURQUOI CHOISIR LE PHOTORAJEUNISSEMENT?",
    benefits: [
      "Une amélioration progressive de l'apparence de la peau",
      "Une peau d'apparence plus lumineuse et un teint visiblement unifié",
      "Une technologie esthétique non invasive, sans chirurgie",
      "Des résultats observables chez plusieurs client·es selon le type de peau",
      "Convient aux peaux jeunes comme aux peaux matures",
      "Cible les irrégularités pigmentaires superficielles et le teint irrégulier"
    ],
    benefitsImage: 'https://static.wixstatic.com/media/9426a1_1206c62242db4510872e7acc4fc78e77~mv2.webp/v1/fill/w_435,h_493,al_c,lg_1,q_80,enc_avif,quality_auto/showImageResized.webp',
    procedureTitle: "DÉROULEMENT D'UNE SÉANCE DE PHOTORAJEUNISSEMENT",
    procedure: [
      "Nettoyage de la peau",
      "Observation visuelle de la peau pour adapter le soin",
      "Port de lunettes de protection",
      "Réglage personnalisé de l'appareil de photorajeunissement (Pico Laser)",
      "Déroulement de la séance sur les zones ciblées",
      "Application d'un masque adapté selon les besoins de la peau",
      "Nettoyage final de la zone traitée",
      "Application d'une crème apaisante et hydratante"
    ],
    procedureImage: 'https://static.wixstatic.com/media/9426a1_946a88a056c949b5b2e16beca48ef48d~mv2.jpg/v1/crop/x_825,y_0,w_1675,h_1406/fill/w_402,h_337,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/9426a1_946a88a056c949b5b2e16beca48ef48d~mv2.jpg',
    disclaimer: "Ce soin est offert à des fins esthétiques uniquement. Il ne remplace pas une consultation médicale ni un traitement dermatologique."
  }
};

const SoinPage = ({ soinId: propSoinId }) => {
  const pathSoinId = window.location.pathname.replace('/', '').replace('.php', '');
  const soinId = propSoinId || pathSoinId;
  const soin = SOINS_DATA[soinId];

  if (!soin) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-4xl text-taupe mb-4">Soin non trouvé</h1>
          <Link to="/" className="text-taupe hover:underline">Retour à l'accueil</Link>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content - Order 1 on mobile */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="order-1"
            >
              <p className="text-taupe-light text-lg mb-2">{soin.subtitle}</p>
              <h1 className="font-serif text-4xl md:text-5xl text-taupe font-light uppercase tracking-wide mb-8" data-testid="soin-page-title">
                {soin.title}
              </h1>
              
              <Link
                to="/booking"
                className="inline-flex items-center gap-2 bg-taupe text-white px-8 py-4 rounded-none font-sans text-sm uppercase tracking-wider font-medium hover:bg-taupe-dark transition-colors"
                data-testid="soin-consultation-btn"
              >
                Consultation Gratuite
              </Link>
            </motion.div>

            {/* Hero Image - Order 2 on mobile */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded-none overflow-hidden shadow-medium order-2"
            >
              <img 
                src={soin.heroImage}
                alt={soin.title}
                className="w-full h-auto object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content Section - "Qu'est-ce que..." */}
      <section className="py-16 bg-stone/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Image - Hidden on mobile for epilation-laser (costTitle exists), shown on desktop left */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={soin.costTitle ? "hidden lg:block" : "order-2 lg:order-1"}
            >
              <img 
                src={soin.mainImage}
                alt={soin.questionTitle}
                className="w-full h-auto rounded-none shadow-medium"
              />
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className={soin.costTitle ? "" : "order-1 lg:order-2"}
            >
              {soin.introDescription && (
                <p className="text-taupe text-lg leading-relaxed mb-8 font-serif">
                  {soin.introDescription}
                </p>
              )}
              
              <h2 className="font-serif text-2xl text-taupe font-light uppercase tracking-wide mb-6">
                {soin.questionTitle}
              </h2>
              <div className="text-taupe-light leading-relaxed whitespace-pre-line">
                {soin.description}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section - "Vous avez des doutes?" */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-2xl text-taupe font-light mb-6">VOUS AVEZ DES DOUTES?</h2>
          <Link
            to="/booking"
            className="inline-flex items-center gap-2 bg-taupe text-white px-8 py-4 rounded-none font-sans text-sm uppercase tracking-wider font-medium hover:bg-taupe-dark transition-colors"
          >
            Consultation Gratuite
          </Link>
        </div>
      </section>

      {/* Cost or Benefits Section - "Combien coûte..." */}
      {(soin.costTitle || soin.benefitsTitle) && (
        <section className="py-16 bg-stone/20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Content - Order 1 on mobile */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="order-1"
              >
                <h2 className="font-serif text-2xl text-taupe font-light uppercase tracking-wide mb-6">
                  {soin.costTitle || soin.benefitsTitle}
                </h2>
                
                {soin.costDescription && (
                  <p className="text-taupe-light leading-relaxed mb-6">{soin.costDescription}</p>
                )}
                
                {soin.benefits && (
                  <ul className="space-y-3">
                    {soin.benefits.map((benefit, i) => (
                      <li key={i} className="text-taupe-light leading-relaxed flex items-start gap-2">
                        <span className="text-taupe mt-1">•</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>

              {/* Image - Order 2 on mobile: Show mainImage for costTitle pages, benefitsImage for others */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="order-2"
              >
                {soin.costTitle ? (
                  <img 
                    src={soin.mainImage}
                    alt={soin.costTitle}
                    className="w-full h-auto rounded-none shadow-medium lg:hidden"
                  />
                ) : soin.benefitsImage && (
                  <img 
                    src={soin.benefitsImage}
                    alt={soin.benefitsTitle}
                    className="w-full h-auto rounded-none shadow-medium"
                  />
                )}
              </motion.div>
            </div>
          </div>
        </section>
      )}

      {/* Zones Section */}
      {soin.zonesTitle && (
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="font-serif text-2xl text-taupe font-light uppercase tracking-wide mb-6 text-center">
              {soin.zonesTitle}
            </h2>
            <p className="text-taupe-light leading-relaxed whitespace-pre-line text-center">
              {soin.zonesDescription}
            </p>
          </div>
        </section>
      )}

      {/* Procedure Section */}
      <section className="py-16 bg-stone/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-serif text-2xl text-taupe font-light uppercase tracking-wide mb-6">
                {soin.procedureTitle}
              </h2>
              <ul className="space-y-3">
                {soin.procedure.map((step, i) => (
                  <li key={i} className="text-taupe-light leading-relaxed flex items-start gap-2">
                    <span className="text-taupe mt-1">•</span>
                    {step}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img 
                src={soin.procedureImage}
                alt={soin.procedureTitle}
                className="w-full h-auto rounded-none shadow-medium"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-8 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-taupe-light text-sm leading-relaxed">
            {soin.disclaimer}
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-taupe">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-2xl md:text-3xl text-white font-light mb-4">
            VOUS DÉSIREZ PRENDRE UN RENDEZ-VOUS?
          </h2>
          <p className="text-white/80 mb-8">N'hésitez plus, contactez-nous</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+14388822165"
              className="inline-flex items-center justify-center gap-2 bg-white text-taupe px-8 py-4 rounded-none font-sans text-sm uppercase tracking-wider font-medium hover:bg-stone transition-colors"
            >
              Téléphoner
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-none font-sans text-sm uppercase tracking-wider font-medium hover:bg-white hover:text-taupe transition-colors"
            >
              Nous Contacter
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default SoinPage;
