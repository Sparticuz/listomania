'use strict';

/**
 * @ngdoc directive
 * @name listomaniaApp.directive:imageonload
 * @description
 * # imageonload
 */
angular.module('listomaniaApp')
	.directive('imageonload', function () {
		return {
			restrict: 'A',
			link: function(scope, element, attrs) {
				element.bind('load',function(){
					console.log('test');
					scope.$apply(attrs.imageonload);
				});
			}
		};
	});
