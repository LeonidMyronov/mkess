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

  getLicenses() {
    return this.licenses;
  }


}