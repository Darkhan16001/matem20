
"use strict";

const $ = id => document.getElementById(id);
const M = String.raw;

const lesson = {
  title: "Көрсеткіштік және логарифмдік функцияларды дифференциалдау",
  goal: "Көрсеткіштік және логарифмдік функциялардың туынды формулаларын меңгеру, күрделі функцияның туындысын табу, көбейтіндіні дифференциалдау және жанаманың бұрыштық коэффициентін есептеу."
};

// =====================================
// 5 ТЕОРИЯЛЫҚ ТҮСІНДІРМЕ
// =====================================

const theory = [
  {
    title: "Дифференциалдау және туынды ұғымы",

    definition:
      "Дифференциалдау — берілген функцияның туындысын табу амалы. Туынды функцияның белгілі бір нүктедегі өзгеру жылдамдығын көрсетеді. Функция графигіндегі жанаманың көлбеулігі де туынды мәнімен анықталады.",

    explain:
      "Көрсеткіштік функцияда айнымалы дәреже көрсеткішінде орналасады. Мысалы, y екі санының x дәрежесіне тең. x артқан сайын функция мәні өзгеріп отырады. Осы өзгерістің қаншалықты жылдам жүретінін туынды арқылы зерттейміз. Туындыны есептеу үшін көрсеткіштік функцияларға арнайы формулалар қолданылады. Ал негізі e болатын функцияның туындысы ерекше қарапайым: функцияның өзіне тең.",

    rule:
      "Туындыны f штрих x немесе y штрих түрінде белгілейміз. Туындының формуласын қолданғанда функцияның түрін дұрыс анықтау керек.",

    formula:
      M`f'(x)=\lim_{h\to0}\frac{f(x+h)-f(x)}{h}`,

    steps: [
      M`f(x)=x^2`,
      M`f'(x)=2x`,
      M`f'(3)=2\cdot3`,
      M`f'(3)=6`
    ],

    warning:
      "f(x) — функцияның мәні, ал f′(x) — оның өзгеру жылдамдығы. Бұлар бір ұғым емес."
  },

  {
    title: "Көрсеткіштік функцияның туындысы",

    definition:
      "Негізі оң және бірге тең емес a саны болатын көрсеткіштік функцияның туындысы сол функцияның натурал логарифмдік негіз көбейткішіне көбейтіндісіне тең.",

    explain:
      "Егер функция y екі санының x дәрежесіне тең болса, оның туындысын табу үшін бастапқы екі санының x дәрежесін сақтаймыз және ln2 көбейткішін қосамыз. Дәл осылай үш санының x дәрежесінің туындысы үштің x дәрежесін ln3-ке көбейткенге тең. Ал негізі e болса, ln e бірге тең. Сондықтан e санының x дәрежесінің туындысы қайтадан e санының x дәрежесі болып шығады.",

    rule:
      "Негізі a болатын көрсеткіштік функцияның туындысында ln a көбейткіші міндетті түрде болады. Негіз e болса, бұл көбейткіш бірге тең.",

    formula:
      M`\left(a^x\right)'=a^x\ln a,\qquad\left(e^x\right)'=e^x`,

    steps: [
      M`y=2^x`,
      M`y'=2^x\ln2`,
      M`y'(3)=2^3\ln2`,
      M`y'(3)=8\ln2`
    ],

    warning:
      "2 санының x дәрежесінің туындысы тек 2 санының x дәрежесіне тең емес: ln2 көбейткіші қажет."
  },

  {
    title: "Логарифмдік функцияның туындысы",

    definition:
      "Натурал логарифм функциясының туындысы x санының кері шамасына тең болады. Кез келген басқа жарамды негіздегі логарифмнің туындысы x пен сол негіздің натурал логарифмі көбейтіндісіне кері шамаға тең.",

    explain:
      "Мысалы, y ln x болсын. Туындысын табу үшін бірді x-ке бөлеміз. Егер y екі негізіндегі x логарифмі болса, онда бірді x пен ln2 көбейтіндісіне бөлеміз. Негізгі ln x функциясы тек оң x мәндерінде анықталады. Сондықтан туынды формуласын қолданарда функцияның анықталу облысын да білу қажет.",

    rule:
      "Натурал логарифм туындысы — 1/x. Басқа негіздер үшін бөлімде қосымша ln a көбейткіші пайда болады.",

    formula:
      M`\left(\ln x\right)'=\frac1x,\qquad
      \left(\log_a x\right)'=\frac1{x\ln a}`,

    steps: [
      M`y=\log_2 x`,
      M`y'=\frac1{x\ln2}`,
      M`y'(4)=\frac1{4\ln2}`
    ],

    warning:
      "Негізгі logₐx функциясында x оң болуы қажет. Бөлімдегі ln a көбейткішін ұмытпаңдар."
  },

  {
    title: "Күрделі функцияның туындысы",

    definition:
      "Егер көрсеткіштік немесе логарифмдік функцияның аргументінде басқа функция тұрса, онда күрделі функцияны дифференциалдау ережесі қолданылады. Бұл ереже тізбектік ереже деп те аталады.",

    explain:
      "Мысалы, e санының 3x дәрежесін алайық. Алдымен e санының дәрежелік функциясының туындысын жазамыз. Содан кейін ішкі функция — 3x өрнегінің туындысын табамыз. Оның туындысы үшке тең. Нәтижесінде үш е көбейтілген e санының 3x дәрежесі шығады. Логарифмге де осы әдіс қолданылады: ішкі функцияның туындысын сол функцияның өзіне бөлеміз.",

    rule:
      "Алдымен сыртқы функцияның туындысын алып, содан кейін ішкі өрнектің туындысына көбейтеміз.",

    formula:
      M`\left(e^{u(x)}\right)'=u'(x)e^{u(x)},\qquad
      \left(\ln u(x)\right)'=\frac{u'(x)}{u(x)}`,

    steps: [
      M`y=e^{3x}`,
      M`u(x)=3x`,
      M`u'(x)=3`,
      M`y'=3e^{3x}`
    ],

    warning:
      "Күрделі функцияның туындысын тапқанда ішкі өрнектің туындысын ұмыту — жиі кездесетін қате."
  },

  {
    title: "Көбейтінді және жанаманың теңдеуі",

    definition:
      "Көрсеткіштік немесе логарифмдік функция басқа функциямен көбейтілсе, көбейтіндінің туындысы ережесін қолданамыз. Ал туынды мәні жанаманың бұрыштық коэффициентін табуға көмектеседі.",

    explain:
      "Мысалы, x саны мен e санының x дәрежесінің көбейтіндісінің туындысын табайық. Бірінші көбейткіштің туындысы бір, екінші көбейткіштің туындысы e санының x дәрежесіне тең. Сондықтан туынды екі қосылғыштан тұрады: e санының x дәрежесі және x көбейтілген e санының x дәрежесі. Бұл нәтижені ортақ көбейткішке жіктеуге болады. Туынды арқылы функция графигіне берілген нүктеде жүргізілген жанаманың көлбеулігін де анықтаймыз.",

    rule:
      "Көбейтіндінің туындысы бірінші функция туындысының екіншіге көбейтіндісіне бірінші функцияның екіншісінің туындысына көбейтіндісін қосқанға тең.",

    formula:
      M`(uv)'=u'v+uv'`,

    steps: [
      M`y=xe^x`,
      M`u=x,\quad v=e^x`,
      M`u'=1,\quad v'=e^x`,
      M`y'=e^x+xe^x`,
      M`y'=e^x(1+x)`
    ],

    warning:
      "Көбейтіндінің туындысы жеке туындылардың көбейтіндісіне тең емес."
  }
];

