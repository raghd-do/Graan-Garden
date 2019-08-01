console.log("good");


var Cart = [];

function clickMe_1(){
  console.log("clicked_1");
  Cart.push(document.getElementById("name_1").innerHTML);
  Cart.push(document.getElementById("price_1").innerHTML);
  return Cart;
}

function clickMe_2(){
  console.log("clicked_2");
  Cart.push(document.getElementById("name_2").innerHTML);
  Cart.push(document.getElementById("price_2").innerHTML);
  return Cart;
}

function clickMe_3(){
  console.log("clicked_3");
  Cart.push(document.getElementById("name_3").innerHTML);
  Cart.push(document.getElementById("price_3").innerHTML);
  return Cart;
}

function cart(){
  // NOTE: table creation & table header
  var table = document.createElement("table");
  var thead = table.createTHead();
  var tr_1 = thead.insertRow();
  var td_1R_1 = tr_1.insertCell();
  var td_2R_1 = tr_1.insertCell();

  // NOTE: insert name & price in row 1
  td_1R_1.innerHTML = "Plant Name";
  td_2R_1.innerHTML = "Price";

  // NOTE: table body insert
  var tbody = table.createTFoot();

  if (Cart.length == 0) {
    var tr = tbody.insertRow();
    var td_1 = tr.insertCell();
    var td_2 = tr.insertCell();
    td_1.innerHTML = "no Item added yat";
    td_2.innerHTML = "";
  }
  else {
    for (var i = 0; i < Cart.length; i+=2) {
      var tr = tbody.insertRow();
      var td_1 = tr.insertCell();
      var td_2 = tr.insertCell();

      td_1.innerHTML = Cart[i];
      td_2.innerHTML = Cart[i+1];

      console.log(tbody.innerHTML);
    }
  }
  // NOTE: items insert by loop

  console.log(tbody.innerHTML);
  console.log(table.innerHTML);
  // NOTE: stor the table from shop page
  localStorage.setItem("printCart", table.innerHTML);
}

function printCart() { // NOTE: print the table in cart page
  return localStorage.getItem("printCart");
}

function display() {
  if(Cart.length == 0){
    document.getElementById('befor_bay').style.display = "block";
  }
  else {
    document.getElementById('befor_bay').style.display = "none";
  }
}
