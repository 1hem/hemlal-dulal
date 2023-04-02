var somosaPrice = document.getElementById("inputprice").value;
var somatotal = document.getElementById("total");
var addbtn = document.getElementById("right-button");
var decbtn = document.getElementById("left-button");
var somosaPrice = document.getElementById("inputprice").value;
var somatotal = document.getElementById("total");
var addbtntea = document.getElementById("right-button-tea");
var decbtntea = document.getElementById("left-button-tea");
var gTotal = document.getElementById("grand-total");
let cout = 0;

addbtn.addEventListener("click", () => {
  cout++;
  document.getElementById("counter-container").innerHTML = cout;
});

decbtn.addEventListener("click", () => {
  cout--;
  document.getElementById("counter-container").innerHTML = cout;
});
addbtntea.addEventListener("click", () => {
  cout++;
  document.getElementById("tea-counter-container").innerHTML = cout;
});

decbtntea.addEventListener("click", () => {
  cout--;
  document.getElementById("tea-counter-container").innerHTML = cout;
});
gTotal.addEventListener("click", () => {
  var somosaPrice = document.getElementById("inputprice").value;
  var teaPrice = document.getElementById("inputpricetea").value;

  let val = document.getElementById("counter-container").innerText;
  let teaval = document.getElementById("tea-counter-container").innerText;

  let somosa = (document.getElementById("total-somosa").innerHTML =
    val * somosaPrice);
  let tea = (document.getElementById("total-tea").innerHTML =
    teaval * teaPrice);
  let tptal_without = (document.getElementById("total-without-tax").innerHTML =
    somosa + tea);
  let vatAmount = (13 / 100) * tptal_without;
  document.getElementById("vat").innerHTML = vatAmount;

  let tipAmount = (10 / 100) * tptal_without;
  document.getElementById("tip").innerHTML = tipAmount;
  document.getElementById("totalShow").innerHTML =
    tptal_without + tipAmount + vatAmount;
});
//
