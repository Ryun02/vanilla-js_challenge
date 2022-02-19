const clockText = document.querySelector(".clock");

function clock() {
    const date = new Date();
    const todayHours = String(date.getHours()).padStart(2,'0');
    const todayMinutes = String(date.getMinutes()).padStart(2,'0');
    
    if (parseInt(todayHours) < 13) {
        clockText.innerHTML = `AM ${todayHours}:${todayMinutes}`;
    } else {
        const overHours = String(date.getHours() - 12).padStart(2, '0');
        clockText.innerHTML = `PM ${overHours}:${todayMinutes}`;
    }
    
}

clock();
setInterval(clock, 1000);