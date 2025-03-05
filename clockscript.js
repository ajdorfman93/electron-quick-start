/**************************************************/
/*            Digital EST Clock Script            */
/**************************************************/
function updateESTClock() {
    const now = new Date();
    // Convert 'now' to EST
    const estOptions = { timeZone: 'America/New_York', hour12: false };
    const estString = now.toLocaleString('en-US', estOptions);
    const estDate = new Date(estString);
  
    // Format as HH:mm:ss
    const hours = String(estDate.getHours()).padStart(2, '0');
    const minutes = String(estDate.getMinutes()).padStart(2, '0');
    const seconds = String(estDate.getSeconds()).padStart(2, '0');
    
    const estClockEl = document.getElementById('estClock');
    if (estClockEl) {
      estClockEl.textContent = `${hours}:${minutes}:${seconds}`;
    }
  }
  
  // Immediately call, then repeat every second
  updateESTClock();
  setInterval(updateESTClock, 1000);
  
  
  /**************************************************/
  /*              Analog Clock Script               */
  /**************************************************/
  const HOURARM = document.getElementById("hour");
  const MINARM = document.getElementById("minute");
  const SECARM = document.getElementById("second");
  
  if (HOURARM && MINARM && SECARM) {
    let hrPosition;
    let minPosition;
    let secPosition;
  
    // Initialize from current time
    const date = new Date();
    const hour = date.getHours();
    const min = date.getMinutes();
    const sec = date.getSeconds();
  
    secPosition = (360 / 60) * sec;
    minPosition = (360 / 60) * min + secPosition / 60;
    hrPosition = (360 / 12) * hour + minPosition / 12;
  
    // Update arms every second
    setInterval(() => {
      hrPosition += 3 / 360; // hour hand moves 0.5 deg per minute, ~0.0083 deg/s
      minPosition += 6 / 60; // minute hand moves 6 deg per minute, 0.1 deg/s
      secPosition += 6;      // second hand moves 6 deg per second
  
      HOURARM.style.transform = "rotate(" + hrPosition + "deg)";
      MINARM.style.transform = "rotate(" + minPosition + "deg)";
      SECARM.style.transform = "rotate(" + secPosition + "deg)";
    }, 1000);
  }
  