// =====================================
// 10 КОНСПЕКТ
// ӘРҚАЙСЫСЫНДА 2 ӨЗІНДІК ЕСЕП
// =====================================

const notes = [
  {
    title:"Натурал көрсеткіштік функция",
    text:"Негізі e болатын көрсеткіштік функция ерекше қасиетке ие: оның туындысы бастапқы функцияның өзіне тең. Мұндағы e — жуық мәні 2,71828 болатын математикалық тұрақты сан.",
    formula:M`\left(e^x\right)'=e^x`,
    example:[M`y=e^x`,M`y'=e^x`,M`y'(0)=1`],
    self:[
      {q:M`y=e^x,\quad y'(1)=?`,
       steps:[M`y'=e^x`,M`y'(1)=e`],
       answer:M`e`},
      {q:M`y=4e^x,\quad y'(0)=?`,
       steps:[M`y'=4e^x`,M`y'(0)=4`],
       answer:M`4`}
    ]
  },
  {
    title:"Көрсеткіштік функцияның туындысы",
    text:"a саны оң және бірге тең емес болса, a санының x дәрежесінің туындысы a санының x дәрежесін ln a көбейткішіне көбейту арқылы табылады. Негізі a саны туындыда сақталады.",
    formula:M`\left(a^x\right)'=a^x\ln a`,
    example:[M`y=2^x`,M`y'=2^x\ln2`],
    self:[
      {q:M`y=3^x,\quad y'=?`,
       steps:[M`y'=3^x\ln3`],
       answer:M`3^x\ln3`},
      {q:M`y=5^x,\quad y'(0)=?`,
       steps:[M`y'=5^x\ln5`,M`5^0=1`],
       answer:M`\ln5`}
    ]
  },
  {
    title:"Тұрақты көбейткіші бар функция",
    text:"Егер көрсеткіштік функцияның алдында тұрақты сан көбейткіш болып тұрса, туынды табылғанда сол сан өзгеріссіз сақталады. Туынды тек функцияның айнымалы бөлігіне қолданылады.",
    formula:M`\left(ce^x\right)'=ce^x`,
    example:[M`y=7e^x`,M`y'=7e^x`],
    self:[
      {q:M`y=6e^x,\quad y'(0)=?`,
       steps:[M`y'=6e^x`,M`e^0=1`],
       answer:M`6`},
      {q:M`y=2e^x,\quad y'= ?`,
       steps:[M`(2e^x)'=2e^x`],
       answer:M`2e^x`}
    ]
  },
  {
    title:"Ішкі көрсеткіші бар функция",
    text:"Егер e санының дәреже көрсеткішінде 2x, 3x немесе басқа өрнек болса, сол ішкі өрнектің туындысын табамыз. Оны бастапқы көрсеткіштік функцияға көбейтеміз.",
    formula:M`\left(e^{kx}\right)'=ke^{kx}`,
    example:[M`y=e^{2x}`,M`y'=2e^{2x}`],
    self:[
      {q:M`y=e^{5x},\quad y'= ?`,
       steps:[M`(5x)'=5`],
       answer:M`5e^{5x}`},
      {q:M`y=3e^{2x},\quad y'(0)=?`,
       steps:[M`y'=6e^{2x}`,M`e^0=1`],
       answer:M`6`}
    ]
  },
  {
    title:"Натурал логарифмнің туындысы",
    text:"Натурал логарифм функциясының анықталу облысы оң сандардан тұрады. Оның туындысы бірді x-ке бөлгенге тең. Берілген нүктедегі туынды мәнін табу үшін x орнына сол нүктенің координатасын қоямыз.",
    formula:M`\left(\ln x\right)'=\frac1x`,
    example:[M`y=\ln x`,M`y'=\frac1x`,M`y'(2)=\frac12`],
    self:[
      {q:M`y=\ln x,\quad y'(4)=?`,
       steps:[M`y'=\frac1x`],
       answer:M`\frac14`},
      {q:M`y=3\ln x,\quad y'(3)=?`,
       steps:[M`y'=\frac3x`],
       answer:M`1`}
    ]
  },
  {
    title:"Күрделі логарифмдік функция",
    text:"Натурал логарифмнің аргументінде 2x+1 немесе басқа функция орналасса, алдымен ішкі функцияның туындысын табамыз. Содан кейін ішкі өрнектің өзіне бөлеміз. Анықталу облысын сақтау қажет.",
    formula:M`\left(\ln u(x)\right)'=\frac{u'(x)}{u(x)}`,
    example:[M`y=\ln(2x+1)`,M`y'=\frac2{2x+1}`],
    self:[
      {q:M`y=\ln(3x+1),\quad y'=?`,
       steps:[M`(3x+1)'=3`],
       answer:M`\frac3{3x+1}`},
      {q:M`y=\ln(x+4),\quad y'(0)=?`,
       steps:[M`y'=\frac1{x+4}`],
       answer:M`\frac14`}
    ]
  },
  {
    title:"Негізі басқа логарифм",
    text:"Логарифм негізі екі, үш немесе басқа жарамды сан болса, туындының бөлімінде сол негіздің натурал логарифмі міндетті түрде болады. Негіз бірден кіші болғанда ln a теріс болады, сондықтан туынды да теріс таңбалы болуы мүмкін.",
    formula:M`\left(\log_a x\right)'=\frac1{x\ln a}`,
    example:[M`y=\log_2 x`,M`y'=\frac1{x\ln2}`],
    self:[
      {q:M`y=\log_3 x,\quad y'= ?`,
       steps:[M`a=3`],
       answer:M`\frac1{x\ln3}`},
      {q:M`y=\log_2 x,\quad y'(1)=?`,
       steps:[M`y'(1)=\frac1{1\cdot\ln2}`],
       answer:M`\frac1{\ln2}`}
    ]
  },
  {
    title:"Күрделі логарифмнің туындысы",
    text:"Егер логарифм аргументінде 2x+3 сияқты функция болса, туынды табу үшін аргументтің туындысын алымға, ал аргумент пен ln a көбейтіндісін бөлімге жазамыз.",
    formula:M`\left(\log_a u(x)\right)'=\frac{u'(x)}{u(x)\ln a}`,
    example:[M`y=\log_2(2x+3)`,M`y'=\frac2{(2x+3)\ln2}`],
    self:[
      {q:M`y=\log_3(3x+1),\quad y'= ?`,
       steps:[M`(3x+1)'=3`],
       answer:M`\frac3{(3x+1)\ln3}`},
      {q:M`y=\log_2(x+1),\quad y'(1)=?`,
       steps:[M`y'=\frac1{(x+1)\ln2}`],
       answer:M`\frac1{2\ln2}`}
    ]
  },
  {
    title:"Көбейтіндінің туындысы",
    text:"Екі функция көбейтілгенде, әр көбейткіш жеке дифференциалданады. Бірінші туындыны екінші функцияға, бірінші функцияны екінші туындыға көбейтіп, нәтижелерді қосамыз.",
    formula:M`(uv)'=u'v+uv'`,
    example:[M`y=xe^x`,M`y'=e^x+xe^x`],
    self:[
      {q:M`y=xe^x,\quad y'(0)=?`,
       steps:[M`y'=e^x(1+x)`],
       answer:M`1`},
      {q:M`y=x\ln x,\quad y'= ?`,
       steps:[M`y'=\ln x+x\cdot\frac1x`],
       answer:M`\ln x+1`}
    ]
  },
  {
    title:"Туынды және жанама",
    text:"Функция графигіндегі жанаманың бұрыштық коэффициенті сол нүктедегі туынды мәніне тең. Жанаманың теңдеуін табу үшін нүктенің координаталарын және туынды мәнін пайдаланамыз.",
    formula:M`y-y_0=f'(x_0)(x-x_0)`,
    example:[M`f(x)=e^x`,M`x_0=0,\quad y_0=1`,
             M`f'(0)=1`,M`y=x+1`],
    self:[
      {q:M`f(x)=e^{2x},\quad f'(0)=?`,
       steps:[M`f'(x)=2e^{2x}`],
       answer:M`2`},
      {q:M`f(x)=\ln x,\quad f'(1)=?`,
       steps:[M`f'(x)=\frac1x`],
       answer:M`1`}
    ]
  }
];

