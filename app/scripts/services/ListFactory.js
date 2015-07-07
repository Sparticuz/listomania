'use strict';

/**
 * @ngdoc service
 * @name listomaniaApp.ListFactory
 * @description
 * # ListFactory
 * Factory in the listomaniaApp.
 */
angular.module('listomaniaApp')
	.factory('ListFactory', function ($http) {
		var factory = {};

		var BASE_URL = 'http://apollo.kmcnally.net:5984/';
		var TABLE = 'lists/';

		//Public API
		factory.getList = function(id,user) {
			user = (typeof user === 'undefined') ? 'none' : user;
			return $http.get(BASE_URL+TABLE+id)
			.success(function(data){
				return data;
			});
		};
		factory.putList = function(item){
			return $http.post(BASE_URL+TABLE,item)
			.success(function(data){
				console.log(data);
				return data;
			});
		};
		factory.deleteList = function(id,rev){
			return $http.delete(BASE_URL+TABLE+id+'?rev='+rev)
			.success(function(data){
				console.log(data);
				return data;
			});
		};
		factory.putUser = function(username,token){
			return $http({
				url: BASE_URL+'_users/org.couchdb.user:'+username,
				method: 'PUT',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json'
				},
				data: {
					'name': username,
					'password': token,
					'roles': [],
					'type': 'user'
				}
			})
			.success(function(data){
				console.log('User Created');
				console.log(data);
				return data;
			});
		};
		factory.getUser = function(username,token){
			return $http.get(BASE_URL+'_users/org.couchdb.user:'+username).success(function(data){
				//user already exists
				//log them in
				console.log('6 - User Found');
				return data;
			})
			.error(function(data){
				console.log('6 - User Not Found');
				console.log(data);
				if(data.error === 'not_found'){
					return factory.putUser(username,token).success(function(data){
						//user has been successfully created
						//log them in
						return data;
					})
					.error(function(data){
						//user creation failed
						return data;
					});
				}
			});
		};
		factory.allLists = function(){
			var METHOD = '_design/all/_view/getLists';
			return $http.get(BASE_URL+TABLE+METHOD)
			.success(function(data){
				return data;
			});
		};
		factory.getUserLists = function(user){
			var METHOD = '_design/lists/_view/user?key="'+user+'"';
			return $http.get(BASE_URL+TABLE+METHOD).success(function(data){
				return data;
			});
		};
	return factory;
});
