angular.module('app')
	.controller('mineEditController',['$scope','$state','ActionSheet','BombBox',function($scope,$state,ActionSheet,BombBox){
		$scope.goState = function(stateName){
			$state.go(stateName);
		};

		$scope.openSheet = function () {
			var closeSheet = ActionSheet.showSheet({
				cancle: '<span class="dark">取消</span>',
				typeone: '<span class="dark">拍照</span>',
				typetwo: '<span class="dark">本地上传</span>',
				success: function (index) {
					closeSheet();
				}
			});
		};

		$scope.val = '123456';
		$scope.showWriteBox = function(){
			BombBox.writeBox($scope, function(e){
				console.log($scope.val);
			})
		}
	}])