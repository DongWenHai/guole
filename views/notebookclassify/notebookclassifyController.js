angular.module('app')
	.controller('notebookclassifyController',['$scope','$state',function($scope,$state){
		$scope.goState = function(stateName){
			$state.go(stateName);
		};

		$scope.notebookclassifydata = [
			{
				imgsrc:'./images/lizone@3x.png',
				name:'QC2.0 微软笔记本快冲'
			},
			{
				imgsrc:'./images/app_c@3x.png',
				name:'苹果2.66万毫安快冲'
			},
			{
				imgsrc:'./images/NEJIFU@3x.png',
				name:'NEJIFU 5万毫安电脑电源'
			},
			{
				imgsrc:'./images/vinsic@3x.png',
				name:'vinsic 3万毫安大容量充电宝'
			},
			{
				imgsrc:'./images/HDMI@3x.png',
				name:'NEJIFU 5万毫安电脑电源'
			},
			{
				imgsrc:'./images/-Stack@3x.png',
				name:'insic 3万毫安大容量充电宝'
			}
		]
	}])