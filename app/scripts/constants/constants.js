(function(){
	'use strict';

	angular.module('ffExpensesApp')
		.constant('config', {
			URL: {
				getTransactions: 'http://localhost:8080/transactions/',
				getSaldo: 'http://localhost:8080/saldo/'
			}
		});

})();