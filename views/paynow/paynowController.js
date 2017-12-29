angular.module('app')
	.controller('paynowController',['$scope','$state','$stateParams',function($scope,$state,$stateParams){

		$scope.order = $stateParams.order == [] ? [] : JSON.parse($stateParams.order);
		$scope.allMoney = $stateParams.allMoney == [] ? 0 : $stateParams.allMoney;

		$scope.goState = function(stateName){
			$state.go(stateName);
		};

		$scope.psdvalue = '';
		$scope.psdLength = 0;
		$scope.changepsd = function(psdvalue){
			$scope.psdvalue = psdvalue;
			$scope.psdLength = psdvalue.length;
		};

		$scope.goPaysuccess = function(){
			if($scope.psdLength === 6){
				$state.go('paysuccess');
			}else{
				alert('请输入正确的密码');
			}
			
		}
	}])