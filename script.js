function beforesubmit() {
  var inputDate = document.querySelector(".inputdate");
  var outputDate = document.querySelector(".outputdate");
  console.log("input date:", inputDate.value);
  let formattedDateValue = new Date(inputDate.value).toLocaleDateString(
    "en-IN"
  );
  outputDate.value = formattedDateValue;
}
