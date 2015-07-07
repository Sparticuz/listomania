'use strict';

/**
 * @ngdoc function
 * @name listomaniaApp.controller:ViewCtrl
 * @description
 * # ViewCtrl
 * Controller of the listomaniaApp
 */
angular.module('listomaniaApp')
	.controller('ViewCtrl', function ($scope,$routeParams,$location,ListFactory) {
		//get all the lists
		ListFactory.getUserLists($routeParams.username).then(function(data){
			//set the number of colums with data.total_rows
			$scope.totalLists = data.data.rows.length;
			$scope.listClass = Math.floor(12/$scope.totalLists);
			$scope.lists = data.data.rows;
			$scope.alias = $routeParams.username;
		});
		//build the list
		ListFactory.getList($routeParams.id).then(function(data){
			var list = data.data;
			$scope.id = list._id;
			$scope.rev = list._rev;
			$scope.albums = list.albums;
			$scope.title = list.title;
			$scope.avatar = list.avatar;
			$scope.alias = list.alias;
		});
		$scope.isActive = function(route){
			return route === $location.path();
		};
		$scope.deleteThisList = function(){
			ListFactory.deleteList($scope.id,$scope.rev).then(function(){
				$location.url('/'+$routeParams.username);
			});
		};
		$scope.editThisList = function(){
			console.log('edit');
			$location.url('/'+$scope.alias+'/'+$scope.id+'/edit');
		};
	}
);
