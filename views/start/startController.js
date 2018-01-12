angular.module('app')
	.controller('startController',['$rootScope','$state',function($rootScope,$state){
		function initIndex(){
			console.log($rootScope.userinfor.isLogin);
			if($rootScope.userinfor.isLogin == 1){
				console.log(22);
				$state.go('footer.home');
			}
		};
		initIndex();
	}])