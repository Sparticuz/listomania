'use strict';

/**
 * @ngdoc service
 * @name topAlbumsApp.ListFactory
 * @description
 * # ListFactory
 * Factory in the topAlbumsApp.
 */
angular.module('topAlbumsApp')
	.factory('ListFactory', function ($http) {
		var BASE_URL = 'http://apollo.kmcnally.net:5984/';
		//Public API
		return {
			getList : function(id) {
				var METHOD = 'lists/';
				return $http.get(BASE_URL+METHOD+id)
				.success(function(data){
					return data;
				});
			}
		};
	});