// =====================================
// 4 ДЕҢГЕЙ — 20 ЕСЕП
// =====================================

function task(q, choices, correct, steps) {
  return {q, choices, correct, steps};
}

const levels = [
  {
    name:"I деңгей — Жеңіл",
    points:5,
    tasks:[
      task(M`(e^x)'`,
        [M`e^x`, M`xe^x`, M`1`, M`0`],0,
        [M`(e^x)'=e^x`]),

      task(M`(\ln x)'`,
        [M`x`, M`\frac1x`, M`\ln x`, M`e^x`],1,
        [M`(\ln x)'=\frac1x`]),

      task(M`(2^x)'`,
        [M`2x`, M`2^x`, M`2^x\ln2`, M`\ln2`],2,
        [M`(a^x)'=a^x\ln a`,M`(2^x)'=2^x\ln2`]),

      task(M`(3e^x)'`,
        [M`3x`, M`e^{3x}`, M`3`, M`3e^x`],3,
        [M`(3e^x)'=3e^x`]),

      task(M`(\ln x)'_{\,x=2}`,
        [M`\frac12`, M`2`, M`1`, M`\ln2`],0,
        [M`y'=\frac1x`,M`y'(2)=\frac12`])
    ]
  },
  {
    name:"II деңгей — Орташа",
    points:10,
    tasks:[
      task(M`(e^{3x})'`,
        [M`e^{3x}`,M`3e^{3x}`,M`3x e^{3x}`,M`3e^x`],1,
        [M`(3x)'=3`,M`(e^{3x})'=3e^{3x}`]),

      task(M`(\ln(2x+1))'`,
        [M`\frac1{2x+1}`,M`2x+1`,
         M`\frac2{2x+1}`,M`\ln2`],2,
        [M`(2x+1)'=2`,M`y'=\frac2{2x+1}`]),

      task(M`(5^x)'`,
        [M`5x`,M`5`,M`5^x`,M`5^x\ln5`],3,
        [M`(5^x)'=5^x\ln5`]),

      task(M`(\log_2x)'`,
        [M`\frac1{x\ln2}`,M`\frac1x`,
         M`\ln2`,M`x\ln2`],0,
        [M`(\log_a x)'=\frac1{x\ln a}`]),

      task(M`(4e^{2x})'`,
        [M`4e^{2x}`,M`8e^{2x}`,
         M`2e^{2x}`,M`8e^x`],1,
        [M`(2x)'=2`,M`y'=4\cdot2e^{2x}`,M`y'=8e^{2x}`])
    ]
  },
  {
    name:"III деңгей — Қиын",
    points:15,
    tasks:[
      task(M`(xe^x)'`,
        [M`xe^x`,M`e^x`,
         M`e^x(1+x)`,M`x+e^x`],2,
        [M`(uv)'=u'v+uv'`,M`y'=e^x+xe^x`]),

      task(M`(x\ln x)'`,
        [M`\ln x`,M`x`,M`\frac1x`,
         M`\ln x+1`],3,
        [M`y'=1\cdot\ln x+x\cdot\frac1x`,
         M`y'=\ln x+1`]),

      task(M`(\log_3(2x+1))'`,
        [M`\frac2{(2x+1)\ln3}`,
         M`\frac1{(2x+1)\ln3}`,
         M`\frac2{2x+1}`,M`\ln3`],0,
        [M`u=2x+1`,M`u'=2`,
         M`y'=\frac2{(2x+1)\ln3}`]),

      task(M`(\ln(x^2+1))'`,
        [M`\frac1{x^2+1}`,
         M`\frac{2x}{x^2+1}`,
         M`2x\ln(x^2+1)`,M`\frac1{2x}`],1,
        [M`u=x^2+1`,M`u'=2x`,
         M`y'=\frac{2x}{x^2+1}`]),

      task(M`(e^{x^2})'`,
        [M`e^{x^2}`,M`x e^{x^2}`,
         M`2xe^{x^2}`,M`2e^x`],2,
        [M`u=x^2`,M`u'=2x`,
         M`y'=2xe^{x^2}`])
    ]
  },
  {
    name:"IV деңгей — Өте қиын",
    points:20,
    tasks:[
      task(M`(x^2e^x)'`,
        [M`2xe^x`,M`x^2e^x`,
         M`e^x(x^2-2x)`,
         M`e^x(x^2+2x)`],3,
        [M`y'=2xe^x+x^2e^x`,
         M`y'=e^x(x^2+2x)`]),

      task(M`(\ln(x^2-1))'`,
        [M`\frac{2x}{x^2-1}`,
         M`\frac1{x^2-1}`,
         M`2x\ln(x^2-1)`,
         M`\frac{x}{x^2-1}`],0,
        [M`u=x^2-1`,M`u'=2x`,
         M`y'=\frac{2x}{x^2-1}`]),

      task(M`(2^{3x})'`,
        [M`2^{3x}\ln2`,
         M`3\cdot2^{3x}\ln2`,
         M`3\cdot2^{3x}`,
         M`6^x`],1,
        [M`u=3x`,M`u'=3`,
         M`y'=3\cdot2^{3x}\ln2`]),

      task(M`\left(\frac{\ln x}{x}\right)'`,
        [M`\frac1{x^2}`,
         M`\frac{\ln x}{x^2}`,
         M`\frac{1-\ln x}{x^2}`,
         M`\frac{1+\ln x}{x^2}`],2,
        [M`y'=\frac{x\cdot\frac1x-\ln x}{x^2}`,
         M`y'=\frac{1-\ln x}{x^2}`]),

      task(M`f(x)=e^{2x},\quad f'(0)=?`,
        [M`0`,M`1`,M`e^2`,M`2`],3,
        [M`f'(x)=2e^{2x}`,M`f'(0)=2e^0=2`])
    ]
  }
];

