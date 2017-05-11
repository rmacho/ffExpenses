(function(){
	'use strict';

	function TransactionResourceService($resource, constants){
		var transactions = $resource(constants.URL.getTransactions, {}, {
			query:  {method:'GET', isArray:true }
		});
			

		function getTransaction(){
			return transactions.get({}).$promise;
		}


		return {
			getTransaction: getTransaction
		};
	}

	TransactionResourceService.$inject = ['$resource', 'config'];

	angular
		.module('ffExpensesApp')
		.factory('transactionResourceService', TransactionResourceService);

})();