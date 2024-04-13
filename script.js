let captchaChecked = false;
function beforesubmit(event) {
  if (captchaChecked) {
    var inputDate = document.querySelector(".inputdate");
    var outputDate = document.querySelector(".outputdate");
    console.log("input date:", inputDate.value);
    let formattedDateValue = new Date(inputDate.value).toLocaleDateString(
      "en-IN"
    );
    outputDate.value = formattedDateValue;
  } else {
    alert("Please check the Captcha.");
    event.preventDefault();
  }
}

function timestamp() {
  var response = document.getElementById("g-recaptcha-response");
  if (response == null || response.value.trim() == "") {
    var elems = JSON.parse(
      document.getElementsByName("captcha_settings")[0].value
    );
    elems["ts"] = JSON.stringify(new Date().getTime());
    document.getElementsByName("captcha_settings")[0].value =
      JSON.stringify(elems);
  }
}
setInterval(timestamp, 500);

function captchasuccess() {
  captchaChecked = true;
}
