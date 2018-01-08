angular.module('app')
	.factory('BombBox',['$ionicPopup','$ionicLoading',function($ionicPopup,$ionicLoading){
		return{
			//警告框
			warBox: function(msg){
				$ionicPopup.show({
				    template: '<div class="text-center">' + msg + '</div>',
				    buttons: [
				      { text: '确认' }
				    ]
				});
			},
			//加载动作
			loadingShow: function(){
				$ionicLoading.show({
      				template: '<ion-spinner icon="spiral" class="spinner-balanced"></ion-spinner>'
      			})
			},

			loadingHide: function(){
				$ionicLoading.hide();
			},
			//修改昵称
			writeBox: function(scope,fn){
				$ionicPopup.show({
				    template: '<input type="text" autofocus="true" ng-model="val" />',
				    title: '请输入昵称',
				    scope: scope,
				    buttons: [
				      { text: '取消' },
				      {
				        text: '<b>保存</b>',
				        type: 'button-balanced',
				        onTap: fn
				      }
				    ]
			    });
			}

		}
	}])