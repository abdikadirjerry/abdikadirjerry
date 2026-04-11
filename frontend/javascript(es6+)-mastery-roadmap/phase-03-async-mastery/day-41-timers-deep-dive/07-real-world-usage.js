// 07-real-world-usage.js

// Example: Polling API every 3 seconds

let attempts = 0;

const poll = setInterval(() => {
  attempts++;
  console.log(`Checking data... attempt ${attempts}`);

  if (attempts === 5) {
    console.log("Data received ✅");
    clearInterval(poll);
  }
}, 3000);

/*
🧠 Real Uses:
- API polling
- Live updates
- Notifications
- Auto-save
*/
