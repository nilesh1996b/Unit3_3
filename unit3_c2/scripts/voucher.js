var data;
fetch("https://masai-vouchers-api.herokuapp.com/api/vouchers")
  .then(function (res) {

    return res.json(); 
  })
  .then(function (res) {

    data = res.vouchers
    localStorage.setItem("productD",JSON.stringify(data));
  })
  .catch(function (err) {
    console.log(err);
  });

  var productArr = JSON.parse(localStorage.getItem("productD"));
  productArr.map(function(el){
    console.log(el)
  })

  
  var userArr = JSON.parse(localStorage.getItem("user")) 
  console.log(userArr)
  userArr.map(function(el){
    document.getElementById("wallet_balance").innerText = el.amount;
  })
  