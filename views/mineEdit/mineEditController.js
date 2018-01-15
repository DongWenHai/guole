angular.module('app')
	.controller('mineEditController',['$rootScope','$scope','ActionSheet','BombBox','Modal','API',function($rootScope,$scope,ActionSheet,BombBox,Modal,API){

		$scope.modalControl = {
			title: '请输入昵称',
			isnickname: true,
			issex: false
		}

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
			name: 'niub',
			sex: ''
		};
	 	Modal.initModal($scope, './template/nicknamemodal.html');
		$scope.showNickNameModal = function(){
			$scope.modalControl.title = "请输入昵称";
			$scope.modalControl.isnickname = true;
			$scope.modalControl.issex = false;
			Modal.openModal($scope);
		};
		$scope.closeModal = function(){
			Modal.closeModal($scope);
		};
		$scope.modifyNickname = function(){			
			API.fetchGet('http://127.0.0.1:9000/modifyNickname', {uid: $rootScope.userinfor.uid, nickname: $scope.val.name})
				.then(function(data){
					if(data.data.statusCode == 700){
						Modal.closeModal($scope);
					}else{
						BombBox.warBox(data.data.msg);
					}
				})
				.catch(function(err){
					console.log(err);
				})
		};

		$scope.showSexModal = function(){
			$scope.modalControl.title = "请选择性别";
			$scope.modalControl.isnickname = false;
			$scope.modalControl.issex = true;

			Modal.openModal($scope);
		};

		$scope.modifySex = function(){
			API.fetchGet('http://127.0.0.1:9000/modifySex', {uid: $rootScope.userinfor.uid, sex: $scope.val.sex})
				.then(function(data){
					if(data.data.statusCode == 800){
						Modal.closeModal($scope);
					}else{
						BombBox.warBox(data.data.msg);
					}
				})
				.catch(function(err){
					console.log(err);
				})
		}

	}])