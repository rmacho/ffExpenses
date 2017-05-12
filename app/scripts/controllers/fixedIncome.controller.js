(function () {
  'use strict';

  function FixedIncomeController(transactionResource, $window) {
    var vm = this;

    vm.transactionData = [];


    function getTransactionInfo() {
      transactionResource.getTransaction().then(function (result) {
        vm.transactionData = result;
      });
    }

    function hasIncassantId(transaction) {
      return transaction.incassantId !== null;
    }

    function setTransactionFreeze(receiverIban, freezeValue){
      $window.localStorage[receiverIban] = freezeValue;
    }

    getTransactionInfo();

  }

  FixedIncomeController.$inject = ['transactionResourceService', '$window'];

  angular
    .module('ffExpensesApp')
    .controller('FixedIncomeController', FixedIncomeController);
})();
