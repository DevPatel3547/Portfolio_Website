const themeMapping = {
  "index": {
      light: "assets/css/index.css",
      dark: "assets/css/darkindex.css"
  },
  "qualifications": {
      light: "assets/css/common.css",
      dark: "assets/css/common2.css"
  },
  "experience": {
    light: "assets/css/common.css",
    dark: "assets/css/common2.css"
  },
  "projects": {
    light: "assets/css/common.css",
    dark: "assets/css/common2.css"
  },
  "service": {
    light: "assets/css/common.css",
    dark: "assets/css/common2.css"
  },
};
window.onload = function() {
  let savedTheme = localStorage.getItem("selectedTheme");

  if (savedTheme) {
      document.getElementById("themeStylesheet").setAttribute("href", savedTheme);
  } else {
      document.getElementById("themeStylesheet").setAttribute("href", "assets/css/index.css");
      localStorage.setItem("selectedTheme", "assets/css/index.css");
  }
};

function toggleTheme() {
  let currentTheme = document.getElementById("themeStylesheet").getAttribute("href");
  let newTheme;

  if (currentTheme === "assets/css/index.css") {
      newTheme = "assets/css/darkindex.css";
  } else {
      newTheme = "assets/css/index.css";
  }

  document.getElementById("themeStylesheet").setAttribute("href", newTheme);
  localStorage.setItem("selectedTheme", newTheme);
}


document.addEventListener("DOMContentLoaded", function() {
  let storedTheme = localStorage.getItem('theme');

  let currentTheme = document.getElementById("themeStylesheet").getAttribute("href");
  let pageKey = Object.keys(themeMapping).find(key => 
      themeMapping[key].light === currentTheme || themeMapping[key].dark === currentTheme
  );

  if (storedTheme && storedTheme === "dark") {
      document.getElementById("themeStylesheet").setAttribute("href", themeMapping[pageKey].dark);
  } else {
      document.getElementById("themeStylesheet").setAttribute("href", themeMapping[pageKey].light);
  }
});
