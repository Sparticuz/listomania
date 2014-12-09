'use strict';

/**
 * @ngdoc function
 * @name topAlbumsApp.services:ListFactory
 * @description
 * # couch factory
 * Factory of the topAlbumsApp
 */

angular.module('topAlbumsApp')
	.factory('ListFactory', function ($http) {
		var factory = {};
		factory.getList = function(id) {
			return $http.get('http://apollo.kmcnally.net:5984/lists/'+id)
				.success(function(data){
					return data;
				});
		};
		return factory;
	}
);
