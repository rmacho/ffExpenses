(function(){
	'use strict';

	function TransactionResourceService($resource, constants){
		var transactions = $resource(constants.URL.getTransactions, {}, {
				query:  {method:'GET', isArray:true }
			}),
			saldo = $resource(constants.URL.getSaldo, {});


		function getTransaction(){
			return transactions.query({}).$promise;
		}

		function getSaldo(){
			return saldo.get({}).$promise;
		}


		return {
			getTransaction: getTransaction,
			getSaldo: getSaldo
		};
	}

	TransactionResourceService.$inject = ['$resource', 'config'];

	angular
		.module('ffExpensesApp')
		.factory('transactionResourceService', TransactionResourceService);

})();