// =====================================
// 3 ТОПҚА 15 ОЙЫН СҰРАҒЫ
// =====================================

const quiz = [
  {
    q:"Дифференциалдау дегеніміз не?",
    a:["Интеграл табу","Туынды табу","Теңдеу шешу","Графикті бояу"],c:1
  },
  {
    q:"eˣ функциясының туындысы?",
    a:["1","x","eˣ","0"],c:2
  },
  {
    q:"ln x функциясының туындысы?",
    a:["1/x","x","eˣ","ln x"],c:0
  },
  {
    q:"2ˣ туындысында қандай қосымша көбейткіш болады?",
    a:["2","x","ln x","ln 2"],c:3
  },
  {
    q:"e³ˣ туындысын табуда ішкі өрнектің туындысы?",
    a:["1","3","x","e"],c:1
  },
  {
    q:"ln(2x+1) аргументінің туындысы?",
    a:["1","2x","2","2x+1"],c:2
  },
  {
    q:"Көбейтіндінің туындысы ережесі?",
    a:["u′v+uv′","u′v′","u+v","u/v"],c:0
  },
  {
    q:"ln x функциясының анықталу облысы?",
    a:["x<0","x=0","Барлық x","x>0"],c:3
  },
  {
    q:"ln e мәні нешеге тең?",
    a:["0","1","e","−1"],c:1
  },
  {
    q:"e⁰ мәні?",
    a:["0","e","1","2"],c:2
  },
  {
    q:"5eˣ туындысы?",
    a:["5eˣ","eˣ","5","5x"],c:0
  },
  {
    q:"ln(x²+1) ішкі өрнегінің туындысы?",
    a:["1","x²","x","2x"],c:3
  },
  {
    q:"Туынды графиктің қандай қасиетін анықтайды?",
    a:["Түсін","Жанаманың көлбеулігін","Қағаз өлшемін","Атауын"],c:1
  },
  {
    q:"x·ln x функциясының туындысы?",
    a:["ln x","x","ln x+1","1/x"],c:2
  },
  {
    q:"f(x)=e²ˣ болса, f′(0) нешеге тең?",
    a:["2","0","1","e"],c:0
  }
];

// =====================================
// ҮЙ ЖҰМЫСЫ
// =====================================

const homework = [
  {
    title:"1. Көрсеткіштік функциялар",
    text:"Берілген төрт функцияның туындысын табыңдар. Әр есепте ішкі функцияның туындысын жеке көрсетіп, соңғы жауапты ықшамдаңдар.",
    formulas:[
      M`y=4^x`,
      M`y=e^{5x}`,
      M`y=3^{2x+1}`,
      M`y=(x+2)e^x`
    ]
  },
  {
    title:"2. Логарифмдік функциялар",
    text:"Келесі функциялардың туындыларын анықтаңдар. Анықталу облысын көрсетіңдер. Соңғы есепте жанаманың теңдеуін жазыңдар.",
    formulas:[
      M`y=\ln(4x+1)`,
      M`y=\log_2(3x+2)`,
      M`y=x\ln x`,
      M`f(x)=\ln x,\qquad x_0=1`
    ]
  },
  {
    title:"3. Теориялық тапсырма",
    text:"«Көрсеткіштік және логарифмдік функциялардың туындылары» тақырыбында 8–10 сөйлем жазыңдар. Негізгі төрт формуланы түсіндіріп, бір есептің шығарылуын тақтада ауызша қорғаңдар.",
    formulas:[
      M`(e^x)'=e^x`,
      M`(\ln x)'=\frac1x`,
      M`(a^x)'=a^x\ln a`,
      M`(\log_a x)'=\frac1{x\ln a}`
    ]
  }
];

// =====================================
// 37 СЛАЙД
// =====================================

const slides = [{type:"intro",title:"Кіріспе"}];

theory.forEach((_,i)=>{
  slides.push({
    type:"theory",index:i,title:`Түсіндірме ${i+1}`
  });
});

notes.forEach((_,i)=>{
  slides.push({
    type:"note",index:i,title:`Конспект ${i+1}`
  });
});

levels.forEach((_,i)=>{
  slides.push({
    type:"level",index:i,title:`${i+1}-деңгей`
  });
});

quiz.forEach((_,i)=>{
  slides.push({
    type:"game",index:i,title:`${i%3+1}-топ • ${i+1}-сұрақ`
  });
});

slides.push(
  {type:"homework",title:"Үй жұмысы"},
  {type:"finish",title:"Қорытынды"}
);

// =====================================
// САЙТ КҮЙІ
// =====================================

let page = 0;
let individualScore = 0;
let teamScores = [0,0,0];

const completed = new Set();
const gameAnswers = new Map();

const TOTAL_SECONDS = 4800;
let remainingSeconds = TOTAL_SECONDS;
let timerID = null;
let deadline = 0;

// =====================================
// HTML ҚАУІПСІЗДІГІ
// =====================================

function safe(value) {
  return String(value).replace(/[&<>"']/g,c=>({
    "&":"&amp;",
    "<":"&lt;",
    ">":"&gt;",
    '"':"&quot;",
    "'":"&#39;"
  })[c]);
}

// =====================================
// ФОРМУЛАЛАР
// =====================================

// HTML ішіне математикалық < және >
// таңбаларын тікелей енгізбейміз.
// Алдымен мәтінді кодтаймыз.

function math(tex) {
  return `<div class="math" data-tex="${
    encodeURIComponent(String(tex))
  }"></div>`;
}

// Жауап батырмасының ішіндегі формула.
// span элементі батырма ішінде дұрыс көрсетіледі.

function answerMath(tex) {
  return `<span class="math answer-math"
    style="display:block;padding:7px 0;margin:0;border:0;
    background:transparent;text-align:left;font-size:20px"
    data-tex="${encodeURIComponent(String(tex))}">
  </span>`;
}

let formulaVersion = 0;
let formulaQueue = Promise.resolve();

