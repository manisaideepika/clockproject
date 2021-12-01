var today = new Date();
var curHr = today.getHours();

if (curHr < 12){
  var x = document.createElement("IMG");
  x.setAttribute("src", "./images/wakeup.jpeg");
  x.setAttribute("width", "500");
  x.setAttribute("height", "450");
  x.setAttribute("alt", "The Pulpit Rock");
  x.style.marginLeft = "720px";
  x.style.marginTop = "-400px"
  x.style.position = "absolute";
  x.style.borderRadius = "2em";
  document.body.appendChild(x);
} else if (curHr < 18) {
  var x = document.createElement("IMG");
  x.setAttribute("src", "./images/pic.jpeg");
  x.setAttribute("width", "500");
  x.setAttribute("height", "450");
  x.setAttribute("alt", "The Pulpit Rock");
  x.style.marginLeft = "720px";
  x.style.marginTop = "-400px"
  x.style.position = "absolute";
  x.style.borderRadius = "2em";
  document.body.appendChild(x);
} else {
  var x = document.createElement("IMG");
  x.setAttribute("src", "./images/nap.jpeg");
  x.setAttribute("width", "500");
  x.setAttribute("height", "450");
  x.setAttribute("alt", "The Pulpit Rock");
  x.style.marginLeft = "720px";
  x.style.marginTop = "-400px"
  x.style.position = "absolute";
  x.style.borderRadius = "2em";
  document.body.appendChild(x);

}