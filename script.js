const ipList = {
  "123.123.123.123": "Ayush",
  "111.222.333.444": "Rahul"
};

async function getUserIP() {
  const response = await fetch('https://api.ipify.org?format=json');
  const data = await response.json();
  return data.ip;
}

async function greetUser() {
  const userIP = await getUserIP();
  const name = ipList[userIP] || "Guest";
  document.getElementById('greeting').innerText = `Hi ${name}!`;
}

function simulateMultiplier() {
  const randomMultiplier = (Math.random() * (5 - 1) + 1).toFixed(2);
  document.getElementById('multiplier').innerText = `Multiplier: x${randomMultiplier}`;
}

let timerInterval;

document.getElementById('startButton').addEventListener('click', function() {
  document.getElementById('countdown').classList.remove('hidden');
  
  let timeLeft = 10;
  document.getElementById('timer').innerText = timeLeft;
  
  clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    timeLeft--;
    document.getElementById('timer').innerText = timeLeft;
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
    }
  }, 1000);
});

greetUser();
setInterval(simulateMultiplier, 2000);
