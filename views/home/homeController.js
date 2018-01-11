angular.module('app')
	.controller('homeController',['$rootScope','$scope', '$state','$http','API','BombBox',function($rootScope,$scope,$state,$http,API,BombBox){
		//init home data
		$scope.data = {};

		function initdata(){
			BombBox.loadingShow();
			API.fetchGet('http://127.0.0.1:9000/home')
				.then(function(data){
					BombBox.loadingHide();
					$scope.data = data.data;
					selectproduct();
				})
				.catch(function(err){
					BombBox.loadingHide();
					console.log(err);
				})
		}
		initdata();

		function selectproduct(){
			$scope.hotproducts = [];
			$scope.necessaryProducts = [];
			$scope.fashionProduct = [];
			for(var i=0;i<$scope.data.products.length;i++){
				if($scope.data.products[i].cSign == '1000'){
					$scope.hotproducts.push($scope.data.products[i]);
				}else if($scope.data.products[i].cSign == '1001'){
					$scope.necessaryProducts.push($scope.data.products[i]);
				}else if($scope.data.products[i].cSign == '1002'){
					$scope.fashionProduct.push($scope.data.products[i]);
				}
			}
		};

		//header button control
		$scope.muneSelected = false;
		$scope.muneselect = function(){
			$scope.muneSelected = $scope.muneSelected == false ? true : false;
		};
		//banner
		$scope.banner = {
			doesContinue: "true",
			autoPlay: "true",
			slideInterval: "2000"
		};

		$scope.goProductDetail = function(pid){
			if($rootScope.userinfor.isLogin == 1){
				$state.go('product.productdetail', {pid: pid});
			}else{
				$state.go('login', {pid: pid});
			}			
		}

	}])