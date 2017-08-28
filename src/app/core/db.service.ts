export class DbService {
  private licenses = [
    {
        name: "ЛІЦЕНЗІЯ №13-Л",
        url: "assets/images/license/license.jpg",
        description: "ДЕРЖАВНА АРХІТЕКТУРНО-БУДІВЕЛЬНА ІНСПЕКЦИЯ УКРАЇНИ"
    },
    {
      name: "ДОДАТОК ДО ЛІЦЕНЗІЇ, РЕЄСТРАЦІЙНИЙ ЗАПИС №2013026522",
      url: "assets/images/license/perelik.jpg",
      description: "Перелік видів робіт провадження господарської діяльності з будивництва об'єктів IV і V категорії складності"
    },
    {
      name: "ДОЗВІЛ №104.16.51",
      url: "assets/images/license/dozvil.jpg",
      description: "ДЕРЖАВНА СЛУЖБА УКРАЇНИ З ПИТАНЬ ПРАЦІ"
    },
    {
      name: "ДОЗВІЛ на початок виконання робіт підвищеної небезпеки №453.09.51-45.21.4",
      url: "assets/images/license/dozvil2.jpg",
      description: "ДЕРЖАВНИЙ КОМІТЕТ УКРАЇНИ З ПРОМИСЛОВОЇ БЕЗПЕКИБ ОХОРОНИ ПРАЦІ ТА ГІРНИЧОГО НАГЛЯДУ"
    },
    {
      name: "ЛІЦЕНЗІЯ №489430",
      url: "assets/images/license/license2.jpg",
      description: "ДЕРЖАВНА АРХІТЕКТУРНО-БУДІВЕЛЬНА ІНСПЕКЦИЯ УКРАЇНИ"
    },
    {
      name: "ДОДАТОК ДО ЛІЦЕНЗІЇ, АВ №489430",
      url: "assets/images/license/license2_1.jpg",
      description: "Перелік робіт провадження господарської діяльності, пов'язаної із створенням об'єктів архітектури"
    },
    {
      name: "ДОДАТОК ДО ЛІЦЕНЗІЇ, АВ №489430",
      url: "assets/images/license/license2_2.jpg",
      description: "ЗМІНИ (ДОПОВНЕННЯ)до переліку робіт провадження господарської діяльності, пов'язаної із створенням об'єктів архітектури"
    }
  ];

  private energyServices = [
    {
      name: "Проектирование",
      url: "project",
      image_url: "assets/images/services/services_proj.jpg",
      description: [
          "ООО «МК Электросетьстрой» выполняет полный комплекс услуг по проектированию объектов электроэнергетики классом напряжения до 330 кВ включительно"
      ],
      detailedDescriptions: [
          "Высокая квалификация инженеров проектировщиков и опыт работы с применением современных программных комплексов САПР на этапе проектирования позволяют оптимизировать технологические решения в части электрических сетей, повысить эффективность управления процессами проектирования и сократить сроки проектирования.",
          "ООО «МК Электросетьстрой» готово выполнить следующие виды работ:"
      ],
      titledWorksList: [
        {
          title: "Проектирование сетей внешнего электроснабжения",
          worksList: [
            "разработка технико-экономического обоснования внешнего электроснабжения как новых объектов гражданского и промышленного строительства, так и увеличение потребляемой мощности действующих предприятий",
            "разработка технико-экономического обоснования схемы выдачи мощности ВЭС, СЭС и комбинированные электростанции мощностью от 5 МВт и выше",
            "выполнение инженерно-изыскательских работ",
            "проектирование трансформаторных подстанций, распределительных пунктов классом напряжения 0,4 – 20 кВ",
            "двухстадийное проектирование модернизации, реконструкции и строительства подстанций классом напряжения 35 – 330 кВ",
            "проектирование линейных сооружений и инженерных сетей ( воздушные линии электропередач 0,4 – 330 кВ, кабельные линии до 110 кВ включительно, уличное освещение, линии связи и др.)",
            "согласование проектно-сметной документации со всеми заинтересованными организациями",
            "получение положительного заключения проектируемых объектов в органах экспертизы",
            "ведение авторского и технического надзора за строительством"
          ]
        },
        {
          title: "Проектирование сетей внутреннего элекроснабжения",
          worksList: [
            "проектирование сетей внутреннего электроснабжения жилых многоквартирных, отдельно стоящих (частных) домов, промышленных цехов, складов, торговых павильонов и тд.",
            "специальное проектирование систем внутреннего электроснабжения для применения соответствующего тарифа в энергоснабжающих организациях (например тарифа «электроотопление»)"
          ]
        }
      ],
      worksList: [],
      cssClass: "service_proj"
    },
    {
      name: "Строительно-монтажные работы",
      url: "smu",
      image_url: "assets/images/services/services_smu.jpg",
      description: [
        "Производственный участок ООО «МК Электросетьстрой» поможет Вам качественно выполнить широкий спектр строительно-монтажных работ. Благодаря слаженной работе всех структурных единиц нашей компании Вы сможете в сжатые сроки реализовать свои планы по выполнению всех видов работ"
      ],
      detailedDescriptions: [
        "Производственный участок ООО «МК Электросетьстрой» поможет Вам качественно выполнить широкий спектр строительно-монтажных работ. Благодаря слаженной работе всех структурных единиц нашей компании Вы сможете в сжатые сроки реализовать свои планы по выполнению всех видов работ:"
      ],
      titledWorksList: [],
      worksList: [
        "монтаж трансформаторных подстанций для временного и постоянного электроснабжения классом напряжения до 35 кВ включительно",
        "траншейная и бестраншейная прокладка силовых кабелей",
        "строительство и монтаж воздушных линий электропередач",
        "сборку и монтаж главных распределительных щитов и электрощитового оборудования",
        "строительство и монтаж линий уличного освещения",
        "монтаж заземлений и молниезащиты",
        "монтаж внутрицеховых и внутридомовых сетей",
      ],
      cssClass: "service_smu"
    },

    {
      name: "Пусконаладочные работы",
      url: "pnr",
      image_url: "assets/images/services/services_pnr.jpg",
      description: [
        "Пусконаладочные работы - это комплекс технических мероприятий, начиная от рассмотрения проектной документации, анализа принятых проектом технологических решений, на соответствие действующим нормам и правилам, и заканчивая вводом данного производства в эксплуатацию"
      ],
      detailedDescriptions: [
            "Пусконаладочные работы - это комплекс технических мероприятий, начиная от рассмотрения проектной документации, анализа принятых проектом технологических решений, на соответствие действующим нормам и правилам, и заканчивая вводом данного производства в эксплуатацию. Целью проведения пусконаладочных работ является безаварийный и безопасный пуск производства и ввод его в эксплуатацию, а так же вывод производства на проектные показатели.",
            "К пусконаладочным работам относится комплекс работ, выполняемых в период подготовки и проведения индивидуальных испытаний и комплексного опробования оборудования.",
            "Под периодом индивидуальных испытаний понимается период, включающий монтажные и пусконаладочные работы, обеспечивающие выполнение требований, предусмотренных рабочей документацией, стандартами и техническими условиями, необходимыми для проведения индивидуальных испытаний отдельных машин, механизмов и агрегатов с целью подготовки оборудования к приемке рабочей комиссией для комплексного опробования.",
            "Под периодом комплексного опробования оборудования понимается период, включающий пусконаладочные работы, выполняемые после приемки оборудования рабочей комиссией для комплексного опробования, и проведение самого комплексного опробования до приемки объекта в эксплуатацию государственной приемочной комиссией.",
            "Сложность пусконаладочных работ обуславливается в первую очередь непредсказуемостью возникающих перед персоналом проблем, решение которых требует как значительных интеллектуальных затрат и слаженности действий, мгновенного принятия оптимальных решений, так и опыта проведения пусконаладочных операций.",
      ],
      titledWorksList: [],
      worksList: [],
      cssClass: "service_pnr"
    },

    {
      name: "Консалтинговые услуги",
      url: "consult",
      image_url: "assets/images/services/services_consult.jpg",
      description: [
        "Специалисты ООО «МК Электросетьстрой» помогут Вам быть более уверенными в получении исчерпывающей информации по изменениям в нормативно-правовой базе и ценообразованию в электроэнергетической сфере"
      ],
      detailedDescriptions: [
        "Специалисты ООО «МК Электросетьстрой» помогут Вам быть более уверенными в получении исчерпывающей информации по изменениям в нормативно-правовой базе и ценообразованию в электроэнергетической сфере. А именно:"
      ],
      titledWorksList: [],
      worksList: [
        "осуществление контроля за действиями Поставщика электроэнергии",
        "получение сводных отчетов по расчетам за электрическую энергию, а также их формирование",
        "комплексное обслуживание промышленных предприятий, которые в своем электрохозяйстве объединяют множество субъектов предпринимательской деятельности и юридических лиц с различными профилями деятельности",
        "структуризация процесса покупки электрической энергии (мощности) на всех этапах",
        "разработка планов и проектов оптимизации электрохозяйства"
      ],
      cssClass: "service_consult"
    }
  ];

  private homeMenu = [
    {
      name: "О нас",
      url: "about-us",
      content: [
        "Деятельность ООО \"МК Электросетьстрой\" направлена на оказание помощи частным лицам и коммерческим структурам в обеспечении энергетики, пожарной и техногенной безопасности, выявлении проблемных моментов и разработке нормативно-обоснованных экономически выгодных путей решения проблем.",
        "Мы работаем во всех регионах Украины.",
        "В нашей организации сосредоточены опытные специалисты высокого профессионального уровня, постоянно повышающие свою квалификацию и передающие опыт молодому поколению.",
        "Выбрав нашу компанию, Вы получаете максимальное соотношение цены и качества в сочетании с функциональностью и надежностью предоставляемых нами услуг, реализованных в максимально короткие сроки.",
        "Мы готовы рассмотреть ваши вопросы по пожарной и техногенной безопасности и предложить экономически эффективный вариант их решения!"
      ]
    },
    {
      name: "Зачем мы нужны",
      url: "who-we-are",
      content: [
        "Необходимость в наших услугах не продиктована нормативными правовыми актами. Необходимость в наших услугах продиктована здравым смыслом. Мы — организация, позволяющая Вам подойти к решению вопросов энергетики, пожарной и техногенной безопасности с компетентным подходом для достижения экономической эффективности.",
        "ООО \"МК Электросетьстрой\" профессионально занимается вопросами энергетики, пожарной и техногенной безопасности и мы четко знаем, что присутствие нашего специалиста во время проверки ведения Вашей хозяйственной деятельности упредит возникновение у представителей надзорного органа необоснованных (завышенных) требований.",
        "Такие требования могут попасть в предписание надзорного органа (государственного пожарного и техногенного надзора) и содержат перечень мероприятий, обязательных к выполнению Вами (собственником или арендатором объекта защиты).",
       "В результате выполнения необоснованных (завышенных) требований надзорного органа Ваша организация может столкнуться с очень серьёзными материальными затратами на выполнение этих требований, поэтому мы рекомендуем привлечь специалистов нашей компании, которые проведут оценку действий инспектора государственного пожарного и техногенного надзора и дадут Вам квалифицированный отчет не только о правомерности но и объективности при проверки.",
        "Поверьте, с нами будет дешевле!"
      ]
    },
    {
      name: "Как мы работаем",
      url: "how-we-work",
      content: [
        "Предлагая и реализуя для своих клиентов экономически эффективные пути решения проблем энергетики, пожарной и техногенной безопасности, мы берем на себя ответственность за выполняемые услуги, что ведет к существенной экономии средств клиента.",
        "Мы можем освободить Вас от головной боли общения с инспектором государственного пожарного и техногенного надзора, проанализировать его требования и выдать нормативно-обоснованный и эффективный механизм выполнения требований надзорного органа.",
        "Интеллектуальный ресурс и техническая база нашей организации позволяет оказывать услуги на самом высоком уровне, проводить необходимые экспертизы и исследования, испытания и готовить по их результатам компетентные заключения.",
        "Мы можем организовать эффективную систему защиты Вашего объекта от пожаров, одновременно решая и вопросы в области проектирования объекта и вопросы в области монтажа и вопросы в области эксплуатации противопожарных систем.",
        "Мы можем доказать Вам, что затраты на пожарную безопасность могут быть не так велики и поручая решение этих вопросов нам Вы можете быть уверены, что к Вам не будут предъявляться необоснованные (завышенные) требования со стороны надзорного органа."
      ]
    }
  ];

  private fireSafetyServices = [
    {
      name: "Разработка документации предприятия по обеспечению пожарной и техногенной безопасности",
      url: "fire-safety-documentation-developing",
      imageUrl:"assets/images/fire-safety/fire-safety-documentation-developing_2.jpg",
      description: [
        "Проектая группа ООО «МК Электросетьстрой» поможет Вам в разработке документации по обеспечению пожарной и техногенной безопасности и выполнит все необходимые работы"
      ],
      titledList: [
        {
          title: "Приказы по организации обеспечения пожарной и техногенной безопасности на предприятии",
          subtitle: "В соответствии с требованиями:",
          documentList: [
            {
              documentReference: "абз.3 ч.1 ст.5 Закона Украины «О пожарной безопасности»",
              documentDescription: "собственники предприятий, учреждений и организаций, или уполномочены ими органы, а также арендаторы обязаны в соответствии с нормативными актами по пожарной безопасности разрабатывать и утверждать положения, инструкции, другие нормативные акты, которые действуют на территории предприятия, учреждения и организации, осуществлять постоянный контроль за их выполнением."
            }
          ]
        },
        {
          title: "Инструкции по пожарной и техногенной безопасности",
          subtitle: "В соответствии с требованиями:",
          documentList: [
            {
              documentReference: "п.3.3. разд.3. НАПБ А.01.001-2004",
              documentDescription: "«Правила пожарной безопасности в Украине» на каждом предприятии с учетом его пожарной опасности приказом (инструкцией) должен быть установлен соответствующий противопожарный режим"
            }
          ]
        },
        {
          title: "Журналы учета огнетушителей, инструктажей, пожарных кранов, отработки плана эвакуации",
          subtitle: "В соответствии с требованиями:",
          documentList: [
            {
              documentReference: "п.3.5. разд.3 НАПБ Б.01.008-2004. «Правил эксплуатации огнетушителей»",
              documentDescription: "лицо, ответственное за пожарную безопасность на объекте, должно оформить журнал учета огнетушителей на объекте (приложение 2)"
            }
          ]
        },
        {
          title: "Программы инструктажей (вводный, первичный, повторный, целевой, внеплановый)",
          subtitle: "В соответствии с требованиями:",
          documentList: [
            {
              documentReference: "абз.3. п.2.2. разд.2 НАПБ Б.02.005-2003",
              documentDescription: "программа для проведения вступительного противопожарного инструктажа утверждается руководителем (заместителем, главным инженером) предприятия."
            },
            {
              documentReference: "абз.3. п.2.3. разд.2 НАПБ Б.02.005-2003",
              documentDescription: "программа проведения первичного противопожарного инструктажа утверждается руководителем соответствующего структурного подразделения (начальником цеха, отдела, и т.п.), ответственным за противопожарное состояние, или руководителем предприятия (его заместителем)."
            }
          ]
        },
        {
          title: "Идентификация потенциально опасных объектов и объектов повышенной опасности",
          subtitle: "В соответствии с требованиями:",
          documentList: [
            {
              documentReference: "ч.1 ст.9 Закона Украины «Об объектах повышенной опасности»",
              documentDescription: "субъект хозяйственной деятельности идентифицирует объекты повышенной опасности в соответствии с количеством пороговой массы опасных веществ."
            }
          ]
        },
        {
          title: "Составление декларации безопасности объектов повышенной опасности",
          subtitle: "В соответствии с требованиями:",
          documentList: [
            {
              documentReference: "ч.1 ст. 10 Закона Украины «Об объектах повышенной опасности»",
              documentDescription: "субъект хозяйственной деятельности готовит и подает в местные органы исполнительной власти декларацию безопасности объекта повышенной опасности."
            }
          ]
        },
        {
          title: "Составление декларации соответствия объекта требованиям законодательства по пожарной безопасности",
          subtitle: "В соответствии с требованиями:",
          documentList: [
            {
              documentReference: "ч.8 ст.10 Закона Украины «О пожарной безопасности»",
              documentDescription: "начало работы новообразованных предприятий, внедрения новых технологий, передача для производства образцов новых пожароопасных машин, механизмов, оборудования и продукции, аренда каких-либо помещений осуществляются после выдачи соответствующего разрешения органом государственного пожарного надзора, кроме случаев осуществления хозяйственной деятельности или видов хозяйственной деятельности на основании декларации соответствия материально-технической базы требованиям законодательства."
            }
          ]
        },
        {
          title: "Составление и разработка иной документации, предусмотренной нормативно-правовыми актами МЧС, Гостехногенбезопасности и законодательством Украины",
          subtitle: "В соответствии с требованиями:",
          documentList: [
            {
              documentReference: "",
              documentDescription: "Нормативно-техническими документами и действующим законодательством Украины в сфере пожарной и техногенной безопасности устанавливаются обязательные к выполнению требования по разработке иной документации в зависимости от функционального назначения объекта и вида хозяйственной деятельности."
            }
          ]
        }
      ],
      cssClass: ""
    },
    {
      name: "Выполнение расчетов по пожарной и техногенной безопасности",
      url: "fire-safety-calculation",
      imageUrl:"assets/images/fire-safety/fire-safety-calculation.jpg",
      description: [
        "Расчетно-проектая группа ООО «МК Электросетьстрой», основываясь на полной нормативной базе, выполнит все необходимые расчеты по обеспечению пожарной и техногенной безопасности"
      ],
      worksList: [
        "Расчет категорий помещений, зданий, наружных установок по взрывопожарной и пожарной опасности",
        "Расчет интенсивности теплового излучения",
        "Расчет расстояний (размеров) ограниченных нижним концентрационным пределом распространения пламени (НКПР) в помещении, вблизи наружных установок и определение класса зон",
        "Расчет уровня обеспечения пожарной безопасности людей",
        "Расчет необходимого времени эвакуации людей из помещений при пожаре",
        "Расчет сил и средств, необходимых для тушения пожаров, в зданиях и на территориях различного назначения",
        "Расчет нормативного запаса воды для целей внутреннего и наружного пожаротушения"
      ]

    },
    {
      name: "Нормативно-правовое обоснование минимизации затрат на выполнение требований пожарной и техногенной безопасности",
      url: "fire-safety-arguments",
      imageUrl:"assets/images/fire-safety/fire-safety-arguments.jpg",
      description: [
        "Специалисты ООО «МК Электросетьстрой», основываясь на финансово-правовой базе, предоставят Вам всю необходимую информацию для сокращения Ваших затрат в реализации пожарной и техногенной безопасности предприятия"
      ],
      worksList: [
        "Оценка, согласно утвержденных критериев, степени риска от осуществления хозяйственной деятельности для определения периодичности осуществления плановых мероприятий государственного надзора (контроля) по техногенной и пожарной безопасности",
        "Обоснование типа и необходимого количества огнетушителей для защиты объекта согласно нормативно-правовых актов в области пожарной безопасности",
        "Обоснование необходимости применения автоматических установок пожарной сигнализации и пожаротушения, внутреннего противопожарного водопровода, системы молниезащиты"
      ]
    },
    {
      name: "Защита законных прав субъектов хозяйствования",
      url: "fire-safety-rights-defense",
      imageUrl:"assets/images/fire-safety/fire-safety-rights-defense.jpg",
      description: [
        "Специалисты ООО «МК Электросетьстрой» окажут свою профессиональную юридическую помощь в защите Ваших интересов и законных прав"
      ],
      worksList: [
        "Представление интересов субъектов хозяйствования в органах государственного надзора (контроля) по пожарной и техногенной безопасности, суде",
        "Консультации в области обеспечения противопожарной защиты объектов промышленного и гражданского назначения"
      ]
    }
      ];

  getHomeMenu() {
    return this.homeMenu;
  }

  getHomeMenuByUrl(url: string) {
    return this.homeMenu.find( item =>  url == item.url);
  }

  getLicenses() {
    return this.licenses;
  }

  getEnergyServices() {
    return this.energyServices;
  }

  getEnergyServicesTitles(): any[] {
    return this.energyServices.map(service => {
      return {name: service.name, url: service.url}
    });
  }

  getEnergyServiceByName(name: string) {
    return this.energyServices.find( item =>  name == item.name);
  }

  getFireSafetyServices() {
    return this.fireSafetyServices;
  }

  getFireSafetyServicesTitles():any[] {
    return this.fireSafetyServices.map(service => {
      return {name: service.name, url: service.url}
    })
  }

  getFireSafetyServiceByUrl(urlName: string) {
    return this.fireSafetyServices.find( item =>  urlName == item.url);
  }

}