const formatTime = (x) => {
    let d = Math.floor( x / (24 * 60)),
        h = Math.floor((x % (24 * 60)) / 60),
        m = Math.floor(( x % (24 * 60)) % 60);
  
    let result = `${d} day{s} ${h} hours{s} ${m} minute(s)`;
    return result;
  }
  
  formatTime(44567);
  formatTime(6654);
  formatTime(665);
  