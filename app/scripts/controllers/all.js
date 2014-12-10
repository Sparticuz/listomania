'use strict';

/**
 * @ngdoc function
 * @name topAlbumsApp.controller:AllCtrl
 * @description
 * # AllCtrl
 * Controller of the topAlbumsApp
 */
angular.module('topAlbumsApp')
	.controller('AllCtrl', function ($scope,ListFactory) {
		ListFactory.allLists().then(function(data){
			console.log(data);
			$scope.lists = data.data.rows;
		});
	});
