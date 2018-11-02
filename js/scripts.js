function PizzaBook() {
  this.lists = [],
  this.pizzaId = 0
}

PizzaBook.prototype.addPizza = function(list) {
  list.id = this.assignId();
  this.lists.push(list);
}

PizzaBook.prototype.assignId = function() {
  this.pizzaId += 1;
  return this.pizzaId;
}

PizzaBook.prototype.findPizza = function(id) {
  for (var i=0; i< this.lists.length; i++) {
    if (this.lists[i]) {
      if (this.lists[i].id == id) {
        return this.lists[i];
      }
    }
  };
  return false;
}
PizzaBook.prototype.deletePizza = function(id) {
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

// Pizza.prototype.price = function(size1,meatToppings,toppings){
// if(size1 == "small") && (toppings = )
// }

function Pizza(crust,size1,meatToppings,toppings){
  this.crust = crust,
  this.size1 = size1,
  this.meatToppings = meatToppings,
  this.toppings = toppings 
}

var pizzaBook = new PizzaBook();

function showPizza(pizzaId) {
  var pizza = pizzaBook.findPizza(pizzaId);
  $("#checkout").show();
  $("#crustop").html(pizza.crust);
  $("#sizeop").html(pizza.size1);
  $("#mt").html(pizza.meatToppings);
  $("#top").html(pizza.toppings);
  
  var buttons = $("#buttons");
  buttons.empty();
  buttons.append("<button class='checkout' id=" +  + pizza.id + ">CheckOut</button>");
}

function attachPizzaListeners() {
  $("ul#lists").on("click", "li", function() {
    showPizza(this.id);
  });
  $("#buttons").on("click", ".checkout", function() {
    $("#checkout").show();
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
    var size1 = $("input:radio[name=size1]:checked").val();
    var meatToppings = [];
    $("input:checkbox[name=meat-toppings]:checked").each(function(){
      var meatTopping = $(this).val();
      meatToppings.push(meatTopping);
      // $('#mt').append(meatToppings + "<br>");
    });
    var toppings = [];
    $("input:checkbox[name=toppings]:checked").each(function(){
      var topping = $(this).val();
      toppings.push(topping);
      // $('#top').append(toppings + "<br>");
    });
    var newpizza = new Pizza(crust, size1, meatToppings,toppings);
    pizzaBook.addPizza(newpizza);
    showPizza(pizzaBook.pizzaId);
  })
})
