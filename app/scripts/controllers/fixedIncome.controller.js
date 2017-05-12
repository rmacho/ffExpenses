(function () {
  'use strict';

  function FixedIncomeController(transactionResource, $window) {
    var vm = this;

    vm.transactionData = [];
    vm.saldo = [];
    vm.hasIncassantId = hasIncassantId;
    vm.freezeTransaction = setTransactionFreeze;
    vm.getFreeze = getTransactionFreeze;


    function getTransactionInfo() {
      transactionResource.getTransaction().then(function (result) {
        vm.transactionData = result;
      });
    }

    function getSaldoInfo() {
      transactionResource.getSaldo().then(function(result) {
        vm.saldo = result[0];
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
    getSaldoInfo();

  }

  FixedIncomeController.$inject = ['transactionResourceService', '$window'];

  angular
    .module('ffExpensesApp')
    .controller('FixedIncomeController', FixedIncomeController);
})();
