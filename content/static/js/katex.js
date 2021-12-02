var math = document.getElementsByClassName('arithmatex');
for (var i = 0; i < math.length; i++) {
  let s = math[i].textContent;
  if (s.startsWith("\\(")) {
    katex.render(s.substr(2, s.length - 4), math[i], {
      "displayMode": false
    });
  } else if (s.startsWith("\\[")) {
    katex.render(s.substr(2, s.length - 4), math[i], {
      "displayMode": true
    });
  }
}
