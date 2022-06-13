var url = `https://masai-vouchers-api.herokuapp.com/api/vouchers`;
let wallet = JSON.parse(localStorage.getItem("user"));
console.log(wallet);
let balance = wallet[0].wallet;
document.querySelector("#wallet_balance").innerText = balance;
// console.log(balance)
async function Data() {
  var url = ` https://masai-vouchers-api.herokuapp.com/api/vouchers`;
  var res = await fetch(url);
  var Data = await res.json();
  console.log(Data[0].vouchers);
  // var info = Data[0].voucher
  // console.log(info)
  Forappend(Data[0].vouchers);
}
Data();

function Forappend(info) {
  info.forEach(function (ele) {
    var innerdiv = document.createElement("div");
    innerdiv.setAttribute("class", "voucher");
    var img = document.createElement("img");
    img.setAttribute("src", ele.image);

    var name = document.createElement("h3");
    name.innerText = ele.name;

    var price = document.createElement("button");
    price.innerText = ele.price;

    var purchase = document.createElement("button");
    purchase.innerText = "Buy";
    purchase.addEventListener("click", function () {
      BUY(ele);
    });
    innerdiv.append(img, name, price, purchase);
    document.querySelector("#voucher_list").append(innerdiv);
  });
}

function BUY(ele) {
  // var wallet_balance = document.querySelector("#wallet_balance");
  // wallet_balance.innerHTML = null
  // console.log(price)
  // var Amount = JSON.parse(localStorage.getItem("user"))
  // console.log(Amount)
  // console.log(ele)
  if (Number(ele.price) > balance) {
    alert("Sorry!insufficient balance ");
  } else {
    alert("Hurray! purchase successful");
    balance = balance - Number(ele.price);
    console.log(balance);
    document.querySelector("#wallet_balance").innerText = balance;
    wallet[0].wallet = balance;
    localStorage.setItem("user", JSON.stringify(wallet));
  }
}
