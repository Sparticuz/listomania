'use strict';

/**
 * @ngdoc function
 * @name topAlbumsApp.controller:NewCtrl
 * @description
 * # NewCtrl
 * Controller of the topAlbumsApp
 */
angular.module('topAlbumsApp')
	.controller('NewCtrl', function ($scope,$location,ListFactory,LastFmFactory) {
		$scope.list = {};
		$scope.list.albums = [{
			'album':'Anomaly',
			'artist':'Test Artist',
			'comment':'Test Comment',
			'cover':'http://placehold.it/132x132'
		}];
		$scope.addRow = function(){
			$scope.list.albums.push({
				'album':'',
				'artist':'',
				'comment':'',
				'cover':'http://placehold.it/132x132'
			});
		};
		$scope.processList = function() {
			angular.forEach($scope.list.albums, function(value,key){
				//remove blank's
				if(value.album === '' && value.artist === ''){
					$scope.list.albums.splice(key,1);
				}
			});
			ListFactory.putList($scope.list).then(function(data){
				$location.url('/view/'+data.data.id);
			});
		};
		$scope.getAlbumArt = function(index){
			LastFmFactory.getInfo($scope.list.albums[index].album,$scope.list.albums[index].artist)
				.then(function(data){
					console.log(data);
					$scope.list.albums[index].album = data.data.album.name;
					$scope.list.albums[index].artist = data.data.album.artist;
					var entry;
					for(var n=0;n<data.data.album.image.length;++n){
						entry = data.data.album.image[n];
						if (entry.size === 'mega'){
							$scope.list.albums[index].cover = entry['#text'];
						}
					}
				});
		};
	});
