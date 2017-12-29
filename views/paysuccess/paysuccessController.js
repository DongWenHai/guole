angular.module('app')
	.controller('paysuccessController',['$scope','$state',function($scope,$state){

		$scope.goState = function(stateName){
			$state.go(stateName);
		};

	}])