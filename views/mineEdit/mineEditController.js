angular.module('app')
	.controller('mineEditController',['$rootScope','$scope','ActionSheet','BombBox','Modal',function($rootScope,$scope,ActionSheet,BombBox,Modal){

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
		
		$scope.val = {
			name: 'niub'
		};
	 	Modal.initModal($scope);
		$scope.showNickNameModal = function(){
			Modal.openModal($scope);
		};

		$scope.modifyNickname = function(){
			Modal.closeModal($scope);
			console.log('$scope.val',$scope.val);
		}

	}])