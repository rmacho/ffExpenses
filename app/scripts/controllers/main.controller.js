(function () {
  'use strict';

  /**
   * @ngdoc function
   * @name gameViewApp.controller:MainCtrl
   * @description
   * # MainCtrl
   * Controller of the gameViewApp
   */
  function MainCtrl(transactionResource) {
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


    getTransactionInfo();

    vm.awesomeThings = 'TEST To See if it works';
  }

  MainCtrl.$inject = ['transactionResourceService'];

  angular
    .module('ffExpensesApp')
    .controller('MainCtrl', MainCtrl);
})();
