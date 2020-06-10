function passwordCheck() {
  var answer = "123456789abcd";
  var password = document.getElementById("finalAnswerBox");
  if (password.value == answer) {
    window.open("https://www.google.com/maps/place/34%C2%B025'09.8%22S+150%C2%B053'11.9%22E/@-34.4193941,150.8865081,45m/data=!3m1!1e3!4m5!3m4!1s0x0:0x0!8m2!3d-34.4193889!4d150.8866389");
  }
  else {
    alert("Wrong!");
  }
}
