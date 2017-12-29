angular.module('app')
	.controller('confirmpayController',['$scope','$state','$stateParams','$ionicHistory',function($scope,$state,$stateParams,$ionicHistory){
		
		$scope.goState = function(stateName){
			$state.go(stateName);			
		};
		$scope.confirmdata = $stateParams.confirm == [] ? [] : JSON.parse($stateParams.confirm);

		$scope.realpay = function(){
			var m=0;
			for(var i=0;i<$scope.confirmdata.length;i++){
				m = m + parseInt($scope.confirmdata[i].price*$scope.confirmdata[i].numb);
			}
			return m;
		};
		$scope.distributionFee = '0.00';
		$scope.realpayMoney = $scope.realpay();
		$scope.shouldpay = parseInt($scope.distributionFee) + parseInt($scope.realpayMoney);

		$scope.ison = true;

		$scope.value = 0;

		$scope.goPaynow = function(){
			$state.go('paynow',{order: $stateParams.confirm,allMoney: $scope.shouldpay});
		}
	}])