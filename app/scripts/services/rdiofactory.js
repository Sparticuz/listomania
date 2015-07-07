'use strict';

/**
 * @ngdoc service
 * @name listomaniaApp.RdioFactory
 * @description
 * # RdioFactory
 * Factory in the listomaniaApp.
 */
angular.module('listomaniaApp')
	.factory('RdioFactory', function () {
		//var BASE_URL = 'http://api.rdio.com/1/';
		//var API_KEY = '&keys=zkyums32wsy6hsu9ud2u4qgy&method=get';
		// Public API here
		return {
			/*getRdioLink: function (album,artist) {
				var METHOD = '&type=album';
				return $http({
						method: "get",
						url: BASE_URL,
						headers: {'Content-Type': 'application/x-www-form-urlencoded'},
						data: $.param({
							keys: 'zkyums32wsy6hsu9ud2u4qgy',
							method: 'Album'
						})
					})
					.success(function(data){
						console.log(data);
						return data;
				});*/
			getAlbumLink: function (album,artist){
				return 'http://www.rdio.com/artist/'+artist+'/album/'+album+'/';
			}
		};
	});
