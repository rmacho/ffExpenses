(function(){
	'use strict';

	angular.module('ffExpensesApp')
		.constant('config', {
			URL: {
				get_transactions: 'http://localhost:8080/transactions/'
			}
		});

})();