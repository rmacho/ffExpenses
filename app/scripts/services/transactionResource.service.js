(function () {
  'use strict'

  function TransactionResourceService ($resource, constants, $http) {
    var transactions = $resource(constants.URL.getTransactions, {}, {
      query: {method: 'GET',
        isArray: true,
        transformResponse: $http.defaults.transformResponse.concat([
          function (data) {
            angular.forEach(data, function (transaction) {
              transaction.formattedDate = getFormattedTransactionDate(transaction)
            })

            return data
          }
        ])}
    })
    var saldo = $resource(constants.URL.getSaldo, {}, {
      query: {method: 'GET', isArray: true}})

    function getFormattedTransactionDate (transaction) {
      return transaction.date.dayOfMonth + '-' + transaction.date.monthValue + '-' + transaction.date.year
    }

    function getTransaction () {
      return transactions.query({}).$promise
    }

    function getSaldo () {
      return saldo.query({}).$promise
    }

    return {
      getTransaction: getTransaction,
      getSaldo: getSaldo
    }
  }

  TransactionResourceService.$inject = ['$resource', 'config', '$http']

  angular
  .module('ffExpensesApp')
  .factory('transactionResourceService', TransactionResourceService)
})()
