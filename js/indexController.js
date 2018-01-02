angular.module('app')
	.controller('indexController',['$rootScope',function($rootScope){
		$rootScope.goState =function(stateName){
			$state.go(stateName);
		};
	}])