(function () {
  'use strict';

  function FixedIncomeController(transactionResource, $window) {
    var vm = this;

    vm.transactionData = [];
    vm.hasIncassantId = hasIncassantId;
    vm.freezeTransaction = setTransactionFreeze;
    vm.getFreeze = getTransactionFreeze;


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

    function getTransactionFreeze(transaction){
      return JSON.parse( $window.localStorage[transaction.receiverIban] || false );
    }

    getTransactionInfo();

  }

  FixedIncomeController.$inject = ['transactionResourceService', '$window'];

  angular
    .module('ffExpensesApp')
    .controller('FixedIncomeController', FixedIncomeController);
})();
