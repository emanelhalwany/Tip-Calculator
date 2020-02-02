
//   validation function for bill input 
function validation(el) {
  if (!el.checkValidity()) {
    document.getElementById("err-validation").innerHTML = el.validationMessage;
  } else {
    document.getElementById("err-validation").innerHTML = "";
  }
}

function calcTip() {

  var bill = document.getElementById('bill').value;
  var numOfPeople = document.getElementById('num-people').value;
  var quality = document.getElementById('serviceSeclesction').value;
  var tipAmount = (bill / numOfPeople) * quality / 100;
  
  if (isNaN(tipAmount) || tipAmount == Infinity){
    document.getElementById('tip').innerHTML = "it's wrong , please try again with another values";
  }else{
    document.getElementById('tip-amount').innerHTML = "Tip Amount";
    document.getElementById('each').innerHTML = "Each";
    document.getElementById('tip').innerHTML = "$" + tipAmount;
  }

}