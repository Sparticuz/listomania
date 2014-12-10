'use strict';

/**
 * @ngdoc overview
 * @name topAlbumsApp
 * @description
 * # topAlbumsApp
 *
 * Main module of the application.
 */
angular
	.module('topAlbumsApp', [
		'ngAnimate',
		'ngCookies',
		'ngResource',
		'ngRoute',
		'ngSanitize',
		'ngTouch'
	])
	.config(function ($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'views/main.html',
				controller: 'MainCtrl'
			})
			.when('/view/:id', {
				templateUrl: 'views/view.html',
				controller: 'ViewCtrl'
			})
			.when('/new', {
				templateUrl: 'views/new.html',
				controller: 'NewCtrl'
			})
			.when('/all',{
				templateUrl: 'views/all.html',
				controller: 'AllCtrl'
			})
			.otherwise({
				redirectTo: '/'
			});
	}
);
