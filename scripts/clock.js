// Function to update Indian time
function updateIndianTime() {
    const options = {
        timeZone: 'Asia/Kolkata',
        hour12: true,
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };
    
    const indianTime = new Date().toLocaleString('en-IN', options);
    
    // Update both clocks on the pages
    const indianClockElement = document.getElementById('indianClock');
    const currentTimeElement = document.getElementById('currentTime');
    
    if (indianClockElement) {
        indianClockElement.textContent = indianTime;
    }
    
    if (currentTimeElement) {
        currentTimeElement.textContent = indianTime;
    }
}

// Update time immediately and then every second
updateIndianTime();
setInterval(updateIndianTime, 1000);
