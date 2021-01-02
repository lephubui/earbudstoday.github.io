// DOM Elements
const time = document.getElementById('time'),
      greeting = document.getElementById('greeting'),
      name = document.getElementById('name'),
      focus = document.getElementById('focus');

// Show Time
function showTime() {
    let today = new Date(),
        hour = today.getHours(),
        min = today.getMinutes(),
        sec = today.getSeconds();

    // Set AM or PM
    const amPm = hour >=12 ? 'PM' : 'AM';

    // 12 hr Format
    hour = hour % 12 || 12;

    // Output Time
    time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}`;

    setTimeout(showTime, 1000);
    
}

// Set Background and Greeting
function setBgGreet() {
    let today = new Date(),
        hour = today.getHours();

    if(hour < 12) {
      // Morning
      document.body.style.backgroundImage="url('../node_code/img/morning-img.jpg')";
      greeting.textContent = 'Good Morning, ';
    } else if (hour < 18){
      //After noon
      document.body.style.backgroundImage="url('../img/morning-img.jpg')";
      greeting.textContent = 'Good Afternoon, ';
      document.body.style.color = 'black';

    } else {
       //  Evening and Night
      document.body.style.backgroundImage="url('../node_code/img/night-img.jpg')";
      greeting.textContent = 'Good Evening and Night, ';
      document.body.style.color = 'white';
    }
}
// Add Zero
function addZero(n) {
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
}
// Run
showTime();
setBgGreet();