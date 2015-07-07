'use strict';

/**
 * @ngdoc overview
 * @name listomaniaApp
 * @description
 * # listomaniaApp
 *
 * Main module of the application.
 */
angular
	.module('listomaniaApp', [
		'ngAnimate',
		'ngCookies',
		'ngResource',
		'ngRoute',
		'ngSanitize',
		'ngTouch',
		'ui.sortable'
	])
	.config(function ($routeProvider, $locationProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'views/main.html',
				controller: 'MainCtrl'
			})
			.when('/login/:token', {
				controller: 'LoginCtrl'
			})
			.when('/:username', {
				templateUrl: 'views/user.html',
				controller: 'UserCtrl'
			})
			.when('/:username/new', {
				templateUrl: 'views/new.html',
				controller: 'NewCtrl'
			})
			.when('/:username/:id', {
				templateUrl: 'views/view.html',
				controller: 'ViewCtrl'
			})
			.when('/:username/:id/delete',{
				templateUrl: 'views/delete.html',
				controller: 'DeleteCtrl'
			})
			.when('/:username/:id/edit',{
				templateUrl: 'views/new.html',
				controller: 'EditCtrl'
			})
			.otherwise({
				redirectTo: '/'
			});
		//turn the following on for live
		$locationProvider.html5Mode(true);
	})
	.run(function($rootScope){
		$rootScope.$on('$routeChangeSuccess',function(ev,data){
			//$$ variables are considered private by Angular
			//this may not work in versions other than 1.3.5
			if(data.$$route && data.$$route.controller) {
				$rootScope.controller = data.$$route.controller;
			}
		});
	});
