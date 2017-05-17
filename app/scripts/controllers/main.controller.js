(function () {
  'use strict';

  /**
   * @ngdoc function
   * @name gameViewApp.controller:MainCtrl
   * @description
   * # MainCtrl
   * Controller of the gameViewApp
   */
  function MainCtrl(transactionResource, $window, $scope) {
    var vm = this;

    vm.transactionData = [];
    vm.saldo = [];

    function getTransactionInfo() {
      transactionResource.getTransaction().then(function (result) {
        vm.transactionData = result;
      });

      getTotalAfterFreeze();
    }

    function getSaldoInfo() {
    	transactionResource.getSaldo().then(function(result) {
        vm.saldo = result[0];
        vm.totalAfterFreeze = vm.saldo;
        angular.forEach(vm.transactionData , function (transaction) {
          if (getTransactionFreeze(transaction)){
            vm.totalAfterFreeze = vm.totalAfterFreeze - Math.abs(transaction.amount);
          }
        });
    	});

      getTotalAfterFreeze();
    }

    function setTransactionFreeze(receiverIban, freezeValue){
    	$window.localStorage[receiverIban] = freezeValue;
    }

    function getTransactionFreeze(transaction){
    	return JSON.parse( $window.localStorage[transaction.receiverIban] || false );
    }

    function getTotalAfterFreeze(){
    	vm.totalAfterFreeze = vm.saldo;
    	angular.forEach(vm.transactionData , function (transaction) {
              if (getTransactionFreeze(transaction)){
              	vm.totalAfterFreeze = (vm.totalAfterFreeze - transaction.amount).toFixed(2);
              }
        });
        return (vm.totalAfterFreeze);
    }

    $scope.$watch('$window.localStorage', function () {
      vm.totalAfterFreeze = vm.saldo;
      angular.forEach(vm.transactionData , function (transaction) {
        if (getTransactionFreeze(transaction)){
          vm.totalAfterFreeze = vm.totalAfterFreeze - transaction.amount;
        }
      });    });


    getTransactionInfo();
    getSaldoInfo();
    getTotalAfterFreeze();

    vm.getFreeze = getTransactionFreeze;
    vm.setFreeze = setTransactionFreeze;
    vm.getTotalAfterFreeze = getTotalAfterFreeze;

    vm.awesomeThings = 'TEST To See if it works';
  }

  MainCtrl.$inject = ['transactionResourceService', '$window', '$scope'];

  angular
    .module('ffExpensesApp')
    .controller('MainCtrl', MainCtrl);
})();
