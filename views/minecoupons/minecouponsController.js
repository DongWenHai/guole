angular.module('app')
	.controller('minecouponsController',['$scope','$state','$ionicSlideBoxDelegate',function($scope,$state,$ionicSlideBoxDelegate){

		$scope.goState = function(stateName){
			$state.go(stateName);
		};

		$scope.couponsdata = [
			{imgsrc:'./images/1use3x.png'},
			{imgsrc:'./images/2use3x.png'},
		];

		$scope.couponsouttimedata = [
			{imgsrc:'./images/1over3x.png'},
			{imgsrc:'./images/2over3x.png'},
		];
		
		$scope.index = 0;
		$scope.indexIsZone = true;
		$scope.onSlideChanged = function(index){
			$scope.index = index;
			if($scope.index == 1){
				$scope.indexIsZone = false;
			}else{
				$scope.indexIsZone = true;
			}
		};

		$scope.toggolIndex = function(index){
			$scope.onSlideChanged(index);
		}
	}])