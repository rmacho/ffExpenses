(function(){
	'use strict';

	angular.module('ffExpensesApp')
		.constant('config', {
			URL: {
				//getTransactions: 'http://localhost:8080/transactions/',
				getTransactions: 'transactions/',
				getSaldo: 'saldo/'
			}
		});

})();