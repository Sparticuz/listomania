'use strict';

/**
 * @ngdoc service
 * @name listomaniaApp.LastFmFactory
 * @description
 * # LastFmFactory
 * Factory in the listomaniaApp.
 */
angular.module('listomaniaApp')
	.factory('LastFmFactory', function ($http) {
		var BASE_URL = 'http://ws.audioscrobbler.com/2.0/?format=json';
		var API_KEY = '&api_key=86abf4a68ab5a773a2ceaed922ac72be';
		// Public API here
		return {
			getInfo: function (album,artist) {
				var METHOD = '&method=album.getInfo';
				return $http.get(BASE_URL+API_KEY+METHOD+'&artist='+artist+'&album='+album+'&autocorrect=1').success(function(data){
					console.log(data);
					return data;
				});
			}
		};
	});
