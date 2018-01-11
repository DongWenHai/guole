angular.module('app')
	.controller('productdetailController',['$rootScope','$scope','$state','$stateParams','API','BombBox',function($rootScope,$scope,$state,$stateParams,API,BombBox){

		$scope.data = '';
		function getProductData(){
			API.fetchGet('http://127.0.0.1:9000/getproduct',{pid: $stateParams.pid,uid: $rootScope.userinfor.uid})
				.then(function(data){
					$scope.data = data.data;
					$rootScope.addProduct.uid = $rootScope.userinfor.uid;
					$rootScope.addProduct.pid = $stateParams.pid;
					$rootScope.addProduct.pname = $scope.data.product[0].name;
					$rootScope.addProduct.count = $scope.productNumb;
					$rootScope.addProduct.address = $scope.data.address[0].defaultaddress;
					$rootScope.addProduct.code = $scope.data.address[0].code;
					$rootScope.addProduct.imgsrc = $scope.data.product[0].imgsrc;
				})
				.catch(function(err){
					console.log(err);
				})
		}
		getProductData();

		
		//选择商品数量
		$scope.productNumb = 1;
		$scope.$watch('productNumb',function(newValue, oldValue){
			$rootScope.addProduct.count = newValue;
		});
		$scope.increaseNumb = function(){
			$scope.productNumb = parseInt($scope.productNumb) + 1;
		};

		$scope.decreaseNumb = function(){
			if($scope.productNumb >1){
				$scope.productNumb = $scope.productNumb -1;
			}else{
				$scope.productNumb = 1;
			}
		};
	}])
