// let money = document.querySelector("#wallet")
// money.innerText = localStorage.getItem("amount")
// let previous = localStorage.getItem("amount")
// let add = () => {
//     let input = document.querySelector("#amount").value
//     total = eval(+input + +previous)
//     money.textContent = total
//     localStorage.setItem("amount", total)
// }
document.querySelector("#signup").addEventListener("submit", forsubmit);
var User = [];
function forsubmit() {
  event.preventDefault();

  var username = document.querySelector("#name").value;
  var useremail = document.querySelector("#email").value;
  var useraddress = document.querySelector("#address").value;
  var useramount = document.querySelector("#amount").value;

  var info = new FormData(username, useremail, useraddress, useramount);
  User.push(info);
  localStorage.setItem("user", JSON.stringify(User));
  window.location.reload;
}

class FormData {
  constructor(N, E, AD, A) {
    this.name = N;
    this.email = E;
    this.address = AD;
    this.wallet = A;
  }
}
