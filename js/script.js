
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
  if (document.body.classList.contains("dark-mode")) {
    document.body.style.backgroundColor = "#121212";
    document.body.style.color = "#f2f2f2";
  } else {
    document.body.style.backgroundColor = "#f2f2f2";
    document.body.style.color = "#333";
  }
}

function downloadCV() {
  alert("Download CV function coming soon!");
}
