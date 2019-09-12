class User {
  constructor(name, orderTotalPrice, weekendDiscount, nightDiscount, bonus) {
    this.name = name;
    this.orderTotalPrice = orderTotalPrice;
    this.weekendDiscount = weekendDiscount;
    this.nightDiscount = nightDiscount;
    this.bonus = bonus || null;
  }

  makeOrder() {
    return `Price after discount and including bonuses is (${this.orderTotalPrice} uah)`;
  }
}

function getDiscount(user) {
  let date = new Date(),
    hours = date.getHours(),
    day = date.getDay();

  if (hours >= 23 || hours <= 6) {
    user.orderTotalPrice -= user.nightDiscount;
  }

  if (day > 5) {
    user.orderTotalPrice -= user.weekendDiscount;
  }
}

function setBonus(user) {
  let bonus = user.orderTotalPrice / 100;
  user.bonus += bonus * 5;
  user.orderTotalPrice -= user.bonus;
}

const user = new User("Ashton", 150, 20, 10);
setBonus(user);
getDiscount(user);
console.log(user.makeOrder());