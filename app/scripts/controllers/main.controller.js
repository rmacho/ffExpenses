(function() {
	'use strict';

	/**
	 * @ngdoc function
	 * @name gameViewApp.controller:MainCtrl
	 * @description
	 * # MainCtrl
	 * Controller of the gameViewApp
	 */
	function MainCtrl(transactionResource){
		var vm = this;

		vm.transactionData = [];

	

		//vm.getGameInfo = getGameInfo;


		function getTransactionInfo(){
			transactionResource.getTransaction().then(function(result){
				vm.transactionData = result;
				console.log('result: ' + result);
			});
		}

		getTransactionInfo();


		vm.awesomeThings = 'TEST To See if it works';
	}

	MainCtrl.$inject = ['transactionResourceService'];

	angular
		.module('ffExpensesApp')
		.controller('MainCtrl', MainCtrl);
})();
