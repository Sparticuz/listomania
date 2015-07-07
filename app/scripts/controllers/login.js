'use strict';

/**
 * @ngdoc function
 * @name listomaniaApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the listomaniaApp
 */
angular.module('listomaniaApp')
	.controller('LoginCtrl', function ($scope,AuthToken,$cookies,$routeParams) {
		//set token
		AuthToken.setToken($routeParams.token);


	});
