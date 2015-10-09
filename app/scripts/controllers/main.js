'use strict';

/**
 * @ngdoc function
 * @name listomaniaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the listomaniaApp
 * This Controller maintains all the variables accessible to the entire app.
 * {{main}} are the variables
 * {{main.user}} is the user struct
 */
angular.module('listomaniaApp')
	.controller('MainCtrl', function ($rootScope,$location,Auth,AuthToken) {
		var vm = this;

		vm.loggedIn = Auth.isLoggedIn();
		vm.token = AuthToken.getToken();

		$rootScope.$on('$routeChangeStart', function(){
			vm.loggedIn = Auth.isLoggedIn();

			if (vm.loggedIn) {
				Auth.getUser().then(function(data){
					vm.user = data.data;
				});
			}
		});

		//Login function
		vm.doLogin = function() {
			vm.processing = true;
			vm.error = '';
			Auth.login().success(function(){
				vm.processing = false;
			});
		};

		vm.doLogout = function() {
			Auth.logout();
			vm.user = '';
			$location.path('/');
		};

	});
