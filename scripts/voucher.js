var url = `https://masai-vouchers-api.herokuapp.com/api/vouchers`

async function fetch() {
    var url = ` https://masai-vouchers-api.herokuapp.com/api/vouchers`;
    var res = await fetch(url);
    var Data = await res.json();
    var info = Data[0].vouchers
    Forappend(info)
}
Fetch()

function Fetch(info) {
    info.forEach(function (ele){
        var innerdiv = document.createElement("div");
        
        var img = document.createElement("img");
        img.setAttribute("src", ele.image)
        
        var name = document.createElement("h3");
        name.innerText = ele.name
        
        var price = document.createElement("button");
        price.innerText = ele.price
        
        var purchase = document.createElement("button");
        purchase.innerText = "Buy"
        purchase.addEventListener("click", function () {
            var price = ele.price
            BUY(price)
        })
        innerdiv.append(img, name, price, purchase)
        document.querySelector("#voucher_list").append(innerdiv)
    })
}

function BUY(price) {
    var wallet_balance = document.querySelector("#wallet_balance");
    wallet_balance.innerHTML = null
    
    var Amount = JSON.parse(localStorage.getItem("user"))
    console.log(Amount)
}