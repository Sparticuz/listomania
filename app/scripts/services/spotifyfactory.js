'use strict';

/**
 * @ngdoc service
 * @name listomaniaApp.SpotifyFactory
 * @description
 * # SpotifyFactory
 * Factory in the listomaniaApp.
 */
angular.module('listomaniaApp')
	.factory('SpotifyFactory', function ($http) {
		var BASE_URL = 'https://api.spotify.com/v1/';
		var API_KEY = '';
		// Public API here
		return {
			getSpotifyLink: function (album,artist) {
				var METHOD = 'search?q=';
				return $http.get(BASE_URL+API_KEY+METHOD+'album:'+album+'%20artist:'+artist+'&type=album')
					.success(function(data){
						console.log(data);
						return data;
				});
			}
		};
	});
