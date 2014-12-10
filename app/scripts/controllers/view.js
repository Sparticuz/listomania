'use strict';

/**
 * @ngdoc function
 * @name topAlbumsApp.controller:ViewCtrl
 * @description
 * # ViewCtrl
 * Controller of the topAlbumsApp
 */
angular.module('topAlbumsApp')
	.controller('ViewCtrl', function ($scope,$routeParams,$location,ListFactory) {
		//build the list
		ListFactory.getList($routeParams.id).then(function(data){
			var list = data.data;
			$scope.id = list._id;
			$scope.rev = list._rev;
			$scope.albums = list.albums;
			$scope.title = list.title;
		});
		$scope.deleteThisList = function(){
			ListFactory.deleteList($scope.id,$scope.rev).then(function(){
				$location.url('/all');
			});
		};
	}
);
