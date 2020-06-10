function passwordCheck() {
  var answer = "123456789abcd";
  var password = document.getElementById("finalAnswerBox");
  if (password.value == answer) {
    window.open("https://www.google.com/maps/place/Weerona+College+UOW/@-34.4193903,150.8865642,45m/data=!3m1!1e3!4m5!3m4!1s0x6b1319a054c650a5:0xb493047a849e6ec3!8m2!3d-34.4198564!4d150.8858042");
  }
  else {
    alert("Wrong!");
  }
}
