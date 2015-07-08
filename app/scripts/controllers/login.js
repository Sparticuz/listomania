'use strict';

/**
 * @ngdoc function
 * @name listomaniaApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the listomaniaApp
 */
angular.module('listomaniaApp')
	.controller('LoginCtrl', function (AuthToken,$location,$routeParams) {
		//set token
		AuthToken.setToken($routeParams.token);
		$location.url('/');
	});