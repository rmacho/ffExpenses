(function(){
	'use strict';

	function TransactionResourceService($resource, constants){
		var transations = $resource(constants.URL.get_transactions, {}),
			

		function getTransaction(){
			return transations.get({}).$promise;
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