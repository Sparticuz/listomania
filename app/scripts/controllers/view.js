'use strict';

/**
 * @ngdoc function
 * @name topAlbumsApp.controller:ViewCtrl
 * @description
 * # ViewCtrl
 * Controller of the topAlbumsApp
 */
angular.module('topAlbumsApp')
	.controller('ViewCtrl', function ($scope,$routeParams,ListFactory) {
		ListFactory.getList($routeParams.id).then(function(data){
			$scope.albums = data.data.list;
			$scope.title = data.data.title;
			//console.log(data);
		});
	}
);
