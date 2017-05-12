(function () {
  'use strict';

  /**
   * @ngdoc function
   * @name gameViewApp.controller:MainCtrl
   * @description
   * # MainCtrl
   * Controller of the gameViewApp
   */
  function MainCtrl(transactionResource, $window) {
    var vm = this;

    vm.transactionData = [];
    vm.saldo = 0.0;

    function getTransactionInfo() {
      transactionResource.getTransaction().then(function (result) {
        vm.transactionData = result;
      });
    }

    function getSaldoInfo() {
    	transactionResource.getSaldo().then(function(result) {
    		vm.saldo = result;
    	});
    }

    function setTransactionFreeze(receiverIban, freezeValue){
    	$window.localStorage[receiverIban] = freezeValue;
    }

    function getTransactionFreeze(transaction){
    	return JSON.parse( $window.localStorage[transaction.receiverIban] || false );
    }

    function getFormattedTransactionDate(transaction) {
      return transaction.date.dayOfMonth + '-' + transaction.date.monthValue + '-' + transaction.date.year;
    }


    getTransactionInfo();
    getSaldoInfo();
    
    vm.getFreeze = getTransactionFreeze;
    vm.setFreeze = setTransactionFreeze;

    vm.awesomeThings = 'TEST To See if it works';
  }

  MainCtrl.$inject = ['transactionResourceService', '$window'];

  angular
    .module('ffExpensesApp')
    .controller('MainCtrl', MainCtrl);
})();
