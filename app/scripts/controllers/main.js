'use strict';

/**
 * @ngdoc function
 * @name listomaniaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the listomaniaApp
 */
angular.module('listomaniaApp')
	.controller('MainCtrl', function ($rootScope,$location,Auth) {
		var vm = this;

		vm.loggedIn = Auth.isLoggedIn();

		$rootScope.$on('$routeChangeStart', function(){
			vm.loggedIn = Auth.isLoggedIn();

			Auth.getUser().then(function(data){
				vm.user = data.data;
			});
		});

		//Login function
		vm.doLogin = function() {
			vm.processing = true;

			vm.error = '';

			Auth.login().success(function(data){
				vm.processing = false;
			});
		};

		vm.doLogout = function() {
			Auth.logout();
			vm.user = '';

			$location.path('/');
		};

	});
