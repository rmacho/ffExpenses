(function () {
  'use strict';

  function FixedIncomeController(transactionResource) {
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


    //getTransactionInfo();

  }

  FixedIncomeController.$inject = ['transactionResourceService'];

  angular
    .module('ffExpensesApp')
    .controller('FixedIncomeController', FixedIncomeController);
})();
