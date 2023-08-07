const input = document.getElementById("input");
//!-----html-----------
let btn1 = document
  .getElementById("btn-1")
  .addEventListener("click", clickHTML);
function clickHTML() {
  document.getElementById("lang").innerHTML =
    "you selected ~html <br> please choose one option : <br> 1-skills <br> 2-project <br> >";
  input.disabled = false;
  document.getElementById("heading").innerHTML =
    "I specialize in HTML, the backbone of the web. Using structured and semantic markup, I create the foundation for engaging and accessible websites that users love to explore.";
  document.getElementById("mini-icone").src = "pictures/mini-html.png";
  document.getElementById("mini-icone2").src = "pictures/mini-html.png";
  document.getElementById("title").innerHTML = "html";
  document.getElementById("title2").innerHTML = "html";
  document.getElementById("progress-bar").style = "width:90%";
  document.getElementById("project-img").src = "pictures/project1.jpg";
  document.getElementById("title3").innerHTML =
    "The project i build using HTML";
  document.getElementById("title4").innerHTML = "html";
}
//!-----css-----------
let btn2 = document.getElementById("btn-2").addEventListener("click", clickcss);
function clickcss() {
  document.getElementById("lang").innerHTML =
    "you selected ~css <br> please choose one option : <br> 1-skills <br> 2-project <br> >";
  input.disabled = false;
  document.getElementById("mini-icone").src = "pictures/mini-css.png";
  document.getElementById("mini-icone2").src = "pictures/mini-css.png";

  document.getElementById("title").innerHTML = "css";
  document.getElementById("title2").innerHTML = "css";
  document.getElementById("heading").innerHTML =
    "My expertise lies in CSS, where I shape the visual style of websites. With a deep understanding of layouts, colors, and animations, I transform ideas into eye-catching and user-friendly interfaces.";
  document.getElementById("progress-bar").style = "width:80%";
  document.getElementById("project-img").src = "pictures/project2.jpg";
  document.getElementById("title3").innerHTML = "The project i build using css";
  document.getElementById("title4").innerHTML = "css";
}
//!-----bootstrap-----------
let btn3 = document
  .getElementById("btn-3")
  .addEventListener("click", clickbootstrap);
function clickbootstrap() {
  document.getElementById("lang").innerHTML =
    "you selected ~bootstrap <br> please choose one option : <br> 1-skills <br> 2-project <br> >";
  input.disabled = false;
  document.getElementById("mini-icone").src = "pictures/mini-bootstrap.png";
  document.getElementById("mini-icone2").src = "pictures/mini-bootstrap.png";

  document.getElementById("title").innerHTML = "bootstrap";
  document.getElementById("title2").innerHTML = "bootstrap";
  document.getElementById("heading").innerHTML =
    "Proficient in Bootstrap, I leverage its responsive grid and components to design modern and user-friendly websites. My skills in Bootstrap empower me to create seamless and visually appealing interfaces that work well across devices.";
  document.getElementById("progress-bar").style = "width:90%";
  document.getElementById("project-img").src = "pictures/project3.png";
  document.getElementById("title3").innerHTML =
    "The project i build using Bootstrap";
  document.getElementById("title4").innerHTML = "Bootstrap";
}
//!-----js-----------
let btn4 = document.getElementById("btn-4").addEventListener("click", clickjs);
function clickjs() {
  document.getElementById("lang").innerHTML =
    "you selected ~js <br> please choose one option : <br> 1-skills <br> 2-project <br> >";
  input.disabled = false;
  document.getElementById("mini-icone").src = "pictures/mini-js.png";
  document.getElementById("mini-icone2").src = "pictures/mini-js.png";

  document.getElementById("title").innerHTML = "javascript";
  document.getElementById("title2").innerHTML = "javascript";
  document.getElementById("heading").innerHTML =
    "I have a solid grasp of JavaScript, allowing me to add interactivity and dynamic features to websites. While I'm not a master, I enjoy creating scripts that enhance user experiences and bring websites to life";
  document.getElementById("progress-bar").style = "width:50%";
  document.getElementById("project-img").src = "";
  document.getElementById("title3").innerHTML =
    "this portfolio is build using javascript 😁";
  document.getElementById("title4").innerHTML = "javascript";
}
//!-----react-----------
let btn5 = document
  .getElementById("btn-5")
  .addEventListener("click", clickreact);
function clickreact() {
  document.getElementById("lang").innerHTML =
    "you selected ~react <br> please choose one option : <br> 1-skills <br> 2-project <br> >";
  input.disabled = false;
  document.getElementById("mini-icone").src = "pictures/mini-react.png";
  document.getElementById("mini-icone2").src = "pictures/mini-react.png";
  document.getElementById("heading").innerHTML =
    "While I'm not a master in React, I'm enthusiastic about creating interactive UIs with its component-based architecture. I've worked on projects that involve building reusable React components to improve the overall user experience.";
  document.getElementById("title").innerHTML = "react";
  document.getElementById("project-img").src = "pictures/project5.jpg";
  document.getElementById("title3").innerHTML =
    "The project i build using React";
  document.getElementById("title2").innerHTML = "react";
  document.getElementById("progress-bar").style = "width:65%";
}
//?--------terminal------------
input.addEventListener("input", updateValue);
function updateValue(e) {
  if (e.target.value == "skills" || e.target.value == "1") {
    console.log(1);
    document.getElementById("skill-card").style = "display:inline";
  } else if (e.target.value == "project" || e.target.value == "2") {
    console.log(2);
    document.getElementById("project-card").style = "display:inline";
  } else {
    console.log(3);
    document.getElementById("skill-card").style = "display:none";
    document.getElementById("project-card").style = "display:none";
  }
}
