const toggle = document.getElementById('toggle');
const body = document.body
var currentTheme = "";

toggle.onclick = function switchTheme() {
    var theme = getCookie("theme");

    if (theme == ""){
      if (currentTheme == ""){
        currentTheme = "light";
      }
    } else {
      currentTheme = theme;
    }

    console.log(currentTheme)

    if (currentTheme == "light"){
        body.classList.replace('light', 'dark');
        setCookie("theme", "dark", 1);
        currentTheme = "dark"
    } else if (currentTheme == "dark") {
        body.classList.replace('dark', 'light');
        setCookie("theme", "light", 1);
        currentTheme = "light"
    }
    
    document.querySelector(".sun").classList.toggle("invisible");
    document.querySelector(".moon").classList.toggle("invisible");
};

function setTheme(){

    var theme = getCookie("theme");

    if (theme == ""){
      setCookie("theme", "light", 1);
      theme = "light";
    } else if (theme == "dark") {
      setCookie("theme", "dark", 1);
      theme = "dark";
    } else {
      setCookie("theme", "light", 1);
      theme = "light";
    }

    if (theme == "light"){
      document.querySelector(".moon").classList.add("invisible");
    } else {
      document.querySelector(".sun").classList.add("invisible");
    }
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}