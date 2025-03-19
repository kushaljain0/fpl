function drawCalendar(year, month) {
    const monthNames = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
  
    let firstDay = new Date(year, month - 1, 1).getDay();
    let lastDay = new Date(year, month, 0).getDate();
    
    let calendar = `${monthNames[month - 1]} ${year}\nMo Tu We Th Fr Sa Su\n`;
    
    let days = Array.from({ length: lastDay }, (_, i) => i + 1);
    let offset = firstDay === 0 ? 6 : firstDay - 1;
    
    let week = new Array(offset).fill("  ").concat(days.map(d => (d < 10 ? " " : "") + d));
    
    while (week.length) {
      calendar += week.splice(0, 7).join(" ") + "\n";
    }
    
    return calendar;
  }
  
  module.exports = { drawCalendar };