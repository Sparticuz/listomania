'use strict';

/**
 * @ngdoc function
 * @name listomaniaApp.controller:UserCtrl
 * @description
 * # UserCtrl
 * Controller of the listomaniaApp
 */
angular.module('listomaniaApp')
	.controller('UserCtrl', function ($scope,$routeParams,ListFactory) {
		$scope.alias = $routeParams.username;
		ListFactory.getUserLists($scope.alias).then(function(data){
			//console.log(data);
			$scope.lists = data.data.rows;
		});
	});