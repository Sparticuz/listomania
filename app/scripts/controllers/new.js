'use strict';

/**
 * @ngdoc function
 * @name topAlbumsApp.controller:NewCtrl
 * @description
 * # NewCtrl
 * Controller of the topAlbumsApp
 */
angular.module('topAlbumsApp')
	.controller('NewCtrl', function ($scope,LastFmFactory) {
		$scope.albums = [{
			'album':'Anomaly',
			'artist':'Test Artist',
			'comment':'Test Comment',
			'cover':'http://placehold.it/150x150'
		}];
		$scope.addRow = function(){
			$scope.albums.push({
				'album':'',
				'artist':'',
				'comment':'',
				'cover':'http://placehold.it/150x150'
			});
		};
		$scope.getAlbumArt = function(index){
			LastFmFactory.getInfo($scope.albums[index].album,$scope.albums[index].artist)
				.then(function(data){
					console.log(data);
					$scope.albums[index].album = data.data.album.name;
					$scope.albums[index].artist = data.data.album.artist;
					var entry;
					for(var n=0;n<data.data.album.image.length;++n){
						entry = data.data.album.image[n];
						if (entry.size === 'large'){
							$scope.albums[index].cover = entry['#text'];
						}
					}
				});
		};
	});
