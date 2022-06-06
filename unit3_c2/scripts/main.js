function dataIt(n,e,ad,a)
{
    this.name = n;
    this.email = e;
    this.address = ad;
    this.amount = a;
}

function userDetails(e)
{
    e.preventDefault();

    var form = document.getElementById("form");
    var name = form.name.value;
    var email = form.email.value;
    var address = form.address.value;
    var amount = form.amount.value;
    var data = new dataIt(name,email,address,amount);
    console.log(data);

    var userArr = JSON.parse(localStorage.getItem("user")) || [];
    userArr.push(data);
    localStorage.setItem("user",JSON.stringify(userArr));

}