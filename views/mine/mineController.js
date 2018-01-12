angular.module('app')
	.controller('mineController',['$rootScope','$scope','$state',function($rootScope,$scope,$state){
		console.log(11);
		$scope.hasLogin = false;
		function isrequireLogin(){
			if($rootScope.userinfor.isLogin == 1){
				$scope.hasLogin = true;
			}else{
				$scope.hasLogin = false;
			}
		}
		isrequireLogin();

		
	}])