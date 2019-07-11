function formatTime (minutes) {
  let d = Math.floor( minutes / (24 * 60)),
      h = Math.floor((minutes % (24 * 60)) / 60),
      m = Math.floor(( minutes % (24 * 60)) % 60);
  
  let result = `${d} day{s} ${h} hours{s} ${m} minute(s)`;
      return result;
}

formatTime(44567); //30 day{s} 22 hours{s} 47 minute(s)
formatTime(6654); //4 day{s} 14 hours{s} 54 minute(s)
formatTime(665); //0 day{s} 11 hours{s} 5 minute(s)