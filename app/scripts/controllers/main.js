'use strict';

/**
 * @ngdoc function
 * @name topAlbumsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the topAlbumsApp
 */
angular.module('topAlbumsApp')
	.controller('MainCtrl', function ($scope,ListFactory) {
		$scope.title = ListFactory.getTitle();
		ListFactory.getList().then(function(data){
			var list = ['thing1'];
			angular.forEach(data.data.list, function(value){
				this.push(value.artist);
			}, list);
			$scope.albums = list;
			console.log(list);
			console.log(data);
		});
	}
);
