// Business Logic for AddressBook ---------
function AccountBook() {
  this.accounts = [],
  this.currentId = 0
}

AccountBook.prototype.addAccount = function(account) {
  account.id = this.assignId();
  this.accounts.push(account);
}

AccountBook.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

AccountBook.prototype.findAccount = function(id) {
  for (var i=0; i< this.accounts.length; i++) {
    if (this.accounts[i]) {
      if (this.accounts[i].id == id) {
        return this.accounts[i];
      }
    }
  };
  return false;
}

AccountBook.prototype.deleteAccount = function(id) {
  for (var i=0; i< this.accounts.length; i++) {
    if (this.accounts[i]) {
      if (this.accounts[i].id == id) {
        delete this.accounts[i];
        return true;
      }
    }
  };
  return false;
}

// Business Logic for Contacts ---------
function BankAccount(name, initialDeposit) {
  this.name = name,
  this.currentBalance = initialDeposit
}

// function DepositOrWithdraw(depositAmount, withdrawalAmount) {
//   this.depositAmount = depositAmount,
//   this.withdrawalAmount = withdrawalAmount
// }

BankAccount.prototype.deposit = function(deposit) {
  this.currentBalance += deposit;
}
BankAccount.prototype.withdrawal = function(withdrawal) {
  this.currentBalance -= withdrawal;
}

// User Interface Logic ---------
var accountBook = new AccountBook();

function showContact(accountId) {
  var account = accountBook.findAccount(accountId);
  $("#show-balance").show();
  $(".current-balance").html(account.currentBalance);
}



$(document).ready(function() {
  $("button").submit(function(event) {
    event.preventDefault();
    var crust = $("input:radio[name=crust]:checked").val();
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

  $("#name").text(currentAccount.name);
  $(".account-number").text(currentAccount.id);
  $("#congratulations").hide();

})
