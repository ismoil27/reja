const moment = require("moment");

const timeFormat = moment().format("HH:mm");
// console.log(timeFormat);

class Shop {
  constructor(non, lagmon, cola) {
    this.non = non;
    this.lagmon = lagmon;
    this.cola = cola;
  }

  qoldiq() {
    console.log(
      `Hozir ${timeFormat} da ${this.non}ta non, ${this.lagmon}ta lag'mon va ${this.cola}ta cola mavjud!  `
    );
  }

  sotish(a, b) {
    if (a == "non") {
      console.log(`Sotuv amalga oshirildi. ${b}ta ${a} sotildi `);

      return (this.non = this.non - b);
    } else if (a == "lagmon") {
      console.log(`Sotuv amalga oshirildi. ${b}ta ${a} sotildi `);

      return (this.lagmon = this.lagmon - b);
    } else if (a == "cola") {
      console.log(`Sotuv amalga oshirildi. ${b}ta ${a} sotildi `);

      return (this.cola = this.cola - b);
    } else {
      console.log(`To'g'ri malumot kiriting`);
    }
  }

  qabul(a, b) {
    if (a == "non") {
      console.log(`Harid amalga oshirildi. ${b}ta ${a} qabul qilindi `);

      return (this.non = this.non + b);
    } else if (a == "lagmon") {
      console.log(`Harid amalga oshirildi. ${b}ta ${a}  qabul qilindi `);

      return (this.lagmon = this.lagmon + b);
    } else if (a == "cola") {
      console.log(`Harid amalga oshirildi. ${b}ta ${a}  qabul qilindi `);

      return (this.cola = this.cola + b);
    } else {
      console.log(`To'g'ri malumot kiriting`);
    }
  }
}

const shop = new Shop(4, 5, 2);
shop.sotish("non", 3);
shop.qabul("non", 5);
shop.qoldiq();
