angular.module('app')
	.factory('BombBox',['$ionicPopup',function($ionicPopup){
		return{
			warBox: function(msg){
				$ionicPopup.show({
				    template: '<div class="text-center">' + msg + '</div>',
				    buttons: [
				      { text: '确认' }
				    ]
				});
			}


		}
	}])