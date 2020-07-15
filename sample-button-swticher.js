const lightTheme = document.getElementById("lightTheme");
const amoledTheme = document.getElementById("amoledTheme");

lightTheme.onclick = function() {
  document.cookie = "themeName=light; expires=Fri, 31 Dec 9999 23:59:59 GMT";
  location.reload();
}
amoledTheme.onclick = function() {
  document.cookie = "themeName=amoled; expires=Fri, 31 Dec 9999 23:59:59 GMT";
  location.reload();
}

// Buttons can either be placed on the settings page, or we can merge "Language" and this together into the navbar, into a category called "Display" or "View".
// Hovering over this category would show something like "Language: <English> | <日本語> Theme: <Light> | <Dark>" .
