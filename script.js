
//   validtion function 
function validation() {
  var inpObj = document.getElementById("id1");
  if (!inpObj.checkValidity()) {
    document.getElementById("demo").innerHTML = inpObj.validationMessage;
  
}
}
//   validtion function 
function validation2() {
  var inpObj = document.getElementById("id2");
  if (!inpObj.checkValidity()) {
    document.getElementById("demo2").innerHTML = inpObj.validationMessage;

}
}

function calcTip() {
  
  var bill = document.getElementById('id1').value;
  var numOfPeople = document.getElementById('id2').value;
  var quality = document.getElementById('serviceSeclesction').value;
  console.log(numOfPeople);
  console.log(bill);
  console.log(quality);
  var tipAmount = (bill / numOfPeople) * quality/100;

  document.getElementById('tip-amount').innerHTML = "Tip Amount";
  document.getElementById('each').innerHTML = "Each";
  document.getElementById('tip').innerHTML = "$" + tipAmount;

}