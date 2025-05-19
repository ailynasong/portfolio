document.querySelectorAll(".job-title").forEach(title => {
  title.style.cursor = "pointer";

  title.addEventListener("click", () => {
    const details = title.nextElementSibling;

    const isHidden = details.style.display === "none" || details.style.display === "";
    
    details.style.display = isHidden ? "block" : "none";

    title.classList.toggle("open", isHidden);
  });
});

const dayGreeting = document.getElementById("dayGreeting");
const body = document.body;

const days = [
  "Sunday 🛋️",
  "Monday 💼",
  "Tuesday ✨",
  "Wednesday 🧠",
  "Thursday 💫",
  "Friday 🌸",
  "Saturday ☀️"
];

const colors = [
  "#fce4ec", 
  "#e0f7fa", 
  "#fff3e0", 
  "#ede7f6", 
  "#e8f5e9", 
  "#f3e5f5", 
  "#fffde7"  
];

const today = new Date().getDay();
dayGreeting.textContent = `Happy ${days[today]} — here’s something to read.`;
body.style.backgroundColor = colors[today];