function drawFormulas() {
  const version = ++formulaVersion;
  const elements = [
    ...$("content").querySelectorAll(".math[data-tex]")
  ];

  // Интернет жоқ кезде бастапқы формула
  // мәтіні жоғалып кетпейді.
  elements.forEach(el=>{
    const encoded = el.dataset.tex;
    el.textContent = decodeURIComponent(encoded);
    el.classList.add("fallback");
  });

  // MathJax көрсетілімдерін бір уақытта
  // қабаттастырмай, ретімен жүргіземіз.
  formulaQueue = formulaQueue.then(async()=>{
    if(!window.MathJax) return;
    await MathJax.startup.promise;

    if(typeof MathJax.tex2svgPromise!=="function") {
      return;
    }

    for(const el of elements) {
      if(version!==formulaVersion || !el.isConnected) {
        return;
      }

      const encoded = el.dataset.tex;
      if(!encoded)continue;

      const tex = decodeURIComponent(encoded);

      try {
        const node = await MathJax.tex2svgPromise(
          tex,{display:!el.classList.contains("answer-math")}
        );

        if(version!==formulaVersion || !el.isConnected) {
          return;
        }

        el.replaceChildren(node);
        el.classList.remove("fallback");
        el.removeAttribute("data-tex");
      } catch(error) {
        el.textContent=tex;
        el.classList.add("fallback");
        console.warn("Формула қатесі:",tex,error);
      }
    }
  }).catch(error=>{
    console.warn("MathJax қатесі:",error);
  });
}

// =====================================
// КАРТОЧКАЛАР ЖӘНЕ ШЕШУ ЖОЛЫ
// =====================================

function card(color,title,body) {
  return `<section class="card ${color}">
    <h3>${safe(title)}</h3>${body}
  </section>`;
}

function stepsHTML(steps) {
  return steps.map((item,i)=>`
    <div class="step">
      <strong>${i+1}-қадам</strong>
      ${math(item)}
    </div>
  `).join("");
}

function selfHTML(tasks,index) {
  return tasks.map((t,i)=>{
    const id=`self_${index}_${i}`;

    return `<section class="self-task">
      <h3>✏️ ${i+1}-өзіндік есеп</h3>
      ${math(t.q)}
      <p>Алдымен есепті дәптерге шығарыңдар.</p>
      <button class="action" data-toggle="${id}">
        Шешу жолын көрсету
      </button>
      <div class="solution" id="${id}" hidden>
        ${stepsHTML(t.steps)}
        <h3>Дұрыс жауап</h3>
        ${math(t.answer)}
      </div>
    </section>`;
  }).join("");
}

// =====================================
// КІРІСПЕ
// =====================================

