var Flight = document.getElementById("homeSection1button1");
var Hotel = document.getElementById("homeSection1button2");
var carRent = document.getElementById("homeSection1button3");
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
