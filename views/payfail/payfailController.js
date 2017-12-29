angular.module('app')
	.controller('payfailController',['$scope','$state',function($scope,$state){

		$scope.goState = function(stateName){
			$state.go(stateName);
		};

	}])