function introHTML() {
  return `<div class="slide">
    <div class="eyebrow">
      МАТЕМАТИКА • 1 КУРС • 80 МИНУТ
    </div>

    <h1 class="gradient">
      §19. ${safe(lesson.title)}
    </h1>

    ${card("blue","Сабақтың мақсаты",`
      <p>${safe(lesson.goal)}</p>
    `)}

    ${card("gold","Көрсеткіштік функцияның туындысы",
      math(M`(a^x)'=a^x\ln a`)
    )}

    ${card("purple","Логарифмдік функцияның туындысы",
      math(M`(\log_a x)'=\frac1{x\ln a}`)
    )}

    ${card("green","Сабақ бөлімдері",`
      <p>5 теориялық түсіндірме</p>
      <p>10 конспект және 20 өзіндік есеп</p>
      <p>4 деңгейдегі 20 есеп</p>
      <p>3 топқа арналған 15 сұрақ</p>
      <p>Үй жұмысы мен қорытынды</p>
    `)}

    ${card("blue","80 минуттық жоспар",`
      <p>Кіріспе — 5 минут</p>
      <p>Түсіндірмелер — 20 минут</p>
      <p>Конспект және өзіндік жұмыс — 15 минут</p>
      <p>Деңгейлік есептер — 20 минут</p>
      <p>Топтық ойын — 15 минут</p>
      <p>Үй жұмысы және қорытынды — 5 минут</p>
    `)}
  </div>`;
}

// =====================================
// ТЕОРИЯ
// =====================================

function theoryHTML(i) {
  const t=theory[i];

  return `<div class="slide">
    <div class="eyebrow">ТҮСІНДІРМЕ ${i+1} / 5</div>
    <h2>${safe(t.title)}</h2>

    ${card("blue","Анықтама",`<p>${safe(t.definition)}</p>`)}
    ${card("purple","Толық түсіндірме",`<p>${safe(t.explain)}</p>`)}
    ${card("green","Ереже",`<p>${safe(t.rule)}</p>`)}
    ${card("gold","Формула",math(t.formula))}
    ${card("green","Шығарылған мысал",stepsHTML(t.steps))}
    ${card("red","Маңызды ескерту",`<p>${safe(t.warning)}</p>`)}
  </div>`;
}

// =====================================
// КОНСПЕКТ
// =====================================

function noteHTML(i) {
  const n=notes[i];

  return `<div class="slide">
    <div class="eyebrow">КОНСПЕКТ ${i+1}/10</div>
    <h2>${safe(n.title)}</h2>

    <div class="notebook">
      <h3>✍ Дәптерге жазып алыңдар</h3>
      <p>${safe(n.text)}</p>
    </div>

    ${card("gold","Формула",math(n.formula))}
    ${card("green","Шығарылған мысал",stepsHTML(n.example))}

    <div class="eyebrow">ӨЗІНДІК ЖҰМЫС</div>
    <h2>Екі есеп</h2>
    ${selfHTML(n.self,i)}
  </div>`;
}

// =====================================
// ДЕҢГЕЙЛІК ЕСЕПТЕР
// =====================================

function levelHTML(i) {
  const level=levels[i];

  return `<div class="slide">
    <div class="eyebrow">ДЕҢГЕЙ ${i+1}/4</div>
    <h2>📐 ${safe(level.name)}</h2>

    <div class="level-header">
      <span>5 есеп</span>
      <span>Дұрыс жауап: +${level.points} ұпай</span>
    </div>

    <p>
      Әр есептің туындысын дәптерге шығарыңдар.
      Содан кейін төрт нұсқаның ішінен
      бір дұрыс жауапты таңдаңдар.
    </p>

    <div class="level-grid">
      ${level.tasks.map((t,j)=>{
        const key=`${i}_${j}`;
        const done=completed.has(key);

        return `<section class="level-task">
          <h3>${j+1}-есеп</h3>
          ${math(t.q)}

          <div class="answers">
            ${t.choices.map((option,k)=>`
              <button data-task="${key}" data-option="${k}"
                ${done?"disabled":""}
                class="${done&&k===t.correct?"correct":""}">
                <strong>${"ABCD"[k]}.</strong>
                ${answerMath(option)}
              </button>
            `).join("")}
          </div>

          <p id="feedback_${key}"
            class="feedback ${done?"correct":""}">
            ${done?`✓ +${level.points} ұпай`:
              "Дұрыс туындыны таңдаңдар."}
          </p>

          <button class="action" data-toggle="solution_${key}">
            Шешу жолын көрсету
          </button>

          <div class="solution" id="solution_${key}" hidden>
            ${stepsHTML(t.steps)}
            <h3>Дұрыс жауап</h3>
            ${math(t.choices[t.correct])}
          </div>
        </section>`;
      }).join("")}
    </div>
  </div>`;
}

// =====================================
// ТОПТЫҚ ОЙЫН
// =====================================

function gameHTML(i) {
  const q=quiz[i];
  const team=i%3;
  const chosen=gameAnswers.get(i);

  return `<div class="slide">
    <div class="eyebrow">ТОПТЫҚ ОЙЫН ${i+1}/15</div>
    <h2>🏆 ${team+1}-топ жауап береді</h2>

    <div class="scores">
      ${teamScores.map((score,j)=>`
        <div class="team ${j===team?"current":""}">
          ${j+1}-топ <strong>${score}</strong>
        </div>
      `).join("")}
    </div>

    ${card("gold",`${i+1}-сұрақ`,`
      <p>${safe(q.q)}</p>

      <div class="answers">
        ${q.a.map((answer,k)=>{
          let cls="";
          if(chosen!==undefined) {
            if(k===q.c)cls="correct";
            else if(k===chosen)cls="wrong";
          }

          return `<button data-choice="${k}" class="${cls}"
            ${chosen!==undefined?"disabled":""}>
            ${"ABCD"[k]}. ${safe(answer)}
          </button>`;
        }).join("")}
      </div>

      <p>${chosen===undefined
        ?"Төрт жауаптың біреуін таңдаңдар."
        :chosen===q.c
          ?"✓ Дұрыс! +10 ұпай."
          :"Дұрыс жауап: "+safe(q.a[q.c])}
      </p>
    `)}

    ${card("blue","Ойын ережесі",`
      <p>Кезек: 1-топ → 2-топ → 3-топ.</p>
      <p>Дұрыс жауап: 10 ұпай.</p>
      <p>Жауап берген соң «Келесі» батырмасын басыңдар.</p>
    `)}
  </div>`;
}

// =====================================
// ҮЙ ЖҰМЫСЫ
// =====================================

function homeworkHTML() {
  return `<div class="slide">
    <div class="eyebrow">ҮЙ ТАПСЫРМАСЫ</div>
    <h2>📚 Үй жұмысы</h2>

    ${homework.map((h,i)=>card(
      ["blue","gold","green"][i],
      h.title,
      `<p>${safe(h.text)}</p>`+
      h.formulas.map(math).join("")
    )).join("")}
  </div>`;
}

// =====================================
// ҚОРЫТЫНДЫ
// =====================================

function finishHTML() {
  const maximum=Math.max(...teamScores);
  const finished=gameAnswers.size===quiz.length;

  const winners=teamScores
    .map((score,i)=>score===maximum?`${i+1}-топ`:null)
    .filter(Boolean);

  return `<div class="slide">
    <div class="eyebrow">САБАҚ ҚОРЫТЫНДЫСЫ</div>
    <h1 class="gradient">Сабақ аяқталды!</h1>

    <div class="scores">
      ${teamScores.map((score,i)=>`
        <div class="team">
          ${i+1}-топ <strong>${score}</strong>
        </div>
      `).join("")}
    </div>

    ${card("green","Командалық ойын нәтижесі",`
      <p>Жауап берілген сұрақтар: ${gameAnswers.size}/15</p>
      <p>${finished
        ?winners.join(", ")+
          (winners.length===1?" — жеңімпаз!":" — тең ұпай!")
        :"Ойын әлі толық аяқталған жоқ."}
      </p>
    `)}

    ${card("blue","Деңгейлік есептер",`
      <p>Дұрыс орындалған есептер: ${completed.size}/20</p>
      <p>Жеке ұпай: ${individualScore}</p>
    `)}

    ${card("gold","Бүгін не үйрендік?",`
      <p>Көрсеткіштік функциялардың туындыларын таптық.</p>
      <p>Логарифмдік функциялардың туындыларын есептедік.</p>
      <p>Тізбектік ережені қолдандық.</p>
      <p>Көбейтіндінің туындысын меңгердік.</p>
      <p>Жанаманың бұрыштық коэффициентін таптық.</p>
    `)}

    <h2>Сау болыңыздар!</h2>
  </div>`;
}

// =====================================
// ҰПАЙДЫ ЖАҢАРТУ
// =====================================

function updateScore() {
  $("totalScore").textContent=
    individualScore+
    teamScores.reduce((sum,v)=>sum+v,0);
}

// =====================================
// БЕТТІ КӨРСЕТУ
// =====================================

function render() {
  const slide=slides[page];

  formulaVersion++;

  const views={
    intro:()=>introHTML(),
    theory:()=>theoryHTML(slide.index),
    note:()=>noteHTML(slide.index),
    level:()=>levelHTML(slide.index),
    game:()=>gameHTML(slide.index),
    homework:()=>homeworkHTML(),
    finish:()=>finishHTML()
  };

  const content=$("content");
  content.innerHTML=views[slide.type]();
  content.scrollTop=0;

  $("pageCounter").textContent=
    `${page+1} / ${slides.length}`;

  $("pageTitle").textContent=slide.title;
  $("pageProgress").style.width=
    `${(page+1)/slides.length*100}%`;

  $("prevPage").disabled=page===0;
  $("nextPage").disabled=page===slides.length-1;

  document.querySelectorAll("[data-section]")
    .forEach(btn=>{
      btn.classList.toggle(
        "active",
        btn.dataset.section===slide.type
      );
    });

  updateScore();
  drawFormulas();
}

// =====================================
// НАВИГАЦИЯ
// =====================================

$("nextPage").addEventListener("click",()=>{
  if(page<slides.length-1) {
    page++;
    render();
  }
});

$("prevPage").addEventListener("click",()=>{
  if(page>0) {
    page--;
    render();
  }
});

document.querySelectorAll("[data-section]")
  .forEach(btn=>{
    btn.addEventListener("click",()=>{
      const index=slides.findIndex(
        s=>s.type===btn.dataset.section
      );

      if(index>=0) {
        page=index;
        render();
      }
    });
  });

// =====================================
// БАРЛЫҚ ІШКІ БАТЫРМАЛАР
// =====================================

$("content").addEventListener("click",event=>{
  const toggle=event.target.closest("[data-toggle]");

  if(toggle) {
    const element=$(toggle.dataset.toggle);
    if(element) {
      element.hidden=!element.hidden;
    }
    return;
  }

  const taskButton=event.target.closest("[data-task]");

  if(taskButton) {
    const key=taskButton.dataset.task;
    const answer=Number(taskButton.dataset.option);
    const [i,j]=key.split("_").map(Number);
    const task=levels[i].tasks[j];

    if(completed.has(key))return;

    if(answer===task.correct) {
      completed.add(key);
      individualScore+=levels[i].points;
      render();
    } else {
      $("feedback_"+key).textContent=
        "Жауап қате. Туындыны қайта есептеңдер.";
    }
    return;
  }

  const choice=event.target.closest("[data-choice]");

  if(choice) {
    const slide=slides[page];

    if(slide.type!=="game")return;
    if(gameAnswers.has(slide.index))return;

    const answer=Number(choice.dataset.choice);

    gameAnswers.set(slide.index,answer);

    if(answer===quiz[slide.index].c) {
      teamScores[slide.index%3]+=10;
    }

    render();
  }
});

// =====================================
// КОМАНДАЛЫҚ ОЙЫНДЫ ЖАҢАРТУ
// =====================================

$("resetGame").addEventListener("click",()=>{
  gameAnswers.clear();
  teamScores=[0,0,0];
  render();
});

// =====================================
// ТОЛЫҚ ЭКРАН
// =====================================

$("fullscreenBtn").addEventListener("click",async()=>{
  try {
    if(document.fullscreenElement) {
      await document.exitFullscreen();
    } else {
      await document.documentElement.requestFullscreen();
    }
  } catch(error) {
    console.warn("Толық экран қатесі:",error);
  }
});

// =====================================
// 80 МИНУТ ТАЙМЕР
// =====================================

function formatTime(seconds) {
  return String(Math.floor(seconds/60)).padStart(2,"0")+
    ":"+String(seconds%60).padStart(2,"0");
}

function updateTimer() {
  $("remaining").textContent=
    formatTime(remainingSeconds);

  $("elapsed").textContent=
    formatTime(TOTAL_SECONDS-remainingSeconds);

  $("timeProgress").style.width=
    `${(TOTAL_SECONDS-remainingSeconds)/TOTAL_SECONDS*100}%`;
}

function pauseTimer() {
  if(timerID!==null) {
    clearInterval(timerID);
    timerID=null;
  }
}

function startTimer() {
  if(timerID!==null || remainingSeconds<=0)return;

  deadline=Date.now()+remainingSeconds*1000;

  timerID=setInterval(()=>{
    remainingSeconds=Math.max(
      0,
      Math.ceil((deadline-Date.now())/1000)
    );
    updateTimer();

    if(remainingSeconds===0)pauseTimer();
  },250);
}

function resetTimer() {
  pauseTimer();
  remainingSeconds=TOTAL_SECONDS;
  updateTimer();
}

$("timerStart").addEventListener("click",startTimer);
$("timerPause").addEventListener("click",pauseTimer);
$("timerReset").addEventListener("click",resetTimer);

// =====================================
// АЛМАТЫ УАҚЫТЫ
// =====================================

function updateClock() {
  $("clock").textContent=
    new Intl.DateTimeFormat("kk-KZ",{
      timeZone:"Asia/Almaty",
      hour:"2-digit",
      minute:"2-digit",
      second:"2-digit",
      hour12:false
    }).format(new Date());
}

updateClock();
setInterval(updateClock,1000);

// =====================================
// ЕКІ КАЛЬКУЛЯТОР
// =====================================

const calcValues={basic:"",science:""};

const calcKeys={
  basic:[
    "C","⌫","(",")",
    "7","8","9","÷",
    "4","5","6","×",
    "1","2","3","−",
    "%","0",".","+",
    "="
  ],
  science:[
    "C","⌫","(",")",
    "sin","cos","tan","ctg",
    "√","∛","x²","xʸ",
    "log","ln","π","e",
    "7","8","9","÷",
    "4","5","6","×",
    "1","2","3","−",
    "%","0",".","+",
    "="
  ]
};

const calcMap={
  "×":"*","÷":"/","−":"-",
  "sin":"sin(","cos":"cos(",
  "tan":"tan(","ctg":"ctg(",
  "√":"sqrt(","∛":"cbrt(",
  "log":"log(","ln":"ln(",
  "π":"pi","x²":"^2","xʸ":"^"
};

// =====================================
// КАЛЬКУЛЯТОР БАТЫРМАЛАРЫ
// =====================================

function createCalculator(type) {
  const grid=$("keys-"+type);
  grid.replaceChildren();

  calcKeys[type].forEach(key=>{
    const button=document.createElement("button");

    button.type="button";
    button.textContent=key;

    if(key==="C")button.classList.add("clear");
    if(key==="=")button.classList.add("equal");

    if(["sin","cos","tan","ctg","log","ln"].includes(key)) {
      button.classList.add("trig");
    }

    if(["×","÷","−","+","√","∛","x²","xʸ"].includes(key)) {
      button.classList.add("op");
    }

    button.addEventListener("click",()=>{
      pressCalculator(type,key);
    });

    grid.appendChild(button);
  });
}

// =====================================
// КАЛЬКУЛЯТОРДЫ БАСҚАРУ
// =====================================

function pressCalculator(type,key) {
  let value=calcValues[type];

  if(key==="C") {
    value="";
  } else if(key==="⌫") {
    value=value==="Қате"?"":value.slice(0,-1);
  } else if(key==="=") {
    try {
      value=String(Number(calculate(value).toPrecision(12)));
    } catch(error) {
      value="Қате";
    }
  } else {
    if(value==="Қате")value="";
    value+=calcMap[key]??key;
  }

  calcValues[type]=value;

  const display=$("display-"+type);
  display.textContent=value||"0";
  display.scrollLeft=display.scrollWidth;
}

// =====================================
// ҚАУІПСІЗ ЕСЕПТЕУ ҚОЗҒАЛТҚЫШЫ
// eval() ҚОЛДАНЫЛМАЙДЫ
// =====================================

function calculate(input) {
  const source=String(input)
    .replace(/\s+/g,"")
    .replace(/,/g,".")
    .replace(/−/g,"-")
    .replace(/×/g,"*")
    .replace(/÷/g,"/");

  let pos=0;
  const rad=x=>x*Math.PI/180;

  const funcs={
    sin:x=>Math.sin(rad(x)),
    cos:x=>Math.cos(rad(x)),
    tan:x=>{
      if(Math.abs(Math.cos(rad(x)))<1e-12) {
        throw Error("tan анықталмаған");
      }
      return Math.tan(rad(x));
    },
    ctg:x=>{
      if(Math.abs(Math.sin(rad(x)))<1e-12) {
        throw Error("ctg анықталмаған");
      }
      return Math.cos(rad(x))/Math.sin(rad(x));
    },
    sqrt:x=>Math.sqrt(x),
    cbrt:x=>Math.cbrt(x),
    log:x=>Math.log10(x),
    ln:x=>Math.log(x)
  };

  function take(char) {
    if(source[pos]===char) {
      pos++;
      return true;
    }
    return false;
  }

  function atom() {
    if(take("(")) {
      const value=expression();
      if(!take(")")) {
        throw Error("Жақша жабылмаған");
      }
      return value;
    }

    const rest=source.slice(pos);
    const number=rest.match(/^(?:\d+\.?\d*|\.\d+)/);

    if(number) {
      pos+=number[0].length;
      return Number(number[0]);
    }

    for(const name of Object.keys(funcs)) {
      if(rest.startsWith(name+"(")) {
        pos+=name.length+1;
        const arg=expression();

        if(!take(")")) {
          throw Error("Жақша жабылмаған");
        }

        const result=funcs[name](arg);

        if(!Number.isFinite(result)) {
          throw Error("Функция анықталмаған");
        }
        return result;
      }
    }

    if(rest.startsWith("pi")) {
      pos+=2;
      return Math.PI;
    }

    if(rest.startsWith("e")) {
      pos++;
      return Math.E;
    }

    throw Error("Қате өрнек");
  }

  function postfix() {
    let value=atom();
    while(take("%"))value/=100;
    return value;
  }

  function power() {
    let value=postfix();

    if(take("^")) {
      value=Math.pow(value,unary());
    }

    return value;
  }

  function unary() {
    if(take("+"))return unary();
    if(take("-"))return -unary();
    return power();
  }

  function term() {
    let value=unary();

    while(true) {
      if(take("*")) {
        value*=unary();
      } else if(take("/")) {
        const divisor=unary();

        if(divisor===0) {
          throw Error("Нөлге бөлуге болмайды");
        }
        value/=divisor;
      } else {
        break;
      }
    }
    return value;
  }

  function expression() {
    let value=term();

    while(true) {
      if(take("+")) {
        value+=term();
      } else if(take("-")) {
        value-=term();
      } else {
        break;
      }
    }
    return value;
  }

  if(!source)throw Error("Бос өрнек");

  const result=expression();

  if(pos!==source.length || !Number.isFinite(result)) {
    throw Error("Есептеу қатесі");
  }

  return Math.abs(result)<1e-12?0:result;
}

// =====================================
// КАЛЬКУЛЯТОРДЫ АШУ / ЖАБУ
// =====================================

function toggleCalculator(type) {
  const element=$("calc-"+type);
  const opening=!element.classList.contains("visible");

  element.classList.toggle("visible",opening);

  if(opening) {
    const rect=element.getBoundingClientRect();
    const maxX=Math.max(0,innerWidth-element.offsetWidth);
    const maxY=Math.max(0,innerHeight-element.offsetHeight);

    element.style.left=
      Math.max(0,Math.min(maxX,rect.left))+"px";

    element.style.top=
      Math.max(0,Math.min(maxY,rect.top))+"px";
  }
}

$("basicOpen").addEventListener("click",()=>{
  toggleCalculator("basic");
});

$("scienceOpen").addEventListener("click",()=>{
  toggleCalculator("science");
});

document.querySelectorAll("[data-close]").forEach(btn=>{
  btn.addEventListener("click",()=>{
    $("calc-"+btn.dataset.close).classList.remove("visible");
  });
});

// =====================================
// КАЛЬКУЛЯТОРДЫ ЖЫЛЖЫТУ
// =====================================

function makeDraggable(element) {
  const head=element.querySelector(".calc-head");
  let drag=null;

  head.addEventListener("pointerdown",event=>{
    if(event.target.closest("button"))return;
    if(event.pointerType==="mouse"&&event.button!==0)return;

    const rect=element.getBoundingClientRect();

    drag={
      id:event.pointerId,
      x:event.clientX,
      y:event.clientY,
      left:rect.left,
      top:rect.top
    };

    head.setPointerCapture(event.pointerId);
  });

  head.addEventListener("pointermove",event=>{
    if(!drag || drag.id!==event.pointerId)return;

    const maxX=Math.max(0,innerWidth-element.offsetWidth);
    const maxY=Math.max(0,innerHeight-element.offsetHeight);

    element.style.left=Math.max(0,Math.min(
      maxX,drag.left+event.clientX-drag.x
    ))+"px";

    element.style.top=Math.max(0,Math.min(
      maxY,drag.top+event.clientY-drag.y
    ))+"px";
  });

  head.addEventListener("pointerup",()=>drag=null);
  head.addEventListener("pointercancel",()=>drag=null);
}

// =====================================
// БАСЫПҚЫ ТЕКСЕРУЛЕР
// =====================================

function runChecks() {
  function test(value,message) {
    if(!value)throw new Error(message);
  }

  test(theory.length===5,"Теория саны қате");
  test(notes.length===10,"Конспект саны қате");
  test(notes.every(n=>n.self.length===2),
    "Әр конспектте екі есеп болуы керек");

  test(levels.length===4,"Деңгей саны қате");
  test(levels.every(l=>l.tasks.length===5),
    "Әр деңгейде бес есеп болуы керек");

  test(quiz.length===15,"Ойын сұрақтары 15 болуы керек");
  test(slides.length===37,"Слайд саны 37 болуы керек");

  levels.forEach((level,i)=>{
    level.tasks.forEach((t,j)=>{
      test(t.choices.length===4,
        `${i+1}-деңгей, ${j+1}-есеп: жауап саны қате`);

      test(Number.isInteger(t.correct)&&
        t.correct>=0&&t.correct<4,
        `${i+1}-деңгей, ${j+1}-есеп: дұрыс жауап индексі қате`);
    });
  });

  quiz.forEach((q,i)=>{
    test(q.a.length===4&&q.c>=0&&q.c<4,
      `${i+1}-ойын сұрағы қате`);
  });

  test(calculate("2^5")===32,"Дәреже қатесі");
  test(calculate("log(100)")===2,"Логарифм қатесі");
  test(calculate("ln(e)")===1,"ln қатесі");
  test(calculate("1/2")===0.5,"Бөлшек қатесі");
  test(calculate("2^3+4")===12,"Амал реті қатесі");
  test(Math.abs(calculate("sin(30)")-0.5)<1e-10,
    "Тригонометрия қатесі");

  const formulas=[
    ...theory.flatMap(t=>[t.formula,...t.steps]),
    ...notes.flatMap(n=>[
      n.formula,...n.example,
      ...n.self.flatMap(s=>[s.q,...s.steps,s.answer])
    ]),
    ...levels.flatMap(l=>l.tasks.flatMap(t=>[
      t.q,...t.choices,...t.steps
    ])),
    ...homework.flatMap(h=>h.formulas)
  ];

  test(formulas.every(f=>!f.includes("\\boxed")),
    "Формулада бос төртбұрыш командасы бар");

  test(formulas.every(f=>typeof f==="string"),
    "Формула мәтіні қате");

  console.log("§19: бастапқы құрылымдық тексерулер сәтті.");
}

// =====================================
// САЙТТЫ ІСКЕ ҚОСУ
// =====================================

runChecks();

createCalculator("basic");
createCalculator("science");

makeDraggable($("calc-basic"));
makeDraggable($("calc-science"));

updateTimer();
render();
