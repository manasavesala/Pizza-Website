function PizzaBook() {
  this.lists = [],
  this.currentId = 0
}

PizzaBook.prototype.addPizza = function(list) {
  list.id = this.assignId();
  this.lists.push(contact);
}

AddressBook.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

AddressBook.prototype.findPizza = function(id) {
  for (var i=0; i< this.lists.length; i++) {
    if (this.lists[i]) {
      if (this.lists[i].id == id) {
        return this.lists[i];
      }
    }
  };
  return false;
}
AddressBook.prototype.deletePizza = function(id) {
  for (var i=0; i< this.lists.length; i++) {
    if (this.lists[i]) {
      if (this.lists[i].id == id) {
        delete this.lists[i];
        return true;
      }
    }
  };
  return false;
}


function Pizza(crust,size,meatToppings,toppings){
  this.crust = crust,
  this.size = size,
  this.meatToppings = meatToppings,
  this.toppings = toppings 
}

var pizzaBook = new PizzaBook();

function displayPizzaDetails(pizzaBookToDisplay) {
  var pizzasList = $("ul#contacts");
  var htmlForPizzaInfo = "";
  pizzaBookToDisplay.contacts.forEach(function(pizza) {
    htmlForPizzaInfo += "<li id=" + pizza.id + ">" + pizza.firstName + " " + "ADD TO CART" + "</li>";
  });
  pizzasList.html(htmlForPizzaInfo);
};
function showPizza(pizzaId) {
  var list = pizzaBook.findPizza(pizzaId);
  $("#receipt").show();
  $("#crustop").html(pizza.crust);
  $("#size").html(pizza.size);
  $("#mt").html(pizza.meatToppings);
  $("#top").html(pizza.toppings);
  
  var buttons = $("#buttons");
  buttons.empty();
  buttons.append("<button class='showReceipt' id=" +  + contact.id + ">CheckOut</button>");
}

function attachPizzaListeners() {
  $("ul#contacts").on("click", "li", function() {
    showPizza(this.id);
  });
  $(".billing-address").on("click", function(){
    $(".billing-address").hide();
  });
  $("#buttons").on("click", ".showReceipt", function() {
    $("#receipt").show();
    displayPizzaDetails(pizzaBook);
  });
};

// User Interface Logic ---------
$(document).ready(function() {
   attachPizzaListeners();
  // $("#crust").click(function(event) {
  //   event.preventDefault();

  // });

  $("button").click(function(event) {
    event.preventDefault();
    var crust = $("input:radio[name=crust]:checked").val();
    alert(crust);
    var size = $("input:radio[name=size]:checked").val();
    $("input:checkbox[name=meat-toppings]:checked").each(function(){
      var meatToppings = $(this).val();
      $('#mt').append(meatToppings + "<br>");
    });
    $("input:checkbox[name=toppings]:checked").each(function(){
      var toppings = $(this).val();
      $('#top').append(toppings + "<br>");
    });
  })
})
