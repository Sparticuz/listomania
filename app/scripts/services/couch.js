'use strict';

/**
 * @ngdoc function
 * @name topAlbumsApp.services:resource
 * @description
 * # couch factory
 * Factory of the topAlbumsApp
 */

angular.module('topAlbumsApp')
	.provider('List', function () {
		this.$get = ['$resource', function($resource){
			var List = $resource('http://localhost:5984/list/:_id', {},{
				update: {
					method: 'PUT'
				}
			});
			return List;
		}];
	}
);
