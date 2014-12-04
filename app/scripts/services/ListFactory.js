'use strict';

/**
 * @ngdoc function
 * @name topAlbumsApp.services:getList
 * @description
 * # couch factory
 * Factory of the topAlbumsApp
 */

angular.module('topAlbumsApp')
	.factory('ListFactory', function ($http) {
		var factory = {};
		factory.getList = function() {
			return $http.get('http://localhost:5984/lists/a4d78c7a7ef976b8ded05f4a23034a9a')
				.success(function(data){
					return data;
				});
		};
		factory.getTitle = function(){
			return 'Title';
		};
		factory.getAwesome = function(){
			var awesomeThings = ['thing1','thing2','thing3'];
			return awesomeThings;
		};
		return factory;
	}
);
