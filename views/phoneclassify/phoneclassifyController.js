angular.module('app')
	.controller('phoneclassifyController',['$scope','$state',function($scope,$state){
		$scope.goState = function(stateName){
			$state.go(stateName);	
		};
		$scope.phonedata = [
				{
					imgsrc:'./images/US_M@3x.png',
					name:'USB多口移动冲'
				},
				{
					imgsrc:'./images/us_six@3x.png',
					name:'USB多口六输出'
				},
				{
					imgsrc:'./images/p-17@3x.png',
					name:'笔记本p-17电源'
				},
				{
					imgsrc:'./images/classy1@3x.png',
					name:'classy1豆豆版'
				},
				{
					imgsrc:'./images/office4@3x.png',
					name:'office4 电霸版'
				},
				{
					imgsrc:'./images/gun@3x.png',
					name:'弹夹式移动电源'
				},{
					imgsrc:'./images/yn-026@3x.png',
					name:'YN-026移动电源'
				},
				{
					imgsrc:'./images/outside@3x.png',
					name:'户外储存电源'
				},
				{
					imgsrc:'./images/EC2.0@3x.png',
					name:'高通EC2.0'
				},
				{
					imgsrc:'./images/office3@3x.png',
					name:'office3 商旅版'
				},
				{
					imgsrc:'./images/classy2@3x.png',
					name:'classy2小锁版 '
				},
				{
					imgsrc:'./images/yn-006@3x.png',
					name:'YN-006手机移动电源'
				}
		];
	}])