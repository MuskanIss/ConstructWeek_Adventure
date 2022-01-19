var Flight = document.getElementById("homeSection1button1");
var Hotel = document.getElementById("homeSection1button2");
var carRent = document.getElementById("homeSection1button3");
var homeSection7_1 = document.querySelector("#homeSection7_1");
var homeSection7_2 = document.querySelector("#homeSection7_2");
var homeSection7_3 = document.querySelector("#homeSection7_3");
var homeSection7_4 = document.querySelector("#homeSection7_4");
document;
window.addEventListener("scroll", checkSection7);
function checkSection7() {
  var position = document
    .getElementById("homeSection7")
    .getBoundingClientRect();
  if (position.top <= window.innerHeight) {
    numberLoad();
    window.removeEventListener("scroll", checkSection7);
  }
}
function numberLoad() {
  var num1 = parseInt(homeSection7_1.textContent.split(",").join(""));
  var num2 = parseInt(homeSection7_2.textContent.split(",").join(""));
  var num3 = parseInt(homeSection7_3.textContent.split(",").join(""));
  var num4 = parseInt(homeSection7_4.textContent.split(",").join(""));
  var s1 = 10000;
  var s2 = 10000;
  var s3 = 10000;
  var s4 = 10000;
  var f = 0;
  var time = setInterval(() => {
    if (f == 0) {
      f = 1;
    }

    if (s1 < num1) {
      s1 += 36;
    }
    if (s2 < num2) {
      s2 += 12;
    }
    if (s3 < num3) {
      s3 += 28;
    }
    if (s4 < num4) {
      s4 += 16;
    }
    if (s1 >= num1 || s2 >= num2 || s3 >= num3 || s4 >= num4) {
      homeSection7_1.textContent = "100,000";
      homeSection7_2.textContent = "40,000";
      homeSection7_3.textContent = "87,000";
      homeSection7_4.textContent = "56,400";
      clearInterval(time);
      return;
    }
    if (s1 >= num1) {
      s1 = num1;
    }
    if (s2 >= num2) {
      s2 = num2;
    }
    if (s3 >= num3) {
      s3 = num3;
    }
    if (s4 >= num4) {
      s4 = num4;
    }
    var s11 = s1.toString();
    var s22 = s2.toString();
    var s33 = s3.toString();
    var s44 = s4.toString();
    homeSection7_1.textContent =
      s11.substring(0, s11.length - 3) + "," + s11.substring(s11.length - 3);
    homeSection7_2.textContent =
      s22.substring(0, s22.length - 3) + "," + s11.substring(s22.length - 3);
    homeSection7_3.textContent =
      s33.substring(0, s33.length - 3) + "," + s33.substring(s33.length - 3);
    homeSection7_4.textContent =
      s44.substring(0, s44.length - 3) + "," + s44.substring(s44.length - 3);
  }, 1);
}
Flight.addEventListener("click", section1button1);
Hotel.addEventListener("click", section1button2);
carRent.addEventListener("click", section1button3);
function section1button2() {
  Flight.classList = "";
  carRent.classList = "";
  Hotel.classList = "homeSection1Active";
  document.querySelector("#Section1form1").style.display = "none";
  document.querySelector("#Section1form2").style.display = "block";
  document.querySelector("#Section1form3").style.display = "none";
}
function section1button1() {
  carRent.classList = "";
  Hotel.classList = "";
  Flight.classList = "homeSection1Active";
  document.querySelector("#Section1form1").style.display = "block";
  document.querySelector("#Section1form2").style.display = "none";
  document.querySelector("#Section1form3").style.display = "none";
}
function section1button3() {
  Hotel.classList = "";
  Flight.classList = "";
  carRent.classList = "homeSection1Active";
  document.querySelector("#Section1form1").style.display = "none";
  document.querySelector("#Section1form2").style.display = "none";
  document.querySelector("#Section1form3").style.display = "block";
}
