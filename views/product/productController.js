angular.module('app')
	.controller('productController',['$rootScope','$scope','$state','API','BombBox',function($rootScope,$scope,$state,API,BombBox){
		$scope.isActive = {
			one: false,
			two: true,
			three: true
		};
		$scope.changePage = function(n){
			if(n == 1){
				$state.go('product.productdetail');
				$scope.isActive = {
							one: false,
							two: true,
							three: true
						};
			}else if(n == 2){
				$state.go('product.productinformation');
				$scope.isActive = {
							one: true,
							two: false,
							three: true
						};
			}
		};

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
		};

		$scope.addProductToCar = function(){
			API.fetchGet('http://127.0.0.1:9000/addProductToCar', $rootScope.addProduct)
				.then(function(data){
					BombBox.warBox(data.data.msg);
				})
				.catch(function(err){
					console.log(err);
				})
		}
	}])
