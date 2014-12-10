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
		var TABLE = 'lists/';
		//Public API
		return {
			getList : function(id) {
				return $http.get(BASE_URL+TABLE+id)
				.success(function(data){
					return data;
				});
			},
			putList : function(item){
				return $http.post(BASE_URL+TABLE,item)
				.success(function(data){
					console.log(data);
					return data;
				});
			},
			deleteList : function(id,rev){
				return $http.delete(BASE_URL+TABLE+id+'?rev='+rev)
				.success(function(data){
					console.log(data);
					return data;
				});
			},
			allLists : function(){
				return $http.get(BASE_URL+TABLE+'_all_docs')
				.success(function(data){
					return data;
				});
			}
		};
	});
