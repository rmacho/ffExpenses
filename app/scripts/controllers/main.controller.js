(function () {
  'use strict';

  /**
   * @ngdoc function
   * @name gameViewApp.controller:MainCtrl
   * @description
   * # MainCtrl
   * Controller of the gameViewApp
   */
  function MainCtrl(transactionResource, $window, $timeout) {
    var vm = this;

    vm.transactionData = [];
    vm.saldo = [];

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

    function setTransactionFreeze(receiverIban, freezeValue){
    	$window.localStorage[receiverIban] = freezeValue;
    }

    function getTransactionFreeze(transaction){
    	return JSON.parse( $window.localStorage[transaction.receiverIban] || false );
    }

    function getTotalAfterFreeze(){
    	vm.totalAfterFreeze = vm.saldo;
    	angular.forEach(m.transactionData , function (transaction) {
              if (getTransactionFreeze(transaction) {
              	vm.totalAfterFreeze = vm.totalAfterFreeze - transaction.amount;
              }
        });
        return vm.totalAfterFreeze;
    }


    getTransactionInfo();
    getSaldoInfo();

    vm.getFreeze = getTransactionFreeze;
    vm.setFreeze = setTransactionFreeze;
    vm.getTotalAfterFreeze = getTotalAfterFreeze;

    vm.awesomeThings = 'TEST To See if it works';
  }

  MainCtrl.$inject = ['transactionResourceService', '$window', '$timeout'];

  angular
    .module('ffExpensesApp')
    .controller('MainCtrl', MainCtrl);
})();
