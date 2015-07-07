'use strict';

/**
 * @ngdoc function
 * @name listomaniaApp.controller:NewCtrl
 * @description
 * # EditCtrl
 * Controller of the listomaniaApp
 */
angular.module('listomaniaApp')
	.controller('EditCtrl', function ($scope,$location,ListFactory,LastFmFactory,RdioFactory,SpotifyFactory,$routeParams) {
		ListFactory.getList($routeParams.id).then(function(data){
			$scope.list = data.data;
			console.log($scope.list);
		});
		$scope.showAdvanced = function(){
			jQuery('.secondary-fields').toggle(1000,'swing');
		};
		$scope.addRow = function(){
			$scope.list.albums.push({
				'album':'',
				'artist':'',
				'cover':'http://placehold.it/145x145'
			});
		};
		$scope.removeItem = function(index){
			$scope.list.albums.splice(index,1);
		};
		$scope.processList = function() {
			angular.forEach($scope.list.albums, function(value,key){
				//remove blank's
				if(value.album === '' && value.artist === ''){
					$scope.list.albums.splice(key,1);
				}
			});
			ListFactory.putList($scope.list).then(function(data){
				$location.url('/'+$scope.list.alias+'/'+data.data.id);
			});
		};
		$scope.getAlbumArt = function(index){
			LastFmFactory.getInfo($scope.list.albums[index].album,$scope.list.albums[index].artist)
				.then(function(data){
					console.log(data);
					$scope.list.albums[index].album = data.data.album.name;
					$scope.list.albums[index].artist = data.data.album.artist;
					/*var entry;
					for(var n=0;n<data.data.album.image.length;++n){
						entry = data.data.album.image[n];
						if (entry.size === 'extralarge'){
							$scope.list.albums[index].cover = entry['#text'];
						}
					}*/
					$scope.getRdioLink(index);
					$scope.getSpotifyLink(index);
				}
			);
		};
		$scope.getRdioLink = function(index){
			$scope.list.albums[index].rdio = RdioFactory.getAlbumLink($scope.list.albums[index].album,$scope.list.albums[index].artist);
		};
		$scope.getSpotifyLink = function(index){
			SpotifyFactory.getSpotifyLink($scope.list.albums[index].album,$scope.list.albums[index].artist)
				.then(function(data){
					$scope.list.albums[index].spotify = data.data.albums.items[0].external_urls.spotify;
					$scope.list.albums[index].cover = data.data.albums.items[0].images[0].url;
					$scope.getColors(data.data.albums.items[0].images[0].url,index);
				});
		};
		$scope.getColors = function(image,index){
			var img = document.createElement('img');
			img.onload = function () {
				function componentToHex(c){
					var hex = c.toString(16);
					return hex.length===1?'0'+hex:hex;
				}
				function rgbToHex(r,g,b){
					return '#'+componentToHex(r)+componentToHex(g)+componentToHex(b);
				}
				var colorThief = new ColorThief();
				var ct = colorThief.getPalette(img);
				$scope.list.albums[index].primaryColor = rgbToHex(ct[0][0],ct[0][1],ct[0][2]);
				$scope.list.albums[index].secondaryColor = rgbToHex(ct[1][0],ct[1][1],ct[1][2]);
				$scope.setColors(index);
			};
			img.onerror = function () {
				console.log('Image Not Loaded');
				console.log(image);
			};
			img.crossOrigin = 'Anonymous';
			img.src = image;
		};
		$scope.setColors = function(index){
			var album = jQuery('#album'+index);
			album.css('background-color', $scope.list.albums[index].primaryColor);
			album.css('color', $scope.list.albums[index].secondaryColor);
		};
	});
