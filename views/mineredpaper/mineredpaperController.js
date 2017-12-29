angular.module('app')
	.controller('mineredpaperController',['$scope','$state',function($scope,$state){
		$scope.goState = function(stateName){
			$state.go(stateName);
		};

		$scope.redpaperdata = [
			{imgsrc:'./images/rb3x.png'}
		];
	}])