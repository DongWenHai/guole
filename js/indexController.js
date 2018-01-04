angular.module('app')
	.controller('indexController',['$rootScope','$state',function($rootScope,$state){
		$rootScope.goState =function(stateName){
			$state.go(stateName);
		};
	}])