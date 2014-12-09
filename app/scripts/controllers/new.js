'use strict';

/**
 * @ngdoc function
 * @name topAlbumsApp.controller:NewCtrl
 * @description
 * # NewCtrl
 * Controller of the topAlbumsApp
 */
angular.module('topAlbumsApp')
	.controller('NewCtrl', function ($scope) {
		$scope.albums = [{
			'album':'Test',
			'artist':'Artist',
			'thumb':'http://placehold.it/150x150'
		}];
		$scope.addRow = function(){
			$scope.albums.push({'album':'','thumb':'http://placehold.it/150x150'});
		};
	});
