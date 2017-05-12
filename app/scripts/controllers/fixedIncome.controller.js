(function () {
  'use strict';

  function FixedIncomeController(transactionResource, $window) {
    var vm = this;

    vm.transactionData = [];


    function getTransactionInfo() {
      transactionResource.getTransaction().then(function (result) {

        angular.forEach(result, function (transaction) {
          transaction.formattedDate = getFormattedTransactionDate(transaction);
        });
        vm.transactionData = result;
      });
    }

    function getFormattedTransactionDate(transaction) {
      return transaction.date.dayOfMonth + '-' + transaction.date.monthValue + '-' + transaction.date.year;
    }


    function setTransactionFreeze(receiverIban, freezeValue){
      $window.localStorage[receiverIban] = freezeValue;
    }

  }

  FixedIncomeController.$inject = ['transactionResourceService', '$window'];

  angular
    .module('ffExpensesApp')
    .controller('FixedIncomeController', FixedIncomeController);
})();
