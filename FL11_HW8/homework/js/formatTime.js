const reverseNumber = (x) => {
    let d = Math.floor( x / (24 * 60)),
        h = Math.floor((x % (24 * 60)) / 60),
        m = Math.floor(( x % (24 * 60)) % 60);
  
    let result = `${d} day{s} ${h} hours{s} ${m} minute(s)`;
    return result;
  }
  
  reverseNumber(44567);
  reverseNumber(6654);
  reverseNumber(665);
  