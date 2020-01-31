
//   validtion function for bill input 
function validation() {
  var inpObj = document.getElementById("bill");
  if (!inpObj.checkValidity()) {
    document.getElementById("err-validation").innerHTML = inpObj.validationMessage;
  } else {
    document.getElementById("err-validation").innerHTML = "";
  }
}
//   validtion function for people input
function validation2() {
  var inpObj = document.getElementById("num-people");
  if (!inpObj.checkValidity()) {
    document.getElementById("err-validation2").innerHTML = inpObj.validationMessage;
  }else {
    document.getElementById("err-validation2").innerHTML = "";
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