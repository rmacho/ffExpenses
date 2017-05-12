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

    function getTransactionInfo() {
      transactionResource.getTransaction().then(function (result) {

        angular.forEach(result, function (transaction) {
          transaction.formattedDate = getFormattedTransactionDate(transaction);
        });
        vm.transactionData = result;
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
    vm.getFreeze = getTransactionFreeze;
    vm.setFreeze = setTransactionFreeze;

    vm.awesomeThings = 'TEST To See if it works';
  }

  MainCtrl.$inject = ['transactionResourceService', '$window'];

  angular
    .module('ffExpensesApp')
    .controller('MainCtrl', MainCtrl);
